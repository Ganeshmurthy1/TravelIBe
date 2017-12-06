package com.lintas.session;

import org.apache.struts2.dispatcher.SessionMap;

import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.Interceptor;

public class SessionInterceptor implements Interceptor {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	 
	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		//System.out.println("SessionInterceptor destroy() is called...");
	}

	@Override
	public void init() {
		// TODO Auto-generated method stub
		//System.out.println("SessionInterceptor init() is called...");
	}

	@Override
	public String intercept(ActionInvocation actionInvocation) throws Exception {
		// TODO Auto-generated method stub
		ActionContext context = actionInvocation.getInvocationContext();
		SessionMap<String, Object> session = (SessionMap<String, Object>) context.getSession();

		 if(session == null || session.isEmpty()) {	
			 
			return "expired";
		}
		 
		return  actionInvocation.invoke();
	}

}