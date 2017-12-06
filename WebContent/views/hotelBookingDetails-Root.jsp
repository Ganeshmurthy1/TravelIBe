<!-- <link href="css/{{companyCss}}.css"  rel="stylesheet"> -->

<%@taglib prefix="s" uri="/struts-tags"%>
<s:if test="#session.isCorporate == true">
	<input type="hidden" id="isCor" value="true">
</s:if>
<s:if test="#session.isCorporate == true || #session['agent'] != null ">
	<input type="hidden" name="isB2BandB2E" id="isB2BandB2E" value="true">
</s:if>
<div class=" container greyContainer">
	<div class="col-md-12 col-sm-12 col-xs-12 initialHeight">

		<div class="col-md-3 ">
			<div data-ng-include="Filter"></div>
		</div>
		<div class="col-md-9">
			<div data-ng-include="mainContent"></div>
		</div>


	</div>

</div>

