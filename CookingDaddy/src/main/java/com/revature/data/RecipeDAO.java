package com.revature.data;

import java.util.Set;

import com.revature.beans.Recipe;

public interface RecipeDAO {

	public Set<Recipe> getRecipes();
	public Recipe getRecipe(Integer id);
	public Integer addRecipe(Recipe recipe);
	public Recipe updateRecipe(Recipe recipe);

}
