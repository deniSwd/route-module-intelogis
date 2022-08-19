import {latLng, Routing} from 'leaflet'
import {createControlComponent} from "@react-leaflet/core"
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

const createRoutineMachineLayer = () => {
  return  Routing.control({
    waypoints: [
      latLng(33.52001088075479, 36.26829385757446),
      latLng(33.50546582848033, 36.29547681726967),
      latLng(33.60546582848033, 36.39547681726967),
    ],
    lineOptions: {
      styles: [{ color: "red", weight: 4 }],
      extendToWaypoints: true,
      missingRouteTolerance: 0
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
    useZoomParameter:true,
  })
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;


