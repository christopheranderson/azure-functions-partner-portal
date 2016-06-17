'use strict';

angular
  .module('customDevView')
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/customDevView', {
      templateUrl: 'customDevView/customDevView.html',
      controller: 'customDevViewCtrl'
    });
  }])
  .controller('customDevViewCtrl', [function customDevViewController() {
    
  }]);