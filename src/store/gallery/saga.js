import { galleryService } from "../../services/GalleryService";

import { put, call, takeLatest, takeEvery } from "redux-saga/effects";
import {
  initGetGalleries,
  initGetSingleGallery,
  initStoreGallery,
  initEditGallery,
  initDeleteGallery,
  initAddComment,
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

function* initEditGalleryHandler(action) {
  console.log(action.payload);
  try {
    yield call(
      galleryService.updateGallery,
      action.payload?.id,
      action.payload?.newGallery
    );
  } catch (e) {
    console.error(e);
  }
}

export function* watchInitEditGallery() {
  yield takeEvery(initEditGallery.type, initEditGalleryHandler);
}

function* initDeleteGalleryHandler(action) {
  try {
    yield call(galleryService.deleteGallery, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* watchInitDeleteGallery() {
  yield takeLatest(initDeleteGallery.type, initDeleteGalleryHandler);
}

function* initAddCommentHandler(action) {
  try {
    yield call(galleryService.addComment, action.payload);
  } catch (e) {
    console.error(e);
  }
}

export function* watchInitAddComment() {
  yield takeLatest(initAddComment.type, initAddCommentHandler);
}
