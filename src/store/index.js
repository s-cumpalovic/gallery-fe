// React imports
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import galleriesReducer from "./gallery/slice";
// Redux
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    galleries: galleriesReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
