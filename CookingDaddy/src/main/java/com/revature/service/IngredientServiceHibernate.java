package com.revature.service;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.revature.beans.Ingredient;
import com.revature.data.IngredientDAO;
import com.revature.data.IngredientHibernate;

@Service
public class IngredientServiceHibernate implements IngredientService{
	private IngredientDAO id = new IngredientHibernate();

	@Override
	public Integer addIngredient(Ingredient i) {
		
		return id.addIngredient(i);
	}

	@Override
	public Set<Ingredient> getIngredients() {
		return id.getIngredients();
	}

	@Override
	public Ingredient getIngredient(Integer i) {
		return id.getIngredient(i);
	}

	@Override
	public Ingredient updateIngredient(Ingredient i) {
		return id.updateIngredient(i);
	}

}
