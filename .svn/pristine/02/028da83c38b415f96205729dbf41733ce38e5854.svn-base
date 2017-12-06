package com.lintas.DAO;



import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.criterion.Conjunction;
import org.hibernate.criterion.Restrictions;

import com.lintas.config.HibernateUtil;
import com.lintas.model.Company;
import com.lintas.model.CompanyConfig;
import com.lintas.model.CompanyConfigType;
import com.lintas.model.CompanyTheme;
import com.lintas.model.User;



public class FrontUserThemeDao {
	
	public static final org.apache.log4j.Logger logger=org.apache.log4j.Logger.getLogger(FrontUserThemeDao.class);
	SessionFactory sessionfactory;
	Session session = null;
	Transaction transaction = null;
	 
	
	
	public CompanyTheme CompanyThemeDetails(String hostName,String[] LabelAppkey){		
		CompanyTheme companyTheme = null;		 
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(CompanyTheme.class);
			Conjunction conjunction = Restrictions.conjunction();				 
			if(LabelAppkey.length >1){
				conjunction.add(Restrictions.eq("configId", Integer.valueOf(LabelAppkey[0])));
				conjunction.add(Restrictions.eq("companyId",Integer.valueOf(LabelAppkey[1])));
				criteria.add(conjunction);
			}else if(hostName!=null){
			criteria.add(Restrictions.eq("url", hostName));	
			}
			companyTheme = (CompanyTheme) criteria.uniqueResult();	 
			
		}catch(Exception e)
		{
			logger.info("-----UserLogin Exception--------"+e.getMessage());

		} finally {
			if (session != null) {
				session.close();
			}
		}		
		return companyTheme;	
	}

	public CompanyConfig getCompanyConfig(int companyid,int configid){
		
		CompanyConfig companyConfig = null;
		 
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(CompanyConfig.class);
			criteria.add(Restrictions.eq("config_id", configid));
			criteria.add(Restrictions.eq("company_id", companyid));
			companyConfig = (CompanyConfig) criteria.uniqueResult();
			 
		
		}catch(Exception e){
			logger.info("-----getCompanyConfig Exception--------"+e.getMessage());
		}finally {
			if (session != null) {
				session.close();
			}
		}	
		return companyConfig;
	}
	public Company getCompanyByCompanyId(int companyid){
		Company company = null;
		
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(Company.class);			
			criteria.add(Restrictions.eq("companyid", companyid));
			company = (Company) criteria.uniqueResult();		
		}catch(Exception e){
			logger.info("-----getCompanyConfig Exception--------"+e.getMessage());
		}finally {
			if (session != null) {
				session.close();
			}
		}	
		return company;
	}
 	public List <CompanyConfig> getcompanyConfigListByCompanyId(int companyid) {
 		 List <CompanyConfig> companyConfig = new ArrayList<>();
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(CompanyConfig.class);			
			criteria.add(Restrictions.eq("company_id", companyid));
			companyConfig =  criteria.list();
			 	
		}catch(Exception e){
			logger.info("-----getCompanyConfig Exception--------"+e.getMessage());
		}finally {
			if (session != null) {
				session.close();
			}
		}
		
		return companyConfig;
		
	} 
	public User getUserByEmail(String email){
		User user = null;
		 
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(User.class);			
			criteria.add(Restrictions.eq("Email", email));
			user = (User) criteria.uniqueResult();		
		}catch(Exception e){
			logger.info("-----getCompanyConfig Exception--------"+e.getMessage());
		}finally {
			if (session != null) {
				session.close();
			}
		}	
		return user;
	}
	public CompanyConfigType getCompanyConfigType(int configTypeId){
		CompanyConfigType companyConfigType = null;
		try{
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(CompanyConfigType.class);			
			criteria.add(Restrictions.eq("id", configTypeId));
			companyConfigType = (CompanyConfigType) criteria.uniqueResult();		
		}catch(Exception e){
			logger.info("-----getCompanyConfig Exception--------"+e.getMessage());
		}finally {
			if (session != null) {
				session.close();
			}
		}	
		return companyConfigType;
	}
	

}
