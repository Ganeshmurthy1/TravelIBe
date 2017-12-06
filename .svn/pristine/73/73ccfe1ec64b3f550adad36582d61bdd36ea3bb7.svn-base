var app = angular.module('myApp');
app.controller('detailedNotificationCtrl', function ($scope,$modalInstance,flightServices,items,$filter) {
	
	$scope.init = function(){
	$scope.getAllDetails(items);
	
	}
	
	$scope.getAllDetails = function(items){
		$scope.notId = items.notificationId;
		$scope.title = items.details[0].title;
		$scope.comments = items.details[0].comments;
		$scope.createdAt = items.createdAt;
		return $scope.notificationId;
	}
	$scope.expireNotifications = function(){
		var idval = $scope.notId;
		//console.log("response",idval);
		flightServices.expireNotification(idval).then(function(response){
			//console.log("response",response);
			if(response.status == 200){
				$modalInstance.close('ok');
			}
		});
}
	$scope.close = function () {
		$scope.expireNotifications();
	    //$modalInstance.dismiss('');
	};
	$scope.convertMS = function(ms) {

		var result = "";
		var date_now = new Date();
		var date_future = new Date(ms);
		// get total seconds between the times
		var delta = Math.abs(date_future - date_now) / 1000;
		// calculate (and subtract) whole days
		var days = Math.floor(delta / 86400);
		delta -= days * 86400;
		// calculate (and subtract) whole hours
		var hours = Math.floor(delta / 3600) % 24;
		delta -= hours * 3600;
		// calculate (and subtract) whole minutes
		var minutes = Math.floor(delta / 60) % 60;
		delta -= minutes * 60;
		// what's left is seconds
		var seconds = delta % 60;  // in theory the modulus is not required
		if(days == 0 && hours != 0)
			result = hours + " hours ago";
		if(days == 0 && hours == 0)
			result = minutes + " minutes ago";
		if(days == 1)
			result = "Yesterday at " + $filter('date')(date_future, 'h:mm a');
		if(days > 1)
			result = $filter('date')(date_future, 'MMMM dd') + " at " + $filter('date')(date_future, 'h:mm a');


		return result;
	}
	
	
	$scope.init();
});