import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store'
import { OrdersJSON, WayPoint, WayPointsJSON } from '../MainTypes'

export interface dataTableState {
  waypoints: WayPointsJSON
  orders: OrdersJSON
  displayingOrder: string
  displayingWayPoint?: WayPoint
}

const initialState: dataTableState = {
  waypoints: {},
  orders: {},
  displayingOrder: '0',
}

export const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    setWayPoints: (state, action: PayloadAction<WayPointsJSON>) => {
      state.waypoints = action.payload
    },
    setOrders: (state, action: PayloadAction<OrdersJSON>) => {
      state.orders = action.payload
    },
    displayingOrder: (state, action: PayloadAction<string>) => {
      state.displayingOrder = action.payload
    },
    updateOrderWaypoints: (state, action: PayloadAction<{ value: string, defaultValue: string, orderId: string }>) => {
      const { orderId } = action.payload
      state.orders[orderId] = state.orders[orderId].map(ref =>
        ref === +action.payload.defaultValue ? +action.payload.value : ref)
    },
    displayingWaypoint: (state, action: PayloadAction<string>) => {
      state.displayingWayPoint = state.waypoints[action.payload]
    },
    resetDisplayingWaypoint: (state) => {
      delete state.displayingWayPoint
    },
  },
})

export const {
  setWayPoints,
  setOrders,
  displayingOrder,
  updateOrderWaypoints,
  displayingWaypoint,
  resetDisplayingWaypoint,
} = dataTableSlice.actions

export const selectWaypoints = (state: RootState) => state.dataTable.waypoints
export const selectDisplayingOrder = (state: RootState) => state.dataTable.displayingOrder
export const selectOrders = (state: RootState) => state.dataTable.orders
export const selectDisplayingWaypoint = (state: RootState) => state.dataTable.displayingWayPoint
export default dataTableSlice.reducer
