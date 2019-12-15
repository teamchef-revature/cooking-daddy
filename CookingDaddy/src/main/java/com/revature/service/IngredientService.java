package com.revature.service;

import java.util.Set;

import com.revature.beans.Category;
import com.revature.beans.Flavor;
import com.revature.beans.Ingredient;
import com.revature.beans.Quality;

public interface IngredientService {
	
	public Integer addIngredient(Ingredient i);
	public Set<Ingredient> getIngredients();
	public Ingredient getIngredient(Integer i);
	public Ingredient updateIngredient(Ingredient i);

	public Category getCategory(Integer id);
	public Set<Category> getCategories();
	public Integer addCategory(Category category);
	public Category updateCategory(Category category);
	
	public Flavor getFlavor(Integer id);
	public Set<Flavor> getFlavors();
	public Integer addFlavor(Flavor flavor);
	public Flavor updateFlavor(Flavor flavor);
	
	public Quality getQuality(Integer id);
	public Set<Quality> getQualities();
	public Integer addQuality(Quality quality);
	public Quality updateQuality(Quality quality);
}
