import { authAPI, RefreshType, User } from 'src/api/auth';
import { APIResponceType } from 'src/api/api';
import { BaseThunkType, InferActionsTypes } from '../redux-store';

let initialState = {
    jwt: '',
    user: {}
};

export type InitialStateType = typeof initialState & APIResponceType<User>;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ARM_WEB/auth/LOGIN':
            return {
                ...state,
                ...action.payload,
            }
        case 'ARM_WEB/auth/REFRESH':
            return {
                ...state,
                jwt: action.jwt
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUser: <T extends Awaited<ReturnType<typeof authAPI.login>>>(payload: T extends {data: infer V} ? V : never  ) => ({ type: 'ARM_WEB/auth/LOGIN', payload } as const),
    setToken: (jwt: string ) => ({ type: 'ARM_WEB/auth/REFRESH',jwt } as const)
}
export const login = (username: string, password: string): ThunkType => async (dispatch: any): Promise<InitialStateType> => {
    const { data } = await authAPI.login(username, password)
    dispatch(actions.setAuthUser(data));
    return data
}
export const logout = (): ThunkType => async (dispatch: any): Promise<unknown> => {
    const { data } = await authAPI.logout()
    console.log(data,' LOGOUT DATA')
    dispatch(actions.setAuthUser({jwt: '', user: {}}));
    return data
}
export const getRefreshToken = (): ThunkType => async (dispatch: any): Promise<RefreshType> => {
    const { data } = await authAPI.refreshToken();

    dispatch(actions.setToken(data.jwt));

    return data
}

export default appReducer;



