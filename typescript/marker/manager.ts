namespace maps.marker {
    export class Manager {
        private markers: google.maps.Marker[];

        constructor(private map: google.maps.Map) {
            this.markers = [];
        }

        public addMarker(marker: google.maps.Marker): void {
            marker.setMap(this.map);
            this.markers.push(marker);
        }

        public removeMarker(marker: google.maps.Marker): void {
            let markerIndex = _.indexOf(this.markers, marker);
            this.markers = this.markers.splice(markerIndex, 1);
            marker.setMap(null);
        }

        public removeAllMarkers() {
            this.markers.forEach((marker) => {
                marker.setMap(null);
            });
            this.markers = [];
        }

        public printPositions(): void {
            this.markers.forEach((marker) => {
                let position: google.maps.LatLng = marker.getPosition();
                let lat = position.lat();
                let lng = position.lng();
                console.log(lat + ", " + lng);
            });
        }

    }
}
