import { Routing, latLng} from 'leaflet'
import {createControlComponent} from "@react-leaflet/core"
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const createRoutineMachineLayer = () => {
  return  Routing.control({
    waypoints: [
      latLng(33.53001088075479, 36.27829385757446),
      latLng(33.51546582848033, 36.28547681726967),
      latLng(33.61546582848033, 36.38547681726967),
    ],
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


