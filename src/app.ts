'use strict';

namespace app {

    class Bootstrap {
        public static config($urlRouterProvider: angular.ui.IUrlRouterProvider, $stateProvider: ng.ui.IStateProvider): void {
            console.log('[app.Bootstrap] config()');
        }

        public static run(): void {
            console.log('[app.Bootstrap] run()');
            // maps.Main.initialize();
        }
    }

    export function initialize(): void {
        let app: angular.IModule = angular.module('app', ['ui.router', 'planner']);
        app.config(['$urlRouterProvider', '$stateProvider', Bootstrap.config]);
        app.run(Bootstrap.run);
        angular.bootstrap(document, ['app']);
    }

}
