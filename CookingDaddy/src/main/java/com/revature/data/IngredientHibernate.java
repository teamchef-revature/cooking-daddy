package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.beans.Ingredient;
import com.revature.utils.HibernateUtil;

public class IngredientHibernate implements IngredientDAO{
	
	@Autowired
	private HibernateUtil hu;

	@Override
	public Integer addIngredient(Ingredient i) {
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
	public Set<Ingredient> getIngredients() {
		Session s = hu.getSession();
		String query = "from Ingredient";
		Query<Ingredient> q = s.createQuery(query, Ingredient.class);
		List<Ingredient> ingredients = q.list();
		s.close();
		return new HashSet<Ingredient>(ingredients);
	}

	@Override
	public Ingredient getIngredient(Integer i) {
		Session s = hu.getSession();
		Ingredient ing = s.get(Ingredient.class, i);
		s.close();
		return ing;
	}

	@Override
	public Ingredient updateIngredient(Ingredient i) {
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
	public void deleteIngredient(Ingredient i) {
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
