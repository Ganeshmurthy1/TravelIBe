


function selecttriptype(){
	var type = $("#triptypeEselect").val();		
	if(type == 'R')			
		$('#twoEdpd2').prop('disabled',false);	
	else if(type == 'SR')			
		$('#twoEdpd2').prop('disabled',false);	
	else{
		$('#twoEdpd2').prop('disabled',true);
		$('#twoEdpd2').val(''); 
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

	$('#but-up1').on('click',function(event){ 	   
		event.stopPropagation();	     
		$('.traveller-menu').slideToggle();
	});
	$('.dropdown').on('click',function(event){ 	   
		event.stopPropagation();	     
		$('.traveller-menu').slideToggle();
	});
	
	$(document).click(function () {
        $('.traveller-menu').slideUp();
    });

	$('#dropEdown').on('click',function(event){      
		event.stopPropagation();
		$('.dropdownEwrap').slideToggle();
	});
	$('#but-Eup').on('click',function(event){ 	   
		event.stopPropagation();	     
		$('.dropdownEwrap').slideUp();
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
/*
$(document).ready(function(event){*/
$.noConflict();
$(document).ready(function(event){
/*	$(".depDatepick").removeClass('hasDatepicker').datepicker();  */
	$('#ui-datepicker-div').remove();
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
	
	$('.depDatepick').val(todaydate);

	today.setDate(today.getDate() + 1);
	$("#twoEdpd2").datepicker("option", "minDate", today );
	
	
	 var is_mobile = false;
	    if( $('#hdepe').css('display')=='none') {
	        is_mobile = true;       
	    }
	    if (is_mobile == true) {

        	
        
        	
        	$('body').on('focus',".depDatepick", function(){
        			
        		$(this).datepicker({
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
        	        			$("#twoEdpd2").datepicker("setDate", null);
        	        			$("#twoEdpd2").datepicker("option", "minDate", d1);
        	        			// $("#twoEdpd2").datepicker("option", "maxDate", d2);
        	        			fFocus = true;

        	        		},
        	        		onClose : function(dateSt)
        	        		{
        	        			if(fFocus == true){
        	        				$("#twoEdpd2").focus(); 
        	        			}
        	        			 
        	        		}
        	        	}).attr("readonly", "readonly");
        	});
        	
        	/*$("#twoEdpd2").datepicker({*/
        		
        	$('body').on('focus',".arrivalDatepick", function(){
        			
        	$(this).datepicker({        		
        		numberOfMonths: 1,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate:today,
        		autoclose: true,
	    	    disableTouchKeyboard: true,
	    	    Readonly: true,
        		onSelect: function(dateStr) {

        		}
        	}).attr("readonly", "readonly");
        		});
        	
        	
        
        	
        	
        	var hfocus = false;

        	$('#errorCheckin').val(todaydate);
        	$('#errordateout').val(tmwdate);

        	$("#errordateout").datepicker("option", "minDate", today );
        	$('#errorCheckin').datepicker({
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
        			$("#errordateout").datepicker("setDate", null);
        			$("#errordateout").datepicker("option", "minDate", d1 );
        			// $("#twoEdpd2").datepicker("option", "maxDate", d2);
        			hfocus = true;
        		},
        		onClose : function(dateSt)
        		{
        			if(hfocus == true){
        				$("#errordateout").focus(); 
        			}
        			 
        		}
        	}).attr("readonly", "readonly");

        	$("#errordateout").datepicker({
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
        		onSelect: function(date) {
        			for(var i = 0; i < dates.length; ++i) {               
        				if(dates[i].id < this.id)
        					$(dates[i]).datepicker('option', 'maxDate', date);
        				else if(dates[i].id > this.id)
        					$(dates[i]).datepicker('option', 'minDate', date);
        			}
        		} 

        	}).attr("readonly", "readonly");
        	
	    
	    }
        if (is_mobile == false) {
        	
        
        	
        	$('body').on('focus',".depDatepick", function(){
        			
        		$(this).datepicker({
        	        		numberOfMonths: 2,
        	        		firstDay: 1,
        	        		dateFormat: 'dd/mm/yy',
        	        		minDate: '0', 

        	        		onSelect: function(dateStr) {
        	        			var d1 = $(this).datepicker("getDate");
        	        			d1.setDate(d1.getDate() + 0); // change to + 1 if necessary
        	        			var d2 = $(this).datepicker("getDate");
        	        			d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
        	        			$("#twoEdpd2").datepicker("setDate", null);
        	        			$("#twoEdpd2").datepicker("option", "minDate", d1);
        	        			// $("#twoEdpd2").datepicker("option", "maxDate", d2);
        	        			fFocus = true;

        	        		},
        	        		onClose : function(dateSt)
        	        		{
        	        			if(fFocus == true){
        	        				$("#twoEdpd2").focus(); 
        	        			}
        	        			 
        	        		}
        	        	});
        	});
        	
        	/*$("#twoEdpd2").datepicker({*/
        		
        	$('body').on('focus',".arrivalDatepick", function(){
        			
        	$(this).datepicker({        		
        		numberOfMonths: 2,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate:today,
        		onSelect: function(dateStr) {

        		}
        	});
        		});
        	
        	
        
        	
        	
        	var hfocus = false;

        	$('#errorCheckin').val(todaydate);
        	$('#errordateout').val(tmwdate);

        	$("#errordateout").datepicker("option", "minDate", today );
        	$('#errorCheckin').datepicker({
        		numberOfMonths: 2,
        		firstDay: 1,
        		dateFormat: 'dd/mm/yy',
        		minDate: '0',
        		onSelect: function(dateStr) {
        			var d1 = $(this).datepicker("getDate");
        			d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
        			var d2 = $(this).datepicker("getDate");
        			d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
        			$("#errordateout").datepicker("setDate", null);
        			$("#errordateout").datepicker("option", "minDate", d1 );
        			// $("#twoEdpd2").datepicker("option", "maxDate", d2);
        			hfocus = true;
        		},
        		onClose : function(dateSt)
        		{
        			if(hfocus == true){
        				$("#errordateout").focus(); 
        			}
        			 
        		}
        	});

        	$("#errordateout").datepicker({
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
        			for(var i = 0; i < dates.length; ++i) {               
        				if(dates[i].id < this.id)
        					$(dates[i]).datepicker('option', 'maxDate', date);
        				else if(dates[i].id > this.id)
        					$(dates[i]).datepicker('option', 'minDate', date);
        			}
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
function multicitysubmit() {

	var origin1 = $("#origin1").val();
	var destination1 = $("#destmulti1").val();
	var multidate1 = $("#multidate1").val();
	var origin2 = $("#origin2").val();
	var destination2 = $("#destmulti2").val();
	var multidate2 = $("#multidate2").val();

	var adult = $("#multiadults option:selected").text();
	var child = $("#multikid option:selected").text();
	var infant = $("#multiinfant option:selected").text();

	var total = parseInt(adult) + parseInt(child) + parseInt(infant);

	if (origin1 == "") {
		$("#multi1fromerror").text("Select First From ");
	} else if (destination1 == "") {
		$("#multi1fromerror").text("");
		$("#multi1toerror").text("Select First To");
	} else if (multidate1 == "") {
		$("#multi1toerror").text("");
		$("#multi1departerror").text("Select the First Departure date");
	} else if (origin2 == "") {
		$("#multi1toerror").text("");
		$("#multi1departerror").text("");
		$("#multi2fromerror").text("Select Second From ");
	} else if (destination2 == "") {
		$("#multi2fromerror").text("");
		$("#multi2toerror").text("Select Second To");
	} else if (multidate2 == "") {
		$("#multi2toerror").text("");
		$("#multi2departerror").text("Select the Second Departure date");
	} else if ($(".city3").is(':visible')) {
		var origin3 = $("#origin3").val();
		var destination3 = $("#destmulti3").val();
		var multidate3 = $("#multidate3").val();
		if (origin3 == "") {
			$("#multi3fromerror").text("Select Third From ");
		} else if (destination3 == "") {
			$("#multi3fromerror").text("");
			$("#multi3toerror").text("Select Third To");
		} else if (multidate3 == "") {
			$("#multi3toerror").text("");
			$("#multi3departerror").text("Select Third Departure date");
		} else if (parseInt(total) > 9) {
			$("#multi3departerror").text("");
			$(".errorsmulti").text("Only 9 Travellers Allowed ");
		} else if ($(".city4").is(':visible')) {
			var origin4 = $("#origin4").val();
			var destination4 = $("#destmulti4").val();
			var multidate4 = $("#multidate4").val();
			if (origin4 == "") {
				$("#multi4fromerror").text("Select the Fourth From ");
			} else if (destination4 == "") {
				$("#multi4fromerror").text("");
				$("#multi4toerror").text("Select the Fourth To");
			} else if (multidate4 == "") {
				$("#multi4toerror").text("");
				$("#multi4departerror").text(
				"Select the Fourth Departure date");
			} else if (parseInt(total) > 9) {
				$("#multi4departerror").text("");
				$(".errorsmulti").text("Only 9 Travellers Allowed ");
			} else {
				$(".errorsmulti").text("");
				$("#multi-form").submit();
			}
		} else {
			$("#multi2fromerror").text("");
			$("#multi1toerror").text("");
			$("#multi2fromerror").text("");
			$("#multi2toerror").text("");
			$("#multi3fromerror").text("");
			$("#multi3toerror").text("");
			$("#multi3departerror").text("");
			$("#multi4fromerror").text("");
			$("#multi4toerror").text("");
			$("#multi4departerror").text("");
			$(".errorsmulti").text("");
			$("#multi-form").submit();
		}

	} else {
		$("#multi-form").submit();
	}

}

function AddErrRooms(element) {
	var totalErooms = $('#totalErooms').val();		
	$('#totalroomEtext').text(totalErooms);
	
	$('#totalpeopleEtext').text(totalErooms);
	
	var addrooms = "";
	$('.hotel-Erepeatadd').html("");
	for (var i = 0; i < parseInt(totalErooms - 1); i++) {		
		var index = i + 2;
		addrooms += "<div class='row' id='rowidE"+index+"' ><div class='col-md-4 col-sm-2 clearfix rooms-multiple'><p class='Ero-heading'>Room "
		+ index
		+ ":</p></div><div class='col-md-4 col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Adult(s)</label><div class='input-group'> <select class='form-control' name='Adults"
		+ index
		+ "' id='RoomEAdult"
		+ index
		+ "' autocomplete='off' required onchange='ChangeRoomEChild("
		+ index
		+ ")'><option selected='selected'>1</option><option>2</option><option>3</option><option>4</option></select></div></div></div>"
		+ "<div class='col-md-4 col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Child(s)</label><div class='input-group'><select class='form-control' id='eChilds"
		+ index
		+ "' name='eChilds"
		+ index
		+ "' autocomplete='off' required onchange='InsertEAge("
		+ index
		+ ")'><option>0</option> <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div></div><div id='childErow"+index+"' class='col-sm-12'></div></div>"

	}
	$('.hotel-Erepeatadd').append(addrooms);
	
	FirstRoomChangeErrChild();
	
}
function setoldvalue(element){
	   element.setAttribute("oldvalue",this.value);
	}

function InsertEAge(rowindex) {
	var total = $('#eChilds' + rowindex).val();
	var totalErooms = $('#totalErooms').val();
	if (totalErooms == 1) {
		$('#totalchildEtext').text(parseInt(total));
	}
	if (totalErooms == 2)
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val()));
	if (totalErooms == 3)
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val()));
	if (totalErooms == 4)
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val()));
	if (totalErooms == 5)
		$('#totalpeopleEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val())
				+ parseInt($('#eChilds5').val()));
	if (totalErooms == 6)
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val()) 
				+ parseInt($('#eChilds4').val())
				+ parseInt($('#eChilds5').val())
				+ parseInt($('#eChilds6').val()));

	var addages = "";
	$('#childErow' + rowindex).html("");
	for (var i = 0; i < parseInt(total); i++) {
		addages += "<div class='col-sm-2 clearfix AgeDivWidth' id='c-Eage' ><div class='form-group'><label for='inputGroupSuccess2'>Age "
			+ (i + 1)
			+ "</label><div class='input-group'><select class='form-control' id='Eroom"+rowindex+"EAge"+(i+1)+"' name='Age"+rowindex+"' autocomplete='off' required><option value='1'>< 1</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option> </select></div></div></div>";
	}		
	//var firstcol = "<div class='col-sm-2 '></div>";
	//$('#childErow' + rowindex).append(firstcol);
	$('#childErow' + rowindex).append(addages);
}
function ChangeRoomEChild(roomindex) {
	var totaladult = $('#RoomEAdult' + roomindex).val();
	var totalErooms = $('#totalErooms').val();
	$('#eChilds' + roomindex).html("");
	console.log("roomindex",roomindex);
	console.log("totaladult",totaladult);
	if (totaladult == '1') {

		var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option> ";
		$('#eChilds' + roomindex).append(option);
		console.log("$('#eChilds' + roomindex).append(option)",$('#eChilds' + roomindex).append(option));
	}
	if (totaladult == '2') {
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
		$('#eChilds' + roomindex).append(option);
	}
	if (totaladult == '3') {
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		$('#eChilds' + roomindex).append(option);
	}
	if (totaladult == '4') {
		var option = "<option>0</option><option>1</option><option>2</option>";
		$('#eChilds' + roomindex).append(option);
	}
	$('#childErow' + roomindex).html("");
	if (totalErooms == 1) {
		$('#totalpeopleEtext').text(parseInt(totaladult));
		$('#totalchildEtext').text(parseInt($('#eChilds').val()));
	}
	if (totalErooms == 2) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val()));
	}
	if (totalErooms == 3) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val())
				+ parseInt($('#RoomEAdult3').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val()));
	}

	if (totalErooms == 4) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val())
				+ parseInt($('#RoomEAdult3').val())
				+ parseInt($('#RoomEAdult4').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val()));
	}

	if (totalErooms == 5) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val())
				+ parseInt($('#RoomEAdult3').val())
				+ parseInt($('#RoomEAdult4').val())
				+ parseInt($('#RoomEAdult5').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val())
				+ parseInt($('#eChilds5').val()));
	}
	if (totalErooms == 6) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val())
				+ parseInt($('#RoomEAdult3').val())
				+ parseInt($('#RoomEAdult4').val())
				+ parseInt($('#RoomEAdult5').val())
				+ parseInt($('#RoomEAdult6').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val())
				+ parseInt($('#eChilds5').val())
				+ parseInt($('#eChilds6').val()));
	}
}

function FirstrowEChildchange(rowindex) {
	var total = $('#eChilds').val();
	var totalErooms = $('#totalErooms').val();
	if (totalErooms == 1) {
		$('#totalchildEtext').text(parseInt(total));
	}
	if (totalErooms == 2)
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val()));
	if (totalErooms == 3)
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds2').val()));
	if (totalErooms == 4)
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val()));
	if (totalErooms == 5)
		$('#totalpeopleEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val()));
	if (totalErooms == 6)
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val())
				+ parseInt($('#eChilds5').val()));		
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
function FirstRoomChangeErrChild() {
	var totaladult = $('#RoomEAdult1').val();
	var totalpeoplelength = $('#totalpeopleEtext').text();
	var totalErooms = $('#totalErooms').val();

	$('#eChilds').html("");
	if (totaladult == '1') {

		var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>";
		$('#eChilds').append(option);
		
	}
	if (totaladult == '2') {
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
		$('#eChilds').append(option);
	}
	if (totaladult == '3') {
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		$('#eChilds').append(option);
	}
	if (totaladult == '4') {
		var option = "<option>0</option><option>1</option><option>2</option>";
		$('#eChilds').append(option);
	}
	$('.Room1Child1').hide();
	$('.Room1Child2').hide();
	$('.Room1Child3').hide();
	$('.Room1Child4').hide();
	$('.Room1Child5').hide();

	if (totalErooms == 1) {
		$('#totalpeopleEtext').text(parseInt(totaladult));
		$('#totalchildEtext').text(parseInt($('#eChilds').val()));
	}
	if (totalErooms == 2) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val()));
	}
	if (totalErooms == 3) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val())
				+ parseInt($('#RoomEAdult3').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val()));
	}

	if (totalErooms == 4) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val())
				+ parseInt($('#RoomEAdult3').val())
				+ parseInt($('#RoomEAdult4').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val()));
	}

	if (totalErooms == 5) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val())
				+ parseInt($('#RoomEAdult3').val())
				+ parseInt($('#RoomEAdult4').val())
				+ parseInt($('#RoomEAdult5').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val())
				+ parseInt($('#eChilds5').val()));
	}
	if (totalErooms == 6) {
		$('#totalpeopleEtext').text(
				parseInt($('#RoomEAdult1').val())
				+ parseInt($('#RoomEAdult2').val())
				+ parseInt($('#RoomEAdult3').val())
				+ parseInt($('#RoomEAdult4').val())
				+ parseInt($('#RoomEAdult5').val())
				+ parseInt($('#RoomEAdult6').val()));
		$('#totalchildEtext').text(
				parseInt($('#eChilds').val())
				+ parseInt($('#eChilds2').val())
				+ parseInt($('#eChilds3').val())
				+ parseInt($('#eChilds4').val())
				+ parseInt($('#eChilds5').val())
				+ parseInt($('#eChilds6').val()));
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
$('ul.dropdown-menu.mega-dropdown-menu').on('change', function(event){    
	event.stopPropagation();

});


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


/*TRavellerChanges*/

$( document ).ready(function() {
	 jQuery.noConflict()(function($){
	
	 $('.btn-E2number').click(function(e){
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
						if(fieldName == "adultEid"){
							$('#hiddenadult').val(parseInt(currentVal) - 1);           	  

							$('#infantEid').attr('max',parseInt(currentVal) - 1);  
							if(parseInt($('#infantEid').text()) > 0)
								$('#totalEtraveller').text(parseInt($('#totalEtraveller').text()) - parseInt($('#infantEid').text()) );

							$('#infantEid').text(0);  
						}

						if(fieldName == "kidEid")
							$('#hiddenkid').val(parseInt(currentVal) - 1); 
						if(fieldName == "infantEid")
							$('#hiddeninfant').val(parseInt(currentVal) - 1);

						var total =  $('#totalEtraveller').text();
						$('#totalEtraveller').text(parseInt(total) -1);
					} 
					if(input.text() == input.attr('min')) {
						$(this).attr('disabled', true);
					}

				} else if(type == 'plus') {
					//var totallist =  $('#totalEtraveller').text();
					var adultcount =  parseInt($('#hiddenadult').val());
					var childcount =  parseInt($('#hiddenkid').val());


					if((adultcount+childcount) <= 8)
					{

						if(parseInt(currentVal) < input.attr('max')) {
							//console.log('here' +input);
							input.text(parseInt(currentVal) + 1).change();  
							if(fieldName == "adultEid"){

								$('#hiddenadult').val(parseInt(currentVal) + 1);   
								if(parseInt($('#infantEid').text()) > 0)
									$('#totalEtraveller').text(parseInt($('#totalEtraveller').text()) - parseInt($('#infantEid').text()) );
								$('#infantEid').text(0);  
								$('#infantEid').attr('max',parseInt(currentVal) + 1);  


							}                	
							if(fieldName == "kidEid"){

								$('#hiddenkid').val(parseInt(currentVal) + 1); 
							}            

							if(fieldName == "infantEid"){  
								$('#hiddeninfant').val(parseInt(currentVal) + 1);
							}


							var total =  $('#totalEtraveller').text();
							$('#totalEtraveller').text(parseInt(total) +1);

						}		

					}			
					if((adultcount+childcount) == 9 && adultcount <= parseInt($('#infantEid').attr('max'))){

						if(parseInt(currentVal) < input.attr('max')) {
							if(fieldName == "infantEid"){      
								input.text(parseInt(currentVal) + 1).change();  
								$('#hiddeninfant').val(parseInt(currentVal) + 1);
								var total =  $('#totalEtraveller').text();
								$('#totalEtraveller').text(parseInt(total) +1);
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
		$('ul.dropdown-menu.mega-dropdown-menu').on('change', function(event){    
			event.stopPropagation();

		});


		$('.input-number').focusin(function(){
			$(this).data('oldValue', $(this).val());
		});
		$('.input-number').change(function() {

			minValue =  parseInt($(this).attr('min'));
			maxValue =  parseInt($(this).attr('max'));
			valueCurrent = parseInt($(this).text());

			name = $(this).attr('id');
			if(parseInt(valueCurrent) >= minValue) {
				$(".btn-E2number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
			} else {
				alert('Sorry, the minimum value was reached');
				$(this).text($(this).data('oldValue'));
			}
			if(parseInt(valueCurrent) <= maxValue) {
				$(".btn-E2number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
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
	 });
});

$(document).ready(function(){
    $('#modifybutton').click(function(event){
        event.stopPropagation();
         $("#content").slideToggle("slow");
         $('.errorBody').toggleClass ("whiteBackground", 1000, "easeOutSine")
       
    });
    $("#content").on("click", function (event) {
        event.stopPropagation();
    });
});

/*$(document).on("click", function () {
    $("#content").hide();
    
});*/
