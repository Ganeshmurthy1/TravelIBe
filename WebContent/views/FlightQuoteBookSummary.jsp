<style type="text/css">
.sortorder:after {
	content: '\25b2';
}

.sortorder.reverse:after {
	content: '\25bc';
}

#leftloading {
	padding-left: 60px;
}

.pricesmallload {
	width: 50px;
	float: right;
}
</style>
<%@taglib prefix="s" uri="/struts-tags"%>
<div class="SessionTemplate">
	<div class="seeeeee" data-ng-show="bookloader" data-ng-cloak>
		<div class="visible-xs gradient">
			<div class="spinner">
				<!-- <p class="white"><i class="tayyarah-plane"></i></p> -->
				<div class="rect1"></div>
				<div class="rect2"></div>
				<div class="rect3"></div>
				<div class="rect4"></div>
				<div class="rect5"></div>
				<p class="white">Loading....</p>
			</div>
		</div>
		<div class="search-advertisement-box hidden-xs">
			<div class="clearfix">
				<img src="images/loadingflight.gif" style="width: 50px;"
					alt="loading......" />
				<p class="h5">Please wait while we are booking best fare for you
				</p>

			</div>
		</div>
	</div>

	<div>

		<div class="container">


			<div class="login-pop-up clearfix" id="farechangediv"
				data-ng-style="{ 'display' : faredivdisplay}">
				<div class="login-pop-continer fare-change">
					<div class="login-pop-header clearfix">

						<div class="col-xs-6">
							<p class="h4">Fare Change alert</p>
						</div>
						<div class="col-xs-6"></div>
					</div>
					<div class="login-pop-content">
						<div class="oops">
							<p class="bg-info" style="padding: 5px;">
								<span><i class="tayyarah-info-circle fa-2x"></i></span>
								{{pricechagetext}} <i data-ng-class="classname"></i>
								{{updatedprice}}
							</p>
						</div>
						<div class="clearfix">
							<div class="col-xs-5 updated clearfix">
								<ul>
									<li>Old fare<span class=""><i
											data-ng-class="classname"></i> {{oldprice}}</span></li>
									<li>Updated fare<span class=""><i
											data-ng-class="classname"></i>{{updatedprice}}</span></li>
								</ul>
							</div>
							<div class="col-xs-7 reasons clearfix">
								<h5>Reasons</h5>
								<ul>
									<li>Airfares are dynamic and subject to change.This change
										is beyond our control</li>
								</ul>
							</div>
						</div>

						<div class=" clearfix text-center">
							<button type="button" class="btn btn-primary b-ok "
								id="Continuefare" data-ng-click="updateQuotation()">Update
								Quotation</button>

						</div>
					</div>
					<div class="login-pop-footer cleqarfix"></div>
				</div>
			</div>



			<div class="booking-details clearfix"
				data-ng-show="MainContentDisplay">
				<aside class="col-sm-3 offcanvas" id="fare"
					data-ng-show="fareloader">

					<div class="closebtn done">
						<button class="offcanvas__trigger--close btn" data-rel="fare">Done</button>
					</div>
					<div class="clearfix">
						<div class="booking-box">
							<h4>Fare Breakup</h4>
							<ul class="booking-fare-details">

								<li>Adult BasePrice <span> x {{adult}}</span><span
									data-ng-style="{ 'display' : isfareloaded}" class="pull-right"><i
										data-ng-class="classname"></i> {{Adulttotalbaseprice}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li data-ng-hide="child == 0">Child BasePrice<span>
										x {{child}}</span><span data-ng-style="{ 'display' : isfareloaded}"
									class="pull-right"><i data-ng-class="classname"></i>
										{{getbasecurrencyvalue(Childtotalbaseprice,fareflightsegment.exchangeRate)}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li data-ng-hide="infant == 0">Infant BasePrice<span>
										x {{infant}}</span><span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>
										{{getbasecurrencyvalue(Infanttotalbaseprice,fareflightsegment.exchangeRate)}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li>Adult Taxes <span> x {{adult}}</span><span
									class="pull-right" data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>
										{{getbasecurrencyvalue(Adulttotaltaxes,fareflightsegment.exchangeRate)}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li data-ng-hide="child == 0">Child Taxes<span> x
										{{child}}</span><span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>
										{{getbasecurrencyvalue(Childtotaltaxes,fareflightsegment.exchangeRate)}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li data-ng-hide="infant == 0">Infant Taxes<span> x
										{{infant}}</span><span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>
										{{getbasecurrencyvalue(Infanttotaltaxes,fareflightsegment.exchangeRate)}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li data-ng-show="adult > 1 || child >= 1 || infant >= 1">Adult
									<span> x {{adult}}</span><span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>
										{{getbasecurrencyvalue(Adulttotalprice,fareflightsegment.exchangeRate)}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span>
								</li>
								<li data-ng-hide="child == 0"
									data-ng-show="adult > 1 && child >= 1">Child <span>
										x {{child}}</span><span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>
										{{getbasecurrencyvalue(Childtotalprice,fareflightsegment.exchangeRate)}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li data-ng-hide="infant == 0"
									data-ng-show="adult > 1 && infant >= 1">Infant <span>
										x {{infant}}</span><span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>
										{{getbasecurrencyvalue(Infanttotalprice,fareflightsegment.exchangeRate)}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<div data-ng-show="ServiceTaxes">
									<%-- <s:if test="#session.isCorporate == true">  --%>
									<li>Base Service Tax <span class="pull-right"
										data-ng-style="{ 'display' : isfareloaded}"> <i
											data-ng-class="classname"></i>{{baseServicetax}}
									</span><span id="leftloading" data-ng-show="farebeforeload"> <img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span>
									</li>
									<li>Swatch Bharath Cess<span class="pull-right"
										data-ng-style="{ 'display' : isfareloaded}"> <i
											data-ng-class="classname"></i>{{sbc}}
									</span><span id="leftloading" data-ng-show="farebeforeload"> <img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span>
									</li>
									<li>Krishi Kalyan Cess<span class="pull-right"
										data-ng-style="{ 'display' : isfareloaded}"> <i
											data-ng-class="classname"></i>{{kkc}}
									</span><span id="leftloading" data-ng-show="farebeforeload"> <img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span>
									</li>
									<li class="flightmanagement">Management Fee<span
										class="pull-right" data-ng-style="{ 'display' : isfareloaded}">
											<i data-ng-class="classname"></i>{{managementFee}}
									</span><span id="leftloading" data-ng-show="farebeforeload"> <img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span>
									</li>
								</div>
								<li style="display: none;" id="B2Bothercharges">Conveyance
									Fee<span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i><span id="otherchargetext"></span></span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span>
								</li>
								<li data-ng-show="IsLCC && IsLCC!=undefined">Extra Meal<span>
										({{totalplate}} Platter) </span><span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>{{mealprice}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li data-ng-show="IsLCC && IsLCC!=undefined">Extra Baggage<span>
										({{totalkg}} KG) </span><span class="pull-right"
									data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i>{{baggageprice}}</span><span
									id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
								<li class="h3 grandpricetxt">Grand Total <span
									class="pull-right" data-ng-style="{ 'display' : isfareloaded}"><i
										data-ng-class="classname"></i><span id="flighttotalprice">{{getbasecurrencyvalue(totalflightprice,fareflightsegment.exchangeRate)}}</span>
								</span><span id="leftloading" data-ng-show="farebeforeload"><img
										src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>

							</ul>
						</div>
					</div>
					<!-- col-3 -->
				</aside>

				<div class="col-sm-9">
					<!--  <div id="loading-bar-container" class="hidden-xs"></div> -->
					<div data-ng-show="loadpricebar" style="text-align: center">
						<div class="bar"></div>
						<span><b>Getting prices details.</b></span>
					</div>
					<div data-ng-show="contentloaded" data-ng-cloak>
						<div class="clearfix visible-xs">

							<div id="offnone">
								<a href="#" class="sort-by-container clearfix"> <span
									class="offcanvas__trigger--open h-filters" data-rel="fare"><i
										class="tayyarah-th"></i> Fare Details</span>
								</a>
							</div>
						</div>
						<div data-ng-if="sindex == undefined || spclindex !=undefined"
							class="hidden-xs"
							data-ng-repeat="flightSegmentsGroups in fareflightsegment.flightSegmentsGroups">

							<div class="booking-details-heading clearfix">


								<div class="b-d-h-list clearfix">
									<div class="b-d-h-l col-sm-12 "
										data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">
										<div class="col-sm-3">
											<figure>
												<span
													class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
												<figcaption>
													{{flightSegments.segments[0].carrier.name}} -
													{{flightSegments.segments[0].flight.number}}</figcaption>
												<span>Booking Class :
													{{flightSegments.segments[0].cabin.code}}</span>
											</figure>
										</div>
										<div class="col-sm-3">
											<h5>
												<b>{{flightSegments.segments[0].oriName}}</b>
											</h5>
											<time>{{flightSegments.segments[0].depDate |
												date:'EEE, dd MMM'}}</time>
											<h6>
												Departure :
												<time>{{flightSegments.segments[0].depTime }}</time>
											</h6>
										</div>
										<div class="col-sm-1">
											<p class="m-rou ">
												<i class="tayyarah-long-arrow-right"></i>
											</p>
										</div>
										<div class="col-sm-3">
											<h5>
												<b>{{flightSegments.segments[flightSegments.segments.length
													- 1].destName}}</b>
											</h5>
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrDate | date:'EEE, dd MMM'}}</time>
											<h6>
												Arrival :
												<time>{{flightSegments.segments[flightSegments.segments.length
													- 1].arrTime }}</time>
											</h6>
										</div>
										<div class="col-sm-2">
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
									<div class="col-sm-12 total-travel">
										<a data-toggle="modal" data-target="#myModal"
											class="pull-right"
											data-ng-click="showdetails(fareflightsegment);"><b><i
												class="tayyarah-share"></i> Show details</b></a>
									</div>
									<!--    model goes here -->
									<!-- Modal -->
									<div class="modal fade" id="myModal" tabindex="-1"
										role="dialog" aria-labelledby="myModalLabel">
										<div class="modal-dialog modal-lg" role="document">
											<div class="modal-content" id="model-f-d">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal"
														aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
													<div class="mod-fli-de clearfix">
														<div class="mod-price">
															<div class="m-city">
																<p>
																	{{selectedsegments[0].oriName}}({{selectedsegments[0].ori}})
																	<i class="tayyarah-long-arrow-right"></i>
																	{{selectedsegments[selectedsegments.length -
																	1].destName}}(
																	{{selectedsegments[selectedsegments.length - 1].dest}})
																	<span class="mod-depart"> <i
																		class="tayyarah-clock-o"></i> <time
																			data-ng-if="selectedsegments.length == 1">{{selectedsegments
																			| totaltime:'mm':'hhh mmm':false}}</time> <time
																			data-ng-if="selectedsegments.length == 2">{{getlayovercompare(selectedsegments,selectedsegments[0].arrival,selectedsegments[1].depart)}}</time>
																		<time data-ng-if="selectedsegments.length == 3">
																			{{getlayovercomparelevel2(selectedsegments,selectedsegments[0].arrival,selectedsegments[1].depart,selectedsegments[1].arrival,selectedsegments[2].depart)}}</time>
																	</span>
															</div>
															<div class="m-price">
																<p class="h4">
																	<i data-ng-class="classname"></i>
																	{{getconvertedcurrency(totalprice)}}

																</p>
															</div>
														</div>
													</div>
												</div>
												<div class="modal-body">
													<div class="showviews">

														<!-- Nav tabs -->

														<ul class="nav nav-tabs" role="tablist">


															<li role="presentation" class="active"><a
																href="javascript:void(0);" data-target="#home"
																aria-controls="home" role="tab" data-toggle="tab">
																	Flight Details</a></li>


														</ul>

														<!-- Tab panes -->
														<div class="tab-content" id="mode-cont">
															<div role="tabpanel" class="tab-pane active" id="home">


																<!-- model main-details-first  -->

																<div class="model-main-details"
																	data-ng-repeat="(index,segments) in selectedsegments">
																	<div class="round-trip">
																		<div class="d-h-air">
																			<ul class="mod-f-details clearfix">
																				<li>
																					<figure>
																						<span
																							class="spriteFltLogos x{{segments.carrier.code}}"></span>
																						<figcaption>{{segments.carrier.code}}-{{segments.flight.number}}</figcaption>
																						<figcaption>Booking Class :
																							{{segments.cabin.code}}</figcaption>
																					</figure>
																				</li>
																				<li class="mod-dep">
																					<h5>{{segments.oriName}} ( {{segments.ori}})</h5> <time>{{segments.depDate
																						| date:'EEE, dd MMM'}}</time> <time>{{segments.depTime}}</time>
																					<h6></h6>
																				</li>
																				<li class="module-direction">
																					<div>
																						<p class="m-rou ">
																							<i class="tayyarah-long-arrow-right"></i>
																						</p>
																					</div>
																				</li>
																				<li class="mod-dep">
																					<h5>{{segments.destName}} ({{segments.dest}})</h5>
																					<time>{{segments.arrDate | date:'EEE, dd
																						MMM'}}</time> <time>{{segments.arrTime }}</time>
																					<h6></h6>
																				</li>
																				<li class="module-direction">
																					<h5>
																						<i class="tayyarah-clock-o"></i>
																						{{segments.duration | time:'mm':'hhh mmm':false}}
																					</h5> <span>Non Stop</span>
																				</li>
																			</ul>
																			<p class="operated">
																				{{segments.carrier.name}},
																				{{segments.flight.number}} <span>Operated by
																					{{segments.carrier.name}} </span>
																			</p>
																			<div class="mod-flight-row clearfix">
																				<div class="layover clearfix"
																					data-ng-hide="{{index == selectedsegments.length - 1}}">
																					<div class="col-sm-6">
																						<div class="lay">
																							<i class="tayyarah-clock-o"></i> Layover:
																							{{segments.destName}} ({{segments.dest}}), Time:
																							{{datecompare11(segments.arrival,selectedsegments[index+1].depart)
																							}}
																						</div>
																					</div>
																					<div class="col-sm-6">
																						<div class="lay-connect">
																							<i class="tayyarah-plane"></i> Connecting flight
																							may depart from different Terminal
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- model ends here -->
								</div>
							</div>
						</div>
						<!-- Balance Modal -->
						<!-- Modal -->
						<div class="login-pop-up clearfix" id="farechangediv"
							data-ng-style="{ 'display' : walletBalance}">
							<div class="login-pop-continer fare-change">
								<div class="login-pop-header clearfix">

									<div class="col-md-12 col-sm-12 col-xs-12">
										<p class="h4">Wallet Error</p>
									</div>
									<div class="col-xs-6"></div>
								</div>
								<div class="login-pop-content">
									<div class="clearfix">
										<div class="col-md-12 col-sm-12 col-xs-12 BalancePAd clearfix">

											Unable to process your booking due to insufficient balance in
											your account</div>
									</div>
								</div>
								<div class="login-pop-footer cleqarfix"></div>
							</div>
						</div>
						<!-- balance End Modal -->
						<div
							data-ng-if="sindex != undefined && data.specialFareFlightSegment == null"
							class="hidden-xs"
							data-ng-repeat="flightSegmentsGroups in fareflightsegment.newFlightSegmentsGroups">

							<div class="booking-details-heading clearfix">


								<div class="b-d-h-list clearfix">
									<div class="b-d-h-l col-sm-12 "
										data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">

										<!--  {{Segment}} -->

										<div class="col-sm-3">
											<figure>
												<span
													class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
												<figcaption>
													{{flightSegments.segments[0].carrier.name}} -
													{{flightSegments.segments[0].flight.number}}</figcaption>
												<span>Booking Class:
													{{flightSegments.segments[0].cabin.code}}</span>
											</figure>
										</div>
										<div class="col-sm-3">
											<h5>
												<b>{{flightSegments.segments[0].oriName}}</b>
											</h5>
											<time>{{flightSegments.segments[0].depDate |
												date:'EEE, dd MMM yyyy'}}</time>
											<h6>
												Departure :
												<time>{{flightSegments.segments[0].depTime }}</time>
											</h6>
										</div>
										<div class="col-sm-1">
											<p class="m-rou ">
												<i class="tayyarah-long-arrow-right"></i>
											</p>
										</div>
										<div class="col-sm-3">
											<h5>
												<b>{{flightSegments.segments[flightSegments.segments.length
													- 1].destName}}</b>
											</h5>
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrDate | date:'EEE, dd MMM yyyy'}}</time>
											<h6>
												Arrival :
												<time>{{flightSegments.segments[flightSegments.segments.length
													- 1].arrTime }}</time>
											</h6>
										</div>
										<div class="col-sm-2">
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

								<div class="col-sm-12 total-travel">
									<a data-toggle="modal" data-target="#myModaltwo"
										class="pull-right"
										data-ng-click="showdetailstwo(flightSegmentsGroups);"><b><i
											class="tayyarah-share"></i>Show details</b></a>
								</div>
							</div>
						</div>
						<div
							data-ng-if="sindex != undefined && specialFareFlightSegment!=undefined"
							class="hidden-xs"
							data-ng-repeat="flightSegmentsGroups in specialFareFlightSegment.flightSegmentsGroups">

							<div class="booking-details-heading clearfix">


								<div class="b-d-h-list clearfix">
									<div class="b-d-h-l col-sm-12 "
										data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments ">

										<!--  {{Segment}} -->

										<div class="col-sm-3">
											<figure>
												<span
													class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span>
												<figcaption>
													{{flightSegments.segments[0].carrier.name}} -
													{{flightSegments.segments[0].flight.number}}</figcaption>
												<span>Booking Class:
													{{flightSegments.segments[0].cabin.code}}</span>
											</figure>
										</div>
										<div class="col-sm-3">
											<h5>
												<b>{{flightSegments.segments[0].oriName}}</b>
											</h5>
											<time>{{flightSegments.segments[0].depDate |
												date:'EEE, dd MMM yyyy'}}</time>
											<h6>
												Departure :
												<time>{{flightSegments.segments[0].depTime }}</time>
											</h6>
										</div>
										<div class="col-sm-1">
											<p class="m-rou ">
												<i class="tayyarah-long-arrow-right"></i>
											</p>
										</div>
										<div class="col-sm-3">
											<h5>
												<b>{{flightSegments.segments[flightSegments.segments.length
													- 1].destName}}</b>
											</h5>
											<time>{{flightSegments.segments[flightSegments.segments.length
												- 1].arrDate | date:'EEE, dd MMM yyyy'}}</time>
											<h6>
												Arrival :
												<time>{{flightSegments.segments[flightSegments.segments.length
													- 1].arrTime }}</time>
											</h6>
										</div>
										<div class="col-sm-2">
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 3">
												<i class="tayyarah-clock-o"></i>
												{{getlayovercomparelevel2(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart,flightSegments.segments[1].arrival,flightSegments.segments[2].depart)
												}}
											</p>
											<p class="h4"
												data-ng-if="flightSegments.segments.length == 2">
												<i class="tayyarah-clock-o"></i>
												{{getlayovercompare(flightSegments.segments,flightSegments.segments[0].arrival,flightSegments.segments[1].depart)
												}}
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


								<div class="col-sm-12 total-travel">
									<a data-toggle="modal" data-target="#myModaltwo"
										class="pull-right"
										data-ng-click="showdetailstwo(flightSegmentsGroups);"><b><i
											class="tayyarah-share"></i>Show details</b></a>
								</div>
							</div>
						</div>

						<!-- model for round and spcl -->
						<div class="modal fade" id="myModaltwo" tabindex="-1"
							role="dialog" aria-labelledby="myModalLabel">
							<div class="modal-dialog modal-lg" role="document">
								<div class="modal-content" id="model-f-d">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal"
											aria-label="Close">
											<span aria-hidden="true">&times;</span>
										</button>
										<div class="mod-fli-de clearfix">
											<div class="mod-price">
												<div class="m-city">
													<p>
														{{selectedsegments[0].oriName}}({{selectedsegments[0].ori}})
														<i class="tayyarah-long-arrow-right"></i>
														{{selectedsegments[selectedsegments.length -
														1].destName}}( {{selectedsegments[selectedsegments.length
														- 1].dest}}) <span class="mod-depart"> <i
															class="tayyarah-clock-o"></i> <time
																data-ng-if="selectedsegments.length == 1">{{selectedsegments
																| totaltime:'mm':'hhh mmm':false}}</time> <time
																data-ng-if="selectedsegments.length == 2">{{getlayovercompare(selectedsegments,selectedsegments[0].arrival,selectedsegments[1].depart)}}</time>
															<time data-ng-if="selectedsegments.length == 3">
																{{getlayovercomparelevel2(selectedsegments,selectedsegments[0].arrival,selectedsegments[1].depart,selectedsegments[1].arrival,selectedsegments[2].depart)}}</time>

														</span>
												</div>
											</div>
										</div>
									</div>
									<div class="modal-body">
										<div class="showviews">
											<!-- Nav tabs -->

											<ul class="nav nav-tabs" role="tablist">

												<li role="presentation" class="active"><a href="#home"
													aria-controls="home" role="tab" data-toggle="tab">
														Flight Details</a></li>
											</ul>
											<!-- Tab panes -->
											<div class="tab-content" id="mode-cont">
												<div role="tabpanel" class="tab-pane active" id="home">

													<!-- model main-details-first  -->

													<div class="model-main-details"
														data-ng-repeat="(index,segments) in selectedsegments">
														<div class="round-trip">
															<div class="d-h-air">
																<ul class="mod-f-details clearfix">
																	<li>
																		<figure>
																			<span
																				class="spriteFltLogos x{{segments.carrier.code}}"></span>
																			<figcaption>{{segments.carrier.code}}-{{segments.flight.number}}</figcaption>
																			<figcaption>Booking Class :
																				{{segments.cabin.code}}</figcaption>
																		</figure>
																	</li>
																	<li class="mod-dep">
																		<h5>{{segments.oriName}} ( {{segments.ori}})</h5> <time>{{segments.depDate
																			| date:'EEE, dd MMM'}}</time> <time>{{segments.depTime}}</time>
																		<h6></h6>
																	</li>
																	<li class="module-direction">
																		<div>
																			<p class="m-rou ">
																				<i class="tayyarah-long-arrow-right"></i>
																			</p>
																		</div>
																	</li>
																	<li class="mod-dep">
																		<h5>{{segments.destName}} ({{segments.dest}})</h5> <time>{{segments.arrDate
																			| date:'EEE, dd MMM'}}</time> <time>{{segments.arrTime
																			}}</time>
																		<h6></h6>
																	</li>
																	<li class="module-direction">
																		<h5>
																			<i class="tayyarah-clock-o"></i> {{segments.duration
																			| time:'mm':'hhh mmm':false}}
																		</h5> <span>Non Stop</span>
																	</li>
																</ul>
																<p class="operated">
																	{{segments.carrier.name}}, {{segments.flight.number}} <span>Operated
																		by {{segments.carrier.name}} </span>
																</p>
																<div class="mod-flight-row clearfix">
																	<div class="layover clearfix"
																		data-ng-hide="{{index == selectedsegments.length - 1}}">
																		<div class="col-sm-6">
																			<div class="lay">
																				<i class="tayyarah-clock-o"></i> Layover:
																				{{segments.destName}} ({{segments.dest}}), Time:
																				{{datecompare11(segments.arrival,selectedsegments[index+1].depart)
																				}}
																			</div>
																		</div>
																		<div class="col-sm-6">
																			<div class="lay-connect">
																				<i class="tayyarah-plane"></i> Connecting flight may
																				depart from different Terminal
																			</div>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- traveler details  -->
					<form class="form clearfix" name="QuoteBookForm">
						<div class="panel panel-default traveler-details">

							<div class="panel-heading ">
								<h3 class="panel-title display-td">Traveller(s) Details</h3>
							</div>

							<div class="panel-body">
								<input type="hidden" name="ccy" id="currencyname"
									value="{{currencyname}}"> <input type="hidden"
									name="tky" id="transactionKey" value="{{transactionKey}}">
								<input type="hidden" name="pky" id="pricekey"
									value="{{pricekey}}"> <input type="hidden" name="adult"
									id="adult" value="{{adult}}"> <input type="hidden"
									name="child" id="child" value="{{child}}"> <input
									type="hidden" name="infant" id="infant" value="{{infant}}">
								<s:if test="#session['agent'] != null">
									<input type="hidden" id="isLogged" value="true">
									<input type="hidden" name="ay" id="ay"
										value="<s:property value="%{#session.agent.Securityanswer}"/>">
									<input type="hidden" name="ud" id="userid"
										value="<s:property value="%{#session.agent.id}"/>">
									<input type="hidden" name="uname" id="uname"
										value="<s:property value="%{#session.agent.Username}"/>">
									<input type="hidden" name="pmode" id="isagent" value="cash">

									<s:if test="#session.emulateFlag == true">
										<input type="hidden" name="emFlag" id="emFlag"
											value="<s:property value="%{#session.emulateFlag}"/>">
										<input type="hidden" name="emCompany" id="emCompany"
											value="<s:property value="%{#session.emulateByCompany.companyid}"/>">
										<input type="hidden" name="emUname" id="emUname"
											value="<s:property value="%{#session.emulateByUserId}"/>">
									</s:if>
									<s:else>
										<input type="hidden" name="emFlag" id="emFlag" value="false">
									</s:else>

								</s:if>
								<s:elseif test="#session['user'] != null">
									<input type="hidden" name="ay" id="ay"
										value="zqJ3R9cGpNWgNXG55ub/WQ==">
									<input type="hidden" name="ud" id="userid"
										value="<s:property value="%{#session.user.id}"/>">
									<input type="hidden" name="pmode" id="isagent" value="card">
									<input type="hidden" name="uname" id="uname"
										value="<s:property value="%{#session.user.userName}"/>">

								</s:elseif>
								<s:else>
									<input type="hidden" name="ay" id="ay"
										value="zqJ3R9cGpNWgNXG55ub/WQ==">
									<input type="hidden" name="ud" id="userid"
										value="<s:property value="%{#session.Directuser.id}"/>">
									<input type="hidden" name="pmode" id="isagent" value="card">
									<input type="hidden" name="uname" id="uname"
										value="<s:property value="%{#session.Directuser.Username}"/>">
								</s:else>
								<input type="hidden" name="tp" id="totpr"
									value="{{totalflightprice}}"> <input type="hidden"
									id="dammyva" value="{{totalflightprice}}">

								<div class="adult clearfix"
									data-ng-repeat="passadult in adultarray"
									data-ng-class="isdomestic">

									<div class="form-group clearfix tile-bd1">
										<label for="exampleInputName2">Adult {{$index + 1}}</label>
									</div>

									<div class="form-group clearfix tile-bd">
										<label for="exampleInputName2">Title</label> <select
											id="mrMss{{$index}}" class="form-control" name="adt">
											<option>Mr</option>
											<option>Ms</option>
											<option>Miss</option>
											<option>Mrs</option>
										</select>
									</div>

									<div class="form-group clearfix">
										<label for="AdFirstName">Given / First Name</label> <input
											type="text" class="form-control quoteFn" name="adfN"
											id="AdFirstName-{{$index}}" placeholder="Given Name"
											maxlength="18" required autocomplete="off"
											onkeypress="return isAlphabetKey(event,this);"
											value="{{firstname}}"> <input type="hidden"
											class="form-control" name="admN" id="MiddleName-{{$index}}"
											placeholder="Middle Name" autocomplete="off" value="some">
									</div>

									<div class="form-group clearfix">
										<label for="inputEmail3">Surname / Last Name</label> <input
											type="text" class="form-control quoteLn" name="adlN"
											id="Surname-{{$index}}" placeholder="Surname" required
											maxlength="18" autocomplete="off"
											onkeypress="return isAlphabetKey(event,this);"
											value="{{lastname}}">
									</div>

									<input type="hidden" class="form-control" id="adb" name="adb"
										value="11/03/1995"> <input type="hidden"
										class="form-control" id="adpEx" name="adpEx"
										value="11/03/2020"> <input type="hidden"
										class="form-control" id="adpIssCry" name="adpIssCry"
										value="india"> <input type="hidden"
										class="form-control" id="adnCry" name="adnCry" value="india">


									<div class="form-group clearfix" data-ng-if="isInternational">
										<label for="exampleInputName2">Passport No</label> <input
											type="text" class="form-control" name="adppN" maxlength="18"
											onkeypress="return IsAlphaNumeric(event)" autocomplete="off"
											placeholder="Passport No" id="passport-{{$index}}" required>

									</div>

									<div class="col-sm-12 col-xs-12 clearfix">
										<div class="col-sm-6 col-xs-12 clearfix"
											data-ng-if="meallist.length > 0 || seatlist.length > 0 || baggagelist.length > 0">

											<label class="dep-meal mobileDeap-meal"><a
												data-toggle="collapse" data-target="#departure{{$index}}"
												aria-expanded="false" aria-controls="departure">Departure
													Meal/Seat Selection <i class="tayyarah-plus"></i>
											</a></label>
										</div>
										<div class="col-sm-6 col-xs-12 clearfix"
											data-ng-if="returnmeallist!= null &&returnmeallist.length > 0 || returnseatlist.length > 0 || returnbaggagelist.length > 0">

											<label class="dep-meal"><a data-toggle="collapse"
												data-target="#return{{$index}}" aria-expanded="false"
												aria-controls="departure">Arrival Meal/Seat Selection<i
													class="tayyarah-plus"></i></a></label>
										</div>
									</div>
									<div class="dep-arr-mealpreference-one">

										<div id="mealDivClass{{$index}}">
											<div class="collapse" id="departure{{$index}}">


												<div>
													<div class="form-group clearfix"
														data-ng-if="meallist.length > 0 && IsLCC">
														<label>Meal</label> <select class="form-control"
															name="admealcode" id="adultMeal-{{$index}}"
															onchange="addprice('adultmeal',this);">
															<option data-ng-repeat="meal in meallist"
																itemprice="{{meal.Price}}" value="{{meal.Code}}">{{meal.Description}}
																- Rs {{meal.Price}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="meallist.length > 0 && !IsLCC">
														<label>Meal</label> <select class="form-control"
															name="admealcode" id="adultMeal-{{$index}}">
															<option data-ng-repeat="meal in meallist"
																value="{{meal.Code}}">{{meal.Description}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="seatlist.length > 0">
														<label>Seat Preference</label> <select
															class="form-control" name="adseatcode"
															id="adultSeat-{{$index}}">
															<option data-ng-repeat="seat in seatlist"
																value="{{seat.Code}}" id="seatCode">{{seat.Description}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="baggagelist.length > 0">
														<label>Extra Baggage</label> <select class="form-control"
															name="adbaggagecode" id="baggitem-{{$index}}"
															onchange="addprice('adultbaggage',this);">
															<option data-ng-repeat="baggage in baggagelist"
																itemprice="{{baggage.Price}}"
																itemweight="{{baggage.Weight}}" value="{{baggage.Code}}"
																id="bagCode">{{baggage.Weight}} KG - Rs
																{{baggage.Price}}</option>
														</select>


													</div>


													<input type="hidden" name="admealcode" id="admealcode"
														value="null" data-ng-if="meallist.length == 0"> <input
														type="hidden" name="adseatcode" id="adseatcode"
														value="null" data-ng-if="seatlist.length == 0"> <input
														type="hidden" name="adbaggagecode" id="adbaggagecode"
														value="null" data-ng-if="baggagelist.length == 0">
													<input type="hidden" name="adreturnmealcode"
														id="adreturnmealcode" value="null"> <input
														type="hidden" name="adreturnseatcode"
														id="adreturnseatcode" value="null"> <input
														type="hidden" name="adreturnbaggagecode"
														id="adreturnbaggagecode" value="null">
												</div>
											</div>
										</div>
										<!-- <div class="col-sm-12" ng-hide="onewayMealDiv"> -->
										<div class="col-sm-6">
											<div class="collapse" id="return{{$index}}">

												<div>
													<div class="form-group clearfix"
														data-ng-if="returnmeallist.length > 0 && returnIsLCC">
														<label>Return Meal</label> <select class="form-control"
															name="adreturnmealcode"
															onchange="addprice('returnadultmeal',this);"
															id="returnmealitem{{$index}}">
															<option data-ng-repeat="meal in returnmeallist"
																itemprice="{{meal.Price}}" value="{{meal.Code}}">{{meal.Description}}
																- Rs {{meal.Price}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="returnmeallist.length > 0 && !returnIsLCC">
														<label>Meal</label> <select class="form-control"
															name="adreturnmealcode" id="returnmealitem{{$index}}">
															<option data-ng-repeat="meal in returnmeallist"
																value="{{meal.Code}}">{{meal.Description}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="returnseatlist.length > 0">
														<label>Seat Preference</label> <select
															class="form-control" name="adreturnseatcode"
															id="returnseat{{$index}}">
															<option data-ng-repeat="seat in returnseatlist"
																value="{{seat.Code}}">{{seat.Description}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="returnbaggagelist.length > 0">
														<label>Return Extra Baggage</label> <select
															class="form-control" name="adreturnbaggagecode"
															id="baggitem{{$index}}"
															onchange="addprice('returnadultbaggage',this);">
															<option data-ng-repeat="baggage in returnbaggagelist"
																itemprice="{{baggage.Price}}"
																itemweight="{{baggage.Weight}}" value="{{baggage.Code}}">{{baggage.Weight}}
																KG - Rs {{baggage.Price}}</option>
														</select>


													</div>
													<input type="hidden" name="adreturnmealcode" value="null"
														data-ng-if="returnmeallist.length == 0"> <input
														type="hidden" name="adreturnseatcode" value="null"
														data-ng-if="returnseatlist.length == 0"> <input
														type="hidden" name="adreturnbaggagecode"
														id="baggitem{{$index}}" value="null"
														data-ng-if="returnbaggagelist.length == 0">
												</div>
											</div>
										</div>


									</div>




									<!--  </div> -->
								</div>

								<div class="adult clearfix" data-ng-repeat="child in childarray"
									data-ng-class="isdomestic">
									<div class="form-group clearfix tile-bd1">
										<label for="exampleInputName2">Child {{$index+1}}</label>
									</div>
									<div class="form-group clearfix tile-bd">
										<label for="exampleInputName2">Title</label> <select
											class="form-control" name="cht" id="childTitle-{{$index}}">
											<option>Master</option>
											<option>Miss</option>
										</select>
									</div>
									<div class="form-group clearfix">
										<label for="inputEmail3">Given / First Name</label> <input
											type="text" class="form-control" name="chfN"
											id="childFname-{{$index}}" placeholder="Given Name" required
											autocomplete="off" maxlength="18"
											onkeypress="return isAlphabetKey(event,this);"> <input
											type="hidden" class="form-control" name="chmN"
											id="childMname-{{$index}}" placeholder="Middle Name"
											autocomplete="off" value="some">
									</div>

									<div class="form-group clearfix">
										<label for="inputEmail3">Surname / Last Name</label> <input
											type="text" class="form-control" name="chlN" maxlength="18"
											id="childSurname-{{$index}}" placeholder="Surname" required
											autocomplete="off"
											onkeypress="return isAlphabetKey(event,this);">
									</div>

									<!-- <input type="hidden" class="form-control" name="chb"
								value="11/03/1995"> -->
									<input type="hidden" class="form-control" name="chppEx"
										value="11/03/2020"> <input type="hidden"
										class="form-control" name="chppIsstry" value="india">
									<input type="hidden" class="form-control" name="chntry"
										value="india">


									<div class="form-group clearfix dateLength">
										<label for="inputEmail3">Date of birth</label> <input
											type="text" class="form-control datePick " name="chb"
											id="childdate{{$index}}" placeholder="DOB" required
											autocomplete="off">
									</div>

									<!--  <div class="booking-natinality" > -->
									<div class="form-group clearfix" data-ng-if="isInternational">
										<label for="exampleInputName2">Passport No</label> <input
											type="text" class="form-control" name="chppN" maxlength="18"
											onkeypress="return IsAlphaNumeric(event)"
											id="childPassportNo{{$index}}" autocomplete="off"
											placeholder="Passport No">
									</div>

									<div class="col-sm-12 col-xs-12 ">
										<div class="col-md-6"
											data-ng-if="meallist.length > 0 || seatlist.length > 0 || baggagelist.length > 0">
											<label class="dep-meal"><a data-toggle="collapse"
												data-target="#childdeparture{{$index}}"
												aria-expanded="false" aria-controls="departure">Departure
													Meal/Seat Selection <i class="tayyarah-plus"></i>
											</a></label>
										</div>

										<div class="col-sm-6 clearfix"
											data-ng-if="returnmeallist!= null &&returnmeallist.length > 0 || returnseatlist.length > 0 || returnbaggagelist.length > 0">

											<label class="dep-meal"><a data-toggle="collapse"
												data-target="#childarrival{{$index}}" aria-expanded="false"
												aria-controls="departure">Arrival Meal/Seat Selection<i
													class="tayyarah-plus"></i></a></label>
										</div>

									</div>




									<div class="dep-arr-mealpreference-one">
										<div id="childmealDivClass{{$index}}">
											<div class="collapse " id="childdeparture{{$index}}">
												<div>
													<div class="form-group clearfix"
														data-ng-if="meallist.length > 0 && IsLCC">
														<label>Meal</label> <select class="form-control "
															name="chmealcode" onchange="addprice('childmeal',this);">
															<option data-ng-repeat="meal in meallist"
																itemprice="{{meal.Price}}" value="{{meal.Code}}">{{meal.Description}}
																- Rs {{meal.Price}}</option>
														</select>

													</div>
													<div>
														<div class="form-group clearfix"
															data-ng-if="meallist.length > 0 && !IsLCC">
															<label>Meal</label> <select class="form-control "
																name="chmealcode">
																<option data-ng-repeat="meal in meallist"
																	value="{{meal.Code}}" id="mealitem{{$index}}">{{meal.Description}}</option>
															</select>
														</div>

														<div class="form-group clearfix"
															data-ng-if="seatlist.length > 0">
															<label>Seat Preference</label> <select
																class="form-control " name="chseatcode"
																id="childSeatCode{{$index}}">
																<option data-ng-repeat="seat in seatlist"
																	value="{{seat.Code}}" id="seatCode">{{seat.Description}}</option>
															</select>
														</div>
														<div class="form-group clearfix"
															data-ng-if="baggagelist.length > 0">
															<label>Extra Baggage</label> <select class="form-control"
																name="chbaggagecode" id="baggitem{{$index}}"
																onchange="addprice('childbaggage',this);">
																<option data-ng-repeat="baggage in baggagelist"
																	itemprice="{{baggage.Price}}"
																	itemweight="{{baggage.Weight}}"
																	value="{{baggage.Code}}">{{baggage.Weight}} KG
																	- Rs {{baggage.Price}}</option>
															</select>


														</div>
													</div>
													<input type="hidden" name="chmealcode" id="chmealcode"
														value="null" data-ng-if="meallist.length == 0"> <input
														type="hidden" name="chseatcode" id="chseatcode"
														value="null" data-ng-if="seatlist.length == 0"> <input
														type="hidden" name="chbaggagecode" id="chbaggagecode"
														value="null" data-ng-if="baggagelist.length == 0">
													<input type="hidden" name="chreturnmealcode"
														id="chreturnmealcode" value="null"> <input
														type="hidden" name="chreturnseatcode"
														id="chreturnseatcode" value="null"> <input
														type="hidden" name="chreturnbaggagecode"
														id="chreturnbaggagecode" value="null">
												</div>



											</div>
										</div>
										<div class="col-sm-6">
											<div class="collapse" id="childarrival{{$index}}">

												<div>
													<div class="form-group clearfix"
														data-ng-if="returnmeallist.length > 0 && returnIsLCC">
														<label>Return Meal</label> <select class="form-control"
															name="adreturnmealcode" id="returnmealitem{{$index}}"
															onchange="addprice('returnadultmeal',this);">
															<option data-ng-repeat="meal in returnmeallist"
																itemprice="{{meal.Price}}" value="{{meal.Code}}">{{meal.Description}}
																- Rs {{meal.Price}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="returnmeallist.length > 0 && !returnIsLCC">
														<label>Meal</label> <select class="form-control"
															name="adreturnmealcode" id="returnmealitem{{$index}}">
															<option data-ng-repeat="meal in returnmeallist"
																value="{{meal.Code}}">{{meal.Description}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="returnseatlist.length > 0">
														<label>Seat Preference</label> <select
															class="form-control" name="childreturnseatcode"
															id="childreturnseatcode{{$index}}">
															<option data-ng-repeat="seat in returnseatlist"
																value="{{seat.Code}}">{{seat.Description}}</option>
														</select>
													</div>
													<div class="form-group clearfix"
														data-ng-if="returnbaggagelist.length > 0">
														<label>Return Extra Baggage</label> <select
															class="form-control" name="adreturnbaggagecode"
															id="childReturnbaggitem{{$index}}"
															onchange="addprice('returnadultbaggage',this);">
															<option data-ng-repeat="baggage in returnbaggagelist"
																itemprice="{{baggage.Price}}"
																itemweight="{{baggage.Weight}}" value="{{baggage.Code}}">{{baggage.Weight}}
																KG - Rs {{baggage.Price}}</option>
														</select>


													</div>
													<input type="hidden" name="adreturnmealcode" value="null"
														data-ng-if="returnmeallist.length == 0"> <input
														type="hidden" name="adreturnseatcode" value="null"
														data-ng-if="returnseatlist.length == 0"> <input
														type="hidden" name="adreturnbaggagecode"
														id="childReturnbaggitem{{$index}}" value="null"
														data-ng-if="returnbaggagelist.length == 0">
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="adult clearfix"
									data-ng-repeat="infant in infantarray">
									<div class="form-group clearfix tile-bd1">
										<label for="exampleInputName2">Infant {{$index + 1}}</label>
									</div>
									<div class="form-group clearfix tile-bd">
										<label for="exampleInputName2">Title</label> <select
											class="form-control" name="intt" id="infantTitle-{{$index}}">
											<option>Master</option>
											<option>Miss</option>
										</select>
									</div>
									<div class="form-group clearfix">
										<label for="inputEmail3">Given / First Name</label> <input
											type="text" class="form-control" name="infN"
											id="infantFname-{{$index}}" placeholder="Given Name" required
											autocomplete="off" maxlength="18"
											onkeypress="return isAlphabetKey(event,this);"> <input
											type="hidden" class="form-control" name="inmN"
											id="infantMname-{{$index}}" placeholder="Middle Name"
											autocomplete="off">
									</div>

									<div class="form-group clearfix">
										<label for="inputEmail3">Surname / Last Name</label> <input
											type="text" class="form-control" name="inlN" maxlength="18"
											id="infantSname-{{$index}}" placeholder="Surname" required
											autocomplete="off"
											onkeypress="return isAlphabetKey(event,this);">
									</div>


									<div class="form-group clearfix dateLength">
										<label for="inputEmail3">Date of birth</label> <input
											type="text" class="form-control datePick" name="inb"
											id="infantdate{{$index}}" placeholder="DOB" required
											autocomplete="off">
									</div>

									<input type="hidden" class="form-control" name="inppEx"
										id="inppEx" value="11/03/2018"> <input type="hidden"
										class="form-control" name="infppIsstry" id="infppIsstry"
										value="india"> <input type="hidden"
										class="form-control" name="inntry" id="inntry" value="india">

									<div class="form-group clearfix " data-ng-if="isInternational">
										<label for="exampleInputName2">Passport No</label> <input
											type="text" class="form-control" name="inppN" maxlength="18"
											id="inppNo{{$index}}"
											onkeypress="return IsAlphaNumeric(event)" autocomplete="off"
											placeholder="Passport No">

									</div>

								</div>
							</div>
						</div>
						<!-- traveler details ends -->

						<!-- billing details  -->

						<div class="panel panel-default traveler-details">

							<div class="panel-body biil-bd">

								<input type="hidden" class="form-control" name="address"
									id="address" value="bangalore"> <input type="hidden"
									class="form-control" name="address2" id="address2"
									value="bangalore"> <input type="hidden"
									class="form-control" name="city" id="city" value="bangalore">
								<input type="hidden" class="form-control" name="state"
									id="state" value="karanataka"> <input type="hidden"
									class="form-control" name="country" id="country" value="india">
								<input type="hidden" class="form-control" name="phone"
									id="phone" value="14641545"> <input type="hidden"
									class="form-control" name="zip" id="zip" value="560255">


								<div class="biiling-bd2">
									<div class="form-group clearfix bii-bd">
										<label for="exampleInputName2">Mobile</label> <input
											type="tel" class="form-control" name="mobile" id="mobile"
											pattern="[0-9]{10}" placeholder="Mobile" maxlength="10"
											required onkeypress="return isNumberKey(event,this)"
											autocomplete="off" data-ng-model="mobile"
											data-ng-required="true">
									</div>

								</div>



								<div class="biiling-bd2">
									<div class="form-group clearfix ">
										<label for="exampleInputName2">Email</label> <input
											type="email" class="form-control" name="email" id="email"
											placeholder="Email" autocomplete="off" required
											value="<s:property value="#session.agent.Email" />">
									</div>


								</div>
								<div class="col-sm-12 col-xs-12 clearfix">
									<div class="form-group clearfix">
										<label><b>Select Payment Option</b></label><br> <span
											style="margin-right: 10px;"> <input type="radio"
											id="Walletoption" name="paytype" checked="checked"
											value="Wallet"> Wallet
										</span> <span> <input type="radio" id="Cardoption"
											name="paytype" value="Card"> Card
										</span> <label id="payoptiontext" class="cardText"> (Card
											charges will be applicable)</label>
									</div>

								</div>



								<div class="col-sm-12 clearfix">
									<div class="form-group clearfix">
										<b> Terms & Conditions</b><br> <label> <input
											type="checkbox" id="field_terms"
											onchange="this.setCustomValidity(validity.valueMissing ? 'Please indicate that you accept the Terms and Conditions' : '');"
											data-ng-model="checkbox" data-ng-required="true"> I
											agree to the <a data-toggle="modal"
											data-target="#termscondition" class="terms">Terms &
												Conditions </a>for booking this ticket, abide by cancellation &
											booking policies.

										</label>
									</div>

								</div>
								<!--    model goes here -->


								<!-- Modal -->
								<div class="modal fade" id="termscondition" tabindex="-1"
									role="dialog" aria-labelledby="myModalLabel">
									<div class="modal-dialog modal-lg" role="document">
										<div class="modal-content" id="model-f-d">
											<div class="modal-header">
												<button type="button" class="close" data-dismiss="modal">&times;</button>
												<h1 class="modal-title text-center">Terms and
													Conditions</h1>
											</div>
											<div class="modal-body">
												<!-- <h1>Terms and Conditions</h1> -->
												<ul>
													<li>Fares are subject to availability. If there is any
														fare change we will notify you immediately.</li>
													<li>Online Date/Flight change not allowed.</li>
													<li>All reservations made through our website are as
														per the terms and conditions of the concerned airlines.</li>
													<li>The primary guest must be at least 18 years of age
														to check into this hotel</li>
													<li>It is mandatory for all guests above 18 years of
														age to carry a valid photo identity card &amp; address
														proof at the time of check-in. You can carry any of the
														following documents as a valid proof - Driving License,
														Passport or Voters ID. If your check-in is denied by the
														hotel due to lack of required documents, you cannot claim
														a refund &amp; your booking will be considered as NO SHOW.</li>
													<li>In case of an increase in the hotel tariff (for
														example Christmas, New Year, International Event,
														Holidays) the customer is liable to pay the difference if
														the stay period falls during these dates.</li>
													<li>Tayyarah will not be responsible for any service
														issues at the hotel.</li>
													<li>If you wish to book multiple rooms, you must use a
														different name for each room or the duplicate reservation
														may be cancelled by the hotel.</li>
													<li>Most hotels do not allow unmarried / unrelated
														couples to check-in. This is at full discretion of the
														hotel management. No refund would be applicable in case
														the hotel denies check-in under such circumstances.</li>
													<li>The standard check-in time is 12:00 PM and the
														standard check-out time is 12:00 PM. Early check-in or
														late check-out is strictly subjected to availability and
														may be chargeable by the hotel. Any early check-in or late
														check-out request must be directed and reconfirmed with
														hotel directly.</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<!-- model ends here -->
								<div class="col-sm-12 clearfix">
									<div class="form-group clearfix">
										<div class="input-group ">
											<button type="submit" id="walletProceed"
												data-ng-click="QuoteBookForm.$valid && agentBook()"
												data-ng-show="contentloaded" data-ng-cloak
												class="btn btn-primary but book-btn">
												Proceed <i class="tayyarah-arrow-circle-right"></i>
											</button>
											<button type="submit" id="cardProceed"
												data-ng-click="QuoteBookForm.$valid && UserFlightBook()"
												data-ng-show="contentloaded" data-ng-cloak
												class="btn btn-primary but book-btn">
												Proceed <i class="tayyarah-arrow-circle-right"></i>
											</button>
										</div>
									</div>
								</div>
					</form>
				</div>
				<!-- traveler details ends -->
			</div>
			<!-- col-9 ends -->
		</div>
		<div class="container errorPageHeight" data-ng-show="errordiv"
			data-ng-cloak>
			<div class="visible-xs gradient-error">
				<div class="spinner-error-mess">
					<div class="cont_error">
						<h1>Oops !</h1>
						<h2>
							<i class="tayyarah-frown-o" aria-hidden="true"></i>
						</h2>
						<p>Some thing went wrong.</p>
						<form data-ng-submit="returnIndex()">
							<button type="submit" data-ng-click="submitted == true"
								class="btn btn-primary btn-xs  ">Search again</button>
						</form>
					</div>
				</div>
			</div>

		</div>
	</div>
</div>
<div id="NullScope" class="DisplayNone">
	<div class="custom-error text-center">
		<div class="error-mess">
			<p>
				<b>Session Expired.</b>
			<p>Please Re-initate the Search</p>
			</p>
			<form data-ng-submit="returnIndex()">
				<button type="submit" class="btn btn-primary but"
					data-ng-click="submitted==true">Search again</button>
			</form>
		</div>
	</div>
</div>
<script>
	function closefarediv() {
		$('#farechangediv').hide();

	}

	var dates = $(
			"#childdate0,#childdate1,#childdate2,#childdate3,#childdate4,#childdate5,#childdate6,#childdate7,#childdate8")
			.datepicker({
				/* 	minDate:childmindate,
					 maxDate:childmaxdate, */
				dateFormat : 'dd/mm/yy',
				numberOfMonths : 2,
				yearRange : "-100:+0",
				changeMonth : true,
				changeYear : true
			});

	// call angular function to add meal and baggage price
	function addprice(passtype, obj) {
		var id = obj.id.substring(8);
		angular.element(document.getElementById(obj.id)).scope()
				.addmealbaggageprice(
						passtype,
						obj.value,
						id,
						obj.options[obj.selectedIndex]
								.getAttribute('itemprice'),
						obj.options[obj.selectedIndex]
								.getAttribute('itemweight'));
	}
</script>


</div>
<form method="post" action="https://www.tayyarah.com/pay.jsp"
	name="frmTransaction" id="frmTransaction">
	<!-- <form  method="post" action="https://www.tayyarah.com/pay"   name="frmTransaction" id="frmTransaction" > -->
	<input type="hidden" name="V3URL"
		value="https://secure.ebs.in/pg/ma/payment/request" /> <input
		name="channel" type="hidden" value="10" /> <input name="account_id"
		type="hidden" value="19570" /> <input name="reference_no"
		type="hidden" id="reference_no" value="" /> <input name="amount"
		type="hidden" id="totalamt" value="" /> <input name="mode"
		type="hidden" value="LIVE" /> <input name="currency" type="hidden"
		value="INR" /> <input name="description" type="hidden"
		value="Flight Ticket" /> <input name="return_url" type="hidden"
		value="https://www.tayyarah.com/response.jsp" /> <input name="name"
		type="hidden" id="customername" value="" /> <input name="address"
		type="hidden" value="bangalore" /> <input name="city" type="hidden"
		value="bangalore" /> <input name="state" type="hidden"
		value="karanataka" /> <input name="country" type="hidden" value="IND" />
	<input name="postal_code" type="hidden" value="560046" /> <input
		name="phone" type="hidden" id="customerno" value="" /> <input
		name="email" type="hidden" id="customeremail" value="" /> <input
		name="ship_name" type="hidden" id="ship_name" value="" /> <input
		name="ship_address" type="hidden" value="bangalore" /> <input
		name="ship_country" type="hidden" value="IND" /> <input
		name="ship_state" type="hidden" value="karanataka" /> <input
		name="ship_city" type="hidden" value="bangalore" /> <input
		name="ship_postal_code" type="hidden" value="560046" /> <input
		name="ship_phone" type="hidden" id="ship_phone" value="" /> <input
		name="algo" type="hidden" value="MD5" />

	<!-- <input value="Submit" type="submit" />  -->
</form>

<script>
	$("#cardProceed").hide();

	$('#Cardoption')
			.on(
					'click',
					function() {
						$('#Cardoption').attr('disabled', true);
						$('#payoptiontext').show();
						var dammyprice = $('#totpr').val();
						var addpercent = (dammyprice / parseFloat(100).toFixed(
								2))
								* parseFloat(2.0).toFixed(2);
						var addedpercent = addpercent.toFixed(2);
						var paymentgatewayprice = (parseFloat(dammyprice) + parseFloat(addedpercent))
								.toFixed(2);
						$('#B2Bothercharges').show();
						$('#otherchargetext').text(addedpercent);
						$('#flighttotalprice').text(paymentgatewayprice);
						$('#totpr').val(paymentgatewayprice);
						$('#isagent').val('card');
						//$('#walletbooksubmit').attr('ng-submit', 'AgentCardBook()');
						$("#walletProceed").hide();
						$("#cardProceed").show();

					});
	$('#Walletoption')
			.on(
					'click',
					function() {
						$('#Cardoption').attr('disabled', false);
						$('#payoptiontext').hide();
						var oriprice = $('#dammyva').val();
						var dammyprice = $('#totpr').val();
						if (oriprice != dammyprice) {
							var addpercent = (oriprice / parseFloat(100)
									.toFixed(2))
									* parseFloat(2.0).toFixed(2);
							var addedpercent = addpercent.toFixed(2);
							var paymentgatewayprice = (parseFloat(dammyprice) - parseFloat(addedpercent))
									.toFixed(2);
							$('#totpr').val(paymentgatewayprice);
							$('#flighttotalprice').text(paymentgatewayprice);
						}
						$('#B2Bothercharges').hide();
						$('#isagent').val('cash');
						$("#walletProceed").show();
						$("#cardProceed").hide();
					});
	function IsAlphaNumeric(e) {
		var specialKeys = new Array();
		specialKeys.push(8); //Backspace
		specialKeys.push(9); //Tab
		specialKeys.push(46); //Delete
		specialKeys.push(36); //Home
		specialKeys.push(35); //End
		specialKeys.push(37); //Left
		specialKeys.push(39); //Right
		specialKeys.push(32); //space
		var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
		var ret = ((keyCode >= 48 && keyCode <= 57)
				|| (keyCode >= 65 && keyCode <= 90)
				|| (keyCode >= 97 && keyCode <= 122) || (specialKeys
				.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
		//document.getElementById("error").style.display = ret ? "none" : "inline";
		return ret;
	}
</script>
<script src="js/calender/jquerycal.js"></script>
<script src="js/calender/jquerycalUI.js"></script>

<script type="text/javascript">
	 $(document).ready(function(){$("#AdFirstName-0,#AdFirstName-1,#AdFirstName-2,#AdFirstName-3,#AdFirstName-4,#AdFirstName-5,#AdFirstName-6,#AdFirstName-7,#AdFirstName-8").autocomplete({minLength:1,source:function(e,t){var a="flight",s=$(location).attr("href"),i=s.substr(0,s.lastIndexOf("/#/")+1),r=i+"GetCorporateEmployeeList";
	$.ajax({url:r,dataType:"json",data:{userlistInput:a,searchText:e.term,maxResults:10},success:function(a){var s=$.map(a.jsonResult.passengers,
			function(e){return{label:e.firstName+" "+e.lastName,value:e.firstName,lastname:e.lastName,mobileno:e.mobile,email:e.emailId,expiredatepassport:e.passportExpiryDate,passportno:e.passportNo,title:e.title}});
	t($.ui.autocomplete.filter(s,e.term))}})},select:function(e,t){var a=e.target.id.substring(12,13);return void 0!=t.item.email&&$("#email").val(t.item.email),$("#"+e.target.id).val(t.item.value),$("#Surname-"+a).val(t.item.lastname),$("#mrMss"+a).val(t.item.title),$("#mobile").val(t.item.mobileno),$("#passport-"+a).val(t.item.passportno),!1}})});
	 	 
	</script>