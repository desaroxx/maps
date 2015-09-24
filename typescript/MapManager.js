var MapManager = (function () {
    function MapManager(element, mapSettings) {
        if (mapSettings === void 0) { mapSettings = {}; }
        this.defaultMapSettings = {
            zoom: 14
        };
        this.map = new google.maps.Map(element, mapSettings);
    }
    MapManager.prototype.createMap = function (element, settings) {
        if (settings === void 0) { settings = {}; }
        var mapSettings = _.clone(this.defaultMapSettings);
        for (var setting in settings) {
            mapSettings[setting] = settings[setting];
        }
        return new google.maps.Map(element, mapSettings);
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
    return MapManager;
})();
