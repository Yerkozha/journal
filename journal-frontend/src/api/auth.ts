import { APIResponceType, instance, instancePublic } from './api'

export interface User {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
}

export type RefreshType = {
    jwt: string;
    refreshToken: string;
}

export const authAPI = {
    login(identifier: string, password: string) {
        return instance.post<APIResponceType<User>>('auth/local/', { identifier, password })
    },
    refreshToken(){
        return instancePublic.post<RefreshType>('token/refresh', {} , {
            withCredentials: true
        })
    },
    logout(){
        return instance.post('auth/logout/')
    }
}