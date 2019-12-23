package com.revature.data;

import java.lang.reflect.Array;
import java.util.Arrays;
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
import com.revature.beans.RecipeComponent;
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
		Set<Recipe> adjustedRecipes = new HashSet<Recipe>();

		for (int iter = 0; iter < recipes.size(); iter++) {
			Recipe recipe = (Recipe) Array.get(recipes.toArray(), iter);
			adjustedRecipes.add(SetIfAny(recipe));
		}
		return adjustedRecipes;
	}

	@Override
	public Recipe getRecipe(Integer id) {
		Session session = hu.getSession();
		Recipe recipe = session.get(Recipe.class, id);
		session.close();
		recipe = SetIfAny(recipe);
		return recipe;
	}

	private Recipe SetIfAny(Recipe recipe) {
		RecipeComponent[] recipeComponent = new RecipeComponent[recipe.getComponent().size()];
		recipeComponent = recipe.getComponent().toArray(recipeComponent);

		for (int iter = 0; iter < recipe.getComponent().size(); iter++) {
			recipeComponent[iter].isAny(recipeComponent[iter].getCategory() == null
					&& recipeComponent[iter].getFlavor() == null && recipeComponent[iter].getIngredient() == null);
		}
		recipe.setComponent(new HashSet<>(Arrays.asList(recipeComponent)));
		return recipe;
	}

	@Override
	public Integer addRecipe(Recipe recipe) {
		Integer index = null;
		Session session = hu.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			recipe.getComponent().forEach((comp) -> {
				comp.setRecipe(recipe);
			});
			index = (Integer) session.save(recipe);
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
	public Recipe updateRecipe(Recipe recipe) {
		Session session = hu.getSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			recipe.getComponent().forEach((comp) -> {
				comp.setRecipe(recipe);
			});
			session.update(recipe);
			transaction.commit();
		} catch (HibernateException he) {
			if (transaction != null)
				transaction.rollback();
			he.printStackTrace();
		} finally {
			session.close();
		}
		return recipe;
	}

	@Override
	public void deleteRecipeComponent(Integer id) {
		Session session = hu.getSession();
		String querySQL = "delete from new_component where recipe_id=" + id;
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
			javax.persistence.Query query = session.createSQLQuery(querySQL);
			query.executeUpdate();
			transaction.commit();
		} catch (Exception e) {
			if (transaction != null)
				transaction.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}
}
