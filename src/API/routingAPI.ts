import axios from 'axios'
import { OrdersJSON, WayPointsJSON } from '../MainTypes'

const instance = axios.create({
  baseURL: `/`,
})
export const userApi = {
  getWayPoints(): Promise<WayPointsJSON> {
    return instance.get<WayPointsJSON>(`WayPoint.json`).then(res => res.data)
  },
  getOrders(): Promise<OrdersJSON> {
    return instance.get<OrdersJSON>(`Orders.json`).then(res => res.data)
  },
}