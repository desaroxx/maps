var maps;
(function (maps) {
    var polyline;
    (function (polyline_1) {
        var Manager = (function () {
            function Manager(map) {
                this.map = map;
                this.polylines = [];
            }
            Manager.prototype.addPolyline = function (polyline) {
                polyline.setMap(this.map);
            };
            Manager.prototype.removePolyline = function (polyline) {
                polyline.setMap(null);
            };
            return Manager;
        })();
        polyline_1.Manager = Manager;
    })(polyline = maps.polyline || (maps.polyline = {}));
})(maps || (maps = {}));
