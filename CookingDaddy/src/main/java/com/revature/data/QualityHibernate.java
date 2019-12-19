package com.revature.data;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Quality;
import com.revature.utils.HibernateUtil;

@Component
public class QualityHibernate implements QualityDAO {
	
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public Quality getQualityById(Integer id) {
		Session s = hu.getSession();
		Quality q = s.get(Quality.class, id);
		s.close();
		return q;
	}

}
