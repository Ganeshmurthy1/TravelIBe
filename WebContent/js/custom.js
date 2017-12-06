
$(document).ready(function(){  


	$(document).ready(function() {
		$.material.init();


	});
	$(document).ready(function() {
		//Grid.init();
	});
	$(function(){

		var values = new Array();

		$(document).on('change', '.form-group-multiple-selects .input-group-multiple-select:last-child select', function(){

			var selectsLength = $('.form-group-multiple-selects .input-group-multiple-select select').length;
			var optionsLength = ($(this).find('option').length)-1;

			if(selectsLength < optionsLength){
				var sInputGroupHtml = $(this).parent().html();
				var sInputGroupClasses = $(this).parent().attr('class');
				$(this).parent().parent().append('<div class="'+sInputGroupClasses+'">'+sInputGroupHtml+'</div>');  
			}

			updateValues();

		});

		$(document).on('change', '.form-group-multiple-selects .input-group-multiple-select:not(:last-child) select', function(){

			updateValues();

		});

		$(document).on('click', '.input-group-addon-remove', function(){
			$(this).parent().remove();
			updateValues();
		});

		function updateValues()
		{
			values = new Array();
			$('.form-group-multiple-selects .input-group-multiple-select select').each(function(){
				var value = $(this).val();
				if(value != 0 && value != ""){
					values.push(value);
				}
			});

			$('.form-group-multiple-selects .input-group-multiple-select select').find('option').each(function(){
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




	$('#twodpd1').datepicker({
		numberOfMonths: 2,
		firstDay: 1,
		dateFormat: 'mm-dd-yy',
		minDate: '0',
		maxDate: '+2Y',
		onSelect: function(dateStr) {
			var d1 = $(this).datepicker("getDate");
			d1.setDate(d1.getDate() + 0); // change to + 1 if necessary
			var d2 = $(this).datepicker("getDate");
			d2.setDate(d2.getDate() + 30); // change to + 29 if necessary
			$("#twodpd2").datepicker("setDate", null);
			$("#twodpd2").datepicker("option", "minDate", d1);
			$("#twodpd2").datepicker("option", "maxDate", d2);

		},
		onClose : function(dateSt)
		{
			$("#twodpd2").focus();	
		}
	});

	$("#twodpd2").datepicker({
		numberOfMonths: 2,
		firstDay: 1,
		dateFormat: 'mm-dd-yy',
		minDate: '0',
		maxDate: '+2Y',
		onSelect: function(dateStr) {

		}
	});



	var dates = $("#onedpd").datepicker({  
		minDate : 0,
		dateFormat: 'mm-dd-yy',
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

	var multidates = $("#multidate1,#multidate2,#multidate3,#multidate4,#multidate5").datepicker({  
		minDate : 0,
		dateFormat: 'mm-dd-yy',
		numberOfMonths: 2,
		onSelect: function(date) {
			for(var i = 0; i < multidates.length; ++i) {			        	
				if(multidates[i].id < this.id)
					$(multidates[i]).datepicker('option', 'maxDate', date);
				else if(multidates[i].id > this.id)
					$(multidates[i]).datepicker('option', 'minDate', date);
			}
		} 

	});

	/*function AddCities(){

		var rowCount = $('#Multicitydivs > #city:visible').length;
		//console.log(rowCount);
		var addlist = '';

		if(rowCount == 2){
			$(".city3").css('display','block');
		}
		if(rowCount == 3){
			$(".city4").css('display','block');
			$("#col3").css('display','none');
		}
		if(rowCount == 4){
			$(".city5").css('display','block');
			$("#col4").css('display','none');
			$(".rowButton").css('display','none');
		}


	}  */       

	$(document).ready(function(){      	 


		$('body').on('click', '#Multicitydivs > #city #col3', function() {

			$('#Multicitydivs .city3').css('display','none');
		});
		$('body').on('click', '#Multicitydivs > #city #col4', function() {

			$('#Multicitydivs .city4').css('display','none');
			$("#col3").css('display','block');
		});
		$('body').on('click', '#Multicitydivs > #city #col5', function() {

			$('#Multicitydivs .city5').css('display','none');
			$("#col4").css('display','block');
			$(".rowButton").css('display','block');

		});
	});


	$(document).on('click', '.accordion', function(event) {
		event.stopPropagation();
		var $this = $(this);
		var parent = $this.data('parent');
		var actives = parent && $(parent).find('.collapse.in');
		var href = '#'; 
		var hasData = '#'; 

		if (actives && actives.length) {
			hasData = actives.data('collapse');			
			actives.collapse('hide');
		}

		make_minus = false;  
		if($this.find('.fa').hasClass('fa-plus'))
		{
			make_minus = true;
		}

		$('.fa-minus').removeClass('fa-minus').addClass('fa-plus');

		if(make_minus)
		{
			$this.find('.fa').removeClass('fa-plus').addClass('fa-minus');
		}


		var target = $this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7


		$(target).collapse('toggle');
	})

$(document).on('click', '.btn-number', function(e) {
		e.preventDefault();

		fieldName = $(this).attr('data-field');
		type      = $(this).attr('data-type');
		var input = $("input[name='"+fieldName+"']");
		//console.log(input.attr('class'));
		var currentVal = parseInt(input.val());
		if (!isNaN(currentVal)) {
			if(type == 'minus') {

				if(currentVal > input.attr('min')) {
					var totallist =  $('#totaltraveller').val();
		              if(totallist <= 8)
		             {
					
					if(input.attr('class') == 'form-control input-number flightadult'){
						input.val(currentVal - 1).change();	
						
					}
					if(input.attr('class') == 'form-control input-number flightchild'){
						input.val(currentVal - 1).change();						
					}
					if(input.attr('class') == 'form-control input-number flightinfant'){
						input.val(currentVal - 1).change();						
					}
					var total =  $('#totaltraveller').val();
		             $('#totaltraveller').val(parseInt(total) +1);
		             }
					if(input.attr('class') == 'form-control input-number rooms'){
						input.val(currentVal - 1).change();
						AddRooms();
					}					
					if(input.attr('class') == 'form-control input-number child'){
						input.val(currentVal - 1).change();
						 FirstrowChildchange('1');
					} 
					if(input.attr('class') == 'form-control input-number Childs2'){
						input.val(currentVal - 1).change();
						//console.log('InsertAge');
						InsertAge('2');
					} 
					if(input.attr('class') == 'form-control input-number Adult'){
						input.val(currentVal - 1).change();
						 $('#Room1Adult').val(input.val());
						var totaladult= $('#Room1Adult').val();
						//console.log('totaladult' +totaladult);
						if(totaladult == '1')
						{						
							$("input[name='Childs1']").attr('max','3');
							$("input[name='Childs1']").val(0).change();
						}
						else if(totaladult == '2')
					    {
						$("input[name='Childs1']").attr('max','2');
						$("input[name='Childs1']").val(0).change();
					   }
						else if(totaladult == '3')
					  {
						$("input[name='Childs1']").attr('max','1');
						$("input[name='Childs1']").val(0).change();
					  }
					  else if(totaladult == '4')
					   {
						$("input[name='Childs1']").attr('max','0');
						$("input[name='Childs1']").val(0).change();
					   }
					  else
						  {
						  $("input[name='Childs1']").attr('max','3');
							$("input[name='Childs1']").val(0).change();
						  }
						
						$('.Room1Child1').hide();
						$('.Room1Child2').hide();
						$('.Room1Child3').hide();
					} 
					if(input.attr('class') == 'form-control input-number Adults2'){
						input.val(currentVal - 1).change();
						 $('#RoomAdult2').val(input.val());
						var totaladult= $('#RoomAdult2').val();
						//console.log('Adults2 ' +totaladult);
						if(totaladult == '1')
						{						
							$("input[name='Childs2']").attr('max','3');
							$("input[name='Childs2']").val(0).change();
						}
						else if(totaladult == '2')
					    {
						$("input[name='Childs2']").attr('max','2');
						$("input[name='Childs2']").val(0).change();
					   }
						else if(totaladult == '3')
					  {
						$("input[name='Childs2']").attr('max','1');
						$("input[name='Childs2']").val(0).change();
					  }
					  else if(totaladult == '4')
					   {
						$("input[name='Childs2']").attr('max','0');
						$("input[name='Childs2']").val(0).change();
					   }
					  else
						  {
						  $("input[name='Childs2']").attr('max','3');
							$("input[name='Childs2']").val(0).change();
						  }
						
						$('.Room2Child1').hide();
						$('.Room2Child2').hide();
						$('.Room2Child3').hide();
					}
					if(input.attr('class') == 'form-control input-number Adults3'){
						input.val(currentVal - 1).change();
						var totaladult= $('#RoomAdult3').val();
						if(totaladult == '1')
						{						
							$("input[name='Childs2']").attr('max','3');
							$("input[name='Childs2']").val(0).change();
						}
						else if(totaladult == '2')
					    {
						$("input[name='Childs2']").attr('max','2');
						$("input[name='Childs2']").val(0).change();
					   }
						else if(totaladult == '3')
					  {
						$("input[name='Childs2']").attr('max','1');
						$("input[name='Childs2']").val(0).change();
					  }
					  else if(totaladult == '4')
					   {
						$("input[name='Childs2']").attr('max','0');
						$("input[name='Childs2']").val(0).change();
					   }
					  else
						  {
						  $("input[name='Childs2']").attr('max','3');
							$("input[name='Childs2']").val(0).change();
						  }
						
						$('.Room2Child1').hide();
						$('.Room2Child2').hide();
						$('.Room2Child3').hide();
					}
				} 
				if(parseInt(input.val()) == input.attr('min')) {
					$(this).attr('disabled', true);
				}
			} else if(type == 'plus') {
				
				if(currentVal < input.attr('max')) {
					var totallist =  $('#totaltraveller').val();
		              if(totallist <= 8)
		             {
					
					if(input.attr('class') == 'form-control input-number flightadult'){
						input.val(currentVal + 1).change();	
						
					}
					if(input.attr('class') == 'form-control input-number flightchild'){
						input.val(currentVal + 1).change();						
					}
					if(input.attr('class') == 'form-control input-number flightinfant'){
						input.val(currentVal + 1).change();						
					}
					var total =  $('#totaltraveller').val();
		             $('#totaltraveller').val(parseInt(total) +1);
		             }
					if(input.attr('class') == 'form-control input-number rooms'){
						input.val(currentVal + 1).change();
						AddRooms();
					}					
					if(input.attr('class') == 'form-control input-number child'){
						input.val(currentVal + 1).change();
						 FirstrowChildchange('1');
					} 
					if(input.attr('class') == 'form-control input-number Childs2'){
						input.val(currentVal + 1).change();
						//console.log('InsertAge');
						InsertAge('2');
					} 
					if(input.attr('class') == 'form-control input-number Adult'){
						input.val(currentVal + 1).change();
						 $('#Room1Adult').val(input.val());
						var totaladult= $('#Room1Adult').val();
						//console.log('totaladult' +totaladult);
						if(totaladult == '1')
						{						
							$("input[name='Childs1']").attr('max','3');
							$("input[name='Childs1']").val(0).change();
						}
						else if(totaladult == '2')
					    {
						$("input[name='Childs1']").attr('max','2');
						$("input[name='Childs1']").val(0).change();
					   }
						else if(totaladult == '3')
					  {
						$("input[name='Childs1']").attr('max','1');
						$("input[name='Childs1']").val(0).change();
					  }
					  else if(totaladult == '4')
					   {
						$("input[name='Childs1']").attr('max','0');
						$("input[name='Childs1']").val(0).change();
					   }
					  else
						  {
						  $("input[name='Childs1']").attr('max','3');
							$("input[name='Childs1']").val(0).change();
						  }
						
						$('.Room1Child1').hide();
						$('.Room1Child2').hide();
						$('.Room1Child3').hide();
					} 
					if(input.attr('class') == 'form-control input-number Adults2'){
						input.val(currentVal + 1).change();
						 $('#RoomAdult2').val(input.val());
						var totaladult= $('#RoomAdult2').val();
						//console.log('Adults2 ' +totaladult);
						if(totaladult == '1')
						{						
							$("input[name='Childs2']").attr('max','3');
							$("input[name='Childs2']").val(0).change();
						}
						else if(totaladult == '2')
					    {
						$("input[name='Childs2']").attr('max','2');
						$("input[name='Childs2']").val(0).change();
					   }
						else if(totaladult == '3')
					  {
						$("input[name='Childs2']").attr('max','1');
						$("input[name='Childs2']").val(0).change();
					  }
					  else if(totaladult == '4')
					   {
						$("input[name='Childs2']").attr('max','0');
						$("input[name='Childs2']").val(0).change();
					   }
					  else
						  {
						  $("input[name='Childs2']").attr('max','3');
							$("input[name='Childs2']").val(0).change();
						  }
						
						$('.Room2Child1').hide();
						$('.Room2Child2').hide();
						$('.Room2Child3').hide();
					}
					if(input.attr('class') == 'form-control input-number Adults3'){
						input.val(currentVal + 1).change();
						var totaladult= $('#RoomAdult3').val();
						if(totaladult == '1')
						{						
							$("input[name='Childs2']").attr('max','3');
							$("input[name='Childs2']").val(0).change();
						}
						else if(totaladult == '2')
					    {
						$("input[name='Childs2']").attr('max','2');
						$("input[name='Childs2']").val(0).change();
					   }
						else if(totaladult == '3')
					  {
						$("input[name='Childs2']").attr('max','1');
						$("input[name='Childs2']").val(0).change();
					  }
					  else if(totaladult == '4')
					   {
						$("input[name='Childs2']").attr('max','0');
						$("input[name='Childs2']").val(0).change();
					   }
					  else
						  {
						  $("input[name='Childs2']").attr('max','3');
							$("input[name='Childs2']").val(0).change();
						  }
						
						$('.Room2Child1').hide();
						$('.Room2Child2').hide();
						$('.Room2Child3').hide();
					}					
				}
				if(parseInt(input.val()) == input.attr('max')) {
					$(this).attr('disabled', true);
				}
	             
			}
		} else {
			input.val(0);
		}

		$('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event){    
			event.stopPropagation();
		});

	});
	$('.input-number').focusin(function(){
		$(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(function() {

		minValue =  parseInt($(this).attr('min'));
		maxValue =  parseInt($(this).attr('max'));
		valueCurrent = parseInt($(this).val());

		name = $(this).attr('name');
		if(valueCurrent >= minValue) {
			AddRooms();
			$(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the minimum value was reached');
			$(this).val($(this).data('oldValue'));
		}
		if(valueCurrent <= maxValue) {
			AddRooms();
			$(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
		} else {
			alert('Sorry, the maximum value was reached');
			$(this).val($(this).data('oldValue'));
		}


	});
	$(".input-number").keydown(function (e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
				(e.keyCode == 65 && e.ctrlKey === true) || 
				(e.keyCode >= 35 && e.keyCode <= 39)) {
			return;
		}
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
});
$("label.block").click(function() {        
	$(this).find('input:radio').attr('checked', true);
	$(this).css({ 'backgroundColor': "#D56100" ,'color': "#fff"});    
});
function FirstrowChildchange(rowindex)
{
	
	var total = $('#Childs').val();
	//console.log(total);
	if(total == '0')
	{
	$('.Room1Child1').hide();
	$('.Room1Child2').hide();
	$('.Room1Child3').hide();
	}
	
	if(total == '1')
		{
		$('.Room1Child1').show();
		$('.Room1Child2').hide();
		$('.Room1Child3').hide();
		}
	if(total == '2')
	{
	$('.Room1Child1').show();
	$('.Room1Child2').show();
	$('.Room1Child3').hide();
	}
	if(total == '3')
	{
	$('.Room1Child1').show();
	$('.Room1Child2').show();
	$('.Room1Child3').show();
	}
	
	
}
function FirstRoomChangeChild()
{
	var totaladult= $('#Room1Adult').val();
	//console.log(totaladult);
	$('#Childs').html("");
	if(totaladult == '1')
		{
		
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		$('#Childs').append(option);
		}
	if(totaladult == '2')
	{
	var option = "<option>0</option><option>1</option><option>2</option>";
	$('#Childs').append(option);
	}
	if(totaladult == '3')
	{
	var option = "<option>0</option><option>1</option>";
	$('#Childs').append(option);
	}
	if(totaladult == '4')
	{
	var option = "<option>0</option>";
	$('#Childs').append(option);
	}
	
	$('.Room1Child1').hide();
	$('.Room1Child2').hide();
	$('.Room1Child3').hide();
}

function  ChangeRoomChild(roomindex)
{
	
	var totaladult= $('#RoomAdult'+roomindex).val();
	//console.log(totaladult);
	$('#Childs'+roomindex).html("");
	if(totaladult == '1')
		{
		
		var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		$('#Childs'+roomindex).append(option);
		}
	if(totaladult == '2')
	{
	var option = "<option>0</option><option>1</option><option>2</option>";
	$('#Childs'+roomindex).append(option);
	}
	if(totaladult == '3')
	{
	var option = "<option>0</option><option>1</option>";
	$('#Childs'+roomindex).append(option);
	}
	if(totaladult == '4')
	{
	var option = "<option>0</option>";
	$('#Childs'+roomindex).append(option);
	}
	
	$('#childrow'+roomindex).html("");
	
}
function InsertAge(rowindex)
{
	//console.log(rowindex);
	var total = $('#Childs'+rowindex).val();
	//console.log('total' +total);
	var addages = "";
	$('#childrow'+rowindex).html("");
	for(var i=0;i<parseInt(total);i++)
	{
		addages += "<div class='age-selection'><div class='col-sm-4 clearfix'><div class='form-group  col-sm-6'><label for='inputGroupSuccess1'>child 1</label><div class='input-group  col-xs-12'><select class='form-control' name='values[]'><option value=''>age</option><option value='1'>1</option><option value='2'>2</option><option value='3'>3</option><option value='4'>4</option><option value='5'>5</option><option value='6'>6</option><option value='7'>7</option><option value='8'>8</option><option value='9'>9</option><option value='10'>10</option><option value='11'>11</option></select></div></div></div></div>";
	}
	$('#childrow'+rowindex).append(addages);
}