import { call, put, takeEvery } from "redux-saga/effects";
import {
  updateBeans,
  UPDATE_BEANS,
  UPDATE_BEANS_SUCCESS,
  UPDATE_BEANS_FAILED,
  SET_BEANS_STATUS,
} from "../actions";

export function* onUpdateBeans(action: ReturnType<typeof updateBeans>) {
  try {
    yield put({ type: SET_BEANS_STATUS, payload: "loading" });
    yield put({ type: UPDATE_BEANS_SUCCESS });

    yield put({ type: SET_BEANS_STATUS, payload: "success" });
  } catch (error) {
    yield put({ type: UPDATE_BEANS_FAILED });
    yield put({ type: SET_BEANS_STATUS, payload: "failed" });
  }
}

export function* watchUpdateBeans() {
  yield takeEvery(UPDATE_BEANS, onUpdateBeans);
}
