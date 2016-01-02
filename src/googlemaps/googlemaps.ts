namespace maps {
    export class Main {
      public static MapManager: maps.map.Manager;
      public static MarkerManager: maps.marker.Manager;
      public static PolylineManager: maps.polyline.Manager;
      private static locations: any;

      private static overlay: google.maps.OverlayView;
      private static polyline: google.maps.Polyline;

      public static initialize() {
        console.log('[App] initialize()');
        let lat = 47.3720639;
        let lng = 8.5380668;
        let center = new google.maps.LatLng(lat, lng);

        let map: google.maps.Map = maps.map.Factory.create('planner-map', center, {});
        this.MapManager = new maps.map.Manager(map);
        this.MarkerManager = new maps.marker.Manager(map);
        this.PolylineManager = new maps.polyline.Manager(map);

        this.locations = {};
        this.locations.bahnhofstrasse = new google.maps.LatLng(47.375489, 8.539167),
        this.locations.bahnhof = new google.maps.LatLng(47.377291, 8.540079),
        this.locations.polybahn = new google.maps.LatLng(47.376437, 8.544033),
        this.locations.bellvue = new google.maps.LatLng(47.366832, 8.545105)

        // intialize empty polyline
        this.polyline = maps.polyline.Factory.createPolyline(new google.maps.MVCArray());

        // populate map
        this.addMarkers();

        // overlay for drag and drop LatLng calculation
        this.overlay = maps.overlay.Factory.create();
        this.overlay.setMap(map);
      }

      private static addMarkers(): void {
        console.log('[App] addMarkers()');
        for (let location in this.locations) {
          if (this.locations.hasOwnProperty(location)) {
              let latLng: google.maps.LatLng = this.locations[location];
              this.addMarker(latLng);
          }
        }
      }

      public static addMarker(position: google.maps.LatLng) {
          let marker: google.maps.Marker = maps.marker.Factory.createMarker(position, this.polyline.getPath().getLength(), 'New Marker', true);
          this.MarkerManager.addMarker(marker);
          this.addPointToPolyline(position);

          // attach listener
          google.maps.event.addListener(marker, 'drag', this.handleMouseEvent);
      }

      public static handleMouseEvent(event: google.maps.MouseEvent) {
          let marker: any = this;
          maps.Main.updatePolylinePoint(marker.polylineIndex, marker.getPosition());
          event.latLng;
          console.log('event:', event);
      };

      public static updatePolylinePoint(index: number, location: google.maps.LatLng) {
          console.log('updatePolylinePoint()');
          this.polyline.getPath().setAt(index, location);
      }

      public static getOverlay(): google.maps.OverlayView {
          return this.overlay;
      }

      private static addPointToPolyline(point: google.maps.LatLng) {
          let path: google.maps.MVCArray = this.polyline.getPath();
          path.push(point);
          this.polyline.setMap(null);
          let polyline: google.maps.Polyline = maps.polyline.Factory.createPolyline(path)
          this.polyline = polyline;
          this.PolylineManager.addPolyline(polyline);
          google.maps.event.addListener(polyline, 'mouseover', (event: google.maps.MouseEvent) => {
              let position: google.maps.LatLng = event.latLng;
              let marker: google.maps.Marker = maps.marker.Factory.createPolylineHoverMarker(position);
              let map = this.MapManager.getMap()
              marker.setMap(map);

              let mouseMoveListener = google.maps.event.addListener(polyline, 'mousemove', (event: google.maps.MouseEvent) => {
                  marker.setPosition(event.latLng);
              });
              let mouseOutLisener = google.maps.event.addListener(polyline, 'mouseout', (event: google.maps.MouseEvent) => {
                  marker.setMap(null);
                  // remove listeners
                  google.maps.event.removeListener(mouseMoveListener);
                  google.maps.event.removeListener(mouseOutLisener);
              });

          });
      }

      private static printPositions() {
        console.log('[App] printPositions()');
        this.MarkerManager.printPositions();
      }

      private static deleteMarkers() {
        this.MarkerManager.removeAllMarkers();
        // clear old Polyline
        this.polyline.setMap(null);
        let emptyMVCArray: google.maps.MVCArray = new google.maps.MVCArray()
        this.polyline = maps.polyline.Factory.createPolyline(emptyMVCArray);
        this.polyline.setMap(this.MapManager.getMap());
      }
    }
}
