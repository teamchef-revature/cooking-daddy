package com.revature.service;

import java.util.Set;

import com.revature.beans.Ingredient;

public interface IngredientService {
	
	Integer addIngredient(Ingredient i);
	Set<Ingredient> getIngredients();
	Ingredient getIngredient(Integer i);
	Ingredient updateIngredient(Ingredient i);

}
