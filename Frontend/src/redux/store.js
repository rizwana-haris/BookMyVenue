import { configureStore } from "@reduxjs/toolkit";
import { api } from './api/venueApiSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoryApi } from "./api/categoryApiSlice";
import { userApi } from "./api/userApislice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [userApi.reducerPath]: userApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(categoryApi.middleware)
      .concat(userApi.middleware),
  devTools: true,
});

setupListeners(store.dispatch);
export default store;
