package com.lintas.model;



import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "credit_note")
public class CreditNote implements Serializable{

	/**
	 * @author raham
	 * Date:23/01/2016
	 */
	@Id
	@GeneratedValue
	private int id;
	
	private static final long serialVersionUID = 1L;
	@Column(name = "total_booking_amount", columnDefinition="decimal(20,2) default '0.00'")
	private BigDecimal totalBookingAmount;
	@Column(name = "refunded_amount", columnDefinition="decimal(20,2) default '0.00'")
	private BigDecimal refundedAmount;
	@Column(name = "convenience_fees", columnDefinition="decimal(20,2) default '0.00'")
	private BigDecimal convenienceFees;
	@Column(name = "cancellation_fees", columnDefinition="decimal(20,2) default '0.00'")
	private BigDecimal cancellationFees;
	@Column(name = "gst_amount", columnDefinition="decimal(20,2) default '0.00'")
	private BigDecimal gstAmount;
	/**
	 * @return the totalBookingAmount
	 */
	public BigDecimal getTotalBookingAmount() {
		return totalBookingAmount;
	}
	/**
	 * @param totalBookingAmount the totalBookingAmount to set
	 */
	public void setTotalBookingAmount(BigDecimal totalBookingAmount) {
		this.totalBookingAmount = totalBookingAmount;
	}
	/**
	 * @return the refundedAmount
	 */
	public BigDecimal getRefundedAmount() {
		return refundedAmount;
	}
	/**
	 * @param refundedAmount the refundedAmount to set
	 */
	public void setRefundedAmount(BigDecimal refundedAmount) {
		this.refundedAmount = refundedAmount;
	}
	/**
	 * @return the convenienceFees
	 */
	public BigDecimal getConvenienceFees() {
		return convenienceFees;
	}
	/**
	 * @param convenienceFees the convenienceFees to set
	 */
	public void setConvenienceFees(BigDecimal convenienceFees) {
		this.convenienceFees = convenienceFees;
	}
	/**
	 * @return the cancellationFees
	 */
	public BigDecimal getCancellationFees() {
		return cancellationFees;
	}
	/**
	 * @param cancellationFees the cancellationFees to set
	 */
	public void setCancellationFees(BigDecimal cancellationFees) {
		this.cancellationFees = cancellationFees;
	}
	/**
	 * @return the gstAmount
	 */
	public BigDecimal getGstAmount() {
		return gstAmount;
	}
	/**
	 * @param gstAmount the gstAmount to set
	 */
	public void setGstAmount(BigDecimal gstAmount) {
		this.gstAmount = gstAmount;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}

	 
}
