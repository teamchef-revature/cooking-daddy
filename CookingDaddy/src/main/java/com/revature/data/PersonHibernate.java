package com.revature.data;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.stereotype.Component;

import com.revature.beans.Person;
import com.revature.utils.HibernateUtil;
import com.revature.utils.LogUtil;

@Component
public class PersonHibernate implements PersonDAO {
	private HibernateUtil hu = new HibernateUtil();
	
	@Override
	public Integer addPerson(Person p) {
		Session s = hu.getSession();
		Transaction t = null;
		Integer i = 0;
		try {
			t = s.beginTransaction();
			i = (Integer) s.save(p);
			t.commit();
		} catch(HibernateException e) {
			t.rollback();
			LogUtil.logException(e, PersonHibernate.class);
		} finally {
			s.close();
		}
		return i;
	}

	@Override
	public Person getPersonById(Integer id) {
		Person p = null;
		Session s = hu.getSession();
		String query = "from Person p where p.id=:id";
		Query<Person> q = s.createQuery(query, Person.class);
		q.setParameter("id", id);
		p = q.uniqueResult();
		s.close();
		return p;
	}

	@Override
	public Person getPersonByUserPass(String user, String pass) {
		Person p = null;
		Session s = hu.getSession();
		String query = "from Person p where p.username=:username and p.password=:password";
		Query<Person> q = s.createQuery(query, Person.class);
		q.setParameter("username", user);
		q.setParameter("password", pass);
		p = q.uniqueResult();
		s.close();
		return p;
	}

	@Override
	public void updatePerson(Person p) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deletePerson(Person p) {
		// TODO Auto-generated method stub

	}

}
