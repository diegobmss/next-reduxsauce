import { all } from "redux-saga/effects";

import * as location from "./location";

function* Sagas() {
  yield all([location.watcherSaga()]);
}

export default Sagas;
