package com.lintas.DAO;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.lintas.config.HibernateUtil;
import com.lintas.model.CrudOperationDeals;
import com.lintas.model.User;

public class Dealsdao {

	SessionFactory sessionfactory;
	Session session = null;
	Transaction transaction = null;
	public static final org.apache.log4j.Logger logger=org.apache.log4j.Logger.getLogger(Dealsdao.class);
	
	public List<CrudOperationDeals> GetPublishedDeals()
	{
		List<CrudOperationDeals> deals = new ArrayList<CrudOperationDeals>();
		CrudOperationDeals mydeals = null;
		try
		{			 
		session = HibernateUtil.getSessionFactory().openSession();	
		String sql = "from CrudOperationDeals a where a.isStatus=:status";
	//	System.out.println("sql" +sql);
		Query query = session.createQuery(sql);
		query.setParameter("status", "1");
		//query.addEntity(CrudOperationDeals.class);
		List<CrudOperationDeals> listdeals = query.list();
		if (listdeals.size() > 0) {			
			for (Iterator iterator = listdeals.iterator(); iterator.hasNext();){			
				mydeals = (CrudOperationDeals)iterator.next(); 
				//System.out.println("getCurrency" +mydeals.getCurrency());
				deals.add(mydeals);
			}
		}
		
		}
		catch(Exception e)
		{
			logger.info("-----UserLogin Failed--------"+e.getMessage());
			//System.out.println("Exception" +e);
		}
		session.close();
		return deals;
	}
}
