(function(module){

	module.directive('garageMapPosition', ['$scope', function($scope){
		return{
			restrict: 'E',
			template: '<div id="googleMapPosition"></div>',
			link:
		}
	}]);

})(window.angular.module('mainModule'));


/*
https://developers.google.com/maps/documentation/javascript/adding-a-google-map
https://jsfiddle.net/Xeoncross/k5c2ndyL/


new Date().getTime() => 1489163860875

new Date(1489163860875)
*/