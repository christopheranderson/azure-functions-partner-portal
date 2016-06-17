'use strict';

angular
  .module('provisionerPortal.configurationsView', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/configurationsView', {
      templateUrl: 'configurationsView/configurationsView.html',
      controller: 'configurationsViewCtrl', ['$http', function configurationsViewController($http) {
        var self = this;
      
        $http.get('../integrations.json').then(function(response) {
          self.integrations = response.data;
        });
      }]
  });
