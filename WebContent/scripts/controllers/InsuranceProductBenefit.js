var app = angular.module('myApp');
app.controller('InsuranceProductCtrl',function($scope,$modalInstance,items) {
	$scope.init = function(){

	}
	$scope.planid = items;
	if($scope.planid == 1 || $scope.planid == '1' || $scope.planid == 3 || $scope.planid == '3'){
		$scope.plan1 = true;
		 
	}else{
		$scope.noPlan = true;
	}
	if($scope.planid == 2 || $scope.planid == '2'){
		$scope.plan2 = true;
		 
	}else{
		$scope.noPlan = true;
	}
	$scope.close = function(){
		 $modalInstance.dismiss('');
	}
	

	
	$scope.init();
});