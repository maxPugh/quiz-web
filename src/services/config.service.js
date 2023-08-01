angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'https://quiz-api-final-env.eba-hcvprz3y.eu-north-1.elasticbeanstalk.com/';

    return service;
}]);