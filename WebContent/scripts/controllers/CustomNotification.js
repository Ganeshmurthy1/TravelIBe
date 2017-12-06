var app = angular.module('myApp');
app.controller('CustomNotificationCtrl', function ($scope,$modalInstance,flightServices) {
	
	$scope.disableOk = false;
	$scope.loaderSpin = false;
	$scope.ProceedText = "OK"
    $scope.addNotifications = function() {
		$scope.ProceedText = "Please Wait"
    	$scope.disableOk = true;
    	$scope.loaderSpin = true;
	   	var notificationObj = {};
    	notificationObj.description = angular.element('#nTitle').val();
    	var frmDate = angular.element('#fDate').val();
    	notificationObj.fromDate = frmDate +" 00:00";
    	var  toDate = angular.element('#tDate').val();
    	notificationObj.toDate = toDate + " 23:59";
    	notificationObj.timeInterval = angular.element('#ntime').val();
    	notificationObj.comments = angular.element('#nMessage').val();
    	notificationObj.userId = angular.element('#userid').val();
    	notificationObj.companyId = angular.element('#cmpanyId').val();
    	notificationObj.isAdmin=true;
    	notificationObj.isEmail=false;
    	notificationObj.toEmail = "";
    	notificationObj.ccEmail = "";
    	 	
    	
    		flightServices.InsertNotification(notificationObj).then(function(response){
    			if(response.status == "200"){
    				$scope.loaderSpin = false;
    				$scope.NotificationMessage = "Notification Created Successfully."
    				$modalInstance.close('ok');    				
    			}else{
    				$scope.loaderSpin = false;
    				$scope.NotificationMessage = "Notification creation Failed Please Close to Continue."
        				//$modalInstance.close('ok');
    			}
    			
    		});
    
    	
	};

	$scope.close = function () {	  
		$modalInstance.close('ok');
	};
});