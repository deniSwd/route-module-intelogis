import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import dataTableReducer from './dataTableSlice'
import saga from './/saga'

let sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export const store = configureStore({
  reducer: {
    dataTable: dataTableReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
})

sagaMiddleware.run(saga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

