'use strict';
angular
    .module('provisionerPortal.configurationsView', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/configurationsView', {
            templateUrl: 'configurationsView/configurationsView.html',
            controller: 'configurationsViewCtrl'
        });
    }])
    .controller('configurationsViewCtrl', [function configurationsViewController() {
        
    }]);