
class MapManager {
    private map:google.maps.Map;
    private locations:google.maps.LatLng[];
    private markers:google.maps.Marker[];

    private defaultMapSettings = {
        zoom: 14
    };

    constructor(element:Element, mapSettings: Object = {}) {
        this.map = new google.maps.Map(element, mapSettings);
    }

    private createMap(element: Element, settings: Object = {}): google.maps.Map {
        let mapSettings: Object = _.clone(this.defaultMapSettings);
        // add all settings from parameter to mapSettings
        for (let setting in settings) {
            mapSettings[setting] = settings[setting];
        }
        return new google.maps.Map(element, mapSettings);
    }

    public createMarker(position: google.maps.LatLng, title: string, draggable: boolean = false, delay: number = 0): google.maps.Marker {
        let marker: google.maps.Marker = new google.maps.Marker({
            position: position,
            draggable: draggable,
            animation: google.maps.Animation.DROP,
            title: title
        });
        return marker;
    }


}
