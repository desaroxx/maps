namespace activity {

    enum MoveType {
        POLYLINE,
        ROAD
    }

    export interface IDuration {
        start: moment.Moment,
        end: moment.Moment
    }

    export interface IActivity {
        icon: string;
        title: string;
        duration?: IDuration;
    }

    export interface IPositinalActivity extends IActivity {
        position: google.maps.LatLng;
    }

    export interface IIndividualActivity extends IActivity {
    }

    export interface IAreaActivity extends IActivity {
        area: google.maps.Polygon;
    }

    export interface IMoveActivity extends IActivity {
        waypoints: google.maps.MVCArray;
        type: MoveType;
    }

}
