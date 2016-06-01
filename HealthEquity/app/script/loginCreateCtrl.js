(function () {
    "use strict";

    var loginCreateCtrl = function ($state) {
        var loginCreate = this;

        loginCreate.model = {
            name: '',
            email: '',
            password: '',
            age: 0,
            gender: '',
            about: '',
            originUrl: '',

            debug: false

        };

        loginCreate.create = function () {
            if (!loginCreate.model.name.length) {
                alert('Name is required');
                return;
            }
            if (!loginCreate.model.email.length) {
                alert('Email is required');
                return;
            }
            if (!loginCreate.model.password.length) {
                alert('Password is required');
                return;
            }

            loginCreate.model.originUrl = window.location.href;

            $state.go('thankYouState');

        };

        loginCreate.cancel = function () {
            $state.go('homeState');
        };

    };

    angular.module('app')
        .controller('loginCreateCtrl', ['$state', loginCreateCtrl]);

})();