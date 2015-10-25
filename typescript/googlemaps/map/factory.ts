namespace maps.map {
    export class Factory {
        private static defaultMapSettings: google.maps.MapOptions = {
            zoom: 10
        };

        public static create(elementId: string, center: google.maps.LatLng, settings: google.maps.MapOptions = {}): google.maps.Map {
            console.log("[MapManager] createMap(...)");
            let mapSettings: google.maps.MapOptions = _.clone(this.defaultMapSettings);
            mapSettings.center = center;
            // add all settings from parameter to mapSettings
            for (let setting in settings) {
                mapSettings[setting] = settings[setting];
            }
            let element: HTMLElement = document.getElementById(elementId);
            return new google.maps.Map(element, mapSettings);
        }
    }
}
