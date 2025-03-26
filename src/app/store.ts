import { configureStore } from "@reduxjs/toolkit";
//@ts-ignore
import authReducer from "../features/authSlice.js";
//@ts-ignore
import persistStore from "redux-persist/es/persistStore";
//@ts-ignore
import persistReducer from "redux-persist/es/persistReducer";
//@ts-ignore
import storage from "redux-persist/lib/storage";
import messagesReducer from "../features/chatSlice.js";
import { AuthState, ChatState } from "../types.js";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  reducer: {
    auth: persistedReducer,
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persistor = persistStore(store);
export type AppStore = typeof store;
export type RootState = {
  auth: AuthState;
  messages: ChatState;
};
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
