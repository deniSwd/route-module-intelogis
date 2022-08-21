import React from "react";

export type WayPointsJSON = Record<string, WayPoint>

export type WayPoint = [number, number]

export type OrdersJSON = Record<string, Order>

export type Order = number[]

export interface TableType {
  key: React.ReactNode
  name: string | React.ReactNode
  point: string
  children?: TableType[]
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
