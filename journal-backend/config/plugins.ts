export default ({ env }) => ({
    'users-permissions': {
        enabled: true,
        config: {
            jwt: {
                expiresIn: env('JWT_SECRET_EXPIRES'),
            },
            register: {
                allowedFields: ["nickname"],
            },
        },
    },
});