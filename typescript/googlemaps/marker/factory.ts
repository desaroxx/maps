namespace maps.marker {
    export interface ExtendedMarkerOptions extends google.maps.MarkerOptions {
        polylineIndex: number;
    }

    export class Factory {
        public static createMarker(position: google.maps.LatLng, polylineIndex: number, title: string, draggable: boolean = false, delay: number = 0): google.maps.Marker {
            let extendedMarkerOptions: ExtendedMarkerOptions = {
                polylineIndex: polylineIndex,
                position: position,
                draggable: draggable,
                animation: google.maps.Animation.DROP,
                title: title,
                icon: "/resources/images/location.svg"
            };
            return new google.maps.Marker(extendedMarkerOptions);
        }
    }
}
