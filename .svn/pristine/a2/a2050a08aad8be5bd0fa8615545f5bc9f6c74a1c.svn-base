
/*enquiry form page*/
         
      /*register page*/
      
      
     
$(document).on("click", "#regisub", signupClick);

function signupClick() {
	 
	if($('#registerForm')[0].checkValidity()){ 
	   var fname = $("#fname").val();
    var lname = $("#lname").val();
    var password = $("#pass").val();
    var mail = $("#mail").val();
    var mobile = $("#mob").val();
    var phone = $("#ph").val();
    var address = $("#address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var country = $("#country").val();
    var zipcode=$("#zipcode").val();
    // note that this also contains the response entries                      
    var totUrl = $(location).attr('href');
  	//console.log(totUrl);
  	var newUrl = totUrl.substr(0, totUrl.lastIndexOf('/#/') + 1);
		var finalUrl = newUrl+"FrontuserRegister";
    $.ajax({
        url: finalUrl,
        type: 'POST',
        dataType: 'json',
        data: {
      	  FirstName: fname,
      	  LastName: lname,
      	  Password: password,
      	  Email: mail,
      	  Mobile: mobile,
  		  Phone: phone,
  		  StreetAddress: address,
  		  City : city,
  		  State:state,
  		  Country: country,
  		  ZipCode: zipcode
		    },
        success: function (response) {
            handleResultregister(response); 
          
        },
			error: function(xhr, status, error)
			{
			
				 errhandleResultregister(error);
			}
        
    });
}else{
	  
}
}

function handleResultregister(response) {
    var status = response.status;
    var message = "register successfully";
    if (status === 0) {
  	  var totUrl = $(location).attr('href');
      	var newUrl = totUrl.substr(0, totUrl.lastIndexOf('/#/') + 1);
      	jQuery.noConflict();
      	jQuery("#regimessage").text(message);
      	 $('#sucessmsg').modal('show');
      	  var auto_refresh = setInterval(
      			  function ()
      			  {
      			     document.location.href=newUrl+"#/";
      			     location.reload();
      			  }, 1000)
        
    }
} 

function errhandleResultregister(response) {
    var status = response.status;
    var ermessage1 = " Registration Failed - Account already exist";
    var ermessage2 = " This email address may have been used in an account at tayyarah";

      	jQuery.noConflict();
      	jQuery("#errregimessage1").text(ermessage1);
      	jQuery("#errregimessage2").text(ermessage2);
      	 $('#errmsg').modal('show'); 
      	 
}
 

$(function() {    
   $('.login-pop-up, .b-cl, .b-ok').click(function(){
  	
      closePopup();
  });
   function closePopup(){
       $('.login-pop-up, .b-cl, .b-ok').hide(); //hide the overlay
   }
});


            $(document).ready(function(){
                $('#login-trigger').click(function() {
                    $(this).next('#login-content').slideToggle();
                    $(this).toggleClass('active');                    
                    
                    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
                        else $(this).find('span').html('&#x25BC;')
                    })
            });
            
            function isNumberKey(evt,obj){
                var charCode = (evt.which) ? evt.which : event.keyCode;
                if (charCode > 31 && (charCode < 48 || charCode > 57))   
               	
                    return false;
            }
            function isAlphabetKey(evt,textbox){
                evt = (evt) ? evt : window.event;
                 var charCode = (evt.which) ? evt.which : evt.keyCode;
                 if(textbox.value.trim() == ''){
                 	if(charCode == 32)
                 	       return false;
                 }
                 if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
                     return false;
                 }             
                 return true;
                 }
            function isAlphabetKeywithspace(evt,textbox){
                evt = (evt) ? evt : window.event;
                 var charCode = (evt.which) ? evt.which : evt.keyCode;
                 if (charCode > 32 && (charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
                     return false;
                 }             
                 return true;
                 }
            
            
           /* Profile page*/
            
            $(document).on("click", "#profileupdate", updateClick);
            $(document).on("click", "#corporateprofileupdate", updateClick);

            function updateClick() {
          	if($('#Userupdate')[0].checkValidity()){  
          	   var fname = $("#fname").val();
                var lname = $("#lname").val();
                var password = $("#pass").val();
                var mail = $("#mail").val();
                var mobile = $("#mob").val();
                var phone = $("#ph").val();
                var address = $("#address").val();
                var city = $("#city").val();
                var state = $("#state").val();
                var country = $("#country").val();
                var zipcode=$("#zipcode").val();
                // note that this also contains the response entries                      
                var totUrl = $(location).attr('href');
              	//console.log(totUrl);
              	var newUrl = totUrl.substr(0, totUrl.lastIndexOf('/#/') + 1);
            		var finalUrl = newUrl+"UpdateProfile";
            		
                $.ajax({
                    url: finalUrl,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                  	  FirstName: fname,
                  	  LastName: lname,
                  	  Password: password,
                  	  Email: mail,
                  	  Mobile: mobile,
              		  Phone: phone,
              		  StreetAddress: address,
              		  City : city,
              		  State:state,
              		  Country: country,
              		  ZipCode: zipcode
          		    },
                    success: function (response) {
                      handleResultprofile(response); 
                      
                    },
          			error: function(xhr, status, error)
          			{
          				// $("#myDialog").dialog("open");
          				 errhandleResultprofile(error);
          			}
                    
                });
            }else{
          	  
            }
            }

            function handleResultprofile(response) {
                var status = response.status;
                var message = "Profile Update Successfully";
                if (status === 0) {
              	  var totUrl = $(location).attr('href');
                  	var newUrl = totUrl.substr(0, totUrl.lastIndexOf('/#/') + 1);
                  	jQuery.noConflict();
                  	jQuery("#updatemessage").text(message);
                  	 $('#updatestatus').modal('show');
                  	  var auto_refresh = setInterval(
                  			  function ()
                  			  {
                  				  location.reload();
                  			  }, 1000)
                    
                }
            } 
           
            function errhandleResultprofile(response) {
                var status = response.status;
                var ermessage = " Please try Later";
                  	jQuery.noConflict();
                  	jQuery("#updatemessage").text(ermessage);
                  	 $('#updatestatus').modal('show'); 
                  	 
            }
         
      // scroll header for the flight
            
            $(window).scroll(function () {
            	var i = $('#nav');
            	var h = i.outerHeight(true);
            	if ($(window).scrollTop() > h) {
            		if (!i.hasClass('scroll-header')) i.hide().addClass('scroll-header').fadeIn("slow");
            	}
            	if ($(window).scrollTop() >= 250) {
            		i.slideDown('slow');
            	} else {
            		i.removeClass('scroll-header').show();
            	}
            });
            
            $(document).ready(function() {  
          	  $('#one, #searchrefine, #fare').iptOffCanvas({
              baseClass: 'offcanvas',
              type: 'left' 
            });
          }); 
  
 