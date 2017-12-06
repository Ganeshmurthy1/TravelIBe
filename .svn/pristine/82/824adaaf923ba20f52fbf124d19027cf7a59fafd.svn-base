var query = (typeof(custom)=="undefined") ? window.location.search.substring(1) : custom;
    var hu = query;     
    var gy = hu.split("&");    
     var vars = [], hash;
   
    for (i=0;i<gy.length;i++) {
      var ft = gy[i].split("=");   
      
      vars[ft[0]] = ft[1];    
    
    }
	
	$(document).on("click", ".cancelpolicymodel", function () {
	     var rateplancode = $(this).data('rateplancode');
	     var roomindex = $(this).data('roomindex');
	     
	   var des =  angular.element(document.getElementsByClassName('cancelpolicymodel')).scope().getCancelationPolicy(rateplancode,roomindex);
	   
	});
  
   function roomchange(currentobj)
   {	 
  var optionSelected = $("#"+currentobj.id+" option:selected").val();    	        	
  var selectingroom = $("#"+currentobj.id+"" ).attr('class');    	        	    
  $('.roomtype'+selectingroom).hide();    	           
  $('#' + optionSelected).show();
  $('#totalprice').text();    	         
   angular.element(document.getElementById(currentobj.id)).scope().roomchange(selectingroom,optionSelected);
     //angular.element('#Roomcontroller').scope().roomchange();
   }
  
   $("input:checkbox").on('click', function() {
	   // in the handler, 'this' refers to the box clicked on
	   var $box = $(this);
	   
	   if ($box.is(":checked")) {
	     // the name of the box is retrieved using the .attr() method
	     // as it is assumed and expected to be immutable
	     var group = "input:checkbox[name='" + $box.attr("name") + "']";
	     // the checked state of the group/box on the other hand will change
	     // and the current value is retrieved using .prop() method
	     $(group).prop("checked", false);
	     $box.prop("checked", true);
	   } else {
	     $box.prop("checked", false);
	   }
	 });

  
	
	 $(document).ready(function() {
		 setTimeout(function() {
		 !function(e){"use strict";var i={item:3,autoWidth:!1,slideMove:1,slideMargin:10,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:400,auto:!1,loop:!1,slideEndAnimation:!0,pause:2e3,keyPress:!1,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(){},onSliderLoad:function(){},onBeforeSlide:function(){},onAfterSlide:function(){},onBeforeNextSlide:function(){},onBeforePrevSlide:function(){}};e.fn.lightSlider=function(t){if(0===this.length)return this;if(this.length>1)return this.each(function(){e(this).lightSlider(t)}),this;var n={},l=e.extend(!0,{},i,t),a={},s=this;n.$el=this,"fade"===l.mode&&(l.vertical=!1);var o=s.children(),r=e(window).width(),d=null,c=null,f=0,h=0,u=!1,g=0,v="",p=0,m=l.vertical===!0?"height":"width",S=l.vertical===!0?"margin-bottom":"margin-right",M=0,b=0,C=0,T=0,x=null,w="ontouchstart"in document.documentElement,P={};return P.chbreakpoint=function(){if(r=e(window).width(),l.responsive.length){var i;if(l.autoWidth===!1&&(i=l.item),r<l.responsive[0].breakpoint)for(var t=0;t<l.responsive.length;t++)r<l.responsive[t].breakpoint&&(d=l.responsive[t].breakpoint,c=l.responsive[t]);if("undefined"!=typeof c&&null!==c)for(var n in c.settings)c.settings.hasOwnProperty(n)&&("undefined"!=typeof a[n]&&null!==a[n]||(a[n]=l[n]),l[n]=c.settings[n]);if(!e.isEmptyObject(a)&&r>l.responsive[0].breakpoint)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);l.autoWidth===!1&&M>0&&C>0&&i!==l.item&&(p=Math.round(M/((C+l.slideMargin)*l.slideMove)))}},P.calSW=function(){l.autoWidth===!1&&(C=(g-(l.item*l.slideMargin-l.slideMargin))/l.item)},P.calWidth=function(e){var i=e===!0?v.find(".lslide").length:o.length;if(l.autoWidth===!1)h=i*(C+l.slideMargin);else{h=0;for(var t=0;i>t;t++)h+=parseInt(o.eq(t).width())+l.slideMargin}return h},n={doCss:function(){var e=function(){for(var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],i=document.documentElement,t=0;t<e.length;t++)if(e[t]in i.style)return!0};return!(!l.useCSS||!e())},keyPress:function(){l.keyPress&&e(document).on("keyup.lightslider",function(i){e(":focus").is("input, textarea")||(i.preventDefault?i.preventDefault():i.returnValue=!1,37===i.keyCode?(s.goToPrevSlide(),clearInterval(x)):39===i.keyCode&&(s.goToNextSlide(),clearInterval(x)))})},controls:function(){l.controls&&(s.after('<div class="lSAction"><a class="lSPrev">'+l.prevHtml+'</a><a class="lSNext">'+l.nextHtml+"</a></div>"),l.autoWidth?P.calWidth(!1)<g&&v.find(".lSAction").hide():f<=l.item&&v.find(".lSAction").hide(),v.find(".lSAction a").on("click",function(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,"lSPrev"===e(this).attr("class")?s.goToPrevSlide():s.goToNextSlide(),clearInterval(x),!1}))},initialStyle:function(){var e=this;"fade"===l.mode&&(l.autoWidth=!1,l.slideEndAnimation=!1),l.auto&&(l.slideEndAnimation=!1),l.autoWidth&&(l.slideMove=1,l.item=1),l.loop&&(l.slideMove=1,l.freeMove=!1),l.onBeforeStart.call(this,s),P.chbreakpoint(),s.addClass("lightSlider").wrap('<div class="lSSlideOuter '+l.addClass+'"><div class="lSSlideWrapper"></div></div>'),v=s.parent(".lSSlideWrapper"),l.rtl===!0&&v.parent().addClass("lSrtl"),l.vertical?(v.parent().addClass("vertical"),g=l.verticalHeight,v.css("height",g+"px")):g=s.outerWidth(),o.addClass("lslide"),l.loop===!0&&"slide"===l.mode&&(P.calSW(),P.clone=function(){if(P.calWidth(!0)>g){for(var i=0,t=0,n=0;n<o.length&&(i+=parseInt(s.find(".lslide").eq(n).width())+l.slideMargin,t++,!(i>=g+l.slideMargin));n++);var a=l.autoWidth===!0?t:l.item;if(a<s.find(".clone.left").length)for(var r=0;r<s.find(".clone.left").length-a;r++)o.eq(r).remove();if(a<s.find(".clone.right").length)for(var d=o.length-1;d>o.length-1-s.find(".clone.right").length;d--)p--,o.eq(d).remove();for(var c=s.find(".clone.right").length;a>c;c++)s.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(s),p++;for(var f=s.find(".lslide").length-s.find(".clone.left").length;f>s.find(".lslide").length-a;f--)s.find(".lslide").eq(f-1).clone().removeClass("lslide").addClass("clone left").prependTo(s);o=s.children()}else o.hasClass("clone")&&(s.find(".clone").remove(),e.move(s,0))},P.clone()),P.sSW=function(){f=o.length,l.rtl===!0&&l.vertical===!1&&(S="margin-left"),l.autoWidth===!1&&o.css(m,C+"px"),o.css(S,l.slideMargin+"px"),h=P.calWidth(!1),s.css(m,h+"px"),l.loop===!0&&"slide"===l.mode&&u===!1&&(p=s.find(".clone.left").length)},P.calL=function(){o=s.children(),f=o.length},this.doCss()&&v.addClass("usingCss"),P.calL(),"slide"===l.mode?(P.calSW(),P.sSW(),l.loop===!0&&(M=e.slideValue(),this.move(s,M)),l.vertical===!1&&this.setHeight(s,!1)):(this.setHeight(s,!0),s.addClass("lSFade"),this.doCss()||(o.fadeOut(0),o.eq(p).fadeIn(0))),l.loop===!0&&"slide"===l.mode?o.eq(p).addClass("active"):o.first().addClass("active")},pager:function(){var e=this;if(P.createPager=function(){T=(g-(l.thumbItem*l.thumbMargin-l.thumbMargin))/l.thumbItem;var i=v.find(".lslide"),t=v.find(".lslide").length,n=0,a="",o=0;for(n=0;t>n;n++){"slide"===l.mode&&(l.autoWidth?o+=(parseInt(i.eq(n).width())+l.slideMargin)*l.slideMove:o=n*((C+l.slideMargin)*l.slideMove));var r=i.eq(n*l.slideMove).attr("data-thumb");if(a+=l.gallery===!0?'<li style="width:100%;'+m+":"+T+"px;"+S+":"+l.thumbMargin+'px"><a href="#" ><img src="'+r+'"  /></a></li>':'<li><a href="#">'+(n+1)+"</a></li>","slide"===l.mode&&o>=h-g-l.slideMargin){n+=1;var d=2;l.autoWidth&&(a+='<li><a href="#">'+(n+1)+"</a></li>",d=1),d>n?(a=null,v.parent().addClass("noPager")):v.parent().removeClass("noPager");break}}var c=v.parent();c.find(".lSPager").html(a),l.gallery===!0&&(l.vertical===!0&&c.find(".lSPager").css("width",l.vThumbWidth+"px"),b=n*(l.thumbMargin+T)+.5,c.find(".lSPager").css({property:b+"px","transition-duration":l.speed+"ms"}),l.vertical===!0&&v.parent().css("padding-right",l.vThumbWidth+l.galleryMargin+"px"),c.find(".lSPager").css(m,b+"px"));var f=c.find(".lSPager").find("li");f.first().addClass("active"),f.on("click",function(){return l.loop===!0&&"slide"===l.mode?p+=f.index(this)-c.find(".lSPager").find("li.active").index():p=f.index(this),s.mode(!1),l.gallery===!0&&e.slideThumb(),clearInterval(x),!1})},l.pager){var i="lSpg";l.gallery&&(i="lSGallery"),v.after('<ul class="lSPager '+i+'"></ul>');var t=l.vertical?"margin-left":"margin-top";v.parent().find(".lSPager").css(t,l.galleryMargin+"px"),P.createPager()}setTimeout(function(){P.init()},0)},setHeight:function(e,i){var t=null,n=this;t=l.loop?e.children(".lslide ").first():e.children().first();var a=function(){var n=t.outerHeight(),l=0,a=n;i&&(n=0,l=100*a/g),e.css({height:n+"px","padding-bottom":l+"%"})};a(),t.find("img").length?t.find("img")[0].complete?(a(),x||n.auto()):t.find("img").load(function(){setTimeout(function(){a(),x||n.auto()},100)}):x||n.auto()},active:function(e,i){this.doCss()&&"fade"===l.mode&&v.addClass("on");var t=0;if(p*l.slideMove<f){e.removeClass("active"),this.doCss()||"fade"!==l.mode||i!==!1||e.fadeOut(l.speed),t=i===!0?p:p*l.slideMove;var n,a;i===!0&&(n=e.length,a=n-1,t+1>=n&&(t=a)),l.loop===!0&&"slide"===l.mode&&(t=i===!0?p-s.find(".clone.left").length:p*l.slideMove,i===!0&&(n=e.length,a=n-1,t+1===n?t=a:t+1>n&&(t=0))),this.doCss()||"fade"!==l.mode||i!==!1||e.eq(t).fadeIn(l.speed),e.eq(t).addClass("active")}else e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==l.mode||i!==!1||(e.fadeOut(l.speed),e.eq(t).fadeIn(l.speed))},move:function(e,i){l.rtl===!0&&(i=-i),this.doCss()?l.vertical===!0?e.css({transform:"translate3d(0px, "+-i+"px, 0px)","-webkit-transform":"translate3d(0px, "+-i+"px, 0px)"}):e.css({transform:"translate3d("+-i+"px, 0px, 0px)","-webkit-transform":"translate3d("+-i+"px, 0px, 0px)"}):l.vertical===!0?e.css("position","relative").animate({top:-i+"px"},l.speed,l.easing):e.css("position","relative").animate({left:-i+"px"},l.speed,l.easing);var t=v.parent().find(".lSPager").find("li");this.active(t,!0)},fade:function(){this.active(o,!1);var e=v.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;P.calSlide=function(){h>g&&(M=e.slideValue(),e.active(o,!1),M>h-g-l.slideMargin?M=h-g-l.slideMargin:0>M&&(M=0),e.move(s,M),l.loop===!0&&"slide"===l.mode&&(p>=f-s.find(".clone.left").length/l.slideMove&&e.resetSlide(s.find(".clone.left").length),0===p&&e.resetSlide(v.find(".lslide").length)))},P.calSlide()},resetSlide:function(e){var i=this;v.find(".lSAction a").addClass("disabled"),setTimeout(function(){p=e,v.css("transition-duration","0ms"),M=i.slideValue(),i.active(o,!1),n.move(s,M),setTimeout(function(){v.css("transition-duration",l.speed+"ms"),v.find(".lSAction a").removeClass("disabled")},50)},l.speed+100)},slideValue:function(){var e=0;if(l.autoWidth===!1)e=p*((C+l.slideMargin)*l.slideMove);else{e=0;for(var i=0;p>i;i++)e+=parseInt(o.eq(i).width())+l.slideMargin}return e},slideThumb:function(){var e;switch(l.currentPagerPosition){case"left":e=0;break;case"middle":e=g/2-T/2;break;case"right":e=g-T}var i=p-s.find(".clone.left").length,t=v.parent().find(".lSPager");"slide"===l.mode&&l.loop===!0&&(i>=t.children().length?i=0:0>i&&(i=t.children().length));var n=i*(T+l.thumbMargin)-e;n+g>b&&(n=b-g-l.thumbMargin),0>n&&(n=0),this.move(t,n)},auto:function(){l.auto&&(x=setInterval(function(){s.goToNextSlide()},l.pause))},touchMove:function(e,i){if(v.css("transition-duration","0ms"),"slide"===l.mode){var t=e-i,n=M-t;if(n>=h-g-l.slideMargin)if(l.freeMove===!1)n=h-g-l.slideMargin;else{var a=h-g-l.slideMargin;n=a+(n-a)/5}else 0>n&&(l.freeMove===!1?n=0:n/=5);this.move(s,n)}},touchEnd:function(e){if(v.css("transition-duration",l.speed+"ms"),clearInterval(x),"slide"===l.mode){var i=!1,t=!0;M-=e,M>h-g-l.slideMargin?(M=h-g-l.slideMargin,l.autoWidth===!1&&(i=!0)):0>M&&(M=0);var n=function(e){var t=0;if(i||e&&(t=1),l.autoWidth)for(var n=0,a=0;a<o.length&&(n+=parseInt(o.eq(a).width())+l.slideMargin,p=a+t,!(n>=M));a++);else{var s=M/((C+l.slideMargin)*l.slideMove);p=parseInt(s)+t,M>=h-g-l.slideMargin&&s%1!==0&&p++}};e>=l.swipeThreshold?(n(!1),t=!1):e<=-l.swipeThreshold&&(n(!0),t=!1),s.mode(t),this.slideThumb()}else e>=l.swipeThreshold?s.goToPrevSlide():e<=-l.swipeThreshold&&s.goToNextSlide()},enableDrag:function(){var i=this;if(!w){var t=0,n=0,a=!1;v.find(".lightSlider").addClass("lsGrab"),v.on("mousedown",function(i){return g>h&&0!==h?!1:void("lSPrev"!==e(i.target).attr("class")&&"lSNext"!==e(i.target).attr("class")&&(t=l.vertical===!0?i.pageY:i.pageX,a=!0,i.preventDefault?i.preventDefault():i.returnValue=!1,v.scrollLeft+=1,v.scrollLeft-=1,v.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(x)))}),e(window).on("mousemove",function(e){a&&(n=l.vertical===!0?e.pageY:e.pageX,i.touchMove(n,t))}),e(window).on("mouseup",function(s){if(a){v.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),a=!1,n=l.vertical===!0?s.pageY:s.pageX;var o=n-t;Math.abs(o)>=l.swipeThreshold&&e(window).on("click.ls",function(i){i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopImmediatePropagation(),i.stopPropagation(),e(window).off("click.ls")}),i.touchEnd(o)}})}},enableTouch:function(){var e=this;if(w){var i={},t={};v.on("touchstart",function(e){t=e.originalEvent.targetTouches[0],i.pageX=e.originalEvent.targetTouches[0].pageX,i.pageY=e.originalEvent.targetTouches[0].pageY,clearInterval(x)}),v.on("touchmove",function(n){if(g>h&&0!==h)return!1;var a=n.originalEvent;t=a.targetTouches[0];var s=Math.abs(t.pageX-i.pageX),o=Math.abs(t.pageY-i.pageY);l.vertical===!0?(3*o>s&&n.preventDefault(),e.touchMove(t.pageY,i.pageY)):(3*s>o&&n.preventDefault(),e.touchMove(t.pageX,i.pageX))}),v.on("touchend",function(){if(g>h&&0!==h)return!1;var n;n=l.vertical===!0?t.pageY-i.pageY:t.pageX-i.pageX,e.touchEnd(n)})}},build:function(){var e=this;e.initialStyle(),this.doCss()&&(l.enableTouch===!0&&e.enableTouch(),l.enableDrag===!0&&e.enableDrag()),e.pager(),e.controls(),e.keyPress()}},n.build(),P.init=function(){P.chbreakpoint(),l.vertical===!0?(g=l.item>1?l.verticalHeight:o.outerHeight(),v.css("height",g+"px")):g=v.outerWidth(),l.loop===!0&&"slide"===l.mode&&P.clone(),P.calL(),"slide"===l.mode&&s.removeClass("lSSlide"),"slide"===l.mode&&(P.calSW(),P.sSW()),setTimeout(function(){"slide"===l.mode&&s.addClass("lSSlide")},1e3),l.pager&&P.createPager(),l.adaptiveHeight===!0&&l.vertical===!1&&s.css("height",o.eq(p).outerHeight(!0)),l.adaptiveHeight===!1&&("slide"===l.mode?l.vertical===!1?n.setHeight(s,!1):n.auto():n.setHeight(s,!0)),l.gallery===!0&&n.slideThumb(),"slide"===l.mode&&n.slide(),l.autoWidth===!1?o.length<=l.item?v.find(".lSAction").hide():v.find(".lSAction").show():P.calWidth(!1)<g&&0!==h?v.find(".lSAction").hide():v.find(".lSAction").show()},s.goToPrevSlide=function(){if(p>0)l.onBeforePrevSlide.call(this,s,p),p--,s.mode(!1),l.gallery===!0&&n.slideThumb();else if(l.loop===!0){if(l.onBeforePrevSlide.call(this,s,p),"fade"===l.mode){var e=f-1;p=parseInt(e/l.slideMove)}s.mode(!1),l.gallery===!0&&n.slideThumb()}else l.slideEndAnimation===!0&&(s.addClass("leftEnd"),setTimeout(function(){s.removeClass("leftEnd")},400))},s.goToNextSlide=function(){var e=!0;if("slide"===l.mode){var i=n.slideValue();e=i<h-g-l.slideMargin}p*l.slideMove<f-l.slideMove&&e?(l.onBeforeNextSlide.call(this,s,p),p++,s.mode(!1),l.gallery===!0&&n.slideThumb()):l.loop===!0?(l.onBeforeNextSlide.call(this,s,p),p=0,s.mode(!1),l.gallery===!0&&n.slideThumb()):l.slideEndAnimation===!0&&(s.addClass("rightEnd"),setTimeout(function(){s.removeClass("rightEnd")},400))},s.mode=function(e){l.adaptiveHeight===!0&&l.vertical===!1&&s.css("height",o.eq(p).outerHeight(!0)),u===!1&&("slide"===l.mode?n.doCss()&&(s.addClass("lSSlide"),""!==l.speed&&v.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&v.css("transition-timing-function",l.cssEasing)):n.doCss()&&(""!==l.speed&&s.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&s.css("transition-timing-function",l.cssEasing))),e||l.onBeforeSlide.call(this,s,p),"slide"===l.mode?n.slide():n.fade(),setTimeout(function(){e||l.onAfterSlide.call(this,s,p)},l.speed),u=!0},s.play=function(){clearInterval(x),s.goToNextSlide(),x=setInterval(function(){s.goToNextSlide()},l.pause)},s.pause=function(){clearInterval(x)},s.refresh=function(){P.init()},s.getCurrentSlideCount=function(){var e=p;if(l.loop){var i=v.find(".lslide").length,t=s.find(".clone.left").length;e=t-1>=p?i+(p-t):p>=i+t?p-i-t:p-t}return e+1},s.getTotalSlideCount=function(){return v.find(".lslide").length},s.goToSlide=function(e){p=l.loop?e+s.find(".clone.left").length-1:e,s.mode(!1),l.gallery===!0&&n.slideThumb()},setTimeout(function(){l.onSliderLoad.call(this,s)},10),e(window).on("resize orientationchange",function(e){setTimeout(function(){e.preventDefault?e.preventDefault():e.returnValue=!1,P.init()},200)}),this}}(jQuery);	  
	        $('#image-gallery').lightSlider({
	            gallery:true,
	            item:1,
	            thumbItem:9,
	            slideMargin: 0,
	            speed:500,               
	            onSliderLoad: function() {
	                $('#image-gallery').removeClass('cS-hidden');
	            }  
	        });
	        
	   	 $(window).trigger("resize"); 
		 }, 3000);     
	});

   function autoRoomCombinationSelect(rci, ri) {
	    alert("You selected room "+ri + " in roomgroup  "+rci );

	};
	
	
    $(window).scroll(function () {
        var i = $('#hotel-rooms-selected');
        var h = i.outerHeight(true);
        if ($(window).scrollTop() > h) {
         if (!i.hasClass('scroll-header')) i.hide().addClass('scroll-header').fadeIn("slow");
        }
        if ($(window).scrollTop() >= 250) {
         i.slideDown('slow');
        } else {
         i.removeClass('scroll-header').show();
        }
       });
       
 

	   $(document).ready(function() {
		 
		 $(document).on('click','#accordion *',function(event){
			    //  $(this) = your current element that clicked.
			    // additional code
			     //console.log( $('.accordiontoggle').length);
			    var totalrooms = $('.accordiontoggle').length;
			    if(totalrooms > 1){
			    	 //console.log($(this)[0].className); 
			     if($(this)[0].className == 'accordiontoggle ng-binding'){
			    	// console.log($(this)[0].className);				    	 
			    	 $('#accordion').find('.collapse.in').collapse('hide');
					    
				    
			     }
			     else{
			    	 //console.log($(this)); 
			     }
			    	
			    }
			    if(totalrooms == 1){
			    	
			    }
			     
			}); 
		  
			
	   }); 

		
		$('.hoteldetail-heading').find('a').click(function(){		
		    $('html, body').animate({
		        scrollTop: $( $(this).attr('href') ).offset().top - 230
		    }, 500);
		    return false;
		
		});
		
		

		var query = (typeof(custom)=="undefined") ? window.location.search.substring(1) : custom;
		var hu = query;     
		var gy = hu.split("&");    
		 var vars = [], hash;
		 var Rooms1 = [], hash;
		 var Rooms2 = [], hash;
		 var Rooms3 = [], hash;
		 var Rooms4 = [], hash;
		 var Rooms5 = [], hash;
		 var Rooms6 = [], hash;
		 var Adults1 =  [], hash;
		 var Childs1 =  [], hash;
		 var Ages = [], hash;
		for (i=0;i<gy.length;i++) {
		  var ft = gy[i].split("=");   
		  var paramname = decodeURIComponent(ft[0]);
			if(paramname == "$&*D5K")
				paramname = "isDymark";		
			if(paramname == "$M*A@")
				paramname = "marAt";
		  
		  if(paramname== 'cityname')
		  {
		  $('#hotelcity').val(decodeURIComponent(ft[1]));
		  }
		  if(paramname== 'citycode')
		  {
		  $('#citycode').val(decodeURIComponent(ft[1]));
		  }
		if(paramname== 'datestart')
		{
		$('#datein').val(decodeURIComponent(ft[1]));
		}
		if(paramname== 'dateend')
		{
		$('#dateout').val(decodeURIComponent(ft[1]));
		}

		  
		 
		    vars[paramname] = ft[1];    
		   if(paramname != 'isDymark' && paramname != 'marAt')
			  {
			  // console.log();
		    myFunction(ft[0],ft[1])
			  } 
		}

		function myFunction(name,value) {
		    var x = document.createElement("INPUT");
		    x.setAttribute("type", "hidden");
		    x.setAttribute("name", name);
		    x.setAttribute("value", decodeURIComponent(value));   
		    $("#markup").append(x);
		 }

		          $(document).ready(function(){
		              $('#login-trigger').click(function() {
		                  $(this).next('#login-content').slideToggle();
		                  $(this).toggleClass('active');                    
		                  
		                  if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
		                      else $(this).find('span').html('&#x25BC;')
		                  });
		          });


		    $(document).on('click', '.accordion', function(event) {
		    event.stopPropagation();
		    var $this = $(this);
		    var parent = $this.data('parent');
		    var actives = parent && $(parent).find('.collapse.in');
		  var href = '#'; // Keeps JSHint from reporting 'href' undefined
		var hasData = '#'; // Keeps JSHint from reporting 'hasData' undefined

		    // From bootstrap itself
		    if (actives && actives.length) {
		        hasData = actives.data('collapse');
		        //if (hasData && hasData.transitioning) return;
		        actives.collapse('hide');
		        
		    }
		    make_minus = false;  
		    if($this.find('.tayy').hasClass('tayyarah-keyboard_arrow_right'))
		    {
		      make_minus = true;
		    }

		    $('.tayyarah-keyboard_arrow_down').removeClass('tayyarah-keyboard_arrow_down').addClass('tayyarah-keyboard_arrow_right');

		    if(make_minus)
		    {
		      $this.find('.tayy').removeClass('tayyarah-keyboard_arrow_right').addClass('tayyarah-keyboard_arrow_down');
		    } 

		    var target = $this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); //strip for ie7
		    $(target).collapse('toggle');
		});

		        $(window).scroll(function () {
		                var i = $('#nav');
		                var h = i.outerHeight(true);
		                if ($(window).scrollTop() > h) {
		                	if (!i.hasClass('scroll-header')) i.hide().addClass('scroll-header').fadeIn("slow");
		                }
		                if ($(window).scrollTop() >= 250) {
		                        i.slideDown('slow');
		                } else {
		                        i.removeClass('scroll-header').show();
		                }
		        });
		$("label.block").click(function() {        
		   $(this).find('input:radio').attr('checked', true);
		   $(this).css({ 'backgroundColor': "#f1f1f1" ,'color': "#d56100"});    

		});

		$('#mark').click(function(){
			if($("#markup").is(':visible') == false) 
		           $("#markup").show("slow");  
			else
				  $("#markup").hide();  
		});  

		$('#submitmarkup').click(function(){
			$('#markup').submit();
		});  

		$('.btn-number').click(function(e){
		    e.preventDefault();   
		    
		    
		    fieldName = $(this).attr('data-field');
		    type      = $(this).attr('data-type');
		    var input = $("input[name='"+fieldName+"']");
		   
		    var currentVal = parseInt(input.val());
		   // console.log(currentVal);
		    if (!isNaN(currentVal)) {
		        if(type == 'minus') {
		            
		            if(currentVal > input.attr('min')) {
		                input.val(currentVal - 1).change();
		               var total =  $('#totaltraveller').val();
		               $('#totaltraveller').val(parseInt(total) -1);
		            } 
		            if(parseInt(input.val()) == input.attr('min')) {
		                $(this).attr('disabled', true);
		            }

		        } else if(type == 'plus') {
		      	  var totallist =  $('#totaltraveller').val();
		            if(totallist <= 8)
		            {
		            if(currentVal < input.attr('max')) {
		                input.val(currentVal + 1).change();
		                var total =  $('#totaltraveller').val();
		                $('#totaltraveller').val(parseInt(total) +1);
		                
		            }
		            if(parseInt(input.val()) == input.attr('max')) {
		                $(this).attr('disabled', true);
		            }
		            }
		            else
		          	{
		          	// $(this).attr('disabled', true);
		          	}
		        }
		    } else {
		        input.val(0);
		    }     

		});

		$('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event){    
		    event.stopPropagation();
		   
		});
		$('ul.dropdown-menu.mega-dropdown-menu').on('change', function(event){    
		    event.stopPropagation();     
		});
		$('.input-number').focusin(function(){
		   $(this).data('oldValue', $(this).val());
		});
		$('.input-number').change(function() {      
		    minValue =  parseInt($(this).attr('min'));
		    maxValue =  parseInt($(this).attr('max'));
		    valueCurrent = parseInt($(this).val());
		    
		    name = $(this).attr('name');
		    if(valueCurrent >= minValue) {
		        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
		    } else {
		        alert('Sorry, the minimum value was reached');
		        $(this).val($(this).data('oldValue'));
		    }
		    if(valueCurrent <= maxValue) {
		        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
		    } else {
		        alert('Sorry, the maximum value was reached');
		        $(this).val($(this).data('oldValue'));
		    }
		    
		});
		$(".input-number").keydown(function (e) {
		      
		        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 || (e.keyCode == 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
		              return;
		        }
		       
		    });

		function AddHRooms()
		{
		  var totalrooms = $('#totalrooms').val();
		 // console.log("asdasdsa");
		  $('#totalroomtext').text(totalrooms);
		   $('#totalpeopletext').text(totalrooms);
		  var addrooms = "";
		  
		  
		  $('.hotel-repeatadd').html("");
		  for(var i=0;i< parseInt(totalrooms - 1);i++)
		    {
		    // var lastindex = $('.hotel-repeat > .row:last-child').attr("index");
		    
		    var index = i + 2;
		     addrooms += "<div class='row' id='rowid"+index+"' ><div class='col-sm-2 clearfix rooms-multiple'><p class='ro-heading'>Room"+index+":</p></div><div class='col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Adult(s)</label><div class='input-group'> <select class='form-control' name='Adults"+index+"' id='RoomAdult"+index+"' autocomplete='off' required onchange='ChangeRoomAdultChild("+index+")'><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div></div>"+       
		       "<div class='col-sm-5 clearfix'><div class='form-group'><label for='inputGroupSuccess2'>Child(s)</label><div class='input-group'><select class='form-control' id='Childs"+index+"' name='Childs"+index+"' autocomplete='off' required onchange='InsertAge("+index+")'><option>0</option> <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div></div></div><div id='childrow"+index+"' class='childAddedCustom'></div></div>"
		    }
		  $('.hotel-repeatadd').append(addrooms);
		 }

		function InsertAge(rowindex)
		{
		 // console.log(rowindex);

		  var total = $('#Childs'+rowindex).val();

		  var totalrooms = $('#totalrooms').val();
		  if(totalrooms == 1)
		 {
		  $('#totalchildtext').text(parseInt(total));
		 }
		 if(totalrooms == 2)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) );
		   if(totalrooms == 3)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()));
		   if(totalrooms == 4)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()));
		   if(totalrooms == 5)
		    $('#totalpeopletext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()) +  parseInt($('#Childs5').val()));
		 if(totalrooms == 6)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()) +  parseInt($('#Childs5').val()) +  parseInt($('#Childs6').val()));
		  
		  var addages = "";
		  $('#childrow'+rowindex).html("");
		  for(var i=0;i<parseInt(total);i++)
		  {
		    addages += "<div class='col-sm-2 clearfix' id='c-age' ><div class='form-group'><label for='inputGroupSuccess2'>Child"+(i+1)+"</label><div class='input-group'><select class='form-control' name='Age"+rowindex+"' autocomplete='off' required><option value='1'>< 1</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option> </select></div></div></div>" ;
		  }
		  //$('#childrow2').append(addages);
		  var firstcol = "<div class='col-sm-2'></div>" ;
		  $('#childrow'+rowindex).append(firstcol);
		  $('#childrow'+rowindex).append(addages);
		}
		function  ChangeRoomAdultChild(roomindex)
		{
		  
		  var totaladult= $('#RoomAdult'+roomindex).val();
		   var totalrooms = $('#totalrooms').val();

		  
		 
		  $('#Childs'+roomindex).html("");
		  if(totaladult == '1')
		    {
		    
		    var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option> ";
		    $('#Childs'+roomindex).append(option);
		    }
		  if(totaladult == '2')
		  {
		  var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
		  $('#Childs'+roomindex).append(option);
		  }
		  if(totaladult == '3')
		  {
		  var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		  $('#Childs'+roomindex).append(option);
		  }
		  if(totaladult == '4')
		  {
		  var option = "<option>0</option><option>1</option><option>2</option>";
		  $('#Childs'+roomindex).append(option);
		  }
		  
		  $('#childrow'+roomindex).html("");  
		  if(totalrooms == 1)
		 {
		  $('#totalpeopletext').text(parseInt(totaladult));
		  $('#totalchildtext').text(parseInt($('#Childs').val()));
		 }
		 if(totalrooms == 2){
		   $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) + parseInt($('#RoomAdult2').val()) );
		   $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) );
		 }
		   if(totalrooms == 3){
		     $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) +  parseInt($('#RoomAdult2').val()) + parseInt($('#RoomAdult3').val()));
		      $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()));
		   }
		   
		   if(totalrooms == 4)
		   {
		     $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) +  parseInt($('#RoomAdult2').val()) + parseInt($('#RoomAdult3').val()) +  parseInt($('#RoomAdult4').val()));
		    $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) + parseInt($('#Childs4').val()));
		   }
		   
		   if(totalrooms == 5)
		   {
		    $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) +  parseInt($('#RoomAdult2').val()) + parseInt($('#RoomAdult3').val()) +  parseInt($('#RoomAdult4').val()) +  parseInt($('#RoomAdult5').val()));
		 $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) + parseInt($('#Childs4').val()) + parseInt($('#Childs5').val()));
		   }
		     if(totalrooms == 6)
		     {
		       $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) +  parseInt($('#RoomAdult2').val()) + parseInt($('#RoomAdult3').val()) +  parseInt($('#RoomAdult4').val()) +  parseInt($('#RoomAdult5').val()) +  parseInt($('#RoomAdult6').val()));
		        $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) + parseInt($('#Childs3').val())+ parseInt($('#Childs4').val())+ parseInt($('#Childs5').val())+ parseInt($('#Childs6').val()));
		     }
		}

		function FirstrowChildchange(rowindex)
		{
		  
		  var total = $('#Childs').val();
		  var totalrooms = $('#totalrooms').val();
		  if(totalrooms == 1)
		 {
		  $('#totalchildtext').text(parseInt(total));
		 }
		 if(totalrooms == 2)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) );
		   if(totalrooms == 3)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs2').val()));
		   if(totalrooms == 4)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs2').val()) +  parseInt($('#Childs3').val()));
		   if(totalrooms == 5)
		    $('#totalpeopletext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs2').val()) +  parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()));
		 if(totalrooms == 6)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs2').val()) +  parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()) +  parseInt($('#Childs5').val()));
		 
		 // console.log(total);
		  if(total == '0')
		  {
		  $('.Room1Child1').hide();
		  $('.Room1Child2').hide();
		  $('.Room1Child3').hide();
		  $('.Room1Child4').hide();
		  $('.Room1Child5').hide();
		  }
		  
		  if(total == '1')
		    {
		    $('.Room1Child1').show();
		    $('.Room1Child2').hide();
		    $('.Room1Child3').hide();
		    $('.Room1Child4').hide();
		    $('.Room1Child5').hide();
		    }
		  if(total == '2')
		  {
		  $('.Room1Child1').show();
		  $('.Room1Child2').show();
		  $('.Room1Child3').hide();
		  $('.Room1Child4').hide();
		  $('.Room1Child5').hide();
		  }
		  if(total == '3')
		  {
		  $('.Room1Child1').show();
		  $('.Room1Child2').show();
		  $('.Room1Child3').show();
		  $('.Room1Child4').hide();
		  $('.Room1Child5').hide();
		  }
		  if(total == '4')
		  {
		  $('.Room1Child1').show();
		  $('.Room1Child2').show();
		  $('.Room1Child3').show();
		  $('.Room1Child4').show();
		  $('.Room1Child5').hide();
		  }
		  if(total == '5')
		  {
		  $('.Room1Child1').show();
		  $('.Room1Child2').show();
		  $('.Room1Child3').show();
		  $('.Room1Child4').show();
		  $('.Room1Child5').show();
		  }
		}



		function FirstRoomChangeAChild()
		{
		  var totaladult= $('#Room1Adult').val();
		  var totalpeoplelength = $('#totalpeopletext').text();
		 var totalrooms = $('#totalrooms').val();  

		  $('#Childs').html("");
		  if(totaladult == '1')
		    {    
		    var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option>";
		    $('#Childs').append(option);
		    }
		  if(totaladult == '2')
		  {
		  var option = "<option>0</option><option>1</option><option>2</option><option>3</option><option>4</option>";
		  $('#Childs').append(option);
		  }
		  if(totaladult == '3')
		  {
		  var option = "<option>0</option><option>1</option><option>2</option><option>3</option>";
		  $('#Childs').append(option);
		  }
		  if(totaladult == '4')
		  {
		  var option = "<option>0</option><option>1</option><option>2</option>";
		  $('#Childs').append(option);
		  }
		  
		  $('.Room1Child1').hide();
		  $('.Room1Child2').hide();
		  $('.Room1Child3').hide();
		  $('.Room1Child4').hide();
		  $('.Room1Child5').hide();

		if(totalrooms == 1)
		 {
		  $('#totalpeopletext').text(parseInt(totaladult));
		  $('#totalchildtext').text(parseInt($('#Childs').val()));
		 }
		 if(totalrooms == 2){
		   $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) + parseInt($('#RoomAdult2').val()) );
		   $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) );
		 }
		   if(totalrooms == 3){
		     $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) +  parseInt($('#RoomAdult2').val()) + parseInt($('#RoomAdult3').val()));
		      $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()));
		   }
		   
		   if(totalrooms == 4)
		   {
		     $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) +  parseInt($('#RoomAdult2').val()) + parseInt($('#RoomAdult3').val()) +  parseInt($('#RoomAdult4').val()));
		    $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) + parseInt($('#Childs4').val()));
		   }
		   
		   if(totalrooms == 5)
		   {
		    $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) +  parseInt($('#RoomAdult2').val()) + parseInt($('#RoomAdult3').val()) +  parseInt($('#RoomAdult4').val()) +  parseInt($('#RoomAdult5').val()));
		 $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) + parseInt($('#Childs4').val()) + parseInt($('#Childs5').val()));
		   }
		     if(totalrooms == 6)
		     {
		       $('#totalpeopletext').text(parseInt($('#Room1Adult').val()) +  parseInt($('#RoomAdult2').val()) + parseInt($('#RoomAdult3').val()) +  parseInt($('#RoomAdult4').val()) +  parseInt($('#RoomAdult5').val()) +  parseInt($('#RoomAdult6').val()));
		        $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) + parseInt($('#Childs3').val())+ parseInt($('#Childs4').val())+ parseInt($('#Childs5').val())+ parseInt($('#Childs6').val()));
		     }
		   
		 

		}

		function modifysearch()
		{
			$('#modifiedsearch').submit();
		}


		$(document).ready(function() {
			$("#changebutton").click(function() {        	
			  $("#changerefine").hide();
			  $("#searchrefine").show();
			});
		});
		
		 var is_mobile = false;
		    if( $('#hdepe').css('display')=='none') {
		        is_mobile = true;       
		    }
		    if (is_mobile == true) {
		    	$('#datein').datepicker({
				    numberOfMonths: 1,
				    firstDay: 1,
				    dateFormat: 'dd/mm/yy',
				    minDate: '0',
				  
				    onSelect: function(dateStr) {
				        var d1 = $(this).datepicker("getDate");
				        d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
				        var d2 = $(this).datepicker("getDate");
				        d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
				        $("#dateout").datepicker("setDate", null);
				        $("#dateout").datepicker("option", "minDate", d1);
				       // $("#twodpd2").datepicker("option", "maxDate", d2);
				       
				    },
				    onClose : function(dateSt)
				    {
				    	$("#dateout").focus();	
				    }
				});

				$("#dateout").datepicker({
					numberOfMonths: 1,
				    firstDay: 1,
				    dateFormat: 'dd/mm/yy',
				   
				    onSelect: function(dateStr) {
				       
				    }
				});
		    	
		    }
            if (is_mobile == false) {
            	$('#datein').datepicker({
        		    numberOfMonths: 2,
        		    firstDay: 1,
        		    dateFormat: 'dd/mm/yy',
        		    minDate: '0',
        		  
        		    onSelect: function(dateStr) {
        		        var d1 = $(this).datepicker("getDate");
        		        d1.setDate(d1.getDate() + 1); // change to + 1 if necessary
        		        var d2 = $(this).datepicker("getDate");
        		        d2.setDate(d2.getDate() + 31); // change to + 29 if necessary
        		        $("#dateout").datepicker("setDate", null);
        		        $("#dateout").datepicker("option", "minDate", d1);
        		       // $("#twodpd2").datepicker("option", "maxDate", d2);
        		       
        		    },
        		    onClose : function(dateSt)
        		    {
        		    	$("#dateout").focus();	
        		    }
        		});

        		$("#dateout").datepicker({
        			numberOfMonths: 2,
        		    firstDay: 1,
        		    dateFormat: 'dd/mm/yy',
        		   
        		    onSelect: function(dateStr) {
        		       
        		    }
        		});
		    	
		    }
		

		function openchangeroom()
		{
			$('#rowid1').show();
		}


		function InsertAge(rowindex)
		{
		 // console.log(rowindex);

		  var total = $('#Childs'+rowindex).val();

		  var totalrooms = $('#totalrooms').val();
		  if(totalrooms == 1)
		 {
		  $('#totalchildtext').text(parseInt(total));
		 }
		 if(totalrooms == 2)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) );
		   if(totalrooms == 3)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()));
		   if(totalrooms == 4)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()));
		   if(totalrooms == 5)
		    $('#totalpeopletext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()) +  parseInt($('#Childs5').val()));
		 if(totalrooms == 6)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()) +  parseInt($('#Childs5').val()) +  parseInt($('#Childs6').val()));
		  
		  var addages = "";
		  $('#childrow'+rowindex).html("");
		  for(var i=0;i<parseInt(total);i++)
		  {
		    addages += "<div class='col-sm-2 clearfix' id='c-age' ><div class='form-group'><label for='inputGroupSuccess2'>Child"+(i+1)+"</label><div class='input-group'><select class='form-control' name='Age"+rowindex+"' autocomplete='off' required><option value='less1'>< 1</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option><option>9</option><option>10</option><option>11</option> </select></div></div></div>" ;
		  }
		  //$('#childrow2').append(addages);
		  var firstcol = "<div class='col-sm-2'></div>" ;
		  $('#childrow'+rowindex).append(firstcol);
		  $('#childrow'+rowindex).append(addages);
		}

		function FirstrowChildchange(rowindex)
		{
		  
		  var total = $('#Childs').val();
		  var totalrooms = $('#totalrooms').val();
		  if(totalrooms == 1)
		 {
		  $('#totalchildtext').text(parseInt(total));
		 }
		 if(totalrooms == 2)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) + parseInt($('#Childs2').val()) );
		   if(totalrooms == 3)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs2').val()));
		   if(totalrooms == 4)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs2').val()) +  parseInt($('#Childs3').val()));
		   if(totalrooms == 5)
		    $('#totalpeopletext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs2').val()) +  parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()));
		 if(totalrooms == 6)
		    $('#totalchildtext').text(parseInt($('#Childs').val()) +  parseInt($('#Childs2').val()) + parseInt($('#Childs2').val()) +  parseInt($('#Childs3').val()) +  parseInt($('#Childs4').val()) +  parseInt($('#Childs5').val()));
		 
		 // console.log(total);
		  if(total == '0')
		  {
		  $('.Room1Child1').hide();
		  $('.Room1Child2').hide();
		  $('.Room1Child3').hide();
		  $('.Room1Child4').hide();
		  $('.Room1Child5').hide();
		  }
		  
		  if(total == '1')
		    {
		    $('.Room1Child1').show();
		    $('.Room1Child2').hide();
		    $('.Room1Child3').hide();
		    $('.Room1Child4').hide();
		    $('.Room1Child5').hide();
		    }
		  if(total == '2')
		  {
		  $('.Room1Child1').show();
		  $('.Room1Child2').show();
		  $('.Room1Child3').hide();
		  $('.Room1Child4').hide();
		  $('.Room1Child5').hide();
		  }
		  if(total == '3')
		  {
		  $('.Room1Child1').show();
		  $('.Room1Child2').show();
		  $('.Room1Child3').show();
		  $('.Room1Child4').hide();
		  $('.Room1Child5').hide();
		  }
		  if(total == '4')
		  {
		  $('.Room1Child1').show();
		  $('.Room1Child2').show();
		  $('.Room1Child3').show();
		  $('.Room1Child4').show();
		  $('.Room1Child5').hide();
		  }
		  if(total == '5')
		  {
		  $('.Room1Child1').show();
		  $('.Room1Child2').show();
		  $('.Room1Child3').show();
		  $('.Room1Child4').show();
		  $('.Room1Child5').show();
		  }
		}


		function modifysearch()
		{
			$('#modifiedsearch').submit();
		}

  