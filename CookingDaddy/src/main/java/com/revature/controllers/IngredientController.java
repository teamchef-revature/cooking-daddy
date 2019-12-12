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

import com.revature.beans.Ingredient;
import com.revature.data.IngredientDAO;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/ingredients")
public class IngredientController {
	
	@Autowired
	private IngredientDAO id;
	
	@GetMapping
	@ResponseBody
	public Set<Ingredient> getAll(){
		return id.getIngredients();
	}
	
	@GetMapping("{steve}")
	@ResponseBody
	public Ingredient getIngredient(@PathVariable("steve") Integer bob) {
		return id.getIngredient(bob);
	}
	
	@PostMapping
	public Ingredient addIngredient(@RequestBody Ingredient i) {
		id.addIngredient(i);
		return i;
	}

}
