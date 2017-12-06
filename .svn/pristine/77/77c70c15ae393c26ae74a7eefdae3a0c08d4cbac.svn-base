$(function() {
	var citylist = [];
	loadstations();
});

function loadstations()
{ 
	$.getJSON( 'hotel-city.json', {
		format: "json"
	})
	.error(function() { 
		//console.log("error");
	$.getJSON( 'resources/Apicredential.properties', {

		format: "json"
	})
	.done(function( data ) {		
		//console.log(data);
		var apiUrl = data.ApiURL +"cities/search?";
		$.ajax({
			url : apiUrl,
			dataType : 'json',
			type : 'GET',
			async : true,
			statusCode : {
				404 : function(data) {
					// alert(404);
				},
				200 : function(data) {
					//alert(data);
					//console.log(data);

					citylist = [];
					citymap = [];
					$.each(data.areas, function( i, value) {        
						citylist.push(value.name); 
						citymap[value.name] = value.id;
						//citylist.push("<"+value.id+">"+value.name);
						//console.log(value.name);
					});

					$("#hotelcity").autocomplete({
						source: function( request, response ) {
							var matcher = new RegExp( '^' + $.ui.autocomplete.escapeRegex( request.term ), "gi" );
							response( $.grep( citylist, function( item ){
								//console.log(item);					
								var itemavailavle = item;					
								//itemavailavle = "dfdf";
								//process the item to get only name
								//return itemavailavle;
								return matcher.test( item );
								//return "dsdsd";
							}).slice(0, 15) );
						},
						select: function (event, ui) {				
							var label = ui.item.label;
							var value = ui.item.value;					
							var citycode = citymap[ui.item.value];
							$('#datain').focus();
							//console.log("##############3 selected city name   "+ui.item.value);
							//console.log("##############3 selected city id  "+citycode);
							$('#citycode').val(citycode);
							//$('#citycode').value = citycode;
						}

					});  

				}
			},
			error : function(jqXHR, status, errorThrown) {
				//  alert('error');
			}
		});
	})





	})
	.done(function( data ) {		
		//console.log(data);		
		citylist = [];
		citymap = [];
		$.each(data.areas, function( i, value) {        
			citylist.push(value.name); 
			citymap[value.name] = value.id;
			
		});
		$("#hotelcity").autocomplete({
			source: function( request, response ) {
				var matcher = new RegExp( $.ui.autocomplete.escapeRegex( request.term ), "gi" );
				response( $.grep( citylist, function( item ){
					//console.log(item);					
					var itemavailavle = item;					
					return matcher.test( item );
					//return "dsdsd";
				}).slice(0, 15) );
			},
			select: function (event, ui) {				
				var label = ui.item.label;
				var value = ui.item.value;					
				var citycode = citymap[ui.item.value];
				$('#datain').focus();
				$('#citycode').val(citycode);
			}
		});  		
	});

}