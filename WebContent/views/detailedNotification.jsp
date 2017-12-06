
<div class="modal-dialog " tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel">
	<div class="modal-content">
		<div class="modal-header">
			<h4 class="modal-title text-center">view Notification</h4>
		</div>
		<div class="modal-body" id="NotificationCreate">
			<form class="form-horizontal" name="myForm" id="myFormReset"
				data-ng-submit="expireNotifications()">
				<div id="myfform">
					<div class="form-group">
						<label for="currency" class="col-sm-5 control-label">Title
						</label>
						<div class="col-sm-7">{{title}}</div>
					</div>
					<div class="form-group clearfix">
						<label for="comments" class="col-sm-5 control-label">Created
							At</label>
						<div class="col-sm-7">{{convertMS(createdAt)}}</div>
					</div>
					<div class="form-group clearfix">
						<label for="comments" class="col-sm-5 control-label">Notification
							Message </label>
						<div class="col-sm-7">{{comments}}</div>
					</div>
				</div>
				<div class="modal-footer">
					<div class="text-center redText" data-ng-bind="NotificationMessage">Notification
						Created Successfully</div>
					<button type="button" class="btn btn-default btn-xs border-Btn"
						data-ng-click="close()">Close</button>
					<button type="submit" value="submit"
						class="btn btn-primary btn-xs " data-ng-click="submitted=true">Ok</button>
				</div>

			</form>
		</div>

	</div>
</div>