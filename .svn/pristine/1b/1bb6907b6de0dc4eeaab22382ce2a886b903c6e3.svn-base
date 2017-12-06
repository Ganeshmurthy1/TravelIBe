/*
	@author info name:Vimal Susai Raj
 	created date:16-10-2015                 */
	

package com.lintas.action;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;

import com.lintas.DAO.FrontUserThemeDao;
import com.lintas.DAO.Frontuserdao;
import com.lintas.config.MailConfig;
import com.lintas.model.CompanyTheme;
import com.lintas.model.Country;
import com.lintas.model.Email;
import com.lintas.model.FlightOrderRow;
import com.lintas.model.FrontUserDetail;
import com.lintas.model.HotelReport;
import com.lintas.model.LintasQueryForm;
import com.lintas.model.MailStatus;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class FrontUsers extends ActionSupport implements ModelDriven<FrontUserDetail>,SessionAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static final org.apache.log4j.Logger logger=org.apache.log4j.Logger.getLogger(FrontUsers.class);
	Frontuserdao userdao = new Frontuserdao();
	FrontUserThemeDao userTheme = new FrontUserThemeDao();
	FrontUserDetail userdetail = new FrontUserDetail();
	FlightOrderRow flightdetail = new FlightOrderRow();
	private List<FlightOrderRow> historylist ;
	private List<HotelReport> hotelhistorylist ;
	MailConfig mailconfig = new MailConfig();
	SessionMap<String, Object> sessionmap ;
	MailStatus status = new MailStatus();
	LintasQueryForm queryform = new LintasQueryForm();
	 private String fromdate;
	 private String todate;
	 private List<Country> CountryList ;
	 String Emailid;
	 private String url=null;
	 
	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String FrontuserRegister() 
	{
		
		
		try
		{
			/*System.out.println(userdao.isEmailExists(userdetail));*/
			if(!userdao.isEmailExists(userdetail))
			{
				userdetail.setUserName(userdetail.getEmail());
				userdao.insertDetails(userdetail);
				userdao.insertEmail(String.valueOf(userdetail.getId()), 0, Email.EMAIL_TYPE_FRONT_USER_REGISTRATION);
				//mailconfig.sendRegMail(userdetail.getEmail());
				addActionMessage(getText("global.userregsuccess"));
				//addActionMessage("Registered Successfully");
				logger.info("-----Registered Successfully--------");
				return SUCCESS;
			}
			else
				addActionError(getText("global.useremailexitsfailed"));
				return ERROR;
		}
		catch(Exception e)
		{			
			addActionError(getText("global.userregfailed"));
			//addActionError("Register Failed");
			return ERROR;
			
		
		}
		
		
	}

	public String FrontUserLogin()
	{
		try
		{
			userdetail = userdao.UserLogin(userdetail.getEmail(),userdetail.getPassword());
			if(userdetail!=null)
			{
			
				ActionContext.getContext().getSession().put("user", userdetail);
				logger.info("-----Login success--------");
				return SUCCESS;
				
			}
			else
			{
				addActionError(getText("global.userloginerror"));
				//addActionError("Login failed try again");
				logger.info("-----Login failed--------");
				return ERROR;
			}
			
			
		}catch(Exception e)
		{
			logger.info("-----Login Exception failed--------"+e.getMessage());
			addActionError(getText("global.userloginexcep"));
			//addActionError("Login Failed");
			return ERROR;
		}
		
	}

	public String UpdateProfile()
	{
		boolean isupdated = userdao.UpdateProfile(userdetail);
		if(isupdated)
		{		
			ActionContext.getContext().getSession().remove("user");
			ActionContext.getContext().getSession().put("user", userdetail);
			addActionMessage(getText("global.userUpdateProfilesuccess"));
			//addActionMessage("Your account updated successfully");
			return SUCCESS;
		}
		else
		{
			addActionError(getText("global.userUpdateProfileError"));
			//addActionError("Update failed try again");
			return ERROR;
		}
		
		
	}

	public String ForgotPassword() 
	{
		/*System.out.println("Emailid " +Emailid);*/
		FrontUserDetail user = userdao.GetUserPassword(Emailid);
		if(user!=null)
		{
			String email = user.getEmail();
			/*System.out.println(user.getId());*/
			userdao.insertEmail(String.valueOf(user.getId()), 1, Email.EMAIL_TYPE_FRONT_USER_FORGOT_PWD);
				addActionMessage("Please check your for your login credentials");
				return SUCCESS;
			
		}
		else
		{
			/*System.out.println("error"+user);*/
			addActionError(getText("global.userFpasswordCheckmail"));
			//addActionError("Check Your Mail Address");
			return ERROR;
		}
		
		
	}
	
	public String UserbookingHistroy()
	{
		userdetail = (FrontUserDetail) ActionContext.getContext().getSession().get("user");
		//System.out.println("userdetail" +userdetail.getId());	
		
			
		  historylist = userdao.GetBookingHistory(userdetail.getUserName());
			return SUCCESS;
		
		
		 
	}

	public String SearchuserHotelbookingHistory() throws ParseException
	{
		userdetail = (FrontUserDetail) ActionContext.getContext().getSession().get("user");
		
		DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		
		Date startDate = (Date)formatter.parse(fromdate);
			Date  endDate = (Date)formatter.parse(todate);
			String fdate  = new SimpleDateFormat("yyyy-MM-dd").format(startDate);
			String ddate  = new SimpleDateFormat("yyyy-MM-dd").format(endDate);	
		
			
			 hotelhistorylist = userdao.SearchBookingHotelHistory(userdetail.getUserName(),fdate,ddate);	
	
		return SUCCESS;
	}
	
	public String SearchuserbookingHistory() throws ParseException
	{
		userdetail = (FrontUserDetail) ActionContext.getContext().getSession().get("user");
		
		DateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
         
		Date startDate = (Date)formatter.parse(fromdate);
			Date  endDate = (Date)formatter.parse(todate);
			String fdate  = new SimpleDateFormat("yyyy-MM-dd").format(startDate);
			String ddate  = new SimpleDateFormat("yyyy-MM-dd").format(endDate);	
		
		historylist = userdao.SearchBookingHistory(userdetail.getUserName(),fdate,ddate);	
    
		return SUCCESS;
	}
	
	public String Getcountrylist()
	{
		CountryList = userdao.getCountryList();
		
		return SUCCESS;
	}
	
	public String UserLogout()
	{
		if(sessionmap!=null){
			sessionmap.invalidate();
		}
		return SUCCESS;
	}
	
	public String SendQuerytoLintas()
	{ 
		try
		{
			userdao.insertQueryDetails(queryform);
			addActionMessage(getText("global.userSendQuery"));
			return SUCCESS;
		}
		catch(Exception e)
		{
			addActionError(getText("global.userSendQueryError"));
			//addActionError("Please Try Again.");
			return ERROR;
		}
		
	}
	
	@Override
	public FrontUserDetail getModel() {
		// TODO Auto-generated method stub
		return userdetail ;
	}

	@Override
	public void setSession(Map<String, Object> map) {
		sessionmap=(SessionMap<String, Object>) map;
		
	}
	public String getFromdate() {
		return fromdate;
	}

	public void setFromdate(String fromdate) {
		this.fromdate = fromdate;
	}

	public String getTodate() {
		return todate;
	}

	public void setTodate(String todate) {
		this.todate = todate;
	}
	public List<Country> getCountryList() {
		return CountryList;
	}

	public void setCountryList(List<Country> countryList) {
		CountryList = countryList;
	}

	public List<FlightOrderRow> getHistorylist() {
		return historylist;
	}

	public void setHistorylist(List<FlightOrderRow> historylist) {
		this.historylist = historylist;
	}

	public List<HotelReport> getHotelhistorylist() {
		return hotelhistorylist;
	}

	public void setHotelhistorylist(List<HotelReport> hotelhistorylist) {
		this.hotelhistorylist = hotelhistorylist;
	}

	public String getEmailid() {
		return Emailid;
	}

	public void setEmailid(String email) {
		Emailid = email;
	}
}
