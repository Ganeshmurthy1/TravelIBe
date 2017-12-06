<%-- <%@ page session="true" %>
${sessionScope}  --%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!-- Your site header -->
<div id="hdepe"></div>



<div class=" super-content">
	<!-- Advertise banner options come here -->
	<s:if test="#session.isCorporate == true">
		<div class=" clearfix">
			<div id="carousel-id" class="carousel slide carousel-fade"
				data-ride="carousel">

				<div class="carousel-inner">
					<div class="item ">
						<img alt="First slide" src="images/HD/cor1.jpg">
					</div>
					<div class="item">
						<img alt="First slide" src="images/HD/cor2.jpg">
					</div>
					<div class="item">
						<img alt="First slide" src="images/HD/cor3.jpg">
					</div>
					<div class="item active">
						<img alt="First slide" src="images/HD/bus.jpg">
					</div>
				</div>

			</div>
		</div>
	</s:if>
	<s:else>
		<s:if test="#session.isSliderEnabled == false">
			<div class="SliderRemovedHeight"></div>
		</s:if>
		<s:else>
			<div class=" clearfix">
				<div id="carousel-id" class="carousel slide carousel-fade"
					data-ride="carousel">
					<div class="carousel-inner">
						<div class="item active">
							<img alt="First slide" src="images/HD/bus5.jpg">
						</div>
						<div class="item">
							<img alt="First slide" src="images/HD/04.jpg">
						</div>
						<div class="item">
							<img alt="First slide" src="images/HD/05.jpg">
						</div>
					</div>
				</div>
			</div>
		</s:else>
	</s:else>

	<div class="col-sm-10 tayyarah-search-engine ">
		<div class="tayyarah-home-tabs">
			<!-- Nav tabs -->
			<s:if test="#session.isCorporate == true">
				<ul class="nav nav-tabs  active-tab" role="tablist">
					<li role="presentation" class="" id="Flightli"><a
						data-ng-click="FlightMenu()" aria-controls="flights" role="tab"
						data-toggle="tab"> <i class="tayyarah-plane"></i> Flight
					</a></li>

					<li role="presentation" id="Hotelli"><a
						data-ng-click="HotelMenu()" aria-controls="hotels" role="tab"
						data-toggle="tab"> <i class="tayyarah-hotel"></i>
							Hotel
					</a></li>

					<li role="presentation" class="active" id="Busesli"><a
						data-ng-click="BusMenu()" aria-controls="bus" role="tab"
						data-toggle="tab"> <i class="tayyarah-directions_bus"></i>
							Bus
					</a></li>



				</ul>
			</s:if>
			<s:else>
				<s:if test="#session.isLabeling == true">
					<ul class="nav nav-tabs  active-tab" role="tablist">
						<s:if test="#session.isFlightsEnabled == true">
							<li role="presentation" class="" id="Flightli"><a
								data-ng-click="FlightMenu()" aria-controls="flights" role="tab"
								data-toggle="tab"> <i class="tayyarah-plane"></i> Flight
							</a></li>
						</s:if>
						<s:if test="#session.isHotelEnabled == true">
							<li role="presentation" id="Hotelli"><a
								data-ng-click="HotelMenu()" aria-controls="hotels" role="tab"
								data-toggle="tab"> <i class="tayyarah-hotel"></i>
									Hotel
							</a></li>
						</s:if>
						<s:if test="#session.isBusEnabled == true">
							<li role="presentation" class="active" id="Busesli"><a
								data-ng-click="BusMenu()" aria-controls="bus" role="tab"
								data-toggle="tab"> <i
									class="tayyarah-directions_bus"></i> Bus
							</a></li>
						</s:if>
						<s:if test="#session.isCarEnabled == true">
							<li role="presentation" id="Carsli"><a
								data-ng-click="CarMenu()" aria-controls="car" role="tab"
								data-toggle="tab"> <i
									class="tayyarah-directions_car"></i> Car
							</a></li>
						</s:if>
					</ul>
				</s:if>
				<s:else>
					<ul class="nav nav-tabs  active-tab" role="tablist">
						<li role="presentation" class="" id="Flightli"><a
							data-ng-click="FlightMenu()" aria-controls="flights" role="tab"
							data-toggle="tab"> <i class="tayyarah-plane"></i> Flight
						</a></li>

						<li role="presentation" id="Hotelli"><a
							data-ng-click="HotelMenu()" aria-controls="hotels" role="tab"
							data-toggle="tab"> <i class="tayyarah-hotel"></i>
								Hotel
						</a></li>

						<li role="presentation" class="active" id="Busesli"><a
							data-ng-click="BusMenu()" aria-controls="bus" role="tab"
							data-toggle="tab"> <i class="tayyarah-directions_bus"></i>
								Bus
						</a></li>

						<li role="presentation" id="Carsli"><a
							data-ng-click="CarMenu()" aria-controls="car" role="tab"
							data-toggle="tab"> <i class="tayyarah-directions_car"></i>
								Car
						</a></li>

					</ul>

				</s:else>
			</s:else>
			<!-- Tab panes -->

			<div class="tab-content corporate tab-content-bus">
				<div role="tabpanel" class="tab-pane " id="flights"></div>
				<div role="tabpanel" class="tab-pane" id="hotels"></div>
				<div role="tabpanel" class="tab-pane " id="car"></div>

				<div role="tabpanel" class="tab-pane active" id="bus">

					<div class="tayyarah-inner-tab">
						<ul class="nav nav-tabs" style="margin-bottom: 15px;">
							<li class="active "><a href="#ones" data-toggle="tab"
								class="radio-primary" id="oneway">One way</a></li>
							<li><a href="#twos" data-toggle="tab" id="return-tab">
									Round Trip</a></li>

						</ul>
						<div id="myBusContent" class="tab-content">
							<div class="tab-pane fade active in" id="ones">
								<form name="flightsearchForm" class="form-inline"
									id="onewayform" data-ng-submit="bussearch()">

									<input type="hidden" name="trips" value="2"> <input
										type="hidden" name="$&*D5K" value="false"> <input
										type="hidden" name="$M*A@" value="0">
									<s:if test="#session.isLabeling == true">
										<s:if test="#session['agent'] != null">
											<input type="hidden" name="ccy" id="onecurrencyname"
												value="<s:property value="%{#session.agent.currencyCode}"/>">
											<input type="hidden" name="ay" id="ay"
												value="<s:property value="%{#session.agent.Securityanswer}"/>">
										</s:if>
										<s:else>
											<input type="hidden" name="ccy" id="onecurrencyname"
												value="INR">
											<input type="hidden" id="ay" name="ay"
												value="<s:property value="%{#session.ThemeAppkey}"/>">
										</s:else>
									</s:if>
									<s:else>
										<s:if test="#session['agent'] != null">
											<input type="hidden" name="ccy" id="onecurrencyname"
												value="<s:property value="%{#session.agent.currencyCode}"/>">
											<input type="hidden" name="ay" id="ay"
												value="<s:property value="%{#session.agent.Securityanswer}"/>">
										</s:if>
										<s:else>
											<input type="hidden" name="ccy" id="onecurrencyname"
												value="INR">
											<input type="hidden" id="oky" name="ay"
												value="zqJ3R9cGpNWgNXG55ub/WQ==">
										</s:else>
									</s:else>

									<fieldset>

										<div class="clearfix marginTop35px">

											<div
												class="col-md-3 col-sm-3 clearfix padding-LR-0px bordered">
												<div class="form-group">
													<label for="inputFrom">From</label>
													<div class="input-group">
														<span class="tayya-h-iicons"> <i
															class="visible-xs buspickpoint"></i><i
															class="hidden-xs tayyarah-directions_bus"></i></span> <input
															type="text"
															class="form-control tayyarah-plane bus-accessibility"
															placeholder="Select Location" id="fromstation"
															onkeypress="return isAlphabetKeywithspace(event,this);"
															name="oristationname" autocomplete="off"> <input
															type="hidden" name="citycode" id="fromstationcode"
															value="">


													</div>
													<div class="ttst" id="errori"></div>
												</div>
											</div>
											<div
												class="col-md-3 col-sm-3 clearfix padding-LR-0px bordered">
												<div class="form-group">
													<label for="inputEmail">To</label>
													<div class="input-group">
														<span class="tayya-h-iicons"> <i
															class="visible-xs buspickpoint"></i> <i
															class="hidden-xs tayyarah-directions_bus"></i></span> <input
															type="text"
															class="form-control tayyarah-plane bus-accessibility"
															placeholder="Select Location" id="tostation"
															name="deststationname"
															onkeypress="return isAlphabetKeywithspace(event,this);"
															autocomplete="off"> <input type="hidden"
															name="citycode" id="tostationcode" value="">
													</div>
													<div class="ttst" id="errdes"></div>
													<div class="ttst" id="errdep"></div>
												</div>
											</div>
											<div
												class="col-md-2 col-sm-1 clearfix padding-LR-0px bordered">
												<div class="form-group">
													<label for="inputEmail">Departure</label>
													<div class="input-group">
														<span class="tayya-h-iicons"><i
															class="tayyarah-calendar"></i></span> <input type="text"
															class="form-control" id="depDate" name="depDate"
															placeholder="DD/MM/YYYY" autocomplete="off"
															onkeydown="return false;" required>

													</div>
													<div class="ttst" id="errdes"></div>
													<div class="ttst" id="errdep"></div>
												</div>
											</div>
											<div
												class="col-md-2 col-sm-1 clearfix padding-LR-0px bordered">
												<div class="form-group">
													<label for="inputEmail">Arrival</label>
													<div class="input-group">
														<span class="tayya-h-iicons"><i
															class="tayyarah-calendar"></i></span> <input type="text"
															class="form-control" id="arDate"
															placeholder="DD/MM/YYYY(optional)" autocomplete="off"
															disabled="disabled" onkeydown="return false;">
													</div>
													<div class="ttst" id="errarr"></div>
												</div>
											</div>

										</div>

										<!-- more options added here -->
										<div id="home-btn-search">
											<div class="form-group tayy-button">
												<button type="submit" class="btn btn-info busSearchBtn"
													data-ng-click="submitted==true">Search</button>
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
	</div>
</div>

<s:if test="#session.isCorporate == true">
	<article class="container corporateheader">

		<section>
			<div class="choose-us">
				<div class="container clear-padding">
					<!-- <div class="col-sm-4"> -->
					<div class="choose-us-item text-center">
						<h4>Why us?</h4>

						<p>Tayyarah.com today is the leading consolidator provider of
							consumer-direct travel services in India. Based in
							Bangalore-India, Tayyarah.com is a one-stop-shop for all
							travel-related services. Tayyarah provides you a access over 70+
							countries with 900+ airlines on just one platform, Tayyarah.com
							provides hotel reservation facility for more than 45,000 hotels
							in India and over 9,00,000 hotels around the world which makes us
							a leading consolidator of all travel products. Through continued
							excellence in providing travel solutions, Tayyarah.com provides
							booking facility for all the popular as well as exotic national
							and international destinations. If you have been managing your
							travel through a Travel Agent, it is quite possible that you have
							availed of our products and services even before you knew each
							other. Tayyarah provides online car rental services in 210 +
							cities within India and also offer over 85,000 + bus routes
							across India.</p>
					</div>
					<!-- </div> -->
				</div>
			</div>
		</section>
	</article>

</s:if>
<s:else>
	<s:if test="#session.isDealsEnabled == false">
	</s:if>
	<s:else>
		<article class="container">

			<section class="packages">
				<h4 class="text-center">
					<a href="#">Pack<span>ages</span></a>
				</h4>

				<div class="main">
					<ul id="og-grid" class="og-grid">
						<li><a href="#/EnquiryForm" data-largesrc="images/1.jpg"
							data-title="Tour Packages"
							data-description="Tayyarah works hard to secure the best deals on packages covering different types of vacations like Family tours, adventure tours, beach vacations luxury tours and so on...">
								<img src="images/1.jpg" alt="img01"/>
								<span>Tour Packages</span>

								<div class="hoverpackages">

									<p>We already know our customers need best and cheapest
										travel experience. Send your request now.</p>
									<button type="button" class="btn btn-info btQoute">Get
										my Qoute</button>
								</div>
						</a></li>

						<li><a href="#/EnquiryForm" data-largesrc="images/3.jpg"
							data-title="Group Packages"
							data-description="Some of the best destinations in the world are covered by our Group fixed departures, relax in sunshine near a seashore or on the banks of a river or choose to stay up all night in a luxury resort, tayyarah gives you all the customized options.">
								<img src="images/3.jpg" alt="img01"/>
								<span>Group Packages</span>
								<div class="hoverpackages">
									<p>We already know our customers need best and cheapest
										travel experience. Send your request now.</p>
									<button type="button" class="btn btn-info btQoute">Get
										my Qoute</button>

								</div>
						</a></li>


						<li><a href="#/EnquiryForm" data-largesrc="images/2.jpg"
							data-title="Holiday Packages"
							data-description="Best way to relax is to pack your bags and go on a holiday, tayyarah 
suggests and guides people to find the right destination covering wildlife destinations, beach vacations, adventure holiday and so on at affordable prices.
The cost of outbound packages are payable in convertible foreign exchange (at the current prevailing exchange rates) for Indian residents traveling under the BTQ & other schemes subject to RBI regulations
except the cost of Airline ticket. Accommodation (if included) is based on twin share basis. Seasonal and weekend surcharges may apply, meals & sightseeing are as per itinerary. All transfers in SIC basis unless
otherwise specified, other terms and conditions apply. ">
								<img src="images/2.jpg" alt="img02"/>
								<span>Holiday Packages</span>
								<div class="hoverpackages">

									<p>We already know our customers need best and cheapest
										travel experience. Send your request now.</p>
									<button type="button" class="btn btn-info btQoute">Get
										my Qoute</button>

								</div>
						</a></li>


						<li><a href="#/EnquiryForm" data-largesrc="images/ummrah.jpg"
							data-title="Umrah Packages"
							data-description="Umrah Travel for us is a noble service in which we aim to offer the best possible advice and assistance, making us unique from other tour operators. Special arrangements include Best of Hotels, Transportation, Meals &amp; Other Complimentary Services. We commit to offer best umrah service at unbeatable prices. We cover all range of travelers like Economy ,Prestige &amp; Luxury.">
								<img src="images/ummrah.jpg" alt="img03"/> <span>Umrah Packages</span>
								<div class="hoverpackages">

									<p>We already know our customers need best and cheapest
										travel experience. Send your request now.</p>
									<button type="button" class="btn btn-info btQoute">Get
										my Qoute</button>

								</div>
						</a></li>
					</ul>
				</div>
			</section>
		</article>
	</s:else>


</s:else>
<!-- START: WHY CHOOSE US SECTION -->
<section id="why-choose-us">
	<div class="choose-us-row">
		<div class="container clear-padding">
			<div class="light-section-title text-center">
				<h2>WHY CHOOSE US?</h2>
				<h4>REASONS TO TRUST US</h4>
				<div class="space"></div>
				<p>Access of booking flight tickets over 70+ countries with 900+
					airlines on one platform &amp; we provide hotel reservation
					facility for more than 45,000 hotels in India and over 9,00,000
					hotels globally with no hidden cost.</p>
			</div>


			<div class="main-footer-sub">
				<div class="container clear-padding">
					<div class="col-sm-12 text-center">
						<form class="clearfix text-center">
							<label>SUBSCRIBE TO OUR NEWSLETTER</label>
							<div class="clearfix"></div>
							<div class=" col-sm-8 clear-padding">
								<input class="form-control" type="email" required
									placeholder="Enter Your Email" name="email">
							</div>
							<div class="col-sm-4 clear-padding">
								<button type="submit">
									<i class="fa fa-paper-plane"></i>SUBSCRIBE
								</button>
							</div>
						</form>
					</div>
					<div class=" col-sm-12 ">
						<div class="social-media text-center">
							<ul>
								<li><a href="#"><i class="tayyarah-facebook4"></i></a></li>
								<li><a href="#"><i class="tayyarah-twitter4"></i></a></li>
								<li><a href="#"><i class="tayyarah-google-plus"></i></a></li>
								<li><a href="#"><i class="tayyarah-youtube"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- END: WHY CHOOSE US SECTION -->
<!-- STart: WHY CHOOSE US details SECTION -->

<s:if test="#session.isCorporate == false">
	<section>
		<div class="choose-us">
			<div class="container clear-padding">
				<div class="col-sm-4">
					<div class="choose-us-item text-center">
						<div class="choose-icon">
							<i class="tayyarah-suitcase"></i>
						</div>
						<h4>Handpicked Tour</h4>

						<p>We have our travel network partners across globe to suggest
							you with the best logical routing and cater to customized package
							requirements</p>
						<a href="flightindex.jsp" class="btn btn-info">KNOW MORE</a>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="choose-us-item text-center">
						<div class="choose-icon">
							<i class="tayyarah-phone"></i>
						</div>
						<h4>Dedicated Support</h4>
						<p>We are available round the clock 365 days to cater to your
							needs. We would always love to hear your feedback about our
							services.</p>
						<a href="#/contactUs" class="btn btn-info">KNOW MORE</a>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="choose-us-item text-center">
						<div class="choose-icon">
							<i class="tayyarah-smile"></i>
						</div>
						<h4>Lowest Price Guarantee</h4>
						<p>Applies to genuine quotes from airlines and India
							registered businesses and websites for travel that
							originates/departs from India.</p>

						<a href="flightindex.jsp" class="btn btn-info">KNOW MORE</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</s:if>


<!-- END: WHY CHOOSE US details SECTION -->




<!-- Your site ends -->

<script type="text/ng-template" id="customTemplate.html">
  <a>
      <span bind-html-unsafe="match.label | typeaheadHighlight:query"></span>
      <i></i>
  </a>
</script>
<script src="js/tayycustom.js"></script>


