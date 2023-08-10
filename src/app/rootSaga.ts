import { all } from "redux-saga/effects";
import { watchFetchBeans, watchUpdateBeans } from "src/features/beans/sagas";

// Create rootSaga to combine all sagas
function* rootSaga() {
  yield all([
    // Add your sagas here
    watchFetchBeans(),
    watchUpdateBeans(),
  ]);
}

export default rootSaga;
