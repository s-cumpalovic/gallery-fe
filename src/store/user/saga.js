import { put, call, takeLatest } from "redux-saga/effects";
import { authService } from "../../services/AuthService";

import { initLoginUser, initRegisterUser, login, register } from "./slice";

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

function* initRegisterUserHandler(action) {
  try {
    const response = yield call(authService.register, action.payload);
    yield put(register(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watchInitRegisterUser() {
  yield takeLatest(initRegisterUser.type, initRegisterUserHandler);
}
