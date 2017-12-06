<%@taglib prefix="s" uri="/struts-tags"%>
<div class="col-md-12 col-sm-12 col-xs-12 ">
<div class="searched-result mobResult"   >
 <div data-ng-show="loadpricebar">
 <div class="bar hidden-xs"></div>
 <span><b>Please Wait While we are Getting prices and availability...</b></span></div>
			<!-- ----------- step result shown here ------------------------  -->
<div class="clearfix" data-ng-style="{'display' : display}" data-ng-cloak>
			<div class="clearfix">
				<s:if test="#session['agent'] != null && #session.isCorporate == false || #session.emulateFlag == true ">
					<div class="sort-by-section clearfix box">
						<div class="col-md-12 col-sm-12 col-xs-12 clearfix">

							<ul class="sort-bar clearfix">
								<li id="offnone"><a 
									class="sort-by-container clearfix"> <span
										class="offcanvas__trigger--open h-filters" data-rel="one"><i
											class="tayyarah-th"></i>Filters</span>
								</a></li>

								<li><a href="javascript:void(0);"
									class="sort-by-price pull-right"> <label id="mark" style="cursor: pointer;">Add
											Markup</label>
										<form class="form-inline" id="markup"
											data-ng-submit="addmarkup()" style="display: none;">
											<input type="hidden" id="isLogged" value="true" >
											<input type="hidden" name="ccy"
												value="<s:property value="%{#session.agent.currencyCode}"/>">
											<input type="hidden" name="ay"
												value="<s:property value="%{#session.agent.Securityanswer}"/>">
											<input type="hidden" name="ori" id="markorigin" value="">
											<input type="hidden" name="des" id="markdestination" value="">
											<input type="hidden" name="depDate" id="markdepDate" value="">
											<input type="hidden" name="$A*D" id="markadult" value="">
											<input type="hidden" name="$K*D" id="markkid" value="">
											<input type="hidden" name="$I*T" id="markinfant" value="">
											<input type="hidden" name="cabinClass" id="markcabinClass"
												value=""> <input type="hidden" id="tty" name="$TT*Y"
												value="O"> <input type="hidden" id="Dynamic"
												name="$&*D5K" value="true">
										    <input name="$M*A@"	class="form-control mobile-inline" placeholder="Markup"
												id="appliedmarkamt" value="{{markupammount}}"
												autocomplete="off">
											<input type="hidden" name="airlinecode" id="airlinecode"
												value="all">
											<!-- 	<input type="hidden" name="skey" id="searchkey" value="{{searchkey}}"> -->
											<button type="submit" id="submitmarkup"
												data-ng-click="submitted==true"
												class="btn btn-info but btn-clean mobile-inline">Add</button>
										</form>
								</a></li>
								<li data-ng-show="{{user.isDynamicMarkup ==undefined}}"
									style="display: none;" id="appliedmarkup"><a href="#"
									class="sort-by-price pull-right"> <label
										id="appliedmarkamt"> </label>
								</a></li>
								<li data-ng-show="{{user.isDynamicMarkup != undefined}}"
									id="appliedmarkup"><a class="sort-by-price pull-right">
										<label id="appliedmarkamt">Markup Applied
											{{markupammount}} </label>
								</a></li>

								<li class="mobileFont">
									<h5>
										Results <b>{{(fareFlightSegment | filter:filterprice |
											filter:StopsFilter| filter:AirlineFilter |
											filter:MatrixAirlineFilter | filter:FareTypeFilter).length}}</b>
										out of <b>{{fareFlightSegment.length}}</b>

									</h5>
								</li>								
							</ul>


						</div>

					</div>
				</s:if>
				<s:else>
				
					<div class="sort-by-section clearfix box">
						<div class="col-md-12 col-sm-12 col-xs-12 clearfix">

							<ul class="sort-bar clearfix">
								<li id="offnone" class="col-md-4 col-sm-4 col-xs-3"><a class="sort-by-container clearfix ">
										<span class="offcanvas__trigger--open h-filters"
										data-rel="one"><i class="tayyarah-th"></i>Filters</span>
								</a></li>
								<li class="col-md-4 col-sm-4 col-xs-8"><a data-target="{{currencyname}}"
									class="sort-by-container">
										<form class="col-md-12 col-sm-12 col-xs-12 form-inline currencyselectform">
											<label class="col-md-5 col-sm-4 col-xs-6 padMobLeft0px">Currency</label>
											 <select id="selectcurrencyname" class="form-control currencyselect col-md-4 col-sm-4 col-xs-6"
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

								<li class="sort-by-price pull-right col-md-4 col-sm-4 col-xs-1 mobileFont">

									<h5>
										Results  <b>{{(fareFlightSegment |
											filter:filterprice|filter:StopsFilter| filter:AirlineFilter |
											filter:MatrixAirlineFilter | filter:FareTypeFilter).length}}</b>
										out of <b>{{fareFlightSegment.length}}</b>
									</h5>
								</li>
							</ul>
						</div>
					</div>
				</s:else>
				
			</div>
			<div class="row " data-ng-show="isQuoteAvailable" id="changerefine">
				<div class="col-xs-11 clearfix">
					<!-- <div class="row"> -->
					<div class="col-md-3 col-sm-3 col-xs-3 searched-city">
						<p>
							<b>{{origincodename}} <i class="tayyarah-arrows-h"></i>
								{{destcodename}}
							</b>
						</p>
					</div>

					<div class="col-xs-4 col-sm-3 searched-date">
						<div class="row">
							<div class="col-sm-12">
								<p>
									<b>{{departuredate | date:'MMM d'}}</b>
								</p>
							
							</div>
						</div>
					</div>
					<!-- searched-date -->


					<div class="col-md-5 col-xs-8 col-sm-5 searched-qeconomy">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<p class="below-none">
									<b>Cabin</b>
								</p>
								<span>{{cabin}}</span>
							</div>

							<div class="col-md-6 col-sm-6 col-xs-6">
								<p>
									<b>{{totalpassenger}}</b>
								</p>
								<span class="below-none">Traveller(s)</span>
							</div>
						</div>
					</div>

				</div>
			</div>
			
			<div class="col-md-12 mobchangeRefine" data-ng-hide="hideDiv ||isQuoteAvailable" id="changerefine">
				<div class="col-xs-10 clearfix">
					<!-- <div class="row"> -->
					<div class="col-md-3 col-sm-3 col-xs-3 searched-city mobMargin-top-10px">
						<p>
							<b>{{origincodename}} <i class="tayyarah-arrows-h"></i>
								{{destcodename}}
							</b>
						</p>
					</div>

					<div class="col-md-3 col-xs-4 col-sm-3 searched-date">
						<div class="row">
							<div class="col-sm-12">
								<p>
									<b>{{departuredate | date:'MMM d'}}</b>
								</p>
							
							</div>
						</div>
					</div>
					<!-- searched-date -->


					<div class="col-md-5 col-xs-3 col-sm-5 searched-economy mobPadZero ">
						<div class="row">
							<div class="col-xs-6 hidden-xs">
								<p class="below-none">
									<b>Cabin</b>
								</p>
								<span>{{cabin}}</span>
							</div>

							<div class="col-xs-6 hidden-xs">
								<p>
									<b>{{totalpassenger}}</b>
								</p>
								<span class="below-none mobShow ">Traveller(s)</span>								
							</div>
							<div class="col-xs-12 visible-xs hidden-md hidden-sm mobPadZero mobMargin-top-15px">
							
								<p class="mobsameBlock mobPadZero col-xs-6 ">
									<b class="pull-right ">{{totalpassenger}}</b>
								</p>								
								<span class="mobsameBlock visible-xs col-xs-6  "><i class="tayyarah-users pull-left" aria-hidden="true"></i></span>
							
							</div>
						</div>
					</div>

				</div>
				<div class="col-md-2 col-sm-2 col-xs-2">
					<div class="margin">
						<div class="button-group clean">
									<a class="btn btn-info but btn-clean button-dropdown hidden-xs"
								id="changebutton" data-ng-click="showDiv=true;hideDiv=true; hideMe()"><span
								class="hidden-xs" data-toggle="dropdown"> Modify Search <i
									class="tayyarah-angle-double-right"></i></span> </a> 
								<a class="btn btn-info but btn-clean offcanvas__trigger--open btn offclose"
								data-rel="searchrefine" data-ng-click="showDiv=true"><span><i
									class="tayyarah-search"></i></span> </a>
						</div>
					</div>
				</div>
			</div>
			<!-- END OF row -->

			<!-- this is hided div on click it is to be displayed -->
			<div class="clearfix offcanvas" data-ng-show="showDiv" id="searchrefine">
				<div class="closebtn done">
					<button class="offcanvas__trigger--close btn"
						data-rel="searchrefine">
						<i class="tayyarah-left"></i> Back
					</button>
				</div>
				<form name="flightsearchForm" id="searchagain"
					data-ng-submit="flightresearch()">

					<div class="col-md-10 col-sm-10 col-xs-10 clearfix">
					    <input type="hidden" id="hideori" value="">
                        <input type="hidden" id="hidedes" value="">
						<input type="hidden" id="triptype" name="$TT*Y" value="O">
						<input type="hidden" name="airlinecode" id="airlinecode"
							value="all"> <input type="hidden" name="isDynamicmarkup"
							value="false" id="isDynamicmarkup"> <input type="hidden"
							name="markupAmount" value="0" id="markupAmount">
						<s:if test="#session['agent'] != null">
							<input type="hidden" name="ccy" id="onecurrencyname"
								value="<s:property value="%{#session.agent.currencyCode}"/>">
							<input type="hidden" name="ay" id="ay"
								value="<s:property value="%{#session.agent.Securityanswer}"/>">
						</s:if>
						<s:else>
							<input type="hidden" name="ccy" id="onecurrencyname" value="INR">
							<input type="hidden" id="ay" name="ay"
								value="zqJ3R9cGpNWgNXG55ub/WQ==">
						</s:else>
						<input type="hidden" name="trips" id="trips" value="1">

						<div class="col-md-4 col-sm-4 col-xs-12 clearfix">
							<div class="form-group">
								<div class="input-group">
									<input type="text" name="ori" data-ng-model="originall"
										value="{{user.origin}}" id="originid" autocomplete="off"
										data-typeahead="c as c for c in cities($viewValue)  | limitTo:10"
										placeholder="City or Airport" data-typeahead-min-length='1'
										data-typeahead-on-select='onSelectPart($item, $model, $label)'
										data-typeahead-template-url="customTemplate.html"
										class="form-control" required>

								</div>
								<div class="ttst" id="errorione"></div>
							</div>
						</div>

						<div class="col-md-4 col-sm-4 col-xs-12 clearfix">
							<div class="form-group">
								<div class="input-group">
									<input type="text" name="des" id="destinationid"
										value="{{user.destination}}" autocomplete="off"
										data-ng-model="destinationall" placeholder="City or Airport"
										data-typeahead="c as c for c in cities($viewValue)  | limitTo:10"
										data-typeahead-min-length='1'
										data-typeahead-on-select='onSelectPart($item, $model, $label)'
										data-typeahead-template-url="customTemplate.html"
										class="form-control" required>



								</div>
								<div class="ttst" id="errdesone"></div>
								<div class="ttst" id="errdepone"></div>
							</div>
						</div>
						<div  id="hdepe"></div>
						<div class="col-md-2 col-sm-2 col-xs-12 clearfix">
							<div class="form-group">
								<div class="input-group">
									<input type="text" class="form-control o-c-s"
										placeholder="MM/DD/YY" name="depDate" id="onedpd"
										value="{{user.departureDate}}">
								</div>
								<div class="ttst" id="errdesone"></div>
								<div class="ttst" id="errdepone"></div>
							</div>
						</div>

						<div class="col-md-2 col-sm-2 col-xs-12 clearfix">
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
													</span> <span class="infid input-number " id="infantid" min="0"
														max="1">0</span> <input type="hidden" name="$I*T"
														id="hiddeninfant" value="0"> <span
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
									<button type="submit" id="modifiedsearch" class="btn btn-info mob-reSearch"
									data-ng-click="submitted==true">Search</button>
							</div>
						</div>
					</div>

				</form>
			</div>

			<div class="col-md-12 col-sm-12 col-xs-12 onewayMtrz padLeftRightZero" id="max-none">
				 
				<div class="col-xs-3 col-sm-2 col-md-2 mtx-list clearfix padLeftRightZero">
					<div class="matrix-stop clearfix width100per">
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

				<div class="col-xs-9 col-sm-10 col-md-10 clearfix matrix-search mobMatrixSearch padLeftRightZero">
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

			<div class="col-md-12 col-sm-12 col-xs-12">
				<div class=" clearfix">
					<div class="row">
						<div class="flight-list">
							<div id="nav">
								<div class="flight-booking-heading clearfix">
								<div class="col-sm-1 sortby">
										<h5>
											<b>
												Sort by: 
											</b>
										</h5>
									</div>
									<div class="col-sm-6 airlines">
										<h5>
											<b data-ng-click="sortorder(fareFlightSegment,'airline')">
												Airlines <i data-ng-class="airlineasc"></i>
											</b>
										</h5>
									</div>
									<div class="col-sm-2 departure">
										<h5>
											<b data-ng-click="sortorder(fareFlightSegment,'depart')">
												<i class="tayyarah-plane"></i> Departure <i
												data-ng-class="departasc"></i>
											</b>
										</h5>

									</div>
									<div class="arrive col-xs-2">
										<h5>
											<b data-ng-click="sortorder(fareFlightSegment,'arrival')"><i
												class="tayyarah-plane"></i> Arrival <i
												data-ng-class="arrivalasc"></i></b>
										</h5>

									</div>
									<div class="duration col-xs-2">
										<h5>
											<b data-ng-click="sortorder(fareFlightSegment,'duration')"><i
												class="tayyarah-clock"></i> Duration <i
												data-ng-class="durationasc"></i></b>
										</h5>

									</div>
									<div class="col-sm-2 Price">
										<h5>
											<b data-ng-click="sortorder(fareFlightSegment,'price')">
												Price <i data-ng-class="priceasc"></i>
											</b>
										</h5>
									</div>
								</div>
							</div>

							<!--   ----------------------- flight booking list is displayed here  ----------------------     -->

							<!-- ng-show="isShowable(groupindex);" | filter:filterdeparttime  data-ng-if="isshowableflightSegment" | itemsPerPage:20  data-dir-paginate-->
							<div id="fareflightlist{{groupindex}}"
								data-ng-show="isShowable(groupindex)"  class="flightlistcon mobRemoveBorder"
								data-ng-repeat="(groupindex,fareFlightSegments) in fareFlightSegment | filter:filterprice | filter:StopsFilter | filter:AirlineFilter | filter:MatrixAirlineFilter | filter:FareTypeFilter ">

								<div class="ThemeGroup"
									data-ng-repeat="flightSegmentsGroups in fareFlightSegments.flightSegmentsGroups">

									<div class="flb mobflb clearfix">
										<div class="col-sm-10 col-xs-9 fligthresultoneway">
											<div class="flight-booking-list clearfix">
										<label class="block clearfix seglist corporate-hoverable"
													id="seggroupchild{{fareFlightSegments.id}}"
													data-ng-repeat="(flightSegmentsindex,flightSegments) in flightSegmentsGroups.flightSegments  | filter:filterdeparttime | filter:filterarrivaltime">
										
												

													<div class="sin-row">
														<div class="col-sm-6 airlines ">
															<div class="pull-left">
																<input type="radio" data-ng-model="flightid"
																	name="selectedflight{{fareFlightSegments.id}}"
																	id="{{flightSegments.flightIndex}}"
																	data-ng-click="selectflight(fareFlightSegments.id,flightSegments.flightIndex,$event)">
															</div>
															<span class="img-wh"> <span
																class="spriteFltLogos x{{flightSegments.segments[0].carrier.code}}"></span></span>
															<p class="img-airname">
																<span>{{flightSegments.segments[0].carrier.name}}</span> <a
																	class="hidden-xs">{{flightSegments.segments[0].carrier.code}}-</a>
																<a class="hidden-xs"
																	data-ng-repeat="(segmindex,segment) in flightSegments.segments">{{segment.flight.number}}
																	<span
																	data-ng-hide="segmindex == flightSegments.segments.length - 1">/</span>
																</a>
															</p>
															<a class="complementry" data-ng-if="flightSegments.segments[0].carrier.name =='Jet Airways' && !isInternational"><i class="toolti tayyarah-cutlery"></i><span class="tooltitext">Complimentary Meal/Snacks</span> </a>
														    <a class="complementry" data-ng-if="flightSegments.segments[0].carrier.name =='Air India' && !isInternational"><i class="toolti tayyarah-cutlery"></i><span class="tooltitext">Complimentary Meal/Snacks</span> </a>
														</div>

														<div class="col-xs-2 departure mobWidth30per">
															<div class="flight-timings">
																<p class="h4">
																	<i class="tayyarah-plane"></i>{{flightSegments.segments[0].depTime}}
																</p>
																<span>{{flightSegments.segments[0].ori}}</span>
															</div>
														</div>
														<div class="arrive col-xs-2 mobWidth30per">
															<div class="flight-timings">
																<p class="h4">
																	<i class="tayyarah-fighter-jet"></i>
																	{{flightSegments.segments[flightSegments.segments.length
																	- 1].arrTime }}
																</p>
																<span>{{flightSegments.segments[flightSegments.segments.length
																	- 1].dest}}</span>
															</div>
														</div>
														<div class="duration col-xs-2 mobWidth30per">
															<div class="flight-timings">

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
																	{{flightSegments.segments | totaltime:'mm':'hhh	mmm':false }}
																</p>

																<span data-ng-show="flightSegments.segments.length == 1">{{flightSegments.segments.length
																	- 1}} Stop </span> <span
																	data-ng-show="flightSegments.segments.length == 2">{{flightSegments.segments.length
																	- 1}} Stop </span> <span
																	data-ng-show="flightSegments.segments.length > 2">{{flightSegments.segments.length
																	- 1}} Stops </span>
															</div>
														</div>
													</div> <!-- single-row-ends -->
												</label>
												
											</div>
											<!-- flight-booking-list -->
										</div>
										<!-- eo-col-8 -->

										<div class="col-sm-2 col-xs-3 fd-tim">
											<div class="flight-timings">
												<p class="h3 mobMargin-btm">
													<i data-ng-class="classname"></i>{{getconvertedcurrency(fareFlightSegments.totalPrice)}}
												</p>
											</div>

											<div class="book">
												<div class="flight-timings">
													<form data-ng-submit="booknow(groupindex+1)">
														<input type="hidden" id="adult{{groupindex+1}}" name="at"
															value="{{adult}}"> <input type="hidden"
															id="child{{groupindex+1}}" name="cd" value="{{child}}">
														<input type="hidden" id="infant{{groupindex+1}}" name="it"
															value="{{infant}}"> <input type="hidden"
															id="searchkey{{groupindex+1}}" name="sky"
															value="{{searchkey}}"> <input type="hidden"
															id="ccy{{groupindex+1}}" name="ccy"
															value="{{currencyname}}"> <input type="hidden"
															id="fid{{groupindex+1}}"
															name="fidx{{fareFlightSegments.id}}"
															value="{{flightSegmentsGroups.flightSegments[flightSegmentsGroups.flightSegments.length - 1].flightIndex}}">
														<input type="hidden" id="bookingtype{{groupindex+1}}"
															name="btype" value="book"> <input type="hidden"
															id="app_key{{groupindex+1}}" name="ay"
															value="{{app_key}}">
															
														<button type="submit" id="flightonewaybook" class="btn btn-info bookBtn"
															data-ng-click="submitted==true" data-ng-hide="bookNowButtonQuotation">Book Now</button>
															
																<s:if test="#session['agent'] != null">
															<button type="button" id="QuoteClick{{groupindex}}" class="btn btn-info bookBtn" data-ng-show="isQuoteAvailable"
															data-ng-click="addtoquotelist(fareFlightSegments,groupindex)">Quote Now</button>
															</s:if>
														<!-- <i class="tayyarah-angle-right"></i>  -->
													</form>
												</div>
												
												
												
												<s:if test="#session['agent'] != null">
												
												<div class="flight-timings" data-ng-if="isInternational && !fareFlightSegments.lcc && isholdeligibility">
												<span >OR</span>
												<div class="hold-free">
													<!-- <form action="HoldOneTripSummary" -->
													<form data-ng-submit="holdnow(groupindex+1)">
														<!-- id="flightdetails{{fareFlightSegments.id}}" target=_blank> -->
														<input type="hidden" id="adult{{groupindex+1}}" name="at"
															value="{{adult}}"> <input type="hidden"
															id="child{{groupindex+1}}" name="cd" value="{{child}}">
														<input type="hidden" id="infant{{groupindex+1}}" name="it"
															value="{{infant}}"> <input type="hidden"
															id="searchkey{{groupindex+1}}" name="sky"
															value="{{searchkey}}"> <input type="hidden"
															id="ccy{{groupindex+1}}" name="ccy"
															value="{{currencyname}}"> <input type="hidden"
															id="fid{{groupindex+1}}"
															name="fidx{{fareFlightSegments.id}}"
															value="{{flightSegmentsGroups.flightSegments[flightSegmentsGroups.flightSegments.length - 1].flightIndex}}">
														<input type="hidden" id="holdingtype{{groupindex+1}}"
															name="btype" value="hold"> <input type="hidden"
															id="app_key{{groupindex+1}}" name="ay"
															value="{{app_key}}">													
														<!-- <input class="btn btn-info but btn-clean" type="submit"	value="Hold for Free"> -->
														<button type="submit" class="btn btn-info bookBtn mobileHoldBtn"
															ng-click="submitted==true">Hold for Free</button>														
													</form>
													<div class="hold-free-hover"> Hold seats for free till {{ fareFlightSegments.latestTicketingTime | date:'EEE, dd MMM yy' }}</div>
													</div>										
												</div>
											</s:if>
												<a class="col-xs-12 mobPadZero FareModalInline" data-toggle="modal"
													href="javascript:void(0);" data-target="#myModal"
													data-ng-click="showdetails(fareFlightSegments)"><b><i
														class="tayyarah-share "></i> Show details</b></a> <span
													class="refundround col-xs-12 FareModalInline">{{isRefuntable(fareFlightSegments.refundable)}}</span>
												<!-- Button trigger modal -->

											</div>
										</div>
										<!-- </div> -->
									</div>
									<!-- end 0f flb -->
								</div>
								
							</div>

							<dir-pagination-controls max-size="5" direction-links="true"
								boundary-links="true"> </dir-pagination-controls>

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
													<div class="m-city">
														<p>
															{{selectedsegments[0].oriName}}({{selectedsegments[0].ori}})
															<i class="tayyarah-long-arrow-right"></i>{{selectedsegments[selectedsegments.length
															- 1].destName}}(
															{{selectedsegments[selectedsegments.length - 1].dest}}) <span
																class="mod-depart block"> <i
																class="tayyarah-clock-o"></i> <time
																	data-ng-if="selectedsegments.length == 1">
																	{{selectedsegments | totaltime:'mm':'hhh mmm':false}}</time> <time
																	data-ng-if="selectedsegments.length == 2">
																	{{getlayovercompare(selectedsegments,selectedsegments[0].arrival,selectedsegments[1].depart)}}</time>
																<time data-ng-if="selectedsegments.length == 3">
																	{{getlayovercomparelevel2(selectedsegments,selectedsegments[0].arrival,selectedsegments[1].depart,selectedsegments[1].arrival,selectedsegments[2].depart)}}</time>
															</span>
														</p>
													</div>
													<div class="m-price">
														<form data-ng-submit="booknow(groupindex+1)">
														<input type="hidden" id="adult{{groupindex+1}}" name="at"
															value="{{adult}}"> <input type="hidden"
															id="child{{groupindex+1}}" name="cd" value="{{child}}">
														<input type="hidden" id="infant{{groupindex+1}}" name="it"
															value="{{infant}}"> <input type="hidden"
															id="searchkey{{groupindex+1}}" name="sky"
															value="{{searchkey}}"> <input type="hidden"
															id="ccy{{groupindex+1}}" name="ccy"
															value="{{currencyname}}"> <input type="hidden"
															id="fid{{groupindex+1}}"
															name="fidx{{fareFlightSegments.id}}"
															value="{{flightSegmentsGroups.flightSegments[flightSegmentsGroups.flightSegments.length - 1].flightIndex}}">
														<input type="hidden" id="bookingtype{{groupindex+1}}"
															name="btype" value="book"> <input type="hidden"
															id="app_key{{groupindex+1}}" name="ay"
															value="{{app_key}}">
		
																								
																<i data-ng-class="classname"></i>{{getconvertedcurrency(totalprice)}}
																<span class="block"> 
										                  <input id="flightonewayselect" class="btn btn-info btn-clean" type="submit" name="Select" data-ng-click="submitted==true" value="Select">
																	</span>
															</p>
														</form>
													</div>
												</div>
											</div>
										</div>
										<div class="modal-body">
											<div class="showviews show320px">
												
										<ul class="nav nav-tabs" role="tablist">
								
													<li role="presentation" class="active"><a
														href="javascript:void(0);" data-target="#home"
														aria-controls="home" role="tab" data-toggle="tab">
															Flight Details</a></li>
													<li role="presentation"><a href="javascript:void(0);"
														data-target="#profile" aria-controls="profile" role="tab"
														data-toggle="tab">Fare details</a></li>
													<li role="presentation"><a href="javascript:void(0);"
														data-target="#messages" aria-controls="messages"
														role="tab" data-toggle="tab">Baggage</a></li>
												</ul>

												<!-- Tab panes -->
												<div class="tab-content" id="mode-cont">
													<div role="tabpanel" class="tab-pane active" id="home">
														<!-- model main-details-first  -->
														<div class="model-main-details"
															data-ng-repeat="(index,segments) in selectedsegments">
															<!-- d-h-air-first -->

															<div class="d-h-air">
																<ul class="mod-f-details clearfix">
																	<li class="mobLi100Per mobCabin">
																		<figure>
																			<span
																				class="spriteFltLogos x{{segments.carrier.code}}"></span>
																			<figcaption>{{segments.carrier.code}}-{{segments.flight.number}}</figcaption>
																			<figcaption>Booking Class :
																				{{segments.cabin.code}}</figcaption>
																		</figure>
																	</li>
																	<li class="mod-dep mobLi40Per">
																		<h5>{{segments.oriName}} ( {{segments.ori}})</h5> <time>{{segments.depDate
																			| date:'EEE, dd MMM'}}</time> <time>
																			{{segments.depTime}}</time>
																		<h6></h6>
																	</li>

																	<li class="module-direction">
																		<div>
																			<p class="m-rou ">
																				<i class="tayyarah-long-arrow-right"></i>
																			</p>
																		</div>
																	</li>

																	<li class="mod-dep mobLi40Per">
																		<h5>{{segments.destName}} ({{segments.dest}})</h5> <time>{{segments.arrDate
																			| date:'EEE, dd MMM'}}</time> <time>
																			{{segments.arrTime }}</time>
																		<h6></h6>
																	</li>

																	<li class="module-direction mobLi100Per">
																		<h5>
																			<i class="tayyarah-clock-o"></i> {{segments.duration
																			| time:'mm':'hhh mmm':false}}
																		</h5> <span>Non Stop</span>
																	</li>
																</ul>

																<p class="operated">
																	{{segments.carrier.name}}, {{segments.flight.number}}<span>
																		Operated by {{segments.carrier.name}} </span>
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

													<!-- fare details goes here -->

													<div role="tabpanel" class="tab-pane" id="profile">

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
																		<td class="h4 ">Total Price</td>
																		<td class="h4 "><i data-ng-class="classname"></i>
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

													<!-- fare details ends here -->

													<div role="tabpanel" class="tab-pane" id="messages">
														<div class="clearfix">
															<div class="col-sm-12 m-baggage">
																<div class="m-baggage-heading">
																	<h4>
																		<i class="tayyarah-plane"></i> Departure
																	</h4>
																	<p>
																		{{selectedsegments[0].ori}} <i
																			class="tayyarah-long-arrow-right"></i>
																		{{selectedsegments[selectedsegments.length - 1].dest}}

																	</p>
																</div>

																<div class="m-baggage-cont clearfix">
																	<div class="col-sm-6">
																		<p>
																			{{selectedsegments[0].oriName}} <i
																				class="tayyarah-long-arrow-right"></i>
																			{{selectedsegments[selectedsegments.length -
																			1].destName}}
																		</p>
																		<span>Adult</span>
																	</div>

																	<div class="col-sm-3">
																		<p>Cabin</p>
																		<span>5-7 Kg</span>
																	</div>
																	<div class="col-sm-3">
																		<p>Checkin</p>
																		<span>{{baggagevalue}} Kg</span>
																	</div>
																</div>
															</div>
														</div>
														<div class="b-info clearfix">The baggage information
															is just for reference. Please check with airline before
															check-in. For more information , visit Lintas website 1
															piece baggage is equivalent to 23 kgs or 50 lbs for
															adult/child and 10 kgs or 22 lbs for infants</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- model ends here -->
							
							
							
					<!-- corporate-quotation-list start here -->			
				<s:if test="#session['agent'] != null">
					<div class="corporate-quotation-list" data-ng-show="isQuoteAvailable">
						<button type="button" class="btn btn-info btn-lg" id="myQuotation">
							<span class="hidden-xs">Your Quotation List </span> <i class="tayyarah-th visible-xs quot-list" ><span class="padrigth10px">Quote List</span></i></button>


						<!-- Modal -->

						<div class="modal left fade" id="myModalQuotation" role="dialog">
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
														+ 1}} </span> <span class="q1"><b>{{quote.airline}}</b></span>
													<span class="q2">Flight No: {{quote.flightNumber}} </span> 
													<span class="q2">Duration: {{quote.totalDuration}} </span><span
													class="q2">Price: <i class="tayyarah-inr"></i><span class="q1"><b>{{quote.totalAmount}}</b></span>
												</span> <span class="q4"><i class="tayyarah-close red"
														data-ng-click="removequote(quote.flightNumber)"></i></span></li>
											</ul>

										</div>
									</div>
								</div>
								<div class="modal-footer">

									<button type="button" class="btn btn-primary"	data-ng-click="addquotesModal()" data-ng-show="quoteloaded">Add Quotation</button>
								</div>
							</div>
						</div>
					</div>
				</s:if>
				
				<div class="modal fade" id="addQuoteConfirmModal" role="dialog">
							<div class="modal-dialog">

								<!-- Modal content-->
								<div class="modal-content">
									<div class="modal-header">
										<button type="button" class="close" data-dismiss="modal">&times;</button>
										
									</div>
									<div class="modal-body " style="margin-top:20px !important;padding-top:0px !important;">
										<h4 class="text-center">Are you Sure to Redirect to Admin</h4>
										<div class="row">
									<button type="button" class="btn btn-primary " style="margin-left:15px;margin-top:40px;" data-ng-click="addquotes()">yes</button>
										<button type="button" class="btn btn-default " style="margin-left:40px;border:1px solid #ccc;margin-top:40px;"data-dismiss="modal">No</button></div>
									</div>
									<!-- <div class="modal-footer">
										<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
									</div> -->
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
									<div class="modal-body " style="margin-top:20px !important;padding-top:10px !important;">
										<h4 class="text-center">We have added this flight to your quotation list.</h4>
											<h5 class="text-center PleaseCheck"> Please check !!</h5>
									
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