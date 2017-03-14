(function(module){

	module.controller('GarageDetailsCtrl', ['$scope', 'garageService', 'cacheService', '$routeParams', function($scope, garageService, cacheService, $routeParams){

		var ctrl = this;


		if(cacheService.garagesInSessionStorage() && !cacheService.sessionIsOld()){
			ctrl.garages = cacheService.getGaragesFromSession();
			ctrl.chosenGarage = garageService.getGarageById(ctrl.garages, $routeParams.id);
		}else{
			garageService.getGarageList().then(function(garages){
				ctrl.chosenGarage = garageService.getGarageById(garages, $routeParams.id);
			});
		}	

	}]);

})(window.angular.module('mainModule'));