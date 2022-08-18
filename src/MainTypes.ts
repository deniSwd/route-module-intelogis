export type WayPoints = Array<WayPoint>

export type WayPoint = {
  id: number
  location: Array<number>
}

export type Orders = Array<Order>

export type Order = {
  name: string
  waypoints: Array<number>
  client: string
}