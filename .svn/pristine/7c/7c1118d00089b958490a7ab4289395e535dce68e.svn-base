<style>
.spinloading {
	position: fixed;
	z-index: 9999;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
	text-align: center;
}

.spinloading img {
	padding-top: 30px !important;
	width: 63px !important;
}

.spinloading p {
	margin-top: 10px;
	color: #fff;
}

#display-api-Roundcontent {
	border: 1px solid #000 !important;
}

#print-page {
	width: 80% !important;
	margin: 0 auto;
	padding: 1% 0 5%;
	min-height: 450px;
}

#print-page .print-this {
	border: 5px solid #ccc;
	width: 70% !important;
	margin-left: 15%;
	padding: 40px;
}
</style>
<%@taglib prefix="s" uri="/struts-tags"%>
<!--  <div data-ng-include="header" data-ng-controller="HeadCtrl"></div> -->
<div class="spinloading" data-ng-show="pdfloader" data-ng-cloak>
	<img alt="loading" src="./images/spin.gif">
	<p>Please wait while we are generating FlightVoucher Pdf file</p>
</div>

<div class="spinloading" data-ng-show="ticketprocessloader"
	data-ng-cloak>
	<img alt="loading" src="./images/spin.gif">
	<p>{{processcomments}}</p>
</div>


<div class="seeeeee" data-ng-show="bookconfirmloader" data-ng-cloak>
	<div class="search-advertisement-box">
		<div class="clearfix">
			<img class="flightloading-image" src="images/spin.gif"
				alt="Loading..." />
			<p class="h5">Please wait, your booking is being proccessed</p>

		</div>
	</div>
</div>

<div class="print-contai" data-ng-show="contentloaded" data-ng-cloak
	id="dvContainer">
	<form id="form">
		<div class="booking-details clearfix" id="print-page">
			<div class="col-sm-12">
				<div class="row">
					<div class="col-md-offset-1 col-md-10 confirm"
						data-ng-show="TicketingStatus">
						<a class="btn btn-primary" data-toggle="modal"
							data-target="#myModal" data-ng-click="showmodel('Confirm')"
							data-ng-show="bookingComments == 'Hold'"> <i
							class="fa fa-file"></i>Confirm Ticket
						</a> <a class="btn btn-danger" data-toggle="modal"
							data-target="#myModal" data-ng-click="showmodel('Release')"
							data-ng-show="bookingComments == 'Hold' || bookingComments == 'Failed' ">
							<i class="fa fa-file"></i> Cancel/Release Ticket
						</a>
					</div>
				</div>
				<div class="row print-contai" data-ng-show="contentloaded">

					<div class="col-md-12">
						<form id="form">
							<div class="booking-details clearfix" id="print-page">
								<div class="printicopdf">
									<p class="print-icons">
										<a><i class="tayyarah-file-pdf-o" id="create_pdf"
											data-ng-click="downloadFile()"></i></a>
									</p>
								</div>

								<div class="" style="background-color: #ffffff">

									<div class="row">
										<input type="hidden" value="" id="orderIdVal" />
										<div class="col-sm-12 clearfix ">
											<div id="display-api-Roundcontent" class=""></div>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>

				</div>

			</div>
			<div id="myModal" class="modal fade" role="dialog">
				<div class="modal-dialog">
					<!-- Modal content-->
					<div class="modal-content">
						<div class="modal-header">
							<!--  <button type="button" class="close" data-dismiss="modal">&times;</button> -->
							<h4 class="modal-title">{{modeltitle}}</h4>
						</div>
						<div class="modal-body">
							<p>
								{{modelcontent}} <span style="color: red;">{{pnr}}</span>
							</p>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-default"
								data-dismiss="modal" data-ng-click="showmodel('Proceed')">Proceed</button>
							<button type="button" class="btn btn-default"
								data-dismiss="modal">Close</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</form>
</div>

<!-- header ends here -->

<div class="seeeeee" data-ng-show="errordiv" data-ng-cloak>
	<div class="custom-er hidden-xs">

		<div class="custom-error text-center">
			<div class="error-mess">
				<p>
					<b>{{bookingComments}}</b>
				</p>
				<form ng-submit="returnToindex()">
					<button type="submit" ng-click="submitted == true"
						class="btn btn-primary but">Search again</button>
				</form>
			</div>
		</div>
	</div>
	<div class="visible-xs gradient-error ">

		<div class="spinner-error">
			<div class="double-bounce1"></div>
			<div class="double-bounce2"></div>
		</div>
		<div class="col-xs-12 mobContinue">
			<p class="col-xs-12 text-center">
				<b class="text-center whiteText">{{bookingComments}}</b>
			</p>
		</div>
		<form class="col-xs-12 mobContinue" ng-submit="returnToindex()">
			<button type="submit" ng-click="submitted == true"
				class="btn btn-primary but">Search again</button>
		</form>

	</div>
</div>
<div data-ng-include="footer" data-ng-controller="FootCtrl"></div>



<script>
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
		
	

	</script>

