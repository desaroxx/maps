namespace maps.polyline {
    export class Manager {
        private polylines: google.maps.Polyline[];

        constructor(private map: google.maps.Map) {
            this.polylines = [];
        }

        public addPolyline(polyline: google.maps.Polyline): void {
            polyline.setMap(this.map);
        }

        public removePolyline(polyline: google.maps.Polyline): void {
            polyline.setMap(null);
        }
    }
}
