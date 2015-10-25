var maps;
(function (maps) {
    var overlay;
    (function (overlay_1) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.create = function () {
                var overlay = new google.maps.OverlayView();
                overlay.draw = function () { };
                return overlay;
            };
            return Factory;
        })();
        overlay_1.Factory = Factory;
    })(overlay = maps.overlay || (maps.overlay = {}));
})(maps || (maps = {}));
//# sourceMappingURL=factory.js.map