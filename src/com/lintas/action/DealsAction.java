package com.lintas.action;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;

import com.lintas.DAO.Dealsdao;
import com.lintas.model.CrudOperationDeals;
import com.lintas.model.User;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class DealsAction extends ActionSupport {

	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	SessionMap<String, Object> sessionmap ;
	CrudOperationDeals deal = new CrudOperationDeals();
	Dealsdao dealsdao = new Dealsdao();
	
	private Map jsonobj  =  new HashMap();
	
	public String GetAllDeals()
	{
		List<CrudOperationDeals> deallist = dealsdao.GetPublishedDeals();	
		User agent = (User) ActionContext.getContext().getSession().get("agent");
		if(agent!=null)
			jsonobj.put("IsAgentloggedin", "true");
		else
			jsonobj.put("IsAgentloggedin", "false");
		
	    jsonobj.put("Deals", deallist);
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
}
