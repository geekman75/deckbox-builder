// ** Redux Import
import { configureStore } from "@reduxjs/toolkit";

// ** Reducers Import
import eventReducer from './event'

export interface ReduxStoreType {
  event: {
    eventList: Array<string>,
    btnCount: number
  }
}

export const store = configureStore({
  reducer: {
    event: eventReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export type AppDispatch = typeof store.dispatch