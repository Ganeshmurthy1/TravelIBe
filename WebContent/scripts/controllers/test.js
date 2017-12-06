 $(document).ready(function(){
		 var iscor=$("#isCorporate").val();
		 if(iscor == 'true'){
		 $("#AdFirstName-0,#AdFirstName-1,#AdFirstName-2,#AdFirstName-3,#AdFirstName-4,#AdFirstName-5,#AdFirstName-6,#AdFirstName-7,#AdFirstName-8").autocomplete({minLength:1,source:function(e,t){var a="flight",s=$(location).attr("href"),i=s.substr(0,s.lastIndexOf("/#/")+1),r=i+"GetCorporateEmployeeList";
	$.ajax({url:r,dataType:"json",data:{userlistInput:a,searchText:e.term,maxResults:10},success:function(a){var s=$.map(a.jsonResult.passengers,
			function(e){return{label:e.firstName+" "+e.lastName,value:e.firstName,lastname:e.lastName,mobileno:e.mobile,email:e.emailId,expiredatepassport:e.passportExpiryDate,passportno:e.passportNo,title:e.title}});
	t($.ui.autocomplete.filter(s,e.term))}})},select:function(e,t){var a=e.target.id.substring(12,13);return void 0!=t.item.email&&$("#email").val(t.item.email),$("#"+e.target.id).val(t.item.value),$("#Surname-"+a).val(t.item.lastname),$("#mrMss"+a).val(t.item.title),$("#mobile").val(t.item.mobileno),$("#passport-"+a).val(t.item.passportno),!1}})
		 }
		 });