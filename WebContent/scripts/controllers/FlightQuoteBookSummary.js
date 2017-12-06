var app = angular.module('myApp');
app.controller('FlightQuoteBookSummaryCtrl',['$scope','commonService', '$window','$http','$document','$compile','$rootScope','flightServices','localStorageService','transporter','$location','$modal','$log',function($scope,commonService,$window,$http,$document,$compile,$rootScope,flightServices,localStorageService,transporter,$location,$modal,$log){
	function pad(n){return n<10 ? '0'+n : n}
	String.prototype.replaceAll = function(s,r){return this.split(s).join(r)};
	function escapeRegExp(string) {		return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");	};
	function replaceAll(string, find, replace) {return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);};
	$scope.AdminUrl = commonService.AdminbaseUrl;
	$scope.init = function(){
		
		var agentbal = 0;
		$scope.flightBookDetails = {};
		$scope.resultset = false;
		$scope.Adultprice = 0.0;
		$scope.Adultbaseprice = 0.0;		$scope.Adulttaxes = 0.0;
		$scope.Infantprice = 0.0;			$scope.Infantbaseprice = 0.0;			$scope.Infanttaxes = 0.0;
		$scope.Childprice = 0.0;			$scope.Childbaseprice = 0.0;			$scope.Childtaxes = 0.0;				
		$scope.Adulttotalprice =  0.0; 		$scope.Infanttotalprice =  0.0 ;		$scope.Childtotalprice =  0.0;	   			 
		$scope.Adulttotalbaseprice = 0.0;	$scope.Infanttotalbaseprice = 0.0; 		$scope.Childtotalbaseprice = 0.0;	   			 
		$scope.Adulttotaltaxes =  0.0;		$scope.Infanttotaltaxes = 0.0;			$scope.Childtotaltaxes =  0.0; 	
		$scope.AdultspecialFareprice = 0.0;	$scope.AdultspecialFarebaseprice =0.0;	$scope.AdultspecialFaretaxes =  0.0;					
		$scope.InfantspecialFareprice = 0.0;$scope.InfantspecialFarebaseprice = 0.0;$scope.InfantspecialFaretaxes =  0.0;
		$scope.ChildspecialFareprice = 0.0;	$scope.ChildspecialFarebaseprice = 0.0;	$scope.ChildspecialFaretaxes =  0.0;
		$scope.flightQuotebook = {};
		$scope.flightQuoteSearch = {};
		$scope.contentloaded = false;	
		$scope.errordiv = false;
		$scope.walletBalance = "none";
		$scope.MainContentDisplay = true;
		$scope.bookingPreviewData = {};

	};
	  $scope.ErrorFlightTravelDetails = {};
	  $scope.ErrorFlightTravelDetails.origin = "";
	  $scope.ErrorFlightTravelDetails.destination = "";
	  $scope.ErrorFlightTravelDetails.depDate = "";
	  $scope.ErrorFlightTravelDetails.arvlDate = "";
	  $scope.ErrorFlightTravelDetails.cabinClass = "";
	  $scope.ErrorFlightTravelDetails.showData = false;
	
	$scope.quotationid =  $location.search().flightquotationid;
	$scope.isquotation = "true";
	$scope.QuoteSearchData = {};
	$scope.QuoteSearchData.isSpecialSearch = $location.search().isSpecialsearch;
	$scope.QuoteSearchData.adult = $location.search().adult;
	$scope.QuoteSearchData.airline = $location.search().airline;
	$scope.QuoteSearchData.app_key = decodeURIComponent($location.search().ay);
	var parts = decodeURIComponent($location.search().arvlDate).split("-");
	var dd = new Date(parts[2], parts[1] - 1, parts[0]);
	var startDate = dd.getFullYear() + pad((dd.getMonth() + 1)) + pad(dd.getDate()) ;
	var parts1 = decodeURIComponent($location.search().depDate).split("-");
	var dd1 = new Date(parts1[2], parts1[1] - 1, parts1[0]);
	var EndDate = dd1.getFullYear()+ pad((dd1.getMonth() + 1)) + pad(dd1.getDate()) ;

	if($location.search().arvlDate == '' || $location.search().arvlDate == null){
		$scope.QuoteSearchData.arvlDate = '';
	}else{
		$scope.QuoteSearchData.arvlDate = startDate;
	}
	
	$scope.firstname = $location.search().fN;
	$scope.lastname = $location.search().lN;
	$scope.QuoteSearchData.flightquoteid = $location.search().flightquotationid;
	$scope.QuoteSearchData.depDate = EndDate;
	$scope.QuoteSearchData.cabinClass = $location.search().cabinClass;
	$scope.QuoteSearchData.currency = $location.search().ccy;
	$scope.QuoteSearchData.destination = $location.search().destination;
	$scope.QuoteSearchData.infant = $location.search().infant;
	$scope.QuoteSearchData.isDomestic = $location.search().isDomestic;
	$scope.QuoteSearchData.isDynamicMarkup = $location.search().isDymark;  
	$scope.QuoteSearchData.kid = $location.search().kid;
	$scope.QuoteSearchData.markupAmount =$location.search().marAt;
	$scope.QuoteSearchData.searchkey = "";
	var Ostart =$location.search().ori.lastIndexOf('(') +1;
	var Oend = $location.search().ori.lastIndexOf(')');
	var Dstart = $location.search().des.lastIndexOf('(') +1;
	var Dend = $location.search().des.lastIndexOf(')');
	var orifirstindex =$location.search().ori.indexOf(',') + 1;
	var orilastindex = $location.search().ori.lastIndexOf(',');		    	
	var desfirstindex = $location.search().des.indexOf(',') + 1;
	var deslastindex = $location.search().des.lastIndexOf(',');
	var originCountry = $location.search().ori.substring(orifirstindex, orilastindex);
	var destinationCountry = $location.search().des.substring(desfirstindex, deslastindex);
	$scope.QuoteSearchData.origin = $location.search().ori.substring(Ostart, Oend);
	$scope.QuoteSearchData.destination = $location.search().des.substring(Dstart, Dend);

	$scope.QuoteSearchData.searchkey = "";
	$scope.QuoteSearchData.trips = $location.search().trips;
	$scope.QuoteSearchData.triptype = $location.search().triptype;
	$scope.QuoteSearchData.selectedAirline = $location.search().selectedAirline;
	$scope.QuoteSearchData.selectedFlightNumber = $location.search().selectedFlightNumber;
	$scope.QuoteSearchData.selectedFlightDepartTime = $location.search().selectedFlightDepartTime;		
	$scope.QuoteSearchData.selectedFlightArrivalTime = $location.search().selectedFlightArrivalTime;
	
	$scope.QuoteSearchData.returnSelectedAirline = $location.search().returnselectedAirline;
	$scope.QuoteSearchData.returnSelectedFlightNumber = $location.search().returnselectedFlightNumber;
	$scope.QuoteSearchData.returnSelectedFlightDepartTime = $location.search().returnselectedFlightDepartTime;		
	$scope.QuoteSearchData.returnSelectedFlightArrivalTime = $location.search().returnselectedFlightArrivalTime;
	$scope.sindex="undefined";
	if($scope.QuoteSearchData.triptype =='R'){
		var sindextrip=$scope.QuoteSearchData.triptype;
	}
	$scope.sindex=sindextrip;
	$scope.spclindex="undefined";
	if($scope.QuoteSearchData.isSpecialSearch == 'true'){
		var spclindextrip=$scope.QuoteSearchData.isSpecialSearch;
	}
	$scope.spclindex=spclindextrip;
	
	if(originCountry == 'India' && destinationCountry == 'India')
		$scope.QuoteSearchData.isDomestic = true; 
	else
		$scope.QuoteSearchData.isDomestic = false;	
	$scope.adultarray = []; 
	$scope.childarray = []; 
	$scope.infantarray = []; 

	for (var i = 0; i < $scope.QuoteSearchData.adult; i++) { 
		$scope.adultarray.push(i);		
	} 
	for (var i = 0; i < $scope.QuoteSearchData.child; i++) { 
		$scope.childarray.push(i);
	} 
	for (var i = 0; i < $scope.QuoteSearchData.infant; i++) { 
		$scope.infantarray.push(i);
	}    


	//var param = $window.vars;
	$scope.bookloader = false ;
	$scope.errormeg = "";

	var apiUrl = commonService.baseUrl;
	$scope.faredivdisplay = "none";
	$scope.currencyname = $scope.QuoteSearchData.currency;
	$scope.classname = "tayyarah-"+$scope.currencyname;
	$scope.currencyvalue="";
	$http({method:'get',url: apiUrl+'currency/convert/'+$scope.currencyname+'/INR',headers:{'Content-Type': 'application/json'}}).success(function(data){
		$scope.currencyvalue = parseFloat(data.value).toFixed(2);

		$scope.classname = "tayyarah-"+$scope.currencyname;		 
	}).error(function(data, status, headers, config){
		//console.log(data);
		$scope.currencyname = "INR";
		$scope.classname = "tayyarah-INR";
	});


	$scope.loadpricebar = true;
	$scope.fareloader = true;
	$scope.isfareloaded = "none";
	$scope.farebeforeload = true;
	$scope.faredivdisplay = "none";
	$scope.isallloaded = true;
	
	$scope.adult =  $location.search().adult;
	$scope.child =  $location.search().kid;
	$scope.infant =  $location.search().infant;
	
	flightServices.FlightQuotePriceSearch($scope.QuoteSearchData).then(function(response){

		//$http.get('flightQuote.json').then(function(response){
		$scope.loading = false ;
		$scope.MainContentDisplay = true;
		$scope.data = response.data;
		$scope.bookingPreviewData = response.data;
		$scope.pricekey = decodeURIComponent($scope.data.priceKey);
		$scope.transactionKey = decodeURIComponent($scope.data.transactionKey);
		$scope.appkey = decodeURIComponent($scope.data.flightsearch.app_key);
		$scope.fareflightsegment = $scope.data.fareFlightSegment;
		$scope.adult = $scope.data.flightsearch.adult;
		$scope.child = $scope.data.flightsearch.kid;
		$scope.infant = $scope.data.flightsearch.infant;
		$scope.totalpassenger = parseInt($scope.adult) +  parseInt($scope.child) +  parseInt($scope.infant);
		if($scope.data.flightsearch.isInternational){
			$scope.isInternational = true;
		}	  
		if($scope.data.flightsearch.isInternational== false && $scope.data.flightsearch.domestic ==true ){
			$scope.domestic = true;
		}
		angular.forEach($scope.data.passengerFareBreakUps, function(obj,index) { 

			if(obj.type == "ADT")
			{
				$scope.Adultprice =  obj.totalPrice;
				$scope.Adultbaseprice =  obj.basePrice;
				$scope.Adulttaxes =  obj.taxes;
			}
			if(obj.type == "INF")
			{
				$scope.Infantprice =  obj.totalPrice;
				$scope.Infantbaseprice =  obj.basePrice;
				$scope.Infanttaxes =  obj.taxes;
			}
			if(obj.type == "CNN")
			{
				$scope.Childprice =  obj.totalPrice;
				$scope.Childbaseprice =  obj.basePrice;
				$scope.Childtaxes =  obj.taxes;
			}

		});
		if($scope.data.specialFareFlightSegment != null){
			$scope.specialFareFlightSegment =  $scope.data.specialFareFlightSegment;
			angular.forEach($scope.data.specialPassengerFareBreakUps, function(obj,index) { 
				if(obj.type == "ADT")
				{							
					$scope.AdultspecialFareprice =  parseFloat(obj.totalPrice);
					$scope.AdultspecialFarebaseprice =  parseFloat(obj.basePrice);
					$scope.AdultspecialFaretaxes =  parseFloat(obj.taxes);							
				}
				if(obj.type == "INF")
				{
					$scope.InfantspecialFareprice =  parseFloat(obj.totalPrice);
					$scope.InfantspecialFarebaseprice =  parseFloat(obj.basePrice);
					$scope.InfantspecialFaretaxes =  parseFloat(obj.taxes);
				}
				if(obj.type == "CNN")
				{
					$scope.ChildspecialFareprice =  parseFloat(obj.totalPrice);
					$scope.ChildspecialFarebaseprice =  parseFloat(obj.basePrice);
					$scope.ChildspecialFaretaxes =  parseFloat(obj.taxes);
				}						 
			});


			$scope.Adultprice = parseFloat($scope.Adultprice) + parseFloat($scope.AdultspecialFareprice);
			$scope.Childprice = parseFloat($scope.Childprice) + parseFloat($scope.ChildspecialFareprice);
			$scope.Infantprice = parseFloat($scope.Infantprice) + parseFloat($scope.InfantspecialFareprice) ;

			$scope.Adultbaseprice = parseFloat($scope.Adultbaseprice) + parseFloat($scope.AdultspecialFarebaseprice);

			$scope.Childbaseprice = parseFloat($scope.Childbaseprice) + parseFloat($scope.ChildspecialFarebaseprice);
			$scope.Infantbaseprice = parseFloat($scope.Infantbaseprice) + parseFloat($scope.InfantspecialFarebaseprice);

			$scope.Adulttaxes = parseFloat($scope.Adulttaxes) + parseFloat($scope.AdultspecialFaretaxes);
			$scope.Childtaxes = parseFloat($scope.Childtaxes) + parseFloat($scope.ChildspecialFaretaxes);
			$scope.Infanttaxes = parseFloat($scope.Infanttaxes) + parseFloat($scope.InfantspecialFaretaxes);

			$scope.GSTprice += parseFloat($scope.data.gstonMarkupSpecial);
			$scope.GSTprice = parseFloat($scope.GSTprice).toFixed(2);

		}

		$scope.Adulttotalprice =  (parseFloat($scope.Adultprice) *  parseFloat($scope.adult)).toFixed(2);
		$scope.Infanttotalprice =  (parseFloat($scope.Infantprice) *  parseFloat($scope.infant)).toFixed(2);
		$scope.Childtotalprice =  (parseFloat($scope.Childprice) *  parseFloat($scope.child)).toFixed(2);

		$scope.Adulttotalbaseprice =  (parseFloat($scope.Adultbaseprice) *  parseFloat($scope.adult)).toFixed(2);
		$scope.Infanttotalbaseprice =  (parseFloat($scope.Infantbaseprice) *  parseFloat($scope.infant)).toFixed(2);
		$scope.Childtotalbaseprice =  (parseFloat($scope.Childbaseprice) *  parseFloat($scope.child)).toFixed(2);

		$scope.Adulttotaltaxes =  (parseFloat($scope.Adulttaxes) *  parseFloat($scope.adult)).toFixed(2);
		$scope.Infanttotaltaxes = ( parseFloat($scope.Infanttaxes) *  parseFloat($scope.infant)).toFixed(2);
		$scope.Childtotaltaxes =  (parseFloat($scope.Childtaxes) *  parseFloat($scope.child)).toFixed(2);

		$scope.departdate = $scope.data.flightsearch.depDate;
		//for conveyence calculation
		
		if($scope.data.specialFareFlightSegment != null || $scope.data.specialFareFlightSegment != undefined){
			if($scope.data.specialFareFlightSegment.flightServiceTax != null || $scope.data.specialFareFlightSegment.flightServiceTax != undefined){
				$scope.ServiceTaxes = true;
				$scope.baseServicetax = parseFloat(($scope.data.specialFareFlightSegment.flightServiceTax.baseServicetax) + parseFloat($scope.data.fareFlightSegment.flightServiceTax.baseServicetax)).toFixed(2);
				$scope.totalServiceTax = parseFloat(($scope.data.specialFareFlightSegment.flightServiceTax.totalServiceTax) + parseFloat($scope.data.fareFlightSegment.flightServiceTax.totalServiceTax)).toFixed(2);
				$scope.kkc = parseFloat(($scope.data.specialFareFlightSegment.flightServiceTax.kkc) + parseFloat($scope.data.fareFlightSegment.flightServiceTax.kkc)).toFixed(2);
				$scope.managementFee = parseFloat(($scope.data.specialFareFlightSegment.flightServiceTax.managementFee) + parseFloat($scope.data.fareFlightSegment.flightServiceTax.managementFee)).toFixed(2);
				$scope.sbc = parseFloat(($scope.data.specialFareFlightSegment.flightServiceTax.sbc) + parseFloat($scope.data.fareFlightSegment.flightServiceTax.sbc)).toFixed(2);
				$scope.totalflightprice = (parseFloat($scope.Adulttotalprice) + parseFloat($scope.Childtotalprice) + parseFloat($scope.Infanttotalprice)+
											+ parseFloat($scope.totalServiceTax) +	parseFloat($scope.managementFee)).toFixed(2);
			}else{
				$scope.ServiceTaxes = false;
			$scope.totalflightprice = (parseFloat($scope.Adulttotalprice) + parseFloat($scope.Childtotalprice) + parseFloat($scope.Infanttotalprice) ).toFixed(2);
			
			}
			}else if($scope.data.specialFareFlightSegment == null && $scope.data.specialFareFlightSegment == undefined && $scope.data.fareFlightSegment.flightServiceTax != null || $scope.data.fareFlightSegment.flightServiceTax != undefined){
			$scope.ServiceTaxes = true;
			$scope.baseServicetax = parseFloat($scope.data.fareFlightSegment.flightServiceTax.baseServicetax).toFixed(2);
			$scope.totalServiceTax = parseFloat($scope.data.fareFlightSegment.flightServiceTax.totalServiceTax).toFixed(2);
			$scope.kkc = parseFloat($scope.data.fareFlightSegment.flightServiceTax.kkc).toFixed(2);
			$scope.managementFee = parseFloat($scope.data.fareFlightSegment.flightServiceTax.managementFee).toFixed(2);
			$scope.sbc = parseFloat($scope.data.fareFlightSegment.flightServiceTax.sbc).toFixed(2);
			$scope.totalflightprice = (parseFloat($scope.Adulttotalprice) + parseFloat($scope.Childtotalprice) + parseFloat($scope.Infanttotalprice)+
										+ parseFloat($scope.totalServiceTax) +	parseFloat($scope.managementFee)).toFixed(2);
		}
		else{
			$scope.ServiceTaxes = false;
			$scope.totalflightprice = (parseFloat($scope.Adulttotalprice) + parseFloat($scope.Childtotalprice) + parseFloat($scope.Infanttotalprice) ).toFixed(2);
		}
	
		if($scope.data.specialFareFlightSegment.flightServiceTax != null || $scope.data.specialFareFlightSegment.flightServiceTax != undefined){
			
			$scope.baseServicetax += parseFloat($scope.data.specialFareFlightSegment.flightServiceTax.baseServicetax).toFixed(2);
			$scope.totalServiceTax += parseFloat($scope.data.specialFareFlightSegment.flightServiceTax.totalServiceTax).toFixed(2);
			$scope.kkc += parseFloat($scope.data.specialFareFlightSegment.flightServiceTax.kkc).toFixed(2);
			$scope.managementFee += parseFloat($scope.data.specialFareFlightSegment.flightServiceTax.managementFee).toFixed(2);
			$scope.sbc += parseFloat($scope.data.specialFareFlightSegment.flightServiceTax.sbc).toFixed(2);
			$scope.totalflightprice = (parseFloat($scope.Adulttotalprice) + parseFloat($scope.Childtotalprice) + parseFloat($scope.Infanttotalprice)+
					+ parseFloat($scope.totalServiceTax) +	parseFloat($scope.managementFee)).toFixed(2);
		}else{
			  $scope.ErrorFlightTravelDetails = {};
			  $scope.ErrorFlightTravelDetails.origin = "";
			  $scope.ErrorFlightTravelDetails.destination = "";
			  $scope.ErrorFlightTravelDetails.depDate = "";
			  $scope.ErrorFlightTravelDetails.arvlDate = "";
			  $scope.ErrorFlightTravelDetails.cabinClass = "";
			  $scope.ErrorFlightTravelDetails.showData = false;
			$scope.errordiv = true;
			$scope.errormeg = "Sorry we could not process your request as server is busy. please try after some time.";
			$scope.errorDisplay($scope.errormeg,$scope.ErrorFlightTravelDetails);
		 }
		var isagentlogged =  angular.element(document.getElementById('isagent'));			
		var paymentgatewayprice ;
		$scope.totalticketprice = $scope.totalflightprice; 
		$scope.totalpricewithoutothercharges = $scope.totalflightprice;			
		if(isagentlogged.val() == 'cash'){
			var addpercent = ($scope.totalflightprice/parseFloat(100).toFixed(2)) * parseFloat(2.0).toFixed(2);			
			var addedpercent = addpercent.toFixed(2);
			paymentgatewayprice = (parseFloat($scope.totalflightprice) + parseFloat(addedpercent)).toFixed(2);
		}else{
			var addpercent = ($scope.totalflightprice/parseFloat(100).toFixed(2)) * parseFloat(2.0).toFixed(2);			
			var addedpercent = addpercent.toFixed(2);
			$scope.otherchargesB2C = addedpercent;
			paymentgatewayprice = (parseFloat($scope.totalflightprice) + parseFloat(addedpercent)).toFixed(2);			
			$scope.totalflightprice = paymentgatewayprice;
			$scope.totalticketprice = paymentgatewayprice;
		}

		if(parseInt($location.search().quoteamount) != parseInt($scope.data.newPrice)){
		if($scope.data.oldPrice != $scope.data.newPrice)
		{
			$scope.faredivdisplay = "block";
			if(isagentlogged.val() == 'cash'){						
				$scope.oldprice = $scope.data.oldPrice;
				$scope.updatedprice = $scope.data.newPrice;
			}
			else{
				$scope.oldprice = parseFloat(parseFloat($scope.data.oldPrice) + parseFloat($scope.otherchargesB2C)).toFixed(2);
				$scope.updatedprice = parseFloat(parseFloat($scope.data.newPrice) + parseFloat($scope.otherchargesB2C)).toFixed(2);
			}
		 }
		}
		if($scope.data.oldPrice > $scope.data.newPrice)
			$scope.pricechagetext = "Hurrey.. The fare for selected flight has decreased to";
		if($scope.data.oldPrice < $scope.data.newPrice)
			$scope.pricechagetext = "oops The fare for selected flight has increased to";
		$scope.meallist = [];
		$scope.seatlist = [];
		$scope.baggagelist = [];
		$scope.IsSSRAvaiable = false;

		if($scope.data.specialServiceRequest!=null && $scope.data.specialServiceRequest!=undefined){
			$scope.IsSSRAvaiable = true;

			$scope.IsLCC = $scope.data.specialServiceRequest.isLCC;
			if($scope.data.specialServiceRequest.isLCC){
				angular.forEach($scope.data.specialServiceRequest.mealDynamic, function(obj,index) {

					if(index == 0){
						angular.forEach(obj, function(mealobj,mealindex) {								
							if(mealobj.Code == "No Meal")
								$scope.meallist.push({"Code":mealobj.Code,"Description":mealobj.Code,"Price":0});
							else
								$scope.meallist.push({"Code":mealobj.Code,"Description":mealobj.AirlineDescription,"Price":mealobj.Price});							
						});
					}
				});
				angular.forEach($scope.data.specialServiceRequest.seatPreference, function(obj,index) { 
					$scope.seatlist.push(obj);
				});
				angular.forEach($scope.data.specialServiceRequest.baggage, function(obj,index) { 
					if(index == 0){
						angular.forEach(obj, function(baggageobj,baggageindex) { 
							$scope.baggagelist.push(baggageobj);
						});
					}
				});
			}
			else{

				$scope.meallist.push({"Code":"No Meal","Description":"None"});
				$scope.seatlist.push({"Code":"None","Description":"None"});
				angular.forEach($scope.data.specialServiceRequest.meal, function(obj,index) { 							  
					$scope.meallist.push(obj);
				});
				angular.forEach($scope.data.specialServiceRequest.seatPreference, function(obj,index) { 
					$scope.seatlist.push(obj);
				});
				angular.forEach($scope.data.specialServiceRequest.baggage, function(obj,index) { 
					$scope.baggagelist.push(obj);
				});
			}

		}

		$scope.MealDivShow = $scope.data.returnspecialServiceRequest;
		for(var i=0;i<$scope.adult;i++){
			if($scope.MealDivShow!= null){
				$('#mealDivClass'+i).addClass('col-md-6'); 

			}else{
				$('#mealDivClass'+i).addClass('col-md-12'); 
			}
		}
		for(var i=0;i<$scope.child;i++){
			if($scope.MealDivShow!= null){
				$('#childmealDivClass'+i).addClass('col-md-6'); 

			}else{

				$('#childmealDivClass'+i).addClass('col-md-12'); 
			}
		}


		$scope.returnmeallist = [];
		$scope.returnseatlist = [];
		$scope.returnbaggagelist = [];
		$scope.returnIsSSRAvaiable = false;
		if($scope.data.returnspecialServiceRequest!=null && $scope.data.returnspecialServiceRequest!=undefined){
			$scope.returnIsSSRAvaiable = true;
			$scope.returnIsLCC = $scope.data.returnspecialServiceRequest.isLCC;
			if($scope.data.returnspecialServiceRequest.isLCC){
				angular.forEach($scope.data.returnspecialServiceRequest.mealDynamic, function(obj,index) {							 
					if(index == 0){
						angular.forEach(obj, function(mealobj,mealindex) {								
							if(mealobj.Code == "No Meal")
								$scope.returnmeallist.push({"Code":mealobj.Code,"Description":mealobj.Code,"Price":0});
							else
								$scope.returnmeallist.push({"Code":mealobj.Code,"Description":mealobj.AirlineDescription,"Price":mealobj.Price});							
						});
					}
				});
				angular.forEach($scope.data.returnspecialServiceRequest.seatPreference, function(obj,index) { 
					$scope.returnseatlist.push(obj);
				});
				angular.forEach($scope.data.returnspecialServiceRequest.baggage, function(obj,index) { 
					if(index == 0){
						angular.forEach(obj, function(baggageobj,baggageindex) { 
							$scope.returnbaggagelist.push(baggageobj);
						});
					}
				});
			}
			else{
				$scope.returnmeallist.push({"Code":"No Meal","Description":"None"});
				$scope.returnseatlist.push({"Code":"None","Description":"None"});
				angular.forEach($scope.data.returnspecialServiceRequest.meal, function(obj,index) { 							  
					$scope.returnmeallist.push(obj);
				});
				angular.forEach($scope.data.returnspecialServiceRequest.seatPreference, function(obj,index) { 
					$scope.returnseatlist.push(obj);
				});
				angular.forEach($scope.data.returnspecialServiceRequest.baggage, function(obj,index) { 
					$scope.returnbaggagelist.push(obj);
				});
			}

		}
		$scope.loadpricebar = false;
		$scope.farebeforeload = false;
		$scope.isfareloaded = "block";
		$scope.contentloaded = true;
		$scope.bookloader = false ;
		
		if(!$scope.IsSSRAvaiable && $scope.isInternational)
			$scope.isdomestic = 'international';				
		if(!$scope.IsSSRAvaiable && !$scope.isInternational)
			$scope.isdomestic = 'domestic';


	},function(errorStatus){
		  $scope.ErrorFlightTravelDetails = {};
		  $scope.ErrorFlightTravelDetails.origin = "";
		  $scope.ErrorFlightTravelDetails.destination = "";
		  $scope.ErrorFlightTravelDetails.depDate = "";
		  $scope.ErrorFlightTravelDetails.arvlDate = "";
		  $scope.ErrorFlightTravelDetails.cabinClass = "";
		  $scope.ErrorFlightTravelDetails.showData = false;
		$scope.errordiv = true;
		$scope.errormeg = "Sorry we could not process your request as server is busy. please try after some time.";
		$scope.errorDisplay($scope.errormeg,$scope.ErrorFlightTravelDetails);
	});

 $scope.addmealbaggageprice = function(passtype,itemcode,id,price,weight){

		$scope.mealprice = 0;
		$scope.baggageprice = 0;
		$scope.totalkg = 0;

		if(passtype.includes("baggage")){
			mealmap[passtype+id] = {"passtype":passtype,"itemcode":itemcode,"baggageprice":price,"weight":weight};
		}        	
		else{
			mealmap[passtype+id] = {"passtype":passtype,"itemcode":itemcode,"price":price};
			totalmealmap[passtype+id] = {"passtype":passtype,"itemcode":itemcode,"price":price};
		}
		$scope.totalflightprice = $scope.totalpricewithoutothercharges;
		for (var x in mealmap)
		{
			if (mealmap.hasOwnProperty(x)) {			   
				//console.log('Keyss: ' + x + '\n');
			}			
			var value = mealmap[x];
			for (var y in value)
			{
				if(y == 'price'){
					if($scope.mealprice!=undefined)
						$scope.mealprice += parseFloat(value[y]);
					else
						$scope.mealprice = parseFloat(value[y]);				

					$scope.mealprice = parseFloat($scope.mealprice).toFixed(2);
					$scope.totalflightprice = parseFloat(parseFloat($scope.totalflightprice) + parseFloat(value[y])).toFixed(2);
				}
				if(y == 'baggageprice'){
					if($scope.baggageprice!=undefined)
						$scope.baggageprice += parseFloat(value[y]);
					else
						$scope.baggageprice = parseFloat(value[y]);	

					$scope.baggageprice = parseFloat($scope.baggageprice).toFixed(2);
					$scope.totalflightprice = parseFloat(parseFloat($scope.totalflightprice)+parseFloat(value[y])).toFixed(2);
				}
				if(y == 'weight'){
					if($scope.totalkg!=undefined)
						$scope.totalkg += parseInt(value[y]);
					else
						$scope.totalkg = parseInt(value[y]);
				}
			}		
		}
		if(price != "0"){			
			$scope.totalplate = Object.keys(totalmealmap).length;			
		}
		if(price == "0"){
			delete mealmap[passtype+id];	
			delete totalmealmap[passtype+id];
			$scope.totalplate = Object.keys(totalmealmap).length;			
		}
		var isagentlogged =  angular.element(document.getElementById('isagent'));		
		if(isagentlogged.val() != 'cash'){
			var addpercent = ($scope.totalflightprice/parseFloat(100).toFixed(2)) * parseFloat(2.0).toFixed(2);			
			var addedpercent = addpercent.toFixed(2);
			$scope.otherchargesB2C = addedpercent;
			$scope.totalflightprice = (parseFloat($scope.totalflightprice) + parseFloat(addedpercent)).toFixed(2);
		}
	}
	$scope.getbasecurrencyvalue = function(currentamt,exchangerate)
	{		
		var covertamt = parseFloat(currentamt) * parseFloat(exchangerate);	
		return parseFloat(covertamt).toFixed(2);
	}

	$scope.getconvertedcurrency = function(currentamt)
	{		
		var covertamt = parseFloat(currentamt) * parseFloat($scope.currencyvalue);	
		var nStr = parseFloat(covertamt).toFixed(2).toString();
		nStr += '';
		var x = nStr.split('.');
		var x1 = x[0];
		var x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		if(x2.length != 0)
		{
			if(x2.length < 3)
			{
				if(x2.length == 1)
					x2+="00";
				else	
					x2+="0";
			}
		}
		else
		{
			x2+=".00";
		}

		$scope.coverttotalprice = x1 + x2;
		return parseFloat(covertamt).toFixed(2);
	}

	$scope.convertrateintoint = function(rate)
	{
		var ratevalue = parseInt(rate, 10);
		return  ratevalue;
	}

	$scope.getconverteddisplayablecurrency = function(currentamt)
	{		
		var covertamt = parseFloat(currentamt) * parseFloat($scope.currencyvalue);	
		var nStr = parseFloat(covertamt).toFixed(2).toString();
		nStr += '';
		var x = nStr.split('.');
		var x1 = x[0];
		var x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}

		if(x2.length != 0)
		{
			if(x2.length < 3)
			{
				if(x2.length == 1)
					x2+="00";
				else	
					x2+="0";
			}
		}
		else
		{
			x2+=".00";
		}
		$scope.coverttotalprice = x1 + x2;

		return ;
	}
	$scope.showdetails = function(obj){	   

		angular.forEach(obj.flightSegmentsGroups, function(Groupsobj,index) { 
			angular.forEach(Groupsobj.flightSegments, function(Segmentobj,index) { 
				$scope.selectedsegments = Segmentobj.segments;
				$scope.totalprice = obj.totalPrice;           
			});
		});


	};
	$scope.showdetailstwo = function(obj){
		angular.forEach(obj.flightSegments, function(Segmentobj,index) { 
			$scope.selectedsegments = Segmentobj.segments;
			$scope.totalprice = $scope.fareflightsegment.totalPrice;
			angular.forEach($scope.selectedsegments, function(obj,index) { 
				$scope.selecteddestname = obj.destName;
				$scope.selecteddestcode = obj.dest;
			});
		});
	};

	$scope.datecompare11 = function(obj1,obj2){

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

	/* Get Datatime to Time */
	$scope.getDateObject = function(dt){
		var date = new Date(dt);
		var hours = date.getHours();
		if(hours < 10) hours = '0' + hours;
		var min = date.getMinutes();
		if(min < 10) min = '0' + min;
		return hours + ':' + min;

	}

	$scope.flightPassengerData = function(){	 
		$scope.flightBookDetails.quotationid = $scope.quotationid;
		$scope.flightBookDetails.isQuotation = $scope.isquotation;
		$scope.flightBookDetails.address = angular.element('#address').val();
		$scope.flightBookDetails.address2 = angular.element('#address2').val();
		$scope.flightBookDetails.city = angular.element('#city').val();
		$scope.flightBookDetails.state = angular.element('#state').val();
		$scope.flightBookDetails.country = angular.element('#country').val();
		$scope.flightBookDetails.phone = angular.element('#phone').val();
		$scope.flightBookDetails.zip = angular.element('#zip').val();
		$scope.flightBookDetails.app_key = angular.element('#ay').val();
		$scope.flightBookDetails.userid = angular.element('#userid').val();
		$scope.flightBookDetails.username = angular.element('#uname').val();
		$scope.flightBookDetails.paymode = angular.element('#isagent').val();
		var emflag=angular.element('#emFlag').val();
		if(emflag == 'true'){
			$scope.flightBookDetails.emulateByCompanyId = angular.element('#emCompany').val();
			$scope.flightBookDetails.emulateByUserId = angular.element('#emUname').val();
		}
		else{
			$scope.flightBookDetails.emulateByCompanyId = '';
			$scope.flightBookDetails.emulateByUserId = '';
		}
		$scope.flightBookDetails.isEmulateFlag = emflag;
		$scope.flightBookDetails.price_key = angular.element('#pricekey').val();
		$scope.flightBookDetails.currencyname = angular.element('#currencyname').val();
		$scope.flightBookDetails.transactionkey = angular.element('#transactionKey').val();
		$scope.flightBookDetails.mobile = angular.element('#mobile').val();
		$scope.flightBookDetails.email = angular.element('#email').val();
		$scope.flightBookDetails.adult = angular.element('#adult').val();
		$scope.flightBookDetails.child = angular.element('#child').val();
		$scope.flightBookDetails.infant = angular.element('#infant').val();
		$scope.flightBookDetails.countryCode ="IN";
		$scope.flightBookDetails.countryId = "IN";

		var adultTitle = []; var adultFname = [];  var adultSname = [] ; var adultMeal = []; var adultSeat = [];var adultMname = [];
		var childTitle = []; var childFname = [];  var childSname = []; var childDate = [];
		var infantTitle = []; var infantFname = [];  var infantSname = []; var infantDate = [];
		var admeal = '';
		var passengers = []; 	
		
		for (var i = 0; i < $scope.QuoteSearchData.adult; i++) {
			adultTitle = document.getElementById('mrMss'+i).value;
			adultFname = document.getElementById('AdFirstName-'+i).value;
			adultSname = document.getElementById('Surname-'+i).value;
			adultMname = document.getElementById('MiddleName-'+i).value;			
			if($scope.meallist.length == 0){
				adultMeal = null;
			}else{
				adultMeal = document.getElementById('adultMeal-'+i).value;
			}
		
			if($scope.seatlist.length == 0){
				adultSeat = "";			
			}else{
				adultSeat = document.getElementById('adultSeat-'+i).value;			
			}
			var startDate = angular.element('#adb').val();
			var birthday = startDate.split("/").reverse().join("-");


			var passportExpiry = angular.element('#adpEx').val();
			var passportExpiryDate = passportExpiry.split("/").reverse().join("-");
			var baggage;
			if($scope.baggagelist.length == 0){
				baggage = angular.element('#adbaggagecode').val();
			}else{
				baggage = document.getElementById('baggitem-'+i).value;
			}
			var passportNumb; var returnbaggage; var returnmealcode; var returnseatcode;		
			if($scope.data.flightsearch.isInternational == true){
				passportNumb = document.getElementById('passport-'+i).value;
			}else{
				passportNumb = "";
			}

			if($scope.data.returnspecialServiceRequest!=null){
				if($scope.returnbaggagelist.length > 0)
			      	returnbaggage =  document.getElementById('baggitem'+i).value;
				if($scope.returnmeallist.length > 0)
				    returnmealcode =  document.getElementById('returnmealitem'+i).value;
				if($scope.returnseatlist.length > 0)
				   returnseatcode = document.getElementById('returnseat'+i).value;

			}else{
				returnbaggage =  angular.element('#adreturnbaggagecode').val();
				returnmealcode =  angular.element('#adreturnmealcode').val();
				returnseatcode =  angular.element('#adreturnseatcode').val();

			}
			var adultDetails = {"baggagecode":baggage,"passengerId":"adult"+i,"title":adultTitle,"firstName":adultFname,"middleName":adultMname,
					"lastName":adultSname,"mealcode":adultMeal,"seatcode":adultSeat,"birthday":birthday,"passengerTypeCode":"ADT",
					"passportExpiryDate":passportExpiryDate,"returnbaggagecode":returnbaggage,"returnmealcode":returnmealcode,
					"returnseatcode":returnseatcode,"passportNo":passportNumb};
			passengers.push(adultDetails);
			
		}

		for (var i = 0; i < $scope.QuoteSearchData.child; i++) { 
			childTitle = document.getElementById('childTitle-'+i).value;
			childFname = document.getElementById('childFname-'+i).value;
			childMname = document.getElementById('childMname-'+i).value;
			childSname = document.getElementById('childSurname-'+i).value;
			childDate = document.getElementById('childdate'+i).value;
			var childbirthday = childDate.split("/").reverse().join("-");
			
			var childmeal = document.getElementById('mealitem'+i).value;
			var childMealDetails;
			if(childmeal == undefined){
				childMealDetails = "null";
			}else{
				childMealDetails = document.getElementById('mealitem'+i).value;
			}

			childSeat = document.getElementById('childSeatCode'+i).value;
			var passportExpiry = angular.element('#adpEx').val();
			var childpassportExpiryDate = passportExpiry.split("/").reverse().join("-");
			var childbaggage;
			childbaggage = angular.element('#bagCode').val();
			if(childbaggage == undefined){
				childbaggage = angular.element('#adbaggagecode').val();
			}
			var childpassportNumb; var childreturnbaggage; var childreturnmealcode; var childreturnseatcode;
			if($scope.data.flightsearch.isInternational == true){
				childpassportNumb = document.getElementById('childPassportNo'+i).value;
			}else{
				childpassportNumb = "";
			}
			if($scope.data.returnspecialServiceRequest!=null){
				childreturnbaggage =  document.getElementById('childReturnbaggitem'+i).value;
				childreturnmealcode =  document.getElementById('returnmealitem'+i).value;
				childreturnseatcode = document.getElementById('childreturnseatcode'+i).value;

			}else{
				childreturnbaggage =  angular.element('#adreturnbaggagecode').val();
				childreturnmealcode =  angular.element('#adreturnmealcode').val();
				childreturnseatcode =  angular.element('#adreturnseatcode').val();
			}

			var childDetails = {"baggagecode":baggage,"passengerId":"child"+i,"title":childTitle,"firstName":childFname,"middleName":childMname,
					"lastName":childSname,"mealcode":childMealDetails,"seatcode":childSeat,"birthday":childbirthday,"passengerTypeCode":"CHD",
					"passportExpiryDate":childpassportExpiryDate,"returnbaggagecode":childreturnbaggage,"returnmealcode":childreturnmealcode,
					"returnseatcode":childreturnseatcode,"passportNo":childpassportNumb};
			passengers.push(childDetails);
		} 
		for (var i = 0; i < $scope.QuoteSearchData.infant; i++) { 
			infantTitle = document.getElementById('infantTitle-'+i).value;
			infantFname = document.getElementById('infantFname-'+i).value;
			infantMname = document.getElementById('infantMname-'+i).value;
			infantSname = document.getElementById('infantSname-'+i).value;
			infantDate = document.getElementById('infantdate'+i).value;
			var infbirthday = infantDate.split("/").reverse().join("-");
			var infpassportExpiry = angular.element('#inppEx').val();
			var infantpassportExpiryDate = infpassportExpiry.split("/").reverse().join("-");
			var infntpassportNumb;
			if($scope.data.flightsearch.isInternational == true){
				infntpassportNumb = document.getElementById('inppNo'+i).value;
			}else{
				infntpassportNumb = "";
			}		
			var infantDetails = {"baggagecode":baggage,"passengerId":"infant"+i,"title":infantTitle,"firstName":infantFname,"middleName":infantMname,
					"lastName":infantSname,"birthday":infbirthday,"passengerTypeCode":"INF",
					"passportExpiryDate":infantpassportExpiryDate,"passportNo":infntpassportNumb};
			passengers.push(infantDetails);
		} 

		$scope.flightBookDetails.passengerdetailsList = passengers;
		return $scope.flightBookDetails;
	}

	var data;
	$scope.agentFlightBook = function(){
		$scope.agentBook();
	};

	$scope.agentHoldBooking = function(){ 
		var agentholddata = $scope.flightPassengerData();
		$location.path('/FlightHolding');
		localStorageService.set('Agentholddata',agentholddata);
	};
	$scope.agentHoldBookingRoundTrip = function(){
		var agentRholddata = $scope.flightPassengerData();
		$location.path('/FlightHolding');
		localStorageService.set('Agentholddata',agentRholddata);
	};
	$scope.CorporateFlightAgentBook = function(){
		var totalPrice = angular.element('#totpr').val();
		var agentbook = $scope.flightPassengerData();
		transporter.getwallet().then(function(response){
			$scope.agentDepositBalance = Math.round(response.data.jsonResult.walletdepbal).toFixed(2);
			$scope.agentbalance = Math.round(response.data.jsonResult.walletbal).toFixed(2);
			if(parseFloat($scope.agentDepositBalance) >= parseFloat(totalPrice)){
				$location.path('/Flights-AgentBooking');
				localStorageService.set('AgentConfirmData',agentbook);
			}else if(parseFloat($scope.agentbalance) >= parseFloat(totalPrice)){
				$location.path('/Flights-AgentBooking');
				localStorageService.set('AgentConfirmData',agentbook);
			}else if(parseFloat($scope.agentbalance) == 0){
				$scope.insufficientFundopen();
				$scope.bookconfirmloader = false;
			}
			else{			 
				$scope.insufficientFundopen();
				$scope.bookconfirmloader = false;
			}

		});
	
	};
	
    $scope.insufficientFundopen = function(){
    	$(document).ready(function() {var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/InsufficientFund.jsp',
            controller: 'InsufficientFundCtrl',
            backdrop: 'static',
            keyboard: false,
            resolve: {
              items: function () {
                return $scope.items;
              }
            }
          });

          modalInstance.result.then(function (selectedItem) {
        	 
          }, function () {
            $log.info('Modal dismissed at: ' + new Date());
          });
          });
    }
	
	$scope.agentBook = function(){ 
		$scope.items1 = $scope.bookingPreviewData;    	
	$scope.items2 = $scope.flightPassengerData();
	 $scope.items3 =  $scope.sindex;
     $scope.items4 =  $scope.spclindex;
     var modalInstance = $modal.open({
           animation: $scope.animationsEnabled,
           templateUrl: 'views/BookingPreview.jsp',
           controller: 'BookingPreviewCtrl',
           backdrop: 'static',
           keyboard: false,
           resolve: {
             items1: function () {
               return $scope.items1;
             },
           items2: function () {
           return $scope.items2;
           },
           items3: function(){
             return $scope.items3;
           },
         items4: function(){
           return $scope.items4;
         }
           }
         });

	      modalInstance.result.then(function (selectedItem) {
	    	  $scope.CorporateFlightAgentBook();
	    	  
	      }, function () {
	        $log.info('Modal dismissed at: ' + new Date());
	      });};
	
	$scope.getbal = function()
	{
		var totUrl = $location.attr('href');
		var newUrl = totUrl.substr(0, totUrl.lastIndexOf('/#/') + 1);
		var finalUrl = newUrl+"GetwalletBalance";

		$http({method:'get',url:finalUrl,headers:{'Content-Type': 'application/json'}}).success(function(data){
			var myEl = angular.element( document.querySelector( '#agentbal' ) );
			myEl.text(parseFloat(data.jsonResult.walletbal).toFixed(2)) ;			

		}).error(function(data, status, headers, config){ 
			//console.log(data);
		});
	}

	/*Update Quotation If price Changed*/
	$scope.updateQuotation = function(){
		
		var totalBasePrice = parseFloat($scope.Adulttotalbaseprice) + parseFloat($scope.Childtotalbaseprice) + parseFloat($scope.Infanttotalbaseprice); 
		var totalTaxPrice = parseFloat($scope.Adulttotaltaxes) + parseFloat($scope.Childtotaltaxes) + parseFloat($scope.Infanttotaltaxes); 
		
		var updateQuote = {'flightQuotationRequestId':$scope.quotationid,'totalAmount':$scope.updatedprice,'totalBasePrice':totalBasePrice,'totalTaxed':totalTaxPrice};
		//console.log(updateQuote);
		var currentUrl=$(location).attr('href');
		var baseUrl=currentUrl.substr(0,currentUrl.lastIndexOf('#'));
		var finalUrl = baseUrl+"UpdateFlightQuote";
		var url = $scope.AdminUrl+'getFlightQuotationList?flightQuotationRequestId='+$location.search().flightrequestid;
		$http({method:'POST',url:finalUrl,data:'QuotationUpdateJson='+JSON.stringify(updateQuote),headers:{'Content-Type' : 'application/x-www-form-urlencoded'}}).		
		success(function(data, status, headers, config){
			//console.log(data);

			var linkElement = document.createElement('a');
			linkElement.setAttribute('href', url);
			linkElement.setAttribute('target',"_blank");
			var clickEvent = new MouseEvent("click", {
				"view": window,
				"bubbles": true,
				"cancelable": false
			});
			linkElement.dispatchEvent(clickEvent);

		}).error(function(data, status, headers, config){ 
		//	console.log('error ' +data);

			var linkElement = document.createElement('a');
			linkElement.setAttribute('href', url);
			linkElement.setAttribute('target',"_blank");
			var clickEvent = new MouseEvent("click", {
				"view": window,
				"bubbles": true,
				"cancelable": false
			});
			linkElement.dispatchEvent(clickEvent);
		});

		$scope.faredivdisplay = 'none';
	}
	function replaceAll1(string, find, replace) {
		return string.replace(new RegExp(escapeRegExp(find), 'g'), replace);
	}
	
//Agent Pay by Card
	var data;
	$scope.UserFlightBook = function(){
		
		var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'views/CustomNotification.jsp',
        controller: 'CustomNotificationCtrl',
        backdrop: 'static',
        keyboard: false,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
      	  $scope.CorporateFlightCardBook();
    	  
      }, function () {
        // $log.info('Modal dismissed at: ' + new Date());
      });
	};
	$scope.CorporateFlightCardBook = function(){

		var userbook = $scope.flightPassengerData();
		flightServices.Flightbook(userbook).then(function(response){
			data = response.data;
			$scope.fareflightsegment = data.fareFlightSegment;
			$scope.origin = data.fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].segments[0].oriName;
			$scope.origincode = data.fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].segments[0].ori;
			$scope.destcode = data.flightsearch.destination;
			$scope.dest = "";
			angular.forEach(data.fareFlightSegment.flightSegmentsGroups[0].flightSegments[0].segments, function(obj,index) { 
				if($scope.destcode == obj.dest)
				{
					$scope.dest = obj.destName;
				}				 
			});


			$scope.gstamount = 0.0;
			$scope.gstamount = (parseFloat(data.gstonMarkup) +  parseFloat(data.gstonFlights));

			$scope.adultarray = [];
			$scope.childarray = [];
			$scope.infantarray = [];

			angular.forEach(data.passengerFareBreakUps, function(obj,index) { 						 
				if(obj.type == "ADT")
				{
					$scope.adultarray.push(index);
					$scope.Adultprice =  parseFloat(obj.totalPrice);
					$scope.Adultbaseprice =  parseFloat(obj.basePrice);
					$scope.Adulttaxes =  parseFloat(obj.taxes);
				}
				if(obj.type == "INF")
				{
					$scope.infantarray.push(index);
					$scope.Infantprice =  parseFloat(obj.totalPrice);
					$scope.Infantbaseprice =  parseFloat(obj.basePrice);
					$scope.Infanttaxes =  parseFloat(obj.taxes);
				}
				if(obj.type == "CNN")
				{
					$scope.childarray.push(index);
					$scope.Childprice =  parseFloat(obj.totalPrice);
					$scope.Childbaseprice =  parseFloat(obj.basePrice);
					$scope.Childtaxes =  parseFloat(obj.taxes);
				}						 
			}); 				 

			if(data.fareFlightSegmentSpecial != null){
				$scope.fareFlightSegmentSpecial = data.fareFlightSegmentSpecial;
				var ticdate = new Date(data.lastTicketingDateSpecial);					
				$scope.returnlastticketdate = ("0" + ticdate.getDate()).slice(-2)+"/"+(("0" + (ticdate.getMonth() + 1)).slice(-2))+"/"+ticdate.getFullYear();
				$scope.returnbookingComments = data.bookingCommentsSpecial; 
				$scope.returnpnr = data.pnrSpecial;
				$scope.returnconfirmationNumber = data.confirmationNumberSpecial;
				angular.forEach(data.specialPassengerFareBreakUps, function(obj,index) { 

					if(obj.type == "ADT")
					{
						$scope.Adultprice +=  parseFloat(obj.totalPrice);
						$scope.Adultbaseprice +=  parseFloat(obj.basePrice);
						$scope.Adulttaxes +=  parseFloat(obj.taxes);
					}
					if(obj.type == "INF")
					{						
						$scope.Infantprice +=  parseFloat(obj.totalPrice);
						$scope.Infantbaseprice +=  parseFloat(obj.basePrice);
						$scope.Infanttaxes +=  parseFloat(obj.taxes);
					}
					if(obj.type == "CNN")
					{							
						$scope.Childprice +=  parseFloat(obj.totalPrice);
						$scope.Childbaseprice +=  parseFloat(obj.basePrice);
						$scope.Childtaxes +=  parseFloat(obj.taxes);
					}					 
				});

				$scope.gstamount += parseFloat(data.gstonMarkupSpecial);
				$scope.gstamount = parseFloat($scope.gstamount).toFixed(2);

			}
			
			$scope.totalprice = parseFloat(data.fareFlightSegment.totalPrice).toFixed(2);
			var addpercent = ($scope.totalprice/parseFloat(100).toFixed(2)) * parseFloat(2.0).toFixed(2);			
			var addedpercent = addpercent.toFixed(2);
			$scope.otherchargesB2C = addedpercent;
			$scope.totalflightprice = (parseFloat($scope.totalprice) + parseFloat(addedpercent)).toFixed(2);
			$scope.bookingComments = data.bookingComments;
			$scope.confirmationNumber = data.pgID;			
			$scope.customername = data.flightCustomerDetails.passengerdetailsList[0].firstName+data.flightCustomerDetails.passengerdetailsList[0].lastName;
			$scope.customerno =data.flightCustomerDetails.mobile;
			$scope.customeremail = data.flightCustomerDetails.email;		
			$scope.pnr =data.pnr;
			$("#reference_no").val($scope.confirmationNumber);
			 $("#totalamt").val(Math.ceil($scope.totalflightprice));
			 $("#customername").val($scope.customername);
			 $("#customeremail").val($scope.customeremail);
			 $("#customerno").val($scope.customerno);
			 $("#ship_name").val($scope.customername);
			 $("#ship_phone").val($scope.customerno);
			$scope.classname = "tayyarah-"+data.flightsearch.currency;	        
			$scope.adult =  $scope.adultarray.length;
			$scope.child =  $scope.childarray.length;
			$scope.infant =  $scope.infantarray.length;
			$scope.Adulttotalprice =  $scope.Adultprice; 
			$scope.Infanttotalprice =  $scope.Infantprice ;
			$scope.Childtotalprice =  $scope.Childprice ;
			$scope.Adulttotalbaseprice =  $scope.Adultbaseprice; 
			$scope.Infanttotalbaseprice =  $scope.Infantbaseprice; 
			$scope.Childtotalbaseprice = $scope.Childbaseprice;
			$scope.Adulttotaltaxes =  $scope.Adulttaxes ;
			$scope.Infanttotaltaxes = $scope.Infanttaxes;
			$scope.Childtotaltaxes =  $scope.Childtaxes;	 	
			angular.forEach(data.flightCustomerDetails.passengerdetailsList, function(obj,index) {					
				var serialno = index + 1;
				var gender = '';
				if(obj.title == 'M')
					gender = 'Male';
				else
					gender = 'Female';
				var dd = new Date(obj.birthday);			
				var birthday =   pad(dd.getDate()+ "/" + pad((dd.getMonth() + 1)) + "/"  + dd.getFullYear() ) ;
				var firsname = replaceAll1(decodeURIComponent(obj.firstName),'+',' '); 
				var lastname = replaceAll1(decodeURIComponent(obj.lastName),'+',' ');  

				var passdetail = "";

				if(obj.passengerTypeCode == "INF"){
					passdetail =  "<tr><th scope='row'>"+serialno+"</th><td>"+obj.passengerTypeCode+"</td><td>"+firsname+"</td><td>"+lastname+"</td><td>"+gender+"</td><td>"+birthday+"</td></tr>";		
				}else{
					passdetail =  "<tr><th scope='row'>"+serialno+"</th><td>"+obj.passengerTypeCode+"</td><td>"+firsname+"</td><td>"+lastname+"</td><td>"+gender+"</td></tr>";		
				}


				var myElpassdetails = angular.element( document.querySelector( '#passdetails' ) );					
				myElpassdetails.append(passdetail);

			});		 	
			$scope.usetip = "Use this Payment gateway id " + $scope.confirmationNumber  + " Booking Amount is " +$scope.totalflightprice
			$scope.resultset = true;
			$scope.bookconfirmloader = false;
			$scope.errordiv = false;
			if($scope.resultset)
			{
				var frm = $window.document.getElementById("frmTransaction");
				frm.submit();
			}
		},function(errorStatus){
			$scope.httpvalue = errorStatus.httpStatus;
			if($scope.httpvalue == '500')
				$scope.errormeg = "We could not find any flight matching your requirements, Try Again.";
			else
				$scope.errormeg = "Sorry we could not process your request as server is busy. please try after some time.";
				$scope.errorDisplay($scope.errormeg,$scope.ErrorFlightTravelDetails);
		});
	
	}
	$scope.returnIndex = function(){
		window.location.href = window.location.href.replace(/#.*$/, '');
	}
	
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
	$scope.init();
}]);

/* Convert Mintues to Hours */
app.filter('totaltime', function() {

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

		var totalSeconds = conversions[unit || 'ss'](totaldur),
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
});