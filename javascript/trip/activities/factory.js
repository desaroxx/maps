var activity;
(function (activity_1) {
    var Factory = (function () {
        function Factory() {
        }
        Factory.activity = function (icon, title, duration) {
            if (!icon)
                icon = "./resources/icons/activity.svg";
            return {
                icon: icon,
                title: title,
                duration: duration
            };
        };
        Factory.individualActivity = function (icon, title, duration) {
            if (!icon)
                icon = "./resources/icons/personal.svg";
            var activity = this.activity(icon, title, duration);
            return activity;
        };
        Factory.positionalActivity = function (position, icon, title, duration) {
            if (!icon)
                icon = "./resources/icons/positional-activity.svg";
            var activity = this.activity(icon, title, duration);
            return this.activityToPositionalActivity(activity, position);
        };
        Factory.activityToPositionalActivity = function (activity, position) {
            return {
                position: position,
                icon: activity.icon,
                title: activity.title,
                duration: activity.duration
            };
        };
        Factory.areaActivity = function (area, icon, title, duration) {
            if (!icon)
                icon = "./resources/icons/area-activity.svg";
            var activity = this.activity(icon, title, duration);
            return this.activityToPositionalActivity(activity, position);
        };
        return Factory;
    })();
    activity_1.Factory = Factory;
})(activity || (activity = {}));
//# sourceMappingURL=factory.js.map