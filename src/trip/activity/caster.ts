namespace activity {

    export class Caster {

        public static activityToPositionalActivity(
            activity: IActivity,
            position: google.maps.LatLng
        ): IPositinalActivity {
            return {
                position: position,
                icon: activity.icon,
                title: activity.title,
                duration: activity.duration
            };
        }

        public static activityToAreaActivity(
            activity: IActivity,
            area: google.maps.Polygon
        ): IAreaActivity {
            return {
                area: area,
                icon: activity.icon,
                title: activity.title,
                duration: activity.duration,

            };
        }

        public static activityToMoveActivity(
            activity: IActivity,
            type: MoveType,
            waypoints: google.maps.MVCArray
        ): IMoveActivity {
            return {
                type: type,
                waypoints: waypoints,
                icon: activity.icon,
                title: activity.title,
                duration: activity.duration,
            };
        }
    }
}
