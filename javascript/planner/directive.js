var planner;
(function (planner) {
    var PlannerDirective = (function () {
        function PlannerDirective() {
            this.restrict = "A";
            this.template = "\n            <planner-map></planner-map>\n            <div id=\"panel\">\n                <button onclick=\"App.deleteMarkers()\">{{plannerCtrl.deleteTitle}}</button>\n                <button onclick=\"App.printPositions()\">{{plannerCtrl.printAllTitle}}</button>\n            </div>\n        ";
            this.controller = "plannerCtrl";
            this.controllerAs = "plannerCtrl";
        }
        return PlannerDirective;
    })();
    angular.module("planner").directive("planner", function () { return new PlannerDirective(); });
})(planner || (planner = {}));
