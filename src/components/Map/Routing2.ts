import { Routing } from 'leaflet'
import {createControlComponent} from "@react-leaflet/core"
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const createRoutineMachineLayer = () => {
  return Routing.control({
    waypoints: [],
    lineOptions: {
      styles: [{ color: "green", weight: 4 }],
      extendToWaypoints: true,
      missingRouteTolerance: 0
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    useZoomParameter:true
  })
}

const RoutingMachine2 = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine2;


