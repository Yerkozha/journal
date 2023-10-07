import { AppStateType } from "src/redux/redux-store";

export const getJWT = (state: AppStateType) => state.auth.jwt