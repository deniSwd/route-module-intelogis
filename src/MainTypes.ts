import React from 'react'

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


