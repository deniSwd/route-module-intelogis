import axios from 'axios'
import {WayPoints} from '../MainTypes'

const instance = axios.create({
  baseURL: `/`
})
export const userApi = {
  getWayPoints(): Promise<WayPoints> {
    return instance.get<WayPoints>(`wayPoints.json`).then(res => res.data)
  }
}