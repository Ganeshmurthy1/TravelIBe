
<style>
#loading-bar-container {
	display: none !important;
}
</style>
<%@taglib prefix="s" uri="/struts-tags"%>
<!-- Your site header -->
<div>
	<s:if test="#session.isCorporate == true">
		<div class=" super-content">
			<!-- Advertise banner options come here -->
			<div class=" clearfix">
				<div id="carousel-id" class="carousel slide carousel-fade"
					data-ride="carousel">

					<div class="carousel-inner">
						<div class="item ">
							<img alt="First slide" src="images/HD/cor1.jpg">
						</div>
						<div class="item">
							<img alt="First slide" src="images/HD/cor2.jpg">
						</div>
						<div class="item active">
							<img alt="First slide" src="images/HD/car.jpg">
						</div>
						<div class="item">
							<img alt="First slide" src="images/HD/cor4.jpg">
						</div>
					</div>
				</div>
			</div>
			<!-- Advertise banner options ends here -->

			<!-- booking options comes here -->

			<div class="col-sm-10 tayyarah-search-engine">
				<div class="tayyarah-home-tabs">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs corporate active-tab" role="tablist">
						<li role="presentation" class="" id="Flightli"><a href="#/"
							aria-controls="flights" role="tab" data-toggle="tab"> <i
								class="tayyarah-plane"></i> Flight
						</a></li>

						<li role="presentation" id="Hotelli"><a href="#/hotel"
							aria-controls="hotels" role="tab" data-toggle="tab">
								<i class="tayyarah-hotel"></i> Hotel
						</a></li>

						<li role="presentation" id="Busesli"><a href="#/bus"
							aria-controls="bus" role="tab" data-toggle="tab"> <i
								class="tayyarah-directions_bus"></i> Bus
						</a></li>

						<li role="presentation" class="active" id="Carsli"><a
							href="#/cars" aria-controls="car" role="tab" data-toggle="tab">
								<i class="tayyarah-directions_car"></i> Car
						</a></li>
					</ul>

					<!-- Tab panes -->

					<div class="tab-content corporate">
						<div role="tabpanel" class="tab-pane " id="flights"></div>
						<div role="tabpanel" class="tab-pane" id="hotels"></div>
						<div role="tabpanel" class="tab-pane " id="bus"></div>

						<div role="tabpanel" class="tab-pane active " id="car"></div>

					</div>

				</div>

			</div>
		</div>
	</s:if>
	<s:else>

		<div class=" super-content">
			<s:if test="#session.isSliderEnabled == false">
				<div class="SliderRemovedHeight"></div>
			</s:if>
			<s:else>
				<div class=" clearfix">
					<div id="carousel-id" class="carousel slide carousel-fade"
						data-ride="carousel">

						<div class="carousel-inner">
							<div class="item active">
								<img alt="First slide" src="images/HD/02.jpg">
							</div>
							<div class="item">
								<img alt="First slide" src="images/HD/04.jpg">
							</div>
							<div class="item">
								<img alt="First slide" src="images/HD/05.jpg">
							</div>
						</div>
					</div>
				</div>
			</s:else>
			<!-- Advertise banner options ends here -->

			<!-- booking options comes here -->

			<div class="col-sm-10 tayyarah-search-engine">
				<div class="tayyarah-home-tabs">
					<!-- Nav tabs -->
					<s:if test="#session.isLabeling == true">
						<ul class="nav nav-tabs corporate active-tab" role="tablist">
							<s:if test="#session.isFlightsEnabled == true">
								<li role="presentation" class="" id="Flightli"><a href="#/"
									aria-controls="flights" role="tab" data-toggle="tab"> <i
										class="tayyarah-plane"></i> Flight
								</a></li>
							</s:if>
							<s:if test="#session.isHotelEnabled == true">
								<li role="presentation" id="Hotelli"><a href="#/hotel"
									aria-controls="hotels" role="tab" data-toggle="tab">
										<i class="tayyarah-hotel"></i> Hotel
								</a></li>
							</s:if>
							<s:if test="#session.isBusEnabled == true">
								<li role="presentation" id="Busesli"><a href="#/bus"
									aria-controls="bus" role="tab" data-toggle="tab"> <i
										class="tayyarah-directions_bus"></i> Bus
								</a></li>
							</s:if>
							<s:if test="#session.isCarEnabled == true">
								<li role="presentation" class="active" id="Carsli"><a
									href="#/cars" aria-controls="car" role="tab" data-toggle="tab">
										<i class="tayyarah-directions_car"></i> Car
								</a></li>
							</s:if>
						</ul>
					</s:if>
					<s:else>
						<ul class="nav nav-tabs corporate active-tab" role="tablist">
							<li role="presentation" class="" id="Flightli"><a href="#/"
								aria-controls="flights" role="tab" data-toggle="tab"> <i
									class="tayyarah-plane"></i> Flight
							</a></li>

							<li role="presentation" id="Hotelli"><a href="#/hotel"
								aria-controls="hotels" role="tab" data-toggle="tab">
									<i class="tayyarah-hotel"></i> Hotel
							</a></li>

							<li role="presentation" id="Busesli"><a href="#/bus"
								aria-controls="bus" role="tab" data-toggle="tab"> <i
									class="tayyarah-directions_bus"></i> Bus
							</a></li>

							<li role="presentation" class="active" id="Carsli"><a
								href="#/cars" aria-controls="car" role="tab" data-toggle="tab">
									<i class="tayyarah-directions_car"></i> Car
							</a></li>
						</ul>
					</s:else>
					<!-- Tab panes -->

					<div class="tab-content">
						<div role="tabpanel" class="tab-pane " id="flights"></div>
						<div role="tabpanel" class="tab-pane" id="hotels"></div>
						<div role="tabpanel" class="tab-pane " id="bus"></div>
						<div role="tabpanel" class="tab-pane active " id="car">

							<div class="comming-soon">

								<div class="col-md-5 under visible-xs">
									<h1>Page Under Construction</h1>
								</div>
								<div class="col-md-5 visible-xs" id="spin">

									<i class="tayyarah-cog pull-right cog"></i>
								</div>
								<div class="col-sm-5 hidden-xs" id="spin">

									<i class="tayyarah-cog pull-right cog"></i>
								</div>
								<div class="col-sm-5 hidden-xs under">
									<h1>Page Under Construction</h1>

								</div>
							</div>
						</div>

					</div>

				</div>

			</div>
		</div>


	</s:else>


	<!-- /eo row -->
</div>
<!-- container ends -->


<!-- super-banner ends -->
<s:if test="#session.isCorporate == true">
	<article class="container corporateheader">

		<section>
			<div class="choose-us">
				<div class="container clear-padding">
					<!-- <div class="col-sm-4"> -->
					<div class="choose-us-item text-center">
						<h4>Why us?</h4>

						<p>Tayyarah.com today is the leading consolidator provider of
							consumer-direct travel services in India. Based in
							Bangalore-India, Tayyarah.com is a one-stop-shop for all
							travel-related services. Tayyarah provides you a access over 70+
							countries with 900+ airlines on just one platform, Tayyarah.com
							provides hotel reservation facility for more than 45,000 hotels
							in India and over 9,00,000 hotels around the world which makes us
							a leading consolidator of all travel products. Through continued
							excellence in providing travel solutions, Tayyarah.com provides
							booking facility for all the popular as well as exotic national
							and international destinations. If you have been managing your
							travel through a Travel Agent, it is quite possible that you have
							availed of our products and services even before you knew each
							other. Tayyarah provides online car rental services in 210 +
							cities within India and also offer over 85,000 + bus routes
							across India.</p>
					</div>
					<!-- </div> -->
				</div>
			</div>
		</section>
	</article>

</s:if>
<s:else>
	<s:if test="#session.isDealsEnabled == false">
	</s:if>
	<s:else>
		<article class="container">

			<section class="packages">
				<h4 class="text-center">
					<a href="#">Pack<span>ages</span></a>
				</h4>

				<div class="main">
					<ul id="og-grid" class="og-grid">
						<li><a href="#/EnquiryForm" data-largesrc="images/1.jpg"
							data-title="Tour Packages"
							data-description="Tayyarah works hard to secure the best deals on packages covering different types of vacations like Family tours, adventure tours, beach vacations luxury tours and so on...">
								<img src="images/1.jpg" alt="img01"/>
								<span>Tour Packages</span>

								<div class="hoverpackages">

									<p>We already know our customers need best and cheapest
										travel experience. Send your request now.</p>
									<button type="button" class="btn btn-info btQoute">Get
										my Qoute</button>
								</div>
						</a></li>

						<li><a href="#/EnquiryForm" data-largesrc="images/3.jpg"
							data-title="Group Packages"
							data-description="Some of the best destinations in the world are covered by our Group fixed departures, relax in sunshine near a seashore or on the banks of a river or choose to stay up all night in a luxury resort, tayyarah gives you all the customized options.">
								<img src="images/3.jpg" alt="img01"/>
								<span>Group Packages</span>
								<div class="hoverpackages">
									<p>We already know our customers need best and cheapest
										travel experience. Send your request now.</p>
									<button type="button" class="btn btn-info btQoute">Get
										my Qoute</button>

								</div>
						</a></li>


						<li><a href="#/EnquiryForm" data-largesrc="images/2.jpg"
							data-title="Holiday Packages"
							data-description="Best way to relax is to pack your bags and go on a holiday, tayyarah 
suggests and guides people to find the right destination covering wildlife destinations, beach vacations, adventure holiday and so on at affordable prices.
The cost of outbound packages are payable in convertible foreign exchange (at the current prevailing exchange rates) for Indian residents traveling under the BTQ & other schemes subject to RBI regulations
except the cost of Airline ticket. Accommodation (if included) is based on twin share basis. Seasonal and weekend surcharges may apply, meals & sightseeing are as per itinerary. All transfers in SIC basis unless
otherwise specified, other terms and conditions apply. ">
								<img src="images/2.jpg" alt="img02"/>
								<span>Holiday Packages</span>
								<div class="hoverpackages">

									<p>We already know our customers need best and cheapest
										travel experience. Send your request now.</p>
									<button type="button" class="btn btn-info btQoute">Get
										my Qoute</button>

								</div>
						</a></li>


						<li><a href="#/EnquiryForm" data-largesrc="images/ummrah.jpg"
							data-title="Umrah Packages"
							data-description="Umrah Travel for us is a noble service in which we aim to offer the best possible advice and assistance, making us unique from other tour operators. Special arrangements include Best of Hotels, Transportation, Meals &amp; Other Complimentary Services. We commit to offer best umrah service at unbeatable prices. We cover all range of travelers like Economy ,Prestige &amp; Luxury.">
								<img src="images/ummrah.jpg" alt="img03" /> <span>Umrah Packages</span>
								<div class="hoverpackages">

									<p>We already know our customers need best and cheapest
										travel experience. Send your request now.</p>
									<button type="button" class="btn btn-info btQoute">Get
										my Qoute</button>

								</div>
						</a></li>
					</ul>
				</div>
			</section>
		</article>
	</s:else>


</s:else>
<!-- END: HOT DEALS -->




<!-- START: HOT  DEALS -->
<section class="hot-deals">

	<div class="container clear-padding">
		<div class="row">
			<div class="section-title text-center">
				<h2>HOT DEALS</h2>
				<h4>SAVE MORE</h4>
			</div>

			<div role="tabpanel" class="text-center">
				<!-- BEGIN: CATEGORY TAB -->
				<ul class="nav nav-tabs" role="tablist" id="hotDeal">
					<li role="presentation" class="active text-center"><a
						href="#tab1" aria-controls="tab1" role="tab" data-toggle="tab">
							<i class="tayyarah-plane"></i> <span>FLIGHTS</SPAN>
					</a></li>
					<li role="presentation" class="text-center"><a href="#tab2"
						aria-controls="tab2" role="tab" data-toggle="tab"> <i
							class="tayyarah-hotel"></i> <span>HOTELS</SPAN>
					</a></li>
					<li role="presentation" class="text-center"><a href="#tab3"
						aria-controls="tab3" role="tab" data-toggle="tab"> <i
							class="tayyarah-directions_bus"></i> <span>Bus</SPAN>
					</a></li>
					<li role="presentation" class="text-center"><a href="#tab4"
						aria-controls="tab4" role="tab" data-toggle="tab"> <i
							class="tayyarah-directions_car"></i> <span>CARS</SPAN>
					</a></li>

				</ul>
			</div>
		</div>
	</div>
</section>
<!-- END: HOT DEALS -->



<!-- START: WHY CHOOSE US SECTION -->
<section id="why-choose-us">
	<div class="choose-us-row">
		<div class="container clear-padding">
			<div class="light-section-title text-center">
				<h2>WHY CHOOSE US?</h2>
				<h4>REASONS TO TRUST US</h4>
				<div class="space"></div>
				<p>Access of booking flight tickets over 70+ countries with 900+
					airlines on one platform &amp; we provide hotel reservation
					facility for more than 45,000 hotels in India and over 9,00,000
					hotels globally with no hidden cost.</p>
			</div>


			<div class="main-footer-sub">
				<div class="container clear-padding">
					<div class="col-sm-12 text-center">
						<form class="clearfix text-center">
							<label>SUBSCRIBE TO OUR NEWSLETTER</label>
							<div class="clearfix"></div>
							<div class=" col-sm-8 clear-padding">
								<input class="form-control" type="email" required
									placeholder="Enter Your Email" name="email">
							</div>
							<div class="col-sm-4 clear-padding">
								<button type="submit">
									<i class="fa fa-paper-plane"></i>SUBSCRIBE
								</button>
							</div>
						</form>
					</div>
					<div class=" col-sm-12 ">
						<div class="social-media text-center">
							<ul>
								<li><a href="#"><i class="tayyarah-facebook4"></i></a></li>
								<li><a href="#"><i class="tayyarah-twitter4"></i></a></li>
								<li><a href="#"><i class="tayyarah-google-plus"></i></a></li>
								<li><a href="#"><i class="tayyarah-youtube"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>




		</div>
	</div>
</section>
<!-- END: WHY CHOOSE US SECTION -->
<!-- STart: WHY CHOOSE US details SECTION -->

<s:if test="#session.isCorporate == false">
	<section>
		<div class="choose-us">
			<div class="container clear-padding">
				<div class="col-sm-4">
					<div class="choose-us-item text-center">
						<div class="choose-icon">
							<i class="tayyarah-suitcase"></i>
						</div>
						<h4>Handpicked Tour</h4>

						<p>We have our travel network partners across globe to suggest
							you with the best logical routing and cater to customized package
							requirements</p>
						<a href="flightindex.jsp" class="btn btn-info">KNOW MORE</a>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="choose-us-item text-center">
						<div class="choose-icon">
							<i class="tayyarah-phone"></i>
						</div>
						<h4>Dedicated Support</h4>
						<p>We are available round the clock 365 days to cater to your
							needs. We would always love to hear your feedback about our
							services.</p>
						<a href="#/contactUs" class="btn btn-info">KNOW MORE</a>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="choose-us-item text-center">
						<div class="choose-icon">
							<i class="tayyarah-smile"></i>
						</div>
						<h4>Lowest Price Guarantee</h4>
						<p>Applies to genuine quotes from airlines and India
							registered businesses and websites for travel that
							originates/departs from India.</p>
						<a href="flightindex.jsp" class="btn btn-info">KNOW MORE</a>
					</div>
				</div>
			</div>
		</div>
	</section>

</s:if>


<!-- END: WHY CHOOSE US details SECTION -->
<!-- Your site ends -->

<script type="text/ng-template" id="customTemplate.html">
  <a>
      <span bind-html-unsafe="match.label | typeaheadHighlight:query"></span>
      <i></i>
  </a>
</script>

<script>
		function checkValid(textbox) {
			var name = $(textbox).val();
			if (name == '') {
				textbox.setCustomValidity('Enter the vaild destination city');
			} else {
				textbox.setCustomValidity('');
			}
		}
	
function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    if(value<9){
        value++;
            document.getElementById('number').value = value;
    }
}
function decrementValue()
{
    var value = parseInt(document.getElementById('number').value, 9);
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
            document.getElementById('number').value = value;
    }

}
$(function(){

	$('input[name="$A*D"]').keyup(function(){

	    var adultValue = $('input[name="$A*D"]').val();
	    if(adultValue >=9)
	    {
	     $('input[name="$A*D"]').val(9);
	     $('input[name="$K*D"]').val('');
	     $('input[name="$K*D"]').attr('disabled','disabled');  
	    }
	    else
	    {
	     $('input[name="$K*D"]').removeAttr('disabled'); 
	    }
	});
	$('input[name="$K*D"]').keyup(function(){
	    var adultValue = parseInt($('input[name="$A*D"]').val());
	    var kidValue = parseInt($('input[name="$K*D"]').val()); 
	    if(isNaN(kidValue))
	    {
	     kidValue =0;
	    }
	    var total = adultValue + kidValue;

	    if(total >=9)
	    {
	     $('input[name="$K*D"]').val(9-adultValue);
	    }
	    else
	    {
	     $('input[name="$K*D"]').removeAttr('disabled');
	     $('input[name="$I*T"]').val(9-total);
	    }
	   
	    
	});

	});


</script>


<s:if test="#session.isCorporate == true">
	<div data-ng-include="Corporatefooter"
		data-ng-controller="CorporateFooterCtrl"></div>
</s:if>
<s:else>
	<div data-ng-include="footer" data-ng-controller="FootCtrl"></div>
</s:else>