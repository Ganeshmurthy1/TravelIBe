
<%@taglib prefix="s" uri="/struts-tags"%>

<s:if test="#session.isCorporate == true">
	<input type="hidden" id="isCor" value="true">
	<input type="hidden" name="apiUrl" id="apiUrl" value="{{ApiUrl}}">
<input type="hidden" name="companyId" id="compId"	value="<s:property value="%{#session.agent.Companyid}"/>">
</s:if>




<s:if test="#session.isCorporate == true || #session['agent'] != null ">
	<input type="hidden" name="isB2BandB2E" id="isB2BandB2E" value="true">
</s:if>

<input type="hidden" name="ay"
	value="<s:property value="%{#session.agent.Securityanswer}"/>"
	id="apky">

<div class="visible-xs gradient" data-ng-show="loadpricebar">
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
<div class="container minheight500px" data-ng-cloak>
	<div class="row">
		<div class="col-md-2 col-sm-3 offcanvas" id="one"
			data-ng-show="leftmenuloader">
			<div id="fixingPosition" class="fixedPosition">
				<div class="closebtn done">
					<button class="offcanvas__trigger--close btn" data-rel="one">Done</button>
				</div>
				<aside class="clearfix">
					<div class="panel-group price-box" id="accordion" role="tablist"
						aria-multiselectable="true">
						<div class="panel panel-default">
							<div class="panel-heading" role="tab" id="headingname">
								<h4 class="panel-title">
									<a role="button" data-toggle="collapse"
										data-parent="#accordion" data-target="#collapsename"
										aria-expanded="true" class="accordion"
										aria-controls="collapsename"> Find by Bus Name <span><i
											class="tayy tayyarah-keyboard_arrow_right"></i></span>
									</a>
								</h4>
							</div>
							<div id="collapsename" class="panel-collapse collapse in"
								role="tabpanel" aria-labelledby="headingname">
								<div class="panel-body">
									<div class="input-group">
										<input type="text" id="BusName" class="form-control"
											autocomplete="off" placeholder="Enter Bus Name"
											data-ng-model="busname" data-auto-complete-directives-Bus
											data-ui-items="names"> <span class="input-group-btn">

											<button class="btn btn-info" type="button"
												style="padding: 3px 5px;">
												<span class="tayyarah-search"></span>
											</button>
										</span>
									</div>

								</div>
							</div>
						</div>

						<div class="panel panel-default">
							<div class="panel-heading" role="tab" id="headingOne">
								<h4 class="panel-title">
									<a role="button" data-toggle="collapse"
										data-parent="#accordion" data-target="#collapseOne"
										aria-expanded="true" class="accordion"
										aria-controls="collapseOne"> Prices <span><i
											class="tayy tayyarah-keyboard_arrow_right"></i></span>
									</a>
								</h4>
							</div>
							<div id="collapseOne" class="panel-collapse collapse in"
								role="tabpanel" aria-labelledby="headingOne">
								<div class="panel-body">


									<span><b class="text-left"><i class="tayyarah-inr"></i>{{priceSlider.min}}</b></span><span
										class="pull-right"><b><i class="tayyarah-inr"></i>{{priceSlider.max}}</b></span>
									<rzslider rz-slider-floor="priceSlider.floor"
										rz-slider-ceil="priceSlider.ceil"
										rz-slider-model="priceSlider.min"
										rz-slider-high="priceSlider.max"
										rz-slider-step="{{priceSlider.step}}"></rzslider>
								</div>
							</div>
						</div>
						<div class="panel panel-default"
							data-ng-if="bustypelist.length > 0">
							<div class="panel-heading" role="tab" id="headingFive">
								<h4 class="panel-title">
									<a class="collapsed" role="button" data-toggle="collapse"
										data-parent="#accordion" data-target="#collapseThree"
										aria-expanded="false" aria-controls="collapseThree"> Bus
										Type<span><i class="tayy tayyarah-keyboard_arrow_right"></i></span>
									</a>
								</h4>
							</div>
							<div id="collapseThree" class="panel-collapse collapse in"
								role="tabpanel" aria-labelledby="headingFive">
								<div class="panel-body">

									<div class="checkbox" data-ng-repeat="bustype in bustypelist">
										<label> <input type="checkbox" value="{{bustype}}"
											name="airlines" data-ng-change="getbustypename(bustype)"
											data-ng-model="todo"> <span class="checkbox-material"><span
												class="check"></span></span> <span class="searchcheck-b">{{bustype}}
										</span>
										</label>
									</div>
								</div>
							</div>
						</div>

						<div class="panel panel-default"
							data-ng-if="boardlocationlist.length > 0">
							<div class="panel-heading" role="tab" id="headingThree">
								<h4 class="panel-title">
									<a class="collapsed" role="button" data-toggle="collapse"
										data-parent="#accordion" data-target="#collapseFour"
										aria-expanded="false" aria-controls="collapseThree">
										Boarding Point <span><i
											class="tayy tayyarah-keyboard_arrow_right"></i></span>
									</a>
								</h4>
							</div>
							<div id="collapseFour" class="panel-collapse collapse in"
								role="tabpanel" aria-labelledby="headingThree">
								<div class="panel-body">

									<div class="checkbox"
										data-ng-repeat="blocation in boardlocationlist">
										<label> <input type="checkbox" value="{{blocation}}"
											name="airlines"
											data-ng-change="getboardlocationname(blocation)"
											data-ng-model="todo"> <span class="checkbox-material"><span
												class="check"></span></span> <span class="searchcheck-b">{{blocation}}
										</span>
										</label>
									</div>
								</div>
							</div>
						</div>

						<div class="panel panel-default"
							data-ng-if="droplocationlist.length > 0">
							<div class="panel-heading" role="tab" id="headingFour">
								<h4 class="panel-title">
									<a class="collapsed" role="button" data-toggle="collapse"
										data-parent="#accordion" data-target="#collapseFive"
										aria-expanded="false" aria-controls="collapseFour">
										Dropping Point <span><i
											class="tayy tayyarah-keyboard_arrow_right"></i></span>
									</a>
								</h4>
							</div>
							<div id="collapseFive" class="panel-collapse collapse in"
								role="tabpanel" aria-labelledby="headingFour">
								<div class="panel-body">
									<div class="checkbox"
										data-ng-repeat="dlocation in droplocationlist">
										<label> <input type="checkbox" value="{{dlocation}}"
											name="airlines"
											data-ng-change="getdroppinglocationname(dlocation)"
											data-ng-model="todo"> <span class="checkbox-material"><span
												class="check"></span></span> <span class="searchcheck-b">{{dlocation}}
										</span>
										</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</aside>
			</div>
		</div>
		<!-- col-3 -->

		<div
			class="col-md-9 col-sm-9 col-xs-12 searched-result mainContentHeight500px"
			id="two" data-ng-show="rightmenuloader">
			<!-- <div id="loading-bar-container" class="hidden-xs"> -->
			<div data-ng-show="loadpricebar" id="loading-bar">
				<div class="bar" style="width: 88.34%;">
					<div class="peg"></div>
				</div>
			</div>
			<div id="loading-bar-spinner">
				<div class="spinner-icon"></div>
			</div>
			<!-- </div> -->
			<div data-ng-show="loadpricebar">
				<div class="bar"></div>
				<span><b>Getting prices and availability...</b></span>
			</div>
			<div class="scrollBusTrails">
				<div class="row hotelredefine" data-ng-show="loadpricebar">
					<div class="col-md-12 col-sm-12 col-xs-12 clearfix">
						<div class="row">
							<div class="col-md-3 col-sm-3 col-xs-12 searched-date padLR0Px">
								<span class="col-md-12 col-sm-12 col-xs-3 padLR0Px">Source</span>
								<p class="col-md-12 col-sm-12 col-xs-9 searchCity padLR0Px">
									<span>{{origin}}</span>
								</p>
							</div>
							<div class="col-md-1 col-sm-1 col-xs-12 searched-city padLR0Px">
								<i class="tayyarah-long-arrow-right"></i>
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12 searched-date padLR0Px">
								<span class="col-md-12 col-sm-12 col-xs-3 padLR0Px">Destination</span>
								<p class="col-md-12 col-sm-12 col-xs-9 padLR0Px">
									<span>{{destination}}</span>
								</p>
							</div>

							<div class="col-md-3 col-sm-3 col-xs-12 searched-date padLR0Px">

								<span class="col-md-12 col-sm-12 col-xs-3 padLR0Px">Date</span>
								<p class="col-md-12 col-sm-12 col-xs-9 padLR0Px">
									<span>{{datein}}</span>
								</p>

							</div>
						</div>
					</div>





				</div>
				<div class="row hotelredefine" id="changerefine"
					data-ng-show="loaderSpin">
					<div class="col-md-8 col-sm-8 col-xs-12 clearfix">
						<div class="row">
							<div class="col-md-3 col-sm-3 col-xs-12 searched-city padLR0Px">
								<span class="col-md-12 col-sm-12 col-xs-3 padLR0Px">Source</span>
								<p class="col-md-12 col-sm-12 col-xs-9 searchCity padLR0Px">
									<span>{{origin}}</span>
								</p>
							</div>
							<div class="col-md-1 col-sm-1 col-xs-12 searched-city padLR0Px">
								<i class="tayyarah-long-arrow-right"></i>
							</div>
							<div class="col-md-3 col-sm-3 col-xs-12 searched-date padLR0Px">
								<span class="col-md-12 col-sm-12 col-xs-3 padLR0Px">Destination</span>
								<p class="col-md-12 col-sm-12 col-xs-9 padLR0Px">
									<span>{{destination}}</span>
								</p>
							</div>

							<div class="col-md-3 col-sm-3 col-xs-12 searched-date padLR0Px">

								<span class="col-md-12 col-sm-12 col-xs-3 padLR0Px">Date</span>
								<p class="col-md-12 col-sm-12 col-xs-9 padLR0Px">
									<span>{{datein}}</span>
								</p>

							</div>
						</div>
					</div>
					<div class="col-md-3 col-sm-3 col-xs-12">
						<div class="margin">
							<div class="button-group clean">
								<a class="btn btn-info btn-clean button-dropdown hidden-xs"
									id="changebutton"> <span class="hidden-xs"
									data-toggle="dropdown">Modify Search <i
										class="tayyarah-angle-double-right"></i></span>
								</a> <a
									class="btn btn-info but btn-clean offcanvas__trigger--open btn offclose mobrefine"
									data-rel="searchrefine" href="#"><span>Modify Search
										<i class="tayyarah-search"></i>
								</span> </a>
							</div>
						</div>
					</div>
				</div>


				<div class="clearfix offcanvas sfine" id="searchrefine">
					<div class="closebtn done">
						<button class="offcanvas__trigger--close btn"
							data-rel="searchrefine">
							<i class="tayyarah-left"></i> Back
						</button>
					</div>
					<!-- <form action="" method="get" id="modifiedsearch"> -->
					<form name="modify" data-ng-submit="modifysearch()">

						<s:if test="#session['agent'] != null">
							<input type="hidden" name="ay"
								value="<s:property value="%{#session.agent.Securityanswer}"/>"
								id="hky">
							<input type="hidden" name="ccy"
								value="<s:property value="%{#session.agent.currencyCode}"/>"
								id="hccy">
						</s:if>
						<s:else>
							<input type="hidden" id="hky" name="ay" value="{{appkey}}">
							<input type="hidden" name="ccy" id="hccy" value="INR">
						</s:else>
						<input type="hidden" name="request_locale" id="hotelrequestlocale"
							value="">
						<div class="row modifybus">
							<div class="col-md-9 col-sm-9 clearfix">
								<div class="col-md-4 col-sm-4 clearfix">
									<div class="form-group">
										<div class="input-group">
											<div style="padding-right: 78px;">
												<i class="tayyarah-directions_bus"></i><span
													style="font-weight: 700;">Source</span>
											</div>
											<input type="text" class="form-control o-c-s"
												data-ng-model="origin" placeholder="Select Location"
												id="fromstation" name="oristationname"
												onkeypress="return isAlphabetKeywithspace(event,this);"
												autocomplete="off"> <input type="hidden"
												name="citycode" id="fromstationcode" value="">

										</div>
										<div class="ttst" id="errori"></div>
									</div>
								</div>

								<div id="hdepe"></div>

								<div class="col-md-1 col-sm-1 searched-city padLR0Px">
									<i class="tayyarah-long-arrow-right"></i>
								</div>
								<div class="col-md-4 col-sm-4 clearfix">
									<div class="form-group">
										<div class="input-group">
											<div style="padding-right: 78px;">
												<i class="tayyarah-directions_bus"></i><span
													style="font-weight: 700;">Destination</span>
											</div>
											<input type="text" class="form-control o-c-s"
												data-ng-model="destination" placeholder="Select Location"
												id="tostation" name="oristationname"
												onkeypress="return isAlphabetKeywithspace(event,this);"
												autocomplete="off"> <input type="hidden"
												name="citycode" id="tostationcode" value="">

										</div>
										<div class="ttst" id="errori"></div>
									</div>
								</div>

								<div class="col-md-3 col-sm-3 clearfix">
									<div class="form-group">
										<div class="input-group">
											<i class="tayyarah-calendar"></i><span
												style="font-weight: 700;">Travelling Date</span> <input
												type="text" class="form-control o-c-s" name="dateend"
												id="depDate" data-ng-model="datein" placeholder="Check out"
												onkeydown="return false;">
										</div>
										<div class="ttst" id="errarr"></div>
									</div>
								</div>
							</div>

							<div class="col-md-2 col-sm-2 col-xs-12 ">
								<div class="margin  col-xs-8">
									<div class="btn-group clean">
										<input type="submit"
											class="btn btn-info btn-clean button-dropdown"
											data-ng-click="submitted == true" value="Search">
										<%-- 	</s:else> --%>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>

				<div class="sort-by-section clearfix box" data-ng-show="loaderSpin">
					<div class="col-sm-12 col-xs-12 clearfix">

						<ul class="col-md-12 col-sm-12 col-xs-12 sort-bar clearfix">
							<li class="col-md-2 col-sm-2 col-xs-12">
								<h5>
									Results <b>{{(availableBus | filter:filterprices |
										filter:busTypeFilter | filter:boardLocationFilter|
										filter:droppingLocationFilter| filter:BusnameFilter ).length}}</b>
									out of <b>{{availableBus.length}}</b>

								</h5>
							</li>


							<s:if
								test="#session['agent'] != null && #session.isLabeling != true">
								<li><a href="javascript:void(0);"
									class="sort-by-price clearfix"> <label id="mark">Add
											Markup </label>
										<form class="form-inline" id="markup"
											data-ng-submit="addmarkup()" style="display: none;">
											<input type="hidden" name="ay"
												value="<s:property value="%{#session.agent.Securityanswer}"/>"
												id="ay"> <input type="hidden" name="$&*D5K"
												id="isDynamic" value="true"> <input name="$M*A@"
												class="form-control" id="appliedmarkamt"
												value="{{markupammount}}" placeholder="Markup"
												autocomplete="off">
											<button class="btn btn-info but btn-clean" type="submit"
												data-ng-click="submitted==true">Add</button>
										</form>
								</a></li>
								<li data-ng-show="!isDynamicMark" style="display: none;"
									id="appliedmarkup"><a href="#"
									class="sort-by-price pull-right"> <label
										id="appliedmarkamt"> </label>
								</a></li>
								<li data-ng-show="isDynamicMark" id="appliedmarkup"><a
									class="sort-by-price pull-right"> <label
										id="appliedmarkamt">Markup Applied {{markupammount}} </label>
								</a></li>
							</s:if>
							<li class="sort-by-name s-price lastFilters">
								<h5>
									<b data-ng-click="sortorder(availableBus,'depart')"><i
										class="tayyarah-clock"></i> Departure <i
										data-ng-class="departasc"></i></b>
								</h5>
								<h5>
									<b data-ng-click="sortorder(availableBus,'Seats')"> Seats <i
										data-ng-class="Seatsc"></i></b>
								</h5>
								<h5>
									<b data-ng-click="sortorder(availableBus,'price')"> Price <i
										data-ng-class="priceasc"></i>
									</b>
								</h5>
							</li>


						</ul>


					</div>

				</div>


				<div class="flbus clearfix"
					data-ng-repeat="(busindex,buslists) in availableBus | filter:filterprices | filter:busTypeFilter | filter:boardLocationFilter| filter:droppingLocationFilter| filter:BusnameFilter ">
					<div class="row RemoveLRmargin">
						<div class="col-md-4 col-sm-4 hidden-xs">
							<label class="hot-hd margin-top20px blueText handCursor">{{buslists.operatorName}}
							</label>
							<div class="row">
								<div class="col-md-4 col-sm-4 col-xs-4 containerbusico">
									<a class="buslisticon"></a>
								</div>
								<div class="col-md-8 col-sm-8 col-xs-8">
									<div>{{buslists.busType}}(2+1)</div>
									<ul class="aminities">
										<li><i class="tayyarah-television" aria-hidden="true"></i></li>
										<li><i class="tayyarah-cutlery" aria-hidden="true"></i></li>
										<li><i class="tayyarah-plug" aria-hidden="true"></i></li>
										<li><i class="tayyarah-wifi" aria-hidden="true"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-xs-5 pad-r0 visible-xs">
							<label class="hot-hd margin-top10px blueText handCursor">{{buslists.operatorName}}
							</label>
							<div class="row">
								<div class="col-md-4 col-sm-4 col-xs-4 containerbusico">
									<i class="buslisticon"></i>
								</div>
								<div class="pad-r0  col-xs-8">
									<div class="f-9">{{buslists.busType}}(2+1)</div>
									<ul class="aminities">
										<li class="f-9"><i class="tayyarah-television"
											aria-hidden="true"></i></li>
										<li class="f-9"><i class="tayyarah-cutlery"
											aria-hidden="true"></i></li>
										<li class="f-9"><i class="tayyarah-plug"
											aria-hidden="true"></i></li>
										<li class="f-9"><i class="tayyarah-wifi"
											aria-hidden="true"></i></li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-3 col-sm-3 hidden-xs">
							<div class="margin-top20px">
								<i class="tayyarah-clock-o"></i> {{buslists.departureTime}} <span><i
									class="tayyarah-arrow-right" aria-hidden="true"></i></span><i
									class="tayyarah-clock-o"></i>{{buslists.arrivalTime}}
							</div>

						</div>
						<!-- <div class="col-md-2">
				<div class="margin-top20px">
				4/5
				</div>
				</div> -->
						<div class="col-md-3 col-sm-3 hidden-xs">
							<div class="margin-top20px">{{buslists.availableSeats}}
								Seats Available!</div>

						</div>

						<div class="col-xs-4 pad-l0 pad-r0 visible-xs">
							<div class="row margin-top20px f-10">
								<i class="tayyarah-clock-o"></i> {{buslists.departureTime}} <span><i
									class="tayyarah-arrow-right" aria-hidden="true"></i></span><i
									class="tayyarah-clock-o"></i>{{buslists.arrivalTime}}
							</div>
							<div class="row margin-top20px f-9">
								{{buslists.availableSeats}} Seats Available!</div>
						</div>

						<div class="col-md-2 col-sm-2 hidden-xs">
							<div class="margin-top20px">
								<div>
									<i data-ng-class="classname" class="tayyarah-INR"></i>{{buslists.fare.bookingPrice}}
								</div>

								<button class="btn btn-info bookBtn"
									data-ng-click="Showseats(buslists,busindex)">
									View Seats <span data-ng-show="loaderSpin{{busindex}}"
										class="loaderSpan"><img id="removeImg"
										src="images/loginLoader.gif" width="20px" /></span>
								</button>
							</div>
						</div>
						<div class="col-xs-3 pad-l0 visible-xs">
							<div class="margin-top20px">
								<div class="f-10">
									<i data-ng-class="classname" class="tayyarah-INR"></i>{{buslists.fare.bookingPrice}}
								</div>

								<button class="btn btn-info bookBtn"
									data-ng-click="Showseats(buslists,busindex)">
									View Seats <span data-ng-show="loaderSpin" class="loaderSpan"><img
										id="removeImg" src="images/loginLoader.gif" width="20px" /></span>
								</button>
							</div>
						</div>
					</div>
					<div class="row pullingDown">
						<div class="col-md-4 col-sm-4 col-xs-4 textRed handCursor">
							<p data-ng-click="ShowAmenities(buslists,busindex)">
								<span class="showBorder{{busindex}}">Amenities</span>
							</p>
						</div>
						<div class="col-md-4 col-sm-4 col-xs-4 textRed handCursor"
							data-ng-click="ShowBoarding(buslists,busindex)">
							<span class="showBoarding{{busindex}}">Boarding & Dropping
								Points</span>
						</div>
						<%-- <div class="col-md-2 textRed handCursor" data-ng-click="ShowReviews(buslists,busindex)"><span class="showReviews{{busindex}}">Reviews</span></div>
				<div class="col-md-2 textRed handCursor" data-ng-click="ShowAvalability(buslists,busindex)"><span class="showAvalability{{busindex}}">Avalability</span></div> --%>
						<div class="col-md-4 col-sm-4 col-xs-4 textRed handCursor"
							data-ng-click="ShowCancelationPolicy(buslists,busindex)">
							<span class="showPolicy{{busindex}}">Cancelation Policy</span>
						</div>
					</div>
					<div id="Amenities{{busindex}}"
						class="collapse backgroundGrey packOpen">
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<i class="tayyarah-television" aria-hidden="true"></i>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<i class="tayyarah-cutlery" aria-hidden="true"></i>
							</div>
						</div>
						<div class="row">
							<div class="col-md-6 col-sm-6 col-xs-6">
								<i class="tayyarah-plug" aria-hidden="true"></i>
							</div>
							<div class="col-md-6 col-sm-6 col-xs-6">
								<i class="tayyarah-wifi" aria-hidden="true"></i>
							</div>
						</div>

					</div>
					<div id="Boarding{{busindex}}"
						class="collapse backgroundGrey packOpen ">
						<div class="row">
							<div class="col-md-6 col-sm-6 hidden-xs">
								<p class="padLeft20per font600 margin-top-20px">Boarding
									Points</p>
								<ul class="listNone margin-top-20px">
									<li data-ng-repeat="boarding in boardingPoints"><a
										class="col-md-9">{{boarding.location}} </a><a class="col-md-3"><i
											class="tayyarah-clock-o"></i>{{boarding.Time}} </a></li>
								</ul>
							</div>
							<div class="col-md-6 col-sm-6 hidden-xs">
								<p class=" padLeft20per font600 margin-top-20px">Dropping
									Points</p>
								<ul class="listNone row padLeft20per margin-top-20px">
									<li data-ng-repeat="droping in droppingPoints"><a
										class="col-md-9 ">{{droping.location}} </a><a class="col-md-3"><i
											class="tayyarah-clock-o"></i>{{droping.Time}} </a></li>
								</ul>
							</div>
							<div class="col-xs-6 visible-xs">
								<p class="padLeft20per font600 f-10 margin-top-10px">Boarding
									Points</p>
								<ul class="listNone margin-top-10px">
									<li data-ng-repeat="boarding in boardingPoints"><a
										class="pad-r0 pad-l0 f-9 col-md-9 col-xs-9">{{boarding.location}}
									</a><a class="f-9 col-md-3 col-xs-3"><i
											class="tayyarah-clock-o"></i>{{boarding.Time}} </a></li>
								</ul>
							</div>
							<div class="col-xs-6 visible-xs">
								<p class=" padLeft20per font600 f-10 margin-top-10px">Dropping
									Points</p>
								<ul class="listNone row margin-top-10px">
									<li data-ng-repeat="droping in droppingPoints"><a
										class="pad-r0 pad-l0 f-9 col-md-9 col-xs-9">{{droping.location}}
									</a><a class="f-9 col-md-3 col-xs-3"><i
											class="tayyarah-clock-o"></i>{{droping.Time}} </a></li>
								</ul>
							</div>
						</div>
					</div>
					<div id="CancelationPolicy{{busindex}}"
						class="collapse backgroundGrey packOpen">
						<div class="row">
							<div class="col-md-12 col-sm-12 hidden-xs ">
								<p class="font600 margin-top-20px">CancelationPolicy</p>
								<ul class="listNone padLeft20per margin-top-20px">
									<li><a class="col-md-6 col-sm-6 col-xs-6">CutOff
											Time(Hours) <i class="tayyarah-clock-o"></i>
									</a> <a class="col-md-6 col-sm-6 col-xs-6">Percentage </a></li>
								</ul>
							</div>
							<div class="col-md-12 col-sm-12 hidden-xs ">
								<ul class="listNone padLeft20per">
									<li data-ng-repeat="cancelation in cancellations"><a
										class="col-md-6 col-sm-6 col-xs-6 padLeft10per">{{cancelation.cutoffTime}}
									</a> <a class="col-md-6 col-sm-6 col-xs-6 padLeft5per">
											{{cancelation.refundInPercentage}}% </a></li>
								</ul>
							</div>
							<div class="visible-xs col-xs-12">
								<p class="f-10 font600 margin-top-10px">CancelationPolicy</p>
								<ul class="listNone margin-top-10px">
									<li data-ng-repeat="cancelation in cancellations"><a
										class="f-9 col-md-6  col-sm-6 col-xs-6">{{cancelation.cutoffTime}}
									</a> <a class="f-9 col-md-6 col-sm-6 col-xs-6">{{cancelation.refundInPercentage}}%
									</a></li>
								</ul>
							</div>
							<div class="col-md-4 col-sm-4 col-xs-4"></div>
							<div class="col-md-4 col-sm-4 col-xs-4"></div>
						</div>
					</div>
					<div id="seats{{busindex}}" class="collapse seatOpen">

						<%-- <div data-ng-hide="!loaderSpin" class="col-md-12 col-sm-12 col-xs-12 backgroundGrey minHeight100px"><span class="loaderSpan"><img  src="images/loginLoader.gif" width="40px" /></span></div> --%>
						<div data-ng-show="seatloader">

							<div
								class="col-md-12 col-sm-12 col-xs-12 backgroundGrey minHeight100px">
								<button class="btn btn-info colbtn"
									data-ng-click="Showseats(buslists,busindex)">X</button>
								<div class="col-md-12 col-sm-12 col-xs-12 rowdetailseat">
									<div class="col-md-2 col-sm-2 col-xs-2 detailseat">
										<div class="col-md-3 col-sm-3 col-xs-3 avilableseat"></div>
										<div class="col-md-9 col-sm-9 col-xs-9">Available</div>
									</div>
									<div class="col-md-3 col-sm-3 col-xs-3 detailseat">
										<div class="col-md-3 col-sm-3 col-xs-3 avilableseatlady"></div>
										<div class="col-md-9 col-sm-9 col-xs-9">Available Ladies
											Seat</div>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2 detailseat">
										<div class="col-md-3 col-sm-3 col-xs-3 SeatSelected"></div>
										<div class="col-md-9 col-sm-9 col-xs-9">Selected</div>
									</div>
									<div class="col-md-3 col-sm-3 col-xs-3 detailseat">
										<div class="col-md-3 col-sm-3 col-xs-3 SeatSelectedladies"></div>
										<div class="col-md-9 col-sm-9 col-xs-9">Selected Ladies
											Seat</div>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2 detailseat">
										<div
											class="col-md-3 col-sm-3 col-xs-3 selectedlady bookedseat Booked"></div>
										<div class="col-md-9 col-sm-9 col-xs-9">Booked</div>
									</div>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12 rowdetailseat">
									<div class="col-md-2 col-sm-2 col-xs-2 pad-r0  detailseat">
										<div class="col-md-12 col-sm-12 col-xs-12 pad-r0">
											<div class="col-md-3 col-sm-3 col-xs-3 avilablebed"></div>
											<div class="col-md-7 col-sm-8 col-xs-9 pad-r0">Available</div>
										</div>
									</div>
									<div class="col-md-3 col-sm-3 col-xs-3 pad-r0  detailseat">
										<div class="col-md-12 col-sm-12 col-xs-12 pad-r0">
											<div class="col-md-3 col-sm-3 col-xs-3 avilableladiesbed"></div>
											<div class="col-md-8 col-sm-8 col-xs-9 pad-r0">Available
												Ladies Seat</div>
										</div>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2 pad-r0  detailseat">
										<div class="col-md-12 col-sm-12 col-xs-12 pad-r0">
											<div class="col-md-3 col-sm-3 col-xs-3 selectedbed"></div>
											<div class="col-md-7 col-sm-8 col-xs-9 pad-r0">Selected</div>
										</div>
									</div>
									<div class="col-md-2 col-sm-2 col-xs-2 pad-r0  detailseat">
										<div class="col-md-12 col-sm-12 col-xs-12 pad-r0">
											<div class="col-md-3 col-sm-3 col-xs-3 bookedbed"></div>
											<div class="col-md-7 col-sm-8 col-xs-9 pad-r0">Booked</div>
										</div>
									</div>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12 busSeatTable">
									<div id="buscontainer" class="lowernormal"
										ng-if="!lowerberth && !lowerberthwithseat">

										<table class="upperPortion lowerpart">
											<thead></thead>
											<tbody>
												<tr>
													<td width="10%"><img src="images/drive.png"
														width="30px" height="20px" /></td>
													<td rowspan="10"><p
															class="vericaltext marginLeft15px"></p></td>
													<td data-ng-repeat="(index,seatlist) in seatsline1">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>

												<tr>
													<td width="10%"><p ng-if="upper" class="letterP4"
															style="margin-bottom: -29px;">Lower</p></td>
													<td data-ng-repeat="(index,seatlist) in seatsline2">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
												</tr>
												<tr height="25">
													<td width="13%"></td>
													<td ng-hide="$last"
														data-ng-repeat="(index,seatlist) in seatsline1"></td>
													<!-- <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td> -->
													<td data-ng-repeat="(index,seatlist) in seatsline3">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
												</tr>
												<tr>
													<td width="10%"></td>
													<td data-ng-repeat="(index,seatlist) in seatsline4"
														colspan="1">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
												</tr>
												<tr>
													<td width="10%"></td>
													<td data-ng-repeat="(index,seatlist) in seatsline5"
														colspan="1">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
												</tr>
											</tbody>
										</table>
									</div>

									<div ng-if="lowerberth" id="buscontainer" class="lowernormal">

										<table class="upperPortion lowerpart">
											<thead></thead>
											<tbody>
												<tr>
													<td width="10%"><img src="images/drive.png"
														width="30px" height="20px" /></td>
													<td rowspan="10"><p
															class="vericaltext marginLeft15px"></p></td>
													<td data-ng-repeat="(index,seatlist) in seatsline1">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
												<tr>
													<td width="13%"><p ng-if="upper"
															style="margin-bottom: -29px;" class="letterP4">Lower</p></td>
													<td data-ng-repeat="(index,seatlist) in seatsline2"
														colspan="1"><button
															class="SleeperseatRow avilablebed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button></td>
												</tr>
												<tr height="25"></tr>
												<tr>
													<td width="13%"></td>
													<td data-ng-repeat="(index,seatlist) in seatsline4"
														colspan="1"><button
															class="SleeperseatRow avilablebed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button></td>
												</tr>
											</tbody>
										</table>
									</div>

									<div id="buscontainer" ng-if=lowerberthwithseat
										class="lowernormal">
										<table class="upperPortion lowerpartwithseat">
											<thead></thead>
											<tbody>
												<tr height="40">
													<td width="10%"><img src="images/drive.png"
														width="30px" height="20px" /></td>
													<td rowspan="10"><p ng-if="upper"
															class="vericaltext marginLeft15px"></p></td>
													<td data-ng-repeat="(index,seatlist) in seatsline1">
														<button
															ng-if="seatlist.length == 1 && seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 && seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
												<tr height="40">
													<td width="13%"><p ng-if="upper"
															style="margin-bottom: 7px;" class="letterP4">Lower</p></td>
													<td data-ng-repeat="(index,seatlist) in seatsline2">
														<button
															ng-if="seatlist.length == 1 && seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">
															{{seatlist.id}}</span>
														</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 && seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
												<tr></tr>
												<tr>
													<td width="13%"></td>
													<td ng-hide="$last"
														data-ng-repeat="(index,seatlist) in seatsline1"
														colspan="1"></td>
													<td data-ng-repeat="(index,seatlist) in seatsline3"
														colspan="1">

														<button
															ng-if="seatlist.length == 1 &&seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 && seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
												<tr>
													<td width="13%"></td>
													<td data-ng-repeat="(index,seatlist) in seatsline4"
														colspan="1">
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==true && seatlist.ladiesSeat ==false"
															class="seatIndication avilableseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==true && seatlist.ladiesSeat ==true"
															class="seatIndication ladiesseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==false && seatlist.ladiesSeat ==false"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 1 &&seatlist.available==false && seatlist.ladiesSeat ==true"
															class="seatIndication bookedseat"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 && seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.length == 2 &&seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilablebed"
															id="lowerseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div id="buscontainer" ng-if="upper" class="SleeperSeats">
										<table class="upperPortion" style="margin-top: 16px;">
											<thead></thead>
											<tbody>
												<tr>
													<td width="13%"></td>
													<td rowspan="10"><p class="vericaltext"></p></td>
													<td data-ng-repeat="(index,seatlist) in useatsline1"
														colspan="1">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilableladiesbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow bookedbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow bookedbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
												<tr>
													<td width="13%"><p class="letterP4"
															style="margin-bottom: -24px;">Upper</p></td>
													<td data-ng-repeat="(index,seatlist) in useatsline2"
														colspan="1">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilableladiesbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow bookedbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow bookedbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
												<tr height="25">
													<td width="13%"></td>
													<td data-ng-repeat="(index,seatlist) in useatsline3"
														colspan="1">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilableladiesbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow bookedbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow bookedbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
												<tr>
													<td width="13%"></td>
													<td data-ng-repeat="(index,seatlist) in useatsline4"
														colspan="1">
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==false"
															class="SleeperseatRow avilablebed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==true && seatlist.ladiesSeat ==true"
															class="SleeperseatRow avilableladiesbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==true"
															class="SleeperseatRow bookedbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
														<button
															ng-if="seatlist.available==false && seatlist.ladiesSeat ==false"
															class="SleeperseatRow bookedbed"
															id="upperseat{{busindex}}{{seatlist.seatindex}}"
															data-ng-click="lowerSeatSelect(seatlist.seatindex,seatlist)">{{seatlist.id}}</button>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
							<form name="busBlock">


								<div
									class="col-md-12 col-sm-12 col-xs-12 busPanel panel panel-default margin-LR-0px whiteBackground">
									<div
										class="panel panel-default traveler-details  col-md-12 col-sm-12 col-xs-12">
										<!-- //<input class="col-md-4 col-sm-4 col-xs-4 padding0px"type="email" placeholder="email"/> -->
										<s:if test="#session['agent'] != null">
											<input type="hidden" id="isLogged" value="true">
											<input type="hidden" name="ay" id="ay"
												value="<s:property value="%{#session.agent.Securityanswer}"/>">
											<input type="hidden" name="ud" id="userid"
												value="<s:property value="%{#session.agent.id}"/>">
											<input type="hidden" name="uname" id="uname"
												value="<s:property value="%{#session.agent.Username}"/>">
											<input type="hidden" name="pmode" id="isagent" value="cash">

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

										<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12">
											<div class="form-group clearfix ">
												<input type="tel" class="form-control" name="mobile"
													id="mobile{{busindex}}" pattern="[0-9]{10}"
													placeholder="Mobile" maxlength="10" required
													onkeypress="return isNumberKey(event,this)"
													autocomplete="off" data-ng-model="mobile"
													data-ng-required="true">
											</div>
										</div>
										<s:if test="#session['agent'] != null">
											<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12">
												<div class="form-group clearfix ">
													<input type="email" class="form-control" name="email"
														id="email{{busindex}}" placeholder="Email"
														autocomplete="off" required
														value="<s:property value="#session.agent.Email" />">
												</div>
											</div>
										</s:if>
										<s:else>
											<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12">
												<div class="form-group clearfix ">
													<input type="email" class="form-control" name="email"
														id="email{{busindex}}" placeholder="Email"
														autocomplete="off" required
														value="<s:property value="#session.agent.Email" />"
														data-ng-model="nEmail" data-ng-required="true">
												</div>
											</div>
										</s:else>

										<s:if
											test="#session.isCorporate == true || #session['agent'] != null">

											<div class="padding15px">
												<div class="row">


													<s:if test="#session.isCorporate == true">
														<div ng-if="CompanyEn.length != 0"
															class="biiling-bd2 col-md-6 col-sm-6 col-xs-12">
															<div class="form-group clearfix bii-bd">
																<select id="CompanyEntity{{routeserviceid}}{{busindex}}"
																	class=" form-control " name="">
																	<option ng-if="CompanyEn.length != 0"
																		ng-repeat="company in CompanyEn" value="{{company}}">
																		{{company.companyEntityName}}</option>
																</select>
															</div>
														</div>
														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="empCode">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control"
																	ng-model="EmployeeCode" name="EmployeeCode"
																	id="EmployeeCode{{busindex}}"
																	placeholder="Employee Code" required autocomplete="off"
																	data-ng-required="true">
															</div>
														</div>
														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="department">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control"
																	ng-model="Department" name="Department"
																	id="Department{{busindex}}" placeholder="Department"
																	autocomplete="off" required data-ng-required="true">
															</div>
														</div>

														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="costCenter">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control"
																	ng-model="CostCenter" name="CostCenter"
																	id="CostCenter{{busindex}}" placeholder="Cost Center"
																	autocomplete="off" required data-ng-required="true">
															</div>
														</div>
														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="approverName">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control"
																	ng-model="Approver" name="Approver"
																	id="Approver{{busindex}}" placeholder="Approver Name"
																	autocomplete="off" required data-ng-required="true">
															</div>
														</div>

														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="location">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control"
																	ng-model="Location" name="Location"
																	id="Location{{busindex}}" placeholder="Location"
																	autocomplete="off" required data-ng-required="true">
															</div>
														</div>
														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="trNumber">
															<div class="form-group clearfix bii-bd">
																<input type="text" ng-model="TrNumber"
																	class="form-control" name="trNumber"
																	id="trNumber{{busindex}}" placeholder="TR Number"
																	autocomplete="off" required data-ng-required="true">
															</div>
														</div>

														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="bussinessUnit">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control"
																	ng-model="BusinessUnit" name="businessUnit"
																	id="businessUnit{{busindex}}"
																	placeholder="Business unit" required autocomplete="off"
																	data-ng-required="true">
															</div>
														</div>
														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="projectCode">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control"
																	ng-model="ProjectCode" name="projectCode"
																	id="projectCode{{busindex}}" placeholder="Project Code"
																	required autocomplete="off" data-ng-required="true">
															</div>
														</div>

														<div class="biiling-bd2  col-md-6 col-sm-6 col-xs-12"
															data-ng-if="reasonForTravel">
															<div class="form-group clearfix bii-bd">
																<input type="text" ng-model="reason"
																	class="form-control" name="reason"
																	id="reason{{busindex}}" placeholder="Reason for travel"
																	required autocomplete="off" data-ng-required="true">
															</div>
														</div>
														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12"
															data-ng-if="billNonBill">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control"
																	ng-model="billingCode" name="billingCode"
																	id="billingCode{{busindex}}" required
																	placeholder="Billable/ non billable" autocomplete="off"
																	data-ng-required="true">
															</div>
														</div>
													</s:if>
													<s:if
														test="#session.isCorporate != true &&#session['agent'] != null">
														<div ng-if="isRmDetails">
															<input data-ng-if="empCode" type="hidden" value="NA"
																id="EmployeeCod{{routeserviceid}}{{busindex}}">
															<input data-ng-if="department" type="hidden" value="NA"
																id="Department{{routeserviceid}}{{busindex}}"> <input
																data-ng-if="costCenter" type="hidden" value="NA"
																id="CostCenter{{routeserviceid}}{{busindex}}"> <input
																data-ng-if="approverName" type="hidden" value="NA"
																id="Approver{{routeserviceid}}{{busindex}}"> <input
																data-ng-if="location" type="hidden" value="NA"
																id="Location{{routeserviceid}}{{busindex}}"> <input
																data-ng-if="trNumber" type="hidden" value="NA"
																id="trNumber{{routeserviceid}}{{busindex}}"> <input
																data-ng-if="bussinessUnit" type="hidden" value="NA"
																id="businessUnit{{routeserviceid}}{{busindex}}">
															<input data-ng-if="projectCode" type="hidden" value="NA"
																id="projectCode{{routeserviceid}}{{busindex}}">
															<input data-ng-if="reasonForTravel" type="hidden"
																value="NA" id="reason{{routeserviceid}}{{busindex}}">
															<input data-ng-if="billNonBill" type="hidden" value="NA"
																id="billingCode{{routeserviceid}}{{busindex}}">
														</div>
													</s:if>
													<div data-ng-repeat="(index,manual) in ManulaFieldList">

														<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-12">
															<div class="form-group clearfix bii-bd">
																<input type="text" class="form-control NameFontMAnl"
																	name="billingCode" id="manual{{index}}{{busindex}}"
																	placeholder="{{manual}}" autocomplete="off">
															</div>
														</div>

													</div>
												</div>
											</div>
										</s:if>
									</div>

									<div class="col-md-12 col-sm-12 col-xs-12">
										<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-6">
											<label>Boarding Points</label> <select id="boardingPoints"
												class=" form-control " name="" onchange="Boarding();">
												<option ng-if="seatdata.boardingPoints.length == 0">{{origin}}</option>
												<option ng-if="seatdata.boardingPoints.length != 0"
													ng-repeat="operator in seatdata.boardingPoints"
													value="{{operator}}">{{operator.loc}}</option>
											</select>
										</div>
										<div class="biiling-bd2 col-md-6 col-sm-6 col-xs-6">
											<label>Dropping Point</label> <select class="form-control "
												name="" onchange="Dropping();">
												<option ng-if="seatdata.droppingPoints.length == 0">{{destination}}</option>
												<option ng-if="seatdata.droppingPoints.legnth != 0 "
													ng-repeat="operator in seatdata.droppingPoints"
													value="{{operator.loc}}">{{operator.loc}}</option>
											</select>
										</div>
									</div>

									<div ng-show='selection' class="col-md-12 col-sm-12 col-xs-12 ">

										<div class="col-md-12 backgroundGrey ">
											<div class="col-md-1 paddingLR0px">Gender</div>
											<div class="col-md-2 paddingLR0px">Name</div>
											<div class="col-md-2 paddingLR0px">SurNAme</div>
											<div class="col-md-1 paddingLR0px">Age</div>
											<div class="col-md-1 paddingLR0px">Seat No</div>
											<div class="col-md-1 paddingLR0px">Base Fare</div>
											<div data-ng-show="!GSTservices"
												class="col-md-3 paddingLR0px">Service Tax</div>
											<div data-ng-show="GSTservices" class="col-md-2 paddingLR0px">Management
												Fee</div>
											<div data-ng-show="GSTservices" class="col-md-2 paddingLR0px">GST
											</div>
										</div>
										<div id="passengerDetails{{busindex}}"></div>
										<div id="prices{{busindex}}"></div>
										<button class="btn btn-info bookBtn"
											data-ng-click="busBlock.$valid && blockseat(busindex)">Block
											Seats</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<s:if test="#session.isCorporate == true">
	<div data-ng-include="Corporatefooter"
		data-ng-controller="CorporateFooterCtrl"></div>
</s:if>
<s:else>
	<div data-ng-include="footer" data-ng-controller="FootCtrl"></div>
</s:else>
<script type="text/javascript">

$('#mark').click(function() {
	if ($("#markup").is(':visible') == false)
		$("#markup").show("slow");
	else
		$("#markup").hide();
}); 

function resizeImg() {
    var thisImg= $('.containerbusico');
    var refH = thisImg.height();
    var refW = thisImg.width();
    var refRatio = refW/refH;
    
    var imgH = thisImg.children("img").height();
    var imgW = thisImg.children("img").width();
    
    if ( (imgW/imgH) > refRatio ) { 
        thisImg.addClass("portrait");
        thisImg.removeClass("landscape");
    } else {
        thisImg.addClass("landscape");
        thisImg.removeClass("portrait");
    }
}

$(document).ready(resizeImg())

$(window).resize(function(){
    resizeImg();
});

</script>
