(function(module){
	module.service('cacheService', function(){

		var service = this;

		service.garagesInSessionStorage = function(){
			return (sessionStorage.getItem('garages') != null);
		};

		service.sessionIsOld = function(){
			
			var timestamp = sessionStorage.getItem('timestamp');
			var now = new Date().getTime();
			var difference = now - timestamp;
			var minutes = Math.round(difference / 60000);
			return minutes > 5;
		}

		service.setToSessionStorage = function(key, value){
			sessionStorage.setItem(key, value);
		};

		service.getGaragesFromSession = function(){
			return JSON.parse(sessionStorage.getItem('garages'));
		}
	});
})(window.angular.module('mainModule'));