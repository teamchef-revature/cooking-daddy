package com.revature.data;

import java.util.Set;

import com.revature.beans.Category;
import com.revature.beans.Flavor;
import com.revature.beans.Ingredient;
import com.revature.beans.PersonIngredient;
import com.revature.beans.Quality;

public interface IngredientDAO {
	
	public Integer addIngredient(Ingredient ingredient);
	public Set<Ingredient> getIngredients();
	public Ingredient getIngredient(Integer id);
	public Ingredient updateIngredient(Ingredient ingredient);
	
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
	
	public Integer addPersonIngredient(PersonIngredient pi);
	public PersonIngredient updatePersonIngredient(PersonIngredient pi);
	public void deletePersonIngredient(PersonIngredient pi);
}
