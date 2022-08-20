import React, {FC, useMemo} from 'react'
import s from './Map.module.scss'
import {MapContainer, TileLayer} from 'react-leaflet'
import RoutingMachine2 from './Routing2'
import {LatLng, latLng, Routing} from "leaflet";
import {createControlComponent} from "@react-leaflet/core";
import {useAppSelector} from "../../app/hooks";
import {selectDisplayingOrder, selectOrders} from "../../app/dataTableSlice";

export const Map: FC = () => {
  const orders = useAppSelector(selectOrders)
  const displayingOrder = useAppSelector(selectDisplayingOrder)
  console.log(orders)

  const WayRouting = useMemo(() => {
    return createControlComponent(() => Routing.control({
      waypoints: displayingOrder?.children.map(point => point && latLng(point.location[0], point.location[1])).filter(v => v) as LatLng[],
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

  return (
    <div className={s.mapWrap}>
      <MapContainer doubleClickZoom={false}
                    id="ma pId"
                    zoom={10}
                    center={[50.602783056213475, 36.61509644183513]}
                    style={{height: '738px'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <WayRouting/>
        <RoutingMachine2/>
      </MapContainer>
    </div>
  )
}