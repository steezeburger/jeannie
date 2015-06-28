'use strict';

angular.module('mean.temperature').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('temperature example page', {
      url: '/temperature/example',
      templateUrl: 'temperature/views/index.html'
    });
  }
]);
