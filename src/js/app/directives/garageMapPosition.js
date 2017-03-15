define(['angular', 'gooleApiPath'], function(angular){

    var module = angular.module('garageMapModule', []);

	module.directive('garageMapPosition', function(){

		var link = function(scope, element, attrs){

	    var map, infoWindow;
        var markers = [];

        var lat = scope.$parent.detailsCtrl.chosenGarage.geometry.coordinates[1];
        var lng = scope.$parent.detailsCtrl.chosenGarage.geometry.coordinates[0];

        // map config
        var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        
        // init the map
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // place a marker
        function setMarker(map, position, title, available_spots) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: (available_spots > 0) ? 'https://maps.google.com/mapfiles/ms/icons/green-dot.png' : 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array
            
        }
        
        // show the map and place some markers
        initMap();
        
        setMarker(map, new google.maps.LatLng(lat, lng), scope.$parent.detailsCtrl.chosenGarage.name, scope.$parent.detailsCtrl.chosenGarage.available_spots);
        }

		return{
			restrict: 'A',
			template: '<div id="googleMap" class="center-block"></div>',
			replace: true,
			link: link
		}
	});

});