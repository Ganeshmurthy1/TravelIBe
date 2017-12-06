var app = angular.module('myApp');
app.controller('carsCtrl', function($scope,$location) {
	$scope.init = function(){
		
	}
	$scope.FlightMenu = function(){ 	$location.path('/');        }
	$scope.HotelMenu = function(){		$location.path('/hotel');	}
	$scope.BusMenu = function(){		$location.path('/bus');  	}
	$scope.CarMenu = function(){		$location.path('/cars');	}
	
	$scope.init();
});