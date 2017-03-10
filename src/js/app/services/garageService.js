(function(module){
	module.service('garageService', ['$http', function($http){
	//debugger;
		var service = this;

		service.getGarageList = function(){
		//debugger;
			return $http.get("http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25")
			.then(
				function successCallback(response){
				return response.data;
			}, function errorCallback(response){
				console.log(response.data);
				return;
			});
		}

	}]);
})(window.angular.module('mainModule'));