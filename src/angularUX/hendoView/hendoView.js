'use strict';
angular
    .module('provisionerPortal.hendoView', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/hendoView', {
            templateUrl: 'hendoView/hendoView.html',
            controller: 'hendoViewCtrl'
        });
    }])
    .controller('hendoViewCtrl', [function hendoViewController() {

    }]);