define([
    'angular',
    'routesPath'
], function (angular) {
    'use strict';

    var appModule = angular.module('app', ['appRoute']);

    /*angular.element(function(){    }); wrapuje se bootstrap aplikacije ako se require.js importuje u headu
    umesto na kraju body-a */
    angular.bootstrap(document, ['app']);

});