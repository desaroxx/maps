var planner;
(function (planner) {
    var tools;
    (function (tools) {
        var DrawingToolsDirective = (function () {
            function DrawingToolsDirective() {
                this.template = "\n            <style>\n                .drawing-tools {\n                    position: fixed;\n                    top: 50px;\n                    left: 10px;\n                    height: 200px;\n                    width: 50px;\n                    border: 1px solid black;\n                    background-color: white;\n                \tz-index: 1000;\n                }\n            </style>\n            <div class=\"drawing-tools\">\n                <marker-tool></marker-tool>\n            </div>\n        ";
            }
            return DrawingToolsDirective;
        })();
        angular.module("planner").directive("drawingTools", function () { return new DrawingToolsDirective(); });
    })(tools = planner.tools || (planner.tools = {}));
})(planner || (planner = {}));
//# sourceMappingURL=directive.js.map