import { createActions, createReducer } from "reduxsauce";

export const { Creators, Types } = createActions({
  requestLocation: ["payload"],
  requestLocationSuccess: ["payload"],
  requestLocationFail: ["error"],
});

const INITIAL_STATE = {
  location: {
    status: "idle",
    data: {},
  },
};

const requestLocation = (state) => ({
  ...state,
  location: {
    status: "pending",
  },
});

const requestLocationSuccess = (state, { data }) => ({
  ...state,
  location: {
    data: data,
    status: "resolved",
  },
});

const requestLocationFail = (state, { error }) => ({
  ...state,
  location: {
    error,
    status: "rejected",
  },
});

export default createReducer(INITIAL_STATE, {
  [Types.REQUEST_LOCATION]: requestLocation,
  [Types.REQUEST_LOCATION_SUCCESS]: requestLocationSuccess,
  [Types.REQUEST_LOCATION_FAIL]: requestLocationFail,
});
