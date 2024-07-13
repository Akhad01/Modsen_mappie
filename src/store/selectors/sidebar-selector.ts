import { RootState } from '..';

export const getActiveSidebar = (state: RootState) => state.sidebar.selectedNav;
export const getCategories = (state: RootState) => state.sidebar.categories;
