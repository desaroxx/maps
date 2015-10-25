var planner;
(function (planner) {
    var PlannerMapDirective = (function () {
        function PlannerMapDirective() {
            this.restrict = "E";
            this.template = "\n            <style>\n                #planner-map {\n                \tposition: fixed;\n                \tz-index: 100;\n                    height: 100%;\n                    width: 100%;\n                }\n            </style>\n            <div id=\"planner-map\">\n            </div>\n        ";
            this.controller = "plannerMapCtrl";
            this.controllerAs = "plannerMapCtrl";
            this.link = function (scope, element, attrs) {
                maps.Main.initialize();
            };
        }
        return PlannerMapDirective;
    })();
    angular.module("planner").directive("plannerMap", function () { return new PlannerMapDirective(); });
})(planner || (planner = {}));
//# sourceMappingURL=directive.js.map