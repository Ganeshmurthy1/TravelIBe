package com.lintas.admin;

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;

import com.admin.flight.fin.sheet.Dao.FlightTravelRequestDao;
import com.admin.flight.fin.sheet.model.FlightTravelRequestQuotation;
import com.admin.flight.fin.sheet.model.FlightTravelRequestTripDetail;
import com.admin.hotel.fin.sheet.Dao.HotelTravelRequestDao;
import com.admin.hotel.fin.sheet.model.HotelTravelRequestQuotation;
import com.intelli.util.DateConversion;
import com.lintas.DAO.Agentdao;
import com.lintas.model.Company;
import com.lintas.model.CompanyTheme;
import com.lintas.model.User;
import com.lintas.session.encryptions;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class SearchAction extends ActionSupport implements ModelDriven<SearchFlightHotels>,SessionAware{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	SearchFlightHotels searchFlightHotels = new SearchFlightHotels();
	
	public static final org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(SearchAction.class);
	SessionMap<String, Object> sessionmap ;
	private encryptions enc = new encryptions();
	User agent = new User();
	Agentdao agentdao = new Agentdao();

	public String SearchFlightHotel(){
		try{
			String decrString = "";
			String dammytext = URLDecoder.decode(searchFlightHotels.getDammytext(),"UTF-8").replace(" ", "+");
			String tripNumb = searchFlightHotels.getTripNumber();			
			
			decrString = enc.decryptAES(dammytext);
			String[] parts ;		
			parts = decrString.split("-!&");

			boolean emulateFlag=false;
			int emulateByCompanyId;
			int emulateByUserId;
			Company emulateByCompany=null;
			User emulateByUser=null;

			if(parts!=null && parts.length>3 && ActionContext.getContext().getSession().get("agent") == null)
			{
				String email = parts[0];  		
				String Password = parts[1]; 		
				String company_userid = parts[2]; 		

				if(parts!=null && parts.length>3 && parts.length>3 && parts[3]!=null && parts[3].equalsIgnoreCase("true"))
				{
					emulateFlag=true;
					ActionContext.getContext().getSession().put("emulateFlag",emulateFlag);

					if(parts.length>4 && StringUtils.isNotBlank(parts[4]))
					{
						emulateByCompanyId = Integer.parseInt(parts[4]);
						emulateByCompany= agentdao.getCompanyProfile(emulateByCompanyId);;
						ActionContext.getContext().getSession().put("emulateByCompany",emulateByCompany);
					}
					if(parts.length>5 && StringUtils.isNotBlank(parts[5]))
					{
						emulateByUserId = Integer.parseInt(parts[5]);
						emulateByUser = agentdao.getUserProfile(emulateByUserId); 
						ActionContext.getContext().getSession().put("emulateByUser",emulateByUser);
						ActionContext.getContext().getSession().put("emulateByUserId",emulateByUser.getId());						
						
					}
				}

				
				
				
				agent = agentdao.LoginFromQuote(email, Password,company_userid);
				Company myCompany = agentdao.GetParentCompany(agent.getCompanyid());
				
			
				if(agent!=null )
				{
					if(agent.getUserrole_id().isCorporate() || agent.getUserrole_id().isTravelDesk() || agent.getUserrole_id().isAdmin() || agent.getUserrole_id().isOrder() || agent.getUserrole_id().isSuperuser() || agent.getUserrole_id().isUsermode() )
					{
						Timestamp currentTimestamp = new java.sql.Timestamp(Calendar.getInstance().getTime().getTime());				
						String EncryptedAdminlink = enc.encryptAES(agent.getEmail()+"-!&"+agent.getPassword()+"-!&"+agent.getCompany_userid()+"-!&"+String.valueOf(currentTimestamp.getTime()));
						if(agent.getSecurityanswer()!=null && !agent.getSecurityanswer().equalsIgnoreCase(""))
						{
							ActionContext.getContext().getSession().put("EncryptedAdminlink", EncryptedAdminlink);
							ActionContext.getContext().getSession().put("agent", agent);
							boolean isCorporate = agentdao.GetCompanyRole(agent.getEmail(), agent.getPassword(),agent.getCompany_userid());
							//ActionContext.getContext().getSession().put("companyrole", companyrole);
							ActionContext.getContext().getSession().put("isCorporate", isCorporate);
							if(myCompany.getParent_company_userid().equalsIgnoreCase(myCompany.getSuper_company_userid()))
							{						
								ActionContext.getContext().getSession().put("isCardAcess", true);
							}else{						
								ActionContext.getContext().getSession().put("isCardAcess", false);
							}
							if(searchFlightHotels.getMyaction()!=null)
							{
								if(searchFlightHotels.getMyaction().equalsIgnoreCase("TwowaySearch")){
									searchFlightHotels.setMyaction("SearchRoundTrip");
									actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isDymark="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&ud="+agent.getEmail()+"&triptype="+searchFlightHotels.getTriptype()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depDate="+URLEncoder.encode(searchFlightHotels.getDepDate(),"UTF-8")+"&arvlDate="+URLEncoder.encode(searchFlightHotels.getArvlDate(),"UTF-8")+"&adult="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&infant="+searchFlightHotels.getInfant()+"&cabinClass="+searchFlightHotels.getCabinClass()+"&Airlinecode="+searchFlightHotels.getAirlinecode()+"&thm=Default";
								}
								if( searchFlightHotels.getMyaction().equalsIgnoreCase("specialroundtrip")){
									searchFlightHotels.setMyaction("SearchDomRoundTrip");
									actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isDymark="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&ud="+agent.getEmail()+"&triptype="+searchFlightHotels.getTriptype()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depDate="+URLEncoder.encode(searchFlightHotels.getDepDate(),"UTF-8")+"&arvlDate="+URLEncoder.encode(searchFlightHotels.getArvlDate(),"UTF-8")+"&adult="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&infant="+searchFlightHotels.getInfant()+"&cabinClass="+searchFlightHotels.getCabinClass()+"&Airlinecode="+searchFlightHotels.getAirlinecode()+"&thm=Default";
								}
								if(searchFlightHotels.getMyaction().equalsIgnoreCase("onewaySearch")){								searchFlightHotels.setMyaction("/#/Flights-oneway");
								actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isDymark="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&ud="+agent.getEmail()+"&triptype="+searchFlightHotels.getTriptype()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depDate="+URLEncoder.encode(searchFlightHotels.getDepDate(),"UTF-8")+"&arvlDate=&adult="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&infant="+searchFlightHotels.getInfant()+"&cabinClass="+searchFlightHotels.getCabinClass()+"&Airlinecode="+searchFlightHotels.getAirlinecode()+"&thm=Default";
								}
								if(searchFlightHotels.getMyaction().equalsIgnoreCase("multiwaySearch"))	{
									actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isDymark="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&ud="+agent.getEmail()+"&triptype="+searchFlightHotels.getTriptype()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&origin1="+URLEncoder.encode(searchFlightHotels.getOrigin1(),"UTF-8")+"&destination1="+URLEncoder.encode(searchFlightHotels.getDestination1(),"UTF-8")+"&depDate1="+URLEncoder.encode(searchFlightHotels.getDepDate1(),"UTF-8")+"&origin2="+URLEncoder.encode(searchFlightHotels.getOrigin2(),"UTF-8")+"&destination2="+URLEncoder.encode(searchFlightHotels.getDestination2(),"UTF-8")+"&depDate2="+URLEncoder.encode(searchFlightHotels.getDepDate2(),"UTF-8")+"&origin3="+URLEncoder.encode(searchFlightHotels.getOrigin3(),"UTF-8")+"&destination3="+URLEncoder.encode(searchFlightHotels.getDestination3(),"UTF-8")+"&depDate3="+URLEncoder.encode(searchFlightHotels.getDepDate3(),"UTF-8")+"&origin4="+URLEncoder.encode(searchFlightHotels.getOrigin4(),"UTF-8")+"&destination4="+URLEncoder.encode(searchFlightHotels.getDestination4(),"UTF-8")+"&depDate4="+URLEncoder.encode(searchFlightHotels.getDepDate4(),"UTF-8")+"&adult="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&infant="+searchFlightHotels.getInfant()+"&cabinClass="+searchFlightHotels.getCabinClass()+"&Airlinecode="+searchFlightHotels.getAirlinecode()+"&thm=Default";
								}
								if(searchFlightHotels.getMyaction().equalsIgnoreCase("HotelSearch")){								
									searchFlightHotels.setMyaction("/#/Hotel-List-Default");
									actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&mode="+searchFlightHotels.getMode()+"&type="+searchFlightHotels.getType()+"&order="+searchFlightHotels.getOrder()+"&filter="+searchFlightHotels.getFilter()+"&cachelevel="+searchFlightHotels.getCachelevel()+"&cachelevel="+searchFlightHotels.getCachelevel()+"&version="+searchFlightHotels.getVersion()+"&lang="+searchFlightHotels.getLang()+"&countrycode="+searchFlightHotels.getCountrycode()+"&country="+searchFlightHotels.getCountry()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&cityname="+URLEncoder.encode(searchFlightHotels.getCityname(),"UTF-8")+"&citycode="+URLEncoder.encode(searchFlightHotels.getCitycode(),"UTF-8")+"&datestart="+URLEncoder.encode(searchFlightHotels.getDatestart(),"UTF-8")+"&dateend="+URLEncoder.encode(searchFlightHotels.getDateend(),"UTF-8")+"&rooms="+searchFlightHotels.getNoofrooms()+"&passdetail="+searchFlightHotels.getRooms()+"&thm=Default";
								}
								if(searchFlightHotels.getMyaction().equalsIgnoreCase("HotelQuoteSearch")){
									searchFlightHotels.setMyaction("/#/Hotel-List-Default");
									actionUrl = searchFlightHotels.getMyaction()+"?hotelquotationid="+searchFlightHotels.getHotelquotationid()+"&city="+URLEncoder.encode(searchFlightHotels.getCityname(),"UTF-8")+"&citycode="+URLEncoder.encode(searchFlightHotels.getCitycode(),"UTF-8")+"&datain="+URLEncoder.encode(searchFlightHotels.getDatestart(),"UTF-8")+"&dateout="+URLEncoder.encode(searchFlightHotels.getDateend(),"UTF-8")+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&noofrooms="+searchFlightHotels.getNoofrooms()+"&currency="+agent.getCurrencyCode()+"&rooms="+URLDecoder.decode(searchFlightHotels.getRooms(),"UTF-8");
								}
								if(searchFlightHotels.getMyaction().equalsIgnoreCase("HotelQuoteRoomSearch")){			
									//System.out.println("searchFlightHotels.getHotelquotationid() "+searchFlightHotels.getHotelquotationid());
									searchFlightHotels.setMyaction("/#/Hotel-QuoteDetails");		
									HotelTravelRequestDao htdao = new HotelTravelRequestDao();
									List<HotelTravelRequestQuotation> hotelQuotationList = htdao.getHotelRequestTravelQuotationList(Long.parseLong(searchFlightHotels.getHotelquotationid()) );								
									if(hotelQuotationList!=null && hotelQuotationList.size()>0){
										for(HotelTravelRequestQuotation  hotelQuotation : hotelQuotationList){										
											actionUrl = searchFlightHotels.getMyaction()+"?hotelquotationid="+hotelQuotation.getId()+"&city="+URLEncoder.encode(hotelQuotation.getHotelCity(),"UTF-8")+"&citycode="+URLEncoder.encode(hotelQuotation.getCityCode(),"UTF-8")+"&datain="+DateConversion.convertDateToStringToDate(hotelQuotation.getCheckInDate())+"&dateout="+DateConversion.convertDateToStringToDate(hotelQuotation.getCheckOutDate())+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&noofrooms="+hotelQuotation.getRoomCount()+"&currency="+agent.getCurrencyCode()+"&rooms="+URLEncoder.encode(hotelQuotation.getRoomSchema(),"UTF-8")+"&companyId="+hotelQuotation.getCompanyId()+"&userId="+hotelQuotation.getUserId()+"&location=&address=&hotelcode="+hotelQuotation.getHotelCode()+"&hotelname="+URLEncoder.encode(hotelQuotation.getHotelName(),"UTF-8")+"&selectedroomid="+URLEncoder.encode(hotelQuotation.getRoomId(),"UTF-8")+"&fN="+hotelQuotation.getHotelTravelRequest().getFirstName()+"&lN="+hotelQuotation.getHotelTravelRequest().getLastName()+"&thm=Default";

											
										}
									}								
								}
								if(searchFlightHotels.getMyaction().equalsIgnoreCase("onewayQuoteSearch")){
									//System.out.println("hotelQuotationList "+searchFlightHotels.getTriptype());
									if(searchFlightHotels.getTriptype().equals("R")){	
										int orifirstindex = searchFlightHotels.getOri().indexOf(',') + 1;
										int orilastindex = searchFlightHotels.getOri().lastIndexOf(',');
										int desfirstindex = searchFlightHotels.getDes().indexOf(',') + 1;
										int deslastindex = searchFlightHotels.getDes().lastIndexOf(',');
										String origincountry = searchFlightHotels.getOri().substring(orifirstindex, orilastindex);
										String destinatiocountry = searchFlightHotels.getDes().substring(desfirstindex,deslastindex);

										if(origincountry.equalsIgnoreCase("india") && destinatiocountry.equalsIgnoreCase("india")){
											searchFlightHotels.setMyaction("/#/Flights-Domestic-Default");
											actionUrl = searchFlightHotels.getMyaction()+"?ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depart="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getDepDate()),"UTF-8")+"&arrival="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getArvlDate()),"UTF-8")+"&class="+searchFlightHotels.getCabinClass()+"&ccy="+agent.getCurrencyCode()+"&flightquotationid="+searchFlightHotels.getFlightQuotationRequestId()+"&tty="+searchFlightHotels.getTriptype()+"&isDom=false&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&isDyn="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&sky=&adt="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&inf="+searchFlightHotels.getInfant()+"&airline="+searchFlightHotels.getAirlinecode()+"&thm=Default";

										}else{
											searchFlightHotels.setMyaction("/#/Flights-International-Default");
											actionUrl = searchFlightHotels.getMyaction()+"?ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depart="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getDepDate()),"UTF-8")+"&arrival="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getArvlDate()),"UTF-8")+"&class="+searchFlightHotels.getCabinClass()+"&ccy="+agent.getCurrencyCode()+"&flightquotationid="+searchFlightHotels.getFlightQuotationRequestId()+"&tty="+searchFlightHotels.getTriptype()+"&isDom=false&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&isDyn="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&sky=&adt="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&inf="+searchFlightHotels.getInfant()+"&airline="+searchFlightHotels.getAirlinecode()+"&thm=Default";

										}


										//actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isDymark="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&flightquotationid="+searchFlightHotels.getFlightQuotationRequestId()+"&triptype="+searchFlightHotels.getTriptype()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depDate="+URLEncoder.encode(searchFlightHotels.getDepDate(),"UTF-8")+"&arvlDate="+URLEncoder.encode(searchFlightHotels.getArvlDate(),"UTF-8")+"&adult="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&infant="+searchFlightHotels.getInfant()+"&cabinClass="+searchFlightHotels.getCabinClass()+"&Airlinecode="+searchFlightHotels.getAirlinecode(); 
									}
									else{							    
										searchFlightHotels.setMyaction("/#/Flights-oneway-Default");																

										actionUrl = searchFlightHotels.getMyaction()+"?ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depart="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getDepDate()),"UTF-8")+"&arrival=&class="+searchFlightHotels.getCabinClass()+"&ccy="+agent.getCurrencyCode()+"&flightquotationid="+searchFlightHotels.getFlightQuotationRequestId()+"&tty="+searchFlightHotels.getTriptype()+"&isDom=false&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&isDyn="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&sky=&adt="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&inf="+searchFlightHotels.getInfant()+"&airline="+searchFlightHotels.getAirlinecode()+"&thm=Default";


									}
								}
								
								if(searchFlightHotels.getMyaction().equalsIgnoreCase("FlightQuotePriceSearch"))
								{
									searchFlightHotels.setMyaction("/#/FlightQuoteBookSummary");
									FlightTravelRequestDao flightTravelRequestDao = new FlightTravelRequestDao();
									List<FlightTravelRequestQuotation> flightTravelRequestQuotations = flightTravelRequestDao.getFlightRequestTravelQuotationList(Long.parseLong(searchFlightHotels.getFlightQuotationRequestId()));
									List<FlightTravelRequestTripDetail> flightTravelRequestTripDetails = flightTravelRequestDao.getFlightRequestTravelTripDetailList(Long.parseLong(searchFlightHotels.getFlightQuotationRequestId()));
									String returnselectedAirline = "";
									String returnselectedFlightNumber = "";							
									String departTime = "";
									String arrivalTime = "";
									String returndepartTime = "";
									String returnarrivalTime = "";
									boolean isSpecialsearch = false;
									if(flightTravelRequestTripDetails!=null && flightTravelRequestTripDetails.size() > 0)
									{
										int i = 0;
										for (FlightTravelRequestTripDetail flightTravelRequestTripDetail : flightTravelRequestTripDetails) {

											if(i == 0){
												SimpleDateFormat sdfT = new SimpleDateFormat("HH:mm");
												if(flightTravelRequestTripDetail.getDepartureTime()!=null)
													departTime = sdfT.format(flightTravelRequestTripDetail.getDepartureTime());
												if(flightTravelRequestTripDetail.getArrivalTime()!=null)
													arrivalTime = sdfT.format(flightTravelRequestTripDetail.getArrivalTime());
											}	
											if(i == 1){
												SimpleDateFormat sdfT = new SimpleDateFormat("HH:mm");
												if(flightTravelRequestTripDetail.getDepartureTime()!=null)
													returndepartTime = sdfT.format(flightTravelRequestTripDetail.getDepartureTime());
												if(flightTravelRequestTripDetail.getArrivalTime()!=null)
													returnarrivalTime = sdfT.format(flightTravelRequestTripDetail.getArrivalTime());
												returnselectedAirline = flightTravelRequestTripDetail.getOperatedByName();
												returnselectedFlightNumber = flightTravelRequestTripDetail.getFlightNumber();
											}	
											i++;
										}
									}
									if(flightTravelRequestQuotations!=null && flightTravelRequestQuotations.size() > 0){
										for (FlightTravelRequestQuotation flightTravelRequestQuotation : flightTravelRequestQuotations) {
											String arrivalDate = "";
											if(flightTravelRequestQuotation.getArrivalDate() != null)
												arrivalDate = URLEncoder.encode(DateConversion.convertDateToStringToDate(flightTravelRequestQuotation.getArrivalDate()),"UTF-8");

											int orifirstindex = flightTravelRequestQuotation.getOrigin().indexOf(',') + 1;
											int orilastindex = flightTravelRequestQuotation.getOrigin().lastIndexOf(',');
											int desfirstindex = flightTravelRequestQuotation.getDestination().indexOf(',') + 1;
											int deslastindex = flightTravelRequestQuotation.getDestination().lastIndexOf(',');
											String origincountry = flightTravelRequestQuotation.getOrigin().substring(orifirstindex, orilastindex);
											String destinatiocountry = flightTravelRequestQuotation.getDestination().substring(desfirstindex,deslastindex);
										//	System.out.println("travelReId"+flightTravelRequestQuotation.getFlightTravelRequest().getId());
											if(flightTravelRequestQuotation.getTripType()!=null && flightTravelRequestQuotation.getTripType().equalsIgnoreCase("R") && (origincountry.equalsIgnoreCase("india") && destinatiocountry.equalsIgnoreCase("india"))){
												isSpecialsearch = true;
											}
																						
											actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isSpecialsearch="+isSpecialsearch+"&isDymark=false&marAt=0&flightquotationid="+flightTravelRequestQuotation.getId()+"&flightrequestid="+flightTravelRequestQuotation.getFlightTravelRequest().getId()+"&triptype="+flightTravelRequestQuotation.getTripType()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips=2&ori="+URLEncoder.encode(flightTravelRequestQuotation.getOrigin(),"UTF-8")+"&des="+URLEncoder.encode(flightTravelRequestQuotation.getDestination(),"UTF-8")+"&depDate="+URLEncoder.encode(DateConversion.convertDateToStringToDate(flightTravelRequestQuotation.getDepartureDate()),"UTF-8")+"&arvlDate="+arrivalDate+"&adult="+flightTravelRequestQuotation.getAdultCount()+"&kid="+flightTravelRequestQuotation.getChildCount()+"&infant="+flightTravelRequestQuotation.getInfantCount()+"&cabinClass="+flightTravelRequestQuotation.getBookingClassPrefer()+"&Airlinecode=&selectedAirline="+URLEncoder.encode(flightTravelRequestQuotation.getAirline(),"UTF-8")+"&selectedFlightNumber="+flightTravelRequestQuotation.getFlightNumber()+"&selectedFlightDepartTime="+departTime+"&selectedFlightArrivalTime="+arrivalTime+"&returnselectedAirline="+URLEncoder.encode(returnselectedAirline,"UTF-8")+"&returnselectedFlightNumber="+returnselectedFlightNumber+"&returnselectedFlightDepartTime="+returndepartTime+"&returnselectedFlightArrivalTime="+returnarrivalTime+"&quoteamount="+flightTravelRequestQuotation.getTotalAmount()+"&fN="+flightTravelRequestQuotation.getFlightTravelRequest().getFirstName()+"&lN="+flightTravelRequestQuotation.getFlightTravelRequest().getLastName()+"&tripNumb="+tripNumb;
										
										}
									}

								}
							}
							return SUCCESS;
						}
						else
						{
							ActionContext.getContext().getSession().put("EncryptedAdminlink", EncryptedAdminlink);
							ActionContext.getContext().getSession().put("agent", agent);
							boolean isCorporate = agentdao.GetCompanyRole(agent.getEmail(), agent.getPassword(),agent.getCompany_userid());
							ActionContext.getContext().getSession().put("isCorporate", isCorporate);
							searchFlightHotels.setMyaction("/#/");
							addActionError(getText("global.agentloginConfingMissing"));
							//addActionError("Please contact your company. Configuration setup is missing. ");
							return SUCCESS;
						}		
					}
					else
					{
						addActionError(getText("global.agentmailerrorcontactadmin"));
						//addActionError("You are not allowed to access. Please contact Administrator");
						return ERROR;
					}
				}

				else
				{
					addActionError(getText("global.agentloginnullerror"));
					//addActionError("Login failed try again");
					return ERROR;
				}		
			}
			else if(ActionContext.getContext().getSession().get("agent") != null){

				agent = (User) ActionContext.getContext().getSession().get("agent");
				if(searchFlightHotels.getMyaction()!=null)
				{
					if(searchFlightHotels.getMyaction().equalsIgnoreCase("TwowaySearch") || searchFlightHotels.getMyaction().equalsIgnoreCase("specialroundtrip") )
						actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isDymark="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&ud="+agent.getEmail()+"&triptype="+searchFlightHotels.getTriptype()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depDate="+URLEncoder.encode(searchFlightHotels.getDepDate(),"UTF-8")+"&arvlDate="+URLEncoder.encode(searchFlightHotels.getArvlDate(),"UTF-8")+"&adult="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&infant="+searchFlightHotels.getInfant()+"&cabinClass="+searchFlightHotels.getCabinClass()+"&Airlinecode="+searchFlightHotels.getAirlinecode()+"&thm=Default";
					if(searchFlightHotels.getMyaction().equalsIgnoreCase("onewaySearch"))
						actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isDymark="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&ud="+agent.getEmail()+"&triptype="+searchFlightHotels.getTriptype()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depDate="+URLEncoder.encode(searchFlightHotels.getDepDate(),"UTF-8")+"&arvlDate=&adult="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&infant="+searchFlightHotels.getInfant()+"&cabinClass="+searchFlightHotels.getCabinClass()+"&Airlinecode="+searchFlightHotels.getAirlinecode()+"&thm=Default";
					if(searchFlightHotels.getMyaction().equalsIgnoreCase("multiwaySearch"))	
						actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isDymark="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&ud="+agent.getEmail()+"&triptype="+searchFlightHotels.getTriptype()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&origin1="+URLEncoder.encode(searchFlightHotels.getOrigin1(),"UTF-8")+"&destination1="+URLEncoder.encode(searchFlightHotels.getDestination1(),"UTF-8")+"&depDate1="+URLEncoder.encode(searchFlightHotels.getDepDate1(),"UTF-8")+"&origin2="+URLEncoder.encode(searchFlightHotels.getOrigin2(),"UTF-8")+"&destination2="+URLEncoder.encode(searchFlightHotels.getDestination2(),"UTF-8")+"&depDate2="+URLEncoder.encode(searchFlightHotels.getDepDate2(),"UTF-8")+"&origin3="+URLEncoder.encode(searchFlightHotels.getOrigin3(),"UTF-8")+"&destination3="+URLEncoder.encode(searchFlightHotels.getDestination3(),"UTF-8")+"&depDate3="+URLEncoder.encode(searchFlightHotels.getDepDate3(),"UTF-8")+"&origin4="+URLEncoder.encode(searchFlightHotels.getOrigin4(),"UTF-8")+"&destination4="+URLEncoder.encode(searchFlightHotels.getDestination4(),"UTF-8")+"&depDate4="+URLEncoder.encode(searchFlightHotels.getDepDate4(),"UTF-8")+"&adult="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&infant="+searchFlightHotels.getInfant()+"&cabinClass="+searchFlightHotels.getCabinClass()+"&Airlinecode="+searchFlightHotels.getAirlinecode()+"&thm=Default";
					if(searchFlightHotels.getMyaction().equalsIgnoreCase("HotelSearch")){
						searchFlightHotels.setMyaction("SearchHotels");					
						//	actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&mode="+searchFlightHotels.getMode()+"&type="+searchFlightHotels.getType()+"&order="+searchFlightHotels.getOrder()+"&filter="+searchFlightHotels.getFilter()+"&cachelevel="+searchFlightHotels.getCachelevel()+"&cachelevel="+searchFlightHotels.getCachelevel()+"&version="+searchFlightHotels.getVersion()+"&lang="+searchFlightHotels.getLang()+"&countrycode="+searchFlightHotels.getCountrycode()+"&country="+searchFlightHotels.getCountry()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&cityname="+URLEncoder.encode(searchFlightHotels.getCityname(),"UTF-8")+"&citycode="+URLEncoder.encode(searchFlightHotels.getCitycode(),"UTF-8")+"&datestart="+URLEncoder.encode(searchFlightHotels.getDatestart(),"UTF-8")+"&dateend="+URLEncoder.encode(searchFlightHotels.getDateend(),"UTF-8")+"&rooms="+searchFlightHotels.getRooms()+"&Adults1="+searchFlightHotels.getAdults1()+"&Childs1="+searchFlightHotels.getChilds1()+"&Age1="+Ageparts[0].trim()+"&Age1="+Ageparts[1].trim()+"&Age1="+Ageparts[2].trim()+"&Age1="+Ageparts[3].trim()+"&Age1="+Ageparts[4].trim()+"&Adults2="+searchFlightHotels.getAdults2()+"&Childs2="+searchFlightHotels.getChilds2()+Age2String+"&Adults3="+searchFlightHotels.getAdults3()+"&Childs3="+searchFlightHotels.getChilds3()+Age3String+"&Adults4="+searchFlightHotels.getAdults4()+"&Childs4="+searchFlightHotels.getChilds4()+Age4String;
					}
					if(searchFlightHotels.getMyaction().equalsIgnoreCase("HotelQuoteSearch")){				
						searchFlightHotels.setMyaction("/#/Hotel-List-Default");
						actionUrl = searchFlightHotels.getMyaction()+"?hotelquotationid="+searchFlightHotels.getHotelquotationid()+"&city="+URLEncoder.encode(searchFlightHotels.getCityname(),"UTF-8")+"&citycode="+URLEncoder.encode(searchFlightHotels.getCitycode(),"UTF-8")+"&datain="+URLEncoder.encode(searchFlightHotels.getDatestart(),"UTF-8")+"&dateout="+URLEncoder.encode(searchFlightHotels.getDateend(),"UTF-8")+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&noofrooms="+searchFlightHotels.getNoofrooms()+"&currency="+agent.getCurrencyCode()+"&rooms="+URLDecoder.decode(searchFlightHotels.getRooms(),"UTF-8")+"&thm=Default";
					}

					if(searchFlightHotels.getMyaction().equalsIgnoreCase("HotelQuoteRoomSearch"))
					{					
						searchFlightHotels.setMyaction("/#/Hotel-QuoteDetails");		
						HotelTravelRequestDao htdao = new HotelTravelRequestDao();						
						List<HotelTravelRequestQuotation> hotelQuotationList = htdao.getHotelRequestTravelQuotationList(Long.parseLong(searchFlightHotels.getHotelquotationid()) );								
						if(hotelQuotationList!=null && hotelQuotationList.size()>0){
							for(HotelTravelRequestQuotation  hotelQuotation : hotelQuotationList){
														
								actionUrl = searchFlightHotels.getMyaction()+"?hotelquotationid="+hotelQuotation.getId()+"&city="+URLEncoder.encode(hotelQuotation.getHotelCity(),"UTF-8")+"&citycode="+URLEncoder.encode(hotelQuotation.getCityCode(),"UTF-8")+"&datain="+DateConversion.convertDateToStringToDate(hotelQuotation.getCheckInDate())+"&dateout="+DateConversion.convertDateToStringToDate(hotelQuotation.getCheckOutDate())+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&noofrooms="+hotelQuotation.getRoomCount()+"&currency="+agent.getCurrencyCode()+"&rooms="+URLEncoder.encode(hotelQuotation.getRoomSchema(),"UTF-8")+"&companyId="+hotelQuotation.getCompanyId()+"&userId="+hotelQuotation.getUserId()+"&location=&address=&hotelcode="+hotelQuotation.getHotelCode()+"&hotelname="+URLEncoder.encode(hotelQuotation.getHotelName(),"UTF-8")+"&selectedroomid="+URLEncoder.encode(hotelQuotation.getRoomId(),"UTF-8")+"&fN="+hotelQuotation.getHotelTravelRequest().getFirstName()+"&lN="+hotelQuotation.getHotelTravelRequest().getLastName()+"&tripNumb="+tripNumb+"&thm=Default";

								//actionUrl = searchFlightHotels.getMyaction()+"?hotelquotationid="+hotelQuotation.getId()+"&request_locale=&mode=0&type=4&order=PRICE&filter=7&cachelevel=LIVE&version=1.0&lang=en&countrycode=IN&country=india&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&cityname="+hotelQuotation.getHotelCity()+"&citycode="+hotelQuotation.getCityCode()+"&datestart="+DateConversion.convertDateToStringToDate(hotelQuotation.getCheckInDate())+"&dateend="+DateConversion.convertDateToStringToDate(hotelQuotation.getCheckOutDate())+"&rooms="+hotelQuotation.getRoomCount()+"&paxlist="+URLEncoder.encode(hotelQuotation.getRoomSchema(),"UTF-8")+"&companyId="+hotelQuotation.getCompanyId()+"&userId="+hotelQuotation.getUserId()+"&hotelcode="+hotelQuotation.getHotelCode()+"&hotelname="+URLEncoder.encode(hotelQuotation.getHotelName(),"UTF-8")+"&address=&location=&apiid=1,4&isdynamocmarkup=false&markupamt=0&searchkey=&selectedroomid="+hotelQuotation.getRoomId()+"&fN="+hotelQuotation.getHotelTravelRequest().getFirstName()+"&lN="+hotelQuotation.getHotelTravelRequest().getLastName();
							}

						}								
					}

					if(searchFlightHotels.getMyaction().equalsIgnoreCase("onewayQuoteSearch")){
						if(searchFlightHotels.getTriptype().equals("R")){

							int orifirstindex = searchFlightHotels.getOri().indexOf(',') + 1;
							int orilastindex = searchFlightHotels.getOri().lastIndexOf(',');
							int desfirstindex = searchFlightHotels.getDes().indexOf(',') + 1;
							int deslastindex = searchFlightHotels.getDes().lastIndexOf(',');
							String origincountry = searchFlightHotels.getOri().substring(orifirstindex, orilastindex);
							String destinatiocountry = searchFlightHotels.getDes().substring(desfirstindex,deslastindex);

							if(origincountry.equalsIgnoreCase("india") && destinatiocountry.equalsIgnoreCase("india")){
								searchFlightHotels.setMyaction("/#/Flights-Domestic-Default");
								actionUrl = searchFlightHotels.getMyaction()+"?ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depart="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getDepDate()),"UTF-8")+"&arrival="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getArvlDate()),"UTF-8")+"&class="+searchFlightHotels.getCabinClass()+"&ccy="+agent.getCurrencyCode()+"&flightquotationid="+searchFlightHotels.getFlightQuotationRequestId()+"&tty="+searchFlightHotels.getTriptype()+"&isDom=false&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&isDyn="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&sky=&adt="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&inf="+searchFlightHotels.getInfant()+"&airline="+searchFlightHotels.getAirlinecode()+"&thm=Default";

							}else{
								searchFlightHotels.setMyaction("/#/Flights-International-Default");
								actionUrl = searchFlightHotels.getMyaction()+"?ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depart="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getDepDate()),"UTF-8")+"&arrival="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getArvlDate()),"UTF-8")+"&class="+searchFlightHotels.getCabinClass()+"&ccy="+agent.getCurrencyCode()+"&flightquotationid="+searchFlightHotels.getFlightQuotationRequestId()+"&tty="+searchFlightHotels.getTriptype()+"&isDom=false&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&isDyn="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&sky=&adt="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&inf="+searchFlightHotels.getInfant()+"&airline="+searchFlightHotels.getAirlinecode()+"&thm=Default";

							}					}
						else{

							searchFlightHotels.setMyaction("/#/Flights-oneway-Default");

							actionUrl = searchFlightHotels.getMyaction()+"?ori="+URLEncoder.encode(searchFlightHotels.getOri(),"UTF-8")+"&des="+URLEncoder.encode(searchFlightHotels.getDes(),"UTF-8")+"&depart="+URLEncoder.encode(DateConversion.getDDMMYYYYIBEFormat(searchFlightHotels.getDepDate()),"UTF-8")+"&arrival=&class="+searchFlightHotels.getCabinClass()+"&ccy="+agent.getCurrencyCode()+"&flightquotationid="+searchFlightHotels.getFlightQuotationRequestId()+"&tty="+searchFlightHotels.getTriptype()+"&isDom=false&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips="+searchFlightHotels.getTrips()+"&isDyn="+searchFlightHotels.getIsDymark()+"&marAt="+searchFlightHotels.getMarAt()+"&sky=&adt="+searchFlightHotels.getAdult()+"&kid="+searchFlightHotels.getKid()+"&inf="+searchFlightHotels.getInfant()+"&airline="+searchFlightHotels.getAirlinecode()+"&thm=Default";

						}}

					if(searchFlightHotels.getMyaction().equalsIgnoreCase("FlightQuotePriceSearch")){
						searchFlightHotels.setMyaction("/#/FlightQuoteBookSummary");
						FlightTravelRequestDao flightTravelRequestDao = new FlightTravelRequestDao();
						List<FlightTravelRequestQuotation> flightTravelRequestQuotations = flightTravelRequestDao.getFlightRequestTravelQuotationList(Long.parseLong(searchFlightHotels.getFlightQuotationRequestId()));
						List<FlightTravelRequestTripDetail> flightTravelRequestTripDetails = flightTravelRequestDao.getFlightRequestTravelTripDetailList(Long.parseLong(searchFlightHotels.getFlightQuotationRequestId()));
						String returnselectedAirline = "";
						String returnselectedFlightNumber = "";							
						String departTime = "";
						String arrivalTime = "";
						String returndepartTime = "";
						String returnarrivalTime = "";
						boolean isSpecialsearch = false;
						if(flightTravelRequestTripDetails!=null && flightTravelRequestTripDetails.size() > 0)
						{
							int i = 0;
							for (FlightTravelRequestTripDetail flightTravelRequestTripDetail : flightTravelRequestTripDetails) {

								if(i == 0){
									SimpleDateFormat sdfT = new SimpleDateFormat("HH:mm");
									if(flightTravelRequestTripDetail.getDepartureTime()!=null)
										departTime = sdfT.format(flightTravelRequestTripDetail.getDepartureTime());
									if(flightTravelRequestTripDetail.getArrivalTime()!=null)
										arrivalTime = sdfT.format(flightTravelRequestTripDetail.getArrivalTime());
								}	
								if(i == 1){
									SimpleDateFormat sdfT = new SimpleDateFormat("HH:mm");
									if(flightTravelRequestTripDetail.getDepartureTime()!=null)
										returndepartTime = sdfT.format(flightTravelRequestTripDetail.getDepartureTime());
									if(flightTravelRequestTripDetail.getArrivalTime()!=null)
										returnarrivalTime = sdfT.format(flightTravelRequestTripDetail.getArrivalTime());
									returnselectedAirline = flightTravelRequestTripDetail.getOperatedByName();
									returnselectedFlightNumber = flightTravelRequestTripDetail.getFlightNumber();
								}	
								i++;
							}
						}
						if(flightTravelRequestQuotations!=null && flightTravelRequestQuotations.size() > 0){
							for (FlightTravelRequestQuotation flightTravelRequestQuotation : flightTravelRequestQuotations) {
								String arrivalDate = "";
								if(flightTravelRequestQuotation.getArrivalDate() != null)
									arrivalDate = URLEncoder.encode(DateConversion.convertDateToStringToDate(flightTravelRequestQuotation.getArrivalDate()),"UTF-8");

								int orifirstindex = flightTravelRequestQuotation.getOrigin().indexOf(',') + 1;
								int orilastindex = flightTravelRequestQuotation.getOrigin().lastIndexOf(',');
								int desfirstindex = flightTravelRequestQuotation.getDestination().indexOf(',') + 1;
								int deslastindex = flightTravelRequestQuotation.getDestination().lastIndexOf(',');
								String origincountry = flightTravelRequestQuotation.getOrigin().substring(orifirstindex, orilastindex);
								String destinatiocountry = flightTravelRequestQuotation.getDestination().substring(desfirstindex,deslastindex);

								if(flightTravelRequestQuotation.getTripType()!=null && flightTravelRequestQuotation.getTripType().equalsIgnoreCase("R") && (origincountry.equalsIgnoreCase("india") && destinatiocountry.equalsIgnoreCase("india"))){
									isSpecialsearch = true;
								}
															
								actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isSpecialsearch="+isSpecialsearch+"&isDymark=false&marAt=0&flightquotationid="+flightTravelRequestQuotation.getId()+"&flightrequestid="+flightTravelRequestQuotation.getFlightTravelRequest().getId()+"&triptype="+flightTravelRequestQuotation.getTripType()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips=2&ori="+URLEncoder.encode(flightTravelRequestQuotation.getOrigin(),"UTF-8")+"&des="+URLEncoder.encode(flightTravelRequestQuotation.getDestination(),"UTF-8")+"&depDate="+URLEncoder.encode(DateConversion.convertDateToStringToDate(flightTravelRequestQuotation.getDepartureDate()),"UTF-8")+"&arvlDate="+arrivalDate+"&adult="+flightTravelRequestQuotation.getAdultCount()+"&kid="+flightTravelRequestQuotation.getChildCount()+"&infant="+flightTravelRequestQuotation.getInfantCount()+"&cabinClass="+flightTravelRequestQuotation.getBookingClassPrefer()+"&Airlinecode=&selectedAirline="+URLEncoder.encode(flightTravelRequestQuotation.getAirline(),"UTF-8")+"&selectedFlightNumber="+flightTravelRequestQuotation.getFlightNumber()+"&selectedFlightDepartTime="+departTime+"&selectedFlightArrivalTime="+arrivalTime+"&returnselectedAirline="+URLEncoder.encode(returnselectedAirline,"UTF-8")+"&returnselectedFlightNumber="+returnselectedFlightNumber+"&returnselectedFlightDepartTime="+returndepartTime+"&returnselectedFlightArrivalTime="+returnarrivalTime+"&quoteamount="+flightTravelRequestQuotation.getTotalAmount()+"&fN="+flightTravelRequestQuotation.getFlightTravelRequest().getFirstName()+"&lN="+flightTravelRequestQuotation.getFlightTravelRequest().getLastName()+"&tripNumb="+tripNumb;
					/*			RmConfigDetails rm = new RmConfigDetails();
								RmConfigModel rmcon = rm.getRmConfigurations(Long.parseLong(tripNumb));
								actionUrl = searchFlightHotels.getMyaction()+"?request_locale=&isSpecialsearch="+isSpecialsearch+"&isDymark=false&marAt=0&flightquotationid="+flightTravelRequestQuotation.getId()+"&flightrequestid="+flightTravelRequestQuotation.getFlightTravelRequest().getId()+"&triptype="+flightTravelRequestQuotation.getTripType()+"&ccy="+agent.getCurrencyCode()+"&ay="+URLEncoder.encode(agent.getSecurityanswer(),"UTF-8")+"&trips=2&ori="+URLEncoder.encode(flightTravelRequestQuotation.getOrigin(),"UTF-8")+"&des="+URLEncoder.encode(flightTravelRequestQuotation.getDestination(),"UTF-8")+"&depDate="+URLEncoder.encode(DateConversion.convertDateToStringToDate(flightTravelRequestQuotation.getDepartureDate()),"UTF-8")+"&arvlDate="+arrivalDate+"&adult="+flightTravelRequestQuotation.getAdultCount()+"&kid="+flightTravelRequestQuotation.getChildCount()+"&infant="+flightTravelRequestQuotation.getInfantCount()+"&cabinClass="+flightTravelRequestQuotation.getBookingClassPrefer()+"&Airlinecode=&selectedAirline="+URLEncoder.encode(flightTravelRequestQuotation.getAirline(),"UTF-8")+"&selectedFlightNumber="+flightTravelRequestQuotation.getFlightNumber()+"&selectedFlightDepartTime="+departTime+"&selectedFlightArrivalTime="+arrivalTime+"&returnselectedAirline="+URLEncoder.encode(returnselectedAirline,"UTF-8")+"&returnselectedFlightNumber="+returnselectedFlightNumber+"&returnselectedFlightDepartTime="+returndepartTime+"&returnselectedFlightArrivalTime="+returnarrivalTime+"&quoteamount="+flightTravelRequestQuotation.getTotalAmount()+"&fN="+flightTravelRequestQuotation.getFlightTravelRequest().getFirstName()+"&lN="+flightTravelRequestQuotation.getFlightTravelRequest().getLastName()+"&tripNumb="+tripNumb+
										"&Approver="+rmcon.getApproverName()+"&bill="+rmcon.getBillNonBill()+"&busUnit="+rmcon.getBussinessUnit()+"&cost="+rmcon.getCostCenter()+"&dept="+rmcon.getDepartment()+"&EmpCode="+rmcon.getEmpCode()+"&Loc="+rmcon.getLocation()+"&mField1="+rmcon.getManualField1()+"&mField2="+rmcon.getManualField2()+"&mField3="+rmcon.getManualField3()+"&mField4="+rmcon.getManualField4()+"&mField5="+rmcon.getManualField5()+"&proCode="+rmcon.getProjectCode()+"&reason="+rmcon.getReasonForTravel()+"&trNumber="+rmcon.getTrNumber();
							*/
								
							}
						}

					}
				}
				return SUCCESS;
			}
			else
			{
				addActionError(getText("global.agentloginnullerror"));
				//addActionError("Login failed try again");
				return ERROR;
			}
		}catch(Exception e){
			//System.out.println("SearchFlightHotel Exception" +e);
			return SUCCESS;
		}
	}

	@Override
	public void setSession(Map<String, Object> map) {
		sessionmap=(SessionMap<String, Object>) map;		
	}


	@Override
	public SearchFlightHotels getModel() {
		// TODO Auto-generated method stub
		return searchFlightHotels;
	}


	private String actionUrl;		

	public String getActionUrl() {
		return actionUrl;
	}


}
