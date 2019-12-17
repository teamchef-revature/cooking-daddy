package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Recipe;
import com.revature.beans.Ingredient;
import com.revature.beans.Meal;
import com.revature.data.MealDAO;

@Service
public class MealServiceHibernate implements MealService {
	@Autowired
	private MealDAO mealDAO;

	@Override
	public Set<Recipe> getRecipes() {
		return mealDAO.getRecipes();
	}

	@Override
	public Recipe getRecipe(Integer id) {
		return mealDAO.getRecipe(id);
	}

	@Override
	public Recipe updateRecipe(Recipe meal) {
		return mealDAO.updateRecipe(meal);
	}

	@Override
	public Integer addRecipe(Recipe meal) {
		return mealDAO.addRecipe(meal);
	}
	/*
	@Override
	public Integer addMeal(Meal personMeal) {
		return mealDAO.addMeal(personMeal);
	}

	@Override
	public Meal updateMeal(Meal personMeal) {
		return mealDAO.updateMeal(personMeal);
	}
	*/
	@Override
	public Meal cookMeal(Ingredient[] ingredients) {
		Meal cookedMeal = null;
		
		Set<Recipe> recipes = this.getRecipes();
		for(Recipe r : recipes) {
			//TODO: Empty code here
		}
		
		return cookedMeal;
	}
/*
	@Override
	public Set<Recipe> getMeals() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Recipe getMeal(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Recipe updateMeal(Recipe meal) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Integer addMeal(Recipe meal) {
		// TODO Auto-generated method stub
		return null;
	}*/
}
