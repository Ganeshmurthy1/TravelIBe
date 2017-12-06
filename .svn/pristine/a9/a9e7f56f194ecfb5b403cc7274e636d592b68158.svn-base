var app = angular.module('myApp');
app.controller('busErrorDisplayCtrl', function ($scope,commonService,$http,$location,items,items2,$modalInstance,localStorageService,$route) {
	
	$scope.init = function(){
		$scope.Message = items;
		$scope.origin = $location.search().fromcity;
		$scope.oriStation = $location.search().fromcity;
		$scope.destination = $location.search().tocity;
		$scope.destStation = $location.search().tocity;
		$scope.depDate = $location.search().datain;
		$scope.departureFrom = $location.search().datain; 
		$scope.Theme = $location.search().thm;
	}
	
	var apiUrl = commonService.baseUrl;
	$scope.close = function () {
	    $modalInstance.dismiss('');
	    window.location.href = window.location.href.replace(/#.*$/, '#/bus');
	    location.reload();
		
	};
	$scope.isPrimary=items2.isprimarySearch;
	
	$http.get('getStations.json').then(function(response){
		stationdata=response.data.stationList;
		stationlist = [];
		stationmap = [];
		angular.forEach(stationdata, function( value, i) {  
			stationlist.push(value.stationName); 
			stationmap[value.stationName] = value.stationId;
		});
		$("#fromBusstation").autocomplete({
			source: function( request, response ) {
				var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "gi" );
				response( $.grep( stationlist, function( item ){				
					var itemavailavle = item;					
					return matcher.test( item );
				}).slice(0, 15) );
			},
			select: function (event, ui) {				
				var label = ui.item.label;
				var value = ui.item.value;					
				var stationcode = stationmap[ui.item.value];
				$('#fromBusstationcode').val(stationcode);
				$('#tostationmodal').focus();
			}
		});  
		
		$("#tostationmodal").autocomplete({
			
			source: function( request, response ) {
				
				var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "gi" );
				response( $.grep( stationlist, function( item ){				
					var itemavailavle = item;					
					return matcher.test( item );
				}).slice(0, 15) );
			},
			select: function (event, ui) {				
				var label = ui.item.label;
				var value = ui.item.value;					
				var stationcode = stationmap[ui.item.value];
				$('#tostationcode').val(stationcode);
				$('#twoEdpd1').focus();
				
			}
		}); 
	},function(errorStatus){
		
	});
	$scope.bussearch = function(){
		
	    var fromBusstation = angular.element('#fromBusstation').val();
		var fromBusstationcode = angular.element('#fromBusstationcode').val();
		var tostation = angular.element('#tostationmodal').val();
		var tostationcode = angular.element('#tostationcode').val();
		var startDate = angular.element('#twoEdpd1').val();		
		var EndDate = angular.element('#twoEdpd2').val();		 
		var agentapp_key = angular.element('#ay').val();
		if(agentapp_key ==undefined ||agentapp_key== null)
			var app_key = angular.element('#oky').val();
		else
			var app_key=agentapp_key;
		if (fromBusstation == "") {			
			$("#errori").text("Please Enter the Depature station Name");
			$('#errori').stop().fadeIn(400).delay(1500).fadeOut(400);
		}
		else if (tostation == "") {			
			$("#errori").text("Please Enter the Arrival station Name");
			$('#errori').stop().fadeIn(400).delay(1500).fadeOut(400);
		}
		else if (startDate == "") {			
			$("#errdep").text("Select the Depature date");
			$('#errdep').stop().fadeIn(400).delay(1500).fadeOut(400);
		} 
		else if (agentapp_key=="") {			
			$("#errconfig").text("User not Configured");
			$('#errconfig').stop().fadeIn(400).delay(1500).fadeOut(400);
		}
		else{

			var currency = angular.element('#onecurrencyname').val();	
			var BusSearchData = 'fromcity='+encodeURIComponent(fromBusstation)+'&fromcitycode='+encodeURIComponent(fromBusstationcode)+'&tocity='+encodeURIComponent(tostation)+'&tocitycode='+encodeURIComponent(tostationcode)+'&datain='+encodeURIComponent(startDate)+'&dateout='+encodeURIComponent(EndDate)+'&ay='+encodeURIComponent(app_key)+'&currency='+currency+'&thm='+$location.search().thm;
			  $location.path('/busList-'+$location.search().thm).search(BusSearchData);
			localStorageService.set('BusSearchData',BusSearchData);
			$modalInstance.dismiss('');
		}
	};

	$scope.research = function(){
		var busReSearchData = localStorageService.get('BusSearchData');	
		$modalInstance.dismiss('');
		$location.path('/busList-'+$scope.Theme).search(busReSearchData);
		location.reload();
	}
	$scope.reblock = function(){
		var blockingData = localStorageService.get('seatblockData');
		$modalInstance.dismiss('');
		$location.path('/BusSummary-'+$scope.Theme).search('isprimarySearch='+encodeURIComponent(false)+'&thm='+$scope.Theme);
		localStorageService.set('seatblockData',blockingData);
	}
	$scope.init();
});