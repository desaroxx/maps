namespace trip {

    interface ITrip {
        title: string;
        activities: collections.LinkedList<activity.IActivity>;
    }

    export class Trip implements ITrip {
        public activities: collections.LinkedList<activity.IActivity>;
        public title: string;

        constructor() {
            this.activities = new collections.LinkedList<activity.IActivity>();
        }
    }

}
