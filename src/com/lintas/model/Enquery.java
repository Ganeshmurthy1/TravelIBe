package com.lintas.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="enquiry")
public class Enquery implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue
	private int id;
	@Column(name="destination")
	private String destination;
	@Column(name="modeoftravel")
	private String modeOfTravel;
	@Column(name="orgincity")
	private String orginCity;
	@Column(name="checkindt")
	private String checkinDateTime;
	@Column(name="checkoutdt")
	private String checkoutDateTime;
	
	@Column(name="noofpeople")
	private int noOfPeople;
	@Column(name="typeofhotel")
	private String typeOfHotel;
	@Column(name="budgetrange")
	private BigDecimal budgetRange;
	@Column(name="others")
	private String others;
	@Column(name="username")
	private String userName;
	@Column(name="useremail")
	private String userEmail;
	@Column(name="usermobile")
	private String userMobile;
	@Column(name="prefereddt")
	private String preferedDateTime;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
	public String getModeOfTravel() {
		return modeOfTravel;
	}
	public void setModeOfTravel(String modeOfTravel) {
		this.modeOfTravel = modeOfTravel;
	}
	public String getOrginCity() {
		return orginCity;
	}
	public void setOrginCity(String orginCity) {
		this.orginCity = orginCity;
	}
	public String getCheckinDateTime() {
		return checkinDateTime;
	}
	public void setCheckinDateTime(String checkinDateTime) {
		this.checkinDateTime = checkinDateTime;
	}
	public String getCheckoutDateTime() {
		return checkoutDateTime;
	}
	public void setCheckoutDateTime(String checkoutDateTime) {
		this.checkoutDateTime = checkoutDateTime;
	}
	public int getNoOfPeople() {
		return noOfPeople;
	}
	public void setNoOfPeople(int noOfPeople) {
		this.noOfPeople = noOfPeople;
	}
	public String getTypeOfHotel() {
		return typeOfHotel;
	}
	public void setTypeOfHotel(String typeOfHotel) {
		this.typeOfHotel = typeOfHotel;
	}
	public BigDecimal getBudgetRange() {
		return budgetRange;
	}
	public void setBudgetRange(BigDecimal budgetRange) {
		this.budgetRange = budgetRange;
	}
	public String getOthers() {
		return others;
	}
	public void setOthers(String others) {
		this.others = others;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserMobile() {
		return userMobile;
	}
	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}
	public String getPreferedDateTime() {
		return preferedDateTime;
	}
	public void setPreferedDateTime(String preferedDateTime) {
		this.preferedDateTime = preferedDateTime;
	}
	
}
