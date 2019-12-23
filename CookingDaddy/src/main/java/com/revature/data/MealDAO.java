package com.revature.data;

import java.util.Set;

import com.revature.beans.Meal;
import com.revature.beans.Person;
import com.revature.beans.Recipe;

public interface MealDAO {
	public Integer addRecipe(Recipe meal);
	public Set<Recipe> getRecipes();
	public Recipe getRecipe(Integer id);
	public Recipe getRecipeByName(String name);
	public Recipe updateRecipe(Recipe meal);
	
	public Set<Meal> getMealsByPerson(Person p);
	//public PersonMeal updatePersonMeal(PersonMeal personMeal);
	public Integer addMeal(Meal m);
	public Meal updateMeal(Meal m);
}
