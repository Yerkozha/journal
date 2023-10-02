import { AppStateType } from "src/redux/redux-store";

export const selectIsAuth = (state:AppStateType) => state.auth.access