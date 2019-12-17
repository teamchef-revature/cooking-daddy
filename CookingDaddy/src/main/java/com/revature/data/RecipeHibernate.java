package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Recipe;
import com.revature.utils.HibernateUtil;

@Component
public class RecipeHibernate implements RecipeDAO {
	@Autowired
	private HibernateUtil hu;
	
	@Override
	public Set<Recipe> getRecipes() {
		Session session = hu.getSession();
		String queryHQL = "from Recipe";
		Query<Recipe> query = session.createQuery(queryHQL, Recipe.class);
		List<Recipe> recipes = query.list();
		return new HashSet<Recipe>(recipes);
	}

	@Override
	public Recipe getRecipe(Integer id) {
		Session session = hu.getSession();
		Recipe recipe = session.get(Recipe.class, id);
		session.close();
		return recipe;
	}

	@Override
	public Integer addRecipe(Recipe recipe) {
		Integer index = null;
		Session session = hu.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			index = (Integer) session.save(recipe);
			transaction.commit();
		} catch (HibernateException he) {
			if(transaction != null)
				transaction.rollback();
			he.printStackTrace();
		} finally {
			session.close();
		}
		return index;
	}

	@Override
	public Recipe updateRecipe(Recipe recipe) {
		Session session = hu.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			session.update(recipe);
			transaction.commit();
		} catch (HibernateException he) {
			if(transaction != null)
				transaction.rollback();
			he.printStackTrace();
		} finally {
			session.close();
		}
		return recipe;
	}

}
