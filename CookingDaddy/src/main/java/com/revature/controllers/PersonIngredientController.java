package com.revature.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.PersonIngredient;
import com.revature.data.PersonIngredientDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/pingredients")
public class PersonIngredientController {
	
	@Autowired
	private PersonIngredientDAO pid;
	
	@GetMapping
	@ResponseBody
	public Set<PersonIngredient> getAll(){
		return pid.getPersonIngredients();
	}
	
	@GetMapping("{steve}")
	@ResponseBody
	public PersonIngredient getPersonIngredient(@PathVariable("steve") Integer bob) {
		return pid.getPersonIngredient(bob);
	}
	
	@PostMapping
	public PersonIngredient addPersonIngredient(@RequestBody PersonIngredient i) {
		pid.addPersonIngredient(i);
		return i;
	}

}
