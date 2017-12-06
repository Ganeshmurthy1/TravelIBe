<%@taglib prefix="s" uri="/struts-tags"%>
<input type="hidden" name="ay"
	value="<s:property value="%{#session.agent.Securityanswer}"/>"
	id="apky">
<div class="SessionTemplateHotel">
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
	<div class=" minHotelheight500px" data-ng-style="{'display' : display}"
		data-ng-cloak>
		<div class="row hotel">
			<div id="fixingPosition" class=" fixedPosition">
				<div class="col-md-3 col-sm-3 offcanvas" id="one">

					<div class="closebtn done">
						<span class="pull-left hotelNumbers">
							<h4 class="sort-by-title block-sm">
								Found <span>{{(Roomstaylist | filter:filterprices |
									filter:LocationFilter | filter:AmenitiesFilter |
									filter:RatingFilter | filter:HotelnameFilter).length}}</span> Hotel(s)
							</h4>
						</span>
						<button class="offcanvas__trigger--close btn" data-rel="one">Done</button>
					</div>
					<aside class="clearfix">
						<div class="panel-group price-box" id="accordion" role="tablist"
							aria-multiselectable="true">
							<div class="panel panel-default">
								<div class="panel-heading" role="tab" id="headingname">
									<h4 class="panel-title">
										<a role="button" data-toggle="collapse"
											data-target="#collapsename" aria-expanded="true"
											class="accordion" aria-controls="collapsename"> Find by
											Hotel Name <span><i
												class="tayy tayyarah-keyboard_arrow_right"></i></span>
										</a>
									</h4>
								</div>
								<div id="collapsename" class="panel-collapse collapse in"
									role="tabpanel" aria-labelledby="headingname">
									<div class="panel-body">
										<div class="input-group col-xs-12">
											<input type="text" id="HotelName" class="form-control"
												autocomplete="off" placeholder="Enter Hotel Name"
												data-ng-model="hotelname" data-auto-complete-directives
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
											data-target="#collapseOne" aria-expanded="true"
											class="accordion" aria-controls="collapseOne"> Price Per
											Night <span><i
												class="tayy tayyarah-keyboard_arrow_right"></i></span>
										</a>
									</h4>
								</div>
								<div id="collapseOne" class="panel-collapse collapse in"
									role="tabpanel" aria-labelledby="headingOne">
									<div class="panel-body xs-hotel-slider">


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

							<div class="panel panel-default">
								<div class="panel-heading" role="tab" id="headingTwo">
									<h4 class="panel-title">
										<a class="collapsed" role="button" data-toggle="collapse"
											data-target="#collapseTwo" aria-expanded="false"
											aria-controls="collapseTwo"> Ratings <span><i
												class="tayy tayyarah-keyboard_arrow_right"></i></span>
										</a>
									</h4>
								</div>
								<div id="collapseTwo" class="panel-collapse collapse in"
									role="tabpanel" aria-labelledby="headingTwo">
									<div class="panel-body">
										<div class="checkbox">
											<label> <input type="checkbox" class="starFilter1"
												value="false" name="rating" data-ng-change="getrating(1)"
												data-ng-model="todostar1"> <span
												class="checkbox-material"><span class="check">
												</span> </span><span class="searchcheck-b"> <i
													class="tayyarah-star"></i>
											</span>
											</label> <b class="HotelStarz">{{hotelstars.one.length}}hotel(s)</b>
										</div>
										<div class="checkbox">
											<label> <input type="checkbox" class="starFilter2"
												value="false" name="rating" data-ng-change="getrating(2)"
												data-ng-model="todostar2"> <span
												class="checkbox-material"><span class="check"></span></span>
												<span class="searchcheck-b"> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span>
											</span>
											</label> <b class="HotelStarz">{{hotelstars.two.length}}hotel(s)</b>
										</div>
										<div class="checkbox">
											<label> <input type="checkbox" class="starFilter3"
												value="false" name="rating" data-ng-change="getrating(3)"
												data-ng-model="todostar3"> <span
												class="checkbox-material"><span class="check"></span></span>
												<span class="searchcheck-b"> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span>
											</span>
											</label> <b class="HotelStarz">{{hotelstars.three.length}}hotel(s)</b>
										</div>
										<div class="checkbox">
											<label> <input type="checkbox" class="starFilter4"
												value="false" name="rating" data-ng-change="getrating(4)"
												data-ng-model="todostar4"> <span
												class="checkbox-material"><span class="check"></span></span>
												<span class="searchcheck-b"> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span>
											</span>
											</label> <b class="HotelStarz">{{hotelstars.four.length}}hotel(s)</b>
										</div>
										<div class="checkbox">
											<label> <input type="checkbox" class="starFilter5"
												value="false" name="rating" data-ng-change="getrating(5)"
												data-ng-model="todostar5"> <span
												class="checkbox-material"><span class="check"></span></span>
												<span class="searchcheck-b"> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span>
											</span>
											</label> <b class="HotelStarz">{{hotelstars.five.length}}hotel(s)</b>
										</div>
									</div>
								</div>
							</div>
							<div class="panel panel-default">
								<div class="panel-heading" role="tab" id="headingFive">
									<h4 class="panel-title">
										<a class="collapsed" role="button" data-toggle="collapse"
											data-target="#collapseThree" aria-expanded="false"
											aria-controls="collapseThree"> Hotel Mode <span><i
												class="tayy tayyarah-keyboard_arrow_right"></i></span>
										</a>
									</h4>
								</div>
								<div id="collapseThree" class="panel-collapse collapse in"
									role="tabpanel" aria-labelledby="headingFive">
									<div class="panel-body">
										<form class="form-horizontal ">

											<div class="checkbox">
												<label> <input type="checkbox"
													class="hotelFunctionOFFLINE" id="offline" value="false"
													name="stops"
													data-ng-click="checkhotelmodefilter('OFFLINE')"
													data-ng-model="todonon"> <span
													class="checkbox-material"><span class="check"></span></span>
													<span class="searchcheck-b"> OFFLINE </span>
												</label>

											</div>
											<div class="checkbox">
												<label> <input type="checkbox" value="false"
													name="stops" class="hotelFunctionONLINE"
													data-ng-click="checkhotelmodefilter('ONLINE')"
													data-ng-model="todore"> <span
													class="checkbox-material"><span class="check"></span></span>
													<span class="searchcheck-b"> ONLINE </span>
												</label>
											</div>
										</form>

									</div>
								</div>
							</div>

							<div class="panel panel-default"
								data-ng-if="locationlist.length > 0">
								<div class="panel-heading" role="tab" id="headingThree">
									<h4 class="panel-title">
										<a class="collapsed" role="button" data-toggle="collapse"
											data-target="#collapseFour" aria-expanded="false"
											aria-controls="collapseThree"> Hotel Location <span><i
												class="tayy tayyarah-keyboard_arrow_right"></i></span>
										</a>
									</h4>
								</div>
								<div id="collapseFour" class="panel-collapse collapse in"
									role="tabpanel" aria-labelledby="headingThree">
									<div class="panel-body">

										<div class="checkbox"
											data-ng-repeat="location in locationlist">
											<label> <input type="checkbox" value="{{location}}"
												name="airlines" data-ng-change="getlocationname(location)"
												data-ng-model="todo"> <span
												class="checkbox-material"><span class="check"></span></span>
												<span class="searchcheck-b">{{location}} </span>
											</label>
										</div>
									</div>
								</div>
							</div>

							<div class="panel panel-default"
								data-ng-if="Amenitieslist.length > 0">
								<div class="panel-heading" role="tab" id="headingFour">
									<h4 class="panel-title">
										<a class="collapsed" role="button" data-toggle="collapse"
											data-target="#collapseFive" aria-expanded="false"
											aria-controls="collapseFour"> Hotel Amenities <span><i
												class="tayy tayyarah-keyboard_arrow_right"></i></span>
										</a>
									</h4>
								</div>
								<div id="collapseFive" class="panel-collapse collapse in"
									role="tabpanel" aria-labelledby="headingFour">
									<div class="panel-body">
										<div class="checkbox"
											data-ng-repeat="Amenities in Amenitieslist">
											<label> <input type="checkbox" value="{{Amenities}}"
												name="airlines" data-ng-change="getamenitiesname(Amenities)"
												data-ng-model="todoo"> <span
												class="checkbox-material"><span class="check"></span></span>
												<span class="searchcheck-b">{{Amenities}} </span>
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
		</div>
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