<style>
.margintop85px {
	margin-top: 110px;
}

.bootstrap-datetimepicker-widget.dropdown-menu {
	width: auto;
	height: auto;
}

.bootstrap-datetimepicker-widget .datepicker table {
	width: auto;
	height: auto;
}
/* .bootstrap-datetimepicker-widget .datepicker table {width: 16em;height:16em;} */
</style>

<%@taglib prefix="s" uri="/struts-tags"%>
<%@taglib prefix="dj" uri="/struts-dojo-tags"%>
<div class="modal-dialog margintop85px" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel">
	<div class="modal-content timeModal">
		<div class="modal-header">
			<h4 class="modal-title text-center">Create Notification</h4>
		</div>
		<div class="modal-body" id="NotificationCreate">
			<form class="form-horizontal" name="myForm" id="myFormReset"
				data-ng-submit="addNotifications()">
				<input type="hidden" name="companyId" id="cmpanyId"
					value="<s:property value="%{#session.agent.Companyid}"/>">
				<input type="hidden" name="userid" id="userid"
					value="<s:property value="%{#session.agent.id}"/>">

				<div id="myfform">
					<div class="form-group">
						<label for="currency" class="col-sm-5 control-label">Title
						</label>
						<div class="col-sm-7">
							<input type="text" class="form-control input-sm" id="nTitle"
								required="required" name="description" id="description"
								placeholder="Notification Title" />
						</div>
					</div>
					<div class="form-group clearfix">
						<label for="comments" class="col-sm-5 control-label">From
							Date</label>
						<div class="col-sm-7">
							<div class="input-group date" id="datetimepicker1">
								<input type="text" class="form-control" id="fDate"
									onkeydown="return false;" /> <span class="input-group-addon"><span
									class="glyphicon-calendar glyphicon"></span></span>
							</div>
						</div>
					</div>
					<div class="form-group clearfix">
						<label for="comments" class="col-sm-5 control-label">To
							Date & Prefered Time</label>
						<div class="col-sm-7">
							<div class="input-group date" id="datetimepicker2">
								<input type="text" class="form-control" id="tDate"
									onkeydown="return false;" /> <span class="input-group-addon"><span
									class="glyphicon-calendar glyphicon"></span></span>
							</div>
						</div>
					</div>
					<div class="form-group clearfix">
						<label for="comments" class="col-sm-5 control-label">Prefered
							Time</label>
						<div class="col-sm-7">
							<div class='input-group date datepick3'>
								<input type='text' class="form-control" value="" id="ntime"
									onkeydown="return false;" disabled /> <span
									class="input-group-addon"> <span
									class="glyphicon glyphicon-time"></span>
								</span>
							</div>
						</div>
					</div>
					<div class="form-group clearfix">
						<label for="comments" class="col-sm-5 control-label">Notification
							Message </label>
						<div class="col-sm-7">
							<input type="text" class="form-control input-sm" name="comments"
								id="nMessage" placeholder="Write Message here"
								required="required">
						</div>
					</div>
				</div>
				<div class="modal-footer">
					<div class="text-center redText" data-ng-bind="NotificationMessage">Notification
						Created Successfully</div>
					<button type="button" class="btn btn-default btn-xs border-Btn"
						data-ng-click="close()">Close</button>
					<button type="submit" value="submit"
						class="btn btn-primary btn-xs " data-ng-click="submitted=true"
						data-ng-disabled="disableOk">
						{{ProceedText}}<span data-ng-show="loaderSpin" class="loaderSpan"><img
							src="images/loginLoader.gif" width="15px" height="15px" /></span>
					</button>
				</div>

			</form>
		</div>

	</div>
</div>

<script src="js/bootstrap-datetimepicker.js"></script>
<script>
	$('#fDate').datetimepicker({
		minDate : new Date(),
		format : 'DD-MM-YYYY'
	});

	$('#tDate').datetimepicker({
		minDate : new Date(),
		format : 'DD-MM-YYYY HH:mm',
		sideBySide : true,
	// showClose: true
	}).on("dp.change", function(e) {
		getTime();

	});

	var timeSelected = '';
	var FormatSelected = $(function defaultDateSelected() {
		timeSelected = $("#tDate").val();
		var arr = timeSelected.split(/-|\s|:/);
		var dateTime = arr[3] + ':' + arr[4];
		$('#ntime').val(dateTime);

	});

	function getTime() {
		timeSelected = $("#tDate").val();
		var arr = timeSelected.split(/-|\s|:/);
		var dateTime = arr[3] + ':' + arr[4];
		$('#ntime').val(dateTime);
		//  $('#datetimepicker2').data('DateTimePicker').hide();
	};
</script>
