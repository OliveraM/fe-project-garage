(function(module){

	module.controller('GarageListCtrl', ['$scope', 'garageService', 'cacheService', function($scope, garageService, cacheService){

		var ctrl = this;

	//	ctrl.garages = []; // get from cache - if there is no cached data/ or if it's older thern 5mins - $http.get

		ctrl.garages = garageService.getGarageList();
			
	}]);

})(window.angular.module('mainModule'));