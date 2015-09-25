class App {
  public static MapManager: Maps.MapManager;
  private static locations: any;

  public static initialize() {
    console.log("[App] initialize()");
    let lat = 47.3720639;
    let lng = 8.5380668;
    let center = new google.maps.LatLng(lat, lng);

    this.MapManager = Maps.MapManager.create("map", center, {});

    this.locations = {};
    this.locations.bahnhofstrasse = new google.maps.LatLng(47.375489, 8.539167),
    this.locations.bahnhof = new google.maps.LatLng(47.377291, 8.540079),
    this.locations.polybahn = new google.maps.LatLng(47.376437, 8.544033),
    this.locations.bellvue = new google.maps.LatLng(47.366832, 8.545105)


    this.addMarkers();
    this.addPolyline();
    this.MapManager.showDirections(this.locations.bellvue, this.locations.bahnhofstrasse);
  }

  private static addMarkers(): void {
    console.log("[App] addMarkers()");
    for (let location in this.locations) {
      let latLng: google.maps.LatLng = this.locations[location];
      this.MapManager.createAndAddMarker(latLng, location, true);
    }
  }

  private static addPolyline(): void {
    console.log("[App] addMarkers()");
    let latLngs: google.maps.LatLng[] = [];
    for (let location in this.locations) {
      let latLng: google.maps.LatLng = this.locations[location];
      latLngs.push(latLng);
    }

    let polyline: google.maps.Polyline = this.MapManager.createPolyline(latLngs);
    this.MapManager.addPolyline(polyline);
  }
}
