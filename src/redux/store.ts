import { configureStore } from '@reduxjs/toolkit';
import tableReducer, { ProjectState } from './slices/table';
import modalReducer, { ModalState } from './slices/modal';

export type State = {
  tableReducer: ProjectState;
  modalReducer: ModalState;
};

export const store = configureStore({ reducer: { tableReducer, modalReducer } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
