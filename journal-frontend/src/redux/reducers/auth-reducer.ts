import { authAPI } from 'src/api/auth';
import { BaseThunkType, InferActionsTypes } from '../redux-store';

let initialState = {
    access: '',
    refresh: '',
    user: {}
};

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType>

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ARM_WEB/auth/LOGIN':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const actions = {
    setAuthUser: (payload: { access: string, refresh: string, user: object }) => ({ type: 'ARM_WEB/auth/LOGIN', payload } as const)
}
export const login = (username: string, password: string): ThunkType => async (dispatch: any) => {
    const { data } = await authAPI.login(username, password)
  
    dispatch(actions.setAuthUser(data));
    sessionStorage.setItem('token', data.access)
}

export default appReducer;



