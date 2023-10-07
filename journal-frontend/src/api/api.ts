import axios from 'axios'

export const instance = axios.create({
    baseURL: 'api/'
})
export const instancePublic = axios.create({
    baseURL: 'api/'
})

export type APIResponceType<D = {}> = {
    jwt: string
    user: D | {}
}