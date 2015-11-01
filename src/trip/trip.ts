namespace trip {
    interface ITrip {
        title: string;
        activities: collections.LinkedList<activity.Activity>;
    }

    export class Trip implements ITrip {
        public activities: collections.LinkedList<activity.Activity>;
        public title: string;

        constructor() {
            this.activities = new collections.LinkedList<activity.Activity>();
        }
    }
}
