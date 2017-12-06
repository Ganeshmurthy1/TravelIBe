<!-- <link href="css/{{companyCss}}.css"  rel="stylesheet"> -->

<%@taglib prefix="s" uri="/struts-tags"%>
<div class=" container greyContainer">
	<div class="col-md-12 col-sm-12 col-xs-12 initialHeight">
		<div class="col-md-2 padLeft0px">
			<div data-ng-include="filter"></div>
		</div>
		<div class="col-md-10  ">
			<div data-ng-include="mainContent"></div>
		</div>
	</div>
</div>
