package com.revature.data;

import java.util.Set;
import java.util.HashSet;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Recipe;
import com.revature.beans.PersonMeal;
import com.revature.utils.HibernateUtil;

@Component
public class MealHibernate implements MealDAO {
	@Autowired
	private HibernateUtil hibernateUtil = new HibernateUtil();

	@Override
	public Integer addMeal(Recipe meal) {
		Session session = hibernateUtil.getSession();
		Transaction transaction = null;
		Integer index = 0;
		try {
			transaction = session.beginTransaction();
			index = (Integer) session.save(meal);
			transaction.commit();
		} catch (HibernateException he) {
			if (transaction != null)
				transaction.rollback();
			he.printStackTrace();
		} finally {
			session.close();
		}
		return index;
	}

	@Override
	public Set<Recipe> getMeals() {
		Session session = hibernateUtil.getSession();
		String queryHQL = "from Meal";
		Query<Recipe> query = session.createQuery(queryHQL, Recipe.class);
		List<Recipe> meals = query.list();
		session.close();
		return new HashSet<Recipe>(meals);
	}

	@Override
	public Recipe getMeal(Integer id) {
		Recipe meal = null;
		Session session = hibernateUtil.getSession();
		String queryHQL = "from Meal where meal.id=:id";
		Query<Recipe> query = session.createQuery(queryHQL, Recipe.class);
		query.setParameter("id", id);
		meal = query.uniqueResult();
		session.close();
		return meal;
	}

	@Override
	public Recipe updateMeal(Recipe meal) {
		Session session = hibernateUtil.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			session.update(meal);
			transaction.commit();
		} catch(HibernateException he) {
			if(transaction != null)
				transaction.rollback();
			he.printStackTrace();
		} finally {
			session.close();
		}
		return meal;
	}

	@Override
	public Integer addPersonMeal(PersonMeal personMeal) {
		Integer index = null;
		Session session = hibernateUtil.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			index = (Integer) session.save(personMeal);
			transaction.commit();
		} catch(HibernateException he) {
			if(transaction != null)
				transaction.rollback();
			he.printStackTrace();
		} finally {
			session.close();
		}
		return index;
	}

	@Override
	public PersonMeal updatePersonMeal(PersonMeal personMeal) {
		Session session = hibernateUtil.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			session.update(personMeal);
			transaction.commit();
		} catch(HibernateException he) {
			if(transaction != null)
				transaction.rollback();
			he.printStackTrace();
		} finally {
			session.close();
		}
		return personMeal;
	}
}