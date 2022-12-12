import { galleryService } from "../../services/GalleryService";

import { put, call, takeLatest } from "redux-saga/effects";
import {
  initGetGalleries,
  initGetSingleGallery,
  initStoreGallery,
  setGalleries,
  setSingleGallery,
} from "./slice";

function* initGetGalleriesHandler(action) {
  try {
    const response = yield call(
      galleryService.getAllGalleries,
      action.payload?.term,
      action.payload?.id
    );
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

function* initStoreGalleryHandler(action) {
  try {
    yield call(galleryService.createGallery, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* watchInitStoreGallery() {
  yield takeLatest(initStoreGallery.type, initStoreGalleryHandler);
}
