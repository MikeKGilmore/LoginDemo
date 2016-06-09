(function () {
    'use strict';

    var adminCtrl = function ($state, loginFactory) {
        var admin = this;

        admin.model = {
            logins: [],
            
            search: {
                name: ''
            },
            showLoadingNotice: true

        };

        admin.search = function () {


        };

        admin.disableLogin = function () {


        };

        admin.done = function () {
            $state.go('homeState');

        };

        //Actions
        var asdf = loginFactory.getAllLogins()
            .$promise.then(function (logins) {
                admin.model.logins = logins;
                
                admin.model.showLoadingNotice = false;

            }).catch(function (error) {
                console.log(error);
            });

    };

    angular.module('app')
        .controller('adminCtrl', ['$state', 'loginFactory', adminCtrl]);

})();