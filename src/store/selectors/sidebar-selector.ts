import { RootState } from '..';

export const getActiveSidebar = (state: RootState) => state.sidebar.selectedNav;
