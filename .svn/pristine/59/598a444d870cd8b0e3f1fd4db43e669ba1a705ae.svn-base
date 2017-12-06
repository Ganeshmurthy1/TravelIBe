<div>
	<!-- header ends here -->
	<%@taglib prefix="s" uri="/struts-tags"%>
	<div class="spinloading" data-ng-show="pdfloader" data-ng-cloak>
		<img alt="loading" src="./images/spin.gif">
		<p>Please wait while we are generating HotelVoucher Pdf file</p>
	</div>

	<div class="seeeeee" data-ng-show="bookconfirmloader" data-ng-cloak>

		<div class="visible-xs gradient">
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
		<div class="search-advertisement-box">
			<div class="clearfix">
				<img src="images/spin.gif" style="width: 50px;" alt="loading......" />
				<p class="h5">Please wait while your booking being process</p>

			</div>
		</div>
	</div>
	<div data-ng-show="PdfShowDiv">
		<form id="form">
			<div class="booking-details clearfix pdfPageWithPAd" id="print-page">
				<div class="printicopdf">
					<p class="print-icons">
						<a data-ng-click="downloadFile()"><i
							class="tayyarah-file-pdf-o" id="create_pdf"></i> </a>

					</p>
				</div>


				<div class="print-this" id="booking-hotel"
					style="background-color: #ffffff">
					<input type="hidden" value="" id="hotelorder">

					<div class="row">
						<div class="col-sm-12 clearfix">
							<div id="display-api-content" class="container"></div>
						</div>
					</div>
				</div>
			</div>
		</form>
	</div>
	<div class="print-contai" data-ng-show="errordiv" data-ng-cloak>
		<div class="custom-er">
			<div class="visible-xs gradient-error">
				<div class="spinner-error">
					<div class="double-bounce1"></div>
					<div class="double-bounce2"></div>
				</div>
				<form ng-submit="reloadToIndex()">
					<button type="submit" class="btn btn-primary but"
						ng-click="submitted== true">Search again</button>
				</form>
			</div>
			<div class="custom-error text-center">
				<div class="error-mess">
					<p>
						<b>{{bookingComments}}</b>

					</p>
					<form ng-submit="reloadToIndex()">
						<button type="submit" class="btn btn-primary but"
							ng-click="submitted== true">Search again</button>
					</form>

				</div>
			</div>
		</div>
	</div>
</div>
<!-- Your site ends -->
<script>
	
</script>



<script type="text/javascript">
	var query = (typeof (custom) == "undefined") ? window.location.search
			.substring(1) : custom;
	var hu = query;
	var gy = hu.split("&");
	//console.log(gy);
	var vars = [], hash;
	var adult = [], hash;
	var child = [], hash;
	var infant = [], hash;
	var adfname = [], adlname = [], admname = [], adtitle = [], adage = [];
	var chfname = [], chlname = [], chmname = [], chtitle = [], chage = [];
	for (i = 0; i < gy.length; i++) {

		var ft = gy[i].split("=");
		if (ft[0] == 'adultfirstName') {
			adfname.push(ft[1]);
			adult['adultfirst'] = adfname;
		}
		if (ft[0] == 'adultlastName') {
			adlname.push(ft[1]);
			adult['adultlast'] = adlname;

		}
		if (ft[0] == 'adultmiddleName') {
			admname.push(ft[1]);
			adult['adultmiddle'] = admname;

		}
		if (ft[0] == 'adulttitle') {
			adtitle.push(ft[1]);
			adult['adulttitle'] = adtitle;

		}
		if (ft[0] == 'adultage') {
			adage.push(ft[1]);
			adult['adultage'] = adage;

		}

		if (ft[0] == 'childfirstName') {
			chfname.push(ft[1]);
			child['childfirst'] = chfname;
		}
		if (ft[0] == 'childlastName') {
			chlname.push(ft[1]);
			child['childlast'] = chlname;

		}
		if (ft[0] == 'childmiddleName') {
			chmname.push(ft[1]);
			child['childmiddle'] = chmname;

		}
		if (ft[0] == 'childtitle') {
			chtitle.push(ft[1]);
			child['childtitle'] = chtitle;

		}
		if (ft[0] == 'childage') {
			chage.push(ft[1]);
			child['childage'] = chage;

		}

		vars[ft[0]] = ft[1];

	}
</script>
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

<script>
	$(document).ready(function() {
		$('#fare, #searchrefine').iptOffCanvas({
			baseClass : 'offcanvas',
			type : 'left' // top, right, bottom, left.
		});
	});
</script>
