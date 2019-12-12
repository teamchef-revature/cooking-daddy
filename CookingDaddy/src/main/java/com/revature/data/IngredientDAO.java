package com.revature.data;

import java.util.Set;

import com.revature.beans.Category;
import com.revature.beans.Flavor;
import com.revature.beans.Ingredient;
import com.revature.beans.Quality;

public interface IngredientDAO {
	
	public Integer addIngredient(Ingredient i);
	public Set<Ingredient> getIngredients();
	public Ingredient getIngredient(Integer i);
	public Ingredient updateIngredient(Ingredient i);
	public void deleteIngredient(Ingredient i);
	
	public Category getCategory(Integer id);
	public Set<Category> getCategories();
	public Flavor getFlavor(Integer id);
	public Set<Flavor> getFlavors();
	public Quality getQuality(Integer id);
	public Set<Quality> getQualities();

}
