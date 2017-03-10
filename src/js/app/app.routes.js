(function(module){
    
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

})(window.angular.module('mainModule'));