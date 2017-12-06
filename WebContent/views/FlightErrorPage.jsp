<script src="js/jquery.js"></script>
<style>
.traveller-menu li a div label {
	width: 35% !important;
	font-size: 12px;
}

.infMargin-left {
	margin-left: -2px;
}

body.modal-open .datepicker {
	z-index: 1200 !important;
}
</style>



<%@taglib prefix="s" uri="/struts-tags"%>

<div class="modal-dialog margintop85px  " tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel">
	<div class="modal-content timeModal">
		<div class="modal-header">
			<h4 class="modal-title text-center mobWhiteText">Error Status</h4>
		</div>
		<div class="modal-body errorBody">
			<div class="row padtopDown20px text-center">{{Message}}</div>
			<div class="row" data-ng-show="showData">
				<div class="row padtopDown20px blueText text-center">Your
					Search Details</div>
				<div class="col-md-5 col-sm-5 col-xs-5 text-center removeMobPadd">
					<p class="col-md-12 col-sm-12 col-xs-12 text-center">{{origin}}</p>
					<p class="col-md-12 col-sm-12 col-xs-12 text-center">{{depDate}}</p>
				</div>
				<div class="col-md-2 col-sm-2 col-xs-2">
					<p class="col-md-12 col-sm-12 col-xs-12 text-center">
						<span><i class="tayyarah-long-arrow-right"></i></span>
					</p>

					<p class="col-md-12 col-sm-12 col-xs-12 text-center"
						data-ng-if="arvlDate">
						<span><i class="tayyarah-long-arrow-left"></i></span>
					</p>

				</div>
				<div class="col-md-5 col-sm-5 col-xs-5 text-center removeMobPadd">
					<p class="col-md-12 col-sm-12 col-xs-12 text-center">{{destination}}</p>
					<p class="col-md-12 col-sm-12 col-xs-12 text-center">{{arvlDate}}</p>
				</div>


			</div>
			<div id="ErrFooter" class="row">
				<div class="modal-footer">
					<s:if test="#session['agent'] != null">
						<input type="hidden" name="ccy" id="eronecurrencyname"
							value="<s:property value="%{#session.agent.currencyCode}"/>">
						<input type="hidden" name="ay" id="eray"
							value="<s:property value="%{#session.agent.Securityanswer}"/>">
					</s:if>
					<s:else>
						<input type="hidden" name="ccy" id="eronecurrencyname" value="INR">
						<input type="hidden" id="eroky" name="ay"
							value="zqJ3R9cGpNWgNXG55ub/WQ==">
					</s:else>

					<div class="form-btn-group tayy-button ">
						<button type="button"
							class="btn btn-default btn-xs border-Btn closeBtn"
							data-ng-click="close()">Home</button>
						<button type="button" class="btn btn-primary btn-xs errResearch"
							data-ng-click="research()">Re-search</button>
						<button type="submit"
							class="btn btn-info  mobileSaerchBtn"
							id="modifybutton">Modify Search</button>

					</div>
				</div>
				<!--   <div id="ErrorResearch" class="col-md-12 paddingTopBtm5px borderAround"> -->
				<div id="content" class="col-md-12 paddingTopBtm5px borderAround">

					<form name="flightsearchForm" class="form-inline" id="onewayform"
						data-ng-submit="errorflightsearch()">

						<input type="hidden" name="trips" value="2"> <input
							type="hidden" name="$&*D5K" value="false"> <input
							type="hidden" name="$M*A@" value="0">
						<s:if test="#session['agent'] != null">
							<input type="hidden" name="ccy" id="onecurrencyname"
								value="<s:property value="%{#session.agent.currencyCode}"/>">
							<input type="hidden" name="ay" id="ay"
								value="<s:property value="%{#session.agent.Securityanswer}"/>">
						</s:if>
						<s:else>
							<input type="hidden" name="ccy" id="onecurrencyname" value="INR">
							<input type="hidden" id="oky" name="ay"
								value="zqJ3R9cGpNWgNXG55ub/WQ==">
						</s:else>
						<fieldset>
							<div class="clearfix">
								<div class="col-md-12 col-sm-12 col-xs-12 pad10px">
									<div class="col-md-3 col-sm-3 col-xs-12 clearfix ">
										<div class="form-group">
											<label for="inputFrom">From</label>
											<div class="input-group">
												<input type="text" name="ori" data-ng-model="user.originall"
													id="search-source" autocomplete="off"
													data-typeahead="c as c for c in cities($viewValue) | limitTo:10"
													placeholder="City or Airport" data-typeahead-min-length='1'
													data-typeahead-on-select='onSelectPart($item, $model, $label)'
													data-typeahead-template-url="customTemplate.html"
													class="form-control width100per" required>

											</div>
											<div class="ttst" id="errori"></div>
										</div>
									</div>
									<div class="col-md-3 col-sm-3 col-xs-12 clearfix ">
										<div class="form-group">
											<label for="inputEmail">To</label>
											<div class="input-group">
												<input type="text" name="des" id="to" autocomplete="off"
													data-ng-model="user.destinationall"
													placeholder="City or Airport"
													data-typeahead="c as c for c in cities($viewValue) | limitTo:10"
													data-typeahead-min-length='1'
													data-typeahead-on-select='onSelectPart($item, $model, $label)'
													data-typeahead-template-url="customTemplate.html"
													class="form-control" required>
											</div>
											<div class="ttst" id="errdes"></div>
											<div class="ttst" id="errdep"></div>
										</div>
									</div>
									<div id="hdepe"></div>
									<div class="col-md-3 col-sm-3 col-xs-12 clearfix">
										<div class="form-group">
											<label for="inputEmail">Departure</label>
											<div class="input-group">
												<input type="text" class="form-control depDatepick"
													id="twoEdpd1" data-ng-model="departureFrom" name="depDate"
													placeholder="DD/MM/YYYY" autocomplete="off"
													onkeydown="return false;" required>
											</div>
											<!-- <div class="input-group date" id="datetimepicker1" >
             						   			<input type="text" class="form-control" id="fDate" onkeydown="return false;"/></div> -->
											<div class="ttst" id="errdes"></div>
											<div class="ttst" id="errdep"></div>
										</div>
									</div>

									<div ng-if="TripT=='O'"
										class="col-md-3 col-sm-3 col-xs-12 clearfix">
										<div class="form-group">
											<label for="inputEmail">Arrival</label>
											<div class="input-group">
												<input type="text" class="form-control arrivalDatepick"
													id="twoEdpd2" placeholder="DD/MM/YYYY"
													data-ng-model="arrivalTo" autocomplete="off"
													disabled="disabled" onkeydown="return false;">
											</div>
											<div class="ttst" id="errarr"></div>
										</div>
									</div>
									<div ng-if="TripT !='O'"
										class="col-md-3 col-sm-3 col-xs-12 clearfix">
										<div class="form-group">
											<label for="inputEmail">Arrival</label>
											<div class="input-group">
												<input type="text" class="form-control arrivalDatepick"
													id="twoEdpd2" placeholder="DD/MM/YYYY"
													data-ng-model="arrivalTo" autocomplete="off"
													onkeydown="return false;">
											</div>
											<div class="ttst" id="errarr"></div>
										</div>
									</div>
								</div>
								<div class="col-md-12 col-sm-12 col-xs-12 pad10px">
									<div class="col-md-5 col-sm-5 col-xs-12 travelWidth"
										id="home-details">


										<div class="form-group col-md-12">
											<label class="col-md-12 padINPTzero" for="inputEmail">Travellers</label>
											<div class="input-group col-md-12 ">

												<span class="tayya-h-iicons travelSpan col-md-1"><i
													class="tayyarah-group_add"></i></span> <span
													class="dropdown travelSpan padleft10px col-md-11"
													data-toggle="dropdown"><span id="totalEtraveller">1</span>
													Traveller(s)</span>
												<ul class="dropdown-menu mega-dropdown-menu traveller-menu">
													<span class="arrow-up"></span>
													<li><a>

															<div class="form-group">
																<label class="labelWidth">Adult(s)</label>
																<div class="input-group">
																	<span class="input-group-btn">
																		<button type="button"
																			class="btn btn-default btn-E2number"
																			data-type="minus" data-field="adultEid">
																			<span class="tayyarah-minus"></span>
																		</button>
																	</span> <span id="adultEid" class="infid input-number" min="1"
																		max="9" data-ng-model="user.adultEid">1</span> <input
																		type="hidden" name="$A*D" id="hiddenadult" value="1">
																	<span class="input-group-btn">
																		<button type="button"
																			class="btn btn-default btn-E2number" data-type="plus"
																			data-field="adultEid">
																			<span class="tayyarah-plus"></span>
																		</button>
																	</span>
																</div>
															</div>
													</a></li>

													<li><a>
															<div class="form-group">
																<label class="labelWidth">Child(s)</label>
																<div class="input-group">

																	<span class="input-group-btn">
																		<button type="button"
																			class="btn btn-default btn-E2number"
																			data-type="minus" data-field="kidEid">
																			<span class="tayyarah-minus"></span>
																		</button>
																	</span> <span id="kidEid" class="infid input-number" min="1"
																		max="9" data-ng-model="user.kidEid">0</span> <input
																		type="hidden" name="$K*D" id="hiddenkid" value="0">
																	<span class="input-group-btn">
																		<button type="button"
																			class="btn btn-default btn-E2number" data-type="plus"
																			data-field="kidEid">
																			<span class="tayyarah-plus"></span>
																		</button>
																	</span>

																</div>
															</div>
													</a></li>

													<li><a><div class="form-group">
																<label class="labelWidth">Infant(s)</label>
																<div class="input-group infMargin-left">
																	<span class="input-group-btn">
																		<button type="button"
																			class="btn btn-default btn-E2number"
																			disabled="disabled" data-type="minus"
																			data-field="infantEid">
																			<span class="tayyarah-minus"></span>
																		</button>
																	</span><span class="infid input-number" id="infantEid" min="0"
																		max="1" data-ng-model="user.infantEid">0</span> <input
																		type="hidden" name="$I*T" id="hiddeninfant" value="0">
																	<span class="input-group-btn">
																		<button type="button"
																			class="btn btn-default btn-E2number" data-type="plus"
																			data-field="infantEid">
																			<span class="tayyarah-plus"></span>
																		</button>
																	</span>
																</div>
															</div></a></li>

													<li class="dorp-done newDrop">
														<div class="form-group pull-right">
															<button type="button" class="btn btn-info doneTRavelBtn"
																id="but-up1">Done</button>
														</div>

													</li>

												</ul>
											</div>

											<div class="ttst" id="errconfig"></div>
										</div>
									</div>

									<div class="col-md-4 col-sm-4 col-xs-12 h-type clearfix">


										<div class="home-trip-type">

											<div class="form-group">
												<label>Trip Type : </label>
												<div class="input-group dropdownstyle">

													<select ng-if="TripT =='O'" class="form-control"
														name="$TT*Y" id="triptypeEselect"
														onchange="selecttriptype();">

														<option value="O" selected>One Way</option>
														<option value="R">Round Trip</option>
														<option value="SR">Special Round Trip(LCC)</option>
													</select> <select ng-if="TripT =='R'" class="form-control"
														name="$TT*Y" id="triptypeEselect"
														onchange="selecttriptype();">

														<option value="O">One Way</option>
														<option value="R" selected>Round Trip</option>
														<option value="SR">Special Round Trip(LCC)</option>
													</select> <select ng-if="TripT =='SR'" class="form-control"
														name="$TT*Y" id="triptypeEselect"
														onchange="selecttriptype();">

														<option value="O">One Way</option>
														<option value="R">Round Trip</option>
														<option value="SR" selected>Special Round
															Trip(LCC)</option>
													</select>

												</div>
											</div>

										</div>


									</div>
									<div class="col-md-3 col-sm-3 col-xs-12 pull-right">

										<button type="submit" class="btn btn-info errSearchBtn"
											data-ng-click="submitted==true">Search</button>

									</div>
								</div>

							</div>

						</fieldset>

					</form>
				</div>
			</div>
		</div>
	</div>
</div>


<script src="js/errorSearchCommon.js"></script>

<script type="text/ng-template" id="customTemplate.html">
  <a>
      <span bind-html-unsafe="match.label | typeaheadHighlight:query"></span>
      <i></i>
  </a>
</script>





