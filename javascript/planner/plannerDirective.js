var planner;
(function (planner) {
    var PlannerDirective = (function () {
        function PlannerDirective() {
            this.restrict = "A";
            this.template = "\n            <div id=\"map\"></div>\n            <div id=\"panel\">\n                <button onclick=\"App.deleteMarkers()\">Delete all</button>\n                <button onclick=\"App.printPositions()\">Print all</button>\n            </div>\n        ";
        }
        return PlannerDirective;
    })();
    angular.module("planner").directive("planner", function () { return new PlannerDirective(); });
})(planner || (planner = {}));
