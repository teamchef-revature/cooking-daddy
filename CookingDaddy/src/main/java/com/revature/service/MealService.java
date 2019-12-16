package com.revature.service;

import java.util.Set;

import com.revature.beans.Recipe;
import com.revature.beans.PersonMeal;

public interface MealService {
	public Set<Recipe> getMeals();
	public Recipe getMeal(Integer id);
	public Recipe updateMeal(Recipe meal);
	public Integer addMeal(Recipe meal);
	
	public Integer addPersonMeal(PersonMeal personMeal);
	public PersonMeal updatePersonMeal(PersonMeal personMeal);
	
}
