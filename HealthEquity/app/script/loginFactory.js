(function () {
    'use strict';

    var loginFactory = function($resource, $q, $http) {

        var loginEndpoint = '/api/Login/:id';

        var loginsResource = $resource(loginEndpoint);


        var createLogin = function (newLogin) {
            return $http.post('/api/Login', newLogin);

        };

        var getAllLogins = function() {
            return loginsResource.query(function () {
                
            });

        };

        var getLoginById = function () {


        };

        //Login Factory API
        return {
            createLogin: createLogin,
            getAllLogins: getAllLogins,
            getLoginById: getLoginById

        }

    };

    angular.module('app')
        .factory('loginFactory', ['$resource', '$q', '$http', loginFactory]);

})();