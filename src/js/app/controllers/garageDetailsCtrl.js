(function(module){

	module.controller('GarageDetailsCtrl', ['$scope', 'garageService', '$routeParams', 'garageMapPosition', function($scope, garageService, $routeParams, garageMapPosition){

		var ctrl = this;

		ctrl.chosenGarage = garageService.getGarageById($routeParams.id)[0];

	}]);

})(window.angular.module('mainModule'));