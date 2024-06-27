import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebar-slice';
import userReducer from './slices/user-slices';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
