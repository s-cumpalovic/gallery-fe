import { galleryService } from "../../services/GalleryService";

import { put, call, takeLatest } from "redux-saga/effects";
import { initGetGalleries, setGalleries } from "./slice";


function* initGetGalleriesHandler() {
  try {
    const response = yield call(galleryService.getAllGalleries);
    yield put(setGalleries(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watchInitGetGalleries() {
  yield takeLatest(initGetGalleries.type, initGetGalleriesHandler);
}
