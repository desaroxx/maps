namespace maps.overlay {
    export class Factory {
        public static create(): google.maps.OverlayView {
            let overlay = new google.maps.OverlayView();
            overlay.draw = () => {};
            return overlay;
        }
    }
}
