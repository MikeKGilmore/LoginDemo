(function () {
    "use strict";
    
    var homeCtrl = function ($state) {
        var home = this;

        home.model = {

        };

        home.login = function () {
            $state.go('loginState');
        };

        home.createLogin = function () {
            $state.go('createLoginState');
        };

        home.admin = function () {
            $state.go('adminState');
        };

    };
      
    angular.module('app')
        .controller('homeCtrl', ['$state', homeCtrl]);

})();