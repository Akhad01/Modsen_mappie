import { createContext, MutableRefObject } from "react";

interface MapContextType {
    mapRef: MutableRefObject<ymaps.Map | undefined> | null;
    routeRef: MutableRefObject<ymaps.multiRouter.MultiRoute | undefined> | null;
}

export const MapContext = createContext<MapContextType>({
    mapRef: null,
    routeRef: null,
})