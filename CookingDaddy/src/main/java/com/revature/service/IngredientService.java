package com.revature.service;

import java.util.Set;

import com.revature.beans.Category;
import com.revature.beans.Flavor;
import com.revature.beans.Ingredient;
import com.revature.beans.PersonIngredient;
import com.revature.beans.Quality;
import com.revature.beans.Season;

public interface IngredientService {
	
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
	
	public Season getSeason(Integer id);
	public Set<Season> getSeasons();
	public Integer addSeason(Season season);
	public Season updateSeason(Season season);

	public Integer addPersonIngredient(PersonIngredient ping);
	public PersonIngredient updatePersonIngredient(PersonIngredient ping);
	public void deletePersonIngredient(PersonIngredient ping);
	
	public Set<PersonIngredient> getStarterIngredients(Integer personID);
}
