import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './selectors/sidebar';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});
