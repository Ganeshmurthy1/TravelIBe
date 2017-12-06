var app = angular.module('myApp');

app.controller('indexCtrl',['$scope','$http','$rootScope','$modal','$log','$route', function($scope,$http,$rootScope,transporter,$route,$modal,$log,$route) {

	$scope.init = function(){	
		var totUrl = $(location).attr('href');			 
		var pagename =  domain=totUrl.split("/#/")[1];	 
		$(window).on('beforeunload', function() {
			$(window).scrollTop(0);
		});		  
		$(window).unload(function(){
			localStorage.clear();
		});
	}

	$rootScope.$on('$stateChangeSuccess', function() {
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	});
	$scope.iswhitehead="";
	$scope.css = 'default';
	$scope.value={};
	$scope.value=angular.element('#cmpnyid').val(); 
	$scope.themee='';
	$scope.cssurl='';
	$scope.logo='';
	$scope.themee=angular.element('#themeType').val();
	$scope.cssurl=angular.element('#cssPath').val();
	$scope.logo=angular.element('#Logo').val();
	if(!$scope.themee){
		$scope.themee="Default";
		$scope.cssurl="Default";
		$scope.logo="Default";
	}

//	loading index page for whitelabeling
	$scope.headerUrl='';
	$scope.footerUrl='';
	$scope.companyCss = $scope.cssurl;   
	$scope.Companylogo = $scope.logo;	  
	$scope.headerUrl = 'views/Header-'+$scope.themee +'.jsp';	  
	$scope.footerUrl = 'views/Footer-'+$scope.themee +'.jsp';

	$scope.init();
}]);