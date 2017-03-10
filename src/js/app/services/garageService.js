(function(module){
	module.service('garageService', ['$http', 'cacheService', '$filter', function($http, cacheService, $filter){

		var service = this;

		service.getGarageListAjax = function(){
			return $http.get("http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25")
			.then(
				function successCallback(response){
				return response.data;
			}, function errorCallback(response){
				console.log(response.data);
				return;
			});
		}

		service.getGarageList  = function(){
			if(cacheService.garagesInSessionStorage()){
				return JSON.parse(sessionStorage.getItem('garages'));
			}else{
				var garages = [];
				service.getGarageListAjax().then(function(data){
					angular.forEach(data.features, function(val, key){
							
						var garageObj = {
							id: val.properties.cdk_id,
							name: val.properties.title,
							available_spots: val.properties.layers['parking.garage'].data.FreeSpaceShort,
							total_spots: val.properties.layers['parking.garage'].data.ShortCapacity,
							geometry: val.geometry
						};

						garages.push(garageObj);
					});
					cacheService.setToSessionStorage('garages', JSON.stringify(garages));
					cacheService.setToSessionStorage('timestamp', new Date().getTime());
					debugger;
				});
				return garages;
			}
		}

		service.getGarageById = function(garage_id){
			var garages = service.getGarageList();

			return $filter('filter')(garages, {id: garage_id});
		}	

	}]);
})(window.angular.module('mainModule'));