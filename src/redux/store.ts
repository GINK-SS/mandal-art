import { configureStore } from '@reduxjs/toolkit';
import tableReducer, { TableState } from './slices/table';

export type State = {
  tableReducer: TableState[];
};

export const store = configureStore({ reducer: { tableReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
