(function (angular) {
    'use strict';

    var myApp = angular.module('myApp', []);

    myApp.factory('pricingHelper', function () {
        return {
            calc: function (books) {
                // your code goes here
            }
        };
    });
})(angular);