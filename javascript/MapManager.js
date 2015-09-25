var Maps;
(function (Maps) {
    var MapManager = (function () {
        function MapManager(element, center, mapSettings) {
            if (mapSettings === void 0) { mapSettings = {}; }
            this.defaultMapSettings = {
                zoom: 14
            };
            this.map = this.createMap(element, center, mapSettings);
            this.markers = [];
        }
        MapManager.create = function (elementId, center, mapSettings) {
            console.log("[MapManager] create()");
            var element = document.getElementById(elementId);
            return new MapManager(element, center, mapSettings);
        };
        MapManager.prototype.createMap = function (element, center, settings) {
            if (settings === void 0) { settings = {}; }
            console.log("[MapManager] createMap(...)");
            var mapSettings = _.clone(this.defaultMapSettings);
            mapSettings.center = center;
            for (var setting in settings) {
                mapSettings[setting] = settings[setting];
            }
            return new google.maps.Map(element, mapSettings);
        };
        MapManager.prototype.createAndAddMarker = function (position, title, draggable, delay) {
            if (draggable === void 0) { draggable = false; }
            if (delay === void 0) { delay = 0; }
            var marker = this.createMarker(position, title, draggable, delay);
            this.addMarker(marker);
            return marker;
        };
        MapManager.prototype.createMarker = function (position, title, draggable, delay) {
            if (draggable === void 0) { draggable = false; }
            if (delay === void 0) { delay = 0; }
            var marker = new google.maps.Marker({
                position: position,
                draggable: draggable,
                animation: google.maps.Animation.DROP,
                title: title
            });
            return marker;
        };
        MapManager.prototype.addMarker = function (marker) {
            marker.setMap(this.map);
        };
        MapManager.prototype.removeMarker = function (marker) {
            marker.setMap(null);
        };
        MapManager.prototype.createPolyline = function (positions) {
            return new google.maps.Polyline({
                path: positions,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 2
            });
        };
        MapManager.prototype.addPolyline = function (polyline) {
            polyline.setMap(this.map);
        };
        MapManager.prototype.deletePolyline = function (polyline) {
            polyline.setMap(null);
        };
        MapManager.prototype.showDirections = function (originLatLng, destinationLatLng) {
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
        MapManager.prototype.calculateRoute = function (originLatLng, destinationLatLng) {
        };
        MapManager.prototype.printPositions = function () {
        };
        return MapManager;
    })();
    Maps.MapManager = MapManager;
})(Maps || (Maps = {}));
