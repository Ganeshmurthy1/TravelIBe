<%@taglib prefix="s" uri="/struts-tags"%>
<div class="SessionTemplate">
	<!-- start Template -->
	<!-- <div id="loading-bar-container" class="hidden-xs"></div> -->
	<div class="row" data-ng-show="bookloader">
		<div class="bar hidden-xs"></div>
		<span><b class="LoadingDetailText col-md-12">Please wait
				while we are being Processing...</b></span>
	</div>
	<div data-ng-show="bookloader" data-ng-cloak>
		<div class="LoaderTemplateBody">
			<div class="hotel-detail">
				<div class="h-lists-corporate clearfix">
					<div class="col-sm-5">
						<h3>
							<img src="images/loaders/greyImage.png" class="hotelNameTemplate">
						</h3>
						<p>
							<img src="images/loaders/greyImage.png"
								class="hotelNameTemplate2">
						</p>
						<p class="clearfix"
							data-ng-if="HotelResult.basicPropertyInfo.hotel_Star  > 0 ">
							<a href="#" class="fa fa-star"
								data-ng-repeat="i in getNumber(HotelResult.basicPropertyInfo.hotel_Star) track by $index"></a>
						</p>
					</div>

					<div class="col-sm-2">
						<div class="ratings"
							data-ng-if="HotelResult.basicPropertyInfo.reviewRating > 0">
							<span class="r-colr"></span> / 5
						</div>
						<span data-ng-if="HotelResult.basicPropertyInfo.reviewCount > 0"><img
							src="images/loaders/greyImage.png" class="brownTemplate">
							Reviews</span>
					</div>

					<div class="col-sm-2 h-d-cheko">
						<p>
							Room x<span><img src="images/loaders/greyImage.png"
								class="brownTemplate"></span>
						</p>
						<p>
							Check in
							<time>
								<img src="images/loaders/greyImage.png" class="brownTemplate">
							</time>
						</p>
						<p>
							Check out
							<time>
								<img src="images/loaders/greyImage.png" class="brownTemplate">
							</time>
						</p>
					</div>

					<div class="col-sm-3 ">
						<div class="h-d-rate">
							<p class="h3">
								<i class="tayyarah-inr"></i><img
									src="images/loaders/greyImage.png" class="brownTemplate"></br>
								<span class="perRoom">Per Room / Per Night</span>
							</p>
						</div>
					</div>
				</div>


				<div class="row">
					<div class="col-sm-8">
						<div class="hotel-slider">
							<div class="item">
								<div class="clearfix">
									<ul class="defaultLoadimg">
										<li><img src="images/loaders/horizontalLoader.gif"
											class="center-block margin-top20px" /></li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div class="col-sm-4">


						<div class="hotel-details-search">
							<form>
								<div id="hdepe"></div>
								<div class="clearfix ">
									<div class="form-group">
										<label for="inputEmail">Check In</label>
										<div class="input-group">
											<span class="tayya-h-iicons"><i
												class="tayyarah-calendar"></i></span> <input type="text"
												class="form-control o-c-s" name="datestart" id="datein"
												placeholder="Check In" value="{{datestart}}"
												ng-model="searchdata.datestart" required
												onkeydown="return false;" disabled>
										</div>
									</div>
								</div>

								<div class="clearfix">
									<div class="form-group">
										<label for="inputEmail">Check Out</label>
										<div class="input-group">
											<span class="tayya-h-iicons"><i
												class="tayyarah-calendar"></i></span> <input type="text"
												class="form-control o-c-s" name="dateend" id="dateout"
												placeholder="Check Out" value="{{dateend}}"
												ng-model="searchdata.dateend" required
												onkeydown="return false;" disabled>
										</div>
									</div>
								</div>


								<div class="clearfix">
									<div class="form-group ">
										<label for="inputAdult">Details</label>
										<div id="dropdown">
											<span><span id="totalpeopletext"></span>, Adult(s) <span
												id="totalchildtext"></span>, Child(s) in <span
												id="totalroomtext"></span>, Room(s)</span>

										</div>
									</div>

								</div>
								<div class="clearfix">
									<div class="form-group tayy-button">
										<div class="input-group wrapper">
											<button type="submit"
												class="btn btn-info btn-corporateHotel "
												data-ng-click="submitted== true" value="Search" disabled>
												Modify Search
												<div class="wrapper">
											</button>
											<div class="tooltip">you're not allowed to Modify
												Search!</div>
										</div>
									</div>
								</div>


							</form>

						</div>

					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- end Template -->
	<div class="container" data-ng-show="errordiv" data-ng-cloak>
		<div class="custom-er ">

			<div class="visible-xs gradient-error">
				<div class="spinner-error">
					<div class="double-bounce1"></div>
					<div class="double-bounce2"></div>
				</div>
				<form action="flightindex.jsp">
					<button type="submit" class="btn btn-primary but">Search
						again</button>
				</form>
			</div>
			<div class="custom-error text-center">
				<div class="error-mess">
					<p>
						<b>{{errormeg}}</b>
					</p>
					<form>
						<button type="submit" class="btn btn-primary but"
							ng-click="returnIndex()">Search again</button>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="container" data-ng-style="{'display' : display}"
		data-ng-cloak>
		<div class="row">
			<div class="hotel-detail">

				<div class="completeData">
					<div class="h-lists-corporate clearfix">
						<div class="col-sm-5">
							<h3>{{HotelResult.basicPropertyInfo.hotelName}}</h3>
							<p>{{HotelResult.basicPropertyInfo.address.addressLines[0]}}</p>
							<p class="clearfix"
								data-ng-if="HotelResult.basicPropertyInfo.hotel_Star  > 0 ">
								<a href="#" class="fa fa-star"
									data-ng-repeat="i in getNumber(HotelResult.basicPropertyInfo.hotel_Star) track by $index"></a>
							</p>
						</div>

						<div class="col-sm-2">
							<div class="ratings"
								data-ng-if="HotelResult.basicPropertyInfo.reviewRating > 0">
								<span class="r-colr">{{HotelResult.basicPropertyInfo.reviewRating}}</span>
								/ 5
							</div>
							<span data-ng-if="HotelResult.basicPropertyInfo.reviewCount > 0">{{HotelResult.basicPropertyInfo.reviewCount}}
								Reviews</span>
						</div>

						<div class="col-sm-2 h-d-cheko">
							<p>
								Room x<span> {{searchdata.noofrooms}}</span>
							</p>
							<p>
								Check in
								<time> {{searchdata.datestart | date: 'EEE, MMM d'}}</time>
							</p>
							<p>
								Check out
								<time>{{searchdata.dateend | date: 'EEE, MMM d'}}</time>
							</p>
						</div>

						<div class="col-sm-3 ">
							<div class="h-d-rate">
								<p class="h3">
									<i class="tayyarah-inr"></i> {{getTotal()}} </br>
									<span class="perRoom">Per Room / Per Night</span>
								</p>
							</div>
						</div>
					</div>


					<div class="row">
						<div class="col-sm-8">
							<div class="hotel-slider">
								<div class="item">
									<div class="clearfix">
										<ul id="image-gallery">
											<li data-thumb="{{photo}}" class="lslide"
												data-ng-repeat="photo in HotelResult.basicPropertyInfo.hotelimages">
												<img src="{{photo}}" height="auto" width="auto"
												onerror="this.src='./images/image_not_found-hotel-.jpg'" />
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div class="col-sm-4">


							<div class="hotel-details-search">
								<%-- <p class="details-price">
								<b><i class="tayyarah-inr"></i> {{getTotal()}} </b> <small>Total Room Price</small>
							</p> --%>

								<form>
									<div class="clearfix ">
										<div class="form-group">
											<label for="inputEmail">Check In</label>
											<div class="input-group">
												<span class="tayya-h-iicons"><i
													class="tayyarah-calendar"></i></span> <input type="text"
													class="form-control o-c-s" name="datestart" id="datein"
													placeholder="Check In" value="{{datestart}}"
													ng-model="searchdata.datestart" required
													onkeydown="return false;" disabled>
											</div>
										</div>
									</div>

									<div class="clearfix">
										<div class="form-group">
											<label for="inputEmail">Check Out</label>
											<div class="input-group">
												<span class="tayya-h-iicons"><i
													class="tayyarah-calendar"></i></span> <input type="text"
													class="form-control o-c-s" name="dateend" id="dateout"
													placeholder="Check Out" value="{{dateend}}"
													ng-model="searchdata.dateend" required
													onkeydown="return false;" disabled>
											</div>
										</div>
									</div>


									<div class="clearfix">
										<div class="form-group ">
											<label for="inputAdult">Details</label>
											<div id="dropdown">
												<span><span id="totalpeopletext">{{noofadults}}</span>,
													Adult(s) <span id="totalchildtext">{{noofChild}}</span>,
													Child(s) in <span id="totalroomtext">{{noofrooms}}</span>,
													Room(s)</span>

											</div>
										</div>

									</div>

									<div class="clearfix">
										<div class="form-group tayy-button">
											<div class="input-group wrapper">
												<button type="submit"
													class="btn btn-info btn-corporateHotel "
													data-ng-click="submitted== true" value="Search" disabled>
													Modify Search
													<div class="wrapper">
												</button>
												<div class="tooltip">you're not allowed to Modify
													Search!</div>
											</div>
										</div>
									</div>



								</form>

							</div>

						</div>
					</div>
				</div>
				<!-- <form action="HotelSummary"> -->
				<form data-ng-submit="hotelSummary()">
					<!-- selecting hotel roomtype -->

					<div class="hotel-room-select">
						<div id="hotel-rooms-selected">
							<div class="hotel-rooms-selected clearfix">
								<div class="col-sm-8">
									<div class="row">
										<div class="col-sm-12">
											<h5>
												Total Rooms selected : <span>{{roomreqsarray.length}}</span>
											</h5>

										</div>
										<div class="col-sm-12">
											<ul class="list-inline">
												<li
													data-ng-repeat="(roomReqIndex, roomReq) in roomreqsarray "><p>
														Room {{roomReq.reqindex + 1}} : <span class="ty-blue"
															id="room{{roomReqIndex+1}}"> {{roomReq.name}}</span>
													</p></li>
											</ul>

										</div>
									</div>
								</div>

								<div class="col-sm-2">
									<div class="h-t-price">
										<p>Total Room Price</p>
										<span><i class="tayyarah-inr"></i> <span>
												{{getTotal()}} /per night</span> </span>
									</div>
								</div>

								<div class="col-sm-2">
									<input type="hidden" name="totalroomwithpersons"
										value="{{totalroomwithpersons}}" id="bookPerson"> <input
										type="hidden" name="ay" value="{{appkey}}" id="bookAppkey">
									<input type="hidden" name="sky" value="{{searchkey}}"
										id="SearchKey"> <input type="hidden" name="apiPro"
										value="{{HotelResult.basicPropertyInfo.apiProvider}}"
										id="hotelBasic"> <input type="hidden" name="hcode"
										value="{{HotelResult.basicPropertyInfo.hotelCode}}"
										id="hotelCode"> <input type="hidden"
										data-ng-repeat="(roomReqIndex, roomReq) in roomreqsarray "
										name="bky{{roomReq.reqindex}}" value="{{roomReq.bookingcode}}"
										id="bookingCode{{roomReq.reqindex}}" />
									<button id="corporatebook" type="submit"
										class="btn btn-info but btn-clean button-dropdown"
										ng-disabled="disableIfNotSelected()"
										ng-click="Submitted==true" value="Book">
										<span data-ng-show="ImageLoader"><img
											class="imageLoader" src="images/loginLoader.gif" /></span>Book
									</button>
								</div>
							</div>

							<div class="hoteldetail-heading">

								<ul>
									<li><a href="#accordion">Rooms</a></li>
									<li><a href="#hotel-facility">Hotel Facilities</a></li>
									<li><a href="#hotel-policies">General Hotel Policies</a></li>
									<li><a href="#resultmap-canvas">Map</a></li>
								</ul>
							</div>
						</div>

						<!-- hotel-rooms-selected -->

						<!-- Tayyarah TBO Content Function -->
						<div class="panel-group" id="accordion">

							<div class="panel panel-default"
								data-ng-repeat="(roomReqIndex, obj) in indexarray ">
								<div class="hotel-roomselecting clearfix">
									<a data-toggle="collapse" class="accordiontoggle"
										data-parent="#accordion"
										data-target="#collapse{{(roomReqIndex) + 1}}"> ROOM :
										{{(roomReqIndex) + 1}}</a>
									<div id="collapse{{(roomReqIndex) + 1}}"
										class="panel-collapse collapse"
										data-ng-class="{'in':roomReqIndex==0}">


										<div class="hotel-room-showing">
											<div id="standared" class="roomtype">
												<div class="col-sm-12 clearfix" id="r-type">
													<div class="room-type">
														<ul class="room-heading clearfix">
															<li class="r_type">Room Type</li>
															<li class="r_inclusions">Inclusions</li>
															<li class="r_price">Price</li>
															<li class="r_select">Select</li>
														</ul>
														<div class="clearfix room-type-repeat"
															data-ng-repeat="(roomindex, room) in GetRoomRequestOptions(roomReqIndex, HotelResult.roomRates.roomRates)">

															<label id="{{room.RoomIndex}}"
																class="roomtype{{roomReqIndex}}"> <!-- removed gere to loop rooms with out select option:: data-ng-style="roomindex != 0 && {'display':'none'}" -->
																<ul class="room-type-desc clearfix">
																	<li class="name">

																		<p>{{getselectroomtype(room.RoomIndex)}}</p>
																		<figure
																			data-ng-if="getroomimage(room.roomTypeCode)!= '' ">
																			<img src="{{getroomimage(room.roomTypeCode)}}"
																				alt="hotel-img">
																			<figcaption>
																				<!-- <h4>{{getselectroomtype(room.RoomIndex)}}</h4> -->
																			</figcaption>
																		</figure>

																	</li>
																	<li class="faci"><span
																		data-ng-repeat="amenity in getamenityType(room.roomTypeCode,roomindex) track by $index">
																			{{amenity}}</span></li>

																	<li class="price">
																		<p class="h3">
																			<i class="tayyarah-inr"></i>{{getroomrate(room.bookingCode)}}
																			<span>per room / per night</span>
																		</p>
																		<div class="free-cancelation">
																			<a data-target="#cancelPolicy" data-toggle="modal"
																				class="cancelpolicymodel"
																				data-rateplancode="{{room.ratePlanCode}}"
																				data-roomindex="{{roomindex}}"><i
																				class="tayyarah-info-circle"></i> <span>Cancellation
																					Policy</span></a>

																		</div>
																	</li>

																	<li class="bok-ty">
																		<!-- {{room.price}} --> <span class="highlight"
																		data-ng-if="roomReqIndex == 0"> <input
																			type="radio" name="rad{{roomReqIndex}}"
																			data-ng-value="{{room.RoomIndex}}"
																			data-ng-model="room0"
																			data-ng-click="selectandchange(roomReqIndex, room.RoomIndex,$event);"
																			id="rc{{roomReqIndex}}"> <b>Select</b>
																	</span> <span class="highlight" data-ng-if="roomReqIndex == 1">
																			<input type="radio" name="rad{{roomReqIndex}}"
																			data-ng-value="{{room.RoomIndex}}"
																			data-ng-model="room1"
																			data-ng-click="selectandchange(roomReqIndex, room.RoomIndex,$event);"
																			id="rc{{roomReqIndex}}"> <b>Select</b>
																	</span> <span class="highlight" data-ng-if="roomReqIndex == 2">
																			<input type="radio" name="rad{{roomReqIndex}}"
																			data-ng-value="{{room.RoomIndex}}"
																			data-ng-model="room2"
																			data-ng-click="selectandchange(roomReqIndex, room.RoomIndex,$event);"
																			id="rc{{roomReqIndex}}"> <b>Select</b>
																	</span> <span class="highlight" data-ng-if="roomReqIndex == 3">
																			<input type="radio" name="rad{{roomReqIndex}}"
																			data-ng-value="{{room.RoomIndex}}"
																			data-ng-model="room3"
																			data-ng-click="selectandchange(roomReqIndex, room.RoomIndex,$event);"
																			id="rc{{roomReqIndex}}"> <b>Select</b>
																	</span>
																	</li>
																</ul>
															</label>
														</div>
													</div>
												</div>

											</div>
										</div>
										<!-- col-12 -->

									</div>
								</div>
							</div>

							<!-- standared -->
						</div>
						<!-- Modal -->
						<div class="modal fade" id="cancelPolicy" tabindex="-1"
							role="dialog" aria-labelledby="myModalLabel">
							<div class="modal-dialog modal-sm" role="document">
								<div class="modal-content" id="model-f-d">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal"
											aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
									</div>
									<div class="modal-body">
										<span class="arrow right pull-up arrow-primary"></span>

										<p
											data-ng-repeat="policy in CancelationPolicies track by $index">
											{{policy}}</p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-sm-12" id="hotel-facility">
							<div class="h-d-aminities">
								<div class="hotel-land-m">
									<h5>
										<b>Hotel Facilities</b>
									</h5>
									<p
										data-ng-show="HotelResult.basicPropertyInfo.hotelAmenities.length > 0">
										<span
											data-ng-repeat="(Amenityindex,Amenity) in HotelResult.basicPropertyInfo.hotelAmenities">
											{{Amenity.description}}<span
											data-ng-hide="Amenityindex == HotelResult.basicPropertyInfo.hotelAmenities.length - 1">,</span>
										</span>
									</p>
									<p
										data-ng-show="HotelResult.basicPropertyInfo.hotelAmenities.length == 0">
										<span>No Inforamtion Available</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</form>


				<div class="col-sm-12" id="hotel-policies">
					<div class="hotel-policies">
						<h4>
							<b>General Hotel Policies</b>
						</h4>
						<div class="col-sm-12">
							<p>&#042; The primary guest must be at least 18 years of age
								to check into this hotel</p>

							<p>&#042; It is mandatory for guests to present valid GOVT
								photo identification at the time of check-in.</p>
							<p>&#042; Standard hotel policy - Hotel Check-in Time is 12
								PM, Check-out Time is 12 PM. (May vary from hotel to hotel )</p>
							<p>&#042; Early check-in or late check-out is strictly
								subjected to availability and may be chargeable by the hotel.</p>
							<p>&#042; Any early check-in or late check-out request must
								be directed and reconfirmed with hotel directly.</p>
							<p>&#042; Cancellation policy would vary according to room
								type. Please check the Fare policy associated with your room</p>
							<p>&#042; In case of an increase in the hotel tariff the
								customer is liable to pay the difference if the stay period
								falls during these dates.</p>
							<p>&#042; "NO SHOW" and early checkouts are 100%
								non-refundable (including Add-Ons if any).</p>
							<p>&#042; Hotels do not allow unmarried / unrelated couples
								to check-in. This is at full discretion of the hotel management.
								No refund would be applicable in case the hotel denies check-in
								under such circumstances</p>
							<p>&#042; Guest will be responsible for any damages or
								incidentals at the hotel.</p>
							<p>&#042; Tayyarah will not be responsible for any service
								issues at the hotel.</p>
						</div>
					</div>
				</div>

				<div class="col-sm-12">
					<h4>
						<span>Map</span>
					</h4>
					<div id="resultmap-canvas"></div>
				</div>
			</div>
		</div>
		<!-- hotel-detail page -->
	</div>
	<!-- eo-row -->
</div>
<!-- eo-container -->


<script type="text/javascript">
	var query = (typeof (custom) == "undefined") ? window.location.search
			.substring(1) : custom;
	var hu = query;
	var gy = hu.split("&");
	var vars = [], hash;

	for (i = 0; i < gy.length; i++) {
		var ft = gy[i].split("=");

		vars[ft[0]] = ft[1];

	}
</script>

<script>
	$(document).on(
			"click",
			".cancelpolicymodel",
			function() {
				var rateplancode = $(this).data('rateplancode');
				var roomindex = $(this).data('roomindex');

				var des = angular.element(
						document.getElementsByClassName('cancelpolicymodel'))
						.scope().getCancelationPolicy(rateplancode, roomindex);
				console.log(des);
				// $(".modal-body #bookId").val( myBookId );
			});

	function roomchange(currentobj) {
		var optionSelected = $("#" + currentobj.id + " option:selected").val();
		var selectingroom = $("#" + currentobj.id + "").attr('class');
		$('.roomtype' + selectingroom).hide();
		$('#' + optionSelected).show();
		$('#totalprice').text();
		angular.element(document.getElementById(currentobj.id)).scope()
				.roomchange(selectingroom, optionSelected);
		//angular.element('#Roomcontroller').scope().roomchange();
	}

	$("input:checkbox").on('click', function() {
		// in the handler, 'this' refers to the box clicked on
		var $box = $(this);

		if ($box.is(":checked")) {
			// the name of the box is retrieved using the .attr() method
			// as it is assumed and expected to be immutable
			var group = "input:checkbox[name='" + $box.attr("name") + "']";
			// the checked state of the group/box on the other hand will change
			// and the current value is retrieved using .prop() method
			$(group).prop("checked", false);
			$box.prop("checked", true);
		} else {
			$box.prop("checked", false);
		}
	});

	$(document).ready(function() {

		$('#image-gallery').lightSlider({
			gallery : true,
			item : 1,
			thumbItem : 9,
			slideMargin : 0,
			speed : 500,
			onSliderLoad : function() {
				$('#image-gallery').removeClass('cS-hidden');
			}
		});

		$(window).trigger("resize");

	});

	function autoRoomCombinationSelect(rci, ri) {
		alert("You selected room " + ri + " in roomgroup  " + rci);
		//do ur auto selection here...
		// get radio buttons of all other groups..
		//select the radio buttons
	};
</script>


<script>
	$(window).scroll(function() {
		var i = $('#hotel-rooms-selected');
		var h = i.outerHeight(true);
		if ($(window).scrollTop() > h) {
			if (!i.hasClass('scroll-header'))
				i.hide().addClass('scroll-header').fadeIn("slow");
		}
		if ($(window).scrollTop() >= 250) {
			i.slideDown('slow');
		} else {
			i.removeClass('scroll-header').show();
		}
	});
</script>

<script>
	$(document).ready(function() {

		$(document).on('click', '#accordion *', function(event) {
			//  $(this) = your current element that clicked.
			// additional code
			//console.log( $('.accordiontoggle').length);
			var totalrooms = $('.accordiontoggle').length;
			if (totalrooms > 1) {
				//console.log($(this)[0].className); 
				if ($(this)[0].className == 'accordiontoggle ng-binding') {
					// console.log($(this)[0].className);				    	 
					$('#accordion').find('.collapse.in').collapse('hide');

				} else {
					//console.log($(this)); 
				}

			}
			if (totalrooms == 1) {

			}

		});

	});

	$('.hoteldetail-heading').find('a').click(function() {
		$('html, body').animate({
			scrollTop : $($(this).attr('href')).offset().top - 230
		}, 500);
		return false;

	});
</script>
<script>
	$(document).ready(function() {
		$('#fare, #searchrefine').iptOffCanvas({
			baseClass : 'offcanvas',
			type : 'left' // top, right, bottom, left.
		});
	});
</script>
<script type="text/javascript">
	var query = (typeof (custom) == "undefined") ? window.location.search
			.substring(1) : custom;
	var hu = query;
	var gy = hu.split("&");
	var vars = [], hash;
	var Rooms1 = [], hash;
	var Rooms2 = [], hash;
	var Rooms3 = [], hash;
	var Rooms4 = [], hash;
	var Rooms5 = [], hash;
	var Rooms6 = [], hash;
	var Adults1 = [], hash;
	var Childs1 = [], hash;
	var Ages = [], hash;
	for (i = 0; i < gy.length; i++) {
		var ft = gy[i].split("=");
		var paramname = decodeURIComponent(ft[0]);
		if (paramname == "$&*D5K")
			paramname = "isDymark";
		if (paramname == "$M*A@")
			paramname = "marAt";

		if (paramname == 'cityname') {
			$('#hotelcity').val(decodeURIComponent(ft[1]));
		}
		if (paramname == 'citycode') {
			$('#citycode').val(decodeURIComponent(ft[1]));
		}
		if (paramname == 'datestart') {
			$('#datein').val(decodeURIComponent(ft[1]));
		}
		if (paramname == 'dateend') {
			$('#dateout').val(decodeURIComponent(ft[1]));
		}

		vars[paramname] = ft[1];
		if (paramname != 'isDymark' && paramname != 'marAt') {
			// console.log();
			myFunction(ft[0], ft[1])
		}
	}

	function myFunction(name, value) {
		var x = document.createElement("INPUT");
		x.setAttribute("type", "hidden");
		x.setAttribute("name", name);
		x.setAttribute("value", decodeURIComponent(value));
		$("#markup").append(x);
	}

	$(document).ready(function() {
		$('#login-trigger').click(function() {
			$(this).next('#login-content').slideToggle();
			$(this).toggleClass('active');

			if ($(this).hasClass('active'))
				$(this).find('span').html('&#x25B2;')
			else
				$(this).find('span').html('&#x25BC;')
		});
	});

	$(document).on(
			'click',
			'.accordion',
			function(event) {
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
				if ($this.find('.tayy').hasClass(
						'tayyarah-keyboard_arrow_right')) {
					make_minus = true;
				}

				$('.tayyarah-keyboard_arrow_down').removeClass(
						'tayyarah-keyboard_arrow_down').addClass(
						'tayyarah-keyboard_arrow_right');

				if (make_minus) {
					$this.find('.tayy').removeClass(
							'tayyarah-keyboard_arrow_right').addClass(
							'tayyarah-keyboard_arrow_down');
				}

				var target = $this.attr('data-target')
						|| (href = $this.attr('href'))
						&& href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7
				$(target).collapse('toggle');
			});

	$(window).scroll(function() {
		var i = $('#nav');
		var h = i.outerHeight(true);
		if ($(window).scrollTop() > h) {
			if (!i.hasClass('scroll-header'))
				i.hide().addClass('scroll-header').fadeIn("slow");
		}
		if ($(window).scrollTop() >= 250) {
			i.slideDown('slow');
		} else {
			i.removeClass('scroll-header').show();
		}
	});
	$("label.block").click(function() {
		$(this).find('input:radio').attr('checked', true);
		$(this).css({
			'backgroundColor' : "#f1f1f1",
			'color' : "#d56100"
		});

	});

	$('#mark').click(function() {
		if ($("#markup").is(':visible') == false)
			$("#markup").show("slow");
		else
			$("#markup").hide();
	});

	$('#submitmarkup').click(function() {
		$('#markup').submit();
	});

	$('.btn-number').click(function(e) {
		e.preventDefault();

		fieldName = $(this).attr('data-field');
		type = $(this).attr('data-type');
		var input = $("input[name='" + fieldName + "']");

		var currentVal = parseInt(input.val());
		console.log(currentVal);
		if (!isNaN(currentVal)) {
			if (type == 'minus') {

				if (currentVal > input.attr('min')) {
					input.val(currentVal - 1).change();
					var total = $('#totaltraveller').val();
					$('#totaltraveller').val(parseInt(total) - 1);
				}
				if (parseInt(input.val()) == input.attr('min')) {
					$(this).attr('disabled', true);
				}

			} else if (type == 'plus') {
				var totallist = $('#totaltraveller').val();
				if (totallist <= 8) {
					if (currentVal < input.attr('max')) {
						input.val(currentVal + 1).change();
						var total = $('#totaltraveller').val();
						$('#totaltraveller').val(parseInt(total) + 1);

					}
					if (parseInt(input.val()) == input.attr('max')) {
						$(this).attr('disabled', true);
					}
				} else {
					// $(this).attr('disabled', true);
				}
			}
		} else {
			input.val(0);
		}

	});

	$('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event) {
		event.stopPropagation();

	});
	$('ul.dropdown-menu.mega-dropdown-menu').on('change', function(event) {
		event.stopPropagation();
	});
	$('.input-number').focusin(function() {
		$(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(
			function() {
				minValue = parseInt($(this).attr('min'));
				maxValue = parseInt($(this).attr('max'));
				valueCurrent = parseInt($(this).val());

				name = $(this).attr('name');
				if (valueCurrent >= minValue) {
					$(
							".btn-number[data-type='minus'][data-field='"
									+ name + "']").removeAttr('disabled')
				} else {
					alert('Sorry, the minimum value was reached');
					$(this).val($(this).data('oldValue'));
				}
				if (valueCurrent <= maxValue) {
					$(
							".btn-number[data-type='plus'][data-field='" + name
									+ "']").removeAttr('disabled')
				} else {
					alert('Sorry, the maximum value was reached');
					$(this).val($(this).data('oldValue'));
				}

			});
	$(".input-number").keydown(
			function(e) {

				if ($.inArray(e.keyCode, [ 46, 8, 9, 27, 13, 190 ]) !== -1
						|| (e.keyCode == 65 && e.ctrlKey === true)
						|| (e.keyCode >= 35 && e.keyCode <= 39)) {
					return;
				}

			});

	function AddHRooms() {
		var totalrooms = $('#totalrooms').val();
		console.log("asdasdsa");
		$('#totalroomtext').text(totalrooms);
		$('#totalpeopletext').text(totalrooms);
		var addrooms = "";

		$('.hotel-repeatadd').html("");
		for (var i = 0; i < parseInt(totalrooms - 1); i++) {
			// var lastindex = $('.hotel-repeat > .row:last-child').attr("index");

			var index = i + 2;
			addrooms += "<div class='row' id='rowid"+index+"' ><div class='col-sm-2 clearfix rooms-multiple'><p class='ro-heading'>Room"
					+ index
					+ ":</p></div><div class='col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Adult(s)</label><div class='input-group'> <select class='form-control' name='Adults"
					+ index
					+ "' id='RoomAdult"
					+ index
					+ "' autocomplete='off' required onchange='ChangeRoomAdultChild("
					+ index
					+ ")'><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div></div>"
					+ "<div class='col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Child(s)</label><div class='input-group'><select class='form-control' id='Childs"
					+ index
					+ "' name='Childs"
					+ index
					+ "' autocomplete='off' required onchange='InsertAge("
					+ index
					+ ")'><option>0</option> <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div></div><div id='childrow"+index+"'></div></div>"
		}
		$('.hotel-repeatadd').append(addrooms);
	}

	function InsertAge(rowindex) {
		// console.log(rowindex);

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
			addages += "<div class='col-sm-2 clearfix' id='c-age' ><div class='form-group'><label for='inputGroupSuccess2'>Child"
					+ (i + 1)
					+ "</label><div class='input-group'><select class='form-control' name='Age"+rowindex+"' autocomplete='off' required><option value='1'>< 1</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option> </select></div></div></div>";
		}
		//$('#childrow2').append(addages);
		var firstcol = "<div class='col-sm-2'></div>";
		$('#childrow' + rowindex).append(firstcol);
		$('#childrow' + rowindex).append(addages);
	}
	function ChangeRoomAdultChild(roomindex) {

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
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val()));
		}
		if (totalrooms == 3) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val()));
		}

		if (totalrooms == 4) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
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
					parseInt($('#Room1Adult').val())
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
					parseInt($('#Room1Adult').val())
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

		console.log(total);
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

	function FirstRoomChangeAChild() {
		var totaladult = $('#Room1Adult').val();
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
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val()));
		}
		if (totalrooms == 3) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val()));
		}

		if (totalrooms == 4) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
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
					parseInt($('#Room1Adult').val())
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
					parseInt($('#Room1Adult').val())
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

	function modifysearch() {
		$('#modifiedsearch').submit();
	}

	$(document).ready(function() {
		$("#changebutton").click(function() {
			$("#changerefine").hide();
			$("#searchrefine").show();
		});
	});

	var is_mobile = false;
	if ($('#hdepe').css('display') == 'none') {
		is_mobile = true;
	}
	if (is_mobile == true) {
		$('#datein').datepicker({
			numberOfMonths : 2,
			firstDay : 1,
			dateFormat : 'dd/mm/yy',
			minDate : '0',

			onSelect : function(dateStr) {
				var d1 = $(this).datepicker("getDate");
				d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
				var d2 = $(this).datepicker("getDate");
				d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
				$("#dateout").datepicker("setDate", null);
				$("#dateout").datepicker("option", "minDate", d1);
				// $("#twodpd2").datepicker("option", "maxDate", d2);

			},
			onClose : function(dateSt) {
				$("#dateout").focus();
			}
		});

		$("#dateout").datepicker({
			numberOfMonths : 2,
			firstDay : 1,
			dateFormat : 'dd/mm/yy',

			onSelect : function(dateStr) {

			}
		});
	}
	if (is_mobile == false) {
		$('#datein').datepicker({
			numberOfMonths : 2,
			firstDay : 1,
			dateFormat : 'dd/mm/yy',
			minDate : '0',

			onSelect : function(dateStr) {
				var d1 = $(this).datepicker("getDate");
				d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
				var d2 = $(this).datepicker("getDate");
				d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
				$("#dateout").datepicker("setDate", null);
				$("#dateout").datepicker("option", "minDate", d1);
				// $("#twodpd2").datepicker("option", "maxDate", d2);

			},
			onClose : function(dateSt) {
				$("#dateout").focus();
			}
		});

		$("#dateout").datepicker({
			numberOfMonths : 2,
			firstDay : 1,
			dateFormat : 'dd/mm/yy',

			onSelect : function(dateStr) {

			}
		});
	}

	function openchangeroom() {
		$('#rowid1').show();
	}

	function InsertAge(rowindex) {
		console.log(rowindex);

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
			addages += "<div class='col-sm-2 clearfix' id='c-age' ><div class='form-group'><label for='inputGroupSuccess2'>Child"
					+ (i + 1)
					+ "</label><div class='input-group'><select class='form-control' name='Age"+rowindex+"' autocomplete='off' required><option value='less1'>< 1</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option> </select></div></div></div>";
		}
		//$('#childrow2').append(addages);
		var firstcol = "<div class='col-sm-2'></div>";
		$('#childrow' + rowindex).append(firstcol);
		$('#childrow' + rowindex).append(addages);
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

		console.log(total);
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

	function modifysearch() {
		$('#modifiedsearch').submit();
	}
</script>