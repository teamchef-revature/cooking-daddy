package com.revature.service;

import java.util.Set;

import com.revature.beans.Recipe;
import com.revature.beans.Meal;

public interface MealService {
	public Set<Recipe> getMeals();
	public Recipe getMeal(Integer id);
	public Recipe updateMeal(Recipe meal);
	public Integer addMeal(Recipe meal);
	
	public Integer addPersonMeal(Meal personMeal);
	public Meal updatePersonMeal(Meal personMeal);
	
}
