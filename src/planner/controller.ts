namespace planner {
    class PlannerController {
        public deleteTitle: string = 'Delete All';
        public printAllTitle: string = 'Print All';

        constructor() {}
        
    }

    angular.module('planner').controller('plannerCtrl', PlannerController);
}
