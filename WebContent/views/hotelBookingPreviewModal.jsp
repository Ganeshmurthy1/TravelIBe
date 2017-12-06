
<style>
.b-d-h-list .b-d-h-l p.h4 {
	font-size: 10px !important;
}

.modal-dialog .modal-content {
	margin-left: -96px;
}

.margintop85px {
	width: 119%;
}

.timeModal .modal-header {
	background: #3B7398;
	padding-top: 11px;
	border-radius: 7px 7px 0px 0px;
}

.timeModal .modal-header h4 {
	color: #FFF;
	line-height: 0.428571;
	padding-bottom: 11px;
}

.reviewRow {
	padding-left: 0px !important;
	padding-right: 0px !important;
}

.modelrowview {
	border: 1px solid #009688;
}

#datatable-icons .passno, #datatable-icons .passtit {
	float: left;
	font-size: 13px;
	padding-left: 10px;
	font-weight: 600;
}

#datatable-icons .passpp {
	color: #3b4874;
	float: left;
	font-size: 13px;
	padding-left: 10px;
	font-weight: 600;
	text-transform: uppercase;
}

#datatable-icons .passfn, #datatable-icons .passln {
	float: left;
	font-size: 13px;
	padding-left: 10px;
	font-weight: 600;
	text-transform: capitalize;
}

#datatable-icons .passmc, #datatable-icons .passsc {
	float: left;
	font-size: 10px;
	padding-left: 10px;
	font-weight: 600;
}

#datatable-icons .passam {
	font-size: 18px;
	padding-left: 10px;
	font-weight: 600;
}

.passengerDet {
	padding-left: 0px;
	border: 1px solid red;
}

.passall {
	border-right: 1px solid #009688;
}

.b-d-h-l  figure {
	margin: 7px;
}

.booking-details-heading .b-d-h-l .b-p-b {
	border-right: 1px solid #009688;
}

.booking-details-heading .b-d-h-l p.h4 {
	margin-bottom: 0px !important;
}

.b-p-b time {
	font-size: 10px !important;
}

.round-b-p-b {
	border-bottom: 1px solid #009688;
}

.b-p-b span {
	font-size: 10px !important;
}

.CompleteHeader {
	background: #d56100;
	padding-left: 4px;
	text-align: center;
	text-size: 18px;
	color: white;
}

.height20px {
	height: 20px;
}

.padding10px {
	padding: 10px;
}

.currencyFont {
	font-size: 18px;
	padding-left: 10px;
	font-weight: 600;
}
</style>
<div class="margintop85px modal-lg" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel">
	<div class="modal-content timeModal">
		<div class="modal-header">
			<h4 class="modal-title text-center">Booking Preview</h4>
		</div>
		<div class="modal-body">
			<div class="row">
				<div class="col-sm-12 col-xs-12 textJsutify">Kindly check all
					details before proceeding as this will charge your account.</div>
			</div>
			<div class="row modelrowview">
				<div class="col-md-12 col-xs-12 CompleteHeader">Hotels</div>
				<div class="col-md-12 col-xs-12">
					<div class="col-md-3 col-xs-3 padding10px img-hotprivew">
						<figure>
							<img src="{{hotelimage}}" class="img-responsive imgWidth">
						</figure>
					</div>

					<div class="col-md-9 col-xs-9 padding10px hotel-hotpredet">
						<div class="row">
							<div class="col-md-8 col-xs-12 bok-con-hotel text-left">
								<h4>
									<a>{{hotelinfo.basicPropertyInfo.hotelName}}</a>
								</h4>
								<h6>{{hotelinfo.basicPropertyInfo.address.addressLines[1]}}
								</h6>
								<p class="clearfix"
									data-ng-if="hotelinfo.basicPropertyInfo.hotel_Star  > 0 ">
									<a href="#" class="fa fa-star"
										data-ng-repeat="i in getNumber(hotelinfo.basicPropertyInfo.hotel_Star) track by $index"></a>
								</p>

							</div>

						</div>
						<div class="row rooms-ctci">
							<div class="col-sm-12 text-left margin-top-20px padding-0px">
								<div class="col-md-2 col-xs-6">
									<div class="font600">
										Room(s) <Span class="room-count">
											{{searchdata.noofrooms}}</Span>
									</div>
									<!--  <div class="text-center"> {{searchdata.noofrooms}}</div>  -->
								</div>
								<div class="col-md-4 col-xs-6">
									<div class="font600">Room Type</div>
									<div data-ng-repeat="roomtype in hotelinfo.roomRates.roomRates">
										<h6>{{getroomtypename(roomtype.roomTypeCode)}}</h6>
									</div>
								</div>
								<div class="col-md-3 col-xs-6">
									<div class="font600">Check in</div>
									<div>{{searchdata.datestart | date: 'EEE, MMM d'}}</div>
								</div>
								<div class="col-md-3 col-xs-6">
									<div class="font600">Check out</div>
									<div>{{searchdata.dateend | date: 'EEE, MMM d'}}</div>
								</div>



							</div>
						</div>

					</div>
				</div>
				<div class="col-md-12 col-xs-12 CompleteHeader height20px">Guest
					Details</div>

				<div class="col-md-12 col-xs-12">

					<div class="col-md-10 col-sm-10 col-xs-10">
						<div class="row passall ">
							<div
								class="col-md-1 col-sm-1 col-xs-1 padding-0px font600 hot-head">Sl
								No</div>
							<div
								class="col-md-1 col-sm-2 col-xs-2 padding-0px font600 hot-head">Title</div>
							<div
								class="col-md-4 col-xs-6 padding-0px font600 visible-xs hot-head">First
								Name &amp; Last Name</div>
							<div
								class="col-md-4 col-sm-4  padding-0px font600 hidden-xs hot-head">First
								Name</div>
							<div
								class="col-md-3 col-sm-3  padding-0px font600 hidden-xs hot-head">Last
								Name</div>
						</div>
						<div class="row passall"
							data-ng-repeat="passengerArray in ProfileDetails">

							<span
								class="col-md-1 col-sm-1 col-xs-1 passno padding-0px hot-dta">{{$index+1
								}}</span> <span
								class="col-md-1 col-sm-2 col-xs-2 passtit padding-0px hot-dta">{{passengerArray.customer.personName.namePrefix}}</span>
							<div class=" col-xs-6 passfn padding-0px visible-xs hot-dta">{{passengerArray.customer.personName.givenName}}&nbsp{{passengerArray.customer.personName.surname}}</div>
							<span
								class="col-md-4 col-sm-4  passfn padding-0px hidden-xs hot-dta">{{passengerArray.customer.personName.givenName}}</span>
							<span
								class="col-md-3 col-sm-3  passln padding-0px hidden-xs hot-dta">{{passengerArray.customer.personName.surname}}</span>

						</div>
					</div>
					<div
						class="col-md-2 col-sm-2 col-xs-2 currencyFont margin-top-10px">
						<span class="passam">{{totalPayable}}&nbsp;{{searchdata.currency}}</span>
					</div>
				</div>
			</div>
			<div></div>

		</div>
		<div class="modal-footer btnpads">
			<button class="btn btn-default bordergrey" ng-click="cancel()">Cancel</button>
			<button class="btn btn-info bookMobPreview" ng-click="continueBooking()">Continue</button>

		</div>
	</div>
</div>