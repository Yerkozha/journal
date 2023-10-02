import { APIResponceType, instance } from './api'



export const authAPI = {
    login(username: string, password: string) {
        return instance.post<APIResponceType<object>>('auth/login/', { username, password })
    }
}