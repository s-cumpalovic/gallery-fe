import { put, call, takeLatest } from "redux-saga/effects";
import { authService } from "../../services/AuthService";

import { initLoginUser, login } from "./slice";

function* initLoginUserHandler(action) {
  try {
    const response = yield call(authService.login, action.payload);
    yield put(login(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watchInitLoginUser() {
  yield takeLatest(initLoginUser.type, initLoginUserHandler);
}
