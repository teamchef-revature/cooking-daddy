package com.revature.service;

import java.util.List;
import java.util.Set;

import com.revature.beans.Recipe;
import com.revature.beans.RecipeComponent;

public interface RecipeService {

	public Set<Recipe> getRecipes();
	public List<Recipe> getRecipeList();
	public Recipe getRecipe(Integer id);
	public Integer addRecipe(Recipe recipe);
	public Recipe updateRecipe(Recipe recipe);
	public Set<RecipeComponent> getComponents(Recipe recipe);
	public void deleteRecipeComponent(Integer id);
}
