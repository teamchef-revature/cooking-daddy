package com.revature.service;

import java.util.ArrayList;
import java.util.Set;

import com.revature.beans.Recipe;
import com.revature.beans.Component;
import com.revature.beans.Ingredient;
import com.revature.beans.Meal;

public interface MealService {
	/*
	public Set<Recipe> getMeals();
	public Recipe getMeal(Integer id);
	public Recipe updateMeal(Recipe meal);
	public Integer addMeal(Recipe meal);
	 */
	public Integer addRecipe(Recipe meal);
	public Set<Recipe> getRecipes();
	public Recipe getRecipe(Integer id);
	public Recipe updateRecipe(Recipe meal);
	
	//public Integer addMeal(Meal personMeal);
	//public Meal updateMeal(Meal personMeal);
	public Meal cookMeal(ArrayList<Ingredient> ingredients);
}
