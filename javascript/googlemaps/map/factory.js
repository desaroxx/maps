var maps;
(function (maps) {
    var map;
    (function (map) {
        var Factory = (function () {
            function Factory() {
            }
            Factory.create = function (elementId, center, settings) {
                if (settings === void 0) { settings = {}; }
                console.log("[MapManager] createMap(...)");
                var mapSettings = _.clone(this.defaultMapSettings);
                mapSettings.center = center;
                for (var setting in settings) {
                    mapSettings[setting] = settings[setting];
                }
                var element = document.getElementById(elementId);
                return new google.maps.Map(element, mapSettings);
            };
            Factory.defaultMapSettings = {
                zoom: 15
            };
            return Factory;
        })();
        map.Factory = Factory;
    })(map = maps.map || (maps.map = {}));
})(maps || (maps = {}));
//# sourceMappingURL=factory.js.map