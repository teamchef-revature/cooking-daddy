package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Recipe;
import com.revature.beans.Meal;
import com.revature.data.MealDAO;

@Service
public class MealServiceHibernate implements MealService {
	@Autowired
	private MealDAO mealDAO;

	@Override
	public Set<Recipe> getMeals() {
		return mealDAO.getMeals();
	}

	@Override
	public Recipe getMeal(Integer id) {
		return mealDAO.getMeal(id);
	}

	@Override
	public Recipe updateMeal(Recipe meal) {
		return mealDAO.updateMeal(meal);
	}

	@Override
	public Integer addMeal(Recipe meal) {
		return mealDAO.addMeal(meal);
	}

	@Override
	public Integer addPersonMeal(Meal personMeal) {
		return mealDAO.addPersonMeal(personMeal);
	}

	@Override
	public Meal updatePersonMeal(Meal personMeal) {
		return mealDAO.updatePersonMeal(personMeal);
	}
}
