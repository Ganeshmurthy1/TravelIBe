package com.intelli.util;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONObject;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.opensymphony.xwork2.ActionSupport;

public class PaymentUtil extends ActionSupport {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String Response;
	private Map jsonobj  =  new HashMap();
	public String savePaymentResponse(){
		
		try{
		ObjectMapper mappercom = new ObjectMapper();
		JSONObject responseJson =  mappercom.readValue(Response, JSONObject.class);		
		StringBuffer sb = new StringBuffer();
		sb.append("RequestID :"+((String)responseJson.get("RequestID"))+"||||\n");
		sb.append("ResponseCode :"+((String)responseJson.get("ResponseCode"))+"||||");
		sb.append("RefNo :"+((String)responseJson.get("RefNo"))+"||||");
		sb.append("Amount :"+((String)responseJson.get("Amount"))+"||||");
		sb.append("SecureHash :"+((String)responseJson.get("SecureHash"))+"||||");
		sb.append("BillingName :"+((String)responseJson.get("BillingName"))+"||||");
		sb.append("TransId :"+((String)responseJson.get("TransId"))+"||||");
		sb.append("Description :"+((String)responseJson.get("Description"))+"||||");
		//sb.append("PaymentId :"+PaymentId+"||||");
		sb.append("ResponseMessage :"+((String)responseJson.get("ResponseMessage"))+"||||");
		
		FileOutputStream fos; 
		DataOutputStream dos;
		//String filename = "E://PaymentLogs/"+((String)responseJson.get("RefNo"))+".txt";
		String filename = "/opt/devtravelapi/ibe/logs/PaymentResponse/"+((String)responseJson.get("RefNo"))+".txt";
		File file= new File(filename);
		fos = new FileOutputStream(file);
		dos=new DataOutputStream(fos);
		dos.write(sb.toString().getBytes());
		dos.flush();
		dos.close();
		jsonobj.put("Status","Success");
		}catch(Exception e){
			jsonobj.put("Status","Failed");
		}
		
		return SUCCESS;
	}
	/**
	 * @return the jsonResult
	 */
	public Map getJsonResult() {
		return jsonobj;
	}

	/**
	 * @param jsonResult the jsonResult to set
	 */
	public void setJsonResult(Map jsonResult) {
		this.jsonobj = jsonResult;
	}

	public String getResponse() {
		return Response;
	}
	public void setResponse(String response) {
		Response = response;
	}
}
