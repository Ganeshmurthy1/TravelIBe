
function selecttriptype(){
	var type = $("#triptypeselect").val();		
	if(type == 'R')	{		
		$('#twodpd2').prop('disabled',false);
	   // $('#arDate').prop('disabled',false);	
	}
	    else if(type == 'SR')			
		$('#twodpd2').prop('disabled',false);	
	else{
		$('#twodpd2').prop('disabled',true);
		$('#twodpd2').val('');
		//$('#arDate').prop('disabled',true);
		//$('#arDate').val('');
		
	}

}	

function UpdateTravellers() {
	var adultcount = parseInt($("#oneadults").val());
	$('#oneinfant').html("");
	$('#onekid').html("");
	var infoption = "";
	var choption = "";
	if (adultcount == 1) {
		infoption = "<option>0</option><option>1</option>";
		choption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option>";
	}
	if (adultcount == 2) {
		infoption = "<option>0</option><option>1</option><option>2</option>";
		choption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>";
	}
	if (adultcount == 3) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		choption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>";
	}
	if (adultcount == 4) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
		choption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>";
	}
	if (adultcount == 5) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>";
		choption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
	}
	if (adultcount == 6) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>";
		choption = "<option>0</option><option>1</option><option>2</option><option>3</option>";
	}
	if (adultcount == 7) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>";
		choption = "<option>0</option><option>1</option><option>2</option>";
	}
	if (adultcount == 8) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option>";
		choption = "<option>0</option><option>1</option>";
	}
	if (adultcount == 9) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option>";
		choption = "<option>0</option>";
	}
	$('#onekid').append(choption);
	$('#oneinfant').append(infoption);
}

function UpdateChildTravellers() {

	var childcount = parseInt($("#onekid").val());
	$('#oneinfant').html("");
	$('#oneadults').html("");
	var infoption = "";
	var aduption = "";
	if (childcount == 1) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option>";
		aduption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option>";
	}
	if (childcount == 2) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>";
		aduption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option>";
	}
	if (childcount == 3) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>";
		aduption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>";
	}
	if (childcount == 4) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>";
		aduption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>";
	}
	if (childcount == 5) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
		aduption = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
	}
	if (childcount == 6) {
		infoption = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		aduption = "<option>0</option><option>1</option><option>2</option><option>3</option>";
	}
	if (childcount == 7) {
		infoption = "<option>0</option><option>1</option><option>2</option>";
		aduption = "<option>0</option><option>1</option><option>2</option>";
	}
	if (childcount == 8) {
		infoption = "<option>0</option><option>1</option>";
		aduption = "<option>0</option><option>1</option>";
	}

	$('#oneadults').append(aduption);
	$('#oneinfant').append(infoption);
}


$(document).ready(function(event){

 	
/*	 $(document).click(function () {
		 event.stopPropagation();
        $('.traveller-menu').slideUp();
    }); 
	$('#but-up1').on('click',function(event){ 	   
		event.stopPropagation();	     
		$('.traveller-menu').slideToggle();
	});
	 $('.dropdown').on('click',function(event){ 	   
		event.stopPropagation();	     
		$('.traveller-menu').slideToggle();
	}); */
	

	$('#dropdown').on('click',function(event){      
		event.stopPropagation();
		$('.dropdownwrap').slideToggle();
	});
	$('#but-up').on('click',function(event){ 	   
		event.stopPropagation();	     
		$('.dropdownwrap').slideUp();
	}); 
	$(document).click(function () {
        $('.dropdownwrap').slideUp();
    });

});

$(".dropdownwrap").click(function(event) {    
	event.stopPropagation();
});




$(function(){        
	var values = new Array();    
	$(document).on('change', '.form-group-multiple-selectsone .input-group-multiple-selectone:last-child select', function(){      
		var selectsLength = $('.form-group-multiple-selectsone .input-group-multiple-selectone select').length;
		var optionsLength = ($(this).find('option').length)-1;

		if(selectsLength < optionsLength){
			var sInputGroupHtml = $(this).parent().html();
			var sInputGroupClasses = $(this).parent().attr('class');
			$(this).parent().parent().append('<div class="'+sInputGroupClasses+'">'+sInputGroupHtml+'</div>'); 
		}        
		updateValues();        
	});

	$(document).on('change', '.form-group-multiple-selectsone .input-group-multiple-selectone:not(:last-child) select', function(){        
		updateValues();        
	});

	$(document).on('click', '.input-group-addon-removeone', function(){
		var selectsLength = $('.form-group-multiple-selectsone .input-group-multiple-selectone select').length;
		if(selectsLength > 1)
		{
			$(this).parent().remove();
			updateValues();
		}
	});

	function updateValues()
	{
		values = new Array();
		$('.form-group-multiple-selectsone .input-group-multiple-selectone select').each(function(){
			var value = $(this).val();
			if(value != 0 && value != ""){
				values.push(value);
			}
		});
		$('.form-group-multiple-selectsone .input-group-multiple-selectone select').find('option').each(function(){
			var optionValue = $(this).val();
			var selectValue = $(this).parent().val();
			if(in_array(optionValue,values)!= -1 && selectValue != optionValue)
			{
				$(this).attr('disabled', 'disabled');
			}
			else
			{
				$(this).removeAttr('disabled');
			}
		});
	}    
	function in_array(needle, haystack){
		var found = 0;
		for (var i=0, length=haystack.length;i<length;i++) {
			if (haystack[i] == needle) return i;
			found++;
		}
		return -1;
	}
});

$(function(){    
	var values = new Array();    
	$(document).on('change', '.form-group-multiple-selectsround .input-group-multiple-selectround:last-child select', function(){      
		var selectsLength = $('.form-group-multiple-selectsround .input-group-multiple-selectround select').length;
		var optionsLength = ($(this).find('option').length)-1;

		if(selectsLength < optionsLength){
			var sInputGroupHtml = $(this).parent().html();
			var sInputGroupClasses = $(this).parent().attr('class');
			$(this).parent().parent().append('<div class="'+sInputGroupClasses+'">'+sInputGroupHtml+'</div>'); 
		}        
		updateValues();        
	});

	$(document).on('change', '.form-group-multiple-selectsround .input-group-multiple-selectround:not(:last-child) select', function(){        
		updateValues();        
	});

	$(document).on('click', '.input-group-addon-removeround', function(){
		var selectsLength = $('.form-group-multiple-selectsround .input-group-multiple-selectround select').length;


		if(selectsLength > 1)
		{
			$(this).parent().remove();
			updateValues();
		}

	});    
	function updateValues()
	{
		values = new Array();
		$('.form-group-multiple-selectsround .input-group-multiple-selectround select').each(function(){
			var value = $(this).val();
			if(value != 0 && value != ""){
				values.push(value);
			}
		});
		$('.form-group-multiple-selectsround .input-group-multiple-selectround select').find('option').each(function(){
			var optionValue = $(this).val();
			var selectValue = $(this).parent().val();
			if(in_array(optionValue,values)!= -1 && selectValue != optionValue)
			{
				$(this).attr('disabled', 'disabled');
			}
			else
			{
				$(this).removeAttr('disabled');
			}
		});
	}    
	function in_array(needle, haystack){
		var found = 0;
		for (var i=0, length=haystack.length;i<length;i++) {
			if (haystack[i] == needle) return i;
			found++;
		}
		return -1;
	}
});
$(function(){    
	var values = new Array();    
	$(document).on('change', '.form-group-multiple-selectsmulti .input-group-multiple-selectmulti:last-child select', function(){      
		var selectsLength = $('.form-group-multiple-selectsmulti .input-group-multiple-selectmulti select').length;
		var optionsLength = ($(this).find('option').length)-1;

		if(selectsLength < optionsLength){
			var sInputGroupHtml = $(this).parent().html();
			var sInputGroupClasses = $(this).parent().attr('class');
			$(this).parent().parent().append('<div class="'+sInputGroupClasses+'">'+sInputGroupHtml+'</div>'); 
		}        
		updateValues();        
	});    
	$(document).on('change', '.form-group-multiple-selectsmulti .input-group-multiple-selectmulti:not(:last-child) select', function(){        
		updateValues();        
	});

	$(document).on('click', '.input-group-addon-removemulti', function(){
		var selectsLength = $('.form-group-multiple-selectsmulti .input-group-multiple-selectmulti select').length;

		if(selectsLength > 1)
		{
			$(this).parent().remove();
			updateValues();
		}
	});    
	function updateValues()
	{
		values = new Array();
		$('.form-group-multiple-selectsmulti .input-group-multiple-selectmulti select').each(function(){
			var value = $(this).val();
			if(value != 0 && value != ""){
				values.push(value);
			}
		});
		$('.form-group-multiple-selectsmulti .input-group-multiple-selectmulti select').find('option').each(function(){
			var optionValue = $(this).val();
			var selectValue = $(this).parent().val();
			if(in_array(optionValue,values)!= -1 && selectValue != optionValue)
			{
				$(this).attr('disabled', 'disabled');
			}
			else
			{
				$(this).removeAttr('disabled');
			}
		});
	}    
	function in_array(needle, haystack){
		var found = 0;
		for (var i=0, length=haystack.length;i<length;i++) {
			if (haystack[i] == needle) return i;
			found++;
		}
		return -1;
	}
});
var query = (typeof(custom)=="undefined") ? window.location.search.substring(1) : custom;
var hu = query;     
var gy = hu.split("&");    
var vars = [], hash;
for (i=0;i<gy.length;i++) {
	var ft = gy[i].split("=");            
	vars[ft[0]] = ft[1];   

	if(ft[0] == 'origin1')
		$("#origin1").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'origin2')
		$("#origin2").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'origin3')
		$("#origin3").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'origin4')
		$("#origin4").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'destination1')
		$("#destmulti1").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'destination2')
		$("#destmulti2").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'destination3')
		$("#destmulti3").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'destination4')
		$("#destmulti4").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'depDate1')
		$("#multidate1").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'depDate2')
		$("#multidate2").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'depDate3')
		$("#multidate3").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'depDate4')
		$("#multidate4").val(decodeURIComponent(ft[1]));
	if(ft[0] == 'trips'){
		if(ft[1] == '3')
			$(".city3").show();
		if(ft[1] == '4'){
			$(".city3").show();
			$(".city4").show();
			$(".rowButton").hide();            
		}               
		$("#myTabs li").removeClass( "active" );
		$("#myTabContent .tab-pane").removeClass( "active in" );     
		$("#multirole").addClass("active");
		$(".tabmulti").addClass("active in");
	}

}

$(document).ready(function(event){
	 jQuery.noConflict(); 
	var fFocus = false;

	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();


	if(dd<10) {
	    dd='0'+dd
	} 

	if(mm<10) {
	    mm='0'+mm
	} 

	todaydate = dd+'/'+mm+'/'+yyyy;
	var tmwdate=Date.today().add(1).days();
	var ndd = tmwdate.getDate();
	var nmm = tmwdate.getMonth()+1; //January is 0!
	var nyyyy = tmwdate.getFullYear();
	if(ndd<10) {
	    ndd='0'+ndd
	} 

	if(nmm<10) {
	    nmm='0'+nmm
	}
	tmwdate = ndd+'/'+nmm+'/'+nyyyy;

	
	var ctoday = new Date();
	var cdd = ctoday.getDate();
	var cmm = ctoday.getMonth()+1; 
	var cyyyy = ctoday.getFullYear();
	
	var fareparam={};
	fareparam.cy=$('#onecurrencyname').val();
	fareparam.ay=$('#oky').val();
	if(fareparam.ay==undefined)
		fareparam.ay=$('#ay').val();
		
	
	function twoinsertPriceCells(dp) {		
		if(dp.year ==undefined ||dp.month == cmm){
		
		fareparam.firstmonth= cyyyy+'-'+cmm+'-'+cdd;
		var D= new Date();
	    D.setMonth(D.getMonth()+1,1);
	    D.setHours(0, 0, 0, 0);
	    var ndd = D.getDate();
		var nmm = D.getMonth()+1; 	    
		var nyyyy = D.getFullYear();
		fareparam.lastmonth= nyyyy+'-'+nmm+'-'+ndd;
		}else{
			var mm=dp.month;
			var yyyy=dp.year;
			var dd="1"
			fareparam.firstmonth= yyyy+'-'+mm+'-'+dd;
			if (mm=='12'){
				var mm='01';
				var yyyy=dp.year+1;
			}else{
				var mm=dp.month+1;
			var yyyy=dp.year;
			}
			fareparam.lastmonth= yyyy+'-'+mm+'-'+dd;

		}
		var ori = $('#hideori').val();
		var Ostart = ori.lastIndexOf('(') +1;
		var Oend = ori.lastIndexOf(')');	
		var destn = $('#hidedes').val();
		var Dstart = destn.lastIndexOf('(') +1;
		var Dend = destn.lastIndexOf(')');
		
		
		// Set Origin Country	 	
		var orifirstindex = ori.indexOf(',') + 1;
		var orilastindex = ori.lastIndexOf(',');	
		var originCountry = ori.substring(orifirstindex, orilastindex);		

		// Set Destination Country 	
		var desfirstindex = destn.indexOf(',') + 1;
		var deslastindex = destn.lastIndexOf(',');		
		var destinationCountry = destn.substring(desfirstindex, deslastindex);
		
		
		
		fareparam.cabclass=$('#cabinselect').val();
		if(dp.oneway == 'TRUE'){
			fareparam.source= ori.substring(Ostart, Oend);
			fareparam.dest= destn.substring(Dstart, Dend);
		}else{
			fareparam.source=destn.substring(Dstart, Dend);
			fareparam.dest=ori.substring(Ostart, Oend);
		}
		var triptype=$('#triptypeselect').val();
		if(triptype ==undefined){
			var triptype=$('#triptype').val();
		}
		if(triptype =='O'){
			insertingCells(fareparam);
			}
		else{
			if(originCountry =='India' && destinationCountry =='India' ){
				insertingCells(fareparam);
			}
		}
		
	}
	
	
	function insertPriceCells(dp) {
		if(dp.year ==undefined ||dp.month == cmm){
			
			fareparam.firstmonth= cyyyy+'-'+cmm+'-'+cdd;
			
		}else{
			var mm=dp.month;
			var yyyy=dp.year;
			var dd="1"
			fareparam.firstmonth= yyyy+'-'+mm+'-'+dd;
		}
		var ori = $('#hideori').val();
		var Ostart = ori.lastIndexOf('(') +1;
		var Oend = ori.lastIndexOf(')');	
		var destn = $('#hidedes').val();
		var Dstart = destn.lastIndexOf('(') +1;
		var Dend = destn.lastIndexOf(')');
		
		// Set Origin Country	 	
		var orifirstindex = ori.indexOf(',') + 1;
		var orilastindex = ori.lastIndexOf(',');	
		var originCountry = ori.substring(orifirstindex, orilastindex);		

		// Set Destination Country 	
		var desfirstindex = destn.indexOf(',') + 1;
		var deslastindex = destn.lastIndexOf(',');		
		var destinationCountry = destn.substring(desfirstindex, deslastindex);
		
		fareparam.cabclass=$('#cabinselect').val();
		if(dp.oneway == 'TRUE'){
			fareparam.source= ori.substring(Ostart, Oend);
			fareparam.dest= destn.substring(Dstart, Dend);
		}else{
			fareparam.source=destn.substring(Dstart, Dend);
			fareparam.dest=ori.substring(Ostart, Oend);
		}
		var triptype=$('#triptypeselect').val();
		if(triptype ==undefined){
			var triptype=$('#triptype').val();
		}
		if(triptype =='O'){
			insertingCellsmobile(fareparam);
			}
		else{
			if(originCountry =='India' && destinationCountry =='India' ){
				insertingCellsmobile(fareparam);
			}
		}	
	}
	
	function insertingCellsmobile(mobileparam) {
		var pricepick={};
		$.getJSON( 'resources/Apicredential.properties', {
			format: "json"
		})
		.done(function( data ) {
			var apiUrl = data.ApiURL +"/flight/calsearch/response";
			$.ajax({
				//url: 'calendarfare.json',
				url:apiUrl,
				type: 'POST',
				contentType: "application/json",
				data:JSON.stringify({app_key:mobileparam.ay,origin:mobileparam.source,destination:mobileparam.dest,depDate:mobileparam.firstmonth,cabinClass:mobileparam.cabclass,currency:mobileparam.cy}),
				dataType: 'json',
				error: function(data){
				},
				success: function(data){
				$.each(data.searchResult, function (key,val) {
					 var dsplit = val.depDate.split("-");
					 var trimmed =dsplit[2].replace(/\b0+/g, "");
					pricepick[trimmed] = val.totalPrice;
				});
				 $('.ui-datepicker td > *').each(function (idx, elem) {
			            var value = pricepick[idx + 1] || 0;
			            var className = 'datepicker-content-' + CryptoJS.MD5(value).toString();
			            if(value == 0)
			                addCSSRule('.ui-datepicker td a.' + className + ':after {content: "\\a0";}'); //&nbsp;8377 content: " \2191";
			            else
			                addCSSRule('.ui-datepicker td a.' + className + ':after {content: " \\20B9"'+'"'+value+'";}');

			            $(this).addClass(className);
			        });
				}
				});
		})
	}
	function insertingCells(fareparam) {
		var pricepick={};
		var pricepick1={};
		
		$.getJSON( 'resources/Apicredential.properties', {
			format: "json"
		})
		.done(function( data ) {
			var apiUrl = data.ApiURL +"/flight/calsearch/response";
		$.ajax({
			//url: 'calendarfare.json',
			url:apiUrl,
			type: 'POST',
			contentType: "application/json",
			data:JSON.stringify({app_key:fareparam.ay,origin:fareparam.source,destination:fareparam.dest,depDate:fareparam.firstmonth,cabinClass:fareparam.cabclass,currency:fareparam.cy}),
			dataType: 'json',
			error: function(data){
			},
			success: function(data){
			$.each(data.searchResult, function (key,val) {
				 var dsplit = val.depDate.split("-");
				 var trimmed =dsplit[2].replace(/\b0+/g, "");
				pricepick[trimmed] = val.totalPrice;
			});
			
			$('.ui-datepicker .ui-datepicker-group-first td > *').each(function (idx, elem) {
	            var value = pricepick[idx + 1] || 0;

	         
	            var className = 'datepicker-content-' + CryptoJS.MD5(value).toString();

	            if(value == 0)
	                addCSSRule('.ui-datepicker .ui-datepicker-group-first td a.' + className + ':after {content: "\\a0";}'); //&nbsp;
	            else
	                addCSSRule('.ui-datepicker .ui-datepicker-group-first td a.' + className + ':after {content: " \\20B9"'+'"'+value+'";}');

	            $(this).addClass(className);
	        });
			}
			});
		  if(fareparam.lastmonth !=undefined) {
				$.ajax({
					url:apiUrl,
					type: 'POST',
					contentType: "application/json",
					data:JSON.stringify({app_key:fareparam.ay,origin:fareparam.source,destination:fareparam.dest,depDate:fareparam.lastmonth,cabinClass:fareparam.cabclass,currency:fareparam.cy}),
					dataType: 'json',
					error: function(data){
					},
					success: function(data){
					$.each(data.searchResult, function (key,val) {
						 var dsplit = val.depDate.split("-");
						 var trimmed =dsplit[2].replace(/\b0+/g, "");
						pricepick1[trimmed] = val.totalPrice;
					});
					
					
					 $('.ui-datepicker .ui-datepicker-group-last td > *').each(function (idx, elem) {
				            var value = pricepick1[idx + 1] || 0;

				         
				            var className = 'datepicker-content-' + CryptoJS.MD5(value).toString();

				            if(value == 0)
				                addCSSRule('.ui-datepicker .ui-datepicker-group-last td a.' + className + ':after {content: "\\a0";}'); //&nbsp;
				            else
				                addCSSRule('.ui-datepicker .ui-datepicker-group-last td a.' + className + ':after {content: " \\20B9"'+'"'+value+'";}');

				            $(this).addClass(className);
				        });
					
					}
					});
		   }
		});	    
	 
	}
	
	
	var dynamicCSSRules = [];
	function addCSSRule(rule) {
	    if ($.inArray(rule, dynamicCSSRules) == -1) {
	        $('head').append('<style>' + rule + '</style>');
	        dynamicCSSRules.push(rule);
	    }
	}
	
	
	
	$('#depDate').val(todaydate);
	$('#twodpd1').val(todaydate);
	today.setDate(today.getDate() + 1);
	$("#twodpd2").datepicker("option", "minDate", today );
	
	var nextmon={};
	 var is_mobile = false;
	    if( $('#hdepe').css('display')=='none') {
	        is_mobile = true;       
	    }
	    if (is_mobile == true) {
	    	$('#depDate').datepicker({
        		numberOfMonths: 1,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate: '0',
        		autoclose: true,
	    	    disableTouchKeyboard: true,
	    	    Readonly: true,
        		onSelect: function(dateStr) {
        			var d1 = $(this).datepicker("getDate");
        			d1.setDate(d1.getDate() + 0); // change to + 1 if necessary
        			var d2 = $(this).datepicker("getDate");
        			d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
        			$("#arDate").datepicker("setDate", null);
        			$("#arDate").datepicker("option", "minDate", d1);
        			fFocus = true;

        		},onClose : function(dateSt)
        		{
        			if(fFocus == true){
        				$("#arDate").focus(); 
        			}
        			 
        		}
        	});
        	$('#arDate').datepicker({
        		numberOfMonths: 1,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate: '0'
        	})
        	
	    	$('#twodpd1').datepicker({
	    		numberOfMonths: 1,
	    		firstDay: 1,
	    		dateFormat: 'dd/mm/yy',
	    		minDate: '0', 
	    		autoclose: true,
	    	    disableTouchKeyboard: true,
	    	    Readonly: true,
	    		onSelect: function(dateStr) {
		    		  nextmon={'oneway':'TRUE'}
	    			insertPriceCells(nextmon);
	    			var d1 = $(this).datepicker("getDate");
	    			d1.setDate(d1.getDate() + 0); // change to + 1 if necessary
	    			var d2 = $(this).datepicker("getDate");
	    			d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
	    			$("#twodpd2").datepicker("setDate", null);
	    			$("#twodpd2").datepicker("option", "minDate", d1);
	    			fFocus = true;

	    		},onChangeMonthYear: function(year, month, dp) {
	    			 nextmon={'month':month,'year':year,'oneway':'TRUE'}		  
	    			 insertPriceCells(nextmon);
	    		},beforeShow: function(year, obj, dp) {
	    			
	    			if(obj.selectedMonth !=0){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'TRUE'}
	    			}
	    			else if(obj.selectedYear !=0 && obj.selectedYear !=cyyyy){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'TRUE'}
	    			}	
	    			else
		    		  nextmon={'oneway':'TRUE'};	
	    			  insertPriceCells(nextmon);
	    		},onClose : function(dateSt)
	    		{
	    			if(fFocus == true){
	    				$("#twodpd2").focus(); 
	    			}
	    			 
	    		}
	    	}).attr("readonly", "readonly");

	    	$("#twodpd2").datepicker({
	    		numberOfMonths: 1,
	    		firstDay: 1,
	    		dateFormat: 'dd/mm/yy',
	    		minDate:today,
	    		autoclose: true,
	    	    disableTouchKeyboard: true,
	    	    Readonly: true,
	    		onSelect: function(dateStr) {
	    			nextmon={'oneway':'FALSE'}	
	    			insertPriceCells(nextmon);
	    		}, onChangeMonthYear: function(year, month, dp) {
	    			 nextmon={'month':month,'year':year,'oneway':'FALSE'}		  
	    			 insertPriceCells(nextmon);
	    	    },
	    	    	beforeShow: function(year, obj, dp) {
		    			if(obj.selectedMonth !=0){
		    				var sel=obj.selectedMonth +1;
		    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'FALSE'}
		    			}
		    			else if(obj.selectedYear !=0 && obj.selectedYear !=cyyyy){
		    				var sel=obj.selectedMonth +1;
		    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'FALSE'}
		    			}
		    			else
		    		     nextmon={'oneway':'FALSE'}	
	    			     insertPriceCells(nextmon);
	    	    }
	    	}).attr("readonly", "readonly");
	 
	    	var hfocus = false;

	    	$('#datain').val(todaydate);
	    	$('#dateout').val(tmwdate);

	    	$("#dateout").datepicker("option", "minDate", today );
	    	$('#datain').datepicker({
	    		numberOfMonths: 1,
	    		firstDay: 1,
	    		dateFormat: 'dd/mm/yy',
	    		minDate: '0',
	    		autoclose: true,
	    	    disableTouchKeyboard: true,
	    	    Readonly: true,
	    		onSelect: function(dateStr) {
	    			var d1 = $(this).datepicker("getDate");
	    			d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
	    			var d2 = $(this).datepicker("getDate");
	    			d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
	    			$("#dateout").datepicker("setDate", null);
	    			$("#dateout").datepicker("option", "minDate", d1 );
	    			hfocus = true;
	    		},
	    		onClose : function(dateSt)
	    		{
	    			if(hfocus == true){
	    				$("#dateout").focus(); 
	    			}
	    			 
	    		}
	    	}).attr("readonly", "readonly");

	    	$("#dateout").datepicker({
	    		numberOfMonths: 1, 
	    		firstDay: 2,
	    		dateFormat: 'dd/mm/yy',
	    		minDate:today,
	    		autoclose: true,
	    	    disableTouchKeyboard: true,
	    	    Readonly: true,
	    		onSelect: function(dateStr) {       
	    		}
	    	}).attr("readonly", "readonly");
	    	
	    	var dates = $("#onedpd").datepicker({  
	    		minDate : 0,
	    		dateFormat: 'dd/mm/yy',
	    		numberOfMonths: 1,
	    		autoclose: true,
	    	    disableTouchKeyboard: true,
	    	    Readonly: true,
	    		onSelect: function(date) {
	    			nextmon={'oneway':'TRUE'};
	    			insertPriceCells(nextmon);
	    			for(var i = 0; i < dates.length; ++i) {               
	    				if(dates[i].id < this.id)
	    					$(dates[i]).datepicker('option', 'maxDate', date);
	    				else if(dates[i].id > this.id)
	    					$(dates[i]).datepicker('option', 'minDate', date);
	    			}
	    		} ,onChangeMonthYear: function(year, month, dp) {
	    			 nextmon={'month':month,'year':year,'oneway':'TRUE'}
	    			 insertPriceCells(nextmon);
	    	   },
	    	      beforeShow: function(year, obj, dp) {
	    			if(obj.selectedMonth !=0){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'TRUE'}
	    			}
	    			else if(obj.selectedYear !=0 && obj.selectedYear !=cyyyy){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'TRUE'}
	    			}	
	    			else
		    		  nextmon={'oneway':'TRUE'};
	    			insertPriceCells(nextmon);
	    	   }
	    	
	    	
	    	}).attr("readonly", "readonly"); 	
	    
	    }
        if (is_mobile == false) {
        	$('#depDate').datepicker({
        		numberOfMonths: 2,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate: '0', 
        		onSelect: function(dateStr) {
        			var d1 = $(this).datepicker("getDate");
        			d1.setDate(d1.getDate() + 0); // change to + 1 if necessary
        			var d2 = $(this).datepicker("getDate");
        			d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
        			$("#arDate").datepicker("setDate", null);
        			$("#arDate").datepicker("option", "minDate", d1);
        			fFocus = true;

        		},onClose : function(dateSt)
        		{
        			if(fFocus == true){
        				$("#arDate").focus(); 
        			}
        			 
        		}
        	});
        	$('#arDate').datepicker({
        		numberOfMonths: 2,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate: '0'
        	})
        	$('#twodpd1').datepicker({
        		numberOfMonths: 2,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate: '0', 

        		onSelect: function(dateStr) {
		    		nextmon={'oneway':'TRUE'}
        			twoinsertPriceCells(nextmon);
        			var d1 = $(this).datepicker("getDate");
        			d1.setDate(d1.getDate() + 0); // change to + 1 if necessary
        			var d2 = $(this).datepicker("getDate");
        			d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
        			$("#twodpd2").datepicker("setDate", null);
        			$("#twodpd2").datepicker("option", "minDate", d1);
        			fFocus = true;

        		},onChangeMonthYear: function(year, month, dp) {
	    			 nextmon={'month':month,'year':year,'oneway':'TRUE'}
	    			  twoinsertPriceCells(nextmon);
	    	   },
	    	   beforeShow: function(year, obj, dp) {
	    			if(obj.selectedMonth !=0){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'TRUE'}
	    			}
	    			else if(obj.selectedYear !=0 && obj.selectedYear !=cyyyy){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'TRUE'}
	    			}	
	    			else
		    		  nextmon={'oneway':'TRUE'};
	    			twoinsertPriceCells(nextmon);
	    	   },onClose : function(dateSt)
        		{
        			if(fFocus == true){
        				$("#twodpd2").focus(); 
        			}
        		}
        	});

        	$("#twodpd2").datepicker({
        		numberOfMonths: 2,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate:today,
        		onSelect: function(dateStr) {
		    		  nextmon={'oneway':'FALSE'}
	    		     twoinsertPriceCells(nextmon);
        		},onChangeMonthYear: function(year, month, dp) {
	    			 nextmon={'month':month,'year':year,'oneway':'FALSE'}
	    			  twoinsertPriceCells(nextmon);
	    	   },beforeShow: function(year, obj, dp) {
	    			
	    			if(obj.selectedMonth !=0){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'FALSE'}
	    			}
	    			else if(obj.selectedYear !=0 && obj.selectedYear !=cyyyy){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'FALSE'}
	    			}	
	    			else
		    		  nextmon={'oneway':'FALSE'};
	    			twoinsertPriceCells(nextmon);

	    	   }
        	});	
   	
        	var hfocus = false;

        	$('#datain').val(todaydate);
        	$('#dateout').val(tmwdate);
        	$("#dateout").datepicker("option", "minDate", today );
        	$('#datain').datepicker({
        		numberOfMonths: 2,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate: '0',
        		onSelect: function(dateStr) {
        			var d1 = $(this).datepicker("getDate");
        			d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
        			var d2 = $(this).datepicker("getDate");
        			d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
        			$("#dateout").datepicker("setDate", null);
        			$("#dateout").datepicker("option", "minDate", d1 );
        			// $("#twodpd2").datepicker("option", "maxDate", d2);
        			hfocus = true;
        		},
        		onClose : function(dateSt)
        		{
        			if(hfocus == true){
        				$("#dateout").focus(); 
        			}	 
        		}
        	});

        	$("#dateout").datepicker({
        		numberOfMonths: 2, 
        		firstDay: 2,
        		dateFormat: 'dd/mm/yy',
        		minDate:today,
        		onSelect: function(dateStr) {       
        		}
        	});	
        	
        	var dates = $("#onedpd").datepicker({  
        		minDate : 0,
        		dateFormat: 'dd/mm/yy',
        		numberOfMonths: 2,
        		onSelect: function(date) {
        			nextmon={'oneway':'TRUE'};
	    			twoinsertPriceCells(nextmon);
        			for(var i = 0; i < dates.length; ++i) {               
        				if(dates[i].id < this.id)
        					$(dates[i]).datepicker('option', 'maxDate', date);
        				else if(dates[i].id > this.id)
        					$(dates[i]).datepicker('option', 'minDate', date);
        			}
        		},onChangeMonthYear: function(year, month, dp) {
	    			 nextmon={'month':month,'year':year,'oneway':'TRUE'}
	    			  twoinsertPriceCells(nextmon);
	    	   },
	    	   beforeShow: function(year, obj, dp) {
	    			if(obj.selectedMonth !=0){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'TRUE'}
	    			}
	    			else if(obj.selectedYear !=0 && obj.selectedYear !=cyyyy){
	    				var sel=obj.selectedMonth +1;
	    				nextmon={'month':sel,'year':obj.selectedYear,'oneway':'TRUE'}
	    			}	
	    			else
		    		  nextmon={'oneway':'TRUE'};
	    			twoinsertPriceCells(nextmon);
	    	   }
        	
        	
        	
        	});
        	
	    }
	
	
	

var multidate = $("#multidate1,#multidate2,#multidate3,#multidate4,#multidate5").datepicker({  
	minDate : 0,
	dateFormat: 'dd/mm/yy',
	numberOfMonths: 2,
	onSelect: function(date) {
		for(var i = 0; i < multidate.length; ++i) {               
			if(multidate[i].id < this.id)
				$(multidate[i]).datepicker('option', 'maxDate', date);
			else if(multidate[i].id > this.id)
				$(multidate[i]).datepicker('option', 'minDate', date);
		}
	}   
});

});


function AddRooms(element) {
	var totalrooms = $('#totalrooms').val();		
	$('#totalroomtext').text(totalrooms);
	
	$('#totalpeopletext').text(totalrooms);
	
	var addrooms = "";
	$('.hotel-repeatadd').html("");
	for (var i = 0; i < parseInt(totalrooms - 1); i++) {		
		var index = i + 2;
		addrooms += "<div class='row' id='rowid"+index+"' ><div class='col-md-4 col-sm-2 clearfix rooms-multiple'><p class='ro-heading'>Room "
		+ index
		+ ":</p></div><div class='col-md-4 col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Adult(s)</label><div class='input-group'> <select class='form-control' name='Adults"
		+ index
		+ "' id='RoomAdult"
		+ index
		+ "' autocomplete='off' required onchange='ChangeRoomChild("
		+ index
		+ ")'><option selected='selected'>1</option><option>2</option><option>3</option><option>4</option></select></div></div></div>"
		+ "<div class='col-md-4 col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Child(s)</label><div class='input-group'><select class='form-control' id='Childs"
		+ index
		+ "' name='Childs"
		+ index
		+ "' autocomplete='off' required onchange='InsertAge("
		+ index
		+ ")'><option>0</option> <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div></div><div id='childrow"+index+"' class='col-sm-12'></div></div>"

	}
	$('.hotel-repeatadd').append(addrooms);
	
	FirstRoomChangeChild();
	
}
/*function setoldvalue(element){
	   element.setAttribute("oldvalue",this.value);
	}*/

function InsertAge(rowindex) {
	var total = $('#Childs' + rowindex).val();
	var totalrooms = $('#totalrooms').val();
	if (totalrooms == 1) {
		$('#totalchildtext').text(parseInt(total));
	}
	if (totalrooms == 2)
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val()));
	if (totalrooms == 3)
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val()));
	if (totalrooms == 4)
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val()));
	if (totalrooms == 5)
		$('#totalpeopletext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val())
				+ parseInt($('#Childs5').val()));
	if (totalrooms == 6)
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val()) 
				+ parseInt($('#Childs4').val())
				+ parseInt($('#Childs5').val())
				+ parseInt($('#Childs6').val()));

	var addages = "";
	$('#childrow' + rowindex).html("");
	for (var i = 0; i < parseInt(total); i++) {
		addages += "<div class='col-sm-2 clearfix AgeDivWidth' id='c-age' ><div class='form-group'><label for='inputGroupSuccess2'>Age "
			+ (i + 1)
			+ "</label><div class='input-group'><select class='form-control' id='room"+rowindex+"Age"+(i+1)+"' name='Age"+rowindex+"' autocomplete='off' required><option value='1'>< 1</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option> </select></div></div></div>";
	}		
	//var firstcol = "<div class='col-sm-2 '></div>";
	//$('#childrow' + rowindex).append(firstcol);
	$('#childrow' + rowindex).append(addages);
}
function ChangeRoomChild(roomindex) {
	var totaladult = $('#RoomAdult' + roomindex).val();
	var totalrooms = $('#totalrooms').val();
	$('#Childs' + roomindex).html("");
	if (totaladult == '1') {

		var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option> ";
		$('#Childs' + roomindex).append(option);
	}
	if (totaladult == '2') {
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
		$('#Childs' + roomindex).append(option);
	}
	if (totaladult == '3') {
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		$('#Childs' + roomindex).append(option);
	}
	if (totaladult == '4') {
		var option = "<option>0</option><option>1</option><option>2</option>";
		$('#Childs' + roomindex).append(option);
	}
	$('#childrow' + roomindex).html("");
	if (totalrooms == 1) {
		$('#totalpeopletext').text(parseInt(totaladult));
		$('#totalchildtext').text(parseInt($('#Childs').val()));
	}
	if (totalrooms == 2) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val()));
	}
	if (totalrooms == 3) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val())
				+ parseInt($('#RoomAdult3').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val()));
	}

	if (totalrooms == 4) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val())
				+ parseInt($('#RoomAdult3').val())
				+ parseInt($('#RoomAdult4').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val()));
	}

	if (totalrooms == 5) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val())
				+ parseInt($('#RoomAdult3').val())
				+ parseInt($('#RoomAdult4').val())
				+ parseInt($('#RoomAdult5').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val())
				+ parseInt($('#Childs5').val()));
	}
	if (totalrooms == 6) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val())
				+ parseInt($('#RoomAdult3').val())
				+ parseInt($('#RoomAdult4').val())
				+ parseInt($('#RoomAdult5').val())
				+ parseInt($('#RoomAdult6').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val())
				+ parseInt($('#Childs5').val())
				+ parseInt($('#Childs6').val()));
	}
}

function FirstrowChildchange(rowindex) {
	var total = $('#Childs').val();
	var totalrooms = $('#totalrooms').val();
	if (totalrooms == 1) {
		$('#totalchildtext').text(parseInt(total));
	}
	if (totalrooms == 2)
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val()));
	if (totalrooms == 3)
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs2').val()));
	if (totalrooms == 4)
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val()));
	if (totalrooms == 5)
		$('#totalpeopletext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val()));
	if (totalrooms == 6)
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val())
				+ parseInt($('#Childs5').val()));		
	if (total == '0') {
		$('.Room1Child1').hide();
		$('.Room1Child2').hide();
		$('.Room1Child3').hide();
		$('.Room1Child4').hide();
		$('.Room1Child5').hide();
	}

	if (total == '1') {
		$('.Room1Child1').show();
		$('.Room1Child2').hide();
		$('.Room1Child3').hide();
		$('.Room1Child4').hide();
		$('.Room1Child5').hide();
	}
	if (total == '2') {
		$('.Room1Child1').show();
		$('.Room1Child2').show();
		$('.Room1Child3').hide();
		$('.Room1Child4').hide();
		$('.Room1Child5').hide();
	}
	if (total == '3') {
		$('.Room1Child1').show();
		$('.Room1Child2').show();
		$('.Room1Child3').show();
		$('.Room1Child4').hide();
		$('.Room1Child5').hide();
	}
	if (total == '4') {
		$('.Room1Child1').show();
		$('.Room1Child2').show();
		$('.Room1Child3').show();
		$('.Room1Child4').show();
		$('.Room1Child5').hide();
	}
	if (total == '5') {
		$('.Room1Child1').show();
		$('.Room1Child2').show();
		$('.Room1Child3').show();
		$('.Room1Child4').show();
		$('.Room1Child5').show();
	}
}
function FirstRoomChangeChild() {
	var totaladult = $('#RoomAdult1').val();
	var totalpeoplelength = $('#totalpeopletext').text();
	var totalrooms = $('#totalrooms').val();

	$('#Childs').html("");
	if (totaladult == '1') {

		var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>";
		$('#Childs').append(option);
		
	}
	if (totaladult == '2') {
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
		$('#Childs').append(option);
	}
	if (totaladult == '3') {
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		$('#Childs').append(option);
	}
	if (totaladult == '4') {
		var option = "<option>0</option><option>1</option><option>2</option>";
		$('#Childs').append(option);
	}
	$('.Room1Child1').hide();
	$('.Room1Child2').hide();
	$('.Room1Child3').hide();
	$('.Room1Child4').hide();
	$('.Room1Child5').hide();

	if (totalrooms == 1) {
		$('#totalpeopletext').text(parseInt(totaladult));
		$('#totalchildtext').text(parseInt($('#Childs').val()));
	}
	if (totalrooms == 2) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val()));
	}
	if (totalrooms == 3) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val())
				+ parseInt($('#RoomAdult3').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val()));
	}

	if (totalrooms == 4) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val())
				+ parseInt($('#RoomAdult3').val())
				+ parseInt($('#RoomAdult4').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val()));
	}

	if (totalrooms == 5) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val())
				+ parseInt($('#RoomAdult3').val())
				+ parseInt($('#RoomAdult4').val())
				+ parseInt($('#RoomAdult5').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val())
				+ parseInt($('#Childs5').val()));
	}
	if (totalrooms == 6) {
		$('#totalpeopletext').text(
				parseInt($('#RoomAdult1').val())
				+ parseInt($('#RoomAdult2').val())
				+ parseInt($('#RoomAdult3').val())
				+ parseInt($('#RoomAdult4').val())
				+ parseInt($('#RoomAdult5').val())
				+ parseInt($('#RoomAdult6').val()));
		$('#totalchildtext').text(
				parseInt($('#Childs').val())
				+ parseInt($('#Childs2').val())
				+ parseInt($('#Childs3').val())
				+ parseInt($('#Childs4').val())
				+ parseInt($('#Childs5').val())
				+ parseInt($('#Childs6').val()));
	}

}

function AddCities() {
	var rowCount = $('#Multicitydivs > #city:visible').length;	
	var addlist = '';
	if (rowCount == 2) {
		$(".city3").css('display', 'block');
		$("#tripsid").val("3");
	}
	if (rowCount == 3) {
		$(".city4").css('display', 'block');
		$("#col3").css('display', 'none');
		$(".rowButton").css('display', 'none');
		$("#tripsid").val("4");
	}	}
function deleterow3() {
	$(".city3").css('display', 'none');
	$("#tripsid").val("2");
}
function deleterow4() {
	$("#col3").css('display', 'block');
	$(".city4").css('display', 'none');
	$(".rowButton").css('display', 'block');
	$("#tripsid").val("3");
}

$(document).on('click', '.accordion', function(event) {		
	event.stopPropagation();
	var $this = $(this);
	var parent = $this.data('parent');
	var actives = parent && $(parent).find('.collapse.in');
	var href = '#'; // Keeps JSHint from reporting 'href' undefined
	var hasData = '#'; // Keeps JSHint from reporting 'hasData' undefined

	// From bootstrap itself
	if (actives && actives.length) {
		hasData = actives.data('collapse');
		//if (hasData && hasData.transitioning) return;
		actives.collapse('hide');


	}
	make_minus = false;  
	if($this.find('i').hasClass('tayyarah-plus'))
	{
		make_minus = true;
	}

	$('.tayyarah-minus').removeClass('tayyarah-minus').addClass('tayyarah-plus');

	if(make_minus)
	{
		$this.find('i').removeClass('tayyarah-plus').addClass('tayyarah-minus');
	}  

	var target = $this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7

	$(target).collapse('toggle');
});
//function to close our popups
$(function() {	
	$('.login-pop-up, .b-cl, .b-ok').click(function(){    	
		closePopup();
	});
	function closePopup(){
		$('.login-pop-up, .b-cl, .b-ok').hide(); //hide the overlay
	}
});
function myLink(){    
	location.href ="enqueryform.jsp";
}


$('.btn-number').click(function(e){
	e.preventDefault();        

	fieldName = $(this).attr('data-field');
	type      = $(this).attr('data-type');

	var input = $("#"+fieldName);    

	//var input = $("input[name='"+fieldName+"']");     
	var currentVal = input.text();

	if (!isNaN(currentVal)) {

		if(type == 'minus') {

			if(parseInt(currentVal) > input.attr('min')) {
				input.text(parseInt(currentVal) - 1).change();
				if(fieldName == "adultid"){
					$('#hiddenadult').val(parseInt(currentVal) - 1);           	  

					$('#infantid').attr('max',parseInt(currentVal) - 1);  
					if(parseInt($('#infantid').text()) > 0)
						$('#totaltraveller').text(parseInt($('#totaltraveller').text()) - parseInt($('#infantid').text()) );

					$('#infantid').text(0);  
				}

				if(fieldName == "kidid")
					$('#hiddenkid').val(parseInt(currentVal) - 1); 
				if(fieldName == "infantid")
					$('#hiddeninfant').val(parseInt(currentVal) - 1);

				var total =  $('#totaltraveller').text();
				$('#totaltraveller').text(parseInt(total) -1);
			} 
			if(input.text() == input.attr('min')) {
				$(this).attr('disabled', true);
			}

		} else if(type == 'plus') {
			//var totallist =  $('#totaltraveller').text();
			var adultcount =  parseInt($('#hiddenadult').val());
			var childcount =  parseInt($('#hiddenkid').val());


			if((adultcount+childcount) <= 8)
			{

				if(parseInt(currentVal) < input.attr('max')) {
					//console.log('here' +input);
					input.text(parseInt(currentVal) + 1).change();  
					if(fieldName == "adultid"){

						$('#hiddenadult').val(parseInt(currentVal) + 1);   
						if(parseInt($('#infantid').text()) > 0)
							$('#totaltraveller').text(parseInt($('#totaltraveller').text()) - parseInt($('#infantid').text()) );
						$('#infantid').text(0);  
						$('#infantid').attr('max',parseInt(currentVal) + 1);  


					}                	
					if(fieldName == "kidid"){

						$('#hiddenkid').val(parseInt(currentVal) + 1); 
					}            

					if(fieldName == "infantid"){  
						$('#hiddeninfant').val(parseInt(currentVal) + 1);
					}


					var total =  $('#totaltraveller').text();
					$('#totaltraveller').text(parseInt(total) +1);

				}		

			}			
			if((adultcount+childcount) == 9 && adultcount <= parseInt($('#infantid').attr('max'))){

				if(parseInt(currentVal) < input.attr('max')) {
					if(fieldName == "infantid"){      
						input.text(parseInt(currentVal) + 1).change();  
						$('#hiddeninfant').val(parseInt(currentVal) + 1);
						var total =  $('#totaltraveller').text();
						$('#totaltraveller').text(parseInt(total) +1);
					} 

				}
			}

		}

	} else {
		input.text(0);
	}
});

$('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event){    
	event.stopPropagation();

});
/*$('ul.dropdown-menu.mega-dropdown-menu').on('change', function(event){    
	event.stopPropagation();

});*/


$('.input-number').focusin(function(){
	$(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {

	minValue =  parseInt($(this).attr('min'));
	maxValue =  parseInt($(this).attr('max'));
	valueCurrent = parseInt($(this).text());

	name = $(this).attr('id');
	if(parseInt(valueCurrent) >= minValue) {
		$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
	} else {
		alert('Sorry, the minimum value was reached');
		$(this).text($(this).data('oldValue'));
	}
	if(parseInt(valueCurrent) <= maxValue) {
		$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
	} else {
		alert('Sorry, the maximum value was reached');
		$(this).text($(this).data('oldValue'));
	}


});
$(".input-number").keydown(function (e) {
	// Allow: backspace, delete, tab, escape, enter and .
	if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
			// Allow: Ctrl+A
			(e.keyCode == 65 && e.ctrlKey === true) || 
			// Allow: home, end, left, right
			(e.keyCode >= 35 && e.keyCode <= 39)) {
		// let it happen, don't do anything
		return;
	}
	// Ensure that it is a number and stop the keypress
	if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
		e.preventDefault();
	}
});

// clearing console once ajax request processed

$('.log').ajaxComplete(function() { 
    clearconsole();
  $(this).text('Triggered ajaxComplete handler.');
});

function clearconsole() { 

  if(window.console || window.console.firebug) {
   console.clear();
  }
}
