<%@taglib prefix="s" uri="/struts-tags"%>
<div class="">
	<div class="container" data-ng-style="{'display' : display}"
		data-ng-cloak>
		<div class="row rowsm">
			<div class="hotel-detail">

				<!-- "HotelSummary"-->
				<div data-ng-show="hidePoliciesTemplates">
					<div class="col-sm-12 mapcanvas">
						<h4 class="resultmap" id="slidemap-cancas">
							<span>Map</span>
						</h4>
						<div data-ng-show='isavilablemap' id="resultmap-canvas"></div>
						<div>
							<p data-ng-show="!isavilablemap">
								<span>No Information Available</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- hotel-detail page -->
	</div>

	<div class="container" data-ng-show="errordiv" data-ng-cloak>
		<div class="custom-er hidden-xs">
			<div class="custom-error text-center">
				<div class="error-mess">
					<p>
						<b>{{errormeg}}</b>
					</p>
					<form>
						<button type="submit" class="btn btn-primary but"
							data-ng-click="returnIndex()">Search again</button>
					</form>
				</div>
			</div>
		</div>

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
