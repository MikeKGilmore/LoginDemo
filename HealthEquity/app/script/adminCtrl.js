(function () {
    'use strict';

    var adminCtrl = function ($state) {
        var admin = this;

        admin.model = {

        };

        admin.done = function () {
            $state.go('homeState');

        };

    };

    angular.module('app')
        .controller('adminCtrl', ['$state', adminCtrl])

})();