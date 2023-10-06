import { authAPI, RefreshType } from 'src/api/auth';
import { APIResponceType } from 'src/api/api';
import { BaseThunkType, InferActionsTypes } from '../redux-store';
import { Articles, articlesAPI } from 'src/api/articles';

let initialState: Articles = {
    data: null,
    meta: {
        pagination: {
            page: null,
            pageSize: null,
            pageCount: null,
            total: null,
        }
    }
};

export type InitialStateType = typeof initialState & Articles;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const articlesReducer = (state = initialState, action: ActionsType): InitialStateType => {
    
    switch (action.type) {
        case 'ARM_WEB/articles/GET_ARTICLES':
            return action.payload
        // case 'ARM_WEB/articles/SET_ARTICLES':
        //     return {
        //         ...state,
        //         jwt: action.jwt
        //     }
        default:
            return state;
    }
}

export const actions = {
    getArticles: <T extends Awaited<ReturnType<typeof articlesAPI.getArticles>>>( payload : T extends {data: infer V} ? V : never  ) => ({ type: 'ARM_WEB/articles/GET_ARTICLES', payload } as const),

}

export const getArticles = (): ThunkType => async (dispatch: any): Promise<Articles> => {
    const { data } = await articlesAPI.getArticles();
    dispatch(actions.getArticles(data));
    return data
}

export default articlesReducer;



