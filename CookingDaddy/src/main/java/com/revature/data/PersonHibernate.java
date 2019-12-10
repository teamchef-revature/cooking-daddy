package com.revature.data;

import org.apache.log4j.Logger;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;

import com.revature.beans.Person;
import com.revature.utils.HibernateUtil;
import com.revature.utils.LogUtil;

public class PersonHibernate implements PersonDAO {
	private HibernateUtil hu = new HibernateUtil();
	private Logger log = Logger.getLogger(PersonHibernate.class);
	
	@Override
	public Integer addPerson(Person p) {
		log.trace("Adding person with username " + p.getUsername() + " to the database...");
		Session s = hu.getSession();
		Transaction t = null;
		Integer i = 0;
		try {
			t = s.beginTransaction();
			i = (Integer) s.save(p);
			t.commit();
			log.trace("Person added successfully.");
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
		log.trace("Getting person with id " + id + "...");
		Person u = null;
		Session s = hu.getSession();
		String query = "from Person p where p.id=:id";
		Query<Person> q = s.createQuery(query, Person.class);
		q.setParameter("id", id);
		Person p = q.uniqueResult();
		if(p != null)
			log.trace("Got person successfully.");
		else
			log.trace("Something went wrong.");
		s.close();
		return u;
	}

	@Override
	public Person getPersonByUserPass(String user, String pass) {
		log.trace("Getting person with username " + user + "...");
		Person u = null;
		Session s = hu.getSession();
		String query = "from Person p where p.username=:username and p.password=:password";
		Query<Person> q = s.createQuery(query, Person.class);
		q.setParameter("username", user);
		q.setParameter("password", pass);
		Person p = q.uniqueResult();
		if(p != null)
			log.trace("Got person successfully.");
		else
			log.trace("Something went wrong.");
		s.close();
		return u;
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
