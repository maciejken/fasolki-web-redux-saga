import { call, put, select, takeLatest } from "redux-saga/effects";
import { fetchBeans } from "../api";
import { fetchSuccess } from "..";
import { selectBeansId } from "../selectors";
import { Beans } from "../types";

export function* onFetchBeans() {
  try {
    const beansId: string = yield select(selectBeansId);
    yield put({ type: "beans/setStatus", payload: "loading" });
    const beans: Beans = yield call(fetchBeans, beansId);
    yield put(fetchSuccess(beans));
    yield put({ type: "beans/setStatus", payload: "success" });
  } catch (error) {
    yield put({ type: "beans/fetchFailed" });
    yield put({ type: "beans/setStatus", payload: "failed" });
  }
}

export function* watchFetchBeans() {
  yield takeLatest("beans/fetch", onFetchBeans);
}
