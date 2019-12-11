package com.revature.data;

import java.util.Set;

import com.revature.beans.Ingredient;

public interface IngredientDAO {
	
	Integer addIngredient(Ingredient i);
	Set<Ingredient> getIngredients();
	Ingredient getIngredient(Integer i);
	Ingredient updateIngredient(Ingredient i);
	public void deleteIngredient(Ingredient i);

}
