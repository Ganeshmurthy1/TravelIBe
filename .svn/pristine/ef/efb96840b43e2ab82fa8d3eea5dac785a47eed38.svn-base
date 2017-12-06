package com.admin.hotel.fin.sheet.action;

import java.util.ArrayList;

import java.util.List;
import java.util.Map;

import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.SessionAware;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import com.admin.common.util.CommonUtilSession;
import com.admin.hotel.fin.sheet.Dao.HotelTravelRequestDao;

import com.admin.hotel.fin.sheet.model.HotelTravelRequestQuotation;
import com.admin.hotel.fin.sheet.model.HotelTravelRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.intelli.util.DateConversion;
import com.lintas.model.User;
import com.opensymphony.xwork2.ActionSupport;



public class HotelTravelRequestQuotationAction extends ActionSupport implements SessionAware {
	private static final long serialVersionUID = 1L;
	HotelTravelRequestDao hotelTravelRequestDao = new HotelTravelRequestDao();	
	private String QuotationJson;
	private Long hotelQuotationRequestId;
	private List<HotelTravelRequestQuotation> hotelRequestQuotationList=null;	
	SessionMap<String, Object> sessionMap; 



	public String createHotelRequestTravelQuotation()  {
		User sessionUser=(User)sessionMap.get("agent");
		int userId= CommonUtilSession.checkEmulatedUser(sessionMap)?CommonUtilSession.getEmulatedUserIdInt(sessionMap):sessionUser.getId();
		int companyId= sessionUser.getCompanyid();
		try{      
			JSONParser parser = new JSONParser();
			JSONObject quotejson = (JSONObject) parser.parse(QuotationJson);	
			String RequestId =  (String) quotejson.get("hotelTravelRequest");
			hotelQuotationRequestId = Long.parseLong(RequestId);		
			JSONArray quotationsArray = (JSONArray) quotejson.get("quotes");
			hotelRequestQuotationList = new ArrayList<HotelTravelRequestQuotation>();
			ObjectMapper mapper = new ObjectMapper();	
			
			if (quotationsArray != null) { 			
				for (int i=0;i<quotationsArray.size();i++){			
					
					
					HotelTravelRequestQuotation hotelTravelRequestQuotation = mapper.readValue(quotationsArray.get(i).toString(), HotelTravelRequestQuotation.class);
					
					String additionalDataSchema = "<#checkIn(|)text(|)chkiData(|)1(|)fixed(|)CheckInDate#>"
							+ "<#checkInTime(|)text(|)chkitData(|)2(|)fixed(|)CheckInTime#>"
							+ "<#checkOut(|)text(|)chkoData(|)3(|)fixed(|)CheckOutDate#>"
							+ "<#checkOutTime(|)text(|)chkotData(|)5(|)fixed(|)CheckOutTime#>"
							+ "<#noOfNights(|)text(|)chnoofnights(|)6(|)fixed(|)noOfNights#>"
							+ "<#roomCount(|)number(|)roomCount(|)7(|)fixed(|)Room Count#>"
							+ "<#adultCount(|)number(|)adt(|)8(|)fixed(|)Adult Count#>"
							+ "<#childCount(|)number(|)chd(|)9(|)fixed(|)Child Count#>"
							+ "<#roomRatePerNight_(INR)(|)text(|)rrpn(|)10(|)fixed(|)RoomRate/Night#>"
							+ "<#hotelName(|)text(|)hna(|)11(|)fixed(|)HotelName#>"
							+ "<#hotelCategory(|)text(|)hcat(|)12(|)fixed(|)Hotel Category#>"
							+ "<#hotelAddress(|)textarea(|)hadd(|)13(|)fixed(|)Hotel Address#>"
							+ "<#hotelCity(|)text(|)hcity(|)14(|)fixed(|)Hotel City#>"
							+ "<#hotelCountry(|)select(|)hcountry(|)15(|)fixed(|)Hotel Country#>"
							+ "<#projectAddress(|)text(|)proadd(|)16(|)fixed(|)Project Address#>"
							+ "<#distanceFromWork(|)text(|)distwrk(|)17(|)fixed(|)Distance from Work#>"
							+ "<#roomType(|)text(|)rmtyp(|)18(|)fixed(|)Room Type#>"
							+ "<#availablePaymentOptionList(|)select(|)Prepaid(|)19(|)fixed(|)Payment Option(s) #>"
							+ "<#taxes(|)select(|)yes(|)20(|)fixed(|)Taxes#>"
							+ "<#breakfast(|)select(|)yes(|)21(|)fixed(|)Breakfast#>"
							+ "<#internet(|)select(|)yes(|)22(|)fixed(|)Internet#>"
							+ "<#cancellationPolicy(|)textarea(|)canceldata(|)23(|)fixed(|)Cancellation Policy#>"
							+ "<#preferProperty(|)select(|)true(|)24(|)fixed(|)Prefer Property#>";
					
					additionalDataSchema = additionalDataSchema.replace("chkiData",DateConversion.getDDMMYYYY(hotelTravelRequestQuotation.getCheckIn()) );
				
					additionalDataSchema = additionalDataSchema.replace("chkitData",hotelTravelRequestQuotation.getCheckInTime() );
					additionalDataSchema = additionalDataSchema.replace("chkoData",DateConversion.getDDMMYYYY(hotelTravelRequestQuotation.getCheckOut()) );
					
					additionalDataSchema = additionalDataSchema.replace("chkotData",hotelTravelRequestQuotation.getCheckOutTime() );
					additionalDataSchema = additionalDataSchema.replace("roomCount",hotelTravelRequestQuotation.getRoomCount()>=0?String.valueOf(hotelTravelRequestQuotation.getRoomCount()):"0");
					additionalDataSchema = additionalDataSchema.replace("adt",hotelTravelRequestQuotation.getAdultCount()>=0?String.valueOf(hotelTravelRequestQuotation.getAdultCount()):"0");
					additionalDataSchema = additionalDataSchema.replace("chd",hotelTravelRequestQuotation.getChildCount()>=0?String.valueOf(hotelTravelRequestQuotation.getChildCount()):"0");
					additionalDataSchema = additionalDataSchema.replace("rrpn",hotelTravelRequestQuotation.getRoomRatePerNight());
				
					if(hotelTravelRequestQuotation.getRoomType()!=null)
					additionalDataSchema = additionalDataSchema.replace("rmtyp",hotelTravelRequestQuotation.getRoomType());
					else
						additionalDataSchema = additionalDataSchema.replace("rmtyp","");
					
					additionalDataSchema = additionalDataSchema.replace("hna",hotelTravelRequestQuotation.getHotelName() );
					additionalDataSchema = additionalDataSchema.replace("hcat",hotelTravelRequestQuotation.getHotelCategory() );
					additionalDataSchema = additionalDataSchema.replace("hadd",hotelTravelRequestQuotation.getHotelAddress() );
					additionalDataSchema = additionalDataSchema.replace("hcity",hotelTravelRequestQuotation.getHotelCity() );
					additionalDataSchema = additionalDataSchema.replace("hcountry",hotelTravelRequestQuotation.getHotelCountry() );
					additionalDataSchema = additionalDataSchema.replace("proadd",hotelTravelRequestQuotation.getHotelCountry() );
					additionalDataSchema = additionalDataSchema.replace("canceldata",hotelTravelRequestQuotation.getCancellationPolicy() );
					additionalDataSchema = additionalDataSchema.replace("chnoofnights",String.valueOf(hotelTravelRequestQuotation.getNightCount()) );
				
					
					
					additionalDataSchema = additionalDataSchema.replace("distwrk","" );
					additionalDataSchema = additionalDataSchema.replace("availpay","");
					hotelTravelRequestQuotation.setAdditionalData(additionalDataSchema);	
					hotelRequestQuotationList.add(hotelTravelRequestQuotation);					
				} 
			}
					
			HotelTravelRequest hotelQuotationRequestNew = hotelTravelRequestDao.getHotelQuotationRequestDetails(hotelQuotationRequestId);
			boolean isInserted =  hotelTravelRequestDao.insertHotelQuotationList(hotelRequestQuotationList, hotelQuotationRequestNew,userId,companyId);		
			if(isInserted){			

				return SUCCESS;
			}
			else{

				return ERROR;
			}
		}
		catch(Exception e){
				return ERROR;
			
		}
	}


	public Long getHotelQuotationRequestId() {
		return hotelQuotationRequestId;
	}

	public void setHotelQuotationRequestId(Long hotelQuotationRequestId) {
		this.hotelQuotationRequestId = hotelQuotationRequestId;
	}


	public List<HotelTravelRequestQuotation> getHotelRequestQuotationList() {
		if(hotelRequestQuotationList==null){
			hotelRequestQuotationList=new ArrayList<>();
		}
		return hotelRequestQuotationList;
	}

	public void setHotelRequestQuotationList(List<HotelTravelRequestQuotation> hotelRequestQuotationList) {
		this.hotelRequestQuotationList = hotelRequestQuotationList;
	}


	public String getQuotationJson() {
		return QuotationJson;
	}

	public void setQuotationJson(String quotationJson) {
		QuotationJson = quotationJson;
	}
	@Override
	public void setSession(Map<String, Object> map) {
		// TODO Auto-generated method stub
		sessionMap=(SessionMap<String, Object>) map;
	}
}
