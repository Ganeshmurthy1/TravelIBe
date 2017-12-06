package com.lintas.model;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;

public class CheckLocale  extends ActionSupport{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	String Redirecturl;
	public String execute() 
	   {
		//jsonobj.put("SUCCESS", "SUCCESS");
		HttpServletRequest request = ServletActionContext.getRequest();
		String url = request.getHeader("referer");
	//	ActionContext.getContext().setLocale(Locale.);
		//String tempurl = url;
		//url = tempurl.replaceAll("http://localhost:8080/LintasTravelIBE/", "");
		///System.out.println("url" +url);
		
		//setRedirecturl(url);
	       return SUCCESS;
	   }

	

	public String getRedirecturl() {
		return Redirecturl;
	}

	public void setRedirecturl(String redirecturl) {
		Redirecturl = redirecturl;
	}
}
