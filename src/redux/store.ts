import { configureStore } from '@reduxjs/toolkit';
import tableReducer, { ProjectState } from './slices/table';

export type State = {
  tableReducer: ProjectState;
};

export const store = configureStore({ reducer: { tableReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
