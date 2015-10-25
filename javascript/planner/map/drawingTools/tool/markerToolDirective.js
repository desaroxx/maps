var planner;
(function (planner) {
    var tools;
    (function (tools) {
        var tool;
        (function (tool) {
            var MarkerToolDirective = (function () {
                function MarkerToolDirective() {
                    this.template = "\n            <style>\n                .marker-tool {\n                    height: 50px;\n                    width: 50px;\n                    border-bottom: 1px solid black;\n                    padding: 5px;\n                    box-sizing: border-box;\n                }\n                .marker-tool img{\n                    height: 40px;\n                    width: 40px;\n                }\n            </style>\n            <div class=\"marker-tool\">\n                <img id=\"draggable\" src=\"/resources/images/location.svg\">\n            </div>\n        ";
                    this.link = function () {
                        var draggable = $("#draggable");
                        draggable.draggable({ helper: 'clone',
                            stop: function (event) {
                                var point = new google.maps.Point(event.pageX, event.pageY);
                                var position = maps.Main.getOverlay().getProjection().fromContainerPixelToLatLng(point);
                                var marker = maps.Main.addMarker(position);
                            }
                        });
                    };
                }
                return MarkerToolDirective;
            })();
            angular.module("planner").directive("markerTool", function () { return new MarkerToolDirective(); });
        })(tool = tools.tool || (tools.tool = {}));
    })(tools = planner.tools || (planner.tools = {}));
})(planner || (planner = {}));
//# sourceMappingURL=markerToolDirective.js.map