import { call, put, takeEvery } from "redux-saga/effects";
import { update } from "..";

export function* onUpdateBeans(action: ReturnType<typeof update>) {
  try {
    yield put({ type: "setStatus", payload: "loading" });
    yield put({ type: "updateSuccess" });

    yield put({ type: "setStatus", payload: "success" });
  } catch (error) {
    yield put({ type: "updateFailed" });
    yield put({ type: "setStatus", payload: "failed" });
  }
}

export function* watchUpdateBeans() {
  yield takeEvery("beans/update", onUpdateBeans);
}
