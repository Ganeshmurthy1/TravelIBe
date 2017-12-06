<%@taglib prefix="s" uri="/struts-tags"%>
<script src="js/jquery.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/calender/jquerycal.js"></script>
<script src="js/calender/jquerycalUI.js"></script>
<div class="">


	<div class="container" data-ng-style="{'display' : display}"
		data-ng-cloak>

		<div class="row rowsm">
			<div class="hotel-detail">


				<!-- "HotelSummary"-->
				<div data-ng-show="hidePoliciesTemplates">
					<form data-ng-submit="hotelSummary()">
						<!-- selecting hotel roomtype -->
						<div class="hotel-room-select">
							<div id="hotel-rooms-selected">
								<div class="hotel-rooms-selected clearfix">
									<div class="col-sm-8 hidden-xs">
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

									<div class="col-sm-12 col-xs-12 col-md-12 visible-xs">
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


									<div class="col-sm-2 hidden-xs">
										<div class="h-t-price">
											<p>Total Room Price</p>
											<span><i class="tayyarah-inr"></i> <span>
													{{getTotal()}} <!-- /per night -->
											</span> </span>
										</div>
									</div>
									<div class="col-sm-6 col-xs-6 col-md-6 hl-price visible-xs">
										<div class="h-t-price">
											<p>Total Room Price</p>
											<span><i class="tayyarah-inr"></i> <span>
													{{getTotal()}} <!-- /per night -->
											</span> </span>
										</div>
									</div>

									<div class="col-sm-2 hidden-xs">
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
											name="bky{{roomReq.reqindex}}"
											value="{{roomReq.bookingcode}}"
											id="bookingCode{{roomReq.reqindex}}" /> <input type="submit"
											id="hotelbookHD"
											class="btn btn-info but btn-clean button-dropdown"
											data-ng-disabled="disableIfNotSelected()"
											data-ng-click="Submitted==true" value="Book">

									</div>
									<div class="col-sm-6 col-xs-6 col-md-6 hl-book visible-xs">
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
											name="bky{{roomReq.reqindex}}"
											value="{{roomReq.bookingcode}}"
											id="bookingCode{{roomReq.reqindex}}" /> <input type="submit"
											id="hotelbookHD"
											class="btn btn-info but btn-clean button-dropdown"
											data-ng-disabled="disableIfNotSelected()"
											data-ng-click="Submitted==true" value="Book">

									</div>
								</div>

								<div class="hoteldetail-heading">

									<ul>
										<li><a class="scroll" target="accordion">Rooms</a></li>
										<li><a class="scroll" target="hotel-facility">Hotel
												Facilities</a></li>
										<li><a class="scroll" target="hotel-policies">General
												Hotel Policies</a></li>
										<li><a class="scroll" target="slidemap-cancas">Map</a></li>

									</ul>
								</div>

							</div>

							<!-- hotel-rooms-selected -->

							<!-- Tayyarah TBO Content Function -->
							<div class="panel-group" id="accordion">

								<div class="panel panel-default"
									data-ng-repeat="(roomReqIndex, obj) in indexarray ">
									<div class="hotel-roomselecting clearfix">
										<a data-toggle="collapse" class="accordiontoggle "
											data-ng-class="{'collapsed':roomReqIndex>0}"
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
																<li class="r_type col-xs-5">Room Type</li>
																<li class="r_inclusions hidden-xs">Inclusions</li>
																<li class="r_price col-xs-4">Price</li>
																<li class="r_select col-xs-3 ">Select</li>
															</ul>
															<div class="clearfix room-type-repeat"
																data-ng-repeat="(roomindex, room) in GetRoomRequestOptions(roomReqIndex, HotelResult.roomRates.roomRates)">

																<label id="{{room.RoomIndex}}"
																	class="roomtype{{roomReqIndex}}"> <!-- removed gere to loop rooms with out select option:: data-ng-style="roomindex != 0 && {'display':'none'}" -->
																	<ul class="room-type-desc clearfix">
																		<li class="name col-xs-5">

																			<p ng-if="getselectroomtype(room.RoomIndex)== undefined" >No Information Available</p>
																			<p ng-if="getselectroomtype(room.RoomIndex) != undefined" >{{getselectroomtype(room.RoomIndex)}}</p>
																			<div class="free-cancelation">
																				<a data-target="#hotel-facil" data-toggle="modal"
																					class="cancelpolicymodel"
																					data-rateplancode="{{room.ratePlanCode}}"
																					data-roomindex="{{roomindex}}"><i
																					class="tayyarah-info-circle"></i> <span>Inclusions
																				</span></a>

																			</div>

																		</li>
																		<li class="faci hidden-xs"><span
																			data-ng-repeat="amenity in getamenityType(room.roomTypeCode,roomindex) track by $index">
																				{{amenity}}</span></li>

																		<li class="price col-xs-4">
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

																		<li class="bok-ty col-xs-3">
																			<!-- {{room.price}} --> <span class="highlight"
																			data-ng-if="roomReqIndex == 0"> <input
																				type="radio" name="rad{{roomReqIndex}}"
																				data-ng-value="{{room.RoomIndex}}"
																				data-ng-model="room0"
																				data-ng-click="selectandchange(roomReqIndex, room.RoomIndex,$event);"
																				id="rc{{roomReqIndex}}"> <b>Select</b>
																		</span> <span class="highlight"
																			data-ng-if="roomReqIndex == 1"> <input
																				type="radio" name="rad{{roomReqIndex}}"
																				data-ng-value="{{room.RoomIndex}}"
																				data-ng-model="room1"
																				data-ng-click="selectandchange(roomReqIndex, room.RoomIndex,$event);"
																				id="rc{{roomReqIndex}}"> <b>Select</b>
																		</span> <span class="highlight"
																			data-ng-if="roomReqIndex == 2"> <input
																				type="radio" name="rad{{roomReqIndex}}"
																				data-ng-value="{{room.RoomIndex}}"
																				data-ng-model="room2"
																				data-ng-click="selectandchange(roomReqIndex, room.RoomIndex,$event);"
																				id="rc{{roomReqIndex}}"> <b>Select</b>
																		</span> <span class="highlight"
																			data-ng-if="roomReqIndex == 3"> <input
																				type="radio" name="rad{{roomReqIndex}}"
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
								<div class="modal-dialog margintop85px" tabindex="-1"
									role="dialog" role="document" aria-labelledby="myModalLabel">
									<div class="modal-content timeModal" id="model-f-d">
										<div class="modal-header">
											<h4 class="modal-title text-center">Cancelation Policies</h4>
										</div>
										<div class="modal-body errorBody">
											<div class="row padtopDown10px text-center"></div>
											<div class="row padtopDown10px blueText text-center"></div>

											<div class="fixeddiag">
												<div data-ng-show="CancelationPolicies.length > 0"
													data-ng-repeat="policy in CancelationPolicies track by $index">
													<p>
														<label class="dialogarrow"></label>{{policy}}
													</p>
												</div>
												<div data-ng-show="CancelationPolicies.length == 0">
													<p>No Information Available</p>
												</div>
											</div>
											<div class="col-md-12 col-sm-12 col-xs-12 margin-TopBtm">
												<div class="col-md-7 col-sm-7 col-xs-12"></div>
											</div>

											<div>
												<div class="row ">
													<div class="modal-footer"
														style="padding-top: 2px !important; height: 45px;">
														<div class=" tayy-button ">
															<button type="button"
																class="btn btn-default btn-xs dialogcenbtn border-Btn"
																data-dismiss="modal">Close</button>
														</div>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="modal fade" id="hotel-facil" tabindex="-1"
								role="dialog" aria-labelledby="myModalLabel">
								<div class="modal-dialog margintop85px" tabindex="-1"
									role="dialog" role="document" aria-labelledby="myModalLabel">
									<div class="modal-content timeModal" id="hotel-facil">
										<div class="modal-header">
											<h4 class="modal-title text-center">Hotel Facilities</h4>
										</div>
										<div class="modal-body errorBody">
											<div class="row padtopDown10px text-center"></div>
											<div class="row padtopDown10px blueText text-center"></div>
											<div class="fixeddiag">
												<div
													data-ng-show="HotelResult.basicPropertyInfo.hotelAmenities.length > 0">
													<div class="col-md-12 col-sm-12 col-xs-12"
														data-ng-repeat="(Amenityindex,Amenity) in HotelResult.basicPropertyInfo.hotelAmenities">
														<p class="col-md-1 col-sm-1 col-xs-1">{{Amenityindex
															+1}}.</p>
														<p class="col-md-11 col-sm-11 col-xs-11">
															<label class="dialogarrow"></label><span>{{Amenity.description}}
																<span
																data-ng-hide="Amenityindex == HotelResult.basicPropertyInfo.hotelAmenities.length - 1"></span>
															</span>
														</p>
													</div>
												</div>
												<p
													data-ng-show="HotelResult.basicPropertyInfo.hotelAmenities.length == 0">
													<span>No Information Available</span>
												</p>
											</div>
											<div class="col-md-12 col-sm-12 col-xs-12 margin-TopBtm">
												<div class="col-md-7 col-sm-7 col-xs-12"></div>
											</div>

											<div>
												<div class="row ">
													<div class="modal-footer"
														style="padding-top: 2px !important; height: 45px;">
														<div class=" tayy-button ">
															<button type="button"
																class="btn btn-default btn-xs dialogcenbtn border-Btn"
																data-dismiss="modal">Close</button>
														</div>
													</div>

												</div>
											</div>
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
											<span>No Information Available</span>
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
									to check-in. This is at full discretion of the hotel
									management. No refund would be applicable in case the hotel
									denies check-in under such circumstances</p>
								<p>&#042; Guest will be responsible for any damages or
									incidentals at the hotel.</p>
								<p>&#042; Tayyarah will not be responsible for any service
									issues at the hotel.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- hotel-detail page -->
	</div>

</div>
<script>
	$(document).ready(function() {
	$('.scroll').click(function() {
	    $('body').animate({
	        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 230)
	    }, 1000);
	});
	});
	</script>
