require.config({

  // alias libraries paths
	paths: {
		'angular': '../../bower_components/angular/angular',
        'angularRoute': '../../bower_components/angular-route/angular-route',
        'routesPath':'./routes',
        'garageListCtrlPath': 'app/controllers/garageListCtrl',
        'garageDetailsCtrlPath': 'app/controllers/garageDetailsCtrl',
        'garageService': 'app/services/garageService',
        'cacheService': 'app/services/cacheService',
        'garageMapPositionPath': 'app/directives/garageMapPosition',
        'gooleApiPath': 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCNgGFv1c2OJZseACnktUNwwu-TDcCVXSE'
	},

 // angular does not support AMD out of the box, put it in a shim
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute': ['angular']
    },

 //kick start application - sve sto se nalazi u deps on izvrasava odma
    deps: ['./app']
});