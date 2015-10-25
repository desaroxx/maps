var app;
(function (app_1) {
    var Bootstrap = (function () {
        function Bootstrap() {
        }
        Bootstrap.config = function ($urlRouterProvider, $stateProvider) {
            console.log("[app.Bootstrap] config()");
        };
        Bootstrap.run = function () {
            console.log("[app.Bootstrap] run()");
        };
        return Bootstrap;
    })();
    function initialize() {
        var app = angular.module("app", ["ui.router", "planner"]);
        app.config(["$urlRouterProvider", "$stateProvider", Bootstrap.config]);
        app.run(Bootstrap.run);
        angular.bootstrap(document, ["app"]);
    }
    app_1.initialize = initialize;
})(app || (app = {}));
