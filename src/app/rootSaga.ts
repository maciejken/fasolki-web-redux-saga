import { all } from "redux-saga/effects";
import { watchUpdateBeans } from "src/features/beans/sagas/watchUpdateBeans";

// Create rootSaga to combine all sagas
function* rootSaga() {
  yield all([
    // Add your sagas here
    watchUpdateBeans(),
  ]);
}

export default rootSaga;
