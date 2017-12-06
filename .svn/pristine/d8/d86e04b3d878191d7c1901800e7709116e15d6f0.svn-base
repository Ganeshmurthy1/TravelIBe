
<style>
#loading-bar-container {
	display: none !important;
}
</style>
<%@taglib prefix="s" uri="/struts-tags"%>
<!-- Your site header -->
<div class=" super-content">
	<s:if test="#session.isCorporate == true">
		<div class=" clearfix">
			<div id="carousel-id" class="carousel slide carousel-fade"
				data-ride="carousel">

				<div class="carousel-inner">
					<div class="item active">
						<img alt="First slide" src="images/HD/cor1.jpg">
					</div>
					<div class="item">
						<img alt="First slide" src="images/HD/cor2.jpg">
					</div>
					<div class="item">
						<img alt="First slide" src="images/HD/cor3.jpg">
					</div>
					<div class="item">
						<img alt="First slide" src="images/HD/cor4.jpg">
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
							<img alt="First slide" src="images/HD/cor1.jpg">
						</div>
						<div class="item">
							<img alt="First slide" src="images/HD/cor2.jpg">
						</div>
						<div class="item">
							<img alt="First slide" src="images/HD/cor3.jpg">
						</div>
						<div class="item">
							<img alt="First slide" src="images/HD/cor4.jpg">
						</div>
					</div>
				</div>
			</div>
		</s:else>
	</s:else>
	<!-- Advertise banner options ends here -->
	<!-- booking options comes here -->

	<div class="col-sm-10 tayyarah-search-engine">
		<div class="tayyarah-home-tabs">
			<!-- Nav tabs For Corporate only-->
			<s:if test="#session.isCorporate == true">
				<ul class="nav nav-tabs active-tab" role="tablist">
					<li role="presentation" class="" id="Flightli"><a
						data-ng-click="FlightMenu()" aria-controls="flights" role="tab"
						data-toggle="tab"> <img class="airimge  "></img> Flight
					</a></li>

					<li role="presentation" id="Hotelli" class="active"><a
						data-ng-click="HotelMenu()" aria-controls="hotels" role="tab"
						data-toggle="tab"> <img class="hotimge"></img> Hotel
					</a></li>

					<li role="presentation" id="Busesli"><a
						data-ng-click="BusMenu()" aria-controls="bus" role="tab"
						data-toggle="tab"> <img class="busimge  "></img> Bus
					</a></li>


				</ul>
			</s:if>
			<!-- Nav tabs For Agent and Frontuser only-->
			<s:else>
				<s:if test="#session.isLabeling == true">
					<ul class="nav nav-tabs active-tab" role="tablist">
						<s:if test="#session.isFlightsEnabled == true">
							<li role="presentation" class="" id="Flightli"><a
								data-ng-click="FlightMenu()" aria-controls="flights" role="tab"
								data-toggle="tab"> <img class="airimge  "></img> Flight
							</a></li>
						</s:if>
						<s:if test="#session.isHotelEnabled == true">
							<li role="presentation" id="Hotelli" class="active"><a
								data-ng-click="HotelMenu()" aria-controls="hotels" role="tab"
								data-toggle="tab"> <img class="hotimge  "></img>
									Hotel
							</a></li>
						</s:if>
						<s:if test="#session.isBusEnabled == true">
							<li role="presentation" id="Busesli"><a
								data-ng-click="BusMenu()" aria-controls="bus" role="tab"
								data-toggle="tab"> <img class="busimge  "></img> Bus
							</a></li>
						</s:if>
						<s:if test="#session.isCarEnabled == true">
							<li role="presentation" id="Carsli"><a
								data-ng-click="CarMenu()" aria-controls="car" role="tab"
								data-toggle="tab"> <img class="carimge  "></img> Car
							</a></li>
						</s:if>
					</ul>
				</s:if>
				<s:else>
					<ul class="nav nav-tabs active-tab" role="tablist">
						<li role="presentation" class="" id="Flightli"><a
							data-ng-click="FlightMenu()" aria-controls="flights" role="tab"
							data-toggle="tab"> <img class="airimge  "></img> Flight
						</a></li>

						<li role="presentation" id="Hotelli" class="active"><a
							data-ng-click="HotelMenu()" aria-controls="hotels" role="tab"
							data-toggle="tab"> <img class="hotimge  "></img>
								Hotel
						</a></li>

						<li role="presentation" id="Busesli"><a
							data-ng-click="BusMenu()" aria-controls="bus" role="tab"
							data-toggle="tab"> <img class="busimge  "></img> Bus
						</a></li>

						<li role="presentation" id="Carsli"><a
							data-ng-click="CarMenu()" aria-controls="car" role="tab"
							data-toggle="tab"> <img class="carimge  "></img> Car
						</a></li>

					</ul>
				</s:else>
			</s:else>

			<!-- Tab panes -->

			<div class="tab-content hotelTabHeight">

				<div role="tabpanel" class="tab-pane active" id="hotels">
					<form name="searchHotel" class="form-inline"
						data-ng-submit="SearchHotels()">

						<input type="hidden" id="currency" value="INR">
						<s:if test="#session.isLabeling == true">
							<input type="hidden" name="ay" id="ay"
								value="<s:property value="%{#session.ThemeAppkey}"/>">
						</s:if>

						<s:else>
							<s:if test="#session['agent'] != null">
								<input type="hidden" name="ay"
									value="<s:property value="%{#session.agent.Securityanswer}"/>"
									id="ay">
							</s:if>
							<s:else>
								<input type="hidden" name="ay" id="hky"
									value="zqJ3R9cGpNWgNXG55ub/WQ==">
							</s:else>
						</s:else>
						<fieldset>
							<div class="col-sm-3 clearfix h-fr">
								<div class="form-group">
									<label for="inputFrom">City</label>
									<div class="input-group">
										<span class="tayya-h-iicons newIconPosition"><i
											class="tayyarah-hotel"></i></span> <input type="text"
											class="form-control tayyarah-plane "
											placeholder="Select City" id="hotelcity" name="cityname"
											onkeypress="return isAlphabetKeywithspace(event,this);"
											autocomplete="off"> <input type="hidden"
											name="citycode" id="citycode" value="">
									</div>
									<div class="ttst" id="errori"></div>
								</div>
							</div>
							<div id="hdepe"></div>
							<div class="col-sm-3 clearfix " id="hdep">
								<div class="form-group">
									<label for="inputEmail">Check in</label>
									<div class="input-group">
										<span class="tayya-h-iicons"><i
											class="tayyarah-calendar"></i></span> <input type="text"
											class="form-control" id="datain" name="datestart"
											placeholder="DD/MM/YYYY" autocomplete="off"
											onkeydown="return false;">
									</div>
									<div class="ttst" id="errdep"></div>
								</div>
							</div>

							<div class="col-sm-3 clearfix" id="hdep">
								<div class="form-group">
									<label for="inputEmail">Check out</label>
									<div class="input-group">
										<span class="tayya-h-iicons"><i
											class="tayyarah-calendar"></i></span> <input type="text"
											class="form-control" id="dateout" name="dateend"
											placeholder="DD/MM/YYYY" autocomplete="off"
											onkeydown="return false;">
									</div>
									<div class="ttst" id="errarr"></div>
								</div>
							</div>
							<div class="col-sm-3 clearfix home-det ">
								<div class="form-group ">
									<label for="inputAdult">Details</label>
									<div id="dropdown" class="dropAdults borderRemove">
										<span><span id="totalpeopletext">1</span>, Adult(s) <span
											id="totalchildtext">0</span>, Child(s) in <span
											id="totalroomtext">1</span>, Room(s)</span> <i
											class="tayyarah-angle-down pull-right"></i>
									</div>
									<div class="ttst" id="errconfig"></div>
								</div>
							</div>
							<div class="dropdownwrap topMarginDrop"
								style="display: none; z-index: 99999;">
								<div class="col-sm-12 clearfix">
									<div class="form-group">
										<label for="inputGroupSuccess2">Room(s)</label>
										<div class="input-group">
											<select class="form-control" name="rooms" id="totalrooms"
												onchange="AddRooms(this)" required>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>

											</select>
										</div>
									</div>
								</div>
								<div class="hotel-repeat ">
									<!-- groweble div in hotel -->
									<div class="row" id="rowid1" data-index='1'>
										<div class="col-md-4 col-sm-2 clearfix rooms-multiple">
											<p class="ro-heading">Room 1:</p>
										</div>
										<!-- <p>Room1</p> -->
										<div class="col-md-4 col-sm-5 clearfix">
											<div class="form-group">
												<label for="inputGroupSuccess2">Adult(s)</label>
												<div class="input-group">

													<select class="form-control" name="Adults1" id="RoomAdult1"
														required onchange="FirstRoomChangeChild()">
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
													</select>
												</div>
											</div>
										</div>
										<div class="col-md-4 col-sm-5 clearfix">
											<div class="form-group">
												<label for="inputGroupSuccess2">Child(s)</label>
												<div class="input-group">
													<!-- <span > Room 1</span> -->
													<select class="form-control" id="Childs" name="Childs1"
														required onchange="FirstrowChildchange('1')">
														<option>0</option>
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>
												</div>
											</div>
										</div>

										<div class="col-sm-12 col-xs-12">

											<div
												class="col-sm-2 col-xs-2 clearfix Room1Child1 AgeDivWidth"
												id="c-age" style="display: none;">
												<div class="form-group">
													<label for="inputGroupSuccess2">Age 1</label>
													<div class="input-group">

														<select class="form-control" id="room1Age1" name="Age1"
															required>
															<option value="1">< 1</option>
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
															<option>6</option>
															<option>7</option>
															<option>8</option>
															<option>9</option>
															<option>10</option>
															<option>11</option>
														</select>
													</div>
												</div>
											</div>

											<div
												class="col-sm-2 col-xs-2 clearfix Room1Child2 AgeDivWidth"
												id="c-age" style="display: none;">
												<div class="form-group">
													<label for="inputGroupSuccess2">Age 2</label>
													<div class="input-group">

														<select class="form-control" id="room1Age2" name="Age1"
															required>
															<option value="1">< 1</option>
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
															<option>6</option>
															<option>7</option>
															<option>8</option>
															<option>9</option>
															<option>10</option>
															<option>11</option>
														</select>
													</div>
												</div>
											</div>

											<div
												class="col-sm-2 col-xs-2 clearfix Room1Child3 AgeDivWidth"
												id="c-age" style="display: none;">
												<div class="form-group">
													<label for="inputGroupSuccess2">Age 3</label>
													<div class="input-group">

														<select class="form-control" id="room1Age3" name="Age1"
															required>
															<option value="1">< 1</option>
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
															<option>6</option>
															<option>7</option>
															<option>8</option>
															<option>9</option>
															<option>10</option>
															<option>11</option>
														</select>
													</div>
												</div>
											</div>

											<div
												class="col-sm-2 col-xs-2 clearfix Room1Child4 AgeDivWidth"
												id="c-age" style="display: none;">
												<div class="form-group">
													<label for="inputGroupSuccess2">Age 4</label>
													<div class="input-group">

														<select class="form-control" id="room1Age4" name="Age1"
															required>
															<option value="1">< 1</option>
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
															<option>6</option>
															<option>7</option>
															<option>8</option>
															<option>9</option>
															<option>10</option>
															<option>11</option>
														</select>
													</div>
												</div>
											</div>
											<div
												class="col-sm-2 col-xs-2 clearfix Room1Child5 AgeDivWidth"
												id="c-age" style="display: none;">
												<div class="form-group">
													<label for="inputGroupSuccess2">Age 5</label>
													<div class="input-group">
														<select class="form-control" id="room1Age5" name="Age1"
															required>
															<option value="1">< 1</option>
															<option>1</option>
															<option>2</option>
															<option>3</option>
															<option>4</option>
															<option>5</option>
															<option>6</option>
															<option>7</option>
															<option>8</option>
															<option>9</option>
															<option>10</option>
															<option>11</option>
														</select>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div class="hotel-repeatadd"></div>
									<div class="clearfix">
										<button type="button" class="btn btn-info hotelDropBtn"
											id="but-up">Done</button>
									</div>
								</div>
							</div>
							<div id="home-btn-search">
								<div class="form-group tayy-button">
									<button type="submit" id="hotelsearch"
										class="btn btn-info homeSearchBtn"
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

<!-- super-banner ends -->

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
								<img src="images/3.jpg" alt="img01" />
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
<!-- END: HOT DEALS -->


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
						<a href="#/hotel" class="btn btn-info">KNOW MORE</a>
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
						<a href="#/ContactUs" class="btn btn-info">KNOW MORE</a>
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
						<a href="#/" class="btn btn-info">KNOW MORE</a>
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
<script type="text/javascript"
	src="//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js"></script>
<script type="text/javascript">
	var onSuccess = function(location) {
		var countryname = location.country.names.en;

		$.ajax({
			url : 'https://api.tayyarah.com/tayyarahapi/Search/currency/'
					+ countryname,
			dataType : 'text',
			type : 'GET',
			async : true,
			statusCode : {
				404 : function(response) {
				},
				200 : function(response) {
					console.log("currency", response);
					$("#currency").val(response);

				}
			},
			error : function(jqXHR, status, errorThrown) {
			}
		});

	};

	var onError = function(error) {
		/*  console.log("Error:\n\n" + JSON.stringify(error, undefined, 4)  );  */
	};
</script>
<script src="js/tayycustom.js"></script>