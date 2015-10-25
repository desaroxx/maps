var maps;
(function (maps) {
    var marker;
    (function (marker_1) {
        var Manager = (function () {
            function Manager(map) {
                this.map = map;
                this.markers = [];
            }
            Manager.prototype.addMarker = function (marker) {
                marker.setMap(this.map);
                this.markers.push(marker);
            };
            Manager.prototype.removeMarker = function (marker) {
                var markerIndex = _.indexOf(this.markers, marker);
                this.markers = this.markers.splice(markerIndex, 1);
                marker.setMap(null);
            };
            Manager.prototype.removeAllMarkers = function () {
                this.markers.forEach(function (marker) {
                    marker.setMap(null);
                });
                this.markers = [];
            };
            Manager.prototype.printPositions = function () {
                this.markers.forEach(function (marker) {
                    var position = marker.getPosition();
                    var lat = position.lat();
                    var lng = position.lng();
                    console.log(lat + ", " + lng);
                });
            };
            return Manager;
        })();
        marker_1.Manager = Manager;
    })(marker = maps.marker || (maps.marker = {}));
})(maps || (maps = {}));
