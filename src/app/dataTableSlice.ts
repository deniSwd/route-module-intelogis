import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store'
import {Order, Orders, WayPoint, WayPoints} from '../MainTypes'
import {DataType} from "../components/DataTable/DataTable";

export interface dataTableState {
  waypoints: Array<WayPoint>
  orders: Array<Order>
  displayingOrder: number
}

const initialState: dataTableState = {
  waypoints: [],
  orders: [],
  displayingOrder: 1
};

export const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    setWayPoints: (state, action: PayloadAction<WayPoints>) => {
      state.waypoints = action.payload.waypoints
    },
    setOrders:(state, action: PayloadAction<Orders>) => {
      state.orders = action.payload.orders
    },
    displayingOrder:(state, action: PayloadAction<number>) => {
      state.displayingOrder = action.payload
    }
  }
})

const mapOrder = (state: RootState, order: Order) => order.children.map(ref => state.dataTable.waypoints.find(waypoint => waypoint.id === ref)?.location)

export const { setWayPoints, setOrders, displayingOrder } = dataTableSlice.actions

export const selectWayPoints = (state: RootState) => state.dataTable.waypoints
export const selectDisplayingOrder = (state: RootState) => {
  const order = state.dataTable.orders.find(v => state.dataTable.displayingOrder === v.key)!
  if(!order) return
  return {
    ...order,
    children: mapOrder(state, order)
  }
}
export const selectOrders = (state: RootState) => state.dataTable.orders.map(order => ({
  ...order,
  children: mapOrder(state, order)
}))

export default dataTableSlice.reducer
