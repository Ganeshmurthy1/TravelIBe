package com.admin.flight.fin.sheet.Dao;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import com.admin.flight.fin.sheet.model.FlightTravelRequest;
import com.admin.flight.fin.sheet.model.FlightTravelRequestConnectingFlightTripDetail;
import com.admin.flight.fin.sheet.model.FlightTravelRequestQuotation;
import com.admin.flight.fin.sheet.model.FlightTravelRequestTripDetail;
import com.admin.hotel.fin.sheet.model.HotelTravelRequestQuotation;
import com.intelli.util.DateConversion;
import com.lintas.config.HibernateUtil;
import com.lintas.model.User;


public class FlightTravelRequestDao {

	public FlightTravelRequest insertFlightQuotationRowDetails(FlightTravelRequest flightTravelRequest){
		// TODO Auto-generated method stub
		Session session= null;
		Transaction transaction=null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			session.save(flightTravelRequest);
			transaction.commit();

		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();
			}
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}
		return flightTravelRequest;
	}

	public List<FlightTravelRequest>  loadFlightQuotationRowList(){
		// TODO Auto-generated method stub

		Session session= null;
		List<FlightTravelRequest>  list= null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria=session.createCriteria(FlightTravelRequest.class);
			list= criteria.list();
		} catch (Exception e) {
			e.printStackTrace();

		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();

			}
		}
		return list;

	}

	public List<FlightTravelRequestQuotation> insertFlightQuotationList(List<FlightTravelRequestQuotation> flightTravelRequestQuotation,FlightTravelRequest flightTravelRequest){
		// TODO Auto-generated method stub
		List<FlightTravelRequestQuotation> flightTravelRequestQuotationlist = new ArrayList<>();
		Session session= null;
		Transaction transaction=null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			if(flightTravelRequestQuotation!=null && flightTravelRequestQuotation.size()>0){
				for(FlightTravelRequestQuotation flightQuotation:flightTravelRequestQuotation){
					flightQuotation.setCreatedAt(new Timestamp(new Date().getTime()));				
					flightQuotation.setFlightTravelRequest(flightTravelRequest);
					session.save(flightQuotation);
					session.flush();
					flightTravelRequestQuotationlist.add(flightQuotation);
				}
			}
			transaction.commit();
			
		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();
			
			}
			e.printStackTrace();			
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}
		return flightTravelRequestQuotationlist;
	}
	
	public boolean updateFlightQuotation(long quotationid,long totalamount,long baseamount,long taxes){
		Session session = null;
		Transaction transaction = null;
		boolean isupdated = false;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			FlightTravelRequestQuotation flightTravelRequestQuotation = (FlightTravelRequestQuotation)session.get(FlightTravelRequestQuotation.class, quotationid);
			if(flightTravelRequestQuotation!=null){
			flightTravelRequestQuotation.setTotalAmount(new BigDecimal(totalamount));
			flightTravelRequestQuotation.setBaseAmount(new BigDecimal(baseamount));
			flightTravelRequestQuotation.setTaxAmount(new BigDecimal(taxes));
			
			String additionaldata = flightTravelRequestQuotation.getAdditionalData();
			additionaldata = additionaldata.replace("totaldata",String.valueOf(totalamount));
			
			flightTravelRequestQuotation.setAdditionalData(additionaldata);
			session.saveOrUpdate(flightTravelRequestQuotation); 
			transaction.commit();			
			isupdated = true;
			}else
			{
				isupdated = false;
			}
		}catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();
			}
			//System.out.println("updateFlightQuotation Exception " +e);
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}
		return isupdated;
	}
	
	public List<FlightTravelRequestTripDetail> insertFlightTravelTripDetailList(List<FlightTravelRequestTripDetail> flightTravelRequestTripDetailList){
		// TODO Auto-generated method stub
		
		Session session= null;
		Transaction transaction=null;
		List<FlightTravelRequestTripDetail> flightTravelRequestTripDetaillist = new ArrayList<>();
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			if(flightTravelRequestTripDetailList!=null && flightTravelRequestTripDetailList.size()>0){
				for(FlightTravelRequestTripDetail flightTravelRequestTripDetail:flightTravelRequestTripDetailList){
					flightTravelRequestTripDetail.setCreatedAt(new Timestamp(new Date().getTime()));				
					session.save(flightTravelRequestTripDetail);					
					flightTravelRequestTripDetaillist.add(flightTravelRequestTripDetail);
				}
			}
			transaction.commit();
			
		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();				
			}
			e.printStackTrace();			
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}		
		return flightTravelRequestTripDetaillist;
	}
	
	public List<FlightTravelRequestTripDetail> insertFlightTravelTripDetailListRound(List<FlightTravelRequestTripDetail> flightTravelRequestTripDetailList,List<FlightTravelRequestConnectingFlightTripDetail> FlightTravelRequestConnectingFlightTripDetailList){
		// TODO Auto-generated method stub
		
		Session session= null;
		Transaction transaction=null;
		List<FlightTravelRequestTripDetail> flightTravelRequestTripDetaillist = new ArrayList<>();
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			if(flightTravelRequestTripDetailList!=null && flightTravelRequestTripDetailList.size()>0){
				for(int i=0;i<flightTravelRequestTripDetailList.size();i++){
					FlightTravelRequestTripDetail flightTravelRequestTripDetail = flightTravelRequestTripDetailList.get(i);
					FlightTravelRequestConnectingFlightTripDetail flightTravelRequestConnectingFlightTripDetail = FlightTravelRequestConnectingFlightTripDetailList.get(i);
					flightTravelRequestTripDetail.setCreatedAt(new Timestamp(new Date().getTime()));				
					session.save(flightTravelRequestTripDetail);				
					flightTravelRequestTripDetaillist.add(flightTravelRequestTripDetail);
				}
			}
			transaction.commit();
			
			
		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();				
			}
			e.printStackTrace();			
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}		
		return flightTravelRequestTripDetaillist;
	}


	public List<FlightTravelRequestTripDetail> updateFlightTravelTripDetailList(List<FlightTravelRequestTripDetail> flightTravelRequestTripDetailList){
		// TODO Auto-generated method stub
		
		Session session= null;
		Transaction transaction=null;
		List<FlightTravelRequestTripDetail> flightTravelRequestTripDetaillist = new ArrayList<>();
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			if(flightTravelRequestTripDetailList!=null && flightTravelRequestTripDetailList.size()>0){
				for(FlightTravelRequestTripDetail flightTravelRequestTripDetail:flightTravelRequestTripDetailList){
					FlightTravelRequestTripDetail updateflightTravelRequestTripDetail =(FlightTravelRequestTripDetail)session.get(FlightTravelRequestTripDetail.class, flightTravelRequestTripDetail.getId()); 
					updateflightTravelRequestTripDetail.setFlightTravelRequestQuotationId(flightTravelRequestTripDetail.getFlightTravelRequestQuotationId());
					session.saveOrUpdate(updateflightTravelRequestTripDetail);
					session.flush();
					flightTravelRequestTripDetaillist.add(updateflightTravelRequestTripDetail);
				}
			}
			transaction.commit();
			
		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();				
			}
			e.printStackTrace();			
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}		
		return flightTravelRequestTripDetaillist;
	}
	
	
	public boolean insertFlightTravelConnectingTripDetail(List<FlightTravelRequestTripDetail> flightTravelRequestTripDetailList,List<FlightTravelRequestConnectingFlightTripDetail> FlightTravelRequestConnectingFlightTripDetailList){
		// TODO Auto-generated method stub
		List<FlightTravelRequestTripDetail> updatedflightTravelRequestTripDetailList = insertFlightTravelTripDetailList(flightTravelRequestTripDetailList);
		boolean isInserted=false;
		Session session= null;
		Transaction transaction=null;
		
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			if(FlightTravelRequestConnectingFlightTripDetailList!=null && FlightTravelRequestConnectingFlightTripDetailList.size()>0){
				for (int i = 0; i < FlightTravelRequestConnectingFlightTripDetailList.size(); i++) {
					FlightTravelRequestConnectingFlightTripDetail flightTravelRequestConnectingFlightTripDetail = FlightTravelRequestConnectingFlightTripDetailList.get(i);
					FlightTravelRequestTripDetail flightTravelRequestTripDetail = updatedflightTravelRequestTripDetailList.get(i);
					flightTravelRequestConnectingFlightTripDetail.setCreatedAt(new Timestamp(new Date().getTime()));	
					flightTravelRequestConnectingFlightTripDetail.setFlightTravelRequestTripDetail(flightTravelRequestTripDetail);					
					session.save(flightTravelRequestConnectingFlightTripDetail);
				}				
				
			}
			isInserted = true;
			transaction.commit();
			
		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();	
				isInserted = true;
			}
			e.printStackTrace();			
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}		
		return isInserted;
	}
	
	public boolean insertFlightTravelConnectingTripDetailList(List<FlightTravelRequestConnectingFlightTripDetail> flightTravelRequestConnectingFlightTripDetailList){
		// TODO Auto-generated method stub
		boolean isInserted=false;
		Session session= null;
		Transaction transaction=null;
		
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			if(flightTravelRequestConnectingFlightTripDetailList!=null && flightTravelRequestConnectingFlightTripDetailList.size()>0){
				for(FlightTravelRequestConnectingFlightTripDetail flightTravelRequestConnectingFlightTripDetail:flightTravelRequestConnectingFlightTripDetailList){
					flightTravelRequestConnectingFlightTripDetail.setCreatedAt(new Timestamp(new Date().getTime()));				
					session.save(flightTravelRequestConnectingFlightTripDetail);
					
				}
			}
			isInserted = true;
			transaction.commit();
			
		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();	
				isInserted = true;
			}
			e.printStackTrace();			
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}		
		return isInserted;
	}
	
	public User getUserNameByUserId(int userId){
		User user=null;
		Session session= null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria=session.createCriteria(User.class);
			criteria.add(Restrictions.eq("id", userId));
			user= (User) criteria.uniqueResult();
		} catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}
		return user;


	}

	public List<FlightTravelRequestQuotation> getFlightRequestTravelQuotationList(Long flightQuotationRequestId) {
		List<FlightTravelRequestQuotation> Newlist= new ArrayList<>();
		Session session=null;
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria=session.createCriteria(FlightTravelRequestQuotation.class);
			criteria.add(Restrictions.eq("id", flightQuotationRequestId));			
			List<FlightTravelRequestQuotation> list = criteria.list();
			for(FlightTravelRequestQuotation quotation:list){
				quotation.setTotalAmount(quotation.getTotalAmount().setScale(2, BigDecimal.ROUND_UP));
				Newlist.add(quotation);

			}
		}
		catch (Exception e) {
			//System.out.println("getFlightRequestTravelQuotationList Exception " +e);
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}

		return Newlist;
	}
	public List<FlightTravelRequestTripDetail> getFlightRequestTravelTripDetailList(Long flightQuotationRequestId) {
		List<FlightTravelRequestTripDetail> Newlist= new ArrayList<>();
		Session session=null;
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria=session.createCriteria(FlightTravelRequestTripDetail.class);
			criteria.add(Restrictions.eq("flightTravelRequestQuotationId", flightQuotationRequestId));			
			List<FlightTravelRequestTripDetail> list = criteria.list();
			for(FlightTravelRequestTripDetail tripDetail:list){
				
				Newlist.add(tripDetail);

			}
		}
		catch (Exception e) {
		
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}

		return Newlist;
	}
	public long  getFlightOrderRowIdFromFlightTravelRequestQuotation(Long hotelQuotationRequestId) {
		// TODO Auto-generated method stub
		FlightTravelRequestQuotation  flightQuotation=  null;
		long id = 0;
		Session session=null;
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			String sql = "from FlightTravelRequestQuotation com where com.flightTravelRequest.id=:id and com.isBooked=:isBooked";
			Query query = session.createQuery(sql);
			query.setParameter("id", hotelQuotationRequestId);
			query.setParameter("isBooked", true);
			flightQuotation= (FlightTravelRequestQuotation) query.uniqueResult();
			if(flightQuotation!=null){
				id=flightQuotation.getOrderRowId();	
			}


		}
		catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}

		return id;
	}

	public FlightTravelRequestQuotation flightRequestQuotationUpdate(FlightTravelRequestQuotation flightTravelRequestQuotation) {
		Session session= null;
		Transaction transaction=null;
		FlightTravelRequestQuotation  flightTravelRequestQuotationUpdate=null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			flightTravelRequestQuotationUpdate=(FlightTravelRequestQuotation) session.get(FlightTravelRequestQuotation.class,flightTravelRequestQuotation.getId());
			flightTravelRequestQuotationUpdate.setAirline(flightTravelRequestQuotation.getAirline());
			flightTravelRequestQuotationUpdate.setTotalAmount(flightTravelRequestQuotation.getTotalAmount());
			flightTravelRequestQuotationUpdate.setUpdatedAt(new Timestamp(new Date().getTime()));
			session.saveOrUpdate(flightTravelRequestQuotationUpdate);
			transaction.commit();

		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();
			}
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}
		return flightTravelRequestQuotationUpdate;
	}

	public FlightTravelRequestQuotation getFlightTravelRequestQuotationDetails(Long flightQuotationRequestId) {
		// TODO Auto-generated method stub
		FlightTravelRequestQuotation  flightQuotation=  null;
		Session session=null;
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria=session.createCriteria(FlightTravelRequestQuotation.class);
			criteria.add(Restrictions.eq("id", flightQuotationRequestId));
			flightQuotation= (FlightTravelRequestQuotation)criteria.uniqueResult();
		}

		catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}

		return flightQuotation;

	}


	public boolean updateFlightQuotationList(List<FlightTravelRequestQuotation> flightTravelRequestQuotationList) {
		// TODO Auto-generated method stub
		boolean isUpdated=false;
		Session session= null;
		Transaction transaction=null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			if(flightTravelRequestQuotationList!=null && flightTravelRequestQuotationList.size()>0){
				for(FlightTravelRequestQuotation quotationObj:flightTravelRequestQuotationList){
					FlightTravelRequestQuotation newQuotationObj =(FlightTravelRequestQuotation)session.get(FlightTravelRequestQuotation.class, quotationObj.getId()); 
					newQuotationObj.setAdditionalData(quotationObj.getAdditionalData());
					newQuotationObj.setPassengerCount(quotationObj.getPassengerCount());
					newQuotationObj.setAirline(quotationObj.getAirline());
					newQuotationObj.setTotalAmount(quotationObj.getTotalAmount());
					newQuotationObj.setBookingClassPrefer(quotationObj.getBookingClassPrefer());
					//newQuotationObj.setTravelRequestDate(quotationObj.getTravelRequestDate());
					newQuotationObj.setTripType(quotationObj.getTripType());
					session.update(newQuotationObj);
				}
			}
			transaction.commit();
			isUpdated=true;
		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();
				isUpdated=false;
			}
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}
		return isUpdated;
	}

	public FlightTravelRequest getFlightTravelRequestDetails(Long id) {
		// TODO Auto-generated method stub
		FlightTravelRequest  flightTravelRequest=  null;
		Session session=null;
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria=session.createCriteria(FlightTravelRequest.class);
			criteria.add(Restrictions.eq("id", id));
			flightTravelRequest= (FlightTravelRequest)criteria.uniqueResult();
		}

		catch (Exception e) {
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}
		return flightTravelRequest;
	}

	public FlightTravelRequest updateFlightTravelRequest(FlightTravelRequest flightTravelRequest) {
		// TODO Auto-generated method stub

		FlightTravelRequest newFlightTravelRequest=null;
		Session session= null;
		Transaction transaction=null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			transaction = session.beginTransaction();
			newFlightTravelRequest =(FlightTravelRequest)session.get(FlightTravelRequest.class, flightTravelRequest.getId()); 
			newFlightTravelRequest.setAirlinePrefer(flightTravelRequest.getAirlinePrefer());
			newFlightTravelRequest.setArrivalDate(flightTravelRequest.getArrivalDate());
			newFlightTravelRequest.setBookingClassPrefer(flightTravelRequest.getBookingClassPrefer());
			newFlightTravelRequest.setCompanyEntity(flightTravelRequest.getCompanyEntity());
			newFlightTravelRequest.setCostCenter(flightTravelRequest.getCostCenter());
			newFlightTravelRequest.setCurrency(flightTravelRequest.getCurrency());
			newFlightTravelRequest.setCustomerComments(flightTravelRequest.getCustomerComments());
			newFlightTravelRequest.setCustomerNo(flightTravelRequest.getCustomerNo());
			newFlightTravelRequest.setDepartureDate(flightTravelRequest.getDepartureDate());
			newFlightTravelRequest.setDestination(flightTravelRequest.getDestination());
			newFlightTravelRequest.setFirstName(flightTravelRequest.getFirstName());
			newFlightTravelRequest.setLastName(flightTravelRequest.getLastName());
			newFlightTravelRequest.setOrigin(flightTravelRequest.getOrigin());
			newFlightTravelRequest.setPassengerCount(flightTravelRequest.getPassengerCount());
			newFlightTravelRequest.setProjectName(flightTravelRequest.getProjectName());
			newFlightTravelRequest.setProjectSubTaskDetails(flightTravelRequest.getProjectSubTaskDetails());
			newFlightTravelRequest.setSource(flightTravelRequest.getSource());
			newFlightTravelRequest.setTitle(flightTravelRequest.getTitle());
			newFlightTravelRequest.setTravelRequestNumber(flightTravelRequest.getTravelRequestNumber());
			newFlightTravelRequest.setTripType(flightTravelRequest.getTripType());
			newFlightTravelRequest.setUpdated_by_userId(flightTravelRequest.getUpdated_by_userId());
			newFlightTravelRequest.setUpdatedAt(new Timestamp(new Date().getTime()));
			session.saveOrUpdate(newFlightTravelRequest); 
			transaction.commit();

		} catch (Exception e) {
			if(transaction!=null){
				transaction.rollback();
			}
			e.printStackTrace();
		}
		finally{
			if(session!=null && session.isOpen()){
				session.close();
			}
		}

		return newFlightTravelRequest;
	}

}

