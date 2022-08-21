import React, {FC} from 'react'
import s from './Map.module.scss'
import {MapContainer, TileLayer} from 'react-leaflet'
import RoutingMachine2 from './Routing2'
import {useWayRouting} from "../../hooks";

export const Map: FC = () => {
  const WayRouting = useWayRouting()
  return (
    <div className={s.mapWrap}>
      <MapContainer doubleClickZoom={false}
                    id="mapId"
                    zoom={14}
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