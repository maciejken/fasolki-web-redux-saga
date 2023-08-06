import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Status } from "src/types";
import { BeansState } from "./types";

export const initialState: BeansState = {
  amount: 0,
  status: "loading",
};

const beansSlice = createSlice({
  name: "beans",
  initialState,
  reducers: {
    setStatus: (state: BeansState, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    updateSuccess: (state: BeansState, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    update: {
      reducer: (state, action: PayloadAction<number>) => {
        state.amount = state.amount + action.payload;
      },
      prepare: (value?: number) => ({ payload: value || 1 }),
    },
  },
});

export const { setStatus, update, updateSuccess } = beansSlice.actions;

export default beansSlice.reducer;
