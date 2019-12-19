package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Recipe;
import com.revature.beans.RecipeComponent;
import com.revature.data.RecipeDAO;

@Service
public class RecipeServiceHibernate implements RecipeService {
	@Autowired
	private RecipeDAO recipeDAO;
	@Override
	public Set<Recipe> getRecipes() {
		return recipeDAO.getRecipes();
	}

	@Override
	public Recipe getRecipe(Integer id) {
		return recipeDAO.getRecipe(id);
	}

	@Override
	public Integer addRecipe(Recipe recipe) {
		return recipeDAO.addRecipe(recipe);
	}

	@Override
	public Recipe updateRecipe(Recipe recipe) {
		return recipeDAO.updateRecipe(recipe);
	}

	@Override
	public Set<RecipeComponent> getComponents(Recipe recipe) {
		return recipe.getComponent();
	}

}
