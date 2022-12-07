import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import galleriesReducer from "./gallery/slice";
import usersReducer from "./user/slice";

import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
export default configureStore({
  reducer: {
    galleries: galleriesReducer,
    users: usersReducer,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
