var app = angular.module('myApp');
app.controller('bus-BookingHistoryCtrl',function($scope,transporter,$interval,$location,flightServices,$filter,$modal,$log,commonService,$rootScope,$http,$route) {
	$scope.init = function(){
		$scope.loading=true;
		$scope.bushistory();
		$scope.isdefaultHistory=true;
	}
	
	$scope.bushistory = function(){
		transporter.getbushistory().then(function(response){
			$scope.loading=false;
			$scope.dateOptions = {		
				    dateFormat: 'dd-mm-yy',
				    numberOfMonths: 2,
				    maxDate: 0
				    };
			$scope.busbookinglists=response.data.bushistorylist;
		},function(){
			$scope.loading=false;
			 
		});
	}
	
	$scope.defaultpage= function(){
		$scope.isdefaultHistory=true;
	 }
	
	$scope.returnIndex = function(){
		window.location.href = window.location.href.replace(/#.*$/, '');
	}
	

	$scope.Bookingsearch= function(){		
		var fromDate=$("#booktwodpd1 > div > input:text.hasDatepicker").val();
		var toDate=$("#booktwodpd2 > div > input:text.hasDatepicker").val();
		var newfromdate = fromDate.split("-").reverse().join("-");
		var newtodate = toDate.split("-").reverse().join("-");
		var fromTime = new Date(newfromdate).getTime();
		var toTime = new Date(newtodate).getTime();
		
		if (fromTime > toTime) {
			$("#errorione").text("Please Select After From Date");
			$('#errorione').stop().fadeIn(400).delay(1500).fadeOut(400);		   
		}else{
		$scope.isdefaultHistory=false;
		$scope.busbookingDatelists = [];
		var row, date;

		angular.forEach($scope.busbookinglists, function( value) { 
		  row = value.busBookingDate.split("-").reverse().join("-");
		  date = new Date(row);
		  if (date.getTime() >= fromTime && date.getTime() <= toTime) {
			  $scope.busbookingDatelists.push(value);
		  }
		});
		}		
	}
	

	$scope.init();
	
});