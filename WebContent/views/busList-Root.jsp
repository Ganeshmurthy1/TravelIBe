<%@taglib prefix="s" uri="/struts-tags"%>
<div class=" container greyContainer">
	<div class="col-md-12 col-sm-12 col-xs-12 initialHeight">
		<div class="col-md-2 ">
			<div data-ng-include="filter"></div>
		</div>
		<div class="col-md-10">
			<div data-ng-include="Content"></div>
		</div>



	</div>

</div>


<script type="text/javascript">

$('#mark').click(function() {
	if ($("#markup").is(':visible') == false)
		$("#markup").show("slow");
	else
		$("#markup").hide();
}); 

function resizeImg() {
    var thisImg= $('.containerbusico');
    var refH = thisImg.height();
    var refW = thisImg.width();
    var refRatio = refW/refH;
    
    var imgH = thisImg.children("img").height();
    var imgW = thisImg.children("img").width();
    
    if ( (imgW/imgH) > refRatio ) { 
        thisImg.addClass("portrait");
        thisImg.removeClass("landscape");
    } else {
        thisImg.addClass("landscape");
        thisImg.removeClass("portrait");
    }
}

$(document).ready(resizeImg())

$(window).resize(function(){
    resizeImg();
});


</script>

