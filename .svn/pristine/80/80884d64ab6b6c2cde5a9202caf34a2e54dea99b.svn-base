<%@taglib prefix="s" uri="/struts-tags"%>
<s:if test="#session.isCorporate == true">
	<div data-ng-include="header" data-ng-controller="CorporateheaderCtrl"></div>
</s:if>
<s:else>
	<div data-ng-include="header" data-ng-controller="HeadCtrl"></div>
</s:else>
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
											data-parent="#accordion" data-target="#collapsename"
											aria-expanded="true" class="accordion"
											aria-controls="collapsename"> Find by Hotel Name <span><i
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
											data-parent="#accordion" data-target="#collapseOne"
											aria-expanded="true" class="accordion"
											aria-controls="collapseOne"> Price Per Night <span><i
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
											data-parent="#accordion" data-target="#collapseTwo"
											aria-expanded="false" aria-controls="collapseTwo">
											Ratings <span><i
												class="tayy tayyarah-keyboard_arrow_right"></i></span>
										</a>
									</h4>
								</div>
								<div id="collapseTwo" class="panel-collapse collapse in"
									role="tabpanel" aria-labelledby="headingTwo">
									<div class="panel-body">
										<div class="checkbox">
											<label> <input type="checkbox" value="1"
												name="rating" data-ng-change="getrating(1)"
												data-ng-model="todostar1"> <span
												class="checkbox-material"><span class="check">
												</span> </span><span class="searchcheck-b"> <i
													class="tayyarah-star"></i>
											</span>
											</label> <b class="HotelStarz">{{hotelstars.one.length}}hotel(s)</b>
										</div>
										<div class="checkbox">
											<label> <input type="checkbox" value="2"
												name="rating" data-ng-change="getrating(2)"
												data-ng-model="todostar2"> <span
												class="checkbox-material"><span class="check"></span></span>
												<span class="searchcheck-b"> <span><i
														class="tayyarah-star"></i></span> <span><i
														class="tayyarah-star"></i></span>
											</span>
											</label> <b class="HotelStarz">{{hotelstars.two.length}}hotel(s)</b>
										</div>
										<div class="checkbox">
											<label> <input type="checkbox" value="3"
												name="rating" data-ng-change="getrating(3)"
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
											<label> <input type="checkbox" value="4"
												name="rating" data-ng-change="getrating(4)"
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
											<label> <input type="checkbox" value="5"
												name="rating" data-ng-change="getrating(5)"
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
											data-parent="#accordion" data-target="#collapseThree"
											aria-expanded="false" aria-controls="collapseThree">
											Hotel Mode <span><i
												class="tayy tayyarah-keyboard_arrow_right"></i></span>
										</a>
									</h4>
								</div>
								<div id="collapseThree" class="panel-collapse collapse in"
									role="tabpanel" aria-labelledby="headingFive">
									<div class="panel-body">

										<form class="form-horizontal ">

											<div class="checkbox">
												<label> <input type="checkbox" value="offline"
													name="stops"
													data-ng-click="checkhotelmodefilter('OFFLINE')"
													data-ng-model="todonon"> <span
													class="checkbox-material"><span class="check"></span></span>
													<span class="searchcheck-b"> OFFLINE </span>
												</label>
											</div>
											<div class="checkbox">
												<label> <input type="checkbox" value="online"
													name="stops" data-ng-click="checkhotelmodefilter('ONLINE')"
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
											data-parent="#accordion" data-target="#collapseFour"
											aria-expanded="false" aria-controls="collapseThree">
											Hotel Location <span><i
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
											data-parent="#accordion" data-target="#collapseFive"
											aria-expanded="false" aria-controls="collapseFour"> Hotel
											Amenities <span><i
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


<script type="text/javascript">
	function myFunction(name, value) {
		var x = document.createElement("INPUT");
		x.setAttribute("type", "hidden");
		x.setAttribute("name", name);
		x.setAttribute("value", decodeURIComponent(value));
		$("#markup").append(x);
	}

	$(document).ready(function() {
		$('#login-trigger').click(function() {
			$(this).next('#login-content').slideToggle();
			$(this).toggleClass('active');

			if ($(this).hasClass('active'))
				$(this).find('span').html('&#x25B2;')
			else
				$(this).find('span').html('&#x25BC;')
		})
	});

	$(document).on(
			'click',
			'.accordion',
			function(event) {
				event.stopPropagation();
				var $this = $(this);
				var parent = $this.data('parent');
				var actives = parent && $(parent).find('.collapse.in');
				var href = '#'; // Keeps JSHint from reporting 'href' undefined
				var hasData = '#'; // Keeps JSHint from reporting 'hasData' undefined

				// From bootstrap itself
				if (actives && actives.length) {
					hasData = actives.data('collapse');
					//if (hasData && hasData.transitioning) return;
					actives.collapse('hide');

				}
				make_minus = false;
				if ($this.find('.tayy').hasClass(
						'tayyarah-keyboard_arrow_right')) {
					make_minus = true;
				}

				$('.tayyarah-keyboard_arrow_down').removeClass(
						'tayyarah-keyboard_arrow_down').addClass(
						'tayyarah-keyboard_arrow_right');

				if (make_minus) {
					$this.find('.tayy').removeClass(
							'tayyarah-keyboard_arrow_right').addClass(
							'tayyarah-keyboard_arrow_down');
				}

				var target = $this.attr('data-target')
						|| (href = $this.attr('href'))
						&& href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7
				$(target).collapse('toggle');
			});

	$(window).scroll(function() {
		var i = $('#nav');
		var h = i.outerHeight(true);
		if ($(window).scrollTop() > h) {
			if (!i.hasClass('scroll-header'))
				i.hide().addClass('scroll-header').fadeIn("slow");
		}
		if ($(window).scrollTop() >= 250) {
			i.slideDown('slow');
		} else {
			i.removeClass('scroll-header').show();
		}
	});
	$("label.block").click(function() {
		$(this).find('input:radio').attr('checked', true);
		$(this).css({
			'backgroundColor' : "#f1f1f1",
			'color' : "#d56100"
		});

	});

	$('#mark').click(function() {
		if ($("#markup").is(':visible') == false)
			$("#markup").show("slow");
		else
			$("#markup").hide();
	});
	$('.btn-number').click(function(e) {
		e.preventDefault();

		fieldName = $(this).attr('data-field');
		type = $(this).attr('data-type');
		var input = $("input[name='" + fieldName + "']");

		var currentVal = parseInt(input.val());
		console.log(currentVal);
		if (!isNaN(currentVal)) {
			if (type == 'minus') {

				if (currentVal > input.attr('min')) {
					input.val(currentVal - 1).change();
					var total = $('#totaltraveller').val();
					$('#totaltraveller').val(parseInt(total) - 1);
				}
				if (parseInt(input.val()) == input.attr('min')) {
					$(this).attr('disabled', true);
				}

			} else if (type == 'plus') {
				var totallist = $('#totaltraveller').val();
				if (totallist <= 8) {
					if (currentVal < input.attr('max')) {
						input.val(currentVal + 1).change();
						var total = $('#totaltraveller').val();
						$('#totaltraveller').val(parseInt(total) + 1);

					}
					if (parseInt(input.val()) == input.attr('max')) {
						$(this).attr('disabled', true);
					}
				} else {
					// $(this).attr('disabled', true);
				}
			}
		} else {
			input.val(0);
		}

		$('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event) {
			event.stopPropagation();

		});
		$('ul.dropdown-menu.mega-dropdown-menu').on('change', function(event) {
			event.stopPropagation();
		});
	});
	$('.input-number').focusin(function() {
		$(this).data('oldValue', $(this).val());
	});
	$('.input-number').change(
			function() {
				minValue = parseInt($(this).attr('min'));
				maxValue = parseInt($(this).attr('max'));
				valueCurrent = parseInt($(this).val());

				name = $(this).attr('name');
				if (valueCurrent >= minValue) {
					$(
							".btn-number[data-type='minus'][data-field='"
									+ name + "']").removeAttr('disabled')
				} else {
					alert('Sorry, the minimum value was reached');
					$(this).val($(this).data('oldValue'));
				}
				if (valueCurrent <= maxValue) {
					$(
							".btn-number[data-type='plus'][data-field='" + name
									+ "']").removeAttr('disabled')
				} else {
					alert('Sorry, the maximum value was reached');
					$(this).val($(this).data('oldValue'));
				}

			});
	$(".input-number").keydown(function(e) {
		// Allow: backspace, delete, tab, escape, enter and .
		if ($.inArray(e.keyCode, [ 46, 8, 9, 27, 13, 190 ]) !== -1 ||
		// Allow: Ctrl+A
		(e.keyCode == 65 && e.ctrlKey === true) ||
		// Allow: home, end, left, right
		(e.keyCode >= 35 && e.keyCode <= 39)) {
			// let it happen, don't do anything
			return;
		}
		// Ensure that it is a number and stop the keypress 
		/*  if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105))) {
		     e.preventDefault();
		 } */
	});

	function AddChangeRooms() {
		var totalrooms = $('#totalrooms').val();
		//console.log(totalrooms);
		$('#totalroomtext').text(totalrooms);
		$('#totalpeopletext').text(totalrooms);
		var addrooms = "";

		$('.hotel-repeatadd').html("");
		for (var i = 0; i < parseInt(totalrooms - 1); i++) {
			// var lastindex = $('.hotel-repeat > .row:last-child').attr("index");

			var index = i + 2;
			addrooms += "<div class='row' id='rowid"+index+"' ><div class='col-sm-2 clearfix rooms-multiple'><p class='ro-heading'>Room"
					+ index
					+ ":</p></div><div class='col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Adult(s)</label><div class='input-group'> <select class='form-control' name='Adults"
					+ index
					+ "' id='RoomAdult"
					+ index
					+ "' autocomplete='off' required onchange='ChangeRoomDynamicChild("
					+ index
					+ ")'><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div></div>"
					+ "<div class='col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Child(s)</label><div class='input-group'><select class='form-control' id='Childs"
					+ index
					+ "' name='Childs"
					+ index
					+ "' autocomplete='off' required onchange='InsertAge("
					+ index
					+ ")'><option>0</option> <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div></div><div id='childrow"+index+"'></div></div>"
		}
		$('.hotel-repeatadd').append(addrooms);
	}

	function ChangeRoomDynamicChild(roomindex) {

		var totaladult = $('#RoomAdult' + roomindex).val();
		var totalrooms = $('#totalrooms').val();

		$('#Childs' + roomindex).html("");
		if (totaladult == '1') {

			var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option> ";
			$('#Childs' + roomindex).append(option);
		}
		if (totaladult == '2') {
			var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
			$('#Childs' + roomindex).append(option);
		}
		if (totaladult == '3') {
			var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
			$('#Childs' + roomindex).append(option);
		}
		if (totaladult == '4') {
			var option = "<option>0</option><option>1</option><option>2</option>";
			$('#Childs' + roomindex).append(option);
		}

		$('#childrow' + roomindex).html("");
		if (totalrooms == 1) {
			$('#totalpeopletext').text(parseInt(totaladult));
			$('#totalchildtext').text(parseInt($('#Childs').val()));
		}
		if (totalrooms == 2) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val()));
		}
		if (totalrooms == 3) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val()));
		}

		if (totalrooms == 4) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val())
							+ parseInt($('#RoomAdult4').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val()));
		}

		if (totalrooms == 5) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val())
							+ parseInt($('#RoomAdult4').val())
							+ parseInt($('#RoomAdult5').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val())
							+ parseInt($('#Childs5').val()));
		}
		if (totalrooms == 6) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val())
							+ parseInt($('#RoomAdult4').val())
							+ parseInt($('#RoomAdult5').val())
							+ parseInt($('#RoomAdult6').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val())
							+ parseInt($('#Childs5').val())
							+ parseInt($('#Childs6').val()));
		}
	}

	function FirstrowChildchange(rowindex) {

		var total = $('#Childs').val();
		var totalrooms = $('#totalrooms').val();
		if (totalrooms == 1) {
			$('#totalchildtext').text(parseInt(total));
		}
		if (totalrooms == 2)
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val()));
		if (totalrooms == 3)
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs2').val()));
		if (totalrooms == 4)
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val()));
		if (totalrooms == 5)
			$('#totalpeopletext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val()));
		if (totalrooms == 6)
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val())
							+ parseInt($('#Childs5').val()));

		console.log(total);
		if (total == '0') {
			$('.Room1Child1').hide();
			$('.Room1Child2').hide();
			$('.Room1Child3').hide();
			$('.Room1Child4').hide();
			$('.Room1Child5').hide();
		}

		if (total == '1') {
			$('.Room1Child1').show();
			$('.Room1Child2').hide();
			$('.Room1Child3').hide();
			$('.Room1Child4').hide();
			$('.Room1Child5').hide();
		}
		if (total == '2') {
			$('.Room1Child1').show();
			$('.Room1Child2').show();
			$('.Room1Child3').hide();
			$('.Room1Child4').hide();
			$('.Room1Child5').hide();
		}
		if (total == '3') {
			$('.Room1Child1').show();
			$('.Room1Child2').show();
			$('.Room1Child3').show();
			$('.Room1Child4').hide();
			$('.Room1Child5').hide();
		}
		if (total == '4') {
			$('.Room1Child1').show();
			$('.Room1Child2').show();
			$('.Room1Child3').show();
			$('.Room1Child4').show();
			$('.Room1Child5').hide();
		}
		if (total == '5') {
			$('.Room1Child1').show();
			$('.Room1Child2').show();
			$('.Room1Child3').show();
			$('.Room1Child4').show();
			$('.Room1Child5').show();
		}
	}

	function FirstRoomChangeAdult() {
		var totaladult = $('#Room1Adult').val();
		var totalpeoplelength = $('#totalpeopletext').text();
		var totalrooms = $('#totalrooms').val();

		$('#Childs').html("");
		if (totaladult == '1') {
			var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>";
			$('#Childs').append(option);
		}
		if (totaladult == '2') {
			var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
			$('#Childs').append(option);
		}
		if (totaladult == '3') {
			var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
			$('#Childs').append(option);
		}
		if (totaladult == '4') {
			var option = "<option>0</option><option>1</option><option>2</option>";
			$('#Childs').append(option);
		}

		$('.Room1Child1').hide();
		$('.Room1Child2').hide();
		$('.Room1Child3').hide();
		$('.Room1Child4').hide();
		$('.Room1Child5').hide();

		if (totalrooms == 1) {
			$('#totalpeopletext').text(parseInt(totaladult));
			$('#totalchildtext').text(parseInt($('#Childs').val()));
		}
		if (totalrooms == 2) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val()));
		}
		if (totalrooms == 3) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val()));
		}

		if (totalrooms == 4) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val())
							+ parseInt($('#RoomAdult4').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val()));
		}

		if (totalrooms == 5) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val())
							+ parseInt($('#RoomAdult4').val())
							+ parseInt($('#RoomAdult5').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val())
							+ parseInt($('#Childs5').val()));
		}
		if (totalrooms == 6) {
			$('#totalpeopletext').text(
					parseInt($('#Room1Adult').val())
							+ parseInt($('#RoomAdult2').val())
							+ parseInt($('#RoomAdult3').val())
							+ parseInt($('#RoomAdult4').val())
							+ parseInt($('#RoomAdult5').val())
							+ parseInt($('#RoomAdult6').val()));
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val())
							+ parseInt($('#Childs5').val())
							+ parseInt($('#Childs6').val()));
		}

	}

	var is_mobile = false;
	if ($('#hdepe').css('display') == 'none') {
		is_mobile = true;
	}
	if (is_mobile == true) {
		$('#datein').datepicker({
			numberOfMonths : 1,
			firstDay : 1,
			dateFormat : 'dd/mm/yy',
			minDate : '0',

			onSelect : function(dateStr) {
				var d1 = $(this).datepicker("getDate");
				d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
				var d2 = $(this).datepicker("getDate");
				d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
				$("#dateout").datepicker("setDate", null);
				$("#dateout").datepicker("option", "minDate", d1);
				// $("#twodpd2").datepicker("option", "maxDate", d2);

			},
			onClose : function(dateSt) {
				$("#dateout").focus();
			}
		});

		$("#dateout").datepicker({
			numberOfMonths : 1,
			firstDay : 1,
			dateFormat : 'dd/mm/yy',

			onSelect : function(dateStr) {

			}
		});
	}
	if (is_mobile == false) {
		$('#datein').datepicker({
			numberOfMonths : 2,
			firstDay : 1,
			dateFormat : 'dd/mm/yy',
			minDate : '0',

			onSelect : function(dateStr) {
				var d1 = $(this).datepicker("getDate");
				d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
				var d2 = $(this).datepicker("getDate");
				d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
				$("#dateout").datepicker("setDate", null);
				$("#dateout").datepicker("option", "minDate", d1);
				// $("#twodpd2").datepicker("option", "maxDate", d2);

			},
			onClose : function(dateSt) {
				$("#dateout").focus();
			}
		});

		$("#dateout").datepicker({
			numberOfMonths : 2,
			firstDay : 1,
			dateFormat : 'dd/mm/yy',

			onSelect : function(dateStr) {

			}
		});
	}

	function openchangeroom() {
		$('#rowid1').show();
	}
</script>
<script>
	function FirstrowChildchange(rowindex) {

		var total = $('#Childs').val();
		var totalrooms = $('#totalrooms').val();
		if (totalrooms == 1) {
			$('#totalchildtext').text(parseInt(total));
		}
		if (totalrooms == 2)
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val()));
		if (totalrooms == 3)
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs2').val()));
		if (totalrooms == 4)
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val()));
		if (totalrooms == 5)
			$('#totalpeopletext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val()));
		if (totalrooms == 6)
			$('#totalchildtext').text(
					parseInt($('#Childs').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs2').val())
							+ parseInt($('#Childs3').val())
							+ parseInt($('#Childs4').val())
							+ parseInt($('#Childs5').val()));

		console.log(total);
		if (total == '0') {
			$('.Room1Child1').hide();
			$('.Room1Child2').hide();
			$('.Room1Child3').hide();
			$('.Room1Child4').hide();
			$('.Room1Child5').hide();
		}

		if (total == '1') {
			$('.Room1Child1').show();
			$('.Room1Child2').hide();
			$('.Room1Child3').hide();
			$('.Room1Child4').hide();
			$('.Room1Child5').hide();
		}
		if (total == '2') {
			$('.Room1Child1').show();
			$('.Room1Child2').show();
			$('.Room1Child3').hide();
			$('.Room1Child4').hide();
			$('.Room1Child5').hide();
		}
		if (total == '3') {
			$('.Room1Child1').show();
			$('.Room1Child2').show();
			$('.Room1Child3').show();
			$('.Room1Child4').hide();
			$('.Room1Child5').hide();
		}
		if (total == '4') {
			$('.Room1Child1').show();
			$('.Room1Child2').show();
			$('.Room1Child3').show();
			$('.Room1Child4').show();
			$('.Room1Child5').hide();
		}
		if (total == '5') {
			$('.Room1Child1').show();
			$('.Room1Child2').show();
			$('.Room1Child3').show();
			$('.Room1Child4').show();
			$('.Room1Child5').show();
		}
	}

	$('a[href="#hotelnamelink"]').click(function(index) {
		console.log('here');
		$("#roomform" + index).submit();

	});
</script>
<script type="text/ng-template" id="myModalContent.html">
<div class="modal-header">
	<button type="button"  class="close" data-ng-click="cancel()">&times;</button>
		<h4 class="modal-title">{{hotelmapname}}</h4>
</div>
<div class="modal-body">	
		<div class="row">
			<map ng-if="$parent.$parent.render" center="[{{$parent.lat}}, {{$parent.lng}}]"  position="{{$parent.lat}}, {{$parent.lng}}" "zoom-control="true" zoom="14" on-click="click()"> 
                    <marker  position="{{$parent.lat}}, {{$parent.lng}}"></marker>
           </map>

</div>
</div>
 </script>
<script>
	$("#myQuotation").click(
			function() {
				jQuery.noConflict();
				//$('#myModalQuotation').modal('show'); 
				angular.element(document.getElementById('myModalQuotation'))
						.scope().showallquotes();
			});
</script>
<script src="js/hotelDefaultLoad.js"></script>
<script src="js/loading-bar.min.js"></script>
<s:if test="#session.isCorporate == true">
	<div data-ng-include="Corporatefooter"
		data-ng-controller="CorporateFooterCtrl"></div>
</s:if>
<s:else>
	<div data-ng-include="footer" data-ng-controller="FootCtrl"></div>
</s:else>
<script>
	$(document).ready(function() {
		  $('#one, #searchrefine').iptOffCanvas({
	      baseClass: 'offcanvas',
	      type: 'left' 
	    });
	  }); 

   </script>

