namespace maps.map {
    export class Manager {
        constructor(private map: google.maps.Map) {
        }

        public showDirections(originLatLng: google.maps.LatLng, destinationLatLng: google.maps.LatLng) {
            // create directions display
            let directionsDisplay: google.maps.DirectionsRenderer = new google.maps.DirectionsRenderer();
            directionsDisplay.setMap(this.map);

            // prepare request
            let request = {
                origin: originLatLng,
                destination: destinationLatLng,
                // note that Javascript allows us to access the constant
                // using square brackets and a string value as its
                // property.
                travelMode: google.maps.TravelMode["DRIVING"]
            };

            // execute request
            new google.maps.DirectionsService().route(request, function(response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        }

        private calculateRoute(originLatLng: google.maps.LatLng, destinationLatLng: google.maps.LatLng) {
        }

        public getMap(): google.maps.Map {
            return this.map;
        }


    }
}
