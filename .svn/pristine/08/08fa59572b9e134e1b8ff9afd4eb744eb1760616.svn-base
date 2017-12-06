package com.lintas.action;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;

import javax.mail.Session;

import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;

import com.lintas.DAO.Frontuserdao;
import com.lintas.model.Email;
import com.lintas.model.Enquery;
import com.lintas.model.FrontUserDetail;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class EnquiryAction extends ActionSupport implements ModelDriven<Enquery>,SessionAware{
	public static final org.apache.log4j.Logger logger=org.apache.log4j.Logger.getLogger(FrontUsers.class);

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	SessionMap<String, Object> sessionmap ;
	Enquery enquiry = new Enquery();
	Frontuserdao userdao = new Frontuserdao();
	
	public String SaveQueryForm(){
		logger.info("insertTravelQueryDetails");
		try
		{
			SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
			Date checkindate = sdf.parse(enquiry.getCheckinDateTime());
			Date checkoutdate = sdf.parse(enquiry.getCheckoutDateTime());
			SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");
			String checkin = DATE_FORMAT.format(checkindate);
			String checkout =  DATE_FORMAT.format(checkoutdate);
			enquiry.setCheckinDateTime(checkin);
			enquiry.setCheckoutDateTime(checkout);
			boolean isinserted = userdao.insertTravelQueryDetails(enquiry);
			if(isinserted){
				logger.info("enquiry.getId()" +enquiry.getId());
				userdao.insertEmail(String.valueOf(enquiry.getId()), 0, Email.EMAIL_TYPE_USER_ENQUERIES);
				addActionMessage(getText("global.userSendQuery"));
				return SUCCESS;
				
				
			}
			else{
				addActionError(getText("global.userSendQueryError"));
				//addActionError("Please Try Again.");
				return ERROR;
			}
			
		}
		catch(Exception e)
		{
			addActionError(getText("global.userSendQueryError"));
			//addActionError("Please Try Again.");
			return ERROR;
		}
	}
	
	
	@Override
	public void setSession(Map<String, Object> arg0) {
		sessionmap = (SessionMap<String, Object>) arg0;
		
	}

	@Override
	public Enquery getModel() {
		// TODO Auto-generated method stub
		return enquiry;
	}

}
