package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Ingredient;
import com.revature.beans.PersonIngredient;
import com.revature.utils.HibernateUtil;

@Component
public class PersonIngredientHibernate implements PersonIngredientDAO {
	
	@Autowired
	private HibernateUtil hu;

	@Override
	public Integer addPersonIngredient(PersonIngredient i) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(i);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return r;
	}

	@Override
	public Set<PersonIngredient> getPersonIngredients() {
		Session s = hu.getSession();
		String query = "from Ingredient";
		Query<PersonIngredient> q = s.createQuery(query, PersonIngredient.class);
		List<PersonIngredient> ingredients = q.list();
		s.close();
		return new HashSet<PersonIngredient>(ingredients);
	}

	@Override
	public PersonIngredient getPersonIngredient(Integer i) {
		Session s = hu.getSession();
		PersonIngredient ing = s.get(PersonIngredient.class, i);
		s.close();
		return ing;
	}

	@Override
	public PersonIngredient updatePersonIngredient(PersonIngredient i) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(i);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return i;
	}

	@Override
	public void deletePersonIngredient(PersonIngredient i) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.delete(i);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}		
	}		
}


