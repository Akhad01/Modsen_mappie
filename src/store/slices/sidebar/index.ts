import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { categories } from '../../../constants/categories';
import { Category } from '../../../types/category';
import { FavoritePlace } from '../../../types/place-item';
import { getInfoAboutPlaceThunk } from './getInfoAboutPlaceThunk';

interface SidebarState {
  selectedNav: string | null;
  categories: Category[];
  currentPlaceId: number;
  currentPlace: FavoritePlace & { saved?: boolean } | null;
  loading: boolean;
  error: string | null;
}

const initialState: SidebarState = {
  selectedNav: null,
  categories: categories,
  currentPlaceId: 0,
  currentPlace: null,
  loading: false,
  error: null
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    setSelectedNav: (state, action) => {
      state.selectedNav = action.payload;
    },
    toggleItemCategories: (state, action) => {
      state.categories.map((item) => {
        if (item.type === action.payload) {
          return (item.isActive = !item.isActive);
        }
        return item;
      });
    },
    setPlaceIdAndShowSidebarPanel: (state, action) => {
      state.selectedNav = 'detail';
      state.currentPlaceId = action.payload;
    },
  },
  extraReducers: (builders) => {
    builders
      .addCase(getInfoAboutPlaceThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(getInfoAboutPlaceThunk.fulfilled, (state, { payload }: PayloadAction<{
        place: FavoritePlace,
        saved: boolean
      }>) => {
        state.loading = false
        state.currentPlace = { ...payload.place, saved: payload.saved }
      })
      .addCase(getInfoAboutPlaceThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.error?.message ?? "Произошла неожиданная ошибка"
      })
  }
});

export const {
  setSelectedNav,
  toggleItemCategories,
  setPlaceIdAndShowSidebarPanel,
} = sidebarSlice.actions;

export default sidebarSlice.reducer;
