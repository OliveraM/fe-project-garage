(function(module){

	module.controller('GarageListCtrl', ['$scope', 'garageService', 'cacheService', function($scope, garageService, cacheService){

		var ctrl = this;

		if(cacheService.garagesInSessionStorage() && !cacheService.sessionIsOld()){
			ctrl.garages = cacheService.getGaragesFromSession();
		}else{
			garageService.getGarageList().then(function(garages){
				ctrl.garages = garages;
			});
		}	

		
			
	}]);

})(window.angular.module('mainModule'));