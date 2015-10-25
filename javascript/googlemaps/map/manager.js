var maps;
(function (maps) {
    var map;
    (function (map_1) {
        var Manager = (function () {
            function Manager(map) {
                this.map = map;
            }
            Manager.prototype.showDirections = function (originLatLng, destinationLatLng) {
                var directionsDisplay = new google.maps.DirectionsRenderer();
                directionsDisplay.setMap(this.map);
                var request = {
                    origin: originLatLng,
                    destination: destinationLatLng,
                    travelMode: google.maps.TravelMode["DRIVING"]
                };
                new google.maps.DirectionsService().route(request, function (response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            };
            Manager.prototype.calculateRoute = function (originLatLng, destinationLatLng) {
            };
            Manager.prototype.getMap = function () {
                return this.map;
            };
            return Manager;
        })();
        map_1.Manager = Manager;
    })(map = maps.map || (maps.map = {}));
})(maps || (maps = {}));
