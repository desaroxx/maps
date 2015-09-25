var App = (function () {
    function App() {
    }
    App.initialize = function () {
        console.log("[App] initialize()");
        var lat = 47.3720639;
        var lng = 8.5380668;
        var center = new google.maps.LatLng(lat, lng);
        this.MapManager = Maps.MapManager.create("map", center, {});
        this.locations = {};
        this.locations.bahnhofstrasse = new google.maps.LatLng(47.375489, 8.539167),
            this.locations.bahnhof = new google.maps.LatLng(47.377291, 8.540079),
            this.locations.polybahn = new google.maps.LatLng(47.376437, 8.544033),
            this.locations.bellvue = new google.maps.LatLng(47.366832, 8.545105);
        this.addMarkers();
        this.addPolyline();
        this.MapManager.showDirections(this.locations.bellvue, this.locations.bahnhofstrasse);
    };
    App.addMarkers = function () {
        console.log("[App] addMarkers()");
        for (var location_1 in this.locations) {
            var latLng = this.locations[location_1];
            this.MapManager.createAndAddMarker(latLng, location_1, true);
        }
    };
    App.addPolyline = function () {
        console.log("[App] addMarkers()");
        var latLngs = [];
        for (var location_2 in this.locations) {
            var latLng = this.locations[location_2];
            latLngs.push(latLng);
        }
        var polyline = this.MapManager.createPolyline(latLngs);
        this.MapManager.addPolyline(polyline);
    };
    return App;
})();
