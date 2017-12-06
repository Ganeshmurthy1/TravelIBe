<%@taglib prefix="s" uri="/struts-tags"%>
<div class="col-sm-9 searched-result mainContentHeight500px" id="two">
	<div class="scrollTrails">
		<div data-ng-show="loadpricebar">
			<div class="bar hidden-xs"></div>
			<span><b>Getting prices and availability...</b></span>
		</div>

		<!-- ----------- step result shown here ------------------------ -->
		<div class="clearfix displayRigthPAd"
			data-ng-style="{'display' : display}" data-ng-cloak>

			<div class="clearfix">
				<s:if
					test="#session['agent'] == null || #session.isCorporate == true">
					<div class="sort-by-section clearfix box">
						<div class="col-sm-12 clearfix">
							<ul class="sort-bar clearfix">
								<li id="offnone"><a class="sort-by-container clearfix">
										<span class="offcanvas__trigger--open h-filters"
										data-rel="one"><i class="tayyarah-th"></i>Filters</span>
								</a></li>
								<li><a class="sort-by-container">
										<form class="form-inline">
											<label>Currency</label> <select id="selectcurrencyname"
												class="form-control intlcurrency"
												data-ng-model="currencyname"
												data-ng-change="currencychangedValue()">
												<option>INR</option>
												<option>EUR</option>
												<option>USD</option>
												<option>MYR</option>
												<option>EUR</option>
												<option>JPY</option>
												<option>GBP</option>
												<option>NZD</option>
												<option>QAR</option>
												<option>CAD</option>
												<option>CNY</option>
												<option>HKD</option>
												<option>KRW</option>
												<option>PKR</option>
												<option>RUB</option>
												<option>LKR</option>
												<option>ZAR</option>
												<option>CHF</option>
												<option>SAR</option>
											</select>
										</form>
								</a></li>
								<li class="sort-by-price pull-right mobileFont">

									<h5>
										Results <b>{{(fareFlightSegment| filter:filterprice |
											filter:filterdeparttime | filter:filterarrivaltime |
											filter:secondfilterdeparttime |
											filter:secondfilterarrivaltime| filter:StopsFilter |
											filter:AirlineFilter| filter:MatrixAirlineFilter |
											filter:FareTypeFilter).length}}</b> out of <b>{{fareFlightSegment.length}}</b>
									</h5>
								</li>
							</ul>
						</div>
					</div>
				</s:if>

				<s:else>
					<div class="sort-by-section clearfix box">
						<div class="col-sm-12 clearfix">
							<ul class="sort-bar clearfix">

								<li id="offnone"><a href="#"
									class="sort-by-container clearfix"> <span
										class="offcanvas__trigger--open h-filters" data-rel="one"><i
											class="tayyarah-th"></i>Filters</span>
								</a></li>
								<li><a href="javascript:void(0);"
									class="sort-by-price clearfix"> <label id="mark">Add
											Markup</label>
										<form class="form-inline" id="markup"
											data-ng-submit="addmarkup()" style="display: none;">
											<input type="hidden" id="isLogged" value="true"> <input
												type="hidden" name="ccy"
												value="<s:property value="%{#session.agent.currencyCode}"/>">
											<input type="hidden" name="ay"
												value="<s:property value="%{#session.agent.Securityanswer}"/>">
											<input type="hidden" name="ori" id="markorigin" value="">
											<input type="hidden" name="des" id="markdestination" value="">
											<input type="hidden" name="depDate" id="markdepDate" value="">
											<input type="hidden" name="arvlDate" id="markarvlDate"
												value=""> <input type="hidden" name="$A*D"
												id="markadult" value=""> <input type="hidden"
												name="$K*D" id="markkid" value=""> <input
												type="hidden" name="$I*T" id="markinfant" value="">
											<input type="hidden" name="cabinClass" id="markcabinClass"
												value=""> <input type="hidden" name="$TT*Y"
												value="R"> <input type="hidden" id="Dynamic"
												name="$&*D5K" value="true"> <input name="$M*A@"
												class="form-control mobile-inline" placeholder="Markup"
												autocomplete="off" id="appliedmarkamt"
												value="{{markupammount}}">
											<button class="btn btn-info but btn-clean mobile-inline"
												type="submit" id="submitmarkup"
												data-ng-click="submitted==true">Add</button>
										</form>
								</a></li>
								<li data-ng-show="{{allParams.isDynamicMarkup == false}}"
									style="display: none;" id="appliedmarkup"><a href="#"
									class="sort-by-price pull-right"> <label
										id="appliedmarkamt"> </label>
								</a></li>
								<li data-ng-show="{{allParams.isDynamicMarkup == true}}"
									id="appliedmarkup"><a class="sort-by-price pull-right">
										<label id="appliedmarkamt">Markup Applied
											{{markupammount}} </label>
								</a></li>
								<li class="sort-by-price pull-right">

									<h5>
										Results <b>{{(fareFlightSegment| filter:filterprice |
											filter:filterdeparttime | filter:filterarrivaltime |
											filter:secondfilterdeparttime |
											filter:secondfilterarrivaltime| filter:StopsFilter |
											filter:AirlineFilter| filter:MatrixAirlineFilter |
											filter:FareTypeFilter ).length}}</b> out of <b>{{fareFlightSegment.length}}</b>
									</h5>
								</li>
							</ul>
						</div>
					</div>
				</s:else>
			</div>
			<div class="row" data-ng-show="isQuoteAvailable" id="changerefine">
				<div class="col-xs-11 clearfix">
					<div class="row">
						<div class="col-sm-3 searched-city">
							<p>
								<b>{{origincodename}} <i class="tayyarah-arrows-h"></i>
									{{destcodename}}
								</b>
							</p>
						</div>

						<div class="col-xs-4 col-sm-3 searched-date">
							<div class="row">
								<div class="col-xs-5" style="padding-top: 0px;">
									<p>
										<b>{{allParams.depDate | date:'MMM d'}}</b>
									</p>
								</div>
								<div class="col-xs-2 hidden-xs">
									<p class="ten">
										<b class="tayyarah-arrows-h"></b>
									</p>
								</div>
								<div class="col-xs-5"
									style="padding-top: 0px; padding-left: 5px;">
									<p>
										<b>{{allParams.arvlDate | date:'MMM d'}}</b>
									</p>

								</div>
							</div>
						</div>
						<!-- searched-date -->
						<div class="col-xs-8 col-sm-5 searched-qeconomy">
							<div class="row">
								<div class="col-xs-6 hidden-xs">
									<p>
										<b>Cabin</b>
									</p>
									<span>{{cabin}}</span>
								</div>

								<div class="col-xs-6">
									<p>
										<b>{{totalpassenger}}</b>
									</p>
									<span>Traveller(s)</span>
								</div>
							</div>
						</div>
						<!-- searched-economy -->
					</div>

				</div>
			</div>
			<div class="row mobRemoveRightMargin"
				data-ng-hide="hideDiv || isQuoteAvailable" id="changerefine">
				<div class="col-md-10 col-sm-10 col-xs-10 clearfix">
					<div class="row">
						<div class="col-md-3 col-sm-3 col-xs-3 searched-city mobMrginTop">
							<p>
								<b>{{origincodename}} <i class="tayyarah-arrows-h"></i>
									{{destcodename}}
								</b>
							</p>
						</div>

						<div
							class="col-md-3 col-sm-3 col-xs-7 searched-date mob-padRemove">
							<div class="row">
								<div class="col-xs-4" style="padding-top: 0px;">
									<p>
										<b>{{allParams.depDate | date:'MMM d'}}</b>
									</p>
								</div>
								<div class="col-xs-2 ">
									<p class="ten">
										<b class="tayyarah-arrows-h"></b>
									</p>
								</div>
								<div class="col-xs-5 dateArrival">
									<p>
										<b>{{allParams.arvlDate | date:'MMM d'}}</b>
									</p>

								</div>
							</div>
						</div>
						<!-- searched-date -->
						<div
							class="col-md-5 col-sm-5 col-xs-2 searched-economy cabinPAd mob-padRemove">
							<div
								class="col-md-12 col-sm-12 col-xs-12 mob-padRemove mobMrginTop">
								<div class="col-xs-6 hidden-xs">
									<p>
										<b>Cabin</b>
									</p>
									<span>{{cabin}}</span>
								</div>

								<div class="col-xs-6 hidden-xs">
									<p>
										<b>{{totalpassenger}}</b>
									</p>
									<span>Traveller(s)</span>
								</div>
								<div class="col-xs-6 visible-xs hidden-md hidden-sm">
									<p>
										<span>{{totalpassenger}}</span><span><i
											class="tayyarah-users" aria-hidden="true"></i></span>
									</p>

								</div>
							</div>
						</div>
						<!-- searched-economy -->
					</div>

				</div>
				<div class="col-md-2 col-sm-2 col-xs-2 margin">

					<div class="button-group clean">
						<a class="btn btn-info but btn-clean button-dropdown hidden-xs"
							id="changebutton"
							data-ng-click="showDiv=true;hideDiv=true; hideMe()"><span
							class="hidden-xs" data-toggle="dropdown"> Modify Search <i
								class="tayyarah-angle-double-right"></i></span> </a> <a
							class="btn btn-info but btn-clean offcanvas__trigger--open btn offclose"
							data-rel="searchrefine" data-ng-click="showDiv=true"><span><i
								class="tayyarah-search"></i></span> </a>

					</div>

				</div>
			</div>
			<!-- END OF row -->

			<!-- this is hided div on click it is to be displayed -->

			<div class="clearfix offcanvas" data-ng-show="showDiv"
				id="searchrefine">
				<div class="closebtn done">
					<button class="offcanvas__trigger--close btn"
						data-rel="searchrefine">
						<i class="tayyarah-left"></i> Back
					</button>
				</div>
				<form name="flightsearchForm" id="searchagain"
					data-ng-submit="flightresearch()">
					<div class="col-sm-10 clearfix">
						<input type="hidden" id="hideori" value=""> <input
							type="hidden" id="hidedes" value=""> <input type="hidden"
							name="triptype" id="triptype" value="R"> <input
							type="hidden" name="airlinecode" id="airlinecode" value="all">
						<input type="hidden" name="isDynamicmarkup" value="false"
							id="isDynamicmarkup"> <input type="hidden"
							name="markupAmount" value="0" id="markupAmount">
						<s:if test="#session['agent'] != null">
							<input type="hidden" name="ccy" id="onecurrencyname"
								value="<s:property value="%{#session.agent.currencyCode}"/>">
							<input type="hidden" name="ay" id="ay"
								value="<s:property value="%{#session.agent.Securityanswer}"/>">
						</s:if>
						<s:else>
							<input type="hidden" name="ccy" id="onecurrencyname" value="INR">
							<input type="hidden" name="ay" id="ay"
								value="zqJ3R9cGpNWgNXG55ub/WQ==">

						</s:else>
						<input type="hidden" name="trips" id="tripsid" value="1">

						<div class="col-sm-3 clearfix">
							<div class="form-group">
								<div class="input-group">

									<input type="text" name="ori" data-ng-model="twoorigin"
										value="{{user.origin}}" id="originid" autocomplete="off"
										data-typeahead="c as c for c in cities($viewValue)  | limitTo:10"
										placeholder="City or Airport" data-typeahead-min-length='1'
										data-typeahead-on-select='onSelectPart($item, $model, $label)'
										data-typeahead-template-url="customTemplate.html"
										onkeypress="return isAlphabetKeywithspace(event,this);"
										class="form-control" required>
								</div>
								<div class="ttst" id="erroriround"></div>
							</div>
						</div>
						<div class="col-sm-3  clearfix">
							<div class="form-group">
								<div class="input-group">
									<input type="text" name="des" id="destinationid"
										value="{{user.destination}}" autocomplete="off"
										data-ng-model="twodestination" placeholder="City or Airport"
										data-typeahead="c as c for c in cities($viewValue)  | limitTo:10"
										data-typeahead-min-length='1'
										onkeypress="return isAlphabetKeywithspace(event,this);"
										data-typeahead-on-select='onSelectPart($item, $model, $label)'
										data-typeahead-template-url="customTemplate.html"
										class="form-control" required>
								</div>
								<div class="ttst" id="errdesround"></div>
								<div class="ttst" id="errdepround"></div>
							</div>
						</div>
						<div id="hdepe"></div>
						<div class="col-sm-2 clearfix">
							<div class="form-group">
								<div class="input-group">
									<input type="text" class="form-control o-c-s"
										placeholder="MM/DD/YY" name="depDate" id="twodpd1"
										value="{{user.departureDate}}" data-ng-model="loaderDepart"
										required>
								</div>
								<div class="ttst" id="errdesround"></div>
								<div class="ttst" id="errdepround"></div>
							</div>
						</div>
						<div class=" col-sm-2 clearfix">
							<div class="form-group">
								<div class="input-group">
									<input type="text" class="form-control o-c-s" id="twodpd2"
										value="{{user.arrivalDate}}" name="arvlDate"
										placeholder="MM/DD/YY" data-ng-model="loaderArrival" required>
								</div>
								<div class="ttst" id="errarrround"></div>
							</div>
						</div>

						<div class="col-sm-2 clearfix">
							<div class="form-group">
								<div class="input-group">
									<span class="form-control dropdown-toggle travellerclass"
										data-toggle="dropdown"> <!-- class="btn btn-default dropdown-toggle form-control -->
										<span data-bind="label" id="totaltraveller"></span>
										Traveller(s)
									</span>
									<ul class="dropdown-menu mega-dropdown-menu">
										<li><a href="#"><label>Adult(s)</label>
												<div class="input-group">
													<span class="input-group-btn">
														<button type="button" class="btn btn-default btn-number"
															data-type="minus" data-field="adultid">
															<span class="tayyarah-minus"></span>
														</button>
													</span> <span id="adultid" class="input-number infid" min="1"
														max="9">1</span> <input type="hidden" name="$A*D"
														id="hiddenadult" value="1"><span
														class="input-group-btn">
														<button type="button" class="btn btn-default btn-number"
															data-type="plus" data-field="adultid">
															<span class="tayyarah-plus"></span>
														</button>
													</span>
												</div></a></li>

										<li><a href="#"><label>Child</label>
												<div class="input-group">
													<span class="input-group-btn">
														<button type="button" class="btn btn-default btn-number"
															data-type="minus" data-field="kidid">
															<span class="tayyarah-minus"></span>
														</button>
													</span> <span id="kidid" class="input-number infid" min="0"
														max="9">0</span> <input type="hidden" name="$K*D"
														id="hiddenkid" value="0"><span
														class="input-group-btn">
														<button type="button" class="btn btn-default btn-number"
															data-type="plus" data-field="kidid">
															<span class="tayyarah-plus"></span>
														</button>
													</span>
												</div></a></li>

										<li><a href="#"><label>Infant(s)</label>
												<div class="input-group">
													<span class="input-group-btn">
														<button type="button" class="btn btn-default btn-number"
															data-type="minus" data-field="infantid">
															<span class="tayyarah-minus"></span>
														</button>
													</span> <span class="infid input-number " id="infantid"
														data-min="0" data-max="1">0</span> <input type="hidden"
														name="$I*T" id="hiddeninfant" value="0"> <span
														class="input-group-btn">
														<button type="button" class="btn btn-default btn-number"
															data-type="plus" data-field="infantid">
															<span class="tayyarah-plus"></span>
														</button>
													</span>
												</div></a></li>
										<li><a><label>Class</label>
												<div class="input-group">
													<select class="form-control" name="cabinClass"
														id="cabinselect">
														<option id="All">All</option>
														<option id="Economy">Economy</option>
														<option id="PremiumEconomy">PremiumEconomy</option>
														<option id="Business">Business</option>
														<option id="PremiumBusiness">PremiumBusiness</option>
														<option id="First">First</option>
													</select>
												</div> </a></li>

									</ul>
								</div>
							</div>
						</div>

					</div>
					<div class="col-sm-2">
						<div class="margin">
							<div class="btn-group clean">
								<button type="submit" id="modifiedsearch" class="btn btn-info"
									data-ng-click="submitted==true">Search</button>
							</div>

						</div>
					</div>

				</form>
			</div>

			<!-- END OF row -->
			<!-- this is hided div on click it is to be displayed-ends -->

			<!-- Matrix search -->

			<div class="row margin-btm10px" id="max-none">
				<div class="col-xs-1 col-sm-2 mtx-list clearfix">
					<div class="matrix-stop clearfix">
						<div class="m-imgs clearfix">
							<p>Airlines</p>
						</div>
						<div class="m-non-stops clearfix">
							<p>Non-stop</p>
						</div>
						<div class="m-stops clearfix">
							<p>1+ Stop</p>
						</div>
					</div>
				</div>
				<div class="col-xs-11 col-sm-10 clearfix matrix-search">
					<ol class="matrix-box clearfix" id="selectable">
						<li class="matrix-air clearfix lintas-content"
							data-ng-repeat="item in Matrixairlinepriceitems"
							data-ng-click="Matrixclickairlinefilter($event,item.Airline)"
							id="mat{{getairlinecode(item.Airline)}}">
							<div class="m-img clearfix" style="pointer-events: none">
								<figure>
									<span class="spriteFltLogos x{{getairlinecode(item.Airline)}}"></span>
									<figcaption>{{item.Airline}}</figcaption>
								</figure>
							</div>

							<div class="m-non-stop clearfix" style="pointer-events: none">
								<p data-ng-show="{{item.nonstop != 0}}">
									<i data-ng-class="classname"></i>{{getconvertedcurrency(item.nonstop)}}
								</p>
								<p data-ng-show="{{item.nonstop == 0}}">
									<i></i> -
								</p>
							</div>

							<div class="m-stop clearfix" style="pointer-events: none">
								<p data-ng-show="{{item.onestops != 0}}">
									<i data-ng-class="classname"></i>
									{{getconvertedcurrency(item.onestops)}}
								</p>
								<p data-ng-show="{{item.onestops == 0}}">
									<i></i> -
								</p>
							</div>
						</li>

					</ol>
				</div>
			</div>

			<!-- Matrix search ends -->

			<div class="col-sm-12 ">
				<div class="clearfix">
					<div class="row">
						<div class="flight-list">
							<div id="nav">
								<div class="flight-booking-heading clearfix">
									<div class="sortby col-xs-2">
										<h5>
											<b> Sort by: </b>
										</h5>

									</div>

									<div class="airlines col-xs-6">
										<h5>
											<b> Airlines</b>
										</h5>
									</div>
									<div class="departure col-xs-2">
										<h5>
											<b> <i class="tayyarah-plane"></i> Departure
											</b>
										</h5>

									</div>
									<div class="arrive col-xs-2">
										<h5>
											<b><i class="tayyarah-plane"></i> Arrival</b>
										</h5>

									</div>
									<div class="duration col-xs-2">
										<h5>
											<b><i class="tayyarah-clock"></i> Duration</b>
										</h5>

									</div>
									<div class="Price col-xs-4">
										<h5>
											<b> Price</b>
										</h5>
									</div>
								</div>
							</div>

							<!--   ----------------------- flight booking list is displayed here  ----------------------    | filter:MatrixAirlineFilter   -->

							<div id="fareflightlist{{groupindex}}"
								data-ng-show="isShowable(groupindex)"
								class="flightlistcon ThemeGroup"
								data-dir-paginate="(groupindex,fareFlightSegments) in fareFlightSegment | filter:filterprice | filter:filterdeparttime  | filter:filterarrivaltime | filter:secondfilterdeparttime  | filter:secondfilterarrivaltime| filter:StopsFilter | filter:AirlineFilter| filter:MatrixAirlineFilter | filter:FareTypeFilter |itemsPerPage:30">

								<div class="flb mobCompBorder clearfix">
									<div class="col-md-10 col-sm-10 col-xs-12 Mobdiv pad-LR-Zero">
										<!-- -----------------round-strats----------------------- | filter:roundcheckfilter:false | filter:roundfilterdeparttime | filter:roundfilterarrivaltime |filter:roundairlinefilter -->

										<div class="round-trip"
											data-ng-repeat="(index,flightSegmentsGroups) in fareFlightSegments.flightSegmentsGroups  ">
											<h5 class="text-left" data-ng-show="{{index == 0 }}">
												{{origincodename}} <i class="tayyarah-long-arrow-right"></i>
												{{destcodename}}
											</h5>
											<h5 class="text-left" data-ng-show="{{index == 1 }}">
												{{destcodename}} <i class="tayyarah-long-arrow-right"></i>
												{{origincodename}}
											</h5>

											<div class="flight-booking-list mob-FlightBooklist clearfix">
												<label class="block clearfix corporate-hoverable"
													id="seggroupchild{{fareFlightSegments.id}}"
													data-ng-repeat="flightSegments in flightSegmentsGroups.flightSegments">

													<div class="sin-row">
														<div class="col-md-6 col-sm-6 col-xs-12 airlines">
															<div class="pull-left">
																<input type="radio" data-ng-model="flightid"
																	name="selectedflightindex{{fareFlightSegments.id+index}}"
																	id="{{flightSegments.flightIndex}}">
															</div>
															<span class="img-wh"> <span
																class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span></span>
															<p class="img-airname">
																<a href="javascript:void(0);">{{flightSegments.segments[0].carrier.name}}</a>
																<a href="javascript:void(0);">{{flightSegments.segments[0].carrier.code}}-</a>
																<a href="javascript:void(0);"
																	data-ng-repeat="(segmindex,segment) in flightSegments.segments">{{segment.flight.number}}
																	<span
																	data-ng-hide="segmindex == flightSegments.segments.length - 1">/</span>
																</a>

															</p>
														</div>
														<div
															class="col-md-2 col-sm-2 col-xs-4 departure mobDetails">
															<div class="flight-timings">
																<p class="h4">
																	<i class="tayyarah-plane"></i>
																	{{flightSegments.segments[0].depTime}}
																</p>
																<span>{{flightSegments.segments[0].ori}}</span>
															</div>
														</div>
														<div class="arrive col-md-2 col-sm-2 col-xs-4 mobDetails">
															<div class="flight-timings">
																<p class="h4">
																	<i class="tayyarah-fighter-jet"></i>
																	{{flightSegments.segments[flightSegments.segments.length
																	- 1].arrTime}}
																</p>
																<span>{{flightSegments.segments[flightSegments.segments.length
																	- 1].dest}}</span>
															</div>
														</div>
														<div
															class="duration col-md-2 col-sm-2 col-xs-4 mobDetails">
															<div class="flight-timings mobSpan">
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
																	- 1}} Stop </span> <span
																	data-ng-show="flightSegments.segments.length == 2">{{flightSegments.segments.length
																	- 1}} Stop </span><span
																	data-ng-show="flightSegments.segments.length > 2">{{flightSegments.segments.length
																	- 1}} Stops </span>
															</div>
														</div>
													</div> <!-- single-row-ends -->

												</label>
											</div>
										</div>
									</div>


									<div class="col-md-2 col-sm-2 col-xs-12 padLeftRightZero"
										id="ro-trip">
										<div class="book mobBookBtn">
											<div class="flight-timings col-xs-12 newFlightTiming">
												<p class="h3 col-xs-12 mobMarginTop">
													<i data-ng-class="classname"></i>{{getconvertedcurrency(fareFlightSegments.totalPrice)}}
												</p>
												<form class="col-xs-12 "
													data-ng-submit="booknow(groupindex+1)">
													<input type="hidden" id="adult{{groupindex+1}}" name="at"
														value="{{adult}}"> <input type="hidden"
														id="ccy{{groupindex+1}}" name="ccy"
														value="{{currencyname}}"> <input type="hidden"
														id="child{{groupindex+1}}" name="cd" value="{{child}}">
													<input type="hidden" id="infant{{groupindex+1}}" name="it"
														value="{{infant}}"> <input type="hidden"
														id="searchkey{{groupindex+1}}" name="sky"
														value="{{searchkey}}"> <input type="hidden"
														id="fid{{groupindex+1}}" name="fidx"
														value="{{fareFlightSegments.flightSegmentsGroups[0].flightSegments[fareFlightSegments.flightSegmentsGroups[0].flightSegments.length - 1].flightIndex}}">
													<input type="hidden" id="sid{{groupindex+1}}" name="sidx"
														value="{{fareFlightSegments.flightSegmentsGroups[1].flightSegments[fareFlightSegments.flightSegmentsGroups[1].flightSegments.length - 1].flightIndex}}">
													<input type="hidden" id="app_key{{groupindex+1}}" name="ay"
														value="{{app_key}}">

													<button type="submit" id="flightroundbook"
														class="btn btn-info bookRoundBtn mobBookBtnInternat"
														data-ng-click="submitted==true"
														data-ng-hide="bookNowButtonQuotation">Book Now</button>
													<s:if test="#session['agent'] != null ">
														<button type="button" id="QuoteClick{{groupindex}}"
															class="btn btn-info bookBtn mobBookBtnInternat"
															data-ng-show="isQuoteAvailable"
															data-ng-click="addtoquotelist(fareFlightSegments,groupindex)">Quote
															Now</button>
													</s:if>

												</form>

												<s:if test="#session['agent'] != null">
													<div
														data-ng-if="isInternational && !fareFlightSegments.lcc && isholdeligibility"
														data-ng-hide="bookNowButtonQuotation">

														<span>OR</span>

														<form class="col-xs-12 "
															data-ng-submit="Holdnow(groupindex+1)">
															<input type="hidden" id="adult{{groupindex+1}}" name="at"
																value="{{adult}}"> <input type="hidden"
																id="ccy{{groupindex+1}}" name="ccy"
																value="{{currencyname}}"> <input type="hidden"
																id="child{{groupindex+1}}" name="cd" value="{{child}}">
															<input type="hidden" id="infant{{groupindex+1}}"
																name="it" value="{{infant}}"> <input
																type="hidden" id="searchkey{{groupindex+1}}" name="sky"
																value="{{searchkey}}"> <input type="hidden"
																id="fid{{groupindex+1}}" name="fidx"
																value="{{fareFlightSegments.flightSegmentsGroups[0].flightSegments[fareFlightSegments.flightSegmentsGroups[0].flightSegments.length - 1].flightIndex}}">
															<input type="hidden" id="sid{{groupindex+1}}" name="sidx"
																value="{{fareFlightSegments.flightSegmentsGroups[1].flightSegments[fareFlightSegments.flightSegmentsGroups[1].flightSegments.length - 1].flightIndex}}">
															<input type="hidden" id="app_key{{groupindex+1}}"
																name="ay" value="{{app_key}}">
															<!-- <input class="btn btn-info but btn-clean" type="submit"
																	value="Hold for Free" > -->
															<button type="submit"
																class="btn btn-info bookRoundBtn mobBookBtnInternat"
																data-ng-click="submitted==true">Hold for Free</button>
														</form>
													</div>
												</s:if>
												<a href="javascript:void(0);"
													class="col-md-12 col-sm-12 col-xs-12 mobmodalShow padLeftRightZero"
													data-toggle="modal" data-target="#myModal"
													data-toggle="tooltip" title="Some tooltip text!"
													data-ng-click="showdetailsround(fareFlightSegments);"><b><i
														class="tayyarah-share"></i> Show details</b></a> <span
													class="col-xs-12 refundround padLeftRightZero">{{isRefuntable(fareFlightSegments.refundable)}}</span>

											</div>
											<!-- Button trigger modal -->

										</div>
									</div>


								</div>
								<!-- end 0f flb -->
							</div>
							<!--    model goes here -->

							<!-- Modal -->
							<div class="modal fade" id="myModal" tabindex="-1" role="dialog"
								aria-labelledby="myModalLabel">
								<div class="modal-dialog modal-lg" role="document">
									<div class="modal-content" id="model-f-d">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal"
												aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
											<div class="mod-fli-de clearfix">
												<div class="mod-price">
													<div class="m-city"
														data-ng-repeat="(index,seg) in showselectedsegments"
														data-ng-show="{{index==0}}">
														<p>
															{{seg[0].oriName}}({{seg[0].ori}}) <i
																class="tayyarah-arrows-h"></i> {{seg[seg.length -
															1].destName}}( {{seg[seg.length - 1].dest}})
														</p>
													</div>
													<div class="m-price">
														<p class="h4">
															<i data-ng-class="classname"></i>
															{{getconvertedcurrency(totalprice)}}
														<form data-ng-submit="booknow(groupindex+1)">
															<input type="hidden" id="adult{{groupindex+1}}" name="at"
																value="{{adult}}"> <input type="hidden"
																id="ccy{{groupindex+1}}" name="ccy"
																value="{{currencyname}}"> <input type="hidden"
																id="child{{groupindex+1}}" name="cd" value="{{child}}">
															<input type="hidden" id="infant{{groupindex+1}}"
																name="it" value="{{infant}}"> <input
																type="hidden" id="searchkey{{groupindex+1}}" name="sky"
																value="{{searchkey}}"> <input type="hidden"
																id="fid{{groupindex+1}}" name="fidx"
																value="{{fareFlightSegments.flightSegmentsGroups[0].flightSegments[fareFlightSegments.flightSegmentsGroups[0].flightSegments.length - 1].flightIndex}}">
															<input type="hidden" id="sid{{groupindex+1}}" name="sidx"
																value="{{fareFlightSegments.flightSegmentsGroups[1].flightSegments[fareFlightSegments.flightSegmentsGroups[1].flightSegments.length - 1].flightIndex}}">
															<input type="hidden" id="app_key{{groupindex+1}}"
																name="ay" value="{{app_key}}"> <input
																class="btn btn-info btn-clean" id="flightroundselect"
																type="submit" name="Select"
																data-ng-click="submitted==true" value="Select">

														</form>
														</p>
													</div>
												</div>
											</div>
										</div>
										<div class="modal-body">
											<div class="showviews">


												<ul class="nav nav-tabs" role="tablist">
													<li role="presentation" class="active"><a
														data-target="#home" aria-controls="home" role="tab"
														data-toggle="tab"> Flight Details</a></li>
													<li role="presentation"><a data-target="#profile"
														aria-controls="profile" role="tab" data-toggle="tab">Fare
															details</a></li>
													<li role="presentation"><a data-target="#messages"
														aria-controls="messages" role="tab" data-toggle="tab">Baggage</a>
													</li>

												</ul>

												<!-- Tab panes -->
												<div class="tab-content" id="mode-cont">
													<div role="tabpanel" class="tab-pane active" id="home">


														<!-- model main-details-first  -->
														<div data-ng-repeat="(index,seg) in showselectedsegments">

															<div class="model-main-details"
																data-ng-repeat="(segindex,selectseg) in seg">

																<!-- d-h-air-first -->


																<div class="d-h-air">
																	<ul class="mod-f-details clearfix">
																		<li class="mobLi100Per">
																			<figure>
																				<span
																					class="spriteFltLogos x{{seg[segindex].carrier.code}}"></span>
																				<figcaption>{{seg[segindex].carrier.code}}-{{seg[segindex].flight.number}}</figcaption>
																				<figcaption>Booking Class :
																					{{seg[segindex].cabin.code}}</figcaption>
																			</figure>
																		</li>
																		<li class="mod-dep mobLi40Per">
																			<h5>{{seg[segindex].oriName}}(
																				{{seg[segindex].ori}} )</h5> <time>{{seg[segindex].depDate
																				| date:'EEE, dd MMM'}}</time> <time>{{seg[segindex].depTime
																				}}</time>
																			<h6>{{seg[segindex].oriAirportName}}</h6>
																		</li>

																		<li class="module-direction">
																			<div>
																				<p class="m-rou ">
																					<i class="tayyarah-long-arrow-right"></i>
																				</p>
																			</div>
																		</li>

																		<li class="mod-dep mobLi40Per">
																			<h5>{{seg[segindex].destName}} (
																				{{seg[segindex].dest}})</h5> <time>{{seg[segindex].arrDate
																				|date:'EEE, dd MMM'}}</time> <time>{{seg[segindex].arrTime
																				}}</time>
																			<h6>{{seg[segindex].destAirportName}}</h6>
																		</li>

																		<li class="module-direction mobLi100Per">
																			<h5>
																				<i class="tayyarah-clock-o"></i>
																				{{seg[segindex].duration | time:'mm':'hhh
																				mmm':false}}
																			</h5> <span>0 Stop</span>
																		</li>
																	</ul>

																	<p class="operated">
																		{{seg[segindex].carrier.name}},
																		{{seg[segindex].flight.number}} <span> Operated
																			by {{seg[segindex].carrier.name}}</span>
																	</p>
																	<div class="mod-flight-row clearfix">
																		<div class="layover clearfix"
																			data-ng-hide="{{segindex == seg.length - 1}}">
																			<div class="col-sm-6">
																				<div class="lay">
																					<i class="tayyarah-clock-o"></i> Layover:
																					{{seg[segindex].destName}}
																					({{seg[segindex].dest}}), Time:
																					{{datecompare11(seg[segindex].arrival,seg[segindex+1].depart)
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
																<!-- d-h-air-first-ends  -->
															</div>
														</div>


													</div>

													<div role="tabpanel" class="tab-pane" id="profile">
														<div class="ruleflightloading"
															data-ng-show="rulesloader.loading">
															<img class="ruleflightloading-image"
																src="images/divloading.gif" alt="Loading..." />
														</div>
														<div class="col-sm-4 m-f-summary">
															<h4>Fare Summary</h4>
															<table class="table table-condensed">
																<tbody>
																	<tr>
																		<td>Passenger X {{totalpassenger}}</td>
																		<td><i data-ng-class="classname"></i>
																			{{getconvertedcurrency(selectedflight.basePrice)}}</td>
																	</tr>
																	<tr>
																		<td>Fee and Tax</td>
																		<td><i data-ng-class="classname"></i>
																			{{getconvertedcurrency(selectedflight.taxes)}}</td>
																	</tr>
																	<tr>
																		<td class="h4">Total Price</td>
																		<td class="h4"><i data-ng-class="classname"></i>
																			{{getconvertedcurrency(selectedflight.totalPrice)}}</td>
																	</tr>
																</tbody>
															</table>
														</div>

														<div class="col-sm-8 m-f-Rules">
															<h4>Fare Rules</h4>
															<div class="ruleflightloading"
																data-ng-style="{'display' : rulesloader}" data-ng-cloak>
																<img class="ruleflightloading-image"
																	src="images/divloading.gif" alt="Loading..." />
															</div>

															<p data-ng-repeat="(ruleindex,rules) in farerulelist">
																<b>Rule-{{ruleindex + 1}}</b> <span
																	data-ng-bind-html="rules.value"></span>
															</p>
														</div>
													</div>
													<div role="tabpanel" class="tab-pane" id="messages">

														<div class="clearfix">
															<div class="col-sm-6 m-baggage">
																<div class="m-baggage-heading">
																	<h4>
																		<i class="tayyarah-plane"></i> Departure
																	</h4>

																	<p data-ng-repeat="(index,seg) in showselectedsegments"
																		data-ng-show="{{index==0}}">
																		{{seg[0].ori}} <i class="tayyarah-long-arrow-right"></i>
																		{{seg[seg.length - 1].dest}}
																	</p>
																</div>

																<div class="m-baggage-cont clearfix">
																	<div class="col-sm-6">
																		<p
																			data-ng-repeat="(index,seg) in showselectedsegments"
																			data-ng-show="{{index==0}}">
																			{{seg[0].oriName}} <i
																				class="tayyarah-long-arrow-right"></i>
																			{{seg[seg.length - 1].destName}}
																		</p>
																		<span>Adult</span>
																	</div>

																	<div class="col-sm-3">
																		<p>Checkin</p>
																		<span> {{baggagevalue}} {{baggageunit}}</span>
																	</div>

																</div>


															</div>
															<div class="col-sm-6 m-baggage">
																<div class="m-baggage-heading">
																	<h4>
																		<i class="tayyarah-plane"></i> Arrival
																	</h4>

																	<p data-ng-repeat="(index,seg) in showselectedsegments"
																		data-ng-show="{{index==1}}">
																		{{seg[0].ori}} <i class="tayyarah-long-arrow-right"></i>
																		{{seg[seg.length - 1].dest}}

																	</p>
																</div>

																<div class="m-baggage-cont clearfix">
																	<div class="col-sm-6">
																		<p
																			data-ng-repeat="(index,seg) in showselectedsegments"
																			data-ng-show="{{index==1}}">
																			{{seg[0].oriName}} <i
																				class="tayyarah-long-arrow-right"></i>
																			{{seg[seg.length - 1].destName}}
																		</p>
																		<span>Adult</span>
																	</div>

																	<div class="col-sm-3">
																		<p>Checkin</p>
																		<span> {{secondbaggagevalue}}
																			{{secondbaggageunit}}</span>
																	</div>
																</div>
															</div>
															<div class="b-info clearfix">The baggage
																information is just for reference. Please check with
																airline before check-in. For more information , visit
																Lintas website 1 piece baggage is equivalent to 23 kgs
																or 50 lbs for adult/child and 10 kgs or 22 lbs for
																infants</div>
														</div>
													</div>
												</div>

											</div>


										</div>

									</div>
								</div>
							</div>
							<!-- model ends here -->

							<!-- Admin Redirect model  -->

							<div class="modal fade" id="addQuoteConfirmModal" role="dialog">
								<div class="modal-dialog">

									<!-- Modal content-->
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>

										</div>
										<div class="modal-body "
											style="margin-top: 20px !important; padding-top: 0px !important;">
											<h4 class="text-center">Are you Sure to Redirect to
												Admin</h4>
											<div class="row marginTop20px">
												<button type="button" class="btn btn-primary "
													data-ng-click="addquotes()">yes</button>
												<button type="button" class="btn btn-default "
													style="margin-left: 40px; border: 1px solid #ccc;"
													data-dismiss="modal">No</button>
											</div>
										</div>

									</div>

								</div>
							</div>
							<div class="modal fade" id="InfoModal" role="dialog">
								<div class="modal-dialog modal-sm">

									<!-- Modal content-->
									<div class="modal-content">
										<div class="modal-header">
											<button type="button" class="close" data-dismiss="modal">&times;</button>

										</div>
										<div class="modal-body "
											style="margin-top: 20px !important; padding-top: 10px !important;">
											<h4 class="text-center">We have added this flight to
												your quotation list.</h4>
											<h5 class="text-center PleaseCheck">Please check !!</h5>
										</div>
									</div>
								</div>
							</div>
							<!-- corporate-quotation-list start here -->
							<s:if test="#session['agent'] != null">
								<div class="corporate-quotation-list"
									data-ng-show="isQuoteAvailable">
									<button type="button" class="btn btn-info btn-lg"
										id="myQuotation">Your Quotation List</button>


									<!-- Modal -->

									<div class="modal left fade" id="myModalQuotation"
										role="dialog">
										<div class="modal-dialog">
											<div class="modal-content">
												<div class="modal-header">
													<button type="button" class="close" data-dismiss="modal"
														aria-label="Close">
														<span aria-hidden="true">&times;</span>
													</button>
													<h4 class="modal-title" id="myModalLabel">Quotations</h4>
												</div>
												<div class="modal-body">
													<div data-ng-repeat="quote in quotearray track by $index">
														<ul>
															<li class="qoute-list"><span class="q2">{{$index
																	+ 1}} </span> <span class="q1">Airline :<b>{{quote.airline}}</b></span>
																<span class="q2">Flight No:
																	{{quote.flightNumber}} </span> <span class="q2">Price:
																	<i class="tayyarah-inr"></i><b>{{quote.totalAmount}}</b>
															</span> <span class="q4"><i class="tayyarah-close red"
																	data-ng-click="removequote(quote.flightNumber)"></i></span></li>

														</ul>

													</div>
												</div>
											</div>
											<div class="modal-footer">

												<button type="button" class="btn btn-primary"
													data-ng-click="addquotesModal()"
													data-ng-show="isQuoteloaded">Add Quotation</button>
											</div>
										</div>
									</div>
								</div>
							</s:if>
						</div>
					</div>
				</div>
			</div>
		</div>

		<dir-pagination-controls max-size="5" direction-links="true"
			boundary-links="true"> </dir-pagination-controls>

	</div>
	<!-- col-sm-10 -->

</div>
</div>
</div>
<div class="container" data-ng-show="errordiv" data-ng-cloak>
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
<script type="text/ng-template" id="customTemplate.html">
  <a>
      <span bind-html-unsafe="match.label | typeaheadHighlight:query"></span>
      <i></i>
  </a>

</script>
<script>
		var adult = $('#adultid').text();
		var kid = $('#kidid').text();
		var infant = $('#infantid').text();
		$('#totaltraveller').text(
				parseInt(adult) + parseInt(kid) + parseInt(infant));

		$(document.body).on(
				'click',
				'.dropdown-menu li',
				function(event) {

					var $target = $(event.currentTarget);

					$target.closest('.btn-group').find('[data-bind="label"]')
							.text($target.text()).end().children(
									'.dropdown-toggle').dropdown('toggle');

					return false;

				});
	</script>
<script>
		$('#mark').click(function() {
			if ($("#markup").is(':visible') == false)
				$("#markup").show("slow");
			else
				$("#markup").hide();
		});

		/* $('#submitmarkup').click(function(){
		 $('#markup').submit();
		 });  */
	</script>
<script>
	$("#myQuotation").click(
			function() {
				jQuery.noConflict();
				$('#myModalQuotation').modal('show'); 
				angular.element(document.getElementById('myModalQuotation'))
						.scope().showallquotes();
			});
</script>
<script>
	$(document).ready(function() {
		  $('#one, #searchrefine').iptOffCanvas({
	      baseClass: 'offcanvas',
	      type: 'left' 
	    });
	  }); 

   </script>

<script src="js/hotelDefaultLoad.js"></script>


<!-- Your site ends -->