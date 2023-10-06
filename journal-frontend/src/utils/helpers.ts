import {  AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { instance } from 'src/api/api';
import { authAPI } from 'src/api/auth';
import { getRefreshToken } from 'src/redux/reducers/auth-reducer';
import { getJWT } from 'src/redux/reducers/selectors/auth-selector';

type CustomError = {
    sent: boolean
}

export const useInterceptors = () => {

    const JWT = useSelector(getJWT);
    const dispatch = useDispatch();

    async function getRefreshTokenTemp<T extends AxiosRequestConfig & CustomError>(config: T): Promise<T> {
    
        config.sent = true;
        // @ts-ignore
        const data = await dispatch(getRefreshToken())
        
        if(config.headers)
            config.headers['Authorization'] = `Bearer ${data.jwt}`;
    
        return config
    }

    useEffect(() => {
        
        const reqIdIntercept = instance.interceptors.request.use((config) => {
            debugger
                if( !Object.getOwnPropertyDescriptor(config.headers, 'Authorization')?.value ) {
                    (config.headers as AxiosRequestHeaders)['Authorization'] = `Bearer ${JWT}`;
                }
                return config
            },
            (err) => {
                return Promise.reject(err)
            }
        )

        const resIdIntercept =  instance.interceptors.response.use((response) => {
            return response
        },
            async (err) => {
                debugger
                if (err.response) {
                    
                    
                    switch (err.response.status) {
                        case 400:
                            console.error('Bad request.');
                            break;
                        case 401:
                        case 403:
                            if( !err?.config.sent ) 
                                return await instance(await getRefreshTokenTemp(err?.config))
                            break;
                        case 404:
                            console.error('Resource not found.');
                            break;
                        case 500:
                            console.error('Internal server error.');
                            break;
                        case 503:
                            console.error('Service unavailable. The server is not ready to handle the request.');
                            break;
                        default:
                            console.error('An unexpected error occurred.');
                    }
                } else if (err.request) {
                    console.error('No response received from the server.');
                } 
        
                return Promise.reject(err);
            }
        );

        return () => {
            instance.interceptors.response.eject(resIdIntercept)
            instance.interceptors.request.eject(reqIdIntercept)
        }

    },[authAPI.refreshToken, JWT])
    
    return instance
}

