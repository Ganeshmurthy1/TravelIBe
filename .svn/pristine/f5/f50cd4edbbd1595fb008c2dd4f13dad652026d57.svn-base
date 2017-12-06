<div class="seeeeee" ng-show="bookconfirmloader" ng-cloak>
	<div class="visible-xs gradient" data-ng-show="loadpricebar">
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
	<div class="search-advertisement-box hidden-xs">
		<div class="clearfix">
			<img class="flightloading-image" src="images/spin.gif"
				alt="Loading..." />
			<p class="h5">Please wait while we loading payment gateway</p>

		</div>
	</div>
</div>



<div class="login-pop-up clearfix" id="farechangediv"
	ng-style="{ 'display' : faredivdisplay}" ng-cloak>
	<div class="login-pop-continer fare-change">
		<div class="login-pop-header clearfix">

			<div class="col-xs-6">
				<p class="h4">Fare Change alert</p>
			</div>
			<div class="col-xs-6">
				<!-- <p class="pull-right"><a href="#" class="b-cl"><i class="fa fa-times"></i></a></p> -->
			</div>

		</div>
		<div class="login-pop-content">

			<div class="oops">
				<p class="bg-info" style="padding: 5px;">
					<span><i class="fa fa-info-circle fa-2x"></i></span>
					{{pricechagetext}} <i ng-class="classname"></i> {{updatedprice}}
				</p>

			</div>

			<div class="clearfix">
				<div class="col-xs-5 updated clearfix">
					<ul>
						<li>Old fare<span class=""><i ng-class="classname"></i>
								{{oldprice}}</span></li>
						<li>Updated fare<span class=""><i
								ng-class="classname"></i>{{updatedprice}}</span></li>


					</ul>
				</div>
				<div class="col-xs-7 reasons clearfix">
					<h5>Reasons</h5>
					<ul>
						<li>Hotel Price are dynamic and subject to change.This change
							is beyond our control</li>

					</ul>
				</div>
			</div>

			<div class=" clearfix text-center">
				<button type="button" class="btn btn-primary b-ok "
					id="Continuefare" data-ng-click="continuetobook();">Continue
				</button>
				<!--  <button type="button"  class="btn btn-primary b-ok " id="ChangeFlight" onclick="history.go(-3);">Change Hotel</button>  -->
			</div>
		</div>
		<div class="login-pop-footer cleqarfix"></div>
	</div>
</div>
<div class="seeeeee" ng-show="errordiv" ng-cloak>
	<div class="custom-er">
		<div class="custom-error text-center">
			<div class="error-mess">
				<p>
					<b>{{errormeg}}</b>
				</p>
				<form ng-submit="returnIndex()">
					<button type="submit" ng-click="submitted == true"
						class="btn btn-primary but">Search again</button>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- 18680  HDFC testing account_id -->
<!-- 19570  HDFC live account_id -->
<form method="post" action="https://www.tayyarah.com/pay"
	name="ePayment" id="ePayment">
	<input type="hidden" name="V3URL"
		value="https://secure.ebs.in/pg/ma/payment/request" /> <input
		name="channel" type="hidden" value="10" /> <input name="account_id"
		type="hidden" value="19570" /> <input name="reference_no"
		type="hidden" id="pgid" value="" /> <input name="amount"
		type="hidden" id="totalamt" value="12.34" />
	<!-- <input name="amount" type="hidden" value={{totalprice}} />   -->
	<input name="mode" type="hidden" value="LIVE" /> <input
		name="currency" type="hidden" value="INR" /> <input
		name="description" type="hidden" value="Hotel Book" /> <input
		name="return_url" type="hidden"
		value="https://www.tayyarah.com/response.jsp" /> <input name="name"
		type="hidden" value="vimal" /> <input name="address" type="hidden"
		value="bangalore" /> <input name="city" type="hidden"
		value="bangalore" /> <input name="state" type="hidden"
		value="karanataka" /> <input name="country" type="hidden" value="IND" />
	<input name="postal_code" type="hidden" value="560046" /> <input
		name="phone" type="hidden" value="8123447347" /> <input name="email"
		type="hidden" value="vimalsvsr@gmail.com" /> <input name="ship_name"
		type="hidden" value="vimal" /> <input name="ship_address"
		type="hidden" value="bangalore" /> <input name="ship_country"
		type="hidden" value="IND" /> <input name="ship_state" type="hidden"
		value="karanataka" /> <input name="ship_city" type="hidden"
		value="bangalore" /> <input name="ship_postal_code" type="hidden"
		value="560046" /> <input name="ship_phone" type="hidden"
		value="8123447347" /> <input name="algo" type="hidden" value="MD5" />
</form>



<script type="text/javascript">

function formAutoSubmit () {
var frm = document.getElementById("ePayment");
//frm.submit();
}



</script>
<script type="text/javascript">
         var query = (typeof(custom)=="undefined") ? window.location.search.substring(1) : custom;
         var hu = query;     
         var gy = hu.split("&");
         //console.log(gy);
          var vars = [], hash; 
          var adult1 = [], hash;
          var adult2 = [], hash;
          var adult3 = [], hash;
          var adult4 = [], hash;
          var child1 = [], hash;
          var child2 = [], hash;
          var child3 = [], hash;
          var child4 = [], hash;
        
          var adfname = [], adlname = [], admname = [], adtitle = [],adage = [],addob = [];
          var adfname1 = [], adlname1 = [], admname1 = [], adtitle1 = [],adage1 = [],addob1 = [];
          var adfname2 = [], adlname2 = [], admname2 = [], adtitle2 = [],adage2 = [],addob2 = [];
          var adfname3 = [], adlname3 = [], admname3 = [], adtitle3 = [],adage3 = [],addob3 = [];
          var chfname = [], chlname = [], chmname = [],chtitle = [],chage = [],chdob = [];  
          var chfname1 = [], chlname1 = [], chmname1 = [],chtitle1 = [],chage1 = [],chdob1 = [];     
          var chfname2 = [], chlname2 = [], chmname2 = [],chtitle2 = [],chage2 = [],chdob2 = [];     
          var chfname3 = [], chlname3 = [], chmname3 = [],chtitle3 = [],chage3 = [],chdob3 = [];     
         for (i=0;i<gy.length ;i++) {   	
         
           var ft = gy[i].split("="); 
           
           if(ft[0]=='adfN1' )
     	  {          
     	  adfname.push(ft[1]);
     	  adult1['adultfirst'] = adfname;    	  
     	  }
        if(ft[0]=='adlN1')
 	    {        	
     	  adlname.push(ft[1]);
     	  adult1['adultlast'] = adlname; 	  
 	   }
       if(ft[0]=='admN1')
 	  {    	  
    	   admname.push(ft[1]);
     	  adult1['adultmiddle'] = admname; 	  
 	  }
       if(ft[0]=='adt1')
 	  {    	
    	   adtitle.push(ft[1]);
     	  adult1['adulttitle'] = adtitle; 	  
 	  }
       if(ft[0]=='ada1')
 	  {    	 
    	   adage.push(ft[1]);
     	  adult1['adultage'] = adage; 	  
 	  }
       if(ft[0]=='addob1')
 	  {    	 
    	   addob.push(ft[1]);
     	  adult1['adultdob'] = addob; 	  
 	  }
       
       if(ft[0]=='adfN2' )
  	  {      
  	  adfname1.push(ft[1]);
  	  adult2['adultfirst'] = adfname1;    	  
  	  }
     if(ft[0]=='adlN2')
	    {     
  	  adlname1.push(ft[1]);
  	  adult2['adultlast'] = adlname1; 	  
	   }
    if(ft[0]=='admN2')
	  { 	 
 	   admname1.push(ft[1]);
  	  adult2['adultmiddle'] = admname1; 	  
	  }
    if(ft[0]=='adt2')
	  { 	
 	   adtitle1.push(ft[1]);
  	  adult2['adulttitle'] = adtitle1; 	  
	  }
    if(ft[0]=='ada2')
	  { 	  
 	   adage1.push(ft[1]);
  	  adult2['adultage'] = adage1; 	  
	  }
    if(ft[0]=='addob2')
	  { 	  
 	   addob1.push(ft[1]);
  	  adult2['adultdob'] = addob1; 	  
	  }
    if(ft[0]=='adfN3' )
	  {     
	  adfname2.push(ft[1]);
	  adult3['adultfirst'] = adfname2;    	  
	  }
   if(ft[0]=='adlN3')
	    {   
	  adlname2.push(ft[1]);
	  adult3['adultlast'] = adlname2; 	  
	   }
  if(ft[0]=='admN3')
	  {	  
	   admname2.push(ft[1]);
	  adult3['adultmiddle'] = admname2; 	  
	  }
  if(ft[0]=='adt3')
	  {	  
	   adtitle2.push(ft[1]);
	  adult3['adulttitle'] = adtitle2; 	  
	  }
  if(ft[0]=='ada3')
	  {	 
	   adage2.push(ft[1]);
	  adult3['adultage'] = adage2; 	  
	  }
  if(ft[0]=='addob3')
	  {	   
	   addob2.push(ft[1]);
	  adult3['adultdob'] = addob2; 	  
	  }
  if(ft[0]=='adfN4' )
  {  
  adfname3.push(ft[1]);
  adult4['adultfirst'] = adfname3;    	  
  }
if(ft[0]=='adlN4')
    {
  adlname3.push(ft[1]);
  adult4['adultlast'] = adlname3; 	  
   }
if(ft[0]=='admN4')
  {
   admname3.push(ft[1]);
  adult4['adultmiddle'] = admname3; 	  
  }
if(ft[0]=='adt4')
  { 
   adtitle3.push(ft[1]);
  adult4['adulttitle'] = adtitle3; 	  
  }
if(ft[0]=='ada4')
  { 
   adage3.push(ft[1]);
  adult4['adultage'] = adage3; 	  
  }
if(ft[0]=='addob4')
  {
   addob3.push(ft[1]);
  adult4['adultdob'] = addob3; 	  
  }
       
       if(ft[0]=='chfN1' )
 	  {    
 	  chfname.push(ft[1]);
 	  child1['childfirst'] = chfname;    	  
 	  }
   if(ft[0]=='chlN1')
   {	 
	   chlname.push(ft[1]);
 	  child1['childlast'] = chlname;
   
   }
   if(ft[0]=='chmN1')
   {	  
	   chmname.push(ft[1]);
 	  child1['childmiddle'] = chmname;
   
   }
   if(ft[0]=='cht1')
   {	
	   chtitle.push(ft[1]);
 	  child1['childtitle'] = chtitle;
   
   }
   if(ft[0]=='cha1')
   {	
	   chage.push(ft[1]);
 	  child1['childage'] = chage;
   
   }
   if(ft[0]=='chdob1')
   {	
	   chdob.push(ft[1]);
 	  child1['childdob'] = chdob;
   
   }
   
   
   if(ft[0]=='chfN2' )
	  {    
	  chfname1.push(ft[1]);
	  child2['childfirst'] = chfname1;    	  
	  }
if(ft[0]=='chlN2')
{	 
	   chlname1.push(ft[1]);
	  child2['childlast'] = chlname1;

}
if(ft[0]=='chmN2')
{	  
	   chmname1.push(ft[1]);
	  child2['childmiddle'] = chmname1;

}
if(ft[0]=='cht2')
{	
	   chtitle1.push(ft[1]);
	  child2['childtitle'] = chtitle1;

}
if(ft[0]=='cha2')
{	
	   chage1.push(ft[1]);
	  child2['childage'] = chage1;

}
if(ft[0]=='chdob2')
{	
	   chdob1.push(ft[1]);
	  child2['childdob'] = chdob1;

}

if(ft[0]=='chfN3' )
{    
chfname2.push(ft[1]);
child3['childfirst'] = chfname2;    	  
}
if(ft[0]=='chlN3')
{	 
 chlname2.push(ft[1]);
child3['childlast'] = chlname2;

}
if(ft[0]=='chmN3')
{	  
 chmname2.push(ft[1]);
child3['childmiddle'] = chmname2;

}
if(ft[0]=='cht3')
{	
 chtitle2.push(ft[1]);
child3['childtitle'] = chtitle2;

}
if(ft[0]=='cha3')
{	
 chage2.push(ft[1]);
child3['childage'] = chage2;

}
if(ft[0]=='chdob3')
{	
 chdob2.push(ft[1]);
child3['childdob'] = chdob2;

}

if(ft[0]=='chfN4' )
{    
chfname3.push(ft[1]);
child4['childfirst'] = chfname3;    	  
}
if(ft[0]=='chlN4')
{	 
 chlname3.push(ft[1]);
child4['childlast'] = chlname3;

}
if(ft[0]=='chmN4')
{	  
 chmname3.push(ft[1]);
child4['childmiddle'] = chmname3;

}
if(ft[0]=='cht4')
{	
 chtitle3.push(ft[1]);
child4['childtitle'] = chtitle3;

}
if(ft[0]=='cha4')
{	
 chage3.push(ft[1]);
child4['childage'] = chage3;

}
if(ft[0]=='chdob4')
{	
 chdob3.push(ft[1]);
child4['childdob'] = chdob3;

}
 vars[ft[0]] = ft[1];  
}
         
</script>

