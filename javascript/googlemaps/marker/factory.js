var maps;
(function (maps) {
    var marker;
    (function (marker) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.createMarker = function (position, polylineIndex, title, draggable, delay) {
                if (draggable === void 0) { draggable = false; }
                if (delay === void 0) { delay = 0; }
                var extendedMarkerOptions = {
                    polylineIndex: polylineIndex,
                    position: position,
                    draggable: draggable,
                    animation: google.maps.Animation.DROP,
                    title: title,
                    icon: "/resources/images/location.svg"
                };
                return new google.maps.Marker(extendedMarkerOptions);
            };
            return Factory;
        })();
        marker.Factory = Factory;
    })(marker = maps.marker || (maps.marker = {}));
})(maps || (maps = {}));
//# sourceMappingURL=factory.js.map