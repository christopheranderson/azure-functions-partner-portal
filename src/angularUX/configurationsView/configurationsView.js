'use strict';

angular
  .module('configurationsView')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/configurationsView', {
      templateUrl: 'configurationsView/configurationsView.html',
      controller: ['$http', function configurationsViewController($http) {
        var self = this;
      
        $http.get('../integrations.json').then(function(response) {
          self.integrations = response.data;
        });
      }]
    });
  }]);
