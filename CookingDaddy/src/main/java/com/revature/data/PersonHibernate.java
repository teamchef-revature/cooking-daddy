package com.revature.data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Equipment;
import com.revature.beans.Person;
import com.revature.beans.Post;
import com.revature.beans.Role;
import com.revature.utils.HibernateUtil;

@Component
public class PersonHibernate implements PersonDAO {
	@Autowired
	private HibernateUtil hu;
	
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
			if(t != null)
				t.rollback();
			e.printStackTrace();
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
		//for (Post po: p.getPosts()) {
		//	po.getPerson();
		//}
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
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.merge(p);
			// s.update(p);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		};		
	}

	@Override
	public void deletePerson(Person p) {
		// TODO Auto-generated method stub

	}

	@Override
	public Role getRoleById(Integer id) {
		Role r = null;
		Session s = hu.getSession();
		String query = "from Role r where r.id=:id";
		Query<Role> q = s.createQuery(query, Role.class);
		q.setParameter("id", id);
		r = q.uniqueResult();
		s.close();
		return r;
	}

	@Override
	public Set<Person> getPeople() {
		Session s = hu.getSession();
		String query = "from Person";
		Query<Person> q = s.createQuery(query, Person.class);
		List<Person> people = q.list();
		s.close();
		return new HashSet<Person>(people);
	}

	@Override
	public List<Person> getLeaderboard() {
		Session s = hu.getSession();
		String query = "from Person p ORDER BY p.chefRating desc, p.mealsServed desc";
		Query<Person> q = s.createQuery(query, Person.class);
		q.setMaxResults(10);
		List<Person> people = q.list();
		s.close();
		return new ArrayList<Person>(people);
	}
}
