'use strict';

/**
 * @ngdoc service

 * @description
 * # transporterService


 */
angular.module('myApp')
.factory('transporter', function ($http, commonService) {
	var dataFactory = {};

	var urlBase =commonService.baseUrl;
     //	wallet Balance Url
	var totUrl = $(location).attr('href');
	var newUrl = totUrl.substr(0, totUrl.lastIndexOf('/#/') + 1);
	
	
	dataFactory.newUrl = newUrl;
	var walletUrl = newUrl+"GetwalletBalance";
    var rmDetailUrl=newUrl+"GetRmDeatils";
    var companyEntity=newUrl+"GetCompanyEntity";
    
    var UserFlightHistory = newUrl+"UserFlightHistory";
    var UserHotelHistory = newUrl+"UserHotelHistory";
    var UserHBusHistory = newUrl+"UserBusHistory";
  //  var rmDetailUrl=newUrl+"GetRmDeatils";
   // var companyEntity=newUrl+"GetCompanyEntity";
    
    
	 var is_mobile = false;
	    if( $('#hideloader').css('display')=='none') {
	        is_mobile = true;       
	    }
	    if (is_mobile == true) {	  
		dataFactory.getwallet = function () {
			return $http({method:'get',url:walletUrl,headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});		
		};		
		dataFactory.getflighthistory = function () {
			return $http({method:'get',url:UserFlightHistory,headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});		
		};
		dataFactory.gethotelhistory = function () {
			return $http({method:'get',url:UserHotelHistory,headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});		
		};
		dataFactory.getbushistory = function () {
			return $http({method:'get',url:UserHBusHistory,headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});		
		};
		
		dataFactory.getrmdetail = function () {
			return $http({method:'get',url:rmDetailUrl,headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});		
		};		
		dataFactory.getcompanyentity = function () {
			return $http({method:'get',url:companyEntity,headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});		
		};		
		//Direct User
		dataFactory.getDirectUser = function () {
			return $http({method:'get',url:newUrl+"GetDirectUserAppKey",headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});			
		};

		// Response Payment
		dataFactory.PaymentResponse = function (param) {
			return $http.post(newUrl+"SavePayResponse",param,{headers:{'Content-Type': 'application/json'}},{ignoreLoadingBar: true});
		}; 

		dataFactory.RecoverPaswd = function (param) {
			return $http.post(newUrl+"AgentPassword",{Email:param},{headers:{'Content-Type': 'application/json'}      
			},{ignoreLoadingBar: true});
		};  
		//end

		// Get without loading bar
		dataFactory.getmethod = function (path,param) {		
			return $http({method:'get',url:urlBase + path,params:param,headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});	
		};	
		
		dataFactory.get = function (path,param) {
			return $http.get(urlBase + path ,{params:param},{headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});
		};
		dataFactory.post = function (path, param) { 
			return $http.post(urlBase+path,param,{headers:{'Content-Type': 'application/json'},ignoreLoadingBar: true});
		};
	    }else{	
	    	
	    	dataFactory.getflighthistory = function () {
				return $http({method:'get',url:UserFlightHistory,headers:{'Content-Type': 'application/json'}});		
			}; 
			dataFactory.gethotelhistory = function () {
				return $http({method:'get',url:UserHotelHistory,headers:{'Content-Type': 'application/json'}});		
			};
			dataFactory.getbushistory = function () {
				return $http({method:'get',url:UserHBusHistory,headers:{'Content-Type': 'application/json'}});		
			};
			
	    	  dataFactory.getwallet = function () {
	    			return $http({method:'get',url:walletUrl,headers:{'Content-Type': 'application/json'}});		
	    		};
	    		
	    		dataFactory.getrmdetail = function () {
	    			return $http({method:'get',url:rmDetailUrl,headers:{'Content-Type': 'application/json'}});		
	    		};
	    		dataFactory.getcompanyentity = function () {
	    			return $http({method:'get',url:companyEntity,headers:{'Content-Type': 'application/json'}});		
	    		};
	    		
	    		//Direct User
	    		dataFactory.getDirectUser = function () {
	    			return $http({method:'get',url:newUrl+"GetDirectUserAppKey",headers:{'Content-Type': 'application/json'}});			
	    		};

	    		// Response Payment
	    		dataFactory.PaymentResponse = function (param) {
	    			return $http.post(newUrl+"SavePayResponse",param,{headers:{'Content-Type': 'application/json'}    
	    			},{ignoreLoadingBar: true});
	    		}; 

	    		dataFactory.RecoverPaswd = function (param) {
	    			return $http.post(newUrl+"AgentPassword",{Email:param},{headers:{'Content-Type': 'application/json'}      
	    			},{ignoreLoadingBar: true});
	    		};  
	    		//end

	    		// Get without loading bar
	    		dataFactory.getmethod = function (path,param) {		
	    			return $http({method:'get',url:urlBase + path,params:param,headers:{'Content-Type': 'application/json'}});	
	    		};	
	    		
	    		dataFactory.get = function (path,param) {
	    			return $http.get(urlBase + path ,{params:param},{headers:{'Content-Type': 'application/json'}      
	    			});
	    		};
	    		dataFactory.post = function (path, param) { 
	    			return $http.post(urlBase+path,param,{headers:{'Content-Type': 'application/json'}});
	    		};	    	 
	    		dataFactory.getThemeType = function () {
	    			return $http({method:'get',url:newUrl+"GetCompanyThemes",headers:{'Content-Type': 'application/json'}});			
	    		};
	    		
	    }

	return dataFactory;
});
