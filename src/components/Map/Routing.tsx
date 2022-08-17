import L from 'leaflet'
import { createControlComponent } from "@react-leaflet/core"
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const createRoutineMachineLayer = () => L.Routing.control({
  waypoints: [
    L.latLng(51.505, -1.09),
    L.latLng(55.505, -4.09),
  ],
  lineOptions: {
    styles: [{ color: "#6FA1EC", weight: 6 }],
    extendToWaypoints: false,
    missingRouteTolerance: 0
  },
  show: false,
  addWaypoints: false,
  routeWhileDragging: true,
  fitSelectedRoutes: true,
  showAlternatives: false,
})

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine;