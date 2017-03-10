(function(module){

	module.controller('GarageListCtrl', ['$scope', 'garageService', function($scope, garageService){
		debugger;
		var ctrl = this;

		ctrl.garages = []; // get from cache - if there is no cached data/ or if it's older thern 5mins - $http.get

		garageService.getGarageList().then(function(data){
				ctrl.garages = data;
		});

	}]);

})(window.angular.module('mainModule'));