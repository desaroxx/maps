namespace planner {
    interface PlannerMapDirectiveScope extends angular.IScope {}

    class PlannerMapDirective implements angular.IDirective {
        public restrict = "E";
        public template = `
            <style>
                #planner-map {
                	position: fixed;
                	z-index: 100;
                    height: 100%;
                    width: 100%;
                }
            </style>
            <div id="planner-map">
            </div>
        `;
        public controller = "plannerMapCtrl";
        public controllerAs = "plannerMapCtrl";
        public link = (scope: PlannerMapDirectiveScope, element: JQuery, attrs: angular.IAttributes) => {
            maps.Main.initialize();
        };
    }

    angular.module("planner").directive("plannerMap", () => new PlannerMapDirective());
}
