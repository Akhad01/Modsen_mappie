import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebar';
import userReducer from './slices/user-slices';
import mapReducer from './slices/map';
import favoritesReducer from './slices/favorites'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    user: userReducer,
    map: mapReducer,
    favorites: favoritesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
