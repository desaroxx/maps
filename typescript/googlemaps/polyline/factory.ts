namespace maps.polyline {
    export class Factory {
        public static createPolyline(positions: google.maps.MVCArray): google.maps.Polyline {
            return new google.maps.Polyline({
                path: positions,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
        }
    }
}
