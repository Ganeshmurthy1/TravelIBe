<style>
.radio {
	position: relative;
	float: left;
	clear: left;
	display: block;
	padding-left: 20px;
	margin-bottom: 6px;
	line-height: 11px;
	font-size: 9px;
	color: #666;
	cursor: pointer;
}

.padLR0 {
	padding-left: 0px;
	padding-right: 0px;
}

.margin-0 {
	margin: 0;
}

.LpriceM {
	border-left: 1px solid gray;
	padding-bottom: 4%;
	margin-top: 11px;
	margin-left: 0px;
	padding-top: 1.9%;
}

.LpriceMlast {
	border-left: 1px solid gray;
	margin-left: 0px;
	padding-top: 5%;
	padding-bottom: 2.2%;
	margin-top: -2px;
	border-top: 1px solid gray;
}

.LpriceMSel {
	border-left: 1px solid gray;
	margin-left: 0px;
	padding-top: 6%;
	margin-top: 10px;
	padding-bottom: 5.9%;
}

.radio:before {
	background: #fff;
	content: "";
	position: absolute;
	display: inline-block;
	top: 0;
	left: 0;
	width: 11px;
	height: 10px;
	border: 1px solid #bbb;
	border-radius: 100%;
	-moz-border-radius: 100%;
	-webkit-border-radius: 100%;
	box-shadow: inset 0 0 3px 0 #ccc;
	-moz-box-shadow: inset 0 0 3px 0 #ccc;
	-webkit-box-shadow: inset 0 0 3px 0 #ccc;
}

input[type="radio"] {
	display: none;
}

input[type="radio"]:checked+label:before {
	content: "\2022";
	text-align: center;
	line-height: 6px;
	font-family: Tahoma;
	font-size: 15px;
	color: #00a0db;
	text-shadow: none !important;
	width: 11px;
	left: 0px;
}

.font_20 {
	font-size: 20px;
}

.lowpriceRed {
	background: #d50014;
	margin-bottom: -10px;
	padding-left: 4px;
	text-align: center;
	text-size: 18px;
	color: white;
}

.lowpriceGreen {
	background: green;
	margin-bottom: -10px;
	padding-left: 4px;
	text-align: center;
	text-size: 18px;
	color: white;
}

.b-d-h-list .b-d-h-l p.h4 {
	font-size: 10px !important;
}

.modal-dialog .modal-content {
	margin-left: -96px;
}

.margintop85px {
	width: 119%;
}

.timeModal .modal-header {
	background: #3B7398;
	padding-top: 11px;
	border-radius: 7px 7px 0px 0px;
}

.timeModal .modal-header h4 {
	color: #FFF;
	line-height: 0.428571;
	padding-bottom: 11px;
}

.reviewRow {
	padding-left: 0px !important;
	padding-right: 0px !important;
}

.modelrowview {
	border: 1px solid #009688;
}

#datatable-icons .passno, #datatable-icons .passtit {
	float: left;
	font-size: 13px;
	padding-left: 10px;
	font-weight: 600;
}

#datatable-icons .passpp {
	color: #3b4874;
	float: left;
	font-size: 13px;
	padding-left: 10px;
	font-weight: 600;
	text-transform: uppercase;
}

#datatable-icons .passfn, #datatable-icons .passln {
	float: left;
	font-size: 13px;
	padding-left: 10px;
	font-weight: 600;
	text-transform: capitalize;
}

#datatable-icons .passmc, #datatable-icons .passsc {
	float: left;
	font-size: 10px;
	padding-left: 10px;
	color: rgba(35, 13, 6, 0.74);
}

#datatable-icons .passam {
	font-size: 18px;
	padding-left: 10px;
	font-weight: 600;
}

.passengerDet {
	padding-left: 0px;
	border: 1px solid red;
}

.passall {
	border-right: 1px solid #009688;
}

.b-d-h-l  figure {
	margin: 7px;
}

.booking-details-heading .b-d-h-l .b-p-b {
	border-right: 1px solid #009688;
}

.booking-details-heading .b-d-h-l p.h4 {
	margin-bottom: 0px !important;
}

.b-p-b time {
	font-size: 10px !important;
}

.round-b-p-b {
	border-bottom: 1px solid #009688;
}

.b-p-b span {
	font-size: 10px !important;
}
</style>
<div class="margintop85px modal-lg" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel">
	<div class="modal-content timeModal">
		<div class="modal-header">
			<h4 class="modal-title text-center">Low Fare Alert</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12 col-sm-12 col-xs-12 textJsutify">The
					flight selected is not the cheapest the Flight.</div>
			</div>
			<div class="row modelrowview">
				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">
					<div class="lowpriceRed">Selected Flight</div>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">

					<div>

						<div data-ng-if="isOneway == true" class="hidden-xs border1px"
							data-ng-repeat="flightSegmentsGroups in fareflightsegment.flightSegmentsGroups">
							<div class="booking-details-heading clearfix">
								<div class="b-d-h-list clearfix">
									<div class="b-d-h-l col-sm-12 "
										data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">
										<div class="col-md-1 col-sm-1 col-xs-1 b-p-b">
											<figure>
												<span
													class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
											</figure>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2  b-p-b">

											<span class="row margin-0">
												{{flightSegments.segments[0].carrier.name}} -
												{{flightSegments.segments[0].flight.number}}</span> <span
												class="row margin-0">Booking Class :
												{{flightSegments.segments[0].cabin.code}}</span>

										</div>
										<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
											<h5>
												<b>{{flightSegments.segments[0].oriName}}</b>
											</h5>
											<time>{{flightSegments.segments[0].depTime }}</time>
											,
											<time>{{flightSegments.segments[0].depDate |
												date:'EEE, dd MMM'}}</time>
										</div>

										<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
											<h5>
												<b>{{flightSegments.segments[flightSegments.segments.length
													- 1].destName}}</b>
											</h5>
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrTime }}</time>
											,
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrDate | date:'EEE, dd MMM'}}</time>
										</div>
										<div class="col-md-1 col-sm-1 col-xs-1 b-p-b">
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 3">
												<i class="tayyarah-clock-o"></i>
												{{getlayovercomparelevel2(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart,flightSegments.segments[1].arrival,flightSegments.segments[2].depart
												) }}
											</p>
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 2">
												<i class="tayyarah-clock-o"></i>
												{{getlayovercompare(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart
												) }}
											</p>
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 1">
												<i class="tayyarah-clock-o"></i> {{flightSegments.segments |
												totaltime:'mm':'hhh mmm':false }}
											</p>

											<span data-ng-show="flightSegments.segments.length == 1">{{flightSegments.segments.length
												- 1}} Stop</span> <span
												data-ng-show="flightSegments.segments.length == 2">{{flightSegments.segments.length
												- 1}} Stop</span> <span
												data-ng-show="flightSegments.segments.length > 2">{{flightSegments.segments.length
												- 1}} Stops</span>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2">
											<div class="flight-timings">
												<p class="font_20 mobMargin-btm ng-binding">
													<i data-ng-class="classname" class="tayyarah-INR"></i>{{fareflightsegment.totalPrice}}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div data-ng-if="isOneway != true" class="hidden-xs">
							<div
								class="col-md-12 col-sm-12 col-xs-12 padLR0 hidden-xs round-b-p-b">
								<div class="hidden-xs col-md-10 col-sm-10 padLR0 col-xs-10">

									<div class="round-b-p-b"
										data-ng-repeat="flightSegmentsGroups in fareflightsegment.flightSegmentsGroups">
										<div class="booking-details-heading clearfix">
											<div class="b-d-h-list clearfix">
												<div class="b-d-h-l col-md-12 col-sm-12 col-xs-12 "
													data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">
													<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
														<figure>
															<span
																class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
														</figure>
													</div>
													<div class="col-md-2 col-sm-2 col-xs-2  b-p-b">

														<span class="row margin-0">
															{{flightSegments.segments[0].carrier.name}} -
															{{flightSegments.segments[0].flight.number}}</span> <span
															class="row margin-0">Booking Class :
															{{flightSegments.segments[0].cabin.code}}</span>

													</div>
													<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
														<h5>
															<b>{{flightSegments.segments[0].oriName}}</b>
														</h5>
														<time>{{flightSegments.segments[0].depTime }}</time>
														,
														<time>{{flightSegments.segments[0].depDate |
															date:'EEE, dd MMM'}}</time>
													</div>

													<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
														<h5>
															<b>{{flightSegments.segments[flightSegments.segments.length
																- 1].destName}}</b>
														</h5>
														<time>{{flightSegments.segments[flightSegments.segments.length
															- 1].arrTime }}</time>
														,
														<time>{{flightSegments.segments[flightSegments.segments.length
															- 1].arrDate | date:'EEE, dd MMM'}}</time>
													</div>
													<div class="col-md-2 col-sm-2 col-xs-2 ">
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 3">
															<i class="tayyarah-clock-o"></i>
															{{getlayovercomparelevel2(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart,flightSegments.segments[1].arrival,flightSegments.segments[2].depart
															) }}
														</p>
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 2">
															<i class="tayyarah-clock-o"></i>
															{{getlayovercompare(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart
															) }}
														</p>
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 1">
															<i class="tayyarah-clock-o"></i>
															{{flightSegments.segments | totaltime:'mm':'hhh
															mmm':false }}
														</p>

														<span data-ng-show="flightSegments.segments.length == 1">{{flightSegments.segments.length
															- 1}} Stop</span> <span
															data-ng-show="flightSegments.segments.length == 2">{{flightSegments.segments.length
															- 1}} Stop</span> <span
															data-ng-show="flightSegments.segments.length > 2">{{flightSegments.segments.length
															- 1}} Stops</span>
													</div>

												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2 col-sm-2 col-xs-2 LpriceMSel">
									<div class="flight-timings">
										<p class="font_20 mobMargin-btm ng-binding">
											<i data-ng-class="classname" class="tayyarah-INR"></i>{{fareflightsegment.totalPrice}}
										</p>
									</div>
								</div>

							</div>
						</div>



					</div>
				</div>



				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow"
					style="background: #d56100;">
					<div class="bookPreviewOrange"></div>
				</div>


				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">


					<div
						style="margin-bottom: -10px; text-align: center; text-size: 18px;">


					</div>
				</div>
			</div>
			<div class="row modelrowview">
				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">
					<div class="lowpriceGreen">Recommended Flight(s)</div>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">

					<div>

						<div data-ng-if="isOneway == true " class="hidden-xs border1px">
							<div class="booking-details-heading clearfix"
								data-ng-repeat="flightSegmentsGroups in cheapfareflightsegment.flightSegmentsGroups">
								<div class="b-d-h-list clearfix">
									<div class="b-d-h-l col-sm-12 "
										data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">
										<div class="col-md-1 col-sm-1 col-xs-1 b-p-b">
											<figure>
												<span
													class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
											</figure>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2  b-p-b">

											<span class="row margin-0">
												{{flightSegments.segments[0].carrier.name}} -
												{{flightSegments.segments[0].flight.number}}</span> <span
												class="row margin-0">Booking Class :
												{{flightSegments.segments[0].cabin.code}}</span>

										</div>
										<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
											<h5>
												<b>{{flightSegments.segments[0].oriName}}</b>
											</h5>
											<time>{{flightSegments.segments[0].depTime }}</time>
											,
											<time>{{flightSegments.segments[0].depDate |
												date:'EEE, dd MMM'}}</time>
										</div>

										<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
											<h5>
												<b>{{flightSegments.segments[flightSegments.segments.length
													- 1].destName}}</b>
											</h5>
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrTime }}</time>
											,
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrDate | date:'EEE, dd MMM'}}</time>
										</div>
										<div class="col-md-1 col-sm-1 col-xs-1 b-p-b">
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 3">
												<i class="tayyarah-clock-o"></i>
												{{getlayovercomparelevel2(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart,flightSegments.segments[1].arrival,flightSegments.segments[2].depart
												) }}
											</p>
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 2">
												<i class="tayyarah-clock-o"></i>
												{{getlayovercompare(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart
												) }}
											</p>
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 1">
												<i class="tayyarah-clock-o"></i> {{flightSegments.segments |
												totaltime:'mm':'hhh mmm':false }}
											</p>

											<span data-ng-show="flightSegments.segments.length == 1">{{flightSegments.segments.length
												- 1}} Stop</span> <span
												data-ng-show="flightSegments.segments.length == 2">{{flightSegments.segments.length
												- 1}} Stop</span> <span
												data-ng-show="flightSegments.segments.length > 2">{{flightSegments.segments.length
												- 1}} Stops</span>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2">
											<div class="flight-timings">
												<p class="font_20 mobMargin-btm ng-binding">
													<i data-ng-class="classname" class="tayyarah-INR"></i>{{cheapfareflightsegment.totalPrice}}
												</p>
												<div style="margin-left: 15px;" class="row">

													<button class="btn-info mobContinue"
														ng-click="lowfareBooking()">Select</button>



												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- 2nd lowest fare flight -->
							<div class="booking-details-heading clearfix"
								data-ng-repeat="flightSegmentsGroups in nextcheapfareflightsegment.flightSegmentsGroups">
								<div class="b-d-h-list clearfix">
									<div class="b-d-h-l col-sm-12 "
										data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">
										<div class="col-md-1 col-sm-1 col-xs-1 b-p-b">
											<figure>
												<span
													class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
											</figure>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2  b-p-b">

											<span class="row margin-0">
												{{flightSegments.segments[0].carrier.name}} -
												{{flightSegments.segments[0].flight.number}}</span> <span
												class="row margin-0">Booking Class :
												{{flightSegments.segments[0].cabin.code}}</span>

										</div>
										<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
											<h5>
												<b>{{flightSegments.segments[0].oriName}}</b>
											</h5>
											<time>{{flightSegments.segments[0].depTime }}</time>
											,
											<time>{{flightSegments.segments[0].depDate |
												date:'EEE, dd MMM'}}</time>
										</div>

										<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
											<h5>
												<b>{{flightSegments.segments[flightSegments.segments.length
													- 1].destName}}</b>
											</h5>
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrTime }}</time>
											,
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrDate | date:'EEE, dd MMM'}}</time>
										</div>
										<div class="col-md-1 col-sm-1 col-xs-1 b-p-b">
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 3">
												<i class="tayyarah-clock-o"></i>
												{{getlayovercomparelevel2(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart,flightSegments.segments[1].arrival,flightSegments.segments[2].depart
												) }}
											</p>
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 2">
												<i class="tayyarah-clock-o"></i>
												{{getlayovercompare(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart
												) }}
											</p>
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 1">
												<i class="tayyarah-clock-o"></i> {{flightSegments.segments |
												totaltime:'mm':'hhh mmm':false }}
											</p>

											<span data-ng-show="flightSegments.segments.length == 1">{{flightSegments.segments.length
												- 1}} Stop</span> <span
												data-ng-show="flightSegments.segments.length == 2">{{flightSegments.segments.length
												- 1}} Stop</span> <span
												data-ng-show="flightSegments.segments.length > 2">{{flightSegments.segments.length
												- 1}} Stops</span>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2">
											<div class="flight-timings">
												<p class="font_20 mobMargin-btm ng-binding">
													<i data-ng-class="classname" class="tayyarah-INR"></i>{{nextcheapfareflightsegment.totalPrice}}
												</p>
												<div style="margin-left: 15px;" class="row">
													<button class="btn-info mobContinue"
														ng-click="nextlowfareBooking()">Select</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div data-ng-if="isOneway != true ">
							<div
								class="col-md-12 col-sm-12 col-xs-12 padLR0 hidden-xs round-b-p-b">
								<div class="hidden-xs col-md-10 col-sm-10 padLR0 col-xs-10">
									<div class="round-b-p-b"
										data-ng-repeat="flightSegmentsGroups in cheapfareflightsegment.flightSegmentsGroups">

										<div class="booking-details-heading clearfix">

											<div class="b-d-h-list clearfix">
												<div class="b-d-h-l col-md-12 col-sm-12 col-xs-12"
													data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">

													<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
														<figure>
															<span
																class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
														</figure>
													</div>

													<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
														<span class="row margin-0">
															{{flightSegments.segments[0].carrier.name}} -
															{{flightSegments.segments[0].flight.number}}</span> <span
															class="row margin-0">Booking Class:
															{{flightSegments.segments[0].cabin.code}}</span>
													</div>
													<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
														<h5>
															<b>{{flightSegments.segments[0].oriName}}</b>
														</h5>
														<time>{{flightSegments.segments[0].depTime
															}},{{flightSegments.segments[0].depDate | date:'EEE,dd
															MMM yyyy'}}</time>
													</div>
													<div class="col-md-3 col-sm-3 col-xs-2 b-p-b">
														<h5>
															<b>{{flightSegments.segments[flightSegments.segments.length
																- 1].destName}}</b>
														</h5>
														<time>{{flightSegments.segments[flightSegments.segments.length
															- 1].arrTime
															}},{{flightSegments.segments[flightSegments.segments.length
															- 1].arrDate | date:'EEE, dd MMM yyyy'}}</time>

													</div>
													<div class="col-md-2 col-sm-2 col-xs-2">
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 3">
															<i class="tayyarah-clock-o"></i>
															{{getlayovercomparelevel2(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart,flightSegments.segments[1].arrival,flightSegments.segments[2].depart
															) }}
														</p>
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 2">
															<i class="tayyarah-clock-o"></i>
															{{getlayovercompare(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart
															) }}
														</p>
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 1">
															<i class="tayyarah-clock-o"></i>
															{{flightSegments.segments | totaltime:'mm':'hhh
															mmm':false }}
														</p>
														<span>{{flightSegments.segments.length - 1}} Stop</span>
													</div>
												</div>
											</div>
										</div>
									</div>

								</div>
								<div class="col-md-2 col-sm-2 col-xs-2 LpriceM">
									<div class="flight-timings">
										<p class="font_20 mobMargin-btm ng-binding">
											<i data-ng-class="classname" class="tayyarah-INR"></i>{{cheapfareflightsegment.totalPrice}}
										</p>
										<div style="margin-left: 15px;" class="row">
											<button class="btn-info mobContinue"
												ng-click="lowfareBooking()">Select</button>
										</div>
									</div>
								</div>
							</div>





							<div ng-if="nextcheapfareflightsegment !=null"
								class="col-md-12 col-sm-12 col-xs-12 padLR0 hidden-xs round-b-p-b">
								<div class="hidden-xs col-md-10 col-sm-10 padLR0 col-xs-10">
									<div class=" hidden-xs round-b-p-b"
										data-ng-repeat="flightSegmentsGroups in nextcheapfareflightsegment.flightSegmentsGroups">

										<div class="booking-details-heading clearfix">

											<div class="b-d-h-list clearfix">
												<div class="b-d-h-l col-md-12 col-sm-12 col-xs-12"
													data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">

													<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
														<figure>
															<span
																class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
														</figure>
													</div>

													<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
														<span class="row margin-0">
															{{flightSegments.segments[0].carrier.name}} -
															{{flightSegments.segments[0].flight.number}}</span> <span
															class="row margin-0">Booking Class:
															{{flightSegments.segments[0].cabin.code}}</span>
													</div>
													<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
														<h5>
															<b>{{flightSegments.segments[0].oriName}}</b>
														</h5>
														<time>{{flightSegments.segments[0].depTime
															}},{{flightSegments.segments[0].depDate | date:'EEE,dd
															MMM yyyy'}}</time>
													</div>
													<div class="col-md-3 col-sm-3 col-xs-3 b-p-b">
														<h5>
															<b>{{flightSegments.segments[flightSegments.segments.length
																- 1].destName}}</b>
														</h5>
														<time>{{flightSegments.segments[flightSegments.segments.length
															- 1].arrTime
															}},{{flightSegments.segments[flightSegments.segments.length
															- 1].arrDate | date:'EEE, dd MMM yyyy'}}</time>

													</div>
													<div class="col-md-2 col-sm-2 col-xs-2">
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 3">
															<i class="tayyarah-clock-o"></i>
															{{getlayovercomparelevel2(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart,flightSegments.segments[1].arrival,flightSegments.segments[2].depart
															) }}
														</p>
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 2">
															<i class="tayyarah-clock-o"></i>
															{{getlayovercompare(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart
															) }}
														</p>
														<p class="h4"
															data-ng-if="flightSegments.segments.length == 1">
															<i class="tayyarah-clock-o"></i>
															{{flightSegments.segments | totaltime:'mm':'hhh
															mmm':false }}
														</p>
														<span>{{flightSegments.segments.length - 1}} Stop</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-2 col-sm-2 col-xs-2 LpriceMlast">
									<div class="flight-timings">
										<p class="font_20 mobMargin-btm ng-binding">
											<i data-ng-class="classname" class="tayyarah-INR"></i>{{nextcheapfareflightsegment.totalPrice}}
										</p>
										<div style="margin-left: 15px;" class="row">
											<button class="btn-info mobContinue"
												ng-click="nextlowfareBooking()">Select</button>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>



				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow"
					style="background: #d56100;">
					<div class="bookPreviewOrange"></div>
				</div>


				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">


					<div
						style="margin-bottom: -10px; text-align: center; text-size: 18px;">
					</div>
				</div>
			</div>
			<div class="modal-footer" style="margin-bottom: -15px;">
				<form name="lowfarebook" id="continueBookingform">
					<div ng-init="value=1"
						class="col-md-12 col-sm-12 col-xs-12 reviewRow">

						<div class="row">
							<div class="col-md-4 col-sm-4 col-xs-4">
								<input id="radio1" type="radio" name="radio" value="1"
									ng-model="value" ng-change='newValue(value)'> <label
									for="radio1" class="radio">Does not suit my schedule</label>
							</div>
							<div class="col-md-4 col-sm-4 col-xs-4">
								<input id="radio2" type="radio" name="radio" value="2"
									ng-model="value" ng-change='newValue(value)'> <label
									for="radio2" class="radio">Penalty/Refund restriction</label>
							</div>
							<div class="col-md-4 col-sm-4 col-xs-4">
								<input id="radio3" type="radio" name="radio" value="3"
									ng-model="value" ng-change='newValue(value)'> <label
									for="radio3" class="radio">Alternate corporate
									preferred fare selected </label>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4 col-sm-4 col-xs-4">
								<input id="radio4" type="radio" name="radio" value="4"
									ng-model="value" ng-change='newValue(value)'> <label
									for="radio4" class="radio">Policy exception approval
									obtained</label>
							</div>
							<div class="col-md-4 col-sm-4 col-xs-4">
								<input id="radio5" type="radio" name="radio" value="5"
									ng-model="value" ng-change='newValue(value)'> <label
									for="radio5" class="radio">Personal preference </label>
							</div>
							<div class="col-md-4 col-sm-4 col-xs-4">
								<input id="radio6" type="radio" name="radio" value="6"
									ng-model="value" ng-change='newValue(value)'> <label
									for="radio6" class="radio">Location does not suit me </label>
							</div>
						</div>
						<div class="row">
							<div class="col-md-4 col-sm-4 col-xs-4">
								<input id="radio7" type="radio" name="radio" value="7"
									ng-model="value" ng-change='newValue(value)'> <label
									for="radio7" class="radio">Compliant to the company
									Travel Allowance Policy </label>
							</div>
							<div class="col-md-5 col-sm-5 col-xs-5">

								<input id="radio8" type="radio" value="8" name="radio"
									ng-model="value" ng-change='newValue(value)'> <label
									for="radio8" class="radio">Any other Reason</label> <input
									id="resText" type="text" name="resText" value="" disabled
									style="margin-right: 40px;">
							</div>
						</div>
					</div>
					<button class="btn btn-default bordergrey" ng-click="cancel()">Cancel</button>

					<button class="btn btn-info mobContinue"
						ng-click="continueBooking()">Continue</button>
				</form>
			</div>
		</div>