import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
};

export const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { incrementByAmount } = dataTableSlice.actions

export const selectCount = (state: RootState) => state.dataTable.value

/*export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  }*/

export default dataTableSlice.reducer
