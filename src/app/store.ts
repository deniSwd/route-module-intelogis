import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import dataTableReducer from './dataTableSlice'

export const store = configureStore({
  reducer: {
    dataTable: dataTableReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
