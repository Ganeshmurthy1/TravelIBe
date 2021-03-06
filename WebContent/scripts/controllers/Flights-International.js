var app = angular.module('myApp');
app.controller('Flights-InternationalCtrl',['$scope','commonService','$window','$http','$document','$location','$compile','limitToFilter','$rootScope','flightServices','localStorageService','$route','$filter','$modal','$log','$timeout',function($scope,commonService,$window,$http,$document,$location,$compile,limitToFilter,$rootScope,flightServices,localStorageService,$route,$filter,$modal,$log,$timeout){

	String.prototype.replaceAll = function(s,r){return this.split(s).join(r)};
	function pad(n){return n<10 ? '0'+n : n};
	var adminUrl = commonService.AdminbaseUrl;
	var ibeurl = commonService.Ibebaseurl;
	$scope.init = function(){	
		var Theme = $location.search().thm;
		$scope.filter = 'views/Flights-International-'+Theme+'Filter.jsp';
		$scope.Content = 'views/Flights-International-'+Theme+'Content.jsp';
		$scope.isQuoteloaded = false;
		$scope.display = "none";
		$scope.flightroundquotemap = {};
		$scope.flightroundquotetripmap = {};
		$scope.flightroundquoteconnecttripmap = {};
		$scope.bookNowButtonQuotation = false;
		$scope.isQuoteAvailable = false;
		// Check Quote is avaliable 
		if($location.search().flightquotationid != undefined){
			$scope.isQuoteAvailable = true;
			$scope.bookNowButtonQuotation = true;
		}
		//getting all paramters	
		$scope.allParams = $scope.getUrlParams($location.search());
		$scope.user = $scope.apiParams($scope.allParams);	
		$scope.fligtSearch();
		$scope.origincity = $scope.allParams.oriCity;
		$scope.destinationcity = $scope.allParams.desCity;
		$scope.loaderArrival = $scope.allParams.arvlDate;
		$scope.loaderDepart = $scope.allParams.depDate;
		$scope.cabin =$scope.allParams.cabinClass;
		$scope.totalpassenger = parseInt($scope.user.adult)+parseInt($scope.user.kid)+parseInt($scope.user.infant);
		$scope.adult = $scope.user.adult;
		$scope.child =$scope.user.kid;		
		$scope.infant = $scope.user.infant;
		$scope.origin = $scope.user.origin;
		$scope.destination = $scope.user.destination;
		$scope.departuredate = $scope.user.departureDate;
		$scope.arrivalDate = $scope.user.arrivalDate;
		$scope.moriginall = $scope.user.originall;
		$scope.mdestinationall = $scope.user.destinationall;
		$scope.mdepDate = $scope.user.depDate;
		$scope.marvlDate = $scope.user.arvlDate;
		$scope.mtriptype = $scope.user.triptype ;
		$scope.mtrips = $scope.user.trips ;
		$scope.mapp_key = $scope.user.app_key ;
		$scope.mairline = $scope.user.airline;
		$scope.misDomestic = $scope.user.isDomestic ;		
		$scope.cabin = $scope.user.cabinClass;
		$scope.classname = "tayyarah-"+$scope.allParams.currency;
		var ddatebefore = $scope.user.depDate;
		var depparts = ddatebefore.split("/");
		var departnewdate = new Date(depparts[2], depparts[1] - 1, depparts[0]);
		var depatdate = departnewdate.getFullYear().toString() + pad((departnewdate.getMonth() + 1)).toString() + pad(departnewdate.getDate()).toString() ;
		var arvlDate = "";	
		var Adatebefore = $scope.user.arvlDate;
		var ariparts = Adatebefore.split("/");
		var arrivnewdate = new Date(ariparts[2], ariparts[1] - 1, ariparts[0]);
		arvlDate = arrivnewdate.getFullYear().toString() + pad((arrivnewdate.getMonth() + 1)).toString() + pad(arrivnewdate.getDate()).toString() ;
		$scope.arrivaldate = new Date(ariparts[2], ariparts[1] - 1, ariparts[0]);
		$scope.departfutedatearr = [];
		for(var i=1;i<20;i++){
			var departnextDay = new Date(departnewdate);
			departnextDay.setDate(departnewdate.getDate()+i);	
			var arrnextDay = new Date(arrivnewdate);
			arrnextDay.setDate(arrivnewdate.getDate()+i);
			$scope.departfutedatearr.push({"depart":departnextDay,"arrival":arrnextDay});
		}
		$scope.maincontainer = "block";
		var appkeyval = $scope.user.ay;
		$scope.twoorigin = $scope.allParams.origin;
		$scope.twodestination = $scope.allParams.destination;
		$scope.departDate =  $scope.allParams.depDate;
		$scope.ariavlDate =  $scope.allParams.arvlDate;
		$scope.currencyvalue = 1;
		$scope.basecurrencyname = $scope.user.currency;
		$scope.currencyname = $scope.user.currency;
		$scope.durationTime= flightServices.flighttime;
		$scope.isInternational = true;
		var today = new Date(); 
		var dd = today.getDate()+2;
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear(); 
		if(dd<10){ dd='0'+dd } if(mm<10){ mm='0'+mm } 
		var dayaftertomorrow = dd+'/'+mm+'/'+yyyy; 
		var departdate = ddatebefore;
		if(departdate > dayaftertomorrow){
			$scope.isholdeligibility = true;
		}
		else{
			$scope.isholdeligibility = false;
		}
		$timeout($scope.callAtTimeout,3000);

	};
	$scope.callAtTimeout = function(){
		$(document).ready(function() {
			$('#one, #searchrefine').iptOffCanvas({
				baseClass: 'offcanvas',
				type: 'left' 
			});
		}); 	
	}
	var apiUrl = commonService.baseUrl;	
	/**
	 *Description: Getting All Parameters from Url.
	 **/
	$scope.getUrlParams = function(location){
		var UrlParam = {};
		UrlParam.origin = location.ori;
		UrlParam.destination = location.des;
		UrlParam.depDate = location.depart;
		UrlParam.arvlDate = location.arrival;
		UrlParam.cabinClass = location.class;
		UrlParam.currency = location.ccy;
		UrlParam.isDomestic = location.isDom;
		UrlParam.isDynamicmarkup = location.isDyn;
		UrlParam.markupAmount = location.marAt;
		UrlParam.triptype = location.tty;	
		UrlParam.app_key  = decodeURIComponent(location.ay);
		UrlParam.searchkey = decodeURIComponent(location.sky);
		UrlParam.adult = location.adt;
		UrlParam.kid = location.kid;
		UrlParam.infant = location.inf;
		UrlParam.airline = location.airline;
		var originbefore = UrlParam.origin;	
		var Oriindex = originbefore.indexOf(',') ;
		UrlParam.oriCity = originbefore.substring(0, Oriindex);
		var destbefore = UrlParam.destination;	
		var destindex = destbefore.indexOf(',') ;
		UrlParam.desCity = destbefore.substring(0, destindex);
		var orifirstindex =originbefore.indexOf(',') + 1;
		var orilastindex = originbefore.lastIndexOf(',');		    	
		var desfirstindex = destbefore.indexOf(',') + 1;
		var deslastindex = destbefore.lastIndexOf(',');
		UrlParam.originCountry = originbefore.substring(orifirstindex, orilastindex);
		UrlParam.destCountry = destbefore.substring(desfirstindex, deslastindex);
		return UrlParam;
	}


	/**
	 *Description: Parameters for Passing to api.
	 **/
	$scope.apiParams = function(params){
		var ApiParam = {};
		var ori = decodeURIComponent(params.origin);
		var Ostart = ori.lastIndexOf('(') +1;
		var Oend = ori.lastIndexOf(')');	
		ApiParam.origin  = ori.substring(Ostart, Oend);
		var destn = decodeURIComponent(params.destination);
		var Ostart = destn.lastIndexOf('(') +1;
		var Oend = destn.lastIndexOf(')');
		ApiParam.destination = destn.substring(Ostart, Oend);

		var deptDate = params.depDate;
		var dept = new Date(deptDate.split("/").reverse().join("-"));
		ApiParam.depDate = $scope.yyyymmdd(dept);
		if(params.arvlDate){
			var arrvlDate = params.arvlDate;
			var arvlDate = new Date(arrvlDate.split("/").reverse().join("-"));
			ApiParam.arvlDate = $scope.yyyymmdd(arvlDate);
		}else{
			ApiParam.arvlDate = '';
		}
		ApiParam.adult = params.adult;
		ApiParam.airline = params.airline;
		if(angular.element('#isLogged').val() != undefined && angular.element('#isLogged').val() != '')
			ApiParam.app_key  = angular.element('#ay').val();
		else
			ApiParam.app_key  = params.app_key;	
		ApiParam.cabinClass = params.cabinClass;
		ApiParam.currency = params.currency;
		ApiParam.infant = params.infant;
		ApiParam.isDomestic = params.isDomestic;
		ApiParam.isDynamicMarkup = params.isDynamicmarkup;
		ApiParam.kid = params.kid;
		ApiParam.markupAmount = params.markupAmount;
		ApiParam.searchkey = params.searchkey;
		ApiParam.triptype = params.triptype;
		return ApiParam;
	};
	/**
	 *Description:  Currency Convertion.
	 **/

	$scope.currencychangedValue = function()
	{
		flightServices.CurrencyConvert($scope.currencyname).then(function(res){
			var data = res.data;
			$scope.currencyvalue = parseFloat(data.value);					
			$scope.classname = "tayyarah-"+$scope.currencyname;
		},function(){

		});
	}
	/**
	 *Description: Price Slider.
	 **/

	$scope.priceSlider = {
			min: 1000,
			max: 2000,
			ceil: 2000,
			floor: 1000,
			step: 10
	};

	$scope.DepartSlider = {
			min: 0,
			max: 1440,
			ceil: 1440,
			floor: 0,
			step: 10
	};
	$scope.SecondDepartSlider = {
			min: 0,
			max: 1440,
			ceil: 1440,
			floor: 0,
			step: 10
	};

	$scope.ArrivalSlider = {
			min: 0,
			max: 1440,
			ceil: 1440,
			floor: 0,
			step: 10
	};
	$scope.SecondArrivalSlider = {
			min: 0,
			max: 1440,
			ceil: 1440,
			floor: 0,
			step: 10
	};
	$scope.loadpricebar = true;
	$scope.stopslist = [];
	for(var i = 0;i<2;i++){
		$scope.stopslist.push(i);
	}


	/**
	 *Description: Loading cities from api.
	 **/
	$scope.cities = function(cityName) {
		var cityarr = [];

		return $http.get(apiUrl + "Search/bycity/" + cityName).then(function(response) {
			angular.forEach(response.data, function(value) {
				cityarr.push(value.city + "," + value.country + "," + "(" + value.airport_code + ")");

			});
			return limitToFilter(cityarr, 15);
		});
	};
	$scope.onSelectPart = function($item, $model, $label) {
		$scope.$item = $item;
		$scope.$model = $model;
		$scope.$label = $label;
		$('#hideori').val($scope.twoorigin);
		$('#hidedes').val($scope.twodestination);
		if ($scope.twodestination != undefined) {
			angular.element(document.querySelector('#twodpd1')).focus();
		}
	};
	$scope.errordiv = false;
	$scope.lowprice =  0;       
	$scope.floorprice = 0;
	$scope.highprice =  0;  
	$scope.ceilingprice = 0; 
	$scope.loading = false ;

	$scope.fligtSearch = function(){
		flightServices.FlightSearch($scope.user).then(function(response){
			//	$http.get('busList.json').then(function(response){
			$scope.loading = false ;	
			$scope.data = response.data;
			$scope.errormeg = "";
			if($scope.data.fareFlightSegment.length > 0)
			{
				$scope.fareFlightSegment = $scope.data.fareFlightSegment;
				$scope.searchkey =  $scope.data.searchKey; 
				$scope.app_key =  $scope.user.app_key;
				$scope.totalflightsaviable =  $scope.fareFlightSegment.length;
				var lastele =  $scope.fareFlightSegment.length - 1; 
				$scope.origincodename = $scope.data.ori;
				$scope.destcodename = $scope.data.dest;
				$scope.defaultmintime = "00.00";
				$scope.defaultmaxtime = "23.59";
				var airlinesarrwithdup = [];
				var stopsarr = [];
				var pricearray = [];
				angular.forEach($scope.fareFlightSegment, function(value,fareindex) {			
					pricearray.push(value.totalPrice);	
					angular.forEach(value.flightSegmentsGroups, function(Groupsvalue,groupindex) {
						angular.forEach(Groupsvalue.flightSegments, function(Segmentsvalue,index) {
							stopsarr.push(Segmentsvalue.segments.length - 1);
							angular.forEach(Segmentsvalue.segments, function(Segmentvalue,segindex) {

								if(Segmentvalue.carrier.name!=null){
									if(segindex == 0){
										airlinesarrwithdup.push({"name":Segmentvalue.carrier.name,"code":Segmentvalue.carrier.code});
									}
								}
							});
						});
					});
				}); 

				var uniqueairlineoperarray = [];
				var tempairlineoperarray = [];
				$.each(airlinesarrwithdup, function(index, value) {
					if ($.inArray(value.name, tempairlineoperarray)==-1) {
						tempairlineoperarray.push(value.name);
						uniqueairlineoperarray.push(value);
					}
				});
				var uniquestopsarr = [];
				uniquestopsarr = stopsarr.unique();
				$scope.stopslist = uniquestopsarr;
				$scope.airlinelist = uniqueairlineoperarray;

				var uniquepricearr = [];
				uniquepricearr = pricearray.unique();
				$scope.pricelist = uniquepricearr.sort(function(a, b){return a-b});

				$scope.matrixairlinecode = [];
				var matrixairlines = [];
				var matrixairlinesarray = [];
				var matrixairlinesmap = {};

				angular.forEach($scope.fareFlightSegment, function(value,fareindex) { 

					angular.forEach(value.flightSegmentsGroups, function(Groupsvalue,groupindex) { 
						angular.forEach(Groupsvalue.flightSegments, function(Segmentsvalue,index) {
							angular.forEach(Segmentsvalue.segments, function(Segmentvalue,segindex) {
								if(segindex == 0){
									if(Segmentvalue.carrier.name!=null){						
										if(matrixairlines.hasOwnProperty(Segmentvalue.carrier.name) == false)
										{
											matrixairlines.push(Segmentvalue.carrier.name);	
											var airlinenamewithcode = {"airline":Segmentvalue.carrier.name,"code":Segmentvalue.carrier.code}
											$scope.matrixairlinecode.push(airlinenamewithcode);	
											var pricematrix = {"nonstop":"0", "1+stops":"0"};
											matrixairlinesmap[Segmentvalue.carrier.name] = pricematrix;							
										}
									}
								}
							});
						});
					});
				});

				angular.forEach($scope.fareFlightSegment, function(value,fareindex) { 
					for (var key in matrixairlinesmap) {
						if (matrixairlinesmap.hasOwnProperty(key)) {			   

						}
					}
					angular.forEach(value.flightSegmentsGroups, function(Groupsvalue,groupindex) { 
						angular.forEach(Groupsvalue.flightSegments, function(Segmentsvalue,index) {
							angular.forEach(Segmentsvalue.segments, function(Segmentvalue,segindex) {
								if(segindex == 0)
								{	
									var price =  value.totalPrice;
									var pricemetrixmap = matrixairlinesmap[Segmentvalue.carrier.name];							
									if(pricemetrixmap!=undefined)
									{
										if((Segmentsvalue.segments.length - 1) == 0){											
											if(parseInt(pricemetrixmap["nonstop"]) > parseInt(price) || parseInt(pricemetrixmap["nonstop"]) == 0)
											{										
												pricemetrixmap["nonstop"] = price;	
											}
										}
										if((Segmentsvalue.segments.length - 1) >= 1){	
											if(parseInt(pricemetrixmap["1+stops"]) > parseInt(price) || parseInt(pricemetrixmap["1+stops"]) == 0)
											{
												pricemetrixmap["1+stops"] = price;		
											}
										}
									}
								}
							});
						});
					});
				});				
				for (var key in matrixairlinesmap) {
					if (matrixairlinesmap.hasOwnProperty(key)) {				
						var pricemetrix = matrixairlinesmap[key];
						if(pricemetrix != null)
						{
							var priceitem = {"Airline":key,"nonstop":pricemetrix["nonstop"],"onestops":pricemetrix["1+stops"]};
							matrixairlinesarray.push(priceitem);						
						}
					}
				}

				$scope.priceSlider = {
						min: parseFloat($scope.pricelist[0]) ,
						max: parseFloat($scope.pricelist[$scope.pricelist.length - 1]),
						ceil: parseFloat($scope.pricelist[$scope.pricelist.length - 1]),
						floor: parseFloat($scope.pricelist[0]),
						step: 10
				};

				$scope.loadpricebar = false;
				$scope.Matrixairlinepriceitems = $scope.onestopsort(matrixairlinesarray);		
				$scope.sliderConfigstep = 1;
				$scope.sliderConfigmin = 0;
				$scope.sliderConfigmax = 1440;
				$scope.sliderConfiguserMin = 0;
				$scope.sliderConfiguserMax = 1440; 
				$scope.arrsliderConfigstep = 1;
				$scope.arrsliderConfigmin = 0;
				$scope.arrsliderConfigmax = 1440;
				$scope.arrsliderConfiguserMin = 0;
				$scope.arrsliderConfiguserMax = 1440;
				$scope.secondsliderConfigstep = 1;
				$scope.secondsliderConfigmin = 0;
				$scope.secondsliderConfigmax = 1440;
				$scope.secondsliderConfiguserMin = 0;
				$scope.secondsliderConfiguserMax = 1440; 
				$scope.secondarrsliderConfigstep = 1;
				$scope.secondarrsliderConfigmin = 0;
				$scope.secondarrsliderConfigmax = 1440;
				$scope.secondarrsliderConfiguserMin = 0;
				$scope.secondarrsliderConfiguserMax = 1440;
				$scope.display = "block";
			}
			else
			{
				$scope.errormeg = "Sorry we could not process your request as server is busy. please try after some time.";
				$scope.loadpricebar = false ;
				$scope.errorDisplay($scope.errormeg,$scope.ErrorFlightTravelDetails);
			}


		},function(errorStatus){			
			$scope.httpvalue = errorStatus.httpStatus;
			if($scope.httpvalue == '500')
				$scope.errormeg = "We could not find any flight matching your requirements, Try Again.";
			else
				$scope.errormeg = "Sorry we could not process your request as server is busy. please try after some time.";
			$scope.loadpricebar = false ;  
			$scope.errordiv = true;
			$scope.errorDisplay($scope.errormeg,$scope.ErrorFlightTravelDetails);
		});
	};

	$scope.onestopsort = function(items)
	{
		var sortlist = [];
		sortlist =  items.sort(function(a, b) {		
			return parseFloat(a.onestops) - parseFloat(b.onestops);
		});				
		return sortlist;
	}
	$scope.getconvertedcurrency = function(currentamt)
	{		
		var covertamt = parseFloat(currentamt) * parseFloat($scope.currencyvalue);	
		return parseFloat(covertamt).toFixed(2);
	}
	$scope.getslideconvertedcurrency = function(currentamt)
	{		
		var covertamt = parseFloat(currentamt) * parseFloat($scope.currencyvalue);	
		return parseInt(covertamt);
	}

	$scope.getcurrencyvalue = function(currentamt,exchangerate)
	{		
		var covertamt = parseFloat(currentamt) * parseFloat(exchangerate);	
		return parseFloat(covertamt).toFixed(2);
	}

	$scope.getairlinecode = function(airlinename)
	{
		var airlinecode = "";
		angular.forEach($scope.matrixairlinecode, function(value,index) { 
			if($scope.matrixairlinecode[index].airline == airlinename)
			{
				airlinecode = $scope.matrixairlinecode[index].code;
			}
		});
		return airlinecode;
	}


	var hours1 = Math.floor(0 / 60);
	var minutes1 = 0 - (hours1 * 60);

	if(hours1.length < 10) hours1= '0' + hours1;
	if(minutes1.length < 10) minutes1 = '0' + minutes1;

	if(hours1 == 0) hours1 = '00';
	if(minutes1 == 0) minutes1 = '00';

	var hours2 = Math.floor(1440 / 60);
	var minutes2 = 1440 - (hours2 * 60);

	if(hours2.length < 10) hours2= '0' + hours2;
	if(minutes2.length < 10) minutes2 = '0' + minutes2;

	if(hours2 == 0) hours2 = '00';
	if(minutes2 == 0) minutes2 = '00';

	var min = hours1 + ':' + minutes1;
	var max = hours2 + ':' + minutes2;
	$scope.sliderConfigstep = 1;
	$scope.sliderConfigmin = 0;
	$scope.sliderConfigmax = 1440;
	$scope.sliderConfiguserMin = 0;
	$scope.sliderConfiguserMax = 1440;
	$scope.arrsliderConfigstep = 1;
	$scope.arrsliderConfigmin = 0;
	$scope.arrsliderConfigmax = 1440;
	$scope.arrsliderConfiguserMin = 0;
	$scope.arrsliderConfiguserMax = 1440;
	$('#departMin').html(hours1 + ':' + minutes1);
	$('#departMax').html(hours2 + ':' + minutes2);
	$('#arriMin').html(hours1 + ':' + minutes1);
	$('#arriMax').html(hours2 + ':' + minutes2);
	$('#seconddepartMin').html(hours1 + ':' + minutes1);
	$('#seconddepartMax').html(hours2 + ':' + minutes2);
	$('#secondarriMin').html(hours1 + ':' + minutes1);
	$('#secondarriMax').html(hours2 + ':' + minutes2);

	$scope.isRefuntable = function(item)
	{
		if(item)
			return "REFUNDABLE";
		if(!item)
			return "NON REFUNDABLE";
	}

	$scope.refundableIncludes= [];	
	$scope.checkfaretypefilter = function(type){	
		$scope.filteredfilghts = [];
		var i = $.inArray(type, $scope.refundableIncludes);
		if (i > -1) {
			$scope.refundableIncludes.splice(i, 1);
		} else {
			$scope.refundableIncludes.push(type);
		}
	}

	$scope.FareTypeFilter = function(faretypeobj) {		
		var objfilter = false;   
		if ($scope.refundableIncludes.length > 0) {
			angular.forEach($scope.refundableIncludes, function(faretype,faretypeindex) {				
				if(faretype == $scope.isRefuntable(faretypeobj.refundable))
				{
					objfilter = true;  
				}			
			});
		}  
		else
		{
			objfilter = true; 
		}
		return objfilter;
	}



	/* Price Filter */
	$scope.filterprice = function(obj) { 

		var totalprice;
		var currentcurrency = obj.currency;
		if(currentcurrency == 'MYR')		
			totalprice = $scope.getcurrencyvalue(obj.totalPrice,obj.exchangeRate);		
		else		
			totalprice = obj.totalPrice;	

		return (parseFloat(totalprice) >= parseFloat($scope.priceSlider.min) && parseFloat(totalprice) <= parseFloat($scope.priceSlider.max));
	};
	/* Get Datatime to Time */
	$scope.getDateObject = function(dt){
		var date = new Date(dt);
		var hours = date.getHours();
		if(hours < 10) hours = '0' + hours;
		var min = date.getMinutes();
		if(min < 10) min = '0' + min;
		return hours + ':' + min;
	}

	$scope.predicate = '';
	$scope.reverse = false;
	$scope.order = function(predicate) {
		$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
		$scope.predicate = predicate;
	};

	$scope.customorderBy =  function(allobj) { 
		return allobj;
	}

	$scope.showAllairline = true;
	$scope.filterairline = 0;
	$scope.Airlinesname = null;	
	$scope.MatrixAirlinesIncludes = [];	
	$scope.Matrixclickairlinefilter = function($event,airline){    
		$scope.AirlinesIncludes = [];
		if($scope.Airlinesname != null && $scope.Airlinesname == airline)
		{
			$scope.Airlinesname =  null; 
			var selectable =  angular.element(angular.element.find('#selectable li')); 			
			selectable.removeClass('ui-selectee ui-selected'); 	

			var aircode = $scope.getairlinecode(airline);
			var airlineselectable =  angular.element(angular.element.find('#name'+aircode));  
			airlineselectable.prop('checked',false);

		}
		else
		{
			$scope.Airlinesname =  airline; 
			$scope.AirlinesIncludes.push(airline);
			var selectable =  angular.element(angular.element.find('#selectable li'));      
			selectable.removeClass('ui-selectee ui-selected');       
			($($event.target).addClass('ui-selectee ui-selected'));
			var removeseleteditem =  angular.element(angular.element.find('.airlinefilter'));  
			removeseleteditem.prop('checked',false);
			var aircode = $scope.getairlinecode($scope.Airlinesname);
			var airlineselectable =  angular.element(angular.element.find('#name'+aircode));			
			airlineselectable.prop('checked',true);

		}   
	}


	$scope.MatrixAirlineFilter = function(obj) {
		var Airobjfilter = false;   
		if ($scope.Airlinesname != null) {
			angular.forEach(obj.flightSegmentsGroups[0].flightSegments, function(matrixairobj) {
				angular.forEach(matrixairobj.segments, function(svalue,index) { 
					if(index == 0){                     	 
						if (svalue.carrier.name == $scope.Airlinesname)
						{								
							Airobjfilter = true;   
						}
					}
				});
			});
		}   
		else
		{
			Airobjfilter = true; 
		}
		return Airobjfilter;
	}


	$scope.showAllairline = true;
	$scope.filterairline = 0;
	$scope.AirlinesIncludes = [];	
	$scope.airlinefilter = function(airline){
		$scope.Airlinesname = null;	

		var i = $.inArray(airline, $scope.AirlinesIncludes);
		if (i > -1) {
			$scope.AirlinesIncludes.splice(i, 1);
		} else {
			$scope.AirlinesIncludes.push(airline);
		}


		if($scope.AirlinesIncludes.length == 0 || $scope.AirlinesIncludes.length > 1){
			$scope.Airlinesname =  null; 
			var selectable =  angular.element(angular.element.find('#selectable li'));      
			selectable.removeClass('ui-selectee ui-selected');  
		}

		if($scope.AirlinesIncludes.length == 1){			
			$scope.Airlinesname =  $scope.AirlinesIncludes[0]; 
			var selectable =  angular.element(angular.element.find('#selectable li'));      
			selectable.removeClass('ui-selectee ui-selected');  
			var aircode = $scope.getairlinecode($scope.Airlinesname);
			var myEl = angular.element(document.querySelector('#mat'+aircode));
			myEl.addClass('ui-selectee ui-selected');		
		}
	}

	$scope.AirlineFilter = function(obj) {
		var RoundAirobjfilter = false;   
		if ($scope.AirlinesIncludes.length > 0) {
			angular.forEach(obj.flightSegmentsGroups[0].flightSegments, function(airobj) {
				angular.forEach(airobj.segments, function(svalue,index) { 
					angular.forEach($scope.AirlinesIncludes, function(airline,airindex) { 
						if (svalue.carrier.name == $scope.AirlinesIncludes[airindex])
						{
							RoundAirobjfilter = true; 
						}
					});
				});
			});
		}   
		else
		{
			RoundAirobjfilter = true; 
		}
		return RoundAirobjfilter;
	}

	$scope.showAllstops = true;
	$scope.filterstops = 0;	
	$scope.stopsIncludes = [];	
	$scope.checkstopsfilter = function(stops){
		$scope.Airlinesname = null;	
		$scope.filteredfilghts = [];
		var i = $.inArray(stops, $scope.stopsIncludes);
		if (i > -1) {
			$scope.stopsIncludes.splice(i, 1);
		} else {
			$scope.stopsIncludes.push(stops);
		}
	}


	$scope.StopsFilter = function(stopobj) {	
		var stopobjfilter = false;   
		if ($scope.stopsIncludes.length > 0) {
			angular.forEach($scope.stopsIncludes, function(airline,airindex) { 	
				angular.forEach(stopobj.flightSegmentsGroups[0].flightSegments, function(segobj,segindex) {
					if (parseInt(segobj.segments.length- 1) == $scope.stopsIncludes[airindex])
					{
						stopobjfilter = true;  
					}
				});
			});
		}  
		else
		{
			stopobjfilter = true; 
		}
		return stopobjfilter;
	}



	$scope.filterdeparttime = function(obj){ 
		var hours1 = Math.floor($scope.DepartSlider.min / 60);
		var minutes1 = $scope.DepartSlider.min - (hours1 * 60);
		if(hours1.length < 10) hours1= '0' + hours;
		if(minutes1.length < 10) minutes1 = '0' + minutes;
		if(hours1 == 0) hours1 = '00';
		if(minutes1 == 0) minutes1 = '00';
		var hours2 = Math.floor($scope.DepartSlider.max / 60);
		var minutes2 = $scope.DepartSlider.max - (hours2 * 60);
		if(hours2.length < 10) hours2= '0' + hours;
		if(minutes2.length < 10) minutes2 = '0' + minutes;
		if(hours2 == 0) hours2 = '00';
		if(minutes2 == 0) minutes2 = '00';
		var min = hours1 + ':' + minutes1;
		var max = hours2 + ':' + minutes2;
		$('#departMin').html(hours1 + ':' + minutes1);
		$('#departMax').html(hours2 + ':' + minutes2);
		var result = false;
		var departobj = obj.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime;
		var departtime = new Date(departobj); 
		var timed = departtime.getHours()+ departtime.getMinutes();
		var mind = hours1 + minutes1;
		var maxd = hours2 +  minutes2;
		var time = departobj;
		var depart = time.split(':'); 
		var departmin = min.split(':');
		var departmax = max.split(':');
		var departseconds = (+depart[0]) * 60 * 60 + (+depart[1]) * 60 ; 
		var ddepartminseconds = (+departmin[0]) * 60 * 60 + (+departmin[1]) * 60 ; 
		var departmaxdepartseconds = (+departmax[0]) * 60 * 60 + (+departmax[1]) * 60 ; 
		if(departseconds >= ddepartminseconds  && departseconds <= departmaxdepartseconds)
		{
			result = true;
		}
		if(result){
			return obj;
		}
	}



	$scope.secondfilterdeparttime = function(obj){ 
		var hours1 = Math.floor($scope.SecondDepartSlider.min / 60);
		var minutes1 = $scope.SecondDepartSlider.min - (hours1 * 60);
		if(hours1.length < 10) hours1= '0' + hours;
		if(minutes1.length < 10) minutes1 = '0' + minutes;
		if(hours1 == 0) hours1 = '00';
		if(minutes1 == 0) minutes1 = '00';
		var hours2 = Math.floor($scope.SecondDepartSlider.max / 60);
		var minutes2 = $scope.SecondDepartSlider.max - (hours2 * 60);
		if(hours2.length < 10) hours2= '0' + hours;
		if(minutes2.length < 10) minutes2 = '0' + minutes;
		if(hours2 == 0) hours2 = '00';
		if(minutes2 == 0) minutes2 = '00';
		var min = hours1 + ':' + minutes1;
		var max = hours2 + ':' + minutes2;
		$('#seconddepartMin').html(hours1 + ':' + minutes1);
		$('#seconddepartMax').html(hours2 + ':' + minutes2);
		var result = false;
		var departobj = obj.flightSegmentsGroups[1].flightSegments[0].segments[0].depTime;
		var departtime = new Date(departobj); 
		var timed = departtime.getHours()+ departtime.getMinutes();
		var mind = hours1 + minutes1;
		var maxd = hours2 +  minutes2;
		var time = departobj;
		var depart = time.split(':'); // split it at the colons
		var departmin = min.split(':');
		var departmax = max.split(':');

//		minutes are worth 60 seconds. Hours are worth 60 minutes.
		var departseconds = (+depart[0]) * 60 * 60 + (+depart[1]) * 60 ; 
		var ddepartminseconds = (+departmin[0]) * 60 * 60 + (+departmin[1]) * 60 ; 
		var departmaxdepartseconds = (+departmax[0]) * 60 * 60 + (+departmax[1]) * 60 ; 
		if(departseconds >= ddepartminseconds  && departseconds <= departmaxdepartseconds)
		{
			result = true;
		}
		if(result){
			return obj;
		}
	}



	$scope.filterarrivaltime = function(obj){  

		var hours1 = Math.floor($scope.ArrivalSlider.min / 60);
		var minutes1 = $scope.ArrivalSlider.min - (hours1 * 60);

		if(hours1.length < 10) hours1= '0' + hours;
		if(minutes1.length < 10) minutes1 = '0' + minutes;

		if(minutes1 == 0) minutes1 = '00';

		var hours2 = Math.floor($scope.ArrivalSlider.max / 60);
		var minutes2 = $scope.ArrivalSlider.max - (hours2 * 60);

		if(hours2.length < 10) hours2= '0' + hours;
		if(minutes2.length < 10) minutes2 = '0' + minutes;

		if(minutes2 == 0) minutes2 = '00';
		var min = hours1 + ':' + minutes1;
		var max = hours2 + ':' + minutes2;
		$('#arriMin').html(hours1 + ':' + minutes1);
		$('#arriMax').html(hours2 + ':' + minutes2);
		var result = false;
		var arrivalobj = obj.flightSegmentsGroups[0].flightSegments[0].segments[obj.flightSegmentsGroups[0].flightSegments[0].segments.length -1].arrTime;
		var arrivaltime = new Date(arrivalobj);  
		var timed = arrivaltime.getHours()+ arrivaltime.getMinutes();
		var mind = hours1 + minutes1;
		var maxd = hours2 +  minutes2;
		var time = arrivalobj;
		var arrival = time.split(':'); // split it at the colons
		var arrivalmin = min.split(':');
		var arrivalmax = max.split(':');
//		minutes are worth 60 seconds. Hours are worth 60 minutes.
		var arrivalseconds = (+arrival[0]) * 60 * 60 + (+arrival[1]) * 60 ; 
		var arrivalminseconds = (+arrivalmin[0]) * 60 * 60 + (+arrivalmin[1]) * 60 ; 
		var arrivalmaxdepartseconds = (+arrivalmax[0]) * 60 * 60 + (+arrivalmax[1]) * 60 ; 
		if(arrivalseconds >= arrivalminseconds  && arrivalseconds <= arrivalmaxdepartseconds)
		{
			result = true;
		}
		if(result){
			return obj;
		}
	}

	$scope.secondfilterarrivaltime = function(obj){  

		var hours1 = Math.floor($scope.SecondArrivalSlider.min / 60);
		var minutes1 = $scope.SecondArrivalSlider.min - (hours1 * 60);

		if(hours1.length < 10) hours1= '0' + hours;
		if(minutes1.length < 10) minutes1 = '0' + minutes;
		if(minutes1 == 0) minutes1 = '00';
		var hours2 = Math.floor($scope.SecondArrivalSlider.max / 60);
		var minutes2 = $scope.SecondArrivalSlider.max - (hours2 * 60);
		if(hours2.length < 10) hours2= '0' + hours;
		if(minutes2.length < 10) minutes2 = '0' + minutes;
		if(minutes2 == 0) minutes2 = '00';
		var min = hours1 + ':' + minutes1;
		var max = hours2 + ':' + minutes2;
		$('#secondarriMin').html(hours1 + ':' + minutes1);
		$('#secondarriMax').html(hours2 + ':' + minutes2);
		var result = false;			
		var arrivalobj = obj.flightSegmentsGroups[1].flightSegments[0].segments[obj.flightSegmentsGroups[1].flightSegments[0].segments.length -1].arrTime;
		var arrivaltime = new Date(arrivalobj);  
		var timed = arrivaltime.getHours()+ arrivaltime.getMinutes();
		var mind = hours1 + minutes1;
		var maxd = hours2 +  minutes2;
		var time = arrivalobj;
		var arrival = time.split(':'); // split it at the colons
		var arrivalmin = min.split(':');
		var arrivalmax = max.split(':');

//		minutes are worth 60 seconds. Hours are worth 60 minutes.
		var arrivalseconds = (+arrival[0]) * 60 * 60 + (+arrival[1]) * 60 ; 
		var arrivalminseconds = (+arrivalmin[0]) * 60 * 60 + (+arrivalmin[1]) * 60 ; 
		var arrivalmaxdepartseconds = (+arrivalmax[0]) * 60 * 60 + (+arrivalmax[1]) * 60 ; 
		if(arrivalseconds >= arrivalminseconds  && arrivalseconds <= arrivalmaxdepartseconds)
		{
			result = true;
		}
		if(result){
			return obj;
		}
	}


	function escapeRegExp(string) {
		return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}
	function replaceAll(string, find, replace) {
		return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	}



	$scope.showdetailsround = function(obj){
		var newobjid = replaceAll(obj.id,':','\\:');    
		var radioid = '#radiobutton'+newobjid;
		$scope.selectedSegmentsid = obj.id;
		var roundseg = [];
		var flightindexarr = [];
		angular.forEach(obj.flightSegmentsGroups, function(Groupsobj,index) {
			var radiobyname =  'input[name=selectedflightindex'+newobjid+index+']';
			var checkedid = angular.element($.find(radiobyname+':checked'));
			var flightindexid = checkedid.attr('id');   
			angular.forEach(Groupsobj.flightSegments, function(Segmentobj,index) { 
				if(flightindexid == Segmentobj.flightIndex)
				{
					flightindexarr.push(Segmentobj.flightIndex);
					roundseg.push(Segmentobj.segments)
					$scope.totalprice = obj.totalPrice;					
					$scope.exchangerate = obj.exchangeRate;

				}
			});
		});

		$scope.selectedflightindexids = flightindexarr;
		$scope.selectedflight = obj;        
		$scope.showselectedsegments = roundseg;

		//Duratuion Calculatiuon modal
		var departObj = []; var arrvlObj = [];  $scope.duration = [];
		angular.forEach($scope.showselectedsegments, function(timeobj,index) {
			angular.forEach(timeobj, function(minobj,index) {
				var departHour = minobj.depart;
				var arrivalHour = minobj.arrival;
				var a = moment(arrivalHour); 
				var b = moment(departHour);
				var c = a.diff(b, 'minutes');
				var Duration = $scope.convertminToHour(c);
				$scope.duration.push(Duration);
			});
		}); 
		//End Duration modal

		$scope.totalprice = obj.totalPrice;
		var fareref =  $scope.showselectedsegments[0][0].fareInfoRef;           
		var secondfareref =   $scope.showselectedsegments[1][0].fareInfoRef;          
		var firstrulevalue ;
		var seecondrulevalue ;
		var providercode ;
		for(var i=0;i<$scope.selectedflight.fareRules.length;i++)
		{
			var rule = $scope.selectedflight.fareRules[i].fareRule[0].fareInfoRef;
			if(fareref == rule){
				firstrulevalue = $scope.selectedflight.fareRules[i].fareRule[0].fareValue;
				providercode = $scope.selectedflight.fareRules[i].fareRule[0].fareProviderCode;
				$scope.baggageunit = $scope.selectedflight.fareRules[i].fareRule[0].bagAllowanceUnit;
				$scope.baggagevalue = $scope.selectedflight.fareRules[i].fareRule[0].bagAllowanceValue;
				if($scope.baggageunit ==null && ($scope.baggagevalue ==0 ||$scope.baggagevalue ==null)){
					$scope.baggagevalue="No Information Available";	
				}
				else if($scope.baggageunit ==null){
					$scope.baggageunit="Kg";
				}
			}
			if(secondfareref == rule) {   		
				seecondrulevalue = $scope.selectedflight.fareRules[i].fareRule[0].fareValue;
				$scope.secondbaggageunit = $scope.selectedflight.fareRules[i].fareRule[0].bagAllowanceUnit;
				$scope.secondbaggagevalue = $scope.selectedflight.fareRules[i].fareRule[0].bagAllowanceValue;
				if($scope.secondbaggageunit ==null && ($scope.secondbaggagevalue ==0 ||$scope.secondbaggagevalue ==null)){
					$scope.secondbaggagevalue="No Information Available";	
				}
				else if($scope.secondbaggageunit ==null){
					$scope.secondbaggageunit="Kg";
				}
			}
		}

		$scope.rulesloader = "block"; 

		$http({method:'get',url:commonService.baseUrl+'farerule/response',headers:{'Content-Type': 'application/json'},params: {app_key: $scope.user.app_key,farerulekey:fareref,farerulevalue:firstrulevalue,providercode:providercode}}).
		success(function(data, status, headers, config){
			if(data.fareruleList==undefined||data.fareruleList==0){
				$scope.rulesloader = "none";
				$scope.farerulelist = [{category: 0,type: "RULE",value:"<b>No Fare Rules</b>"}];
			}
			else{
				$scope.rulesloader = "none";
				$scope.farerulelist = data.fareruleList;	
			}
		}).error(function(data, status, headers, config){
			$scope.rulesloader = "none";
			$scope.farerulelist = [{category: 0,type: "RULE",value:"No Fare Rules"}];
		});

	};

	$scope.returnIndex = function(){
		window.location.href = window.location.href.replace(/#.*$/, '');
	}

	$scope.RoundShowsummary  = function(groupid,flightid){
		$scope.checksummary = 1;
		angular.forEach($scope.fareFlightSegment, function(fareflightvalue,fareindex) { 		

			if( fareflightvalue.id == groupid) 
			{
				angular.forEach(fareflightvalue.flightSegmentsGroups, function(Groupsobj,groupindex) {
					angular.forEach(Groupsobj.flightSegments, function(Segmentobj,index) { 
						if(groupindex == 0 && Segmentobj.flightIndex == flightid)
						{
							var newobjid = replaceAll(groupid,':','\\:');  
							var flightidindex =  angular.element(angular.element.find('input[name=firstflightindex]'));
							var id = flightidindex.attr('id');

							for(var i=0;i<flightidindex.length;i++)
							{
								var id = flightidindex[i];
								var index =  angular.element(angular.element.find(flightidindex[i]));   		
								if(index.attr('id') == 'firstflightindex'+groupid)
								{
									angular.element(index.attr('value', Segmentobj.flightIndex));
								}
							}
						}
						if(groupindex == 1 && Segmentobj.flightIndex == flightid)
						{
							var newobjid = replaceAll(groupid,':','\\:');  
							var flightidindex =  angular.element(angular.element.find('input[name=secondflightindex]'));
							var id = flightidindex.attr('id');

							for(var i=0;i<flightidindex.length;i++)
							{
								var id = flightidindex[i];
								var index =  angular.element(angular.element.find(flightidindex[i])); 
								if(index.attr('id') == 'secondflightindex'+groupid)
								{
									angular.element(index.attr('value', Segmentobj.flightIndex));
									//console.log(index.attr('value')); 
								}
							}
						}

					});
				});
			}
		});
	}

	//do hide empty group on  isShowable -- to be called on every onFilter event
	$scope.isShowable = function(groupindex) {
		var groupdivparentlist = $window.document.getElementsByClassName("flightlistcon");
		var isshowable = true;
		for(var i = 0; i<groupdivparentlist.length; i++)
		{
			var childcount = groupdivparentlist[i].getElementsByClassName("sin-row").length;
			if(i == groupindex && childcount == 0)
			{
				isshowable = false;
				break;
			}
		}
		return isshowable;
	}

	//do hide empty group on  isShowable -- to be called on every onFilter event
	$scope.returnFirstVisibleGroupindex = function() {
		var groupdivparenthidelist = $window.document.getElementsByClassName("flightlistcon ng-scope");
		var hiddengrouplist = $window.document.getElementsByClassName("flightlistcon ng-scope ng-hide");		
		var groupdivparentshowlist = $window.document.getElementsByClassName("flightlistcon");
		var isshowable = true;
		for(var i = 0; i<groupdivparentshowlist.length; i++)
		{			
			var ishidden = false;
			for(var hideindex = 0; hideindex<hiddengrouplist.length; hideindex++)
			{
				var groupdivid = groupdivparentshowlist[i].id;
				var hiddengroupdivid = hiddengrouplist[hideindex].id;
				if(groupdivid == hiddengroupdivid)
				{
					ishidden  = true;
					break;
				}
			}
			if(!ishidden)
			{
				return i;
			}
		}
		return isshowable;
	};


	$scope.datecompare11 = function(obj1,obj2)
	{
		var arrtime = new Date(obj2);
		var deptime = new Date(obj1);
		var tseconds = (arrtime.getTime() - deptime.getTime())/1000;    

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
		var totalSeconds = conversions['ss'](tseconds),
		hh = Math.floor(totalSeconds / 3600),
		mm = Math.floor((totalSeconds % 3600) / 60),
		ss = totalSeconds % 60;

		var format = 'hh:mm';
		var isPadded = angular.isDefined(isPadded)? isPadded: true;
		hh = isPadded? padding(hh, 2): hh;
		mm = isPadded? padding(mm, 2): mm;
		ss = isPadded? padding(ss, 2): ss;
		return format.replace(/hh/, hh).replace(/mm/, mm).replace(/ss/, ss);
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


	$scope.yyyymmdd = function(dateIn) {
		var yyyy = dateIn.getFullYear();
		var mm = dateIn.getMonth()+1; // getMonth() is zero-based
		var dd  = dateIn.getDate();
		return String(10000*yyyy + 100*mm + dd); // Leading zeros for mm and dd
	}

	$scope.ThemeType = $location.search().thm;
	$scope.flightresearch = function(){
		var origin = $("#originid").val();
		var destination =$("#destinationid").val();
		var adult = angular.element('#adultid').text();
		var kid = angular.element('#kidid').text();
		var infant = angular.element('#infantid').text();
		var triptype = angular.element('#triptype').val();
		var cabinClass = angular.element('#cabinselect').val();
		var airline = angular.element('#airlinecode').val();
		var currency = angular.element('#onecurrencyname').val(); 
		var app_key = angular.element('#ay').val();
		var isDynamicmarkup = angular.element('#isDynamicmarkup').val();
		var markupAmount = angular.element('#markupAmount').val();
		var searchkey = '';		
		var orifirstindex =origin.indexOf(',') + 1;
		var orilastindex = origin.lastIndexOf(',');          
		var desfirstindex = destination.indexOf(',') + 1;
		var deslastindex = destination.lastIndexOf(',');
		var originCountry = origin.substring(orifirstindex, orilastindex);
		var destinationCountry = destination.substring(desfirstindex, deslastindex);
		var Deptdate = $("#twodpd1").val();
		var arravaialDate = $("#twodpd2").val();
		if (originCountry == "") {
			$("#erroriround").text("Please Enter the Origin City");
			$('#erroriround').stop().fadeIn(400).delay(1500).fadeOut(400);       
		} else if (destinationCountry == "") {
			$("#errdesround").text("Please Enter the Destination City");
			$('#errdesround').stop().fadeIn(400).delay(1500).fadeOut(400);
		} 
		else if (origin == destination) {
			$("#errdesround").text("Please Enter the Different Destination City");
			$('#errdesround').stop().fadeIn(400).delay(1500).fadeOut(400);
		}
		else if (Deptdate == "") {      
			$("#errdepround").text("Select the Depart date");
			$('#errdepround').stop().fadeIn(400).delay(1500).fadeOut(400);

		} else if (arravaialDate == "") {
			$("#errarrround").text("Select the Arrival date");
			$('#errarrround').stop().fadeIn(400).delay(1500).fadeOut(400);      
		}else{

			if(originCountry == "India" && destinationCountry == "India"){
				var isdomestic = true;
				var domModify = ('/Flights-Domestic-'+$scope.ThemeType+'?ori='+encodeURIComponent(origin)+'&des='+encodeURIComponent(destination)+'&depart='+encodeURIComponent(Deptdate)+'&arrival='+encodeURIComponent(arravaialDate)
						+'&clas='+encodeURIComponent(cabinClass)+'&ccy='+currency+'&isDom='+isdomestic+'&isDyn='+isDynamicmarkup+'&marAt='+encodeURIComponent(markupAmount)+'&tty='+encodeURIComponent(triptype)
						+'&ay='+encodeURIComponent(app_key)+'&sky='+encodeURIComponent(searchkey)+'&adt='+adult+'&kid='+kid+'&inf='+infant+'&airline='+airline+'&thm='+$scope.ThemeType);
				localStorageService.set('UrlParameters',domModify);
				$location.url(domModify);
			}else{		
				var isdomestic = false;
				var internModify  = ('/Flights-International-'+$scope.ThemeType+'?ori='+encodeURIComponent(origin)+'&des='+encodeURIComponent(destination)+'&depart='+encodeURIComponent(Deptdate)+'&arrival='+encodeURIComponent(arravaialDate)
						+'&class='+encodeURIComponent(cabinClass)+'&ccy='+currency+'&isDom='+isdomestic+'&isDyn='+isDynamicmarkup+'&marAt='+encodeURIComponent(markupAmount)+'&tty='+encodeURIComponent(triptype)
						+'&ay='+encodeURIComponent(app_key)+'&sky='+encodeURIComponent(searchkey)+'&adt='+adult+'&kid='+kid+'&inf='+infant+'&airline='+airline+'&thm='+$scope.ThemeType);
				localStorageService.set('UrlParameters',internModify);
				$location.url(internModify);
			}
		}
	};

	$scope.addmarkup = function(){	
		var markUp = {};
		markUp.isDynamicMarkup = angular.element('#Dynamic').val();
		markUp.markupAmount = angular.element('#appliedmarkamt').val();
		markUp.searchkey= $scope.searchkey;
		markUp.origin = $("#originid").val();
		markUp.destination = $("#destinationid").val();
		markUp.adult = $scope.adult;
		markUp.kid = $scope.child;
		markUp.infant = $scope.infant;		
		markUp.departureDate = $("#twodpd1").val();
		markUp.arrivalDate =  $("#twodpd2").val();
		markUp.cabinClass = $scope.cabin;
		markUp.currency = $scope.currencyname;		
		markUp.triptype = $scope.mtriptype;		
		markUp.app_key =angular.element('#ay').val();
		markUp.airline = angular.element('#airlinecode').val();
		markUp.isDomestic = $scope.misDomestic;
		$location.url('/Flights-International-'+$scope.ThemeType+'?ori='+encodeURIComponent(markUp.origin)+'&des='+encodeURIComponent(markUp.destination)+'&depart='+encodeURIComponent(markUp.departureDate)+'&arrival='+encodeURIComponent(markUp.arrivalDate)
				+'&class='+encodeURIComponent(markUp.cabinClass)+'&ccy='+markUp.currency+'&isDom='+markUp.isDomestic+'&isDyn='+markUp.isDynamicMarkup+'&marAt='+encodeURIComponent(markUp.markupAmount)+'&tty='+encodeURIComponent(markUp.triptype)
				+'&ay='+encodeURIComponent(markUp.app_key)+'&sky='+encodeURIComponent(markUp.searchkey)+'&adt='+markUp.adult+'&kid='+markUp.kid+'&inf='+markUp.infant+'&airline='+markUp.airline+'&thm='+$scope.ThemeType);


	}
	$scope.booknow = function(index){
		$scope.isCor=angular.element('#isCorporate').val();
		var intrBook = {};
		intrBook.ccy = angular.element('#ccy'+index).val();
		intrBook.adult = angular.element('#adult'+index).val();  
		intrBook.child = angular.element('#child'+index).val();
		intrBook.infant =angular.element('#infant'+index).val();
		intrBook.searchkey = angular.element('#searchkey'+index).val();  
		intrBook.app_key = angular.element('#app_key'+index).val();
		intrBook.flightindex =angular.element('#fid'+index).val();
		intrBook.sflightindex =angular.element('#sid'+index).val();
		intrBook.typeroute="round";
		intrBook.bookingRound = "book"
			if($scope.isCor =='true'){
				intrBook.isOneway=false;
				var selectedflight=$scope.selectedFlight(intrBook);
				var depart=selectedflight.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime;
				var closestTime=$scope.convertmin(depart);
				var minclosetime;
				var maxclosetime;
				minclosetime=closestTime-$scope.durationTime;
				maxclosetime=closestTime+$scope.durationTime;			
				$scope.closestflights(minclosetime,maxclosetime);
				if($scope.closestFlights.length!=0){
					intrBook.origin=$scope.allParams.origin;
					intrBook.destination=$scope.allParams.destination;
					intrBook.depDate=$scope.allParams.depDate;
					intrBook.arvlDate=$scope.allParams.arvlDate;
					intrBook.triptype=$scope.allParams.triptype;
					var lowFareFlights=[];
					var selectprice=parseInt(selectedflight.totalPrice);
					angular.forEach($scope.closestFlights, function(value) {
						var currentprice=parseInt(value.totalPrice);
						if(selectprice > currentprice){
							lowFareFlights.push(value);
						}
					})
					$scope.lowpricewithStopflight(lowFareFlights);
					var lowfareFlight1;
					var lowfareFlight2;
					if(lowFareFlights.length !=0){
						if(lowFareFlights.length >1){
							var cheaplowfareStop=[];
							cheaplowfareStop.push($scope.sortet_stopFlights[0]);
							cheaplowfareStop.push($scope.sortet_stopFlights[1]);					
							cheaplowfareStop.sort(function(a, b) {
								return parseFloat(a.totalPrice) - parseFloat(b.totalPrice);
							});

							lowfareFlight1=cheaplowfareStop[0];
							lowfareFlight2=cheaplowfareStop[1];

						}
						else if(lowFareFlights.length ==1){
							lowfareFlight1=lowFareFlights[0];
							lowfareFlight2=null;

						}
						$scope.items1 = selectedflight; 	
						$scope.items2 = lowfareFlight1;
						$scope.items3 =  lowfareFlight2;
						$scope.items4 =  intrBook;
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
					else{

						var url='/Flights-BookSummary-'+$scope.ThemeType+'?ad='+intrBook.adult+'&chd='
						+intrBook.child+'&inf='+intrBook.infant+'&bkTy='+encodeURIComponent(intrBook.bookingtype)
						+'&sfindx='+encodeURIComponent(intrBook.sflightindex)
						+'&ccy='+encodeURIComponent(intrBook.ccy)+'&ay='+encodeURIComponent(intrBook.app_key)
						+'&finx='+encodeURIComponent(intrBook.flightindex)+'&sky='+encodeURIComponent(intrBook.searchkey)
						+'&ori='+encodeURIComponent($scope.allParams.origin)+'&des='+encodeURIComponent($scope.allParams.destination)+'&depart='+encodeURIComponent($scope.allParams.depDate)+'&arrival='+encodeURIComponent($scope.allParams.arvlDate)+'&tty='+encodeURIComponent($scope.allParams.triptype)
						+'&islowfare='+true+'&lowfareflightindex1='+""+'&lowfareflightindex2='
						+""+'&reasontoselect='+""+'&islowfarereturn='+'true'+'&lowfareflightindexreturn1='
						+""+'&lowfareflightindexreturn2='+""+'&reasontoselectreturn='+""+'&thm='+$scope.ThemeType;
						$location.url(url);

					}
				}
				else{
					var url='/Flights-BookSummary-'+$scope.ThemeType+'?ad='+intrBook.adult+'&chd='
					+intrBook.child+'&inf='+intrBook.infant+'&bkTy='+encodeURIComponent(intrBook.bookingtype)
					+'&sfindx='+encodeURIComponent(intrBook.sflightindex)
					+'&ccy='+encodeURIComponent(intrBook.ccy)+'&ay='+encodeURIComponent(intrBook.app_key)
					+'&finx='+encodeURIComponent(intrBook.flightindex)+'&sky='+encodeURIComponent(intrBook.searchkey)
					+'&ori='+encodeURIComponent($scope.allParams.origin)+'&des='+encodeURIComponent($scope.getUrlParams.destination)+'&depart='+encodeURIComponent($scope.getUrlParams.depDate)+'&arrival='+encodeURIComponent($scope.allParams.arvlDate)+'&tty='+encodeURIComponent($scope.allParams.triptype)
					+'&islowfare='+true+'&lowfareflightindex1='+""+'&lowfareflightindex2='
					+""+'&reasontoselect='+""+'&islowfarereturn='+'true'+'&lowfareflightindexreturn1='
					+""+'&lowfareflightindexreturn2='+""+'&reasontoselectreturn='+""+'&thm='+$scope.ThemeType;
					$location.url(url);
				}
			}else{
				var url='/Flights-BookSummary-'+$scope.ThemeType+'?ad='+intrBook.adult+'&chd='
				+intrBook.child+'&inf='+intrBook.infant+'&bkTy='+encodeURIComponent(intrBook.bookingtype)
				+'&sfindx='+encodeURIComponent(intrBook.sflightindex)
				+'&ccy='+encodeURIComponent(intrBook.ccy)+'&ay='+encodeURIComponent(intrBook.app_key)
				+'&finx='+encodeURIComponent(intrBook.flightindex)+'&sky='+encodeURIComponent(intrBook.searchkey)
				+'&ori='+encodeURIComponent($scope.allParams.origin)+'&des='+encodeURIComponent($scope.allParams.destination)+'&depart='+encodeURIComponent($scope.allParams.depDate)+'&arrival='+encodeURIComponent($scope.allParams.arvlDate)+'&tty='+encodeURIComponent($scope.allParams.triptype)
				+'&islowfare='+true+'&lowfareflightindex1='+""+'&lowfareflightindex2='
				+""+'&reasontoselect='+""+'&islowfarereturn='+'true'+'&lowfareflightindexreturn1='
				+""+'&lowfareflightindexreturn2='+""+'&reasontoselectreturn='+""+'&thm='+$scope.ThemeType;
				$location.url(url);
			}
		jQuery.noConflict(); 
		$('body').removeClass('modal-open');
		$('.modal-backdrop').remove();
	}


	$scope.convertmin= function(time){
		var a = time.split(':');
		var minutes = (+a[0]) * 60 + (+a[1]);
		return minutes;
	}

	$scope.selectedFlight = function(fidx){		
		var selectedflight;
		angular.forEach($scope.fareFlightSegment, function(obj,index) { 
			angular.forEach(obj.flightSegmentsGroups[0].flightSegments, function(Segmentobj,index) { 
				if(fidx.flightindex == Segmentobj.flightIndex)
				{
					selectedflight=obj;
				} 
			})
		})
		return selectedflight;
	}

	$scope.lowpricewithStopflight=function(value) {
		$scope.sortet_stopFlights=value.sort(function (one, other) {
			return one.flightSegmentsGroups[0].flightSegments[0].segments.length - other.flightSegmentsGroups[0].flightSegments[0].segments.length;
		});
	}


	$scope.closestflights =function(min,max) { 
		$scope.closestFlights=[];
		angular.forEach($scope.fareFlightSegment, function(value) {	
			var departtime=value.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime;
			var departMin=$scope.convertmin(departtime);
			if(min<=departMin && max>=departMin){
				$scope.closestFlights.push(value);
			}

		})

	}

	$scope.Holdnow = function(index){
		var internHold = {};
		internHold.ccy = angular.element('#ccy'+index).val();
		internHold.adult = angular.element('#adult'+index).val();  
		internHold.child = angular.element('#child'+index).val();
		internHold.infant =angular.element('#infant'+index).val();
		internHold.searchkey = angular.element('#searchkey'+index).val();  
		internHold.app_key = angular.element('#app_key'+index).val();
		internHold.flightindex =angular.element('#fid'+index).val();
		internHold.sflightindex =angular.element('#sid'+index).val();
		internHold.typeroute="round";
		internHold.holdingRound = "hold";

		var url='/Flights-BookSummary-'+$scope.ThemeType+'?ad='+internHold.adult+'&chd='+internHold.child+'&inf='+internHold.infant+'&sfindx='+encodeURIComponent(internHold.sflightindex)+'&ccy='+encodeURIComponent(internHold.ccy)+'&ay='+encodeURIComponent(internHold.app_key)+'&finx='+encodeURIComponent(internHold.flightindex)+'&sky='+encodeURIComponent(internHold.searchkey)+'&typRoute='+internHold.typeroute+'&bkTy='+internHold.holdingRound+'&thm='+$scope.ThemeType;
		$location.url(url);

	}

	$scope.returnToindex = function(){		
		window.location.href = window.location.href.replace(/#.*$/, '');
	}



	$scope.setScopeUser = function(locationpath){
		function pad(n){return n<10 ? '0'+n : n}
		$scope.roundQuoteData = {};
		var Ostart = locationpath.ori.lastIndexOf('(') +1;
		var Oend = locationpath.ori.lastIndexOf(')');
		var Dstart = locationpath.des.lastIndexOf('(') +1;
		var Dend = locationpath.des.lastIndexOf(')');
		var orifirstindex =locationpath.ori.indexOf(',') + 1;
		var orilastindex = locationpath.ori.lastIndexOf(',');		    	
		var desfirstindex = locationpath.des.indexOf(',') + 1;
		var deslastindex = locationpath.des.lastIndexOf(',');
		var originCountry = locationpath.ori.substring(orifirstindex, orilastindex);
		var destinationCountry = locationpath.des.substring(desfirstindex, deslastindex);
		$scope.roundQuoteData.originCountry=originCountry;
		$scope.roundQuoteData.destCountry=destinationCountry;
		$scope.roundQuoteData.origin = locationpath.ori.substring(Ostart, Oend);
		$scope.roundQuoteData.destination = locationpath.des.substring(Dstart, Dend);
		$scope.roundQuoteData.originall=locationpath.ori;
		$scope.roundQuoteData.destinationall=locationpath.des;

		var depParts = decodeURIComponent(locationpath.depDate).split("-");
		var dd = new Date(depParts[2], depParts[1] - 1, depParts[0]);
		var depDate = dd.getFullYear()+  "-" + pad((dd.getMonth() + 1)) + "-" + pad(dd.getDate()) ;
		var dateDep = $filter('date')(depDate, 'yyyyMMdd');
		var departureDate = $filter('date')(depDate, 'dd/MM/yyyy');

		var arvlParts = decodeURIComponent(locationpath.arvlDate).split("-");
		var ad = new Date(arvlParts[2], arvlParts[1] - 1, arvlParts[0]);
		var arvlDate = ad.getFullYear()+  "-" + pad((ad.getMonth() + 1)) + "-" + pad(ad.getDate()) ;
		var dateArvl = $filter('date')(arvlDate, 'yyyyMMdd');
		var arrivalDate = $filter('date')(arvlDate, 'dd/MM/yyyy');

		$scope.roundQuoteData.depDate = dateDep;
		$scope.roundQuoteData.departureDate = departureDate;
		$scope.roundQuoteData.arvlDate = dateArvl;
		$scope.roundQuoteData.arrivalDate = arrivalDate;

		$scope.roundQuoteData.currency=locationpath.ccy;
		$scope.roundQuoteData.searchkey="";
		$scope.roundQuoteData.triptype = locationpath.triptype;
		$scope.roundQuoteData.cabinClass =  locationpath.cabinClass;
		$scope.roundQuoteData.adult = locationpath.adult;
		$scope.roundQuoteData.kid = locationpath.kid;
		$scope.roundQuoteData.infant = locationpath.infant;
		$scope.roundQuoteData.app_key=locationpath.ay;
		localStorageService.set('InternationalUserdata',$scope.roundQuoteData);
	}


	$scope.addtoquotelist = function(fareFlightSegment,index){
		angular.element('#QuoteClick'+index).removeClass('btn-info').addClass('btn-greeninfo');
		var passcount = parseInt($scope.user.adult)+parseInt($scope.user.kid)+parseInt($scope.user.infant);	
		var totaldurationarray=[];

		angular.forEach(fareFlightSegment.flightSegmentsGroups, function(obj,flightgroupindex) {	
			var totalduration ;
			if(obj.flightSegments[0].segments.length == 1){
				totalduration = $filter('tayyarahtimeformat')(obj.flightSegments[0].segments);
			}
			if(obj.flightSegments[0].segments.length == 2){
				totalduration = $scope.getlayovercompare(obj.flightSegments[0].segments[0].arrival,obj.flightSegments[0].segments[1].depart);
			}
			if(obj.flightSegments[0].segments.length == 3){
				totalduration = $scope.getlayovercomparelevel2(obj.flightSegments[0].segments,obj.flightSegments[0].segments[0].arrival,obj.flightSegments[0].segments[1].depart,obj.flightSegments[0].segments[1].arrival,obj.flightSegments[0].segments[2].depart);
			}
			totaldurationarray.push(totalduration);	
		});

		var flightnumberarray=[];
		angular.forEach(fareFlightSegment.flightSegmentsGroups, function(obj,flightgroupindex) { 
			var segflightnumberarray=[];
			angular.forEach(obj.flightSegments[0].segments, function(segobj,segindex) { 
				var	flightno;
				flightno=segobj.flight.number;
				segflightnumberarray.push(flightno);	
			});

			flightnumberarray.push(segflightnumberarray);	
		});

		var totalduration ="";
		var quotejson = {'airline':fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name,
				'departureDate':fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].segments[0].depDate,
				'arrivalDate':fareFlightSegment.flightSegmentsGroups[fareFlightSegment.flightSegmentsGroups.length-1].flightSegments[fareFlightSegment.flightSegmentsGroups[fareFlightSegment.flightSegmentsGroups.length-1].flightSegments.length-1].segments[fareFlightSegment.flightSegmentsGroups[fareFlightSegment.flightSegmentsGroups.length-1].flightSegments[fareFlightSegment.flightSegmentsGroups[fareFlightSegment.flightSegmentsGroups.length-1].flightSegments.length-1].segments.length-1].arrDate,				
				'travelRequestDate':fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].segments[0].depDate, 
				'origin':$location.search().ori,
				'destination':$location.search().des,
				'tripType':'R',
				'flightNumber':fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].segments[0].flight.number,
				'bookingClassPrefer':$location.search().class,
				'adultCount':$location.search().adt,
				'childCount':$location.search().kid,
				'infantCount':$location.search().inf,
				'baseAmount':fareFlightSegment.basePrice,
				'taxAmount':fareFlightSegment.taxes,
				'booked':false,
				'passengerCount':passcount,
				'totalDuration':totaldurationarray[0],
				'totalAmount':fareFlightSegment.totalPrice}; 

		var quotetripdetailarray = [];
		//console.log(fareFlightSegment);
		if(fareFlightSegment.flightSegmentsGroups.length > 0)
		{
			angular.forEach(fareFlightSegment.flightSegmentsGroups, function(obj,flightgroupindex) { 			
				var flightNumber;
				if(flightgroupindex==0){
					flightNumber=flightnumberarray[0];
				}
				if(flightgroupindex==1)
				{
					flightNumber=flightnumberarray[1];
				}

				var quotetripdetailjson = {
						'operatedByName':obj.flightSegments[0].segments[0].carrier.name,
						'operatedByCode':obj.flightSegments[0].segments[0].carrier.code,
						'departureTimestamp':obj.flightSegments[0].segments[0].depDate,
						'departureDate':obj.flightSegments[0].segments[0].depDate,
						'depTime':obj.flightSegments[0].segments[0].depTime,
						'arrivalTimestamp':obj.flightSegments[0].segments[0].arrDate,
						'arrivalDate':obj.flightSegments[0].segments[0].arrDate,
						'arrTime':obj.flightSegments[0].segments[0].arrTime,
						'flightDuration':obj.flightSegments[0].segments[0].duration,
						'flightNumber':obj.flightSegments[0].segments[0].flight.number,
						'originName':obj.flightSegments[0].segments[0].oriName,
						'originCode':obj.flightSegments[0].segments[0].ori,
						'destinationName':obj.flightSegments[0].segments[0].destName,
						'destinationCode':obj.flightSegments[0].segments[0].dest,
						'trips':2,
						'classOfService':$location.search().class,
						'destinationTerminal':obj.flightSegments[0].segments[0].flight.destTerminal,
						'originTerminal':obj.flightSegments[0].segments[0].flight.oriTerminal
				};
				quotetripdetailarray.push(quotetripdetailjson);
				//console.log(quotetripdetailjson);	    
			});
		}

		var quoteconnectingflightjsonarray=[];
		var quoteconnectingflightonward = [];
		var quoteconnectingflightoreturn=[];
		var quoteconnectobject = [];
		angular.forEach(fareFlightSegment.flightSegmentsGroups, function(obj,flightgroupindex) { 

			$scope.quoteconnectingOnward="onwords";
			$scope.quoteconnectingReturn="returns";

			if(flightgroupindex==0){
				if(obj.flightSegments[0].segments.length > 0)
				{
					angular.forEach(obj.flightSegments[0].segments, function(obj,index) { 			
						if(index != 0){
							var onwardflightjson = {'operatedByName':obj.carrier.name,
									'operatedByCode':obj.carrier.code,
									'departureTimestamp':obj.depDate,
									'departureDate':obj.depDate,
									'depTime':obj.depTime,
									'arrivalTimestamp':obj.arrDate,
									'arrivalDate':obj.arrDate,
									'arrTime':obj.arrTime,
									'flightDuration':obj.duration,
									'flightNumber':obj.flight.number,
									'originName':obj.oriName,
									'originCode':obj.ori,
									'destinationName':obj.destName,
									'destinationCode':obj.dest,
									'trips':1,
									'classOfService':$location.search().class,
									'destinationTerminal':obj.flight.destTerminal,
									'originTerminal':obj.flight.oriTerminal};
							quoteconnectobject.push(onwardflightjson);
						}    
					});
				}
			}

			if(flightgroupindex==1)
			{
				if(obj.flightSegments[0].segments.length > 0)
				{
					angular.forEach(obj.flightSegments[0].segments, function(obj,index) { 			
						if(index != 0){
							var returnsflightjson = {'operatedByName':obj.carrier.name,
									'operatedByCode':obj.carrier.code,
									'departureTimestamp':obj.depDate,
									'departureDate':obj.depDate,
									'depTime':obj.depTime,
									'arrivalTimestamp':obj.arrDate,
									'arrivalDate':obj.arrDate,
									'arrTime':obj.arrTime,
									'flightDuration':obj.duration,
									'flightNumber':obj.flight.number,
									'originName':obj.oriName,
									'originCode':obj.ori,
									'destinationName':obj.destName,
									'destinationCode':obj.dest,
									'trips':1,
									'classOfService':$location.search().class,
									'destinationTerminal':obj.flight.destTerminal,
									'originTerminal':obj.flight.oriTerminal};
							quoteconnectobject.push(returnsflightjson);

						}    
					});
				}
			}

		});
		var key = fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].flightIndex + fareFlightSegment.flightSegmentsGroups[1].flightSegments[0].flightIndex +  fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].segments[0].flight.number;

		$scope.flightroundquotemap[key] = quotejson;
		$scope.flightroundquotetripmap[key] = quotetripdetailarray;
		$scope.flightroundquoteconnecttripmap[key] = quoteconnectobject;
		$scope.isQuoteloaded = true;
		jQuery.noConflict(); 
		$('#InfoModal').modal('show');
		setTimeout(function(){
			$('#InfoModal').modal('hide');
		}, 3000);

	}

	$scope.showallquotes = function(){
		$scope.quotearray = [];

		for (var key in $scope.flightroundquotemap) {
			if ($scope.flightroundquotemap.hasOwnProperty(key)) {
				var obj = $scope.flightroundquotemap[key];			
				$scope.quotearray.push(obj);
			}
		}
		$("#myModalQuotation").modal(); 
		$scope.$apply();

	}
	$scope.removequote = function(flightnumber){

		delete $scope.flightroundquotemap[flightnumber];
		delete $scope.flightroundquotetripmap[flightnumber];		
		delete $scope.flightroundquoteconnecttripmap[flightnumber];	
		$scope.quotearray = [];
		for (var key in $scope.flightroundquotemap) {
			if ($scope.flightroundquotemap.hasOwnProperty(key)) {				
				var obj = $scope.flightroundquotemap[key];			
				$scope.quotearray.push(obj);
			}
		}

	}

	$scope.addquotesModal = function(){
		$('#myModalQuotation').modal('hide');
		$scope.quotearray = [];
		for (var key in $scope.flightroundquotemap) {
			if ($scope.flightroundquotemap.hasOwnProperty(key)) {				
				var obj = $scope.flightroundquotemap[key];			
				$scope.quotearray.push(obj);
			}
		}
		$scope.quotetriparray = [];
		for (var key in $scope.flightroundquotetripmap) {
			if ($scope.flightroundquotetripmap.hasOwnProperty(key)) {				
				var obj = $scope.flightroundquotetripmap[key];			
				$scope.quotetriparray.push(obj);
			}
		}

		$scope.quoteconnecttriparray = [];
		for (var key in $scope.flightroundquoteconnecttripmap) {
			if ($scope.flightroundquoteconnecttripmap.hasOwnProperty(key)) {				
				var obj = $scope.flightroundquoteconnecttripmap[key];			
				$scope.quoteconnecttriparray.push(obj);
			}
		}


		var quotejson = {'flightTravelRequest':$location.search().flightquotationid,"quotes":$scope.quotearray,"trips":$scope.quotetriparray,'connecttrip':$scope.quoteconnecttriparray};
		var finalUrl = ibeurl+"InsertRoundFlightQuote";
		var url = adminUrl +'getFlightQuotationList?flightQuotationRequestId='+$location.search().flightquotationid;
		$http({method:'POST',url:finalUrl,data:'QuotationJson='+JSON.stringify(quotejson),headers:{'Content-Type' : 'application/x-www-form-urlencoded'}}).		
		success(function(data, status, headers, config){

		}).error(function(data, status, headers, config){ 

		});
		$('#addQuoteConfirmModal').modal('show');
	}


	$scope.addquotes = function(){

		var redirecturl = adminUrl+'getFlightQuotationList?flightQuotationRequestId='+$location.search().flightquotationid;	
		var redirectWindow = window.open(redirecturl, '_blank'); 

		$scope.quotearray = [];
		$scope.flightroundquotemap = {};
		$scope.flightroundquotetripmap = {};
		$scope.flightroundquoteconnecttripmap = {};
		$scope.isQuoteloaded = true;
		$('#addQuoteConfirmModal').modal('hide');
	}

	var orioIndex = decodeURIComponent($location.search().ori).indexOf(',') ;
	var oriocity = decodeURIComponent($location.search().ori).substring(0, orioIndex);
	var orioncity = oriocity.replaceAll('+',' ');
	var DestIndex = decodeURIComponent($location.search().des).indexOf(',') ;
	var Destcity = decodeURIComponent($location.search().des).substring(0, DestIndex);
	var desticity = Destcity.replaceAll('+',' ');
	$scope.ErrorFlightTravelDetails = {};
	$scope.ErrorFlightTravelDetails.origin = orioncity;
	$scope.ErrorFlightTravelDetails.destination = desticity;
	$scope.ErrorFlightTravelDetails.depDate = decodeURIComponent($location.search().depart);
	$scope.ErrorFlightTravelDetails.arvlDate = decodeURIComponent($location.search().arrival);
	$scope.ErrorFlightTravelDetails.cabinClass = decodeURIComponent($location.search().class);
	$scope.ErrorFlightTravelDetails.showData = true;
	localStorageService.set('ErrorSearchData',$scope.ErrorFlightTravelDetails);
	
	
	$scope.errorDisplay = function(errorMsg,Parameters){
		$(document).ready(function(){
			var modalInstance = $modal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'views/FlightErrorPage.jsp',
				controller:'FlightErrorPageCtrl',
				backdrop:'static',
				keyboard:false,
				resolve:{
					items:function(){
						return errorMsg;
					},
					items2:function(){
						return Parameters;
					}
				}});
			modalInstance.result.then(function(selectedItem){
				$route.reload();

			},function(){
				$log.info('modal Dismissed at :'+new Date());
			});

		});
	}
	// Time Duration modal
	$scope.convertminToHour= function(a){

		var hours = Math.trunc(a/60);
		var minutes = a % 60;

		var convertedhour = hours +"h "+ minutes+"m";
		return convertedhour;
	}


	/**	
	 *Description: Sorting Process for the side bar.
	 **/
	$scope.sortdescending  = false;  
	$scope.sortlist  = [];
	$scope.sortorder = function(items,type)
	{	
		$scope.priceasc = "";
		$scope.airlineasc = "";
		$scope.departasc = "";
		$scope.arrivalasc = "";
		$scope.durationasc = "";

		if($scope.sortdescending == false)
		{			
			$scope.sortlist =  items.sort(function(a, b) {
				if(type == 'price'){
					$scope.priceasc = "tayyarah-arrow-down";
					return parseFloat(a.totalPrice) - parseFloat(b.totalPrice);						
				}
				if(type == 'airline'){
					$scope.airlineasc = "tayyarah-arrow-down";
					if ( a.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name < b.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name )
						return -1;
					if ( a.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name > b.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name )
						return 1;
					return 0;
				}					
				if(type == 'depart'){
					$scope.departasc = "tayyarah-arrow-down";
					if ( a.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime < b.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime )
						return -1;
					if ( a.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime > b.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime )
						return 1;
					return 0;
				}
				if(type == 'arrival'){
					$scope.arrivalasc = "tayyarah-arrow-down";
					if(a.flightSegmentsGroups[0].flightSegments[0].segments[a.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime!=undefined){
						if ( a.flightSegmentsGroups[0].flightSegments[0].segments[a.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime < b.flightSegmentsGroups[0].flightSegments[0].segments[b.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime )
							return -1;
						if ( a.flightSegmentsGroups[0].flightSegments[0].segments[a.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime > b.flightSegmentsGroups[0].flightSegments[0].segments[b.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime )
							return 1;
						return 0;
					}

				}
				if(type == 'duration'){
					$scope.durationasc = "tayyarah-arrow-down";
					var atime = 0;
					var btime = 0;
					if(a.flightSegmentsGroups[0].flightSegments[0].segments.length > 2){
						var totaldur = 0;
						var arrtime = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[0].arrival);
						var deptime = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[1].depart);
						var arrtime1 = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[1].arrival);
						var deptime1 = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[2].depart);

						var tseconds = (deptime.getTime() - arrtime.getTime()  )/1000;    
						var contomin = tseconds / 60 ;
						var tseconds1 = (deptime1.getTime() - arrtime1.getTime()  )/1000;    
						var contomin1 = tseconds1 / 60 ;

						angular.forEach(a.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) {			
							totaldur = totaldur + parseInt(obj.duration);         
						});
						totaldur = totaldur + contomin +contomin1;

						var btotaldur = 0;
						if(b.flightSegmentsGroups[0].flightSegments[0].segments.length > 2){
							var barrtime = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[0].arrival);
							var bdeptime = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[1].depart);
							var barrtime1 = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[1].arrival);
							var bdeptime1 = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[2].depart);

							var btseconds = (bdeptime.getTime() - barrtime.getTime()  )/1000;    
							var bcontomin = tseconds / 60 ;
							var btseconds1 = (bdeptime1.getTime() - barrtime1.getTime()  )/1000;    
							var bcontomin1 = tseconds1 / 60 ;

							angular.forEach(b.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) {			
								btotaldur = btotaldur + parseInt(obj.duration);         
							});
							btotaldur = btotaldur + bcontomin + bcontomin1;
						}

						atime = totaldur;
						btime = btotaldur;

					}
					if(a.flightSegmentsGroups[0].flightSegments[0].segments.length == 2 ){
						var arrtime = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[0].arrival);
						var deptime = 0;
						if(a.flightSegmentsGroups[0].flightSegments[0].segments[1].depart!=undefined)
							deptime = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[1].depart);	

						var tseconds = (deptime.getTime() - arrtime.getTime())/1000;    
						var contomin = tseconds / 60 ;
						var totaldur = 0;		
						angular.forEach(a.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) { 			
							totaldur = totaldur + parseInt(obj.duration);         
						});
						totaldur = totaldur + contomin;	


						var btotaldur = 0;
						if(b.flightSegmentsGroups[0].flightSegments[0].segments.length == 2){
							var barrtime = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[0].arrival);
							var bdeptime = 0;
							if(b.flightSegmentsGroups[0].flightSegments[0].segments[1].depart!=undefined)
								bdeptime = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[1].depart);	

							var btseconds = (bdeptime.getTime() - barrtime.getTime())/1000;    
							var bcontomin = btseconds / 60 ;
							var btotaldur = 0;		
							angular.forEach(b.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) { 			
								btotaldur = btotaldur + parseInt(obj.duration);         
							});
							btotaldur = btotaldur + bcontomin;						

						}
						atime = totaldur;
						btime = btotaldur;

					}
					if(a.flightSegmentsGroups[0].flightSegments[0].segments.length == 1){
						atime = a.flightSegmentsGroups[0].flightSegments[0].segments[0].duration;
						btime = b.flightSegmentsGroups[0].flightSegments[0].segments[0].duration;
					}
					return parseInt(atime) - parseInt(btime);					
				}
			});		   

			$scope.sortdescending  = true;  
		}
		else
		{			
			$scope.sortlist =  items.sort(function(a, b) {
				if(type == 'price'){	
					$scope.priceasc = "tayyarah-arrow-up";
					return parseFloat(a.totalPrice) - parseFloat(b.totalPrice);					
				}

				if(type == 'airline'){
					$scope.airlineasc = "tayyarah-arrow-up";
					if ( a.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name < b.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name )
						return -1;
					if ( a.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name > b.flightSegmentsGroups[0].flightSegments[0].segments[0].carrier.name )
						return 1;
					return 0;
				}				
				if(type == 'depart'){
					$scope.departasc = "tayyarah-arrow-up";
					if ( a.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime < b.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime )
						return -1;
					if ( a.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime > b.flightSegmentsGroups[0].flightSegments[0].segments[0].depTime )
						return 1;
					return 0;
				}
				if(type == 'arrival'){
					$scope.arrivalasc = "tayyarah-arrow-up";
					if(a.flightSegmentsGroups[0].flightSegments[0].segments[a.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime!=undefined){
						if ( a.flightSegmentsGroups[0].flightSegments[0].segments[a.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime < b.flightSegmentsGroups[0].flightSegments[0].segments[b.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime )
							return -1;
						if ( a.flightSegmentsGroups[0].flightSegments[0].segments[a.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime > b.flightSegmentsGroups[0].flightSegments[0].segments[b.flightSegmentsGroups[0].flightSegments[0].segments.length - 1].arrTime )
							return 1;
						return 0;
					}
				}
				if(type == 'duration'){
					$scope.durationasc = "tayyarah-arrow-up";

					var atime = 0;
					var btime = 0;
					if(a.flightSegmentsGroups[0].flightSegments[0].segments.length > 2){
						var totaldur = 0;
						var arrtime = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[0].arrival);
						var deptime = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[1].depart);
						var arrtime1 = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[1].arrival);
						var deptime1 = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[2].depart);

						var tseconds = (deptime.getTime() - arrtime.getTime()  )/1000;    
						var contomin = tseconds / 60 ;
						var tseconds1 = (deptime1.getTime() - arrtime1.getTime()  )/1000;    
						var contomin1 = tseconds1 / 60 ;

						angular.forEach(a.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) {			
							totaldur = totaldur + parseInt(obj.duration);         
						});
						totaldur = totaldur + contomin +contomin1;

						var btotaldur = 0;
						if(b.flightSegmentsGroups[0].flightSegments[0].segments.length > 2){
							var barrtime = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[0].arrival);
							var bdeptime = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[1].depart);
							var barrtime1 = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[1].arrival);
							var bdeptime1 = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[2].depart);

							var btseconds = (deptime.getTime() - arrtime.getTime()  )/1000;    
							var bcontomin = tseconds / 60 ;
							var btseconds1 = (deptime1.getTime() - arrtime1.getTime()  )/1000;    
							var bcontomin1 = tseconds1 / 60 ;

							angular.forEach(b.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) {			
								btotaldur = btotaldur + parseInt(obj.duration);         
							});
							btotaldur = btotaldur + bcontomin + bcontomin1;
						}

						atime = totaldur;
						btime = btotaldur;

					}
					if(a.flightSegmentsGroups[0].flightSegments[0].segments.length == 2 ){
						var arrtime = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[0].arrival);
						var deptime = 0;
						if(a.flightSegmentsGroups[0].flightSegments[0].segments[1].depart!=undefined)
							deptime = new Date(a.flightSegmentsGroups[0].flightSegments[0].segments[1].depart);	

						var tseconds = (deptime.getTime() - arrtime.getTime())/1000;    
						var contomin = tseconds / 60 ;
						var totaldur = 0;		
						angular.forEach(a.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) { 			
							totaldur = totaldur + parseInt(obj.duration);         
						});
						totaldur = totaldur + contomin;	


						var btotaldur = 0;
						if(b.flightSegmentsGroups[0].flightSegments[0].segments.length == 2){
							var barrtime = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[0].arrival);
							var bdeptime = 0;
							if(b.flightSegmentsGroups[0].flightSegments[0].segments[1].depart!=undefined)
								bdeptime = new Date(b.flightSegmentsGroups[0].flightSegments[0].segments[1].depart);	

							var btseconds = (bdeptime.getTime() - barrtime.getTime())/1000;    
							var bcontomin = btseconds / 60 ;
							var btotaldur = 0;		
							angular.forEach(b.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) { 			
								btotaldur = btotaldur + parseInt(obj.duration);         
							});
							btotaldur = btotaldur + bcontomin;						

						}
						atime = totaldur;
						btime = btotaldur;

					}
					if(a.flightSegmentsGroups[0].flightSegments[0].segments.length == 1){
						atime = a.flightSegmentsGroups[0].flightSegments[0].segments.duration;
						btime = b.flightSegmentsGroups[0].flightSegments[0].segments.duration;
					}
					return parseInt(atime) - parseInt(btime);
				}
			});	
			$scope.sortlist.reverse()
			$scope.sortdescending  = false;  
		}
		return $scope.sortlist;
	}

	$scope.init();

}]);


app.filter('tayyarahtimeformat', function() {
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
	return function(value, unit, format, isPadded) {
		var totaldur = 0;
		angular.forEach(value, function(obj,index) {
			totaldur = totaldur + parseInt(obj.duration);         
		});
		var totalSeconds = conversions[unit || 'ss'](totaldur * 60),
		hh = Math.floor(totalSeconds / 3600),
		mm = Math.floor((totalSeconds % 3600) / 60),
		ss = totalSeconds % 60;

		var format = 'hhh mmm';
		isPadded = angular.isDefined(isPadded)? isPadded: true;
		hh = isPadded? padding(hh, 2): hh;
		mm = isPadded? padding(mm, 2): mm;
		ss = isPadded? padding(ss, 2): ss;
		return format.replace(/hh/, hh).replace(/mm/, mm);
	};
});

app.filter('time', function() {

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

	return function(value, unit, format, isPadded) {
		var totalSeconds = conversions[unit || 'ss'](value),
		hh = Math.floor(totalSeconds / 3600),
		mm = Math.floor((totalSeconds % 3600) / 60),
		ss = totalSeconds % 60;

		format = format || 'hh:mm:ss';
		isPadded = angular.isDefined(isPadded)? isPadded: true;
		hh = isPadded? padding(hh, 2): hh;
		mm = isPadded? padding(mm, 2): mm;
		ss = isPadded? padding(ss, 2): ss;

		return format.replace(/hh/, hh).replace(/mm/, mm).replace(/ss/, ss);
	};

	$scope.hideMe = function(){
		$scope.hide();
		$scope.show();
	}

});


