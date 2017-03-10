(function(module){
	module.service('cacheService', function(){

		var service = this;

		service.garagesInSessionStorage = function(){
			return (sessionStorage.getItem('garages') != null);
		};

		service.setToSessionStorage = function(key, value){
			sessionStorage.setItem(key, value);
		}
	});
})(window.angular.module('mainModule'));