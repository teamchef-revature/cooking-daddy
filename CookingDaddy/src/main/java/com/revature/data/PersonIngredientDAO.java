package com.revature.data;

import java.util.Set;


import com.revature.beans.PersonIngredient;

public interface PersonIngredientDAO {
	Integer addPersonIngredient(PersonIngredient i);
	Set<PersonIngredient> getPersonIngredients();
	PersonIngredient getPersonIngredient(Integer i);
	PersonIngredient updatePersonIngredient(PersonIngredient i);
	public void deletePersonIngredient(PersonIngredient i);

}
