package com.revature.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Category;
import com.revature.beans.Flavor;
import com.revature.beans.Ingredient;
import com.revature.beans.Recipe;
import com.revature.beans.Quality;
import com.revature.service.IngredientService;
import com.revature.service.MealService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/admin")
public class AdminController {
	@Autowired
	private IngredientService ingredientService;
	@Autowired
	private MealService mealService;
	
	// ** Ingredient **
	@GetMapping(value="/ingredient")
	public ResponseEntity<Set<Ingredient>> getIngredients() {
		return ResponseEntity.ok(ingredientService.getIngredients());
	}
	@GetMapping(value="/ingredient/{id}")
	public ResponseEntity<Ingredient> getIngredient(@PathVariable Integer id) {
		return ResponseEntity.ok(ingredientService.getIngredient(id));
	}
	@PostMapping(value="/ingredient")
	public ResponseEntity<Ingredient> addIngredient(@RequestBody Ingredient ingredient) {
		ingredientService.addIngredient(ingredient);
		return ResponseEntity.status(201).body(ingredient);
	}
	@PutMapping(value="/ingredient/{id}")
	public ResponseEntity<Ingredient> updateIngredient(@PathVariable Integer id, @RequestBody Ingredient ingredient) {
		if(ingredientService.getIngredient(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(ingredientService.updateIngredient(ingredient));
	}
	
	// ** Category **
	@GetMapping(value="/category")
	public ResponseEntity<Set<Category>> getCategories() {
		return ResponseEntity.ok(ingredientService.getCategories());
	}
	@GetMapping(value="/category/{id}")
	public ResponseEntity<Category> getCategory(@PathVariable Integer id) {
		return ResponseEntity.ok(ingredientService.getCategory(id));
	}
	@PostMapping(value="/category")
	public ResponseEntity<Category> addCategory(@RequestBody Category category) {
		ingredientService.addCategory(category);
		return ResponseEntity.status(201).body(category);
	}
	@PutMapping(value="/category/{id}")
	public ResponseEntity<Category> updateCategory(@PathVariable Integer id, @RequestBody Category category) {
		if(ingredientService.getCategory(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(ingredientService.updateCategory(category));
	}
	
	// ** Flavor **
	@GetMapping(value="/flavor")
	public ResponseEntity<Set<Flavor>> getFlavors() {
		return ResponseEntity.ok(ingredientService.getFlavors());
	}
	@GetMapping(value="/flavor/{id}")
	public ResponseEntity<Flavor> getFlavor(@PathVariable Integer id) {
		return ResponseEntity.ok(ingredientService.getFlavor(id));
	}
	@PostMapping(value="/flavor")
	public ResponseEntity<Flavor> addFlavor(@RequestBody Flavor flavor) {
		ingredientService.addFlavor(flavor);
		return ResponseEntity.status(201).body(flavor);
	}
	@PutMapping(value="/flavor/{id}")
	public ResponseEntity<Flavor> updateFlavor(@PathVariable Integer id, @RequestBody Flavor flavor) {
		if(ingredientService.getFlavor(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(ingredientService.updateFlavor(flavor));
	}
	
	// ** Quality **
	@GetMapping(value="/quality")
	public ResponseEntity<Set<Quality>> getQualities() {
		return ResponseEntity.ok(ingredientService.getQualities());
	}
	@GetMapping(value="/quality/{id}")
	public ResponseEntity<Quality> getQuality(@PathVariable Integer id) {
		return ResponseEntity.ok(ingredientService.getQuality(id));
	}
	@PostMapping(value="/quality")
	public ResponseEntity<Quality> addQuality(@RequestBody Quality quality) {
		ingredientService.addQuality(quality);
		return ResponseEntity.status(201).body(quality);
	}
	@PutMapping(value="/quality/{id}")
	public ResponseEntity<Quality> updateQuality(@PathVariable Integer id, @RequestBody Quality quality) {
		if(ingredientService.getQuality(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(ingredientService.updateQuality(quality));
	}
	
	// ** Meal **
	@GetMapping(value="/meal")
	public ResponseEntity<Set<Recipe>> getMeals() {
		return ResponseEntity.ok(mealService.getMeals());
	}
	@GetMapping(value="/meal/{id}")
	public ResponseEntity<Recipe> getMeal(@PathVariable Integer id) {
		return ResponseEntity.ok(mealService.getMeal(id));
	}
	@PostMapping(value="/meal")
	public ResponseEntity<Recipe> addMeal(@RequestBody Recipe meal) {
		mealService.addMeal(meal);
		return ResponseEntity.status(201).body(meal);
	}
	@PutMapping(value="/meal/{id}")
	public ResponseEntity<Recipe> updateMeal(@PathVariable Integer id, @RequestBody Recipe meal) {
		if(mealService.getMeal(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(mealService.updateMeal(meal));
	}
}
