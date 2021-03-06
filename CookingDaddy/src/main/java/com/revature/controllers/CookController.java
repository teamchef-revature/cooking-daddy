package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.revature.beans.*;
import com.revature.service.EquipmentService;
import com.revature.service.MealService;
import com.revature.service.PersonService;
import com.revature.service.RecipeService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CookController {
	@Autowired
	MealService mserv;
	
	@Autowired
	EquipmentService eqserv;
	
	@Autowired
	PersonService pserv;
	
	@Autowired
	RecipeService rserv;
	
	// yeah honestly this whole cooking thing pretty much wrecks any hope of
	// this project actually being restful buuuuut oh well man. will fix later
	// if possible.
	@PutMapping(value="/cook/{equipID}/{personID}")
	public ResponseEntity<Meal> cookMeal(@RequestBody Ingredient[] ings, 
			@PathVariable("equipID") Integer equipID, 
			@PathVariable("personID") Integer personID) {
		List<Ingredient> ingsList = new ArrayList<Ingredient>();
		for(Ingredient i : ings)
		{
			ingsList.add(i);
		}
		Meal cookedMeal = mserv.cookMeal(ingsList, eqserv.getEquipment(equipID), pserv.getPersonById(personID));
		return ResponseEntity.ok(cookedMeal);
	}
	
	@PutMapping(value="/serve/{personID}")
	public ResponseEntity<Integer> serveMeal(@RequestBody Meal meal, @PathVariable("personID") Integer personID) {
		Integer score = 0;
		
		score = mserv.serveMeal(meal, pserv.getPersonById(personID));
		
		return ResponseEntity.ok(score);
	}
	
	@GetMapping(value="/cookbook")
	public ResponseEntity<List<Recipe>> getCookbook() {
		List<Recipe> cookbook = rserv.getRecipeList();
		return ResponseEntity.ok(cookbook);
	}
}
