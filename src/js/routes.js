define(['angular', 'angularRoute', 'garageListCtrlPath', 'garageDetailsCtrlPath','garageMapPositionPath'], function(angular){

            var module = angular.module('appRoute', ['ngRoute','garageListModule', 'garageDetailsModule','garageMapModule']);

            module.config(function ($routeProvider) {

            // Set routing for default and drivers views
            $routeProvider
                .when('/', {
                    templateUrl: 'templates/garageList.ng.html',
                    controller: 'GarageListCtrl',
                    controllerAs: 'listCtrl'
                })
                .when('/garage/:id?', {
                    templateUrl: 'templates/garageDetails.ng.html',
                    controller: 'GarageDetailsCtrl',
                    controllerAs: 'detailsCtrl'
                })
                .otherwise({redirectTo: '/'});
        }
    );
});
