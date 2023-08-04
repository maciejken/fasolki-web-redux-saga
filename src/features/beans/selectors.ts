import { RootState } from "src/app/store";
// import { createSelector } from "reselect";

export const selectBeansAmount = (state: RootState) => state.beans.amount;

export const selectBeansStatus = (state: RootState) => state.beans.status;
