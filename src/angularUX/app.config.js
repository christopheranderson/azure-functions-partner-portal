'use strict';

angular.
  module('provisionerPortal').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/integrations', {
          template: '<integrations></integrations>'
        }).
        otherwise('/integrations');
    }
  ]);
