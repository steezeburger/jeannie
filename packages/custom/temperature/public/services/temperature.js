'use strict';

angular.module('mean.temperature').factory('Temperature', ['$resource',
  function ($resource) {
    return {
      
      name: 'temperature',

      getTemperature: function () {
        return $resource(
          "https://api.particle.io/v1/devices/340030000447343337373737/temperature", {}, {
            get: {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer ' + '6c41a7b9b0dfb669c1c55d3b933f3acbada437a1'
              }
            }
          }
        );
      }

    };
  }
]);