namespace planner {
    class PlannerDirective implements angular.IDirective {
        public restrict = 'A';
        public template = `
            <planner-map></planner-map>
            <drawing-tools></drawing-tools>
            <div id='panel'>
                <button onclick='maps.Main.deleteMarkers()'>{{plannerCtrl.deleteTitle}}</button>
                <button onclick='maps.Main.printPositions()'>{{plannerCtrl.printAllTitle}}</button>
            </div>
        `;
        public controller = 'plannerCtrl';
        public controllerAs = 'plannerCtrl';
    }

    angular.module('planner').directive('planner', () => new PlannerDirective());
}
