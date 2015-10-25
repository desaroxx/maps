namespace maps.marker {
    export class Factory {
        public static createMarker(position: google.maps.LatLng, title: string, draggable: boolean = false, delay: number = 0): google.maps.Marker {
            return new google.maps.Marker({
                position: position,
                draggable: draggable,
                animation: google.maps.Animation.DROP,
                title: title,
                icon: "/resources/images/location.svg"
            });
        }
    }
}
