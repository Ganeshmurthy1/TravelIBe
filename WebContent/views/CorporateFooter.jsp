<%@taglib prefix="s" uri="/struts-tags"%>
<script src="js/featherlight.js"> </script>
<!-- START: FOOTER -->
<section id="footer">
	<footer>
		<div class="main-footer" style="padding: 10px !important;">
			<div class="container clear-padding">


				<div class="col-md-12 text-center we-accept">
					<ul class="policy-links">
						<li><a href="#/">Home</a></li>
						<li><a href="#/about">AboutUS</a></li>
						<li><a href="#/Disclaimer">Disclaimer</a></li>
						<li><a href="#/ContactUs">Contact</a></li>
						<li><a href="#/Cancellation">Cancellation / Refund policy</a></li>
						<li><a href="#/Privacypolicy">Privacy Policy</a></li>
						<li><a href="#/TermsandConditions">Terms and Conditions</a></li>

					</ul>


				</div>
			</div>
		</div>
		<div class="main-footer-nav ">
			<div class="container clear-padding">
				<div class="col-md-6 col-sm-6">
					<p>Copyright &copy; 2017 Tayyarah.com. All Rights Reserved.</p>
				</div>
				<div class="col-md-6 col-sm-6 col-md-12 text-right mob320width">
					<a href="http://www.intellicommsolutions.com/">Powered by :
						Intellicomm Solutions and Enterprise Pvt Ltd</a>
				</div>
			</div>
		</div>
	</footer>
</section>

<!-- END: FOOTER -->



<div class="livechat" style="position: fixed; bottom: 0px; right: 0px;">
	<div style="text-align: center; width: 201px; position: absolute">
		<div id="livezilla_tracking" style="display: none"></div>
	</div>
	<script src="js/tayycustom.js"></script>

	<!-- livezilla.net code (PLEASE PLACE IN BODY TAG) -->
	<script type="text/javascript">
  var script = document.createElement("script");script.async=true;script.type="text/javascript";
  var src = "https://tayyarah.com/livezilla/server.php?a=7353b&rqst=track&output=jcrpt&nse="+Math.random();setTimeout("script.src=src;document.getElementById('livezilla_tracking').appendChild(script)",1);
  </script>
	<noscript>
		<img
			src="https://tayyarah.com/livezilla/server.php?a=7353b&amp;rqst=track&amp;output=nojcrpt"
			width="0" height="0" style="visibility: hidden;" alt="">
	</noscript>
	<a
		href="javascript:void(window.open('https://tayyarah.com/livezilla/chat.php?a=74c4a','','width=610,height=760,left=0,top=0,resizable=yes,menubar=no,location=no,status=yes,scrollbars=yes'))"
		class="lz_cbl"> <!-- <img src="https://tayyarah.com/livezilla/image.php?a=d921b&amp;id=1&amp;type=inlay" width="201" height="53" style="border:0px;" alt="Tayyarah Live Chat"> -->
		<div style="margin-top: 2px; text-align: center; color: #fff">Tayyarah
			Live Chat</div>
	</a>

	<script>
                    
                    
                 // Fixed header
            		//-----------------------------------------------
            		headerTopHeight = $(".header-top").outerHeight(),
            		headerHeight = $("header.header.fixed").outerHeight();
            		$(window).resize(function() {
            			if(($(this).scrollTop() < headerTopHeight + headerHeight -5 ) && ($(window).width() > 767)) {
            				headerTopHeight = $(".header-top").outerHeight(),
            				headerHeight = $("header.header.fixed").outerHeight();
            			}
            		});

            		$(window).scroll(function() {
            			if (($(".header.fixed:not(.fixed-before)").length > 0)  && !($(".transparent-header .slideshow").length>0)) {
            				if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
            					$("body").addClass("fixed-header-on");
            					$(".header.fixed:not(.fixed-before)").addClass('animated object-visible fadeInDown');
            					
            				} else {
            					$("body").removeClass("fixed-header-on");
            					
            					$(".header.fixed:not(.fixed-before)").removeClass('animated object-visible fadeInDown fixheader');
            				}
            			} else if ($(".header.fixed:not(.fixed-before)").length > 0) {
            				if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
            					$("body").addClass("fixed-header-on"); 
            					$(".header.fixed:not(.fixed-before)").addClass('animated object-visible fadeInDown fixheader');
            				} else {
            					$("body").removeClass("fixed-header-on");
            					$(".header.fixed:not(.fixed-before)").removeClass('animated object-visible fadeInDown fixheader');
            				}
            			};
            		});

            		$(window).scroll(function() {
            			if (($(".header.fixed.fixed-before").length > 0)  && !($(".transparent-header .slideshow").length>0)) {
            				if (($(this).scrollTop() > headerTopHeight) && ($(window).width() > 767)) {
            					 $("body").addClass("fixed-header-on"); 
            					$(".header.fixed.fixed-before").addClass('object-visible');
            					
            				} else {
            					 $("body").removeClass("fixed-header-on");
            					
            					$(".header.fixed.fixed-before").removeClass('object-visible');
            				}
            			} else if ($(".header.fixed.fixed-before").length > 0) {
            				if (($(this).scrollTop() > headerTopHeight) && ($(window).width() > 767)) {
            					 $("body").addClass("fixed-header-on"); 
            					$(".header.fixed.fixed-before").addClass('object-visible');
            				} else {
            					$("body").removeClass("fixed-header-on");
            					$(".header.fixed.fixed-before").removeClass('object-visible');
            				}
            			};
            		});

       
</script>