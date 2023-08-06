import { call, put, takeEvery } from "redux-saga/effects";
import { update, updateSuccess } from "..";
import { fetchBeans } from "../api";
import { BeansResponse } from "../types";

export function* onUpdateBeans(action: ReturnType<typeof update>) {
  try {
    yield put({ type: "beans/setStatus", payload: "loading" });
    const beans: BeansResponse = yield call(fetchBeans, "fasolki_jasia");
    yield put(updateSuccess(beans.amount));
    yield put({ type: "beans/setStatus", payload: "success" });
  } catch (error) {
    yield put({ type: "beans/updateFailed" });
    yield put({ type: "beans/setStatus", payload: "failed" });
  }
}

export function* watchUpdateBeans() {
  yield takeEvery("beans/update", onUpdateBeans);
}
