(function(module){

	module.controller('GarageDetailsCtrl', ['$scope', 'garageService', '$routeParams', function($scope, garageService, $routeParams){

		var ctrl = this;

		ctrl.chosenGarage = garageService.getGarageById($routeParams.id)[0];

	}]);

})(window.angular.module('mainModule'));