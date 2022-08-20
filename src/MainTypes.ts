export type WayPoints = {
  waypoints: Array<WayPoint>
}

export type WayPoint = {
  id: number
  name: string
  location: Array<number>
}

export type Orders = {
  orders: Array<Order>
}

export type Order = {
  key: number
  name: string
  children: Array<number>
  client: string
}

/*export type MappedOrder = {
  key: number
  name: string
  children?: Array<[number, number] | undefined>
  client: string
}*/
/*
export type DataType= {
  key: number
  name: string
  children: Array<[number, number]>
  client: string
}*/
