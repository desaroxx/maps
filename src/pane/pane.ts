namespace roxx.pane {

    const roxxPane = angular.module('roxxPane', ['ngMaterial']);

    export class PaneController {
        static $inject = ['$mdDialog'];

        public activities: Object[];

        public item: Object = {
            vm: {
                employee: 'John Doe'
            }
        };

        constructor(private $mdDialog: ng.material.IDialogService) {
            this.activities = [{
                id: 0,
                name: 'Los Angeles',
                action_type: 'eat'
            }, {
                id: 0,
                name: 'San Francisco',
                action_type: 'accomodation'
            }, {
                id: 0,
                name: 'Sacramento',
                action_type: 'activity'
            }, {
                id: 0,
                name: 'Reno',
                action_type: 'drive'
            }, {
                id: 0,
                name: 'Napa Valley',
                action_type: 'activity'
            }, {
                id: 0,
                name: 'Napa Valley',
                action_type: 'eat'
            }, {
                id: 0,
                name: 'Santa Barbara',
                action_type: 'accomodation'
            }, {
                id: 0,
                name: 'Del Mar',
                action_type: 'eat'
            }];
        }

        private onDialogClosed(): void {
            console.log('onDialogClosed()');
        }

        public openDialog: Function = function(activity) {
            console.log('activity:', activity);
            let dialogOptions: ng.material.IDialogOptions = {
                template: `
                <md-dialog style='width:500px'>
                    <md-dialog-content>
                        <div class='md-title'>Edit city name:</div>
                        <br />
                        <md-input-container md-no-float>
                            <input type='text' value='{{ctrl.name}}' ng-model='ctrl.name'>
                        </md-input-container>
                        <div layout='row' style='justify-content: flex-end;'>
                            <md-button class='md-primary' ng-click='ctrl.save()'>Save</md-button>
                            <md-button ng-click='ctrl.cancel()'>Cancel</md-button>
                        </div>
                    </md-dialog-content>
                </md-dialog>
            `,
                clickOutsideToClose: true,
                locals: {activity: activity},
                bindToController: true,
                controller: function($mdDialog: ng.material.IDialogService) {
                    this.name = this.activity.name;
                    console.log('dialogCtrl');
                    this.save = function() {
                        console.log('save');
                        this.city.name = this.name;
                        $mdDialog.hide();
                    }
                    this.cancel = function() {
                        $mdDialog.hide();
                    };
                },
                controllerAs: 'ctrl'
            };
            this.$mdDialog.show(dialogOptions);
        }
    }

    function PaneLink(scope: ng.IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes, ctrl: PaneController) {
        jQuery('.container').sortable({
            handle: '.dragme'
        });
    }

    roxxPane.directive('pane', (): ng.IDirective => {
        return {
            restrict: 'E',
            templateUrl: 'pane/pane.html',
            controller: PaneController,
            controllerAs: 'paneCtrl',
            scope: {},
            bindToController: {},
            link: PaneLink
        };
    });
}