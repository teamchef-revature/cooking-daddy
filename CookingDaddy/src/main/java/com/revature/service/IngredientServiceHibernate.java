package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Ingredient;
import com.revature.data.IngredientDAO;

@Service
public class IngredientServiceHibernate implements IngredientService{
	@Autowired
	private IngredientDAO id;

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
