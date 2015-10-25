var planner;
(function (planner) {
    var PlannerController = (function () {
        function PlannerController() {
            this.deleteTitle = "Delete All";
            this.printAllTitle = "Print All";
        }
        return PlannerController;
    })();
    angular.module("planner").controller("plannerCtrl", PlannerController);
})(planner || (planner = {}));
