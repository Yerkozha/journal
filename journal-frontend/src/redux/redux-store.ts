import { useDispatch } from "react-redux";
import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import appReducer from "./reducers/app-reducer";
import authReducer from "./reducers/auth-reducer";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import articlesReducer from "./reducers/articles-reducer";

let rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    articles:articlesReducer
})

type RootReducerType = typeof rootReducer; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void | unknown>> = ThunkAction<R, AppStateType, unknown, A>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
// @ts-ignore
window.__store__ = store;

export const useAppDispatch = () => {
    return useDispatch<ThunkDispatch<AppStateType, undefined, AnyAction>>();
};

export default store
