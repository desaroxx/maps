var maps;
(function (maps) {
    var Main = (function () {
        function Main() {
        }
        Main.initialize = function () {
            console.log("[App] initialize()");
            var lat = 47.3720639;
            var lng = 8.5380668;
            var center = new google.maps.LatLng(lat, lng);
            var map = maps.map.Factory.create("planner-map", center, {});
            this.MapManager = new maps.map.Manager(map);
            this.MarkerManager = new maps.marker.Manager(map);
            this.PolylineManager = new maps.polyline.Manager(map);
            this.locations = {};
            this.locations.bahnhofstrasse = new google.maps.LatLng(47.375489, 8.539167),
                this.locations.bahnhof = new google.maps.LatLng(47.377291, 8.540079),
                this.locations.polybahn = new google.maps.LatLng(47.376437, 8.544033),
                this.locations.bellvue = new google.maps.LatLng(47.366832, 8.545105);
            this.polyline = maps.polyline.Factory.createPolyline(new google.maps.MVCArray());
            this.addMarkers();
            this.overlay = maps.overlay.Factory.create();
            this.overlay.setMap(map);
        };
        Main.addMarkers = function () {
            console.log("[App] addMarkers()");
            for (var location_1 in this.locations) {
                var latLng = this.locations[location_1];
                this.addMarker(latLng);
            }
        };
        Main.addMarker = function (position) {
            var marker = maps.marker.Factory.createMarker(position, this.polyline.getPath().getLength(), "New Marker", true);
            this.MarkerManager.addMarker(marker);
            this.addPointToPolyline(position);
            google.maps.event.addListener(marker, "drag", this.handleMouseEvent);
        };
        Main.handleMouseEvent = function (event) {
            var marker = this;
            maps.Main.updatePolylinePoint(marker.polylineIndex, marker.getPosition());
            event.latLng;
            console.log("event:", event);
        };
        ;
        Main.updatePolylinePoint = function (index, location) {
            console.log("updatePolylinePoint()");
            this.polyline.getPath().setAt(index, location);
        };
        Main.getOverlay = function () {
            return this.overlay;
        };
        Main.addPointToPolyline = function (point) {
            var _this = this;
            var path = this.polyline.getPath();
            path.push(point);
            this.polyline.setMap(null);
            var polyline = maps.polyline.Factory.createPolyline(path);
            this.polyline = polyline;
            this.PolylineManager.addPolyline(polyline);
            google.maps.event.addListener(polyline, "mouseover", function (event) {
                var position = event.latLng;
                var marker = maps.marker.Factory.createPolylineHoverMarker(position);
                var map = _this.MapManager.getMap();
                marker.setMap(map);
                var mouseMoveListener = google.maps.event.addListener(polyline, "mousemove", function (event) {
                    marker.setPosition(event.latLng);
                });
                google.maps.event.addListener(polyline, "mouseout", function (event) {
                    marker.setMap(null);
                });
            });
        };
        Main.printPositions = function () {
            console.log("[App] printPositions()");
            this.MarkerManager.printPositions();
        };
        Main.deleteMarkers = function () {
            this.MarkerManager.removeAllMarkers();
            this.polyline.setMap(null);
            var emptyMVCArray = new google.maps.MVCArray();
            this.polyline = maps.polyline.Factory.createPolyline(emptyMVCArray);
            this.polyline.setMap(this.MapManager.getMap());
        };
        return Main;
    })();
    maps.Main = Main;
})(maps || (maps = {}));
//# sourceMappingURL=googlemaps.js.map