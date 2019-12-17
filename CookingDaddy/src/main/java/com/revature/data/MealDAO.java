package com.revature.data;

import java.util.Set;

import com.revature.beans.Recipe;

public interface MealDAO {
	public Integer addRecipe(Recipe meal);
	public Set<Recipe> getRecipes();
	public Recipe getRecipe(Integer id);
	public Recipe updateRecipe(Recipe meal);
	
	//public Integer addPersonMeal(PersonMeal personMeal);
	//public PersonMeal updatePersonMeal(PersonMeal personMeal);
	//public Integer addMeal(Meal personMeal);
	//public Meal updateMeal(Meal personMeal);
}
