package com.revature.data;

import java.util.Set;

import com.revature.beans.Recipe;

public interface MealDAO {
	public Integer addMeal(Recipe meal);
	public Set<Recipe> getMeals();
	public Recipe getMeal(Integer id);
	public Recipe updateMeal(Recipe meal);
	
	//public Integer addPersonMeal(PersonMeal personMeal);
	//public PersonMeal updatePersonMeal(PersonMeal personMeal);
}
