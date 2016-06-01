(function () {
    'use strict';

    var loginCtrl = function ($state) {
        var login = this;

        login.model = {
            email: '',
            password: '',
            errorMsg: ''
        };

        login.login = function () {
            login.model.errorMsg = '';

            if (!login.model.email.length)
                login.model.errorMsg += 'You must provide a valid e-mail.';
            if (!login.model.password.length)
                login.model.errorMsg += 'You must provide a password.';

        };

        login.cancel = function () {
            $state.go('homeState');
        };

    };

    angular.module('app')
        .controller('loginCtrl', ['$state', loginCtrl]);

})();