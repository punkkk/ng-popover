var app = angular.module('testPopover', ['saprun-popover'])

app.controller('testCtrl', ['$scope', function($scope) {
    $scope.actionsList = [
        {
            action: "action_1",
            text: "Action 1",
            class: "simple"
        }, {
            action: "action_2",
            text: "Action 2",
            class: "simple"
        }, {
            action: "action_3",
            text: "Action 3",
            class: "other"
        }
    ]
}])
