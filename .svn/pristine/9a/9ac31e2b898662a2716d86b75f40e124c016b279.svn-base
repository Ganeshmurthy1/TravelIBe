package com.lintas.config;

import java.io.Serializable;
import javax.mail.PasswordAuthentication;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.internet.MimeMessage;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.lintas.model.MailStatus;






public class MailConfig implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	/**
	  @author info  
	  name:raham,
	  date:24-07-2015.

	 **/

	   Message message = null;
	   MailStatus ms = new MailStatus();
	
	
	private Properties getConfProperties(){
		
		//ms.setfromMail(mcad.getMail_server_user());
		    ms.setfromMail("rahamshaik0@intellicommsolutions.com");
		    Properties properties = new Properties();
		    properties.put("mail.smtp.host", "mail.intellicommsolutions.com");
			properties.put("mail.smtp.socketFactory.port", "25");
			properties.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
			properties.put("mail.smtp.auth", "true");
			properties.put("mail.smtp.port", "25"); 
			properties.put("mail.intellicommsolutions.com", "25");
		
			return properties; 
		}  
	
	
	
	
	private Message  mailAuthenticator(){
		Session session = Session.getDefaultInstance(getConfProperties(),new javax.mail.Authenticator(){
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("rahamshaik0@intellicommsolutions.com","badvel");/*ms.getfromMail(),mcad.getMail_server_password()*/
			}});
		message = new MimeMessage(session);
		return message;
	}

	/*this method for config  for authorization to send mail*/
	public MailStatus sendRegMail(String toAddress) {
		//System.out.println("inside sendRegMail-----"+toAddress);


		ms.setSubject("Lintas Registration Status...");
		ms.setBody("Dear User, You have registered successfully with Lintas.");
		ms.setLinkAttached("www.google.com");
		message = mailAuthenticator();
		try {
			if(ms.getfromMail()!=null){
				message.setFrom(new InternetAddress("rahamshaik0@intellicommsolutions.com"));/*ms.getfromMail()*/
				message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(toAddress));
				message.setSubject(ms.getSubject());
				message.setText(ms.getBody());
				Transport.send(message);
				ms.setMailStatus("SUCCESS");
			}else{
				ms.setMailStatus("FAILED");
			}

		} catch (AddressException e1) {
			// TODO Auto-generated catch block
			ms.setMailStatus("FAILID");
			e1.printStackTrace();
		} catch (MessagingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			ms.setMailStatus("FAILID");
		}
		return ms;


	} 
	/*this method for config  for authorization to send forgot password to mail*/
	public MailStatus sendForgotPasswordToMail(String Password,String toAddress) throws AddressException, MessagingException{
		//final  MailStatus ms = new MailStatus();
		ms.setSubject("Forgot Password");
		ms.setBody("To:"+toAddress+"\n"+"Your Password:"+Password);
		message = mailAuthenticator();
		try {
			if(ms.getfromMail()!=null){
				message.setFrom(new InternetAddress(ms.getfromMail()));
				message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(toAddress));
				message.setSubject(ms.getSubject());
				message.setText(ms.getBody());
				Transport.send(message);
				ms.setMailStatus("SUCCESS");
			}
			else{
				ms.setMailStatus("FAILED");
			}
		}
		catch (AddressException e1) {
			// TODO Auto-generated catch block
			ms.setMailStatus("FAILID");
			e1.printStackTrace();
		} catch (MessagingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			ms.setMailStatus("FAILID");
		}
		return ms;
	}
	
	/*this method for config  for authorization to send forgot password to mail*/
	public MailStatus sendLoginCredentialToMail(String Password,String toAddress) throws AddressException, MessagingException{
		//final  MailStatus ms = new MailStatus();
		ms.setSubject("Login credentials...");
		ms.setBody("To:::"+toAddress+"\n"+"Your Password:::"+Password+"\n");
		message = mailAuthenticator();
		try {
			if(ms.getfromMail()!=null){
				message.setFrom(new InternetAddress(ms.getfromMail()));
				message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(toAddress));
				message.setSubject(ms.getSubject());
				message.setText(ms.getBody());
				Transport.send(message);
				ms.setMailStatus("SUCCESS");
			}
			else{
				ms.setMailStatus("FAILED");
			}
		}
		catch (AddressException e1) {
			// TODO Auto-generated catch block
			ms.setMailStatus("FAILID");
			e1.printStackTrace();
		} catch (MessagingException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			ms.setMailStatus("FAILID");
		}
		return ms;
	}
	
	
	 
}