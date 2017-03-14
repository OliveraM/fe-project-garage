(function(module){
	module.service('garageService', ['$http', 'cacheService', '$filter', function($http, cacheService, $filter){

		var service = this;

		service.getGarageListAjax = function(){
			return $http.get("http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25");
		}

		service.getGarageList  = function(){
				var garages = [];
				return service.getGarageListAjax().then(function(data){
					
					angular.forEach(data.data.features, function(val, key){
						
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

					return garages;
				});
		}

		service.getGarageById = function(garages, garage_id){			
				return $filter('filter')(garages, {id: garage_id})[0];

		}	
	}]);
})(window.angular.module('mainModule'));