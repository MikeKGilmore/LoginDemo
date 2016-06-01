(function () {
    'use strict';

    var thankYouCtrl = function ($state) {
        var thankYou = this;

        thankYou.goBack = function () {
            $state.go('homeState');

        };

    };

    angular.module('app')
        .controller('thankYouCtrl', ['$state', thankYouCtrl]);

})();