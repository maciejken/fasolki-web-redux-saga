import { createAction } from "@reduxjs/toolkit";
import { Status } from "src/types";

export const UPDATE_BEANS = "beans/update";
export const UPDATE_BEANS_SUCCESS = "beans/updateBeansSuccess";
export const UPDATE_BEANS_FAILED = "beans/updateBeansFailed";

export const SET_BEANS_STATUS = "beans/setStatus";

export const updateBeans = createAction<number>(SET_BEANS_STATUS);
export const updateBeansSuccess = createAction<number>(UPDATE_BEANS_SUCCESS);
export const updateBeansFailed = createAction(UPDATE_BEANS_FAILED);
export const setBeansStatus = createAction<Status>(SET_BEANS_STATUS);