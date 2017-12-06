package com.lintas.DAO;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import com.lintas.model.RmConfigModel;
import com.lintas.config.HibernateUtil;

public class RmConfigDao {

	public static final org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(RmConfigDao.class);



	public RmConfigModel getConfigDetailsByCompanyId(int id) {
		Session session = null;
		RmConfigModel rmConfigModel = new RmConfigModel();
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			Criteria criteria = session.createCriteria(RmConfigModel.class);
			criteria.add(Restrictions.eq("corporateId", id));
			rmConfigModel = (RmConfigModel) criteria.uniqueResult();
		} catch (HibernateException he) {
			
		} finally {
			if (session != null) {
				session.close();
			}
		}
		return rmConfigModel;
	}


}
