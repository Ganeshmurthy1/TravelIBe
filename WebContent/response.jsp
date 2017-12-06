<%@page contentType="text/html" pageEncoding="UTF-8"%>
 <%@ page import="java.io.*,java.util.*" %>
<!DOCTYPE html>
<html>
<head> 
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
<title>Response</title>
</head>
<body>
<%
String RequestID = request.getParameter("RequestID");
String RefNo = request.getParameter("MerchantRefNo");
String Amount = request.getParameter("Amount");
String ResponseCode = request.getParameter("ResponseCode");
String ResponseMessage = request.getParameter("ResponseMessage");
String TransId = request.getParameter("TransactionID");
String SecureHash = request.getParameter("SecureHash");
String BillingName = request.getParameter("BillingName");
String Description = request.getParameter("Description");
StringBuffer sb = new StringBuffer();

sb.append("RequestID :"+RequestID+"||||\n");
sb.append("ResponseCode :"+ResponseCode+"||||");
sb.append("RefNo :"+RefNo+"||||");
sb.append("Amount :"+Amount+"||||");
sb.append("SecureHash :"+SecureHash+"||||");
sb.append("BillingName :"+BillingName+"||||");
sb.append("TransId :"+TransId+"||||");
sb.append("Description :"+Description+"||||");
//sb.append("PaymentId :"+PaymentId+"||||");
sb.append("ResponseMessage :"+ResponseMessage+"||||");
PrintWriter out1 = response.getWriter();

if(RequestID!=null)
{
	out1.println(sb.toString());
	updateStatus(sb.toString(),RefNo); 
	if(RefNo.startsWith("PGF"))
	{
		String paystatus = "Failed";
		String authcode = "00000";
		
		if(ResponseCode.equalsIgnoreCase("0")) 
		{
			ResponseCode = "1";
			paystatus = "SUCCESS";
			authcode = RequestID;
		}
	
	 String redirectURL = "https://www.tayyarah.com/#/UserConfirmFlightBook?transaction_id="+TransId+"&refno="+RefNo+"&payment_status="+ResponseCode+"&AuthCode="+authcode; 
	    // String redirectURL = "http://localhost:8080/TayyarahSinglePage/#/UserConfirmFlightBook?transaction_id="+TransId+"&refno="+RefNo+"&payment_status="+ResponseCode+"&AuthCode="+authcode;
	       response.sendRedirect(redirectURL);

	}
	if(RefNo.startsWith("PGH"))
	{
		String paystatus = "Failed";
		String authcode = "00000";
		 
		if(ResponseCode.equalsIgnoreCase("0"))
		{
			ResponseCode = "1";
			paystatus = "SUCCESS"; 
			authcode = RequestID;
		}
		/*  String redirectURL = "http://localhost:8082/TayyarahSinglePage/#/UserHotelBook?response_code="+ResponseCode+"&response_message="+paystatus+"&transaction_id="+TransId+"&orderid="+RefNo+"&payment_status="+ResponseCode+"&AuthCode="+authcode; 
	    response.sendRedirect(redirectURL);  */
	    String redirectURL = "https://www.tayyarah.com/#/UserHotelBook?response_code="+ResponseCode+"&response_message="+paystatus+"&transaction_id="+TransId+"&orderid="+RefNo+"&payment_status="+ResponseCode+"&AuthCode="+authcode; 
	    response.sendRedirect(redirectURL); 

	}
	if(RefNo.startsWith("PGB"))
	{
		String paystatus = "Failed";
		String authcode = "00000";
		 
		if(ResponseCode.equalsIgnoreCase("0"))
		{
			ResponseCode = "1";
			paystatus = "SUCCESS"; 
			authcode = RequestID;
		}else{
			ResponseCode = "0";
			paystatus = "Failed"; 
			authcode = RequestID;
		}
	/* 	  String redirectURL = "http://localhost:8080/TayyarahSinglePage/#/UserBusBook?response_code="+ResponseCode+"&response_message="+paystatus+"&transaction_id="+TransId+"&orderid="+RefNo+"&payment_status="+ResponseCode+"&AuthCode="+authcode; 
	    response.sendRedirect(redirectURL);   */
	    String redirectURL = "https://www.tayyarah.com/#/UserBusBook?response_code="+ResponseCode+"&response_message="+paystatus+"&transaction_id="+TransId+"&orderid="+RefNo+"&payment_status="+ResponseCode+"&AuthCode="+authcode; 
	    response.sendRedirect(redirectURL); 
	

	}

}
else
{
	out1.println("Your are not allowed to view this page");
} 



%>

<%!
public void updateStatus(String data,String path)
{
	String filename = "/opt/devtravelapi/ibe/logs/PaymentResponse/"+path+".txt";

	//body.append("</html>");
	FileOutputStream fos; 
	DataOutputStream dos;
	try {

		File file= new File(filename);
		fos = new FileOutputStream(file);

		dos=new DataOutputStream(fos);

		dos.write(data.getBytes());
		dos.flush();
		dos.close();
	} catch (IOException e) {

		e.printStackTrace();
	}

}
%>

</body>
</html>
    