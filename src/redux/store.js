import { configureStore } from "@reduxjs/toolkit";

import getImageSlice from "./reducers/getImageReducer";
import login from "./reducers/login";
import register from "./reducers/register";
import uploadImageSlice from "./reducers/uploadImage";

const store = configureStore({
  reducer: {
    upload: uploadImageSlice.reducer,
    images: getImageSlice.reducer,
    register: register.reducer,
    login: login.reducer,
  },
});

export default store;
