import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebar-slice';
import userReducer from './slices/user-slices';
import mapReducer from './slices/map/map-slice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
    map: mapReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
