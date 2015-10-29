namespace trip {
    interface ITrip {
        title: string;
        activities: collections.LinkedList<activities.models.Activity>;
    }

    export class Trip implements ITrip {
        public activities: collections.LinkedList<activities.models.Activity>;
        public title: string;

        constructor() {
            this.activities = new collections.LinkedList<activities.models.Activity>();
        }
    }
}
