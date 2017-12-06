var app = angular.module('myApp');app.controller('fareChangeModalCtrl', function ($scope,$modalInstance,flightServices,items1,items2,$filter,$log,$location, $route, $http) {
$scope.init = function(){$scope.updation();	}
$scope.updation = function(){ $scope.oldprice = items1;	$scope.updatedprice = items2; if($scope.oldprice > $scope.updatedprice)	$scope.pricechagetext = "Hurrey.. The fare for selected flight has decreased to"; 
if($scope.oldprice < $scope.updatedprice) $scope.pricechagetext = "oops The fare for selected flight has increased to";}
$scope.continueBooking = function(){$modalInstance.close('ok');}
$scope.research = function(){ $modalInstance.dismiss(''); window.location.href = window.location.href.replace(/#.*$/, '');} 
$scope.close = function () { $modalInstance.dismiss(''); window.location.href = window.location.href.replace(/#.*$/, '');}; $scope.init();
});
