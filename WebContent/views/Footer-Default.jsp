<%@taglib prefix="s" uri="/struts-tags"%>

<script src="js/featherlight.js"> </script>
<!-- START: FOOTER -->
<section id="footer">
	<footer>
		<div class="main-footer">
			<div class="container clear-padding">

				<div class="col-md-4 col-sm-12 about-box">
					<h4>About Us</h4>
					<p>Tayyarah.com today is one of the leading consolidator
						provider of consumer-direct travel services in India. Based in
						Bangalore-India, Tayyarah.com is a one-stop-shop for all travel
						related services.</p>
					<a href="#/about" class="btn btn-info">READ MORE</a>
				</div>
				<div class="clearfix visible-sm-block"></div>
				<div class="col-md-4 col-sm-6 links">
					<h4>Our Services</h4>
					<ul>


						<li><a href="#/" data-ng-click="returnIndex()">Flight</a></li>
						<li><a href="#/hotel" data-ng-click="returnHotelIndex()">Hotel</a></li>
						<li><a href="#/EnquiryForm">Customized Holiday Packages</a></li>
						<li class="display-none"><a href="#" aria-controls="car"
							role="tab" data-toggle="tab">Car Rentals</a></li>
						<s:if test="#session['agent'] == null">
							<!-- <a href="#/AgentsLogin">B2B Login</a> -->

							<li id="login"><a data-toggle="modal"
								data-target="#welcomeagent" ng-click="b2blogin()"
								class="b2bHAnd">B2B Login </a>
								<div class="featherlight light" style="display: none;">
									<div class="featherlight-content">
										<span class="featherlight-close">X</span>
										<div class="lightbox featherlight-inner" id="logins">
											<div class="lioghead">Welcome</div>

											<div id="formwrapper">
												<div id="form-login">
													<%
													HttpSession sess = request.getSession(true);
													
													%>

												</div>
											</div>
										</div>
									</div>
								</div></li>

							<li id="login"><a data-toggle="modal"
								data-target="#welcomeagent" ng-click="corporatelogin()"
								class="b2bHAnd"> Corporate Login</a>
								<div class="featherlight light" style="display: none;">
									<div class="featherlight-content">
										<span class="featherlight-close">X</span>
										<div class="lightbox featherlight-inner" id="logins">
											<div class="lioghead">Welcome</div>

											<div id="formwrapper">
												<div id="form-login"></div>
											</div>
										</div>
									</div>
								</div></li>

						</s:if>

						<li class="display-none"><a href="#">Meetings &amp;
								Events</a></li>
						<li class="display-none"><a href="#">Off-Shore Services</a></li>
						<li class="display-none"><a href="#">Affiliate Program</a></li>
					</ul>
				</div>
				<div class="col-md-4 col-sm-6 contact-box">
					<h4>Contact Us</h4>
					<p class="clearfix">
						<i class="tayyarah-home4"></i> <span> # 19 "The Oyster",2nd
							floor, Nandi durga road, Jaymahal extension, Bengaluru-560046</span>
					</p>
					<p class="clearfix">
						<i class="tayyarah-phone"></i><span>+91-080-42855555</span>
					</p>
					<p>
						<a id="emailLnkfooter" href="#"><i class="tayyarah-envelope"></i>
							<span>care@tayyarah.com</span></a>
					</p>
				</div>
				<div class="clearfix"></div>
				<div class="col-md-12 text-center we-accept">
					<h4>We Accept</h4>
					<ul>
						<li><img src="images/card/mastercard.png" class="cards"
							alt="mastercard"></li>
						<li><img src="images/card/visa.png" alt="visa" class="cards"></li>
						<li><img src="images/card/american-express.png" alt="visa"
							class="cards"></li>
						<li><img class="payzapp" src="images/card/payzapp.png"
							alt="payzapp" class="cards"></li>
					</ul>

					<ul class="policy-links">
						<li><a href="#/Privacypolicy">Privacy policy</a></li>
						<li><a href="#/TermsandConditions">Terms and Conditions</a></li>
						<li><a href="#/Cancellation">Cancellation / Refund policy</a></li>
						<li><a href="#/Disclaimer">Disclaimer</a></li>
					</ul>


				</div>
			</div>
		</div>
		<div class="main-footer-nav ">
			<div class="container clear-padding">
				<div class="col-md-6 col-sm-6">
					<p>
						Copyright &copy; <span id="date"></span> Tayyarah.com. All Rights
						Reserved.
					</p>
				</div>
				<div class="col-md-6 col-sm-6 col-md-12 text-right mob320width">
					<a href="http://www.intellicommsolutions.com/">Powered by :
						Intellicomm Solutions and Enterprise Pvt Ltd</a>
				</div>
			</div>
		</div>
	</footer>
</section>


<div class="modal fade welcomemodel" id="welcomeagent" role="dialog">
	<div class="modal-dialog">
		<div class="modal-content">

			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal"
					data-ng-click="AddLogButton()">&times;</button>
				<h1 class="modal-title text-center">
					<div class="lioghead"> </div>					 
				</h1>
			</div>
			<div class="modal-body form-module">
				<!--  <div class="lioghead">Agent Login</div> -->
				<div id="formwrapper">
					<div id="form-login">

						<form class="form-horizontal" data-ng-submit="loginClick()">
							<fieldset id="inputs" class="lgi">
								<input type="hidden" id="isCorporate" value="">
								<div class="form-group label-floating">
									<label class="control-label" for="email">Email</label> <input
										type="email" id="hemail" name="Email"
										class="form-control input-sm floating-label"
										placeholder="Email" autocomplete="off" required>
								</div>
								<div class="form-group">
									<label class="control-label" for="password">Password</label> <input
										type="password" id="pass" name="Password"
										class="form-control input-sm floating-label"
										placeholder="Password" autocomplete="off" required>
								</div>
								<div class="form-group">
									<label class="control-label" for="password">Company ID</label>
									<input type="text" name="company_userid" id="companyid"
										class="form-control input-sm floating-label"
										placeholder="Company ID" autocomplete="off" required>
								</div>
								<div class="form-group">
									<div class="col-xs-12">
										<div class="row">
											<div class="text-right">
												<div class="cta">
													<div class="toggle">
														<!--  <a data-toggle="modal" data-target="#forgetPassword" data-ng-click="hidingModal()"><i class="tayyarah-times tayyarah-pencil" > Forgot your password?</i></a> -->
														<a href="javascript:void(0);"
															data-ng-click="hidingModal()"><i
															class="tayyarah-times tayyarah-pencil"></i> Forgot your
															password?</a>

													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="form-group text-center">
									<button type="submit" id="ibutton" class="btn btn-info btn-lg">
										Log In <span data-ng-show="loaderSpin" class="loaderSpan"><img
											id="removeImg" src="images/loginLoader.gif" width="20px" /></span>
									</button>
								</div>
							</fieldset>
						</form>
						<div class="row textRed" id="loginerror"></div>
						<%-- <span class="textRed" data-ng-bind="logmessage"></span> --%>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>
<div class="modal fade forgetmodal" id="forgetPassword" tabindex="-1"
	role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal">&times;</button>
				<!-- <h4 class="modal-title">Modal Header</h4> -->
				<div class="lioghead">Forgot Password</div>
			</div>
			<div class="modal-body form-module" style="padding-top: 10px;">
				<div id="formwrapper">
					<div id="form-login">
						<form class="form-horizontal" name="forgotForm">
							<fieldset class="form1">
								<div class="tog col-md-12">
									<span class="colorTextRed" id="messageerrorSpan"></span>
								</div>
								<div class="form-group label-floating">
									<label class="control-label" for="focusedInput1">Email</label>
									<input class="form-control" id="agentfemailid" type="email"
										placeholder="Your email address" required autocomplete="off"
										pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
										oninvalid="setCustomValidity('Email address not vaild')"
										onchange="try{setCustomValidity('')}catch(e){}">

								</div>
								<div class="form-group text-center">
									<button type="submit" id="forgetagentpassword"
										class="btn btn-info btn-lg">
										Send <span data-ng-show="loaderSpin" class="loaderSpan"><img
											src="images/loginLoader.gif" width="20px" /></span>
									</button>
								</div>
								<div class="tog">
									<div class="cta">
										<a data-ng-click="openLogin()"><i
											class="tayyarah-times tayyarah-chevron-left"></i> Back to
											Login</a>
									</div>
								</div>

							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>

	</div>
</div>
<div class="modal fade welcomemodel forgetmodal" id="sucessforgetmsg"
	tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
	aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">

			<div class="modal-body form-module">
				<button type="button" class="close" data-dismiss="forgetmodal">
					<span class="sr-only">Close</span>
				</button>

				<!--  <div class="lioghead"></div> -->


				<span class="btn btn-info btn-lg" id="messageSpan"></span>


			</div>
		</div>

	</div>
</div>

<!-- END: FOOTER -->

<script>
                    
                    
                 // Fixed header
            		//-----------------------------------------------
            		headerTopHeight = $(".header-top").outerHeight(),
            		headerHeight = $("header.header.fixed").outerHeight();
                
            		$(window).resize(function() {
            			if(($(this).scrollTop() < headerTopHeight + headerHeight -5 ) && ($(window).width() > 767)) {
            				headerTopHeight = $(".header-top").outerHeight(),
            				headerHeight = $("header.header.fixed").outerHeight();
            			}
            		});

            		$(window).scroll(function() {
            			if (($(".header.fixed:not(.fixed-before)").length > 0)  && !($(".transparent-header .slideshow").length>0)) {
            				if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
            					$("body").addClass("fixed-header-on");
            					$(".header.fixed:not(.fixed-before)").addClass('animated object-visible fadeInDown');
            					
            				} else {
            					$("body").removeClass("fixed-header-on");
            					
            					$(".header.fixed:not(.fixed-before)").removeClass('animated object-visible fadeInDown fixheader');
            				}
            			} else if ($(".header.fixed:not(.fixed-before)").length > 0) {
            				if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
            					$("body").addClass("fixed-header-on"); 
            					$(".header.fixed:not(.fixed-before)").addClass('animated object-visible fadeInDown fixheader');
            				} else {
            					$("body").removeClass("fixed-header-on");
            					$(".header.fixed:not(.fixed-before)").removeClass('animated object-visible fadeInDown fixheader');
            				}
            			};
            		});

            		$(window).scroll(function() {
            			if (($(".header.fixed.fixed-before").length > 0)  && !($(".transparent-header .slideshow").length>0)) {
            				if (($(this).scrollTop() > headerTopHeight) && ($(window).width() > 767)) {
            					 $("body").addClass("fixed-header-on"); 
            					$(".header.fixed.fixed-before").addClass('object-visible');
            					
            				} else {
            					 $("body").removeClass("fixed-header-on");
            					
            					$(".header.fixed.fixed-before").removeClass('object-visible');
            				}
            			} else if ($(".header.fixed.fixed-before").length > 0) {
            				if (($(this).scrollTop() > headerTopHeight) && ($(window).width() > 767)) {
            					 $("body").addClass("fixed-header-on"); 
            					$(".header.fixed.fixed-before").addClass('object-visible');
            				} else {
            					$("body").removeClass("fixed-header-on");
            					$(".header.fixed.fixed-before").removeClass('object-visible');
            				}
            			};
            		});

       
</script>
<script>
 
	   
	   var footHeight = $('#footer').height();	
	   
	 $(window).scroll(function() {   
		   if($(window).scrollTop() + $(window).height() > $(document).height()- footHeight) {
		        
		       $('#fixingPosition').removeClass('fixedPosition');
		   }else{
			   $('#fixingPosition').addClass('fixedPosition');
		   }
		});
	 
 
</script>
<script>
         $(document).ready(function() {
           $("#emailLnkfooter").attr('href',"mailto:care@tayyarah.com");
             });
         document.getElementById("date").innerHTML= new Date().getFullYear();

        
 </script>
<script src="js/tayycustom.js"></script>
<div class="livechat" style="position: fixed; bottom: 0px; right: 0px;">
	<div style="text-align: center; width: 201px; position: absolute">
		<div id="livezilla_tracking" style="display: none"></div>
	</div>	
	<script type="text/javascript">
  var script = document.createElement("script");
  script.async=true;
  script.type="text/javascript";
  var src = "https://tayyarah.com/livezilla/server.php?a=7353b&rqst=track&output=jcrpt&nse="+Math.random();
  setTimeout("script.src=src;document.getElementById('livezilla_tracking').appendChild(script)",1);
  </script>
	<noscript>
		<img src="https://tayyarah.com/livezilla/server.php?a=7353b&amp;rqst=track&amp;output=nojcrpt" width="0" height="0" style="visibility: hidden;" alt=""/>
	</noscript>
	<a href="javascript:void(window.open('https://tayyarah.com/livezilla/chat.php?a=74c4a','','width=610,height=760,left=0,top=0,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))"
		class="lz_cbl">
		<div style=" margin-top:2px; text-align:center; color:#fff">Tayyarah Live Chat</div>
	</a>
</div>

