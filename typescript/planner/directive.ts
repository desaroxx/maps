namespace planner {
    class PlannerDirective implements angular.IDirective {
        public restrict = "A";
        public template = `
            <planner-map></planner-map>
            <div id="panel">
                <button onclick="App.deleteMarkers()">{{plannerCtrl.deleteTitle}}</button>
                <button onclick="App.printPositions()">{{plannerCtrl.printAllTitle}}</button>
            </div>
        `;
        public controller = "plannerCtrl";
        public controllerAs = "plannerCtrl";
    }

    angular.module("planner").directive("planner", () => new PlannerDirective());
}
