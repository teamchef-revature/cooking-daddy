package com.revature.data;

import java.util.Set;

import com.revature.beans.Recipe;
import com.revature.beans.Meal;

public interface MealDAO {
	public Integer addMeal(Recipe meal);
	public Set<Recipe> getMeals();
	public Recipe getMeal(Integer id);
	public Recipe updateMeal(Recipe meal);
	
	public Integer addPersonMeal(Meal personMeal);
	public Meal updatePersonMeal(Meal personMeal);
}
