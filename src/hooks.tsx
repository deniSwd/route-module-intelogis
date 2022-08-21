import {Order, TableType, WayPoint, WayPointsJSON} from './MainTypes'
import {useAppSelector} from './app/hooks'
import {selectDisplayingOrder, selectDisplayingWaypoint, selectOrders, selectWaypoints} from './app/dataTableSlice'
import React, {useMemo} from 'react'
import {createControlComponent} from '@react-leaflet/core'
import {latLng, Routing} from 'leaflet'
import {SelectField} from './components/DataTable/Select'

const orderToWaypoints = (waypoints: WayPointsJSON, order: Order) => order.map(ref => waypoints[String(ref)]) as WayPoint[]

export const useOrderToWaypoints = (order: Order): WayPoint[] => {
  const waypoints = useAppSelector(selectWaypoints)
  if(!order) return []
  return orderToWaypoints(waypoints, order)
}

export const useDisplayingOrder = (): Order => {
  const orders = useAppSelector(selectOrders)
  const displayingOrderId = useAppSelector(selectDisplayingOrder)
  return useMemo(() => {
    return orders[displayingOrderId]
  },[displayingOrderId, orders])
}

export const useWayRouting = () => {
  const displayingOrder = useOrderToWaypoints(useDisplayingOrder())
  const displayingWayPoint = useAppSelector(selectDisplayingWaypoint)

  return useMemo(() => {
    return createControlComponent(() => Routing.control({
      waypoints: displayingWayPoint ? [latLng(...displayingWayPoint)] : displayingOrder.map(v => latLng(...v)),
      lineOptions: {
        styles: [{color: "red", weight: 4}],
        extendToWaypoints: true,
        missingRouteTolerance: 0
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: true,
      fitSelectedRoutes: true,
      showAlternatives: false,
      useZoomParameter: true,
    }))
  }, [displayingOrder])
}

export const useTableOrders = (): TableType[] => {
  const orders = useAppSelector(selectOrders)
  const waypoints = useAppSelector(selectWaypoints)
  return useMemo(() => {
    return Object.entries(orders).map(([id, order]) => ({
      name: `Заказ №${id}`,
      key: id,
      point: '',
      children: order.map((ref, i) => ({
        name: <SelectField defaultValue={String(ref)} orderId={id} order={order}/>,
        point: waypoints[ref].join(', '),
        key: `${id}${i}`
      }))
    }) as TableType)
  }, [orders, waypoints])
}