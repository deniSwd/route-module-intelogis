import axios from 'axios'
import {Orders, WayPoints} from '../MainTypes'

const instance = axios.create({
  baseURL: `/`
})
export const userApi = {
  getWayPoints(): Promise<WayPoints> {
    return instance.get<WayPoints>(`wayPoints.json`).then(res => res.data)
  },
  getOrders(): Promise<Orders> {
    return instance.get<Orders>(`orders.json`).then(res => res.data)
  }
}