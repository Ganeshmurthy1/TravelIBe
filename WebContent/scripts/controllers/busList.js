var app = angular.module('myApp');
app.controller('busListCtrl',['$scope','localStorageService','busServices','$modal','$log','$window','$http','$route','$location','commonService','$modalStack','localStorageService','$parse','transporter', function($scope,localStorageService,busServices,$modal,$log,$window,$http,$route,$location,commonService,$modalStack,localStorageService,$parse,transporter) {
	$scope.init = function(){
		if($location.search().ay != null){
			$scope.bususer = $scope.setScopeBusUser($location.search());

		}

		$scope.origin = $scope.bususer.origin;
		$scope.destination = $scope.bususer.destination;
		$scope.datein = $location.search().datain;
		$scope.dateout = $location.search().dateout;
		$scope.ErrorBusTravelDetails = {};
		$scope.ErrorBusTravelDetails.origin = $scope.origin
		$scope.ErrorBusTravelDetails.destination = $scope.bususer.destination;
		$scope.ErrorBusTravelDetails.depDate = $location.search().datain;
		if($scope.dateout !=""){
			$scope.isreturn=true;
		}

		$scope.isreturn=false;
		$scope.busSearch();
		$scope.isRmDetails = false;	
		var isB2BandB2E=angular.element('#isB2BandB2E').val();
		$scope.isCor=angular.element('#isCor').val();
		if($scope.isCor=='true'){
			$scope.getCompanyEn();
		}
		/*if(isB2BandB2E=='true'){
			$scope.getRmFields();
		}*/
		$scope.names = [];
		$scope.busname = null;
		$scope.Theme = $location.search().thm;
		$scope.filter = 'views/busList-'+$scope.Theme+'Filter.jsp';
		$scope.Content = 'views/busList-'+$scope.Theme+'Content.jsp';
		$scope.is_mobile = false;		
		 if( $('#hideloader').css('display')=='none') {
			 $scope.is_mobile=true;
		 }
		 $scope.ApiUrl = commonService.baseUrl;
		 $scope.transactionKey = '';
		 $scope.paxKey = '';
		 $scope.rmFieldsAllPassArray = [];
		 $scope.timestamp;
	}

	$http.get('getStations.json').then(function(response){
		stationdata=response.data.stationList;
		stationlist = [];
		stationmap = [];
		angular.forEach(stationdata, function( value, i) {  
			stationlist.push(value.stationName); 
			stationmap[value.stationName] = value.stationId;
		});
		$("#fromstation").autocomplete({		
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
				$('#fromstationcode').val(stationcode);
			}
		});  
		$("#tostation").autocomplete({
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
				$('#datain').focus();
				$('#tostationcode').val(stationcode);
			}
		}); 
	},function(errorStatus){

	});

	$scope.priceSlider = {min: 1000, max: 2000, ceil: 2000, floor: 1000, step: 10 };

	$scope.loaderSpin=false;

	$scope.loadpricebar = true;
	$scope.leftmenuloader = true;
	$scope.rightmenuloader = true;
	 

	$scope.busSearch = function(){
		$scope.loadpricebar = true;
		busServices.busSearch($scope.bususer).then(function(response){
		//$http.get('busSearch.json').then(function(response){
			$scope.markupammount = $scope.bususer.markupAmount;
			$scope.pageloading=true;
			$scope.data = response.data;
			$scope.searchKey = response.data.searchKey;	
			$scope.transactionKey = response.data.transactionkey;	
			 
			if($scope.data.availableBus.length > 0)
			{
				var pricearr = [];var boardarr = [];var droparr =[];var bustypearr =[];				 
				$scope.availableBus = $scope.data.availableBus;				 
				angular.forEach($scope.data.busSearchFilters.fares, function(value) {
					if(value != null){
						pricearr.push(parseInt(value)); 
					}
				});
 
				angular.forEach($scope.availableBus, function(bus) {
					angular.forEach(bus.boardingPoints, function(value) {
						if(value != null){
							boardarr.push(value.loc); 
						}
					});
					angular.forEach(bus.droppingPoints, function(value) {
						if(value != null){
							droparr.push(value.loc); 
						}
					});
				});

				angular.forEach($scope.data.busSearchFilters.busTypes, function(value) {
					if(value != null){
						bustypearr.push(value); 
					}
				});
				 
				angular.forEach($scope.data.busSearchFilters.busOperators, function(value) {
					if(value != null){
						$scope.names.push(value); 
					}
				});



				var uniquepricearr = [];
				uniquepricearr = pricearr.unique();
				$scope.pricelist = uniquepricearr.sort(function(a, b){return a-b});
				$scope.priceSlider = {
						min: $scope.pricelist[0],
						max: $scope.pricelist[$scope.pricelist.length - 1],
						ceil: $scope.pricelist[$scope.pricelist.length - 1],
						floor: $scope.pricelist[0],
						step: 10
				};
				 
				var uniqueboardarr = [];
				uniqueboardarr = boardarr.unique();
				$scope.boardlocationlist = uniqueboardarr;
				var uniquedroparr = [];
				uniquedroparr = droparr.unique();
				$scope.droplocationlist = droparr;
				var uniquebustypearr = [];
				uniquebustypearr = bustypearr.unique();
				$scope.bustypelist = uniquebustypearr;
				$scope.loadpricebar = false;
				$scope.loaderSpin=true;
			}
		},function(httpStatus){
			$scope.errormeg = "We could not find any Bus matching your requirements, Try Again.";
			$scope.errorDisplay($scope.errormeg,$scope.ErrorBusTravelDetails);
		});

	}


	$scope.setScopeBusUser = function(locationpath){
		$scope.isDynamicMark=false;
		var busSearch={};
		var startDate = locationpath.datain;
		var datestart = startDate.split("/").reverse().join("-");
		busSearch.currency = locationpath.currency;
		var appky= angular.element('#apky').val();	
		if(appky != null && appky != '')
			locationpath.ay = appky;	

		busSearch.app_key = locationpath.ay;
		if(locationpath.isdynamocmarkup != null){
			$scope.isDynamicMark=true;
			busSearch.isDynamicMarkup = locationpath.isdynamocmarkup;
			busSearch.markupAmount = locationpath.markupamt;	
			busSearch.searchkey = locationpath.searchkey;
			 
		}else{			
			busSearch.isDynamicMarkup=false;
			busSearch.markupAmount='0';
			busSearch.searchkey = '';
		}

		busSearch.origin = locationpath.fromcity;  busSearch.destination = locationpath.tocity; 
		busSearch.onwardDate = datestart; busSearch.returnDate= "";
		return busSearch;

	}

$scope.Showseats = function(obj,idx,busidx){
		$scope.routeserviceid=idx;
		var the_string = 'loaderSpin'+idx;
		$scope[the_string]=true;
		$scope.seatloader=false;
		$scope.curentSelectionbus=obj;
		var busdetail={};
		busdetail.app_key=$scope.bususer.app_key;
		busdetail.origin=$scope.bususer.origin;
		busdetail.destination=$scope.bususer.destination;
		busdetail.onwardDate=$scope.bususer.onwardDate;
		busdetail.searchkey=$scope.searchKey;
		busdetail.routeScheduleId=obj.routeScheduleId;
		busdetail.inventoryType=obj.inventoryType;


		busServices.buslayout(busdetail).then(function(response){
		//$http.get('seatLayout.json').then(function(response){			 
			$scope.seatdata=response.data;
			$scope.seatloader=true;
			$scope[the_string]=false;
			var lowerrowLine=[];
			var upperrowLine=[];
			var rowline1={};var rowline2={};var rowline3={};var rowline4={};var rowline5={};var rowline6={};var rowline7={};
			var urowline1={};var urowline2={};var urowline3={};	var urowline4={};var urowline5={};var urowline6={};	var urowline7={};
			$scope.seatsline1={};$scope.seatsline2={};$scope.seatsline3={};$scope.seatsline4={};$scope.seatsline5={};$scope.seatsline6={};$scope.seatsline7={};
			$scope.useatsline1={};$scope.useatsline2={};$scope.useatsline3={};$scope.useatsline4={};		
			$scope.upper=false;
			angular.forEach(response.data.seats, function(seatpoint,seatindex) {
				if(seatpoint.zIndex ==0 ){
					$scope.lowerberth=false;
					if(seatpoint.width ==1 && seatpoint.length ==1 ){
						$scope.lowerberthwithseat=false;
						if(seatpoint.row == 0){
							rowline1[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 1){
							rowline2[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 2){
							rowline3[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 3){
							rowline4[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 4){
							rowline5[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 5){
							rowline6[seatpoint.column]=seatpoint;
						}

					}
					if(seatpoint.width ==1 && seatpoint.length ==2 ){
						$scope.lowerberthwithseat=true;
						if(seatpoint.row == 0){
							rowline1[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 1){
							rowline2[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 2){
							rowline3[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 3){
							rowline4[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 4){
							rowline5[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 5){
							rowline6[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 6){
							rowline7[seatpoint.column]=seatpoint;
						}
					}
					if(seatpoint.width ==2 && seatpoint.length ==1 ){
						$scope.lowerberth=true;
						if(seatpoint.row == 0){
							rowline1[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 1){
							rowline2[seatpoint.column]=seatpoint;
						}
					}
				}
				if(seatpoint.zIndex ==1 ){
					$scope.upper=true;
					if(seatpoint.width ==1 && seatpoint.length ==2 ){
						$scope.uppervertical=false;
						if(seatpoint.row == 0){
							urowline1[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 1){
							urowline2[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 2){
							urowline3[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 3){
							urowline4[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 4){
							urowline5[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 5){
							urowline6[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 6){
							urowline7[seatpoint.column]=seatpoint;
						}
						
					}
					if(seatpoint.width ==2 && seatpoint.length ==1 ){
						if(seatpoint.row == 0){
							urowline1[seatpoint.column]=seatpoint;
						}
						if(seatpoint.row == 1){
							urowline2[seatpoint.column]=seatpoint;
						}
					}


				}



			});

/*######### SORTING FOR SEATING COLUMN*/
			function sortObject(obj) {
				var arr = [];
				for (var prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						arr.push({
							'key': prop,
							'value': obj[prop]
						});
					}
				}
				arr.sort(function(a, b) { 
					return a.value.column - b.value.column; });
				return arr; // returns array
			}


			/*lower rowsss*/
			
			if(Object.keys(rowline1).length!=0)
				lowerrowLine.row1=sortObject(rowline1);
			if(Object.keys(rowline2).length!=0)
				lowerrowLine.row2=sortObject(rowline2);
			if(Object.keys(rowline3).length!=0)
				lowerrowLine.row3=sortObject(rowline3);
			if(Object.keys(rowline4).length!=0)
				lowerrowLine.row4=sortObject(rowline4);
			if(Object.keys(rowline5).length!=0)
				lowerrowLine.row5=sortObject(rowline5);
			if(Object.keys(rowline6).length!=0)
				lowerrowLine.row6=sortObject(rowline6);					


			if(Object.keys(lowerrowLine).length ==1 ){
				$scope.seatvertical={};
				$scope.lowerberth=true;
				$scope.verticalBerth =true;
				$scope.lowerberthwithseat=false;

				angular.forEach($scope.seatdata.seats, function(seatpoint,seatindex) {
					if(seatpoint.zIndex ==0 ){
						$scope.seatvertical[seatpoint.column]=seatpoint;
					}
				});
			}else{
				$scope.verticalBerth =false;
				if($scope.lowerberthwithseat == true){					
					if(Object.keys(rowline1)[0]==0)
						$scope.seatsline1 = $scope.setlaybed(sortObject(rowline1));
					else if(Object.keys(rowline1)[0]==1)
						$scope.seatsline1 = $scope.setlaybed(sortObject(rowline1));
					if(Object.keys(rowline2)[0]==0)
						$scope.seatsline2 = $scope.setlaybed(sortObject(rowline2));
					else if(Object.keys(rowline2)[0]==1)
						$scope.seatsline2 = $scope.setlaybed(sortObject(rowline2));
					if(Object.keys(rowline3)[0]==0)
						$scope.seatsline3 = $scope.setlaybed(sortObject(rowline3));
					else if(Object.keys(rowline3)[0]==1)
						$scope.seatsline3 = $scope.setlaybed(sortObject(rowline3));
					if(Object.keys(rowline4)[0]==0)
						$scope.seatsline4 = $scope.setlaybed(sortObject(rowline4));
					else if(Object.keys(rowline4)[0]==1)
						$scope.seatsline4 = $scope.setlaybed(sortObject(rowline4));
					if(Object.keys(rowline5)[0]==0)
						$scope.seatsline5 = $scope.setlaybed(sortObject(rowline5));
					else if(Object.keys(rowline5)[0]==1)
						$scope.seatsline5 = $scope.setlaybed(sortObject(rowline5));
					if(Object.keys(rowline6)[0]==0)
						$scope.seatsline6 = $scope.setlaybed(sortObject(rowline6));
					else if(Object.keys(rowline6)[0]==1)
						$scope.seatsline6 = $scope.setlaybed(sortObject(rowline6));
					
				}else{

					if(Object.keys(rowline1).length == 0 && Object.keys(rowline2).length == 0){
						if(Object.keys(rowline3)[0]==0)			
							$scope.seatsline2 = $scope.setlay0(sortObject(rowline3));
						else if(Object.keys(rowline3)[0]==1)
							$scope.seatsline2 = $scope.setlay1(sortObject(rowline3));
						if(Object.keys(rowline4)[0]==0)			
							$scope.seatsline3 = $scope.setlay0(sortObject(rowline4));
						else if(Object.keys(rowline4)[0]==1)
							$scope.seatsline3 = $scope.setlay1(sortObject(rowline4));
						$scope.seatsline4 =rowline5;
						if(Object.keys(rowline6)[0]==0)	{
							
							angular.forEach(rowline6, function(row) {
								if(row.length ==2){
									$scope.lowerberthwithseat=true;
									$scope.seatsline5 =$scope.setlaybed(sortObject(rowline6));}
								else
									$scope.seatsline5 = $scope.setlay0(sortObject(rowline6));
							});
						
						}else if(Object.keys(rowline6)[0]==1)
							$scope.seatsline5 = $scope.setlay1(sortObject(rowline6));
						
						
					}
					else{
						if(Object.keys(rowline1).length!=0){
							$scope.isFirstrow=true;
							if(Object.keys(rowline1)[0]==0)			
								$scope.seatsline1 = $scope.setlay0(sortObject(rowline1));
							else if(Object.keys(rowline1)[0]==1)
								$scope.seatsline1 = $scope.setlay1(sortObject(rowline1));
						}
						else{
							$scope.isFirstrow=false;
							$scope.seatsline1="";
						}
						if(Object.keys(rowline2)[0]==0)	
							$scope.seatsline2 = $scope.setlay0(sortObject(rowline2));			
						else if(Object.keys(rowline2)[0]==1)
							$scope.seatsline2 = $scope.setlay1(sortObject(rowline2));
						if(Object.keys(rowline3).length ==1){
							$scope.seatsline3=rowline3;
						}else {
							if(Object.keys(rowline3)[0]==0)
								$scope.seatsline3 = $scope.setlay0(sortObject(rowline3));
							else if(Object.keys(rowline3)[0]==1)
								$scope.seatsline3 = $scope.setlay1(sortObject(rowline3));
						}
						if(Object.keys(rowline4).length ==1){
							$scope.seatsline4=rowline4;
						}else {
							if(Object.keys(rowline4)[0]==0)
								$scope.seatsline4 = $scope.setlay0(sortObject(rowline4));
							else if(Object.keys(rowline4)[0]==1)
								$scope.seatsline4 = $scope.setlay1(sortObject(rowline4));
						}
						if(Object.keys(rowline5)[0]==0)
							$scope.seatsline5 = $scope.setlay0(sortObject(rowline5));
						else if(Object.keys(rowline5)[0]==1)
							$scope.seatsline5 = $scope.setlay1(sortObject(rowline5));
						if(Object.keys(rowline6)[0]==0)
							$scope.seatsline6 = $scope.setlay0(sortObject(rowline6));
						else if(Object.keys(rowline6)[0]==1)
							$scope.seatsline6 = $scope.setlay1(sortObject(rowline6));
						if(Object.keys(rowline7)[0]==0)
							$scope.seatsline7 = $scope.setlay0(sortObject(rowline7));
						else if(Object.keys(rowline7)[0]==1)
							$scope.seatsline7 = $scope.setlay1(sortObject(rowline7));
					}
			}
			}
				

/*###########upper rows#######*/
					if(Object.keys(urowline1).length!=0)
						upperrowLine.row1=sortObject(urowline1);
					if(Object.keys(urowline2).length!=0)
						upperrowLine.row2=sortObject(urowline2);
					if(Object.keys(urowline3).length!=0)
						upperrowLine.row3=sortObject(urowline3);
					if(Object.keys(urowline4).length!=0)
						upperrowLine.row4=sortObject(urowline4);
					if(Object.keys(urowline5).length!=0)
						upperrowLine.row5=sortObject(urowline5);
					if(Object.keys(urowline6).length!=0)
						upperrowLine.row6=sortObject(urowline6);
					if(Object.keys(urowline7).length!=0)
						upperrowLine.row7=sortObject(urowline7);					
					
					if(Object.keys(upperrowLine).length ==1 ){
						$scope.useatvertical={};
						$scope.uppervertical=true;
						angular.forEach($scope.seatdata.seats, function(seatpoint,seatindex) {
							if(seatpoint.zIndex ==1 ){
								$scope.useatvertical[seatpoint.column]=seatpoint;
							}
						});
					}else{
						$scope.uppervertical=false;
						
						var sortval=[];
						if(Object.keys(urowline1).length!=0)
							sortval.push(urowline1);
						if(Object.keys(urowline2).length!=0)
							sortval.push(urowline2);
						if(Object.keys(urowline3).length!=0)
							sortval.push(urowline3);
						if(Object.keys(urowline4).length!=0)
							sortval.push(urowline4);
						if(Object.keys(urowline5).length!=0)
							sortval.push(urowline5);
						if(Object.keys(urowline6).length!=0)
							sortval.push(urowline6);
						if(Object.keys(urowline7).length!=0)
							sortval.push(urowline7);
						
						angular.forEach(sortval, function(seatpoint,seatindex) {							
							if(seatindex==0)
								$scope.useatsline1 = seatpoint;
							if(seatindex==1)
								$scope.useatsline2 = seatpoint;
							if(seatindex==2)
								$scope.useatsline3 = seatpoint;
							if(seatindex==3)
								$scope.useatsline4 = seatpoint;
						});
									

					}

					$scope.firstLine=true;
                    $scope.twoLine=true;
					if(Object.keys($scope.seatsline1).length ==0 && Object.keys($scope.seatsline2).length ==0)
						$scope.twoLine=false;
					if(Object.keys($scope.seatsline1).length ==0 && Object.keys($scope.seatsline2).length !=0)
						 $scope.firstLine=false;				
					
					$scope.center=Object.keys($scope.seatsline3).length;
					$scope.isCenter=false;
					if( $scope.center > 1){
						$scope.isCenter=true;
					}


					$('.seatOpen').hide("slow");
					if($("#seats"+busidx+idx).is(":visible")){  		  
						$('#seats'+busidx+idx).hide("slow"); 	}	      
					else{

						$('#seats'+busidx+idx).show("slow");
						$('#CancelationPolicy'+busidx).hide("slow");
						$('#Amenities'+busidx).hide("slow");
						$('#Boarding'+busidx).hide("slow");
						$('.showPolicy'+busidx).removeClass('showRedBorder');
						$('.showBoarding'+busidx).removeClass('showRedBorder');
						$('.showBorder'+busidx).removeClass('showRedBorder');	
						$scope.seatcount = 0;
						$scope.BusSeats = [];
						$scope.Busfare=[];
						$scope.Busidx=busidx;
						 
					}
			},function(){
			$scope[the_string]=false;
			$scope.noSeatsAvilable();
		})
	}

	$scope.noSeatsAvilable = function(index,obj){
		var msg="We could not find Seats Avalability.";
		$scope.maxSeatAlert(msg);
	}
	/*#######if column index start at 0*/

	$scope.setlay0 = function(obj){
		var seatsline={};		
		count=0;
		angular.forEach(obj, function(seatpoint,seatindex) {
			if(seatpoint.value.column == count ){
				seatpoint.value.seatindex=seatindex+1;
				seatsline[seatpoint.value.column]=seatpoint.value;
			}
			else{
				seatsline[count]='';
				seatpoint.seatindex=seatindex+1;
				seatsline[seatpoint.column]=seatpoint;
			}
			count +=1;
		});
		return seatsline;
	}
	/*#######if column index start at 1*/
	$scope.setlay1 = function(obj){
		var seatsline={};
		count=1;
		angular.forEach(obj, function(seatpoint,seatindex) {
			if(seatpoint.value.column == count ){
				seatpoint.value.seatindex=seatindex+1;
				seatsline[seatpoint.value.column]=seatpoint.value;
			}
			else{
				seatsline[count]='';
				seatpoint.seatindex=seatindex+1;
				seatsline[seatpoint.column]=seatpoint;
			}

			count +=1;
		});
		return seatsline;
	}

	$scope.setlaybed = function(obj){
		var seatsline={};
		angular.forEach(obj, function(seatpoint,seatindex) {

			seatpoint.value.seatindex=seatindex+1;
			seatsline[seatpoint.value.column]=seatpoint.value;
		});
		return seatsline;
	}


	$scope.setberth = function(obj){
		var seatsline={};		

		angular.forEach(obj, function(seatpoint,seatindex) {
			seatpoint.value.seatindex=seatindex+1;
			seatsline[seatpoint.value.column]=seatpoint.value;

		});
		return seatsline;
	}

	$scope.ShowAmenities = function(obj,idx){
		$('.packOpen').hide("slow");
		$('.showBorder'+idx).removeClass('showRedBorder');
		if($("#Amenities"+idx).is(":visible")){ 
			$('.showBorder'+idx).removeClass('showRedBorder');
			$('#Amenities'+idx).hide("slow"); 		      
		}else{
			$('#Amenities'+idx).show("slow");
			$('.showPolicy'+idx).removeClass('showRedBorder');
			$('.showBoarding'+idx).removeClass('showRedBorder');
			$('.showBorder'+idx).addClass('showRedBorder');		
		}
	}
	
	$scope.ShowBoarding = function(obj,idx){
		$scope.boardingPoints={};
		$scope.droppingPoints={};
		$('.packOpen').hide("slow");
		$('.showBoarding'+idx).removeClass('showRedBorder');
		if($("#Boarding"+idx).is(":visible")){ 
			$('.showBoarding'+idx).removeClass('showRedBorder');
			$('#Boarding'+idx).hide("slow"); 		      
		}else{
			$('#Boarding'+idx).show("slow");
			$('.showBorder'+idx).removeClass('showRedBorder');
			$('.showPolicy'+idx).removeClass('showRedBorder');
			$('.showBoarding'+idx).addClass('showRedBorder');		
		}
		angular.forEach(obj.boardingPoints, function(bpoint,index) { 
			$scope.boardingPoints[idx+index]={"boradid":bpoint.id,"location":bpoint.loc,"Time":bpoint.time};
		});
		angular.forEach(obj.droppingPoints, function(dpoint,index) { 
			$scope.droppingPoints[idx+index]={"boradid":dpoint.id,"location":dpoint.loc,"Time":dpoint.time};
		});
     $scope.isboard=false;
     $scope.isdrop=false;
		if(Object.keys($scope.boardingPoints).length !=0)
			$scope.isboard=true;
        if(Object.keys($scope.droppingPoints).length !=0)
        	$scope.isboard=true;		
		$scope.selectedbus = obj;  
	}
	
	
	$scope.ShowReviews = function(obj,idx){
		$('.showReviews'+idx).removeClass('showRedBorder');
		if($("#Reviews"+idx).is(":visible")){ 		  
			$('#Reviews'+idx).hide("slow"); 
			$('.showReviews'+idx).removeClass('showRedBorder');
		}else{
			$('#Reviews'+idx).show("slow");
			$('.showReviews'+idx).addClass('showRedBorder');
		}
	}
	
	$scope.ShowAvalability = function(obj,idx){
		$('.showAvalability'+idx).removeClass('showRedBorder');
		if($("#Avalability"+idx).is(":visible")){ 		  
			$('#Avalability'+idx).hide("slow"); 
			$('.showAvalability'+idx).removeClass('showRedBorder');
		}else{
			$('#Avalability'+idx).show("slow");
			$('.showAvalability'+idx).addClass('showRedBorder');
		}		
	}
	
	$scope.ShowCancelationPolicy = function(obj,idx){
		$scope.cancellations={};
		$('.packOpen').hide("slow");
		$('.showPolicy'+idx).removeClass('showRedBorder');
		if($("#CancelationPolicy"+idx).is(":visible")){ 		  
			$('#CancelationPolicy'+idx).hide("slow"); 
			$('.showPolicy'+idx).removeClass('showRedBorder');
		}else{
			$('#CancelationPolicy'+idx).show("slow");
			$('.showBorder'+idx).removeClass('showRedBorder');
			$('.showBoarding'+idx).removeClass('showRedBorder');
			$('.showPolicy'+idx).addClass('showRedBorder');
		}
		var cancellationPolicy = JSON.parse(obj.cancellationPolicy);
		$scope.cancellations=cancellationPolicy;

	}
	
	$scope.bookedSelect = function(index,obj){
		var msg="This seat already booked";
		$scope.maxSeatAlert(msg);
	}
 
	$scope.lowerSeatSelect = function(index,obj){
		 $scope.selection=true;
		if('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index ||'#upperseat'+$scope.routeserviceid+$scope.Busidx+index||'#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index ||'#mupperseat'+$scope.routeserviceid+$scope.Busidx+index){
						if($('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('SeatSelected')){	
			 
				$('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('SeatSelected');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('SeatSelectedladies')){				
				$('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('SeatSelectedladies');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('selectedbed')){				
				$('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('selectedbed');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('selectedbedver')){				
				$('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('selectedbedver');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#upperseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('selectedbed')){				
				$('#upperseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('selectedbed');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#upperseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('selectedbedver')){				
				$('#upperseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('selectedbedver');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('SeatSelected')){	
				 
				$('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('SeatSelected');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('SeatSelectedladies')){				
				$('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('SeatSelectedladies');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('selectedbed')){				
				$('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('selectedbed');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('selectedbedver')){				
				$('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('selectedbedver');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#mupperseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('selectedbed')){				
				$('#mupperseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('selectedbed');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}
			else if($('#mupperseat'+$scope.routeserviceid+$scope.Busidx+index).hasClass('selectedbedver')){				
				$('#mupperseat'+$scope.routeserviceid+$scope.Busidx+index).removeClass('selectedbedver');
				$scope.BusSeats.splice($.inArray(index, $scope.BusSeats),1);
				$scope.Busfare.splice($.inArray(obj, $scope.Busfare),1);
				var divName = $('#seat'+index).parents('div').parents('div').attr('id');
				$('#'+divName).remove();
				$scope.seatcount --;
			}else{
				if($scope.seatcount >= 6){
					//alert("maximum 6 seats only for user");
					var msg="maximum 6 seats only for user";
					$scope.maxSeatAlert(msg);
				}else{
					
					if(obj.zIndex ==0 && obj.ladiesSeat == false && $scope.verticalBerth !=true &&obj.length !=2){
						$('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('SeatSelected');
						$('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('SeatSelected');
						}
					else if(obj.zIndex ==0 && obj.ladiesSeat == true && $scope.verticalBerth !=true &&obj.length !=2){ 
						$('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('SeatSelectedladies');
					$('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('SeatSelectedladies');}
					else if(obj.zIndex ==0 &&obj.length ==2 && $scope.verticalBerth !=true){ 
						$('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('selectedbed');
						$('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('selectedbed');}
					else if(obj.zIndex ==0 && $scope.verticalBerth ==true){ 
						$('#lowerseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('selectedbedver');
						$('#mlowerseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('selectedbedver');}
					else if(obj.zIndex ==1 && $scope.uppervertical==false){ 
						$('#upperseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('selectedbed');
						$('#mupperseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('selectedbed');}
					else if(obj.zIndex ==1 && $scope.uppervertical==true){
						$('#upperseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('selectedbedver');
						$('#mupperseat'+$scope.routeserviceid+$scope.Busidx+index).addClass('selectedbedver');
					}
					// $('#lowerseat'+index).addClass('SeatSelectedladies');}
					$scope.passIdx={};
					$scope.passIdx.seat=index;
					$scope.passIdx.idx=$scope.seatcount;
					$scope.BusSeats.push($scope.passIdx);
					
					$scope.Busfare.push(obj);
					$scope.seatcount ++;		
					var objNewDiv = document.createElement('div');
					objNewDiv.setAttribute('id', 'div_' + index);
					var fareTax;
					var management;
					$scope.GSTservices=false;
					if(obj.seatFare.busServiceTax !=null){
						fareTax=obj.seatFare.busServiceTax.apiServiceTaxAmount;
						management=obj.seatFare.busServiceTax.managementFee;
					}
					else if(obj.seatFare.busGstTax !=null){
						$scope.GSTservices=true;
						fareTax=obj.seatFare.busGstTax.totalTax;
						management=obj.seatFare.busGstTax.managementFee;	
					}else{
						fareTax=obj.seatFare.apiServiceTaxAmount;
					}
				
					if(obj.ladiesSeat == false){
						if(management ==undefined){
							  
							/*objNewDiv.innerHTML = '<div class="col-md-12 col-xs-12 borderGrey passenDet paddingLR0px padTopBtm5px"><div  class="col-md-1 inp col-xs-3 paddingLR0px">'+
							'<div class="form-group clearfix tile-bd"> <select class="form-control" name="gender" id="gender'+$scope.seatcount+'">'+
							'<option>Male</option><option>Female</option></select></div></div>'+
							'<div class="col-md-2 inp col-xs-4"><input type="text" id="firstname'+$scope.seatcount+'" name="fN" class="form-control width100per NameFontMAnl " placeholder="Given Name" maxlength="18" required="required" autocomplete="off" onkeypress="return isAlphabetKey(event,this);" data-ng-model="fname'+index+'" value=""  data-ng-required="true" data-fv-regexp="true"'+
							'data-fv-regexp-regexp="^[a-z\s]+$" data-fv-regexp-message="The full name can consist of alphabetical characters and spaces only"/></div>'+
							'<div class="col-md-2 inp col-xs-4"><input type="text" id="lastname'+$scope.seatcount+'" onkeypress="return isAlphabetKey(event,this);" data-ng-model="lname'+index+'" class="form-control width100per NameFontMAnl" value="" placeholder="Surname" required="required"/></div>'+
							'<div class="col-md-1 inp col-xs-1"><input type="text" id="age'+$scope.seatcount+'" pattern="[0-9]{2}" maxlength="2" onkeypress="return isNumberKey(event,this)" data-ng-model="passage'+index+'" class="form-control width100per" value="" placeholder="Age" required="required"/></div>'+
							'<div class="col-md-1 txnp col-xs-1 hidden-xs" id="seat'+index+'" >'+obj.id+'<input type="hidden" id="seatNbr'+index+'" value="'+obj.id+'" />'+
							'<input type="hidden" id="isladiesSeat'+index+'" value="'+obj.ladiesSeat+'" /><input type="hidden" id="issleeper'+index+'" value="'+obj.sleeper+'" />'+
							'<input type="hidden" id="isAc'+index+'" value="'+obj.ac+'" /></div>'+
							'<div class="col-md-1 txnp col-xs-2 hidden-xs" id="baseFare">'+obj.seatFare.apiPrice+'</div>'+
							'<div class="col-md-3   hidden-xs" id="tax">'+fareTax+'</div>'+
							'<div class="col-xs-12 visible-xs paddingLR0px padTopBtm5px"><div class="txnp col-xs-3 ">Seat No:'+obj.id+'</div>'+
							'<div class="txnp col-xs-3">Tax:'+fareTax+'</div>'+
							'<div class="txnp col-xs-4">Base Fare:'+obj.seatFare.apiPrice+'</div></div></div>';*/
							objNewDiv.innerHTML = '<div class="col-md-12 col-xs-12 borderGrey passenDet paddingLR0px padTopBtm5px"><div  class="col-md-1 inp col-xs-3 paddingLR0px">'+
							'<div class="form-group clearfix tile-bd"> <select class="form-control" name="gender" id="gender'+$scope.seatcount+'">'+
							'<option>Male</option><option>Female</option></select></div></div>'+
							'<div class="col-md-2 inp col-xs-4"><input type="text" id="firstname'+$scope.seatcount+'" name="fN" class="form-control width100per NameFontMAnl " placeholder="Given Name" maxlength="18" required="required" autocomplete="off" onkeypress="calltheApi('+$scope.seatcount+')" data-ng-model="fname'+index+'" value=""  data-ng-required="true" data-fv-regexp="true"'+
							'data-fv-regexp-regexp="^[a-z\s]+$" data-fv-regexp-message="The full name can consist of alphabetical characters and spaces only"/></div>'+
							'<div class="col-md-2 inp col-xs-4"><input type="text" id="lastname'+$scope.seatcount+'" onkeypress="return isAlphabetKey(event,this);" data-ng-model="lname'+index+'" class="form-control width100per NameFontMAnl" value="" placeholder="Surname" required="required"/></div>'+
							'<div class="col-md-1 inp col-xs-1"><input type="text" id="age'+$scope.seatcount+'" pattern="[0-9]{2}" maxlength="2"  data-ng-model="passage'+index+'" class="form-control width100per" value="" placeholder="Age" required="required"/></div>'+
							'<div class="col-md-1 txnp col-xs-1 hidden-xs" id="seat'+index+'" >'+obj.id+'<input type="hidden" id="seatNbr'+index+'" value="'+obj.id+'" />'+
							'<input type="hidden" id="isladiesSeat'+index+'" value="'+obj.ladiesSeat+'" /><input type="hidden" id="issleeper'+index+'" value="'+obj.sleeper+'" />'+
							'<input type="hidden" id="isAc'+index+'" value="'+obj.ac+'" /></div>'+
							'<div class="col-md-1 txnp col-xs-2 hidden-xs" id="baseFare">'+obj.seatFare.apiPrice+'</div>'+
							'<div class="col-md-3   hidden-xs" id="tax">'+fareTax+'</div>'+
							'<div class="col-xs-12 visible-xs paddingLR0px padTopBtm5px"><div class="txnp col-xs-3 ">Seat No:'+obj.id+'</div>'+
							'<div class="txnp col-xs-3">Tax:'+fareTax+'</div>'+
							'<div class="txnp col-xs-4">Base Fare:'+obj.seatFare.apiPrice+'</div></div>'+
							'<div id="ShowRmDetails'+$scope.seatcount+'" class="col-md-12 col-sm-12 col-xs-12" style="display:none;">'+
							'<div id="rmFields'+$scope.seatcount+'"></div>'+
							'</div></div>';
						}else{						
						objNewDiv.innerHTML = '<div class="col-md-12 col-xs-12 borderGrey passenDet paddingLR0px padTopBtm5px"><div  class="col-md-1 inp col-xs-3 paddingLR0px">'+
						'<div class="form-group clearfix tile-bd"> <select class="form-control" name="gender" id="gender'+$scope.seatcount+'">'+
						'<option>Male</option><option>Female</option></select></div></div>'+
						'<div class="col-md-2 inp col-xs-4"><input type="text" id="firstname'+$scope.seatcount+'" name="fN" class="form-control width100per NameFontMAnl" placeholder="Given Name" maxlength="18" required="required" autocomplete="off" onkeypress="calltheApi('+$scope.seatcount+')" data-ng-model="fname'+index+'" value=""  data-ng-required="true" data-fv-regexp="true"'+
						'data-fv-regexp-regexp="^[a-z\s]+$" data-fv-regexp-message="The full name can consist of alphabetical characters and spaces only"/></div>'+
						'<div class="col-md-2 inp col-xs-4"><input type="text" id="lastname'+$scope.seatcount+'" onkeypress="AlphabetKey(event,this);" data-ng-model="lname'+index+'" class="form-control width100per NameFontMAnl" value="" placeholder="Surname" required="required"/></div>'+
						'<div class="col-md-1 inp col-xs-1"><input type="text" id="age'+$scope.seatcount+'" pattern="[0-9]{2}" maxlength="2" onkeypress="return isNumberKey(event,this)" data-ng-model="passage'+index+'" class="form-control width100per" value="" placeholder="Age" required="required"/></div>'+
						'<div class="col-md-1 txnp col-xs-1 hidden-xs" id="seat'+index+'" >'+obj.id+'<input type="hidden" id="seatNbr'+index+'" value="'+obj.id+'" />'+
						'<input type="hidden" id="isladiesSeat'+index+'" value="'+obj.ladiesSeat+'" /><input type="hidden" id="issleeper'+index+'" value="'+obj.sleeper+'" />'+
						'<input type="hidden" id="isAc'+index+'" value="'+obj.ac+'" /></div>'+
						'<div class="col-md-1 txnp col-xs-2 hidden-xs" id="baseFare">'+obj.seatFare.apiPrice+'</div>'+
						'<div class="col-md-1 hidden-xs" id="baseFare">'+management+'</div>'+
						'<div class="col-md-3  hidden-xs" id="tax">'+fareTax+'</div>'+
						'<div class="col-xs-12 visible-xs paddingLR0px padTopBtm5px"><div class="txnp col-xs-2 ">Seat No:'+obj.id+'</div>'+
						'<div class="txnp col-xs-2">Tax:'+fareTax+'</div>'+
						'<div class="txnp col-xs-4">Management Fee:'+management+'</div>'+
						'<div class="txnp col-xs-4">Base Fare:'+obj.seatFare.apiPrice+'</div></div>'+
						'<div id="ShowRmDetails'+$scope.seatcount+'" class="col-md-12 col-sm-12 col-xs-12" style="display:none;">'+
						'<div id="rmFields'+$scope.seatcount+'"></div>'+
						'</div>';
						}
					}

					if(obj.ladiesSeat == true){
						if(management ==undefined){
							objNewDiv.innerHTML = '<div class="col-md-12 col-xs-12 borderGrey passenDet paddingLR0px padTopBtm5px"><div  class="col-md-1 inp  col-xs-3 paddingLR0px">'+
							'<div class="form-group clearfix tile-bd"> <select class="form-control" name="gender" id="gender'+$scope.seatcount+'">'+
							'<option disabled>Male</option><option>Female</option></select></div></div>'+
							'<div class="col-md-2 inp col-xs-4"><input type="text" id="firstname'+$scope.seatcount+'" data-ng-model="fname'+index+'" class="form-control width100per NameFontMAnl"placeholder="Given Name" maxlength="18"  data-ng-required="true" autocomplete="off" onkeypress="return isAlphabetKey(event,this);" value="" placeholder="Name"/></div>'+
							'<div class="col-md-2 inp  col-xs-4"><input type="text" id="lastname'+$scope.seatcount+'" onkeypress="return isAlphabetKey(event,this);" data-ng-model="lname'+index+'" class="form-control width100per NameFontMAnl" value="" placeholder="Surname"/></div>'+
							'<div class="col-md-1 inp col-xs-1"><input type="text" id="age'+$scope.seatcount+'" pattern="[0-9]{2}" maxlength="2" onkeypress="return isNumberKey(event,this)" data-ng-model="passage'+index+'" class="form-control width100per" value="" placeholder="Age"/></div>'+
							'<div class="col-md-1 txnp col-xs-1 hidden-xs" id="seat'+index+'" >'+obj.id+'<input type="hidden" id="seatNbr'+index+'" value="'+obj.id+'" />'+
							'<input type="hidden" id="isladiesSeat'+index+'" value="'+obj.ladiesSeat+'" /><input type="hidden" id="issleeper'+index+'" value="'+obj.sleeper+'" />'+
							'<input type="hidden" id="isAc'+index+'" value="'+obj.ac+'" /></div>'+
							'<div class="col-md-1 txnp col-xs-2 hidden-xs" id="baseFare">'+obj.seatFare.apiPrice+'</div>'+
							'<div class="col-md-3   hidden-xs" id="tax">'+fareTax+'</div>'+
							'<div class="col-xs-12 visible-xs paddingLR0px padTopBtm5px"><div class="txnp col-xs-3 ">Seat No:'+obj.id+'</div>'+
							'<div class="txnp col-xs-3">Tax:'+fareTax+'</div>'+
							'<div class="txnp col-xs-4">Base Fare:'+obj.seatFare.apiPrice+'</div></div></div>';
						}else{
							objNewDiv.innerHTML = '<div class="col-md-12 col-xs-12 borderGrey passenDet paddingLR0px padTopBtm5px"><div  class="col-md-1 inp col-xs-3 paddingLR0px">'+
							'<div class="form-group clearfix tile-bd"> <select class="form-control" name="gender" id="gender'+$scope.seatcount+'">'+
							'<option disabled>Male</option><option>Female</option></select></div></div>'+
							'<div class="col-md-2 inp col-xs-4"><input type="text" id="firstname'+$scope.seatcount+'" data-ng-model="fname'+index+'" class="form-control width100per NameFontMAnl"placeholder="Given Name" maxlength="18"  data-ng-required="true" autocomplete="off" onkeypress="return isAlphabetKey(event,this);" value="" placeholder="Name"/></div>'+
							'<div class="col-md-2  inp col-xs-4"><input type="text" id="lastname'+$scope.seatcount+'" onkeypress="return isAlphabetKey(event,this);" data-ng-model="lname'+index+'" class="form-control width100per NameFontMAnl" value="" placeholder="Surname"/></div>'+
							'<div class="col-md-1 inp col-xs-1"><input type="text" id="age'+$scope.seatcount+'" pattern="[0-9]{2}" maxlength="2" onkeypress="return isNumberKey(event,this)" data-ng-model="passage'+index+'" class="form-control width100per" value="" placeholder="Age"/></div>'+
							'<div class="col-md-1 txnp col-xs-1 hidden-xs" id="seat'+index+'" >'+obj.id+'<input type="hidden" id="seatNbr'+index+'" value="'+obj.id+'" />'+
							'<input type="hidden" id="isladiesSeat'+index+'" value="'+obj.ladiesSeat+'" /><input type="hidden" id="issleeper'+index+'" value="'+obj.sleeper+'" />'+
							'<input type="hidden" id="isAc'+index+'" value="'+obj.ac+'" /></div>'+
							'<div class="col-md-1 txnp col-xs-2 hidden-xs" id="baseFare">'+obj.seatFare.apiPrice+'</div>'+
							'<div class="col-md-1 hidden-xs" id="baseFare">'+management+'</div>'+
							'<div class="col-md-3  hidden-xs" id="tax">'+fareTax+'</div>'+
							'<div class="col-xs-12 visible-xs paddingLR0px padTopBtm5px"><div class="txnp col-xs-2 ">Seat No:'+obj.id+'</div>'+
							'<div class="txnp col-xs-2">Tax:'+fareTax+'</div>'+
							'<div class="txnp col-xs-4">Management Fee:'+management+'</div>'+
							'<div class="txnp col-xs-4">Base Fare:'+obj.seatFare.apiPrice+'</div></div></div>';
						}
						
					}
					document.getElementById('passengerDetails'+$scope.routeserviceid+$scope.Busidx).appendChild(objNewDiv);
				}	
			}
			if($scope.BusSeats.length !=0){
				$scope.selection=true;
			}

			var totalprice=0;
			angular.forEach($scope.Busfare, function(seat) {
				totalprice=totalprice+seat.seatFare.bookingPrice;
			});
		}

		//document.getElementById('prices').removeChild();
		var objfareDiv = document.createElement('div');
		objfareDiv.innerHTML = '<div class="col-md-12 col-xs-12 borderGrey paddingLR0px padTopBtm5px"><div class="col-md-12 col-xs-12 paddingLR0px">'+
		'<div class="col-md-12 col-xs-12"><h4>Total Price: '+totalprice+'</h4></div>'+
		'<div class="col-md-2" id="tax"></div></div>';

		if(document.getElementById('prices'+$scope.routeserviceid+$scope.Busidx).childNodes.length !=0){
			var myNode = document.getElementById('prices'+$scope.routeserviceid+$scope.Busidx);
			while (myNode.firstChild) {
				myNode.removeChild(myNode.firstChild);
			}
			document.getElementById('prices'+$scope.routeserviceid+$scope.Busidx).appendChild(objfareDiv);

		}else{
			document.getElementById('prices'+$scope.routeserviceid+$scope.Busidx).appendChild(objfareDiv);
		}


	}
	
 $scope.blockseat=function(idx){
	 
	 $scope.timestamp = jQuery.now();
		var blockDet={};
		var rmDet=[];
		var busPaxDetails=[];
		
		angular.forEach($scope.BusSeats, function(pvalue,index) {
			 
			var passdetails = {};
			if(index==0){
				passdetails.isPrimaryPax=true;
			}else{
				passdetails.isPrimaryPax=false;
			}
			var passeFirstname = pvalue.idx + 1;
			 
			passdetails.gender=document.getElementById('gender'+passeFirstname).value;
			passdetails.firstName = angular.element('#firstname'+passeFirstname).val();
			passdetails.lastName= angular.element('#lastname'+passeFirstname).val();
			passdetails.age= angular.element('#age'+passeFirstname).val();
			passdetails.seatNbr=angular.element('#seatNbr'+pvalue.seat).val();			
			passdetails.isSleeper = angular.element('#issleeper'+pvalue.seat).val();
			passdetails.isAc=angular.element('#isAc'+pvalue.seat).val();
			passdetails.isladiesSeat=angular.element('#isladiesSeat'+pvalue.seat).val();
							
			if($scope.isCor=='true'){
				var compId = $('#compId').val();
				var passKey = passeFirstname;
				$scope.paxKey = $scope.transactionKey + compId + passKey+$scope.timestamp;	
				 passdetails.paxId =	$scope.paxKey;
				
			}else{
				passdetails.paxId = "";
				$scope.paxKey = "";
				
				
			}
			
			if($scope.isCor=='true'){
				 $scope.rmFields = {};
				if(angular.element('#empCode-'+passeFirstname).val()){
					$scope.rmFields.empCode = angular.element('#empCode-'+passeFirstname).val();
				}else{
					$scope.rmFields.empCode = "";
				}
				if(angular.element('#department-'+passeFirstname).val()){
					$scope.rmFields.department = angular.element('#department-'+passeFirstname).val();
				}else{
					$scope.rmFields.department = "";
				}
				 if(angular.element('#costCenter-'+passeFirstname).val()){
					$scope.rmFields.costCenter = angular.element('#costCenter-'+passeFirstname).val();
				}else{
					$scope.rmFields.costCenter =  "";
				}
				
				if(angular.element('#approverName-'+passeFirstname).val()){
					$scope.rmFields.approverName = angular.element('#approverName-'+passeFirstname).val();
				}else{
					$scope.rmFields.approverName = "";
				}
				if(angular.element('#location-'+passeFirstname).val()){
					$scope.rmFields.location = angular.element('#location-'+passeFirstname).val();
				}else{
					$scope.rmFields.location = "";
				}
			
				if(angular.element('#trNumber-'+passeFirstname).val()){
					$scope.rmFields.trNumber = angular.element('#trNumber-'+passeFirstname).val();
				}else{
					$scope.rmFields.trNumber = "";
				}
				
				if(angular.element('#bussinessUnit-'+passeFirstname).val()){
					$scope.rmFields.bussinessUnit = angular.element('#bussinessUnit-'+passeFirstname).val();
				}else{
					$scope.rmFields.bussinessUnit = "";
				}
			
				if(angular.element('#projectCode-'+passeFirstname).val()){
					$scope.rmFields.projectCode = angular.element('#projectCode-'+passeFirstname).val();
				}else{
					$scope.rmFields.projectCode = "";
				}
			
				if(angular.element('#reasonForTravel-'+passeFirstname).val()){
					$scope.rmFields.reasonForTravel = angular.element('#reasonForTravel-'+passeFirstname).val();
				}else{
					$scope.rmFields.reasonForTravel = "";
				}
					
				if(angular.element('#billNonBill-'+passeFirstname).val()){
					$scope.rmFields.billNonBill = angular.element('#billNonBill-'+passeFirstname).val();
				}else{
					$scope.rmFields.billNonBill  = "";
				}
				 
				if(angular.element('#manualField-'+passeFirstname+'1').val()){
					$scope.rmFields.manualField1 = angular.element('#manualField-'+passeFirstname+'1').val();
				}else{
					$scope.rmFields.manualField1 = "";
				}
				if( angular.element('#manualField-'+passeFirstname+'2').val()){
					$scope.rmFields.manualField2 = angular.element('#manualField-'+passeFirstname+'2').val();
				}else{
					$scope.rmFields.manualField2 = "";
				}
				if(angular.element('#manualField-'+passeFirstname+'3').val()){
					$scope.rmFields.manualField3 = angular.element('#manualField-'+passeFirstname+'3').val();
				}else{
					$scope.rmFields.manualField3 = "";
				}
				if(angular.element('#manualField-'+passeFirstname+'4').val()){
					$scope.rmFields.manualField4 = angular.element('#manualField-'+passeFirstname+'4').val();
				}else{
					$scope.rmFields.manualField4 = "";
				}
				if(angular.element('#manualField-'+passeFirstname+'5').val()){
					$scope.rmFields.manualField5 = angular.element('#manualField-'+passeFirstname+'5').val();
				}else{
					$scope.rmFields.manualField5 = "";
				}
				$scope.rmFields.paxId = $scope.paxKey;
				 $scope.rmFieldsAllPassArray.push($scope.rmFields);
				 
				
			}	
			
			
			busPaxDetails.push(passdetails);
		});
		
		 
		var bordingpoint=document.getElementById('boardingPoints').value;
		var boardingpointobj = JSON.parse(bordingpoint);

		
		blockDet.app_key = angular.element('#ay').val();
		blockDet.userId = angular.element('#userid').val();
		blockDet.userName = angular.element('#uname').val();
		blockDet.payMode = angular.element('#isagent').val();
		blockDet.quotationid = "";
		blockDet.isQuotation = "false";
		blockDet.origin=$scope.bususer.origin;
		blockDet.destination=$scope.bususer.destination;
		blockDet.onwardDate=$scope.bususer.onwardDate;
		blockDet.searchkey=$scope.searchKey;
		blockDet.routeScheduleId=$scope.curentSelectionbus.routeScheduleId;
		blockDet.inventoryType=$scope.curentSelectionbus.inventoryType;
		blockDet.boardingPoint=boardingpointobj;
		blockDet.droppingPoint=null;
		blockDet.email=angular.element('#email'+idx+$scope.Busidx).val();
		blockDet.phone=angular.element('#mobile'+idx+$scope.Busidx).val();
		var emflag=angular.element('#emFlag').val();
		if(emflag == 'true'){
			blockDet.emulateByCompanyId = angular.element('#emCompany').val();
			blockDet.emulateByUserId = angular.element('#emUname').val();
			blockDet.isEmulateFlag = true;
		}
		else{
			blockDet.emulateByCompanyId = '';
			blockDet.emulateByUserId = '';
			blockDet.isEmulateFlag = false;
		}
		
// Company Entity Codes
		var companyEntityId='';
		if($scope.isCor=='true'){
		if($scope.CompanyEn.length >= 1){
			var companyen="";
			companyen=angular.element('#CompanyEntity'+idx+$scope.Busidx).val();
			var iscom=false;
			
			if(companyen =="null"||companyen==undefined||companyen==""){
				blockDet.isCompanyEntity=false;
			}else{
				var ComEntityobj = JSON.parse(companyen);
				iscom=true;
				companyEntityId=ComEntityobj.companyEntityId;
			}
			blockDet.companyEntityId = companyEntityId;
			blockDet.isCompanyEntity = iscom;
		}
		else{
			blockDet.companyEntityId = companyEntityId;
			blockDet.isCompanyEntity = false;
		}
		}else{
			blockDet.companyEntityId = companyEntityId;
			blockDet.isCompanyEntity = false;
		}

		blockDet.isRmDetails=false;


 // Rm Details Codes
/*		var rmDataList={};
		var rmDataArrayList = [];
		blockDet.isRmDetails = $scope.isRmDetails;
		if(angular.element('#EmployeeCod'+idx+$scope.Busidx).val())
			rmDataList.empCode = angular.element('#EmployeeCod'+idx+$scope.busidx).val();
		else
			rmDataList.empCode = "";
		if(angular.element('#Department'+idx+$scope.Busidx).val())
			rmDataList.department = angular.element('#Department'+idx+$scope.Busidx).val();
		else
			rmDataList.department = "";
		if(angular.element('#CostCenter'+idx+$scope.Busidx).val())
			rmDataList.costCenter = angular.element('#CostCenter'+idx+$scope.Busidx).val();
		else
			rmDataList.costCenter = "";
		if(angular.element('#Approver'+idx+$scope.Busidx).val())
			rmDataList.approverName = angular.element('#Approver'+idx+$scope.Busidx).val();
		else
			rmDataList.approverName = "";
		if(angular.element('#Location'+idx+$scope.Busidx).val())
			rmDataList.location = angular.element('#Location'+idx+$scope.Busidx).val();
		else
			rmDataList.location = "";
		if(angular.element('#trNumber'+idx+$scope.Busidx).val())
			rmDataList.trNumber = angular.element('#trNumber'+idx+$scope.Busidx).val();
		else
			rmDataList.trNumber = "";
		if(angular.element('#businessUnit'+idx+$scope.Busidx).val())
			rmDataList.bussinessUnit = angular.element('#businessUnit'+idx+$scope.Busidx).val();
		else
			rmDataList.bussinessUnit = "";
		if(angular.element('#projectCode'+idx+$scope.Busidx).val())
			rmDataList.projectCode = angular.element('#projectCode'+idx+$scope.Busidx).val();
		else
			rmDataList.projectCode = "";
		if(angular.element('#reason'+idx+$scope.Busidx).val())
			rmDataList.reasonForTravel = angular.element('#reason'+idx+$scope.Busidx).val();
		else
			rmDataList.reasonForTravel = "";
		if(angular.element('#billingCode'+idx+$scope.Busidx).val())
			rmDataList.billNonBill = angular.element('#billingCode'+idx+$scope.Busidx).val();
		else
			rmDataList.billNonBill = "";
		if(angular.element('#manual0'+idx+$scope.Busidx).val())
			rmDataList.manualField1 = angular.element('#manual0'+idx+$scope.Busidx).val();
		else
			rmDataList.manualField1 = "";
		if(angular.element('#manual1'+idx+$scope.Busidx).val())
			rmDataList.manualField2 = angular.element('#manual1'+idx+$scope.Busidx).val();
		else
			rmDataList.manualField2 = "";
		if(angular.element('#manual2'+idx+$scope.Busidx).val())
			rmDataList.manualField3 = angular.element('#manual2'+idx+$scope.Busidx).val();
		else
			rmDataList.manualField3 = "";
		if(angular.element('#manual3'+idx+$scope.Busidx).val())
			rmDataList.manualField4 = angular.element('#manual3'+idx+$scope.Busidx).val();
		else
			rmDataList.manualField4 = "";
		if(angular.element('#manual4'+idx+$scope.Busidx).val())
			rmDataList.manualField5 = angular.element('#manual4'+idx+$scope.Busidx).val();
		else
			rmDataList.manualField5 = "";

		rmDataArrayList.push(rmDataList); 
		blockDet.rmDataListDetails = rmDataArrayList;*/
 
		 blockDet.busPaxDetails=busPaxDetails;		
		var BusSearchData = 'fromcity='+encodeURIComponent($location.search().fromcity)+'&fromcitycode='+encodeURIComponent($location.search().fromcitycode)+'&tocity='+encodeURIComponent($location.search().tocity)+'&tocitycode='+encodeURIComponent($location.search().tocitycode)+'&datain='+encodeURIComponent($location.search().datain)+'&dateout='+encodeURIComponent($location.search().dateout)+'&ay='+encodeURIComponent(blockDet.app_key)+'&currency='+$location.search().currency+'isprimarySearch='+encodeURIComponent(true)+'&thm='+$scope.Theme;
		$location.path('/BusSummary-'+$scope.Theme).search(BusSearchData);
		localStorageService.set('seatblockData',blockDet);
		
		$scope.rmCallData = {};
		 $scope.rmCallData.txKey = $scope.transactionKey;
		 $scope.rmCallData.serviceType = "Bus";
		 $scope.rmCallData.rmConfigList = $scope.rmFieldsAllPassArray;
		
		localStorageService.set('rmblockData',$scope.rmCallData);
		 
		
	}


 
	$scope.addmarkup = function(){		 
		var fromstation = $location.search().fromcity;
		var fromstationcode = $location.search().fromcitycode; 
		var tostation = $location.search().tocity; 
		var tostationcode=$location.search().tocitycode; 
		var startDate=$location.search().datain; 
		var EndDate=$location.search().dateout; 
		var app_key = angular.element('#ay').val();
		var currency=$location.search().currency;
		var isdynamocmarkup = angular.element('#isDynamic').val();
		var isDynamicMarkup=isdynamocmarkup;          
		var markupamt = angular.element('#appliedmarkamt').val(); 
		var markupAmount=markupamt;
		var searchkey=$scope.searchKey;
		var busAddMArkup =  'fromcity='+encodeURIComponent(fromstation)+'&fromcitycode='+encodeURIComponent(fromstationcode)+'&tocity='+encodeURIComponent(tostation)+'&tocitycode='+encodeURIComponent(tostationcode)+'&datain='+encodeURIComponent(startDate)+'&dateout='+encodeURIComponent(EndDate)+'&ay='+encodeURIComponent(app_key)+'&currency='+currency+'&isdynamocmarkup='+encodeURIComponent(isDynamicMarkup)+'&markupamt='+markupAmount+'&searchkey='+searchkey+'&thm='+$location.search().thm;
		$location.path('/busList-'+$location.search().thm).search(busAddMArkup);
	}
	$scope.getCompanyEn =function(){
		transporter.getcompanyentity().then(function(response){
			 $scope.CompanyEn=response.data.jsonResult.companyEntities;
				 
		});
	}
	/*$scope.getRmFields = function(){
		transporter.getrmdetail().then(function(response){
			$scope.rmData = response.data;
			var RmData = $scope.rmData.rmConfigModel;
			$scope.approverName = false;	$scope.billNonBill = false;	$scope.bussinessUnit = false;
			$scope.costCenter = false;	$scope.department = false;	$scope.empCode = false;
			$scope.projectCode = false;	$scope.location = false;	$scope.reasonForTravel = false;
			$scope.trNumber = false;
			if(RmData){
				$scope.isRmDetails = true;
				if(RmData.approverName == true){ $scope.approverName = true; }
				if(RmData.billNonBill == true){ $scope.billNonBill = true; }
				if(RmData.bussinessUnit == true){ $scope.bussinessUnit = true; }
				if(RmData.costCenter == true){ $scope.costCenter = true; }
				if(RmData.department == true){ $scope.department = true; }
				if(RmData.empCode == true){ $scope.empCode = true; }
				if(RmData.projectCode == true){ $scope.projectCode = true; }
				if(RmData.location == true){ $scope.location = true; }
				if(RmData.reasonForTravel == true){ $scope.reasonForTravel = true; }
				if(RmData.trNumber == true){ $scope.trNumber = true; }

			}

			$scope.ManulaFieldList = $scope.rmData.fieldName;
		});
	};*/

	/*	search by name filter*/
	$scope.showAllBuses = true;
	$scope.busnameIncludes = [];	

	$scope.BusnameFilter = function(obj) {
		  
		var selloc = false;
		if($scope.busname == ''){
			$scope.busnameIncludes.splice(0, 1);
			$scope.showAllBuses = true; 
			return true;
		}
		if($scope.showAllBuses) 
		{return true;}
		else
		{				angular.forEach($scope.busnameIncludes, function(arrvalue,arrindex) { 
				if($scope.busnameIncludes[arrindex] == obj.operatorName) 
				{
					selloc = true;
				}
			});
			return selloc;}

	};


	$scope.modifysearch = function()
	{

		var fromstation = angular.element('#fromstation').val();
		var fromstationcode = angular.element('#fromstationcode').val();
		var tostation = angular.element('#tostation').val();
		var tostationcode = angular.element('#tostationcode').val();
		var startDate =  angular.element('#depDate').val();		
		var EndDate = '';
		var agentapp_key = angular.element('#ky').val();
		if(agentapp_key ==undefined ||agentapp_key== null)
			var app_key = angular.element('#hky').val();
		else
			var app_key=agentapp_key;		
		if ( fromstation== "") {
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
		else if (app_key=="") {			
			$("#errconfig").text("User not Configured");
			$('#errconfig').stop().fadeIn(400).delay(1500).fadeOut(400);
		}
		else{

			var currency = angular.element('#hccy').val();			
			var modData='fromcity='+encodeURIComponent(fromstation)+'&fromcitycode='+encodeURIComponent(fromstationcode)+'&tocity='+encodeURIComponent(tostation)+'&tocitycode='+encodeURIComponent(tostationcode)+'&datain='+encodeURIComponent(startDate)+'&dateout='+encodeURIComponent(EndDate)+'&ay='+encodeURIComponent(app_key)+'&currency='+currency+'&thm='+$location.search().thm;
		    $location.path('/busList-'+$location.search().thm).search(modData);
		}
	}
	/*bus type filter*/

	$scope.bustypeAll = true;
	$scope.bustypeIncludes = [];	
	$scope.getbustypename = function(typname){
		var i = $.inArray(typname, $scope.bustypeIncludes);
		if (i > -1) {
			$scope.bustypeIncludes.splice(i, 1);
		} else {
			$scope.bustypeIncludes.push(typname);
			$scope.bustypeAll = false;

		}
		if($scope.bustypeIncludes.length == 0)
			$scope.bustypeAll = true;  
	}



	$scope.busTypeFilter = function(typeobj) {
		var selloc = false;   
		if($scope.bustypeAll) 
		{
			return true;
		}
		else
		{
			angular.forEach($scope.bustypeIncludes, function(arrvalue,arrindex) { 

				if($scope.bustypeIncludes[arrindex] == typeobj.busType) 
				{
					selloc = true;
				}

			});
		}
		return selloc;
	};



	/*	boarding point filter*/

	$scope.boardshowAlllocation = true;
	$scope.boardLocationIncludes = [];	
	$scope.getboardlocationname = function(locname){
		var i = $.inArray(locname, $scope.boardLocationIncludes);
		if (i > -1) {
			$scope.boardLocationIncludes.splice(i, 1);
		} else {
			$scope.boardLocationIncludes.push(locname);
			$scope.boardshowAlllocation = false;

		}
		if($scope.boardLocationIncludes.length == 0)
			$scope.boardshowAlllocation = true;  
	}

	$scope.boardLocationFilter = function(locobj) {
		var selloc = false;   
		if($scope.boardshowAlllocation) 
		{
			return true;
		}
		else
		{
			angular.forEach($scope.boardLocationIncludes, function(arrvalue,arrindex) { 
				angular.forEach(locobj.boardingPoints, function(val) { 
					if($scope.boardLocationIncludes[arrindex] == val.loc) 
					{
						selloc = true;
					}
				});
			});
		}
		return selloc;
	};

	/*	dropping  point filter*/
	$scope.droppingshowAlllocation = true;
	$scope.droppingLocationIncludes = [];	
	$scope.getdroppinglocationname = function(locname){
		var i = $.inArray(locname, $scope.droppingLocationIncludes);
		if (i > -1) {
			$scope.droppingLocationIncludes.splice(i, 1);
		} else {
			$scope.droppingLocationIncludes.push(locname);
			$scope.droppingshowAlllocation = false;

		}
		if($scope.droppingLocationIncludes.length == 0)
			$scope.droppingshowAlllocation = true;  
	}

	$scope.droppingLocationFilter = function(locobj) {
		var selloc = false;   
		if($scope.droppingshowAlllocation) 
		{
			return true;
		}
		else
		{
			angular.forEach($scope.droppingLocationIncludes, function(arrvalue,arrindex) { 
				angular.forEach(locobj.droppingPoints, function(val) { 
					if($scope.droppingLocationIncludes[arrindex] == val.loc) 
					{
						selloc = true;
					}
				});
			});
		}
		return selloc;
	};



	$(document).ready(function() {
		$("#changebutton").click(function() {        	
			$("#changerefine").hide();

			$("#searchrefine").show();
		});
	});

	$(document).ready(function() {
		$("#returnbutton").click(function() {        	
			$("#changerefine").hide();
			$("#searchreturn").show();
		});
	});
	/*price filter */

	$scope.filterprices = function(obj) {
		 
		if($scope.data.busSearchFilters.fares.length == 1)
		{
			return obj;
		}
		else
		{
		 
			return (parseFloat(obj.fare.bookingPrice) >= parseFloat($scope.priceSlider.min) && parseFloat(obj.fare.bookingPrice) <= parseFloat($scope.priceSlider.max) );
		}
	};
	
	 
	Array.prototype.unique = function() {
		var a = [];
		for ( i = 0; i < this.length; i++ ) {
			var current = this[i];
			if (a.indexOf(current) < 0) a.push(current);
		}

		this.length = 0;
		for ( i = 0; i < a.length; i++ ) {
			this.push( a[i] );
		}

		return this.sort();
	}

	/**	
	 *Description: Sorting Process for the side bar.
	 **/
	$scope.sortdescending  = false;  
	$scope.sortlist  = [];
	$scope.sortorder = function(items,type)
	{			 
		$scope.priceasc = "";		
		$scope.departasc = "";		 
		$scope.Seatsc = "";

		if($scope.sortdescending == false)
		{			
			$scope.sortlist =  items.sort(function(a, b) {

				if(type == 'price'){
					$scope.priceasc = "tayyarah-arrow-down";
					return parseFloat(a.fare.bookingPrice) - parseFloat(b.fare.bookingPrice);						
				}

				if(type == 'depart'){
					$scope.departasc = "tayyarah-arrow-down";
					if ( a.departureTime < b.departureTime )
						return -1;
					if (a.departureTime >  b.departureTime )
						return 1;
					return 0;
				}
				if(type == 'Seats'){
					$scope.Seatsc = "tayyarah-arrow-down";
					if ( a.availableSeats < b.availableSeats )
						return -1;
					if (a.availableSeats >  b.availableSeats )
						return 1;
					return 0;

				}
			});		   

			$scope.sortdescending  = true;  
		}
		else
		{			
			$scope.sortlist =  items.sort(function(a, b) {				 
				if(type == 'price'){	
					$scope.priceasc = "tayyarah-arrow-up";
					return parseFloat(a.fare.bookingPrice) - parseFloat(b.fare.bookingPrice);
				} 
				if(type == 'depart'){
					$scope.departasc = "tayyarah-arrow-up";
					if ( a.departureTime < b.departureTime )
						return -1;
					if ( a.departureTime > b.departureTime )
						return 1;
					return 0;
				}
				if(type == 'Seats'){
					$scope.Seatsc = "tayyarah-arrow-up";
					if ( a.availableSeats < b.availableSeats )
						return -1;
					if ( a.availableSeats > b.availableSeats )
						return 1;
					return 0;
				}

			});	
			$scope.sortlist.reverse()
			$scope.sortdescending  = false;  
		}
		return $scope.sortlist;
	}
	$scope.errorDisplay = function(msg,paramDetails){

		$(document).ready(function(){
			var modalInstance = $modal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'views/busErrorDisplay.jsp',
				controller:'busErrorDisplayCtrl',
				backdrop:'static',
				keyboard:false,
				resolve:{
					items:function(){
						return msg;
					},
					items2:function(){
						return paramDetails;
					}
				}});
			modalInstance.result.then(function(selectedItem){


			},function(){
				$log.info('modal Dismissed at :'+new Date());
			});

		});
	}
	$scope.maxSeatAlert = function(message){
		$(document).ready(function(){
			var modalInstance = $modal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'views/maxSeatAlert.jsp',
				controller:'maxSeatAlertCtrl',
				backdrop:'static',
				keyboard:false,
				resolve:{
					items:function(){
						return message;
					}
				}});
			modalInstance.result.then(function(selectedItem){
			},function(){
				$log.info('modal Dismissed at :'+new Date());
			});

		});
	}
	
	$scope.getRmdetails = function(id,empid){	
		var rwId = id;
		var employId = empid;
	console.log('rwId',rwId);
	console.log('employId',employId);
	busServices.getRmDetailFields(empid).then(function(response){
			//$http.get('rmfields.json').then(function(response){				
					$('#ShowRmDetails'+id).show();	
					console.log('.show()',$('#ShowRmDetails'+id).show());
			  $scope.rmDetails = response.data;
				  if($scope.rmDetails.rmDetailsSet == "true" || $scope.rmDetails.rmDetailsSet == true){
					
				  if($scope.rmDetails.rmDataListDetails.empCode != undefined){
					  $scope.employeeCodeModel = $scope.rmDetails.rmDataListDetails.empCode;
					 
					  var empcodeField = "<div class='form-group-rm clearfix' id='empcode"+rwId+"'>"+
						"<label for='inputEmail3'>Employee Code</label>"+
						"<input	type='text' class='form-control' name='empcode'	id='empCode-"+rwId+"' placeholder='Employee code' required value='"+$scope.employeeCodeModel+"' data-ng-required='true'>"+
						"</div>";
					 
					  if($('#empcode'+id ).length == 0){
						  $('#rmFields'+id ).append("");
						  $('#rmFields'+id ).append(empcodeField);
					  }
					
					 
				  }
				  if($scope.rmDetails.rmDataListDetails.department != undefined){					  
					  $scope.departmentModel = $scope.rmDetails.rmDataListDetails.department;
					  var departmentField = "<div class='form-group-rm clearfix'  id='depart"+rwId+"'>"+
						"<label for='inputEmail3'>Department</label>"+
						"<input	type='text' class='form-control' name='department'	id='department-"+rwId+"' placeholder='department' required value='"+$scope.departmentModel+"' data-ng-required='true'>"+
						"</div>";
					  if($('#depart'+id ).length == 0){
						  $('#rmFields'+id ).append("");
						  $('#rmFields'+id ).append(departmentField);
					  }
					 	
				  }
				  if($scope.rmDetails.rmDataListDetails.costCenter != undefined ){					 
					  $scope.costCenterModel = $scope.rmDetails.rmDataListDetails.costCenter;
					  var costCntr = "<div class='form-group-rm clearfix'  id='Cost"+rwId+"'>"+
						"<label for='inputEmail3'>Cost Center</label>"+
						"<input	type='text' class='form-control' name='costCenter'	id='costCenter-"+rwId+"' placeholder='cost Center' required value='"+ $scope.costCenterModel+"' data-ng-required='true'>"+
						"</div>";
					  if($('#Cost'+id ).length == 0){
						  $('#rmFields'+id ).append("");
						  $('#rmFields'+id ).append(costCntr);	
					  }
					  
				  }
				  if($scope.rmDetails.rmDataListDetails.approverName != undefined ){
					  $scope.approverNameModel = $scope.rmDetails.rmDataListDetails.approverName;
					  var approverNAme = "<div class='form-group-rm clearfix'  id='approverNam"+rwId+"'>"+
						"<label for='inputEmail3'>Approver Name</label>"+
						"<input	type='text' class='form-control' name='approverName'	id='approverName-"+rwId+"' placeholder='approverName' required value='"+ $scope.approverNameModel+"' data-ng-required='true'>"+
						"</div>";
					  if($('#approverNam'+id ).length == 0){
						  $('#rmFields'+id ).append("");		
						  $('#rmFields'+id ).append(approverNAme);		
					  } 
					 			 
				  }
				  if($scope.rmDetails.rmDataListDetails.location != undefined){					 
					  $scope.locationModel = $scope.rmDetails.rmDataListDetails.location;
					  var locationField = "<div class='form-group-rm clearfix' id='loc"+rwId+"'>"+
						"<label for='inputEmail3'>Location</label>"+
						"<input	type='text' class='form-control' name='location'	id='location-"+rwId+"' placeholder='location' required value='"+$scope.locationModel+"' data-ng-required='true'>"+
						"</div>";
					  if($('#loc'+id ).length == 0){
						  $('#rmFields'+id ).append("");	
						  $('#rmFields'+id ).append(locationField);	
					  } 
					
				  }
				  if($scope.rmDetails.rmDataListDetails.trNumber != undefined){					 
					  $scope.trNumberModel = $scope.rmDetails.rmDataListDetails.trNumber;
					  var trField = "<div class='form-group-rm clearfix' id='trNum"+rwId+"'>"+
						"<label for='inputEmail3'>Tr Number</label>"+
						"<input	type='text' class='form-control' name='trNumber'	id='trNumber-"+rwId+"' placeholder='trNumber' required value='"+$scope.trNumberModel+"' data-ng-required='true'>"+
						"</div>";
					  if($('#trNum'+id ).length == 0) 
					  {
						  $('#rmFields'+id ).append("");
						  $('#rmFields'+id ).append(trField);
					  }
					  
				  }
				  if($scope.rmDetails.rmDataListDetails.bussinessUnit != undefined ){
					
					  $scope.bussinessUnitModel = $scope.rmDetails.rmDataListDetails.bussinessUnit;
					  var buisnessField = "<div class='form-group-rm clearfix' id='bussin"+rwId+"'>"+
						"<label for='inputEmail3'>Bussiness Unit</label>"+
						"<input	type='text' class='form-control' name='bussinessUnit'	id='bussinessUnit-"+rwId+"'  required  value='"+$scope.bussinessUnitModel+"' data-ng-required='true'>"+
						"</div>";
						 if($('#bussin'+id ).length == 0){
							 $('#rmFields'+id ).append("");
							 $('#rmFields'+id ).append(buisnessField);
						 }		
					
				  }
				  if($scope.rmDetails.rmDataListDetails.projectCode != undefined){
					 $scope.projectCodeModel = $scope.rmDetails.rmDataListDetails.projectCode;
					  var proCode = "<div class='form-group-rm clearfix' id='project"+rwId+"'>"+
						"<label for='inputEmail3'>Project Code</label>"+
						"<input	type='text' class='form-control' name='projectCode'	id='projectCode-"+rwId+"' placeholder='projectCode' required value='"+$scope.projectCodeModel+"' data-ng-required='true'>"+
						"</div>";
					  if($('#project'+id ).length == 0){
						  $('#rmFields'+id ).append("");
						  $('#rmFields'+id ).append(proCode);
					  }
					 
				  }
				  if($scope.rmDetails.rmDataListDetails.reasonForTravel != undefined ){
					 
					  $scope.reasonForTravelModel = $scope.rmDetails.rmDataListDetails.reasonForTravel;
					  var reason = "<div class='form-group-rm clearfix' id='reason"+rwId+"'>"+
						"<label for='inputEmail3'>Reason For Travel</label>"+
						"<input	type='text' class='form-control' name='reasonForTravel'	id='reasonForTravel-"+rwId+"' placeholder='reasonForTravel' required value='"+$scope.reasonForTravelModel+"' data-ng-required='true'>"+
						"</div>";
					  if($('#reason'+id ).length == 0){
						  $('#rmFields'+id ).append("");	
						  $('#rmFields'+id ).append(reason);	
					  } 
					  
				  }
				  if($scope.rmDetails.rmDataListDetails.billNonBill != undefined){
					
					  $scope.billNonBillModel = $scope.rmDetails.rmDataListDetails.billNonBill;
					  var billing = "<div class='form-group-rm clearfix' id='bill"+rwId+"'>"+
						"<label for='inputEmail3'>Billable/ non billable</label>"+
						"<input	type='text' class='form-control' name='billNonBill'	id='billNonBill-"+rwId+"' placeholder='Billable/ non billable' required value='"+$scope.billNonBillModel+"' data-ng-required='true'>"+
						"</div>";
					  if($('#bill'+id ).length == 0){
						  $('#rmFields'+id ).append("");
						  $('#rmFields'+id ).append(billing);	
					  } 
					
				  }
				  
				  if($scope.rmDetails.rmDataListDetails.manualFields.length != 0){					  
					  angular.forEach($scope.rmDetails.rmDataListDetails.manualFields,function(val,key){
						  var manual = "<div class='form-group-rm clearfix' id='manual"+rwId+key+"'>"+
							"<label for='inputEmail3'>"+val.manualField+"</label>"+
							"<input	type='text' class='form-control' name='Manual"+rwId+(key+1)+"'	id='manualField-"+rwId+(key+1)+"' placeholder='"+val.manualField+"' required value='' data-ng-required='true'>"+
							"</div>";
						  if($('#manual'+id+key).length == 0){
							  $('#rmFields'+id ).append("");
							  $('#rmFields'+id ).append(manual);
						  } 
						  
					  })
					 			  
				  }				  
			  }
	 
			 }); 
		 
		 
	}
	
	
	
	$scope.init();
}]);

 app.directive('autoCompleteDirectivesBus', function($timeout) {
	return function(scope, iElement, iAttrs) {
		iElement.autocomplete({
			minLength:3,
			source: scope[iAttrs.uiItems] ,
			select: function() {				
				$timeout(function() {
					var focused = angular.element( document.activeElement); 					
					scope.$parent.busname = focused.val();
					scope.$parent.busnameIncludes = [];
					if(scope.busname != ''){
						var i = $.inArray(focused.val(), scope.$parent.busnameIncludes);
						if (i > -1) {
							scope.$parent.busnameIncludes.splice(i, 1);
						} else {
							scope.$parent.busnameIncludes.push(focused.val());
							scope.$parent.showAllBuses = false;							
						}						 
						if(scope.$parent.busnameIncludes.length == 0)
							scope.$parent.showAllBuses = true;    
					}
				}, 0);
			}
		});
	};
}); 