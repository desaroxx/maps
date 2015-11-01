namespace activity {

    export class Factory {

        private static activity(
            icon: string = "./resources/icons/activity.svg",
            title: string = "",
            duration: IDuration = { start: null, end: null}
        ): IActivity {
            return {
                icon: icon,
                title: title,
                duration: duration
            };
        }

        public static individualActivity(
            icon: string = "./resources/icons/personal.svg",
            title: string = "",
            duration: IDuration = { start: null, end: null}
        ): IIndividualActivity {
            return <IIndividualActivity> this.activity(icon, title, duration);
        }

        public static positionalActivity(
            position: google.maps.LatLng = null,
            icon: string = "./resources/icons/positional-activity.svg",
            title: string = "",
            duration: IDuration = { start: null, end: null}
        ): IPositinalActivity {
            return Caster.activityToPositionalActivity(this.activity(
                icon,title,duration), position
            );
        }

        public static areaActivity(
            area: google.maps.Polygon = new google.maps.Polygon(),
            icon: string = "./resources/icons/area-activity.svg",
            title: string = "",
            duration: IDuration = { start: null, end: null}
        ): IAreaActivity {
            return Caster.activityToAreaActivity(this.activity(
                icon,title,duration), area
            );
        }

        public static moveActivity(
            type: MoveType = MoveType.POLYLINE,
            waypoints: google.maps.MVCArray = new google.maps.MVCArray(),
            icon: string = "./resources/icons/move-activity.svg",
            title: string = "",
            duration: IDuration = { start: null, end: null}
        ): IMoveActivity {
            return Caster.activityToMoveActivity(this.activity(
                icon, title, duration
            ), type,waypoints);
        }
    }
}
