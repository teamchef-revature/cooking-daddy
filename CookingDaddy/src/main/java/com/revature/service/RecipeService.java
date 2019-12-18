package com.revature.service;

import java.util.Set;

import com.revature.beans.Component;
import com.revature.beans.Recipe;

public interface RecipeService {

	public Set<Recipe> getRecipes();
	public Recipe getRecipe(Integer id);
	public Integer addRecipe(Recipe recipe);
	public Recipe updateRecipe(Recipe recipe);
	public Set<Component> getComponents(Recipe recipe);

}
