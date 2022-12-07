import { galleryService } from "../../services/GalleryService";

import { put, call, takeLatest } from "redux-saga/effects";
import {
  initGetGalleries,
  initGetSingleGallery,
  setGalleries,
  setSingleGallery,
} from "./slice";

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

function* initGetSingleGalleryHandler(action) {
  try {
    const response = yield call(galleryService.getGallery, action.payload);
    yield put(setSingleGallery(response));
  } catch (e) {
    console.error(e);
  }
}

export function* watchInitGetSingleGallery() {
  yield takeLatest(initGetSingleGallery.type, initGetSingleGalleryHandler);
}
