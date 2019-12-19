package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Category;
import com.revature.beans.Flavor;
import com.revature.beans.Ingredient;
import com.revature.beans.PersonIngredient;
import com.revature.beans.Quality;
import com.revature.data.IngredientDAO;

@Service
public class IngredientServiceHibernate implements IngredientService{
	@Autowired
	private IngredientDAO idao;

	@Override
	public Integer addIngredient(Ingredient ingredient) {
		return idao.addIngredient(ingredient);
	}

	@Override
	public Set<Ingredient> getIngredients() {
		return idao.getIngredients();
	}

	@Override
	public Ingredient getIngredient(Integer id) {
		return idao.getIngredient(id);
	}

	@Override
	public Ingredient updateIngredient(Ingredient ingredient) {
		return idao.updateIngredient(ingredient);
	}

	@Override
	public Category getCategory(Integer id) {
		return idao.getCategory(id);
	}

	@Override
	public Set<Category> getCategories() {
		return idao.getCategories();
	}

	@Override
	public Integer addCategory(Category category) {
		return idao.addCategory(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return idao.updateCategory(category);
	}

	@Override
	public Flavor getFlavor(Integer id) {
		return idao.getFlavor(id);
	}

	@Override
	public Set<Flavor> getFlavors() {
		return idao.getFlavors();
	}

	@Override
	public Integer addFlavor(Flavor flavor) {
		return idao.addFlavor(flavor);
	}

	@Override
	public Flavor updateFlavor(Flavor flavor) {
		return idao.updateFlavor(flavor);
	}

	@Override
	public Quality getQuality(Integer id) {
		return idao.getQuality(id);
	}

	@Override
	public Set<Quality> getQualities() {
		return idao.getQualities();
	}

	@Override
	public Integer addQuality(Quality quality) {
		return idao.addQuality(quality);
	}

	@Override
	public Quality updateQuality(Quality quality) {
		return idao.updateQuality(quality);
	}

	@Override
	public PersonIngredient updatePersonIngredient(PersonIngredient ping) {
		return idao.updatePersonIngredient(ping);
	}

	@Override
	public void deletePersonIngredient(PersonIngredient ping) {
		idao.deletePersonIngredient(ping);
	}

}
