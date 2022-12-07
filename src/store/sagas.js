import * as gallerySagas from "./gallery/saga";
import * as usersSagas from "./user/saga";

const sagas = {
  ...gallerySagas,
  ...usersSagas,
};

export default sagas;
