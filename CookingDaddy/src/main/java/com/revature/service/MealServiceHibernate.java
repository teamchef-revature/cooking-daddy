package com.revature.service;

import java.util.ArrayList;
import java.util.Random;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Recipe;
import com.revature.beans.RecipeComponent;
import com.revature.beans.Ingredient;
import com.revature.beans.Meal;
import com.revature.data.MealDAO;

@Service
public class MealServiceHibernate implements MealService {
	@Autowired
	private MealDAO mealDAO;
	
	@Autowired
	private RecipeService recipeService;

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
	public Meal cookMeal(ArrayList<Ingredient> ingredients) {
		Meal cookedMeal = null;
		//keeps track of ingredients used in the meal
		ArrayList<Ingredient> checkedIngredients = new ArrayList<>();
		//keeps track of how many ingredients were used
		int counter = 0;
		
		Set<Recipe> recipes = this.getRecipes();
		rec: for(Recipe r : recipes) {
			counter = 0;
			checkedIngredients.clear();
			comp: for(RecipeComponent c : recipeService.getComponents(r)) {
				ing: for(Ingredient i : ingredients) {
					if (c.getIngredient() != null && c.getIngredient().equals(i)) {
						// if the component has a specific ingredient,
						// and that ingredient is equal to the current
						// ingredient from the list, then we add it to
						// the used ingredients for the final meal
						// and increment the ingredients used counter
						counter++;
						checkedIngredients.add(i);
					}
				}
			}
		}
		return cookedMeal;
	}
}
