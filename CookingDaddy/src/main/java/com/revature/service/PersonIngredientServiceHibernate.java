package com.revature.service;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.revature.beans.PersonIngredient;

import com.revature.data.PersonIngredientDAO;
import com.revature.data.PersonIngredientHibernate;

@Service
public class PersonIngredientServiceHibernate implements PersonIngredientService {
	
	private PersonIngredientDAO pid = new PersonIngredientHibernate();

	@Override
	public Integer addPersonIngredient(PersonIngredient i) {
		return pid.addPersonIngredient(i);
	}

	@Override
	public Set<PersonIngredient> getPersonIngredients() {
		return pid.getPersonIngredients();
	}

	@Override
	public PersonIngredient getPersonIngredient(Integer i) {
		
		return pid.getPersonIngredient(i);
	}

	@Override
	public PersonIngredient updatePersonIngredient(PersonIngredient i) {
		return pid.updatePersonIngredient(i);
	}

	@Override
	public void deletePersonIngredient(PersonIngredient i) {
		pid.deletePersonIngredient(i);
		
	}

}
