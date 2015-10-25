namespace maps {
    export class Main {
      public static MapManager: maps.map.Manager;
      public static MarkerManager: maps.marker.Manager;
      public static PolylineManager: maps.polyline.Manager;
      private static locations: any;
      private static DrawingTools: maps.DrawingTools;

      public static initialize() {
        console.log("[App] initialize()");
        let lat = 47.3720639;
        let lng = 8.5380668;
        let center = new google.maps.LatLng(lat, lng);

        let map: google.maps.Map = maps.map.Factory.create("planner-map", center, {});
        this.MapManager = new maps.map.Manager(map);
        this.MarkerManager = new maps.marker.Manager(map);
        this.PolylineManager = new maps.polyline.Manager(map);

        this.locations = {};
        this.locations.bahnhofstrasse = new google.maps.LatLng(47.375489, 8.539167),
        this.locations.bahnhof = new google.maps.LatLng(47.377291, 8.540079),
        this.locations.polybahn = new google.maps.LatLng(47.376437, 8.544033),
        this.locations.bellvue = new google.maps.LatLng(47.366832, 8.545105)

        // populate map
        this.addMarkers();
        this.addPolyline();
        this.MapManager.showDirections(this.locations.bellvue, this.locations.bahnhofstrasse);

        // add drawing tools
        this.DrawingTools = new maps.DrawingTools(map);
      }

      private static addMarkers(): void {
        console.log("[App] addMarkers()");
        for (let location in this.locations) {
          let latLng: google.maps.LatLng = this.locations[location];
          let marker = maps.marker.Factory.createMarker(latLng, location, true);
          this.MarkerManager.addMarker(marker);
        }
      }

      private static addPolyline(): void {
        console.log("[App] addMarkers()");
        let latLngs: google.maps.LatLng[] = [];
        for (let location in this.locations) {
          let latLng: google.maps.LatLng = this.locations[location];
          latLngs.push(latLng);
        }

        let polyline: google.maps.Polyline = maps.polyline.Factory.createPolyline(latLngs);
        this.PolylineManager.addPolyline(polyline);
      }

      private static printPositions() {
        console.log("[App] printPositions()");
        this.MarkerManager.printPositions();
      }

      private static deleteMarkers() {
        this.MarkerManager.removeAllMarkers();
      }
    }
}
