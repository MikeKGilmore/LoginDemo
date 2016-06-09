(function () {
    "use strict";

    angular.module('app', ['ui.router', 'ngResource']);

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            $stateProvider.state('homeState', {
                url: '/',
                templateUrl: '/app/html/home.html',
                controller: 'homeCtrl as home'
            })
            .state('loginState', {
                    url: '/login',
                    templateUrl: '/app/html/login.html',
                    controller: 'loginCtrl as login'
            })
            .state('createLoginState', {
                url: '/createLogin',
                templateUrl: '/app/html/loginCreate.html',
                controller: 'loginCreateCtrl as loginCreate'
            })
            .state('thankYouState', {
                url: '/thankYou',
                templateUrl: '/app/html/thankYou.html',
                controller: 'thankYouCtrl as thankYou'
            })
            .state('adminState', {
                url: '/admin',
                templateUrl: '/app/html/admin.html',
                controller: 'adminCtrl as admin'
            });

            $urlRouterProvider.otherwise('/');

        }])
        .run(function () {

        });

})();