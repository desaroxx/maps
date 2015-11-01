namespace activities {

    enum MoveType {
        POLYLINE,
        ROAD
    }

    interface Duration {
        start: Date,
        end: Date
    }

    export interface Activity {
        icon: string;
        title: string;
        duration?: Duration;
    }

    interface PositinalActivity extends Activity {
        location: google.maps.LatLng;
    }

    export interface IndividualActivity extends Activity {
    }

    export interface AreaActivity extends Activity {
        area: google.maps.Polygon;
    }

    export interface MoveActivity extends Activity {
        waypoints: google.maps.MVCArray;
        type: MoveType;
    }

}
