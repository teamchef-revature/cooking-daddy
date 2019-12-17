package com.revature.data;

import java.util.Set;

import com.revature.beans.Recipe;
import com.revature.beans.Meal;

public interface MealDAO {
	public Integer addRecipe(Recipe meal);
	public Set<Recipe> getRecipes();
	public Recipe getRecipe(Integer id);
	public Recipe updateRecipe(Recipe meal);
	
	public Integer addMeal(Meal personMeal);
	public Meal updateMeal(Meal personMeal);
}
