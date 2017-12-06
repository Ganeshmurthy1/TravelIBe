var app = angular.module('myApp');
app.controller('LowestFareAlertCtrl',['$scope','$modalInstance','flightServices','items1','items2','items3','items4','$filter','$log','$location','$modal', function ($scope,$modalInstance,flightServices,items1,items2,items3,items4,$filter,$log,$location,$modal) {

	$scope.init = function(){
		$scope.ThemeType = $location.search().thm;
	}

	$scope.isOneway=items4.isOneway;
	$scope.fareflightsegment = items1;
	$scope.cheapfareflightsegment = items2;
	$scope.nextcheapfareflightsegment = items3;
	$scope.reason="Does not suit my schedule";
	$scope.newValue = function(value) {
		var myEl = angular.element( document.querySelector( '#resText' ) );
		myEl.attr('disabled',true); 		
		if(value ==1)
			$scope.reason="Does not suit my schedule" ;
		else if(value =="2")
			$scope.reason ="Penalty/Refund restriction";
		else if(value =="3")
			$scope.reason="Alternate corporate preferred fare selected";
		else if(value =="4")
			$scope.reason="Policy exception approval obtained";
		else if(value =="5")
			$scope.reason="Personal preference";
		else if(value =="6")
			$scope.reason="Location does not suit me";
		else if(value =="7")
			$scope.reason="Compliant to the company Travel Allowance Policy";
		else if(value =="8"){
			$scope.reason="";
			var myEl = angular.element( document.querySelector( '#resText' ) );
			myEl.attr('disabled',false); 
			// $("#resText").prop('disabled', false);
		}
	}

	$scope.continueBooking = function(){
		if($scope.reason==""){
			items4.lowfareReason=angular.element('#resText').val();
		}else{
			items4.lowfareReason=$scope.reason;
		}
		items4.isLowfare=false;
		if($scope.isOneway ==true){
			items4.lowfareFIdx1=$scope.cheapfareflightsegment.flightSegmentsGroups[0].flightSegments[0].flightIndex;
			if($scope.nextcheapfareflightsegment !=null)
				items4.lowfareFIdx2=$scope.nextcheapfareflightsegment.flightSegmentsGroups[0].flightSegments[0].flightIndex;
			else
				items4.lowfareFIdx2="";
			var url='/Flights-BookSummary-'+$scope.ThemeType+'?ad='+items4.adult+'&chd='+items4.child+'&inf='+items4.infant+'&bkTy='+encodeURIComponent(items4.bookingtype)+'&ccy='+encodeURIComponent(items4.ccy)+'&ay='+encodeURIComponent(items4.app_key)+'&finx='+encodeURIComponent(items4.flightindex)+'&sky='+encodeURIComponent(items4.searchkey)
			+'&ori='+encodeURIComponent(items4.origin)+'&des='+encodeURIComponent(items4.destination)+'&depart='+encodeURIComponent(items4.depDate)+'&arrival='+encodeURIComponent(items4.arvlDate)+'&tty='+encodeURIComponent(items4.triptype)
			+'&islowfare='+items4.isLowfare+'&lowfareflightindex1='+items4.lowfareFIdx1+'&lowfareflightindex2='+items4.lowfareFIdx2+'&reasontoselect='+encodeURIComponent(items4.lowfareReason)+'&thm='+$scope.ThemeType;
			$location.url(url);			
		}else{
			items4.lowfareFIdx1=$scope.cheapfareflightsegment.flightSegmentsGroups[0].flightSegments[0].flightIndex;
			items4.lowfarereturnFIdx1=$scope.cheapfareflightsegment.flightSegmentsGroups[1].flightSegments[0].flightIndex;
			if($scope.nextcheapfareflightsegment !=null){
				items4.lowfareFIdx2=$scope.nextcheapfareflightsegment.flightSegmentsGroups[0].flightSegments[0].flightIndex;
				items4.lowfarereturnFIdx2=$scope.nextcheapfareflightsegment.flightSegmentsGroups[0].flightSegments[0].flightIndex;
			}
			else{
				items4.lowfareFIdx2="";
				items4.lowfarereturnFIdx2="";
			}
			var url='/Flights-BookSummary-'+$scope.ThemeType+'?ad='+items4.adult+'&chd='
			+items4.child+'&inf='+items4.infant+'&bkTy='+encodeURIComponent(items4.bookingtype)
			+'&sfindx='+encodeURIComponent(items4.sflightindex)
			+'&ccy='+encodeURIComponent(items4.ccy)+'&ay='+encodeURIComponent(items4.app_key)
			+'&finx='+encodeURIComponent(items4.flightindex)+'&sky='+encodeURIComponent(items4.searchkey)
			+'&ori='+encodeURIComponent(items4.origin)+'&des='+encodeURIComponent(items4.destination)+'&depart='+encodeURIComponent(items4.depDate)+'&arrival='+encodeURIComponent(items4.arvlDate)+'&tty='+encodeURIComponent(items4.triptype)
			+'&islowfare='+items4.isLowfare+'&lowfareflightindex1='+items4.lowfareFIdx1+'&lowfareflightindex2='
			+items4.lowfareFIdx2+'&reasontoselect='+encodeURIComponent(items4.lowfareReason)+'&islowfarereturn='
			+'false'+'&lowfareflightindexreturn1='+items4.lowfarereturnFIdx1+'&lowfareflightindexreturn2='+items4.lowfarereturnFIdx2+'&reasontoselectreturn='+encodeURIComponent(items4.lowfareReason)+'&thm='+$scope.ThemeType;
			$location.url(url);	
		}

		$modalInstance.close('ok');
	}

	$scope.getlayovercompare = function(obj1,arrobj,depobj)
	{	
		var arrtime = new Date(arrobj);
		var deptime = new Date(depobj);	
		var tseconds = (deptime.getTime() - arrtime.getTime()  )/1000;    
		var contomin = tseconds / 60 ;
		var conversions = {
				'ss': angular.identity,
				'mm': function(value) { return value * 60; },
				'hh': function(value) { return value * 3600; }
		};
		var padding = function(value, length) {
			var zeroes = length - ('' + (value)).length,
			pad = '';
			while(zeroes-- > 0) pad += '0';
			return pad + value;
		};	
		var totaldur = 0;		
		angular.forEach(obj1, function(obj,index) { 			
			totaldur = totaldur + parseInt(obj.duration);         
		});
		totaldur = totaldur + contomin;			
		var totalSeconds = conversions['ss'](totaldur * 60),
		hh = Math.floor(totalSeconds / 3600),
		mm = Math.floor((totalSeconds % 3600) / 60),
		ss = totalSeconds % 60;
		var format = 'hhh mmm';
		var isPadded = angular.isDefined(isPadded)? isPadded: true;
		hh = isPadded? padding(hh, 2): hh;
		mm = isPadded? padding(mm, 2): mm;
		ss = isPadded? padding(ss, 2): ss;

		return format.replace(/hh/, hh).replace(/mm/, mm);		
	}	 

	$scope.getlayovercomparelevel2 = function(obj1,arrobj,depobj,arrobj1,depobj1)
	{		
		var arrtime = new Date(arrobj);
		var deptime = new Date(depobj);
		var arrtime1 = new Date(arrobj1);
		var deptime1 = new Date(depobj1);
		var tseconds = (deptime.getTime() - arrtime.getTime()  )/1000;    
		var contomin = tseconds / 60 ;
		var tseconds1 = (deptime1.getTime() - arrtime1.getTime()  )/1000;    
		var contomin1 = tseconds1 / 60 ;
		var conversions = {
				'ss': angular.identity,
				'mm': function(value) { return value * 60; },
				'hh': function(value) { return value * 3600; }
		};
		var padding = function(value, length) {
			var zeroes = length - ('' + (value)).length,
			pad = '';
			while(zeroes-- > 0) pad += '0';
			return pad + value;
		};	
		var totaldur = 0;		
		angular.forEach(obj1, function(obj,index) {			
			totaldur = totaldur + parseInt(obj.duration);         
		});
		totaldur = totaldur + contomin +contomin1;			
		var totalSeconds = conversions['ss'](totaldur * 60),
		hh = Math.floor(totalSeconds / 3600),
		mm = Math.floor((totalSeconds % 3600) / 60),
		ss = totalSeconds % 60;
		var format = 'hhh mmm';
		var isPadded = angular.isDefined(isPadded)? isPadded: true;
		hh = isPadded? padding(hh, 2): hh;
		mm = isPadded? padding(mm, 2): mm;
		ss = isPadded? padding(ss, 2): ss;

		return format.replace(/hh/, hh).replace(/mm/, mm);		
	}

	$scope.lowfareBooking = function(){
		if($scope.isOneway ==true){
			var url='/Flights-BookSummary-'+$scope.ThemeType+'?ad='+items4.adult+'&chd='+items4.child+'&inf='+items4.infant+'&bkTy='+encodeURIComponent(items4.bookingtype)+'&ccy='+encodeURIComponent(items4.ccy)+'&ay='+encodeURIComponent(items4.app_key)+'&finx='+encodeURIComponent(items2.flightSegmentsGroups[0].flightSegments[0].flightIndex)+'&sky='+encodeURIComponent(items4.searchkey)
			+'&ori='+encodeURIComponent(items4.origin)+'&des='+encodeURIComponent(items4.destination)+'&depart='+encodeURIComponent(items4.depDate)+'&arrival='+encodeURIComponent(items4.arvlDate)+'&tty='+encodeURIComponent(items4.triptype)
			+'&islowfare='+'true'+'&lowfareflightindex1='+""+'&lowfareflightindex2='+""+'&reasontoselect='+''+'&thm='+$scope.ThemeType;
			$location.url(url);
		}else{
			var url='/Flights-BookSummary-'+$scope.ThemeType+'?ad='+items4.adult+'&chd='
			+items4.child+'&inf='+items4.infant+'&bkTy='+encodeURIComponent(items4.bookingtype)
			+'&sfindx='+encodeURIComponent(items2.flightSegmentsGroups[1].flightSegments[0].flightIndex)
			+'&ccy='+encodeURIComponent(items4.ccy)+'&ay='+encodeURIComponent(items4.app_key)
			+'&finx='+encodeURIComponent(items2.flightSegmentsGroups[0].flightSegments[0].flightIndex)+'&sky='+encodeURIComponent(items4.searchkey)
			+'&ori='+encodeURIComponent(items4.origin)+'&des='+encodeURIComponent(items4.destination)+'&depart='+encodeURIComponent(items4.depDate)+'&arrival='+encodeURIComponent(items4.arvlDate)+'&tty='+encodeURIComponent(items4.triptype)
			+'&islowfare='+'true'+'&lowfareflightindex1='+""+'&lowfareflightindex2='
			+""+'&reasontoselect='+""+'&islowfarereturn='
			+'true'+'&lowfareflightindexreturn1='+""+'&lowfareflightindexreturn2='+""+'&reasontoselectreturn='+""+'&thm='+$scope.ThemeType;
			$location.url(url);
		}
		$modalInstance.close('ok');
	}

	$scope.nextlowfareBooking = function(){
		$scope.items1 = items3; 	
		$scope.items2 = items2;
		$scope.items3 = null; 
		$scope.items4 =  items4;
		$modalInstance.close('ok');
		var modalInstance = $modal.open({
			animation: $scope.animationsEnabled,
			templateUrl: 'views/LowestFareAlert.jsp',
			controller: 'LowestFareAlertCtrl',
			backdrop: 'static',
			keyboard: false,
			resolve: {
				items1: function () {
					return $scope.items1;
				},
				items2: function () {
					return $scope.items2;
				},
				items3: function () {
					return $scope.items3;
				},
				items4: function () {
					return $scope.items4;
				}
			}
		});
	}

	$scope.cancel = function () {
		$modalInstance.dismiss('');
	};

	$scope.init();
}]);