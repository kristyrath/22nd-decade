import { createSelector } from "reselect";


export const selectUserReducer = (state) => state.user;

export const selectCurrentUserEmail = createSelector(selectUserReducer, (userState) => userState.currentUser);
export const selectCurrentUsername = createSelector(selectUserReducer, (userState) => userState.username);