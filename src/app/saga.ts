import {userApi} from '../API/routingAPI'
import {setOrders, setWayPoints} from './dataTableSlice'
import {put, call, takeEvery} from 'redux-saga/effects'
import {Orders, WayPoints} from '../MainTypes'

export const sagaActions = {
  WAY_POINTS_SAGA: 'WAY_POINTS_SAGA',
  ORDERS_SAGA: 'ORDERS_SAGA',
}

export function* wayPointsSaga() {
  try {
    let result: WayPoints = yield call(() => userApi.getWayPoints())
    yield put(setWayPoints(result))
  } catch (e) {
    yield put({type: 'WAY_POINTS_SAGA_FAILED'})
  }
}

export function* ordersSaga() {
  try {
    let result: Orders = yield call(() => userApi.getOrders())
    yield put(setOrders(result))
  } catch (e) {
    yield put({type: 'ORDERS_SAGA_FAILED'})
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.WAY_POINTS_SAGA, wayPointsSaga)
  yield takeEvery(sagaActions.ORDERS_SAGA, ordersSaga)
}