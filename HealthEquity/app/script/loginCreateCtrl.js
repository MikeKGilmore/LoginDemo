(function () {
    "use strict";

    var loginCreateCtrl = function ($state, loginFactory) {
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
            if (!loginCreate.model.name || !loginCreate.model.name.trim().length) {
                alert('Name is required');
                return;
            }
            if (!loginCreate.model.email || !loginCreate.model.email.trim().length) {
                alert('Email is required');
                return;
            }
            if (!loginCreate.model.password || !loginCreate.model.password.trim().length) {
                alert('Password is required');
                return;
            }

            loginCreate.model.originUrl = window.location.href;

            loginFactory.createLogin({
                Name: loginCreate.model.name,
                Email: loginCreate.model.email,
                Password: loginCreate.model.password,
                Age: loginCreate.model.age,
                Gender: loginCreate.model.gender,
                About: loginCreate.model.about,
                OriginUrl: loginCreate.model.originUrl

            }).then(function (response) {
                console.log('success');

                $state.go('thankYouState');

            }, function (error) {
                console.log('error: ' + error);

                alert('There was an error with message: ' + error);

            });

        };

        loginCreate.cancel = function () {
            $state.go('homeState');

        };

    };

    angular.module('app')
        .controller('loginCreateCtrl', ['$state', 'loginFactory', loginCreateCtrl]);

})();