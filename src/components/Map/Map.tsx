import React, {FC} from 'react'
import s from './Map.module.scss'
import {MapContainer, TileLayer} from 'react-leaflet'
import RoutingMachine from './Routing'
import RoutingMachine2 from './Routing2'

export const Map: FC = () => {
  return (
    <div className={s.mapWrap}>
      <MapContainer doubleClickZoom={false}
                    id="ma pId"
                    zoom={10}
                    center={[33.5024, 36.2988]}
                    style={{height: '738px'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <RoutingMachine />
        <RoutingMachine2/>
      </MapContainer>
    </div>
  )
}