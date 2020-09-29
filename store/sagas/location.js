import axios from "axios";
import { takeLatest, put } from "redux-saga/effects";
import { Types as Actions } from "../ducks/location";

function* requestLocation({ payload }) {
  try {
    const response = yield axios.get(
      `https://cors-anywhere.herokuapp.com/http://viacep.com.br/ws/${payload}/json/`
    );

    yield put({
      type: Actions.REQUEST_LOCATION_SUCCESS,
      data: response.data,
    });
  } catch (err) {
    yield put({
      type: Actions.REQUEST_LOCATION_FAIL,
      error: err,
    });
  }
}

export function* watcherSaga() {
  yield takeLatest(Actions.REQUEST_LOCATION, requestLocation);
}
