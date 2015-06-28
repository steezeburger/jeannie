'use strict';

/* jshint -W098 */
angular.module('mean.temperature').controller('TemperatureController', ['$scope', 'Global', 'Temperature',
  function($scope, Global, Temperature) {
    $scope.global = Global;
    
    $scope.package = {
      name: 'temperature'
    };
      
    var resource = Temperature.getTemperature();
    
    resource.get({}, function(data) {
      $scope.temperature = data.result;
    });
    
  }
]);
