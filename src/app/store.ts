import { configureStore } from "@reduxjs/toolkit";
// @ts-expect-error
import authReducer from "../features/authSlice.js";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";
const persistConfig = {
  key: "root",
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
});
const persistor = persistStore(store);

export { store, persistor };
