<%--  <%@ page session="true" %>
${sessionScope} --%>
<style type="text/css">
.sortorder:after {
	content: '\25b2';
}

.sortorder.reverse:after {
	content: '\25bc';
}

#leftloadings {
	padding-left: 10px;
}

.pricesmallload {
	width: 50px;
	float: right;
}
</style>

<!-- header ends here -->
<%@taglib prefix="s" uri="/struts-tags"%>
<s:if test="#session.isCorporate == true">
	<input type="hidden" name="isCorporate" id="isCorporate" value="true">
</s:if>

<div class="SessionTemplate">
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
	<div>
		<div class=" filterContainer">
			<div class="booking-details clearfix minheight250px"
				data-ng-show="MainContent" data-ng-cloak>
				<aside class="col-md-12 padZero" data-ng-show="fareloader"
					data-ng-cloak>
					<div class="offcanvas" id="fare">
						<div class="closebtn done">
							<button class="offcanvas__trigger--close btn" data-rel="fare">Done</button>
						</div>
						<div class="clearfix padding-top15px">
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
									<li data-ng-hide="infant== 0">Infant Taxes<span> x
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
											class="pull-right"
											data-ng-style="{ 'display' : isfareloaded}"> <i
												data-ng-class="classname"></i>{{managementFee}}
										</span><span id="leftloading" data-ng-show="farebeforeload"> <img
												src="images/priceloadingsmall.gif" class="pricesmallload"></span>
										</li>
									</div>
									<!-- #########gst price adding############# -->

									<div data-ng-show="GSTServiceTaxes">
										<li ng-if="CGSTTax !=0">CGST <span class="pull-right"
											data-ng-style="{ 'display' : isfareloaded}"> <i
												data-ng-class="classname"></i>{{CGSTTax}}
										</span><span id="leftloading" data-ng-show="farebeforeload"> <img
												src="images/priceloadingsmall.gif" class="pricesmallload"></span>
										</li>
										<li ng-if="SGSTTax !=0">SGST <span class="pull-right"
											data-ng-style="{ 'display' : isfareloaded}"> <i
												data-ng-class="classname"></i>{{SGSTTax}}
										</span><span id="leftloading" data-ng-show="farebeforeload"> <img
												src="images/priceloadingsmall.gif" class="pricesmallload"></span>
										</li>
										<li ng-if="IGSTTax !=0">IGST <span class="pull-right"
											data-ng-style="{ 'display' : isfareloaded}"> <i
												data-ng-class="classname"></i>{{IGSTTax}}
										</span><span id="leftloading" data-ng-show="farebeforeload"> <img
												src="images/priceloadingsmall.gif" class="pricesmallload"></span>
										</li>
										<li ng-if="UGSTTax !=0">UGST <span class="pull-right"
											data-ng-style="{ 'display' : isfareloaded}"> <i
												data-ng-class="classname"></i>{{UGSTTax}}
										</span><span id="leftloading" data-ng-show="farebeforeload"> <img
												src="images/priceloadingsmall.gif" class="pricesmallload"></span>
										</li>
										<li>GST <span class="pull-right"
											data-ng-style="{ 'display' : isfareloaded}"> <i
												data-ng-class="classname"></i>{{GSTTax}}
										</span><span id="leftloading" data-ng-show="farebeforeload"> <img
												src="images/priceloadingsmall.gif" class="pricesmallload"></span>
										</li>
										<li class="flightmanagement">Management Fee<span
											class="pull-right"
											data-ng-style="{ 'display' : isfareloaded}"> <i
												data-ng-class="classname"></i>{{managementFee}}
										</span><span id="leftloading" data-ng-show="farebeforeload"> <img
												src="images/priceloadingsmall.gif" class="pricesmallload"></span>
										</li>
									</div>

									<li data-ng-show="otherchargesB2C != undefined"
										id="B2Bothercharges">Conveyance Fee<span
										class="pull-right" data-ng-style="{ 'display' : isfareloaded}"
										id="otherchargetext"><i data-ng-class="classname"></i>
											{{getbasecurrencyvalue(otherchargesB2C,fareflightsegment.exchangeRate)}}</span><span
										id="leftloading" data-ng-show="farebeforeload"><img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span>
									</li>
									<li data-ng-show="IsLCC && IsLCC!=undefined">Extra Meal<span>
											({{totalplate}} Platter) </span><span class="pull-right"
										data-ng-style="{ 'display' : isfareloaded}"><i
											data-ng-class="classname"></i>{{mealprice |number : 2}}</span><span
										id="leftloading" data-ng-show="farebeforeload"><img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
									<li data-ng-show="IsLCC && IsLCC!=undefined">Extra Baggage<span>
											({{totalkg}} KG) </span><span class="pull-right"
										data-ng-style="{ 'display' : isfareloaded}"><i
											data-ng-class="classname"></i>{{baggageprice|number : 2}}</span><span
										id="leftloading" data-ng-show="farebeforeload"><img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>

									<li>Grand Total <span class="pull-right"
										data-ng-style="{ 'display' : isfareloaded}"><i
											data-ng-class="classname"></i><span>{{getbasecurrencyvalue(totalflightprice,fareflightsegment.exchangeRate)}}</span>
									</span><span id="leftloading" data-ng-show="farebeforeload"><img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>
									<li class="h3 grandpricetxt">Total Payable Amount<span
										class="pull-right" data-ng-style="{ 'display' : isfareloaded}"><i
											data-ng-class="classname"></i><span>{{getbasecurrencyvalue(totalpayableamt,fareflightsegment.exchangeRate)}}</span>
									</span><span id="leftloadings" data-ng-show="farebeforeload"><img
											src="images/priceloadingsmall.gif" class="pricesmallload"></span></li>

								</ul>
							</div>
						</div>
					</div>
					<!-- col-3 -->
				</aside>