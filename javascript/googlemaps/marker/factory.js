var maps;
(function (maps) {
    var marker;
    (function (marker) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.createMarker = function (position, title, draggable, delay) {
                if (draggable === void 0) { draggable = false; }
                if (delay === void 0) { delay = 0; }
                return new google.maps.Marker({
                    position: position,
                    draggable: draggable,
                    animation: google.maps.Animation.DROP,
                    title: title
                });
            };
            return Factory;
        })();
        marker.Factory = Factory;
    })(marker = maps.marker || (maps.marker = {}));
})(maps || (maps = {}));
