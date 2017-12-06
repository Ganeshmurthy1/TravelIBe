<style>
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
			<h4 class="modal-title text-center">Booking Preview</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-md-12 col-sm-12 col-xs-12 textJsutify">Kindly
					check all details before proceeding as this will charge your
					account.</div>
			</div>
			<div class="row modelrowview">
				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">
					<div class="bookReviewPPl">Flight</div>
				</div>
				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">

					<div>

						<div data-ng-if="sindex == undefined && spclindex == undefined "
							class="hidden-xs border1px"
							data-ng-repeat="flightSegmentsGroups in fareflightsegment.flightSegmentsGroups">
							<div class="booking-details-heading clearfix">
								<div class="b-d-h-list clearfix">
									<div class="b-d-h-l col-sm-12 "
										data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">
										<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
											<figure>
												<span
													class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
											</figure>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2  b-p-b">

											<span> {{flightSegments.segments[0].carrier.name}} -
												{{flightSegments.segments[0].flight.number}}</span> <span>Booking
												Class : {{flightSegments.segments[0].cabin.code}}</span>

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
									</div>
								</div>
							</div>
						</div>

						<div data-ng-if="sindex != undefined || spclindex != undefined "
							class="hidden-xs round-b-p-b"
							data-ng-repeat="flightSegmentsGroups in fareflightsegment.newFlightSegmentsGroups">

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
											<span> {{flightSegments.segments[0].carrier.name}} -
												{{flightSegments.segments[0].flight.number}}</span> <span>Booking
												Class: {{flightSegments.segments[0].cabin.code}}</span>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
											<h5>
												<b>{{flightSegments.segments[0].oriName}}</b>
											</h5>
											<time>{{flightSegments.segments[0].depTime
												}},{{flightSegments.segments[0].depDate | date:'EEE,dd MMM
												yyyy'}}</time>
										</div>
										<div class="col-md-1 col-sm-1 col-xs-1 b-p-b">
											<p class="m-rou " style="margin-bottom: 15px;">
												<i class="tayyarah-long-arrow-right"></i>
											</p>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
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
												<i class="tayyarah-clock-o"></i> {{flightSegments.segments |
												totaltime:'mm':'hhh mmm':false }}
											</p>
											<span>{{flightSegments.segments.length - 1}} Stop</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div data-ng-if="sindex != undefined || spclindex != undefined"
						class="hidden-xs"
						data-ng-repeat="flightSegmentsGroups in specialFareFlightSegment.flightSegmentsGroups"
						data-ng-if="specialFareFlightSegment!=undefined">
						<div class="booking-details-heading clearfix">
							<div class="b-d-h-list clearfix">
								<div class="b-d-h-l col-md-12 col-sm-12 col-xs-12"
									data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">

									<!--  {{Segment}} -->

									<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
										<figure>
											<span
												class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
										</figure>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
										<span> {{flightSegments.segments[0].carrier.name}} -
											{{flightSegments.segments[0].flight.number}}</span> <span>Booking
											Class: {{flightSegments.segments[0].cabin.code}}</span>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
										<h5>
											<b>{{flightSegments.segments[0].oriName}}</b>
										</h5>
										<time>{{flightSegments.segments[0].depTime
											}},{{flightSegments.segments[0].depDate | date:'EEE,dd MMM
											yyyy'}}</time>
									</div>
									<div class="col-md-1 col-sm-1 col-xs-1 b-p-b">
										<p class="m-rou " style="margin-bottom: 15px;">
											<i class="tayyarah-long-arrow-right"></i>
										</p>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2 b-p-b">
										<h5>
											<b>{{flightSegments.segments[flightSegments.segments.length
												- 1].destName}}</b>
										</h5>
										<time>{{flightSegments.segments[flightSegments.segments.length
											- 1].arrTime
											}},{{flightSegments.segments[flightSegments.segments.length -
											1].arrDate | date:'EEE, dd MMM yyyy'}}</time>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2">
										<p class="h4" data-ng-if="flightSegments.segments.length == 3">
											<i class="tayyarah-clock-o"></i>
											{{getlayovercomparelevel2(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart,flightSegments.segments[1].arrival,flightSegments.segments[2].depart)
											}}
										</p>
										<p class="h4" data-ng-if="flightSegments.segments.length == 2">
											<i class="tayyarah-clock-o"></i>
											{{getlayovercompare(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart)
											}}
										</p>
										<p class="h4" data-ng-if="flightSegments.segments.length == 1">
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
								</div>
							</div>

						</div>
					</div>

				</div>



				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow"
					style="background: #d56100;">
					<div class="bookPreviewOrange">
						<div class="col-md-9 col-sm-9 col-xs-9">Passenger</div>
						<div class="col-md-3 col-sm-3 col-xs-3">Price</div>

					</div>
				</div>


				<div class="col-md-12 col-sm-12 col-xs-12 reviewRow">


					<div
						style="margin-bottom: -10px; text-align: center; text-size: 18px;">
						<div class="col-md-12 col-sm-12 col-xs-12 passengerDet">
							<div data-ng-if="passport== ''" class="">
								<div id="datatable-icons">

									<div class="col-md-12 col-sm-12 col-xs-12 passportNtNull">
										<div class="col-md-10 col-sm-10 col-xs-9 passall"
											data-ng-repeat="passengerArray in passengerDetails">
											<span class="passno">{{$index+1 }}.</span> <span
												class="passtit">{{passengerArray.title}}</span> <span
												class="passfn">{{passengerArray.firstName}}</span> <span
												class="passln">{{passengerArray.lastName}}</span>
											<div class="col-md-12 col-sm-12 col-xs-12 passportNtNull">
												<span
													ng-hide="passengerArray.baggagecode == null||passengerArray.baggagecode ==undefined || passengerArray.baggageWeight == 0"
													class="passmc">Baggage:{{passengerArray.baggageWeight}}Kg</span>
												<span
													ng-hide="passengerArray.mealcode == null||passengerArray.mealcode == 'No Meal'"
													class="passmc">Meal:{{passengerArray.mealName}}</span> <span
													ng-hide="passengerArray.seatcode ==null||passengerArray.seatcode =='None'||passengerArray.seatcode ==undefined"
													class="passsc">Seat:{{passengerArray.seatName}}</span>
												&nbsp; <span
													ng-hide="passengerArray.returnbaggagecode == null||passengerArray.returnbaggagecode ==undefined || passengerArray.returnbaggageWeight == 0"
													class="passmc">Return
													Baggage:{{passengerArray.returnbaggageWeight}}Kg</span> <span
													ng-hide="passengerArray.returnmealcode == null||passengerArray.returnmealcode == 'No Meal'"
													class="passmc">Return
													Meal:{{passengerArray.returnmealName}}</span> <span
													ng-hide="passengerArray.returnseatcode ==null||passengerArray.returnseatcode =='None'||passengerArray.returnseatcode ==undefined"
													class="passsc">Return
													Seat:{{passengerArray.returnseatName}}</span>
											</div>

										</div>
										<div class="col-md-2 col-sm-2 col-xs-3 pad-LR-Zero">
											<span class="passam">{{totelprice}}&nbsp;{{fareflightsegment.apiCurrency}}</span>
										</div>
									</div>

								</div>
							</div>
							<div data-ng-if="passport != ''" class="">
								<div id="datatable-icons passportNtNull">
									<div class="col-md-12 col-sm-12 col-xs-12 passportNtNull">
										<div class="col-md-10 col-sm-10 col-xs-10 passall"
											data-ng-repeat="passengerArray in passengerDetails">
											<span class="passno">{{$index+1 }}.</span> <span
												class="passtit">{{passengerArray.title}}</span> <span
												class="passfn">{{passengerArray.firstName}}</span> <span
												class="passln">{{passengerArray.lastName}}</span> <span
												class="passpp" data-ng-hide="passport== ''">&nbsp;{{passengerArray.passportNo}}</span>
											<div class="col-md-12 col-sm-12 col-xs-12 mealDetailsMob">
												<span
													ng-hide="passengerArray.baggagecode == null||passengerArray.baggagecode =='undefined' || passengerArray.baggageWeight == 0"
													class="passmc">Baggage:{{passengerArray.baggageWeight}}Kg</span>
												<span
													ng-hide="passengerArray.mealcode == null||passengerArray.mealcode == 'No Meal'"
													class="passmc">Meal:{{passengerArray.mealName}}</span> <span
													ng-hide="passengerArray.seatcode ==null||passengerArray.seatcode =='None'||passengerArray.seatcode ==undefined"
													class="passsc">Seat:{{passengerArray.seatName}}</span>
												&nbsp; <span
													ng-hide="passengerArray.returnbaggagecode == null||passengerArray.returnbaggagecode =='undefined' || passengerArray.returnbaggageWeight == 0"
													class="passmc">Return
													Baggage:{{passengerArray.returnbaggageWeight}}Kg</span> <span
													ng-hide="passengerArray.returnmealcode == null||passengerArray.returnmealcode == 'No Meal'"
													class="passmc">Return
													Meal:{{passengerArray.returnmealName}}</span> <span
													ng-hide="passengerArray.returnseatcode ==null||passengerArray.returnseatcode =='None'||passengerArray.returnseatcode ==undefined"
													class="passsc">Return
													Seat:{{passengerArray.returnseatName}}</span>
											</div>
										</div>
										<div class="col-md-2 col-sm-2 col-xs-2 pad-LR-Zero">
											<span class="passam">{{totelprice}}&nbsp;{{fareflightsegment.apiCurrency}}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="modal-footer" style="margin-bottom: -15px;">
				<button class="btn btn-default bordergrey" ng-click="cancel()">Cancel</button>
				<button class="btn btn-info mobContinue"
					ng-click="continueBooking()">Continue</button>

			</div>
		</div>
	</div>