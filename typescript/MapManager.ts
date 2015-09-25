module Maps {
    export class MapManager {
        private map:google.maps.Map;
        private markers:google.maps.Marker[];

        private defaultMapSettings = {
            zoom: 14
        };

        public static create(elementId: string, center: google.maps.LatLng, mapSettings: Object): MapManager {
            console.log("[MapManager] create()");
            let element = document.getElementById(elementId);
            return new MapManager(element, center, mapSettings);
        }

        constructor(element:Element, center: google.maps.LatLng, mapSettings: Object = {}) {
            // initialize
            this.map = this.createMap(element, center, mapSettings);
            this.markers = [];
        }

        private createMap(element: Element, center: google.maps.LatLng, settings: Object = {}): google.maps.Map {
            console.log("[MapManager] createMap(...)");
            let mapSettings: any = _.clone(this.defaultMapSettings);
            mapSettings.center = center;
            // add all settings from parameter to mapSettings
            for (let setting in settings) {
                mapSettings[setting] = settings[setting];
            }
            return new google.maps.Map(element, mapSettings);
        }

        public createAndAddMarker(position: google.maps.LatLng, title: string, draggable: boolean = false, delay: number = 0): google.maps.Marker {
            let marker: google.maps.Marker = this.createMarker(position, title, draggable, delay);
            this.addMarker(marker);
            return marker;
        }

        public createMarker(position: google.maps.LatLng, title: string, draggable: boolean = false, delay: number = 0): google.maps.Marker {
            let marker: google.maps.Marker = new google.maps.Marker({
                position: position,
                draggable: draggable,
                animation: google.maps.Animation.DROP,
                title: title
            });
            return marker;
        }

        public addMarker(marker: google.maps.Marker): void {
            marker.setMap(this.map);
        }

        public removeMarker(marker: google.maps.Marker): void {
            marker.setMap(null);
        }

        public createPolyline(positions: google.maps.LatLng[]): google.maps.Polyline {
            return new google.maps.Polyline({
    			path: positions,
    			geodesic: true,
    			strokeColor: '#FF0000',
    			strokeOpacity: 1.0,
    			strokeWeight: 2
    		});
        }

        public addPolyline(polyline: google.maps.Polyline): void {
            polyline.setMap(this.map);
        }

        public deletePolyline(polyline: google.maps.Polyline): void {
            polyline.setMap(null);
        }

        public showDirections(originLatLng: google.maps.LatLng, destinationLatLng: google.maps.LatLng) {
            // Create directions display
            let directionsDisplay: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(this.map);

            // Prepare request
            let request = {
                origin: originLatLng,
                destination: destinationLatLng,
                // Note that Javascript allows us to access the constant
                // using square brackets and a string value as its
                // "property."
                travelMode: google.maps.TravelMode["DRIVING"]
            };

            // Execute request
            new google.maps.DirectionsService().route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        }

        private calculateRoute(originLatLng: google.maps.LatLng, destinationLatLng: google.maps.LatLng) {
        }

        public printPositions(): void {
        }


    }
}
