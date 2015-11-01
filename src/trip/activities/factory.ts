namespace activity {

    export class Factory {

        private static activity(
            icon?: string,
            title?: string,
            duration?: IDuration
        ): IActivity {
            if (!icon) icon = "./resources/icons/activity.svg";
            return {
                icon: icon,
                title: title,
                duration: duration
            };
        }

        public static individualActivity(
            icon?: string,
            title?: string,
            duration?: IDuration
        ): IIndividualActivity {
            if (!icon) icon = "./resources/icons/personal.svg";
            let activity: IActivity = this.activity(
                icon,
                title,
                duration
            );
            return <IIndividualActivity> activity;
        }

        /*public static positionalActivity(
            position: google.maps.LatLng,
            icon: string,
            title?: string,
            duration?: IDuration
        ): IPositinalActivity {
            if (!icon) icon = "./resources/icons/positional-activity.svg";
            let activity: IActivity = this.activity(
                icon,
                title,
                duration
            );
            return this.activityToPositionalActivity(activity, position);
        }*/

        /*private static activityToPositionalActivity(
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

        public static areaActivity(
            area: google.maps.Polygon,
            icon: string,
            title?: string,
            duration?: IDuration
        ): IAreaActivity {
            if (!icon) icon = "./resources/icons/area-activity.svg";
            let activity: IActivity = this.activity(
                icon,
                title,
                duration
            );
            return this.activityToPositionalActivity(activity, position);
        }*/
    }
}
