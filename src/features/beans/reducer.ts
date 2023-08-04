import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { Status } from "src/types";
import { SET_BEANS_STATUS } from "./actions";
import { BeansState } from "./types";

export const initialState: BeansState = {
  amount: 0,
  status: "loading",
};

const beansReducer = createReducer(initialState, {
  [SET_BEANS_STATUS]: (state: BeansState, action: PayloadAction<Status>) => {
    state.status = action.payload;
  },
});

export default beansReducer;
