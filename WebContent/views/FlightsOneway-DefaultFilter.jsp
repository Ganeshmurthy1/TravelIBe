<style type="text/css">
.sortorder:after {
	content: '\25b2';
}

.sortorder.reverse:after {
	content: '\25bc';
}

.custom-er {
	width: 100%;
}

.custom-error {
	width: 50%;
	margin: 6% auto;
	background-color: #f1f1f1;
	border: 1px solid #ccc;
}

.custom-error .error-mess {
	padding: 30px 10px;
	color: #555;
}

.custom-er button {
	padding: 5px;
	font-size: 14px;
	margin-top: 30px;
}

.changeback {
	background-color: #f1f1f1;
	color: #45A16E;
}

.maincontainhide {
	display: none;
}

.maincontainshow {
	display: block;
}
</style>
<%@taglib prefix="s" uri="/struts-tags"%>
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

<div class="col-md-3 col-sm-3 col-xs-12 offcanvas " id="one"
	data-ng-show="leftmenuloader">
	<div id="fixingPosition" class="fixedPosition">
		<div class="closebtn done">
			<span class="mobileFont padLR0POneway pull-left"> Results <b>{{(fareFlightSegment
					| filter:filterprice | filter:StopsFilter| filter:AirlineFilter |
					filter:MatrixAirlineFilter | filter:FareTypeFilter).length}}</b> out of
				<b>{{fareFlightSegment.length}}</b>



			</span>
			<button class="offcanvas__trigger--close btn" data-rel="one">Done</button>
		</div>


		<aside class="clearfix">
			<div class="panel-group price-box" id="accordion" role="tablist"
				aria-multiselectable="true">
				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingOne">
						<h4 class="panel-title">
							<a role="button" data-toggle="collapse" 
								data-target="#collapseOne" aria-expanded="true"
								class="accordion" aria-controls="collapseOne"> Stops <span><i
									class="tayy tayyarah-keyboard_arrow_right"></i></span>
							</a>
						</h4>
					</div>
					<div id="collapseOne" class="panel-collapse collapse in"
						role="tabpanel" aria-labelledby="headingOne">
						<div class="panel-body">

							<form class="form-horizontal ">
								<div class="checkbox" data-ng-repeat="stops in stopslist">
									<label> <input type="checkbox" value="{{stops}}"
										name="stops" data-ng-click="checkstopsfilter(stops)"
										data-ng-model="todo1"> <span class="checkbox-material"><span
											class="check"></span></span> <span class="searchcheck-b">{{stops}}
									</span>
									</label>
								</div>

							</form>

						</div>
					</div>
				</div>


				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingTwo">
						<h4 class="panel-title">
							<a role="button" data-toggle="collapse" 
								data-target="#collapsetwo" aria-expanded="true"
								class="accordion" aria-controls="collapseSix"> Fare Type <span><i
									class="tayy tayyarah-keyboard_arrow_right"></i></span>
							</a>
						</h4>
					</div>
					<div id="collapsetwo" class="panel-collapse collapse in"
						role="tabpanel" aria-labelledby="headingTwo">
						<div class="panel-body">

							<form class="form-horizontal ">



								<div class="checkbox ">
									<label> <input type="checkbox" value="refundable"
										name="stops" data-ng-click="checkfaretypefilter('REFUNDABLE')"
										data-ng-model="todonon"> <span
										class="checkbox-material"><span class="check"></span></span> <span
										class="searchcheck-b"> Refundable </span>
									</label>
								</div>
								<div class="checkbox ">
									<label> <input type="checkbox" value="nonrefundable"
										name="stops"
										data-ng-click="checkfaretypefilter('NON REFUNDABLE')"
										data-ng-model="todore"> <span
										class="checkbox-material"><span class="check"></span></span> <span
										class="searchcheck-b">Non Refundable</span>
									</label>
								</div>
							</form>

						</div>
					</div>
				</div>

				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingThree">
						<h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse"
								 data-target="#collapseThree"
								aria-expanded="false" aria-controls="collapseThree">
								Airlines <span><i
									class="tayy tayyarah-keyboard_arrow_right"></i></span>
							</a>
						</h4>
					</div>
					<div id="collapseThree" class="panel-collapse collapse in"
						role="tabpanel" aria-labelledby="headingThree">
						<div class="panel-body">


							<form class="form-horizontal ">

								<div class="checkbox" data-ng-repeat="airlines in airlinelist">
									<label> <input type="checkbox" value="{{airlines}}"
										class="airlinefilter" id="name{{airlines.code}}"
										name="airlines" data-ng-click="airlinefilter(airlines.name)">
										<span class="checkbox-material"><span class="check"></span></span>
										<span class="searchcheck-b">{{airlines.name}} </span>
									</label>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingFour">
						<h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse"
								data-target="#collapseFour"
								aria-expanded="false" aria-controls="collapseTwo"> Price
								Range <span><i class="tayy tayyarah-keyboard_arrow_right"></i></span>
							</a>
						</h4>
					</div>
					<div id="collapseFour" class="panel-collapse collapse in"
						role="tabpanel" aria-labelledby="headingFour">
						<div class="panel-body">

							<span><b class="text-left"><i
									data-ng-class="classname"></i>{{getconvertedcurrency(priceSlider.min)}}</b></span><span
								class="pull-right"><b><i data-ng-class="classname"></i>{{getconvertedcurrency(priceSlider.max)}}</b></span>

							<rzslider rz-slider-floor="priceSlider.floor"
								rz-slider-ceil="priceSlider.ceil"
								rz-slider-model="priceSlider.min"
								rz-slider-high="priceSlider.max"
								rz-slider-step="{{priceSlider.step}}"></rzslider>


						</div>
					</div>
				</div>


				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingFive">
						<h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse"
								data-target="#collapseFive"
								aria-expanded="false" aria-controls="collapseFive">
								Departure Time <span><i
									class="tayy tayyarah-keyboard_arrow_right"></i></span>
							</a>
						</h4>
					</div>
					<div id="collapseFive" class="panel-collapse collapse in"
						role="tabpanel" aria-labelledby="headingFive">
						<div class="panel-body">
							<form class="form-horizontal " role="form">
								<div class='priceslider'>
									<p align="center">{{origincity}}</p>

									<span><b class="text-left" id="departMin"></b></span> <span><b
										class="pull-right" id="departMax"></b></span>

									<rzslider rz-slider-floor="DepartSlider.floor"
										rz-slider-ceil="DepartSlider.ceil"
										rz-slider-model="DepartSlider.min"
										rz-slider-high="DepartSlider.max"
										rz-slider-step="{{DepartSlider.step}}"></rzslider>
								</div>
							</form>


						</div>
					</div>


				</div>

				<div class="panel panel-default">
					<div class="panel-heading" role="tab" id="headingSix">
						<h4 class="panel-title">
							<a class="collapsed" role="button" data-toggle="collapse"
								data-target="#collapseSix"
								aria-expanded="false" aria-controls="collapseThree"> Arrival
								Time <span><i class="tayy tayyarah-keyboard_arrow_right"></i></span>
							</a>
						</h4>
					</div>
					<div id="collapseSix" class="panel-collapse collapse in"
						role="tabpanel" aria-labelledby="headingSix">
						<div class="panel-body">

							<form class="form-horizontal " role="form">
								<div class='priceslider'>
									<p align="center">{{destinationcity}}</p>

									<span><b class="text-left" id="arriMin"></b></span> <span><b
										class="pull-right" id="arriMax"></b></span>

									<rzslider rz-slider-floor="ArrivalSlider.floor"
										rz-slider-ceil="ArrivalSlider.ceil"
										rz-slider-model="ArrivalSlider.min"
										rz-slider-high="ArrivalSlider.max"
										rz-slider-step="{{ArrivalSlider.step}}"></rzslider>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</aside>
	</div>
</div>
