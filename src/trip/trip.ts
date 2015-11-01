namespace trip {

    import IActivity = activity.IActivity;

    export class Trip {
        public title: string;
        private activities: collections.LinkedList<activity.IActivity>;

        constructor(activityArray: Array<activity.IActivity> = []) {
            this.activities = new collections.LinkedList<IActivity>();
            activityArray.forEach((activity: IActivity): void => this.add(activity));
        }

        public add(activity: IActivity, index: number = undefined): boolean {
            return this.activities.add(activity, index);
        }

        public remove(activity: IActivity) {
            this.activities.remove(activity);
        }

        public get(index: number = 0): activity.IActivity {
            return this.activities.elementAtIndex(index);
        }

        public getAll(): Array<activity.IActivity> {
            return this.activities.toArray();
        }

    }

}
