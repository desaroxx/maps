var maps;
(function (maps) {
    var polyline;
    (function (polyline) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.createPolyline = function (positions) {
                return new google.maps.Polyline({
                    path: positions,
                    geodesic: true,
                    strokeColor: '#FF0000',
                    strokeOpacity: 1.0,
                    strokeWeight: 2
                });
            };
            return Factory;
        })();
        polyline.Factory = Factory;
    })(polyline = maps.polyline || (maps.polyline = {}));
})(maps || (maps = {}));
