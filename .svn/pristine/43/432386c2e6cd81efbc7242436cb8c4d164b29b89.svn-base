<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.security.MessageDigest,
                 java.math.*,
				 java.util.*,
				 java.io.*"%>

<%! 
	private String md5(String str) throws Exception {
		MessageDigest m = MessageDigest.getInstance("MD5");

		byte[] data = str.getBytes();
		
		m.update(data,0,data.length);
		
		BigInteger i = new BigInteger(1,m.digest());
		
		String hash = String.format("%1$032X", i);
		
		return hash;
	}
%>

<%
    String SECURE_SECRET = "f513e32a1d4fce040a93a1ac547b8807"; // your secret key;
	
	String md5HashData = SECURE_SECRET;
	String tempMd5HashDataForFile = SECURE_SECRET;
    // retrieve all the parameters into a hash map
   
	HashMap testMap = new HashMap();
    Enumeration en = request.getParameterNames();

	while(en.hasMoreElements()) {
        String fieldName = (String) en.nextElement();
        String fieldValue = request.getParameter(fieldName);
        if ((fieldValue != null) && (fieldValue.length() > 0)) {
            
        	
        	testMap.put(fieldName, fieldValue);
        }
    }

	//Sort the HashMap
    Map requestFields = new TreeMap(testMap);
    
    String V3URL = (String) requestFields.remove("V3URL");
    requestFields.remove("submit");
    
%>  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<META HTTP-EQUIV="CACHE-CONTROL" CONTENT="no-store, no-cache, must-revalidate">
<META HTTP-EQUIV="PRAGMA" CONTENT="no-store, no-cache, must-revalidate">
<body onLoad="document.order.submit()">
	<form name="order" action="<%=V3URL%>" method="post">
	<p>Please wait while your payment is being processed...</p>
<%	
	
	//For Each item In Request.Form
	 // append all fields in a data string
        for (Iterator i = requestFields.keySet().iterator(); i.hasNext(); ) {
            
            String key = (String)i.next();
            String value = (String)requestFields.get(key);
            tempMd5HashDataForFile+="|"+key+":"+value;
            if(key.equalsIgnoreCase("amount") && session.getAttribute("Totalprice")!=null)
            {              	
            	md5HashData += "|"+(String)session.getAttribute("Totalprice");     
            	tempMd5HashDataForFile+="|priceSession"+":"+(String)session.getAttribute("Totalprice");
            	value =(String)session.getAttribute("Totalprice");
            }
            else
            {
            	md5HashData += "|"+value;
            	tempMd5HashDataForFile+="|priceRequest"+":"+value;
            }
			
%>
        	<input type="hidden" name="<%=key%>" value="<%=value%>"/><br>
<%             
    	}

String hvalue = (String)requestFields.get("algo");

String hashedvalue ="";

if ( hvalue.equals("MD5") )
{
    hashedvalue = md5(md5HashData);
}

tempMd5HashDataForFile ="| DataBefore: "+md5HashData;
tempMd5HashDataForFile ="| Data: "+tempMd5HashDataForFile+ "\n|Hash: "+hashedvalue;
//save the data in file
updateStatus(tempMd5HashDataForFile,String.valueOf(System.currentTimeMillis())); 


%>
    <input type="hidden" name="secure_hash" value="<%=hashedvalue%>"/>
    
    <%!
public void updateStatus(String data,String path)
{
	String filename = "/opt/devtravelapi/ibe/logs/PaymentResponse/beforePay_"+path+".txt";

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
    
    
 </form>
</body>
</html>
