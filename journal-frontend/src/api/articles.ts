import { APIResponceType, instance } from './api'

export type SingleArticle = {
    id: number;
    attributes: {
        title: string;
        content: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    }
}
export interface Articles  {
    data: SingleArticle[] | null;
    meta: {
        pagination: {
            page: number | null;
            pageSize: number | null;
            pageCount: number | null;
            total: number | null;
        }
    }
}

export const articlesAPI = {
    getArticles() {
        return instance.get<Articles>('articles/')
    },
    
}