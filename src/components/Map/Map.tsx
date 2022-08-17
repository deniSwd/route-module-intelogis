import React, {FC} from 'react'
import s from './Map.module.scss'
import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import L from 'leaflet'
import RoutingMachine from "./Routing";

const icon = L.icon({
  iconRetinaUrl:iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow
});



export const Map:FC = () =>{
 /* const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()*/

  return (
    <div className={s.mapWrap}>
      <MapContainer center={[51.505, -1.09]} zoom={13} style={{ height: '738px'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -1.09]} icon={icon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <RoutingMachine/>
      </MapContainer>
    </div>
  )
}
