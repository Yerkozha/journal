import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://apiarm.kazincombank.kz/api/v1/',
})

export type APIResponceType<D = {}> = {
    access: string
    refresh: string
    user: D
}