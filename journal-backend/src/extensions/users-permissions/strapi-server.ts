
import * as utils from '@strapi/utils';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import { validateCallbackBody } from '../users-permissions/controllers/validation/auth';
import { setMaxListeners } from 'process';

// @ts-ignore
const { sanitize } = utils;
// @ts-ignore
const { ApplicationError, ValidationError } = utils.errors;

interface User {
    id: number;
    password?: string;
    confirmed?: boolean;
    blocked?: boolean;
    email?: string;
    username?: string;
    toJSON?: Function;
}

interface Context {
    state: {
        auth: any;
    };
    params: {
        provider: string;
    };
    request: {
        body: any;
    };
    cookies: {
        set: Function;
        get: Function;
    };
    send: Function;
    query: any;
    badRequest: Function;
}
/**
 * @class AuthController
 * @description Handles authentication operations.
 */
class AuthController {
    plugin: any;

    constructor(plugin: any) {
        this.plugin = plugin;
    }

    /**
     * Sanitizes user object.
     * @param {Object} user - User object.
     * @param {Object} ctx - Context object.
     * @returns {Object} - Sanitized user object.
     */
    sanitizeUser(user: User, ctx: Context): unknown {
        const { auth } = ctx.state;
        const userSchema = strapi.getModel('plugin::users-permissions.user');
        return sanitize.contentAPI.output(user, userSchema, { auth });
    }

    /**
     * Issues a JSON web token.
     * @param {Object} payload - Payload for JWT.
     * @param {Object} jwtOptions - Options for JWT.
     * @returns {string} - JSON web token.
     */
    issueJWT(payload: any, jwtOptions: any = {}): string {
        _.defaults(jwtOptions, strapi.config.get('plugin.users-permissions.jwt'));
        return jwt.sign(
            _.clone(payload.toJSON ? payload.toJSON() : payload),
            strapi.config.get('plugin.users-permissions.jwtSecret'),
            jwtOptions
        );
    }

    /**
     * Verifies a refresh token.
     * @param {string} token - Refresh token.
     * @returns {Promise} - Resolves with token payload or rejects with error.
     */
    async verifyRefreshToken(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.REFRESH_SECRET!, {}, (err, tokenPayload = {}) => {
                if (err) {
                    return reject(new Error('Invalid token.'));
                }
                resolve(tokenPayload);
            });
        });
    }

    /**
     * Issues a refresh token.
     * @param {Object} payload - Payload for refresh token.
     * @param {Object} jwtOptions - Options for JWT.
     * @returns {string} - Refresh token.
     */
    issueRefreshToken(payload: any, jwtOptions: any = {}): string {
        _.defaults(jwtOptions, strapi.config.get('plugin.users-permissions.jwt'));
        return jwt.sign(
            _.clone(payload.toJSON ? payload.toJSON() : payload),
            process.env.REFRESH_SECRET!,
            { expiresIn: process.env.REFRESH_TOKEN_EXPIRES }
        );
    }

    /**
     * Override native auth method.
     */
    async callback(ctx: Context): Promise<void> {
        console.log(strapi.plugin('users-permissions').service('jwt'))
        const provider = ctx.params.provider || 'local';
        const params = ctx.request.body;
        const store = strapi.store({ type: 'plugin', name: 'users-permissions' });
        const grantSettings = await store.get({ key: 'grant' });
        const grantProvider = provider === 'local' ? 'email' : provider;
        if (!_.get(grantSettings, [grantProvider, 'enabled'])) {
            throw new ApplicationError('This provider is disabled');
        }
        if (provider === 'local') {
            await validateCallbackBody(params);
            const { identifier } = params;
            // Check if the user exists.
            const user = await strapi.query('plugin::users-permissions.user').findOne({
                where: {
                    provider,
                    $or: [{ email: identifier.toLowerCase() }, { username: identifier }],
                },
            });
            if (!user) {
                throw new ValidationError('Invalid identifier or password');
            }
            if (!user.password) {
                throw new ValidationError('Invalid identifier or password');
            }
            const validPassword = await strapi.plugin('users-permissions').service('user').validatePassword(
                params.password,
                user.password
            );
            if (!validPassword) {
                throw new ValidationError('Invalid identifier or password');
            } else {
                ctx.cookies.set("refreshToken", this.issueRefreshToken({ id: user.id }), {
                    httpOnly: true,
                    secure: false,
                    signed: true,
                    overwrite: true,
                });
                ctx.send({
                    status: 'Authenticated',
                    jwt: this.issueJWT({ id: user.id }, { expiresIn: process.env.JWT_SECRET_EXPIRES }),
                    user: await this.sanitizeUser(user, ctx),
                });
            }
            const advancedSettings = await store.get({ key: 'advanced' });
            const requiresConfirmation = _.get(advancedSettings, 'email_confirmation');
            if (requiresConfirmation && user.confirmed !== true) {
                throw new ApplicationError('Your account email is not confirmed');
            }
            if (user.blocked === true) {
                throw new ApplicationError('Your account has been blocked by an administrator');
            }

            return ctx.send({
                jwt: strapi.plugin('users-permissions').service('jwt').issue({ id: user.id }),
                user: await this.sanitizeUser(user, ctx),
            });
        }
        
        try {
            const user = await strapi.plugin('users-permissions').service('providers').connect(provider, ctx.query);
            return ctx.send({
                jwt: strapi.plugin('users-permissions').service('jwt').issue({ id: user.id }),
                user: await this.sanitizeUser(user, ctx),
            });
        } catch (error) {
            throw new ApplicationError(error.message);
        }
    }

    /**
     * 
     * Clear the HttpOnly cookie
     */
    async logout(ctx: Context) {
        console.log('LOGOUT!')
        ctx.cookies.set("refreshToken", null, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production", 
          maxAge: 1, 
          sameSite: 'strict'
        });
        ctx.send({ message: "Logged out successfully" });
    }

    /**
     * Add refresh strategy.
     */
    async refreshToken(ctx: Context): Promise<void> {
        console.log('REFRESH')
        const store = await strapi.store({ type: 'plugin', name: 'users-permissions' });
        const { refreshToken } = ctx.request.body;

        let refreshCookie = ctx.cookies.get("refreshToken")
        console.log(refreshToken, 'BODY')
        console.log(refreshCookie, 'COOKIE')
        if (!refreshCookie && !refreshToken) {
            return ctx.badRequest("No Authorization");
        }
        if (!refreshCookie) {
            if (refreshToken) {
                refreshCookie = refreshToken
            }
            else {

                return ctx.badRequest("No Authorization");
            }
        }
        try {
            console.log(refreshCookie, 'FIRED~!!!!!')
            const obj = await this.verifyRefreshToken(refreshCookie);
            console.log(obj, 'found')
            const user = await strapi.query('plugin::users-permissions.user').findOne({ where: { id: obj.id } });
            if (!user) {
                throw new ValidationError('Invalid identifier or password');
            }
            if (
                _.get(await store.get({ key: 'advanced' }), 'email_confirmation') &&
                user.confirmed !== true
            ) {
                throw new ApplicationError('Your account email is not confirmed');
            }
            if (user.blocked === true) {
                throw new ApplicationError('Your account has been blocked by an administrator');
            }
            const refreshToken = this.issueRefreshToken({ id: user.id })
            ctx.cookies.set("refreshToken", refreshToken, {
                httpOnly: true,
                secure: false,
                signed: true,
                overwrite: true,
            });
            ctx.send({
                jwt: this.issueJWT({ id: obj.id }, { expiresIn: process.env.JWT_SECRET_EXPIRES }),
                refreshToken: refreshToken,
            });
        }
        catch (err) {
            return ctx.badRequest(err.toString());
        }
    }
}

export default (plugin: any) => {
    const authController = new AuthController(plugin);
    
    plugin.controllers.auth.callback = authController.callback.bind(authController);
    plugin.controllers.auth['refreshToken'] = authController.refreshToken.bind(authController);
    plugin.controllers.auth['logout'] = authController.logout.bind(authController);
    
    plugin.routes['content-api'].routes.push({
        method: 'POST',
        path: '/token/refresh',
        handler: 'auth.refreshToken',
        config: {
            policies: [],
            prefix: '',
        }
    });
    plugin.routes['content-api'].routes.push({
        method: 'POST',
        path: '/auth/logout',
        handler: 'auth.logout',
        config: {
            policies: [],
            prefix: '',
        }
    });

    return plugin;
};
