<%@taglib prefix="s" uri="/struts-tags"%>

<style type="text/css">
#booktwodpd1>div>input, #booktwodpd2>div>input {
	border: 0;
	background-size: 0 2px, 100% 1px;
	background-repeat: no-repeat;
	background-position: center bottom, center calc(100% - 1px);
	transition: background 0s ease-out;
	vertical-align: middle;
	position: relative;
	z-index: 2;
	float: left;
	width: 100%;
	margin-bottom: 0;
	display: table-cell;
	padding-bottom: 5px;
	font-family: 'Open Sans', sans-serif;
}

.lint-useer {
	margin: 20px;
}

.home_classloading {
	padding: 30px;
	margin-top: 54px;
	margin-bottom: 10px;
	width: 100%;
	font-size: 14px;
	letter-spacing: 0.5px;
}

@import url(https://fonts.googleapis.com/css?family=Supermercado+One);

@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

.home_class {
	border-radius: 4px;
	padding: 20px;
	margin-top: -4px;
	margin-bottom: 10px;
	width: 100%;
	font-size: 14px;
	letter-spacing: 0.5px;
}

.home_class img {
	width: 100%;
	height: auto;
	max-width: 100%;
}

.home_1 {
	background: #3f7391;
	color: #fff;
	font-weight: 100;
}

.home_1 b {
	color: #fff;
}

.home_2 h5 {
	letter-spacing: 1px;
	text-align: right;
}

.home_2 {
	background: #fd9;
	color: #222;
	front-family:;
}

.home_3 {
	background: #fff;
	border: 2px solid #ddd;
	color: #222;
	font-weight: 100;
}

* {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	font-family: "Montserrat";
	-webkit-appearance: none;
}

h1, h2, h3, h4, h5, h6 {
	-webkit-margin-before: 1em;
	-webkit-margin-after: 1em;
}
</style>


<input type="hidden" name="ay" value="<s:property value="%{#session}"/>"
	id="apky">

<article class="container">
	<div class="row">
		<div class="home_class home_1">

			<h3>Bus Booking History</h3>

		</div>

		<script type="text/ng-template" id="custom-datepicker.html">
    <div class="enhanced-datepicker">
        <div class="proxied-field-wrap">
            <input type="text" ui-date-format="yy-mm-dd" ng-model="ngModel" ui-date="dateOptions"/>
        </div>
        <label>
             
        
        </label>
    </div>
</script>






		<div ng-show="loading"
			class=" col-md-12 history-loading home_classloading"></div>

		<div ng-hide="loading">
			<div ng-if="busbookinglists !=0 && busbookinglists !=undefined"
				class="col-sm-12">

				<form class="form-inline" data-ng-submit="Bookingsearch()">
					<div id="hdepe"></div>


					<div class=" col-md-12 home_class home_2">

						<h4 class="col-md-12" style="padding-bottom: 15px;">Bus
							Booking Date Search</h4>


						<div class="col-md-12">




							<div class="form-group col-md-4">
								<label for="exampleInputAmount"
									style="padding-left: 16px; padding-right: 10px;">From
									Date: </label>
								<div class="input-group">
									<!-- <input type="text" class="form-control" id="twodpd1"
										placeholder="MM/DD/YY" name="fromdate"> -->
									<input type="text" class="form-control" id="booktwodpd1"
										date-options="dateOptions" custom-datepicker />

									<div class="input-group-addon">
										<i class="fa fa-calendar"></i>
									</div>
								</div>
							</div>

							<div class="form-group col-md-4">
								<label for="exampleInputAmount"
									style="padding-left: 16px; padding-right: 10px;">End
									Date: </label>
								<div class="input-group">
									<input type="text" class="form-control" id="booktwodpd2"
										date-options="dateOptions" custom-datepicker />
									<div class="input-group-addon">
										<i class="fa fa-calendar"></i>
									</div>
								</div>
							</div>
							<div class="col-md-2 form-group rep-buto"
								style="padding-left: 16px; margin-top: -2%;">
								<button id="flighthistory" type="submit"
									data-ng-click="submitted == true" class="btn btn-primary">Show</button>
							</div>
							<div class="col-md-1" ng-if="!isdefaultHistory">
								<a ng-click="defaultpage()">Reset</a>
							</div>
						</div>
					</div>
				</form>

			</div>


			<div ng-if="isdefaultHistory" class="col-sm-12 ">
				<div class="table-responsive dash-table clearfix">

					<!-- testing -->

					<div ng-if="busbookinglists !=0 && busbookinglists !=undefined"
						class="box clearfix">
						<!-- <div class="box-body"> -->
						<table id="mytable" class="table table-striped ddd"
							data-sort-name="name" data-sort-order="desc">
							<thead>
								<tr>
									<th>S.No</th>
									<th>Order Id</th>
									<th>Bus Company Name</th>
									<th>Origin</th>
									<th>Destination</th>
									<th>Travel Date</th>
									<th>Departure Time</th>
									<th>Arrival Time</th>
									<th>Booking Date</th>
									<th>Price</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>

								<tr
									data-dir-paginate="(groupindex,bus) in busbookinglists | itemsPerPage:10">
									<td>{{groupindex + 1}}.</td>
									<td>{{bus.orderId}}</td>
									<td>{{bus.busCompanyName}}</td>
									<td>{{bus.origin}}</td>
									<td>{{bus.destination}}</td>
									<td>{{bus.travelDate |date:'dd-MM-yyyy' }}</td>
									<td>{{bus.departureTime}}</td>
									<td>{{bus.arrivalTime}}</td>
									<td>{{bus.busBookingDate}}</td>
									<td>{{bus.totalAmount}}</td>
									<td>{{bus.statusAction}}</td>
								</tr>

							</tbody>
						</table>
						<div style="text-align: center">
							<dir-pagination-controls max-size="5" direction-links="true"
								boundary-links="true"> </dir-pagination-controls>
						</div>
					</div>
					<div ng-if="busbookinglists ==0 || busbookinglists ==undefined">


						<div class=" col-md-12 home_class home_2">

							<h4 class="col-md-8">No Bus Booking Data in Your Account</h4>


							<div class="col-md-4">
								<button class="btn btn-primary" ng-click="returnIndex()"
									style="float: right;">Tayyarah Home</button>
							</div>


						</div>
					</div>


				</div>
			</div>
			<div ng-if="!isdefaultHistory" class="col-sm-12 ">
				<div class="table-responsive dash-table clearfix">

					<!-- testing -->

					<div
						ng-if="busbookingDatelists !=0 && busbookingDatelists !=undefined"
						class="box clearfix">
						<!-- <div class="box-body"> -->
						<table id="mytable" class="table table-striped ddd"
							data-sort-name="name" data-sort-order="desc">
							<thead>
								<tr>
									<th>S.No</th>
									<th>Order Id</th>
									<th>Bus Company Name</th>
									<th>Origin</th>
									<th>Destination</th>
									<th>Travel Date</th>
									<th>Departure Time</th>
									<th>Arrival Time</th>
									<th>Booking Date</th>
									<th>Price</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>

								<tr
									data-dir-paginate="(groupindex,bus) in busbookingDatelists | itemsPerPage:10">
									<td>{{groupindex + 1}}.</td>
									<td>{{bus.orderId}}</td>
									<td>{{bus.busCompanyName}}</td>
									<td>{{bus.origin}}</td>
									<td>{{bus.destination}}</td>
									<td>{{bus.travelDate |date:'dd-MM-yyyy' }}</td>
									<td>{{bus.departureTime}}</td>
									<td>{{bus.arrivalTime}}</td>
									<td>{{bus.busBookingDate}}</td>
									<td>{{bus.totalAmount}}</td>
									<td>{{bus.statusAction}}</td>
								</tr>

							</tbody>
						</table>
						<div style="text-align: center">
							<dir-pagination-controls max-size="5" direction-links="true"
								boundary-links="true"> </dir-pagination-controls>
						</div>
					</div>
					<div
						ng-if="busbookingDatelists ==0 || busbookingDatelists ==undefined">


						<div class=" col-md-12 home_class home_2">

							<h4 class="col-md-8">No Data Found For Particular Date</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</article>






