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
import com.revature.beans.Quality;
import com.revature.data.IngredientDAO;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/admin")
public class AdminController {
	@Autowired
	private IngredientDAO ingredientDAO;
	
	// ** Ingredient **
	@GetMapping(value="/ingredient")
	public ResponseEntity<Set<Ingredient>> getIngredients() {
		return ResponseEntity.ok(ingredientDAO.getIngredients());
	}
	@GetMapping(value="/ingredient/{id}")
	public ResponseEntity<Ingredient> getIngredient(@PathVariable Integer id) {
		return ResponseEntity.ok(ingredientDAO.getIngredient(id));
	}
	@PostMapping(value="/ingredient")
	public ResponseEntity<Ingredient> addIngredient(@RequestBody Ingredient ingredient) {
		ingredientDAO.addIngredient(ingredient);
		return ResponseEntity.status(201).body(ingredient);
	}
	@PutMapping(value="/ingredient/{id}")
	public ResponseEntity<Ingredient> updateIngredient(@PathVariable Integer id, @RequestBody Ingredient ingredient) {
		if(ingredientDAO.getIngredient(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(ingredientDAO.updateIngredient(ingredient));
	}
	
	// ** Category **
	@GetMapping(value="/category")
	public ResponseEntity<Set<Category>> getCategories() {
		return ResponseEntity.ok(ingredientDAO.getCategories());
	}
	@GetMapping(value="/category/{id}")
	public ResponseEntity<Category> getCategory(@PathVariable Integer id) {
		return ResponseEntity.ok(ingredientDAO.getCategory(id));
	}
	@PostMapping(value="/category")
	public ResponseEntity<Category> addCategory(@RequestBody Category category) {
		ingredientDAO.addCategory(category);
		return ResponseEntity.status(201).body(category);
	}
	
	// ** Flavor **
	@GetMapping(value="/flavor")
	public ResponseEntity<Set<Flavor>> getFlavors() {
		return ResponseEntity.ok(ingredientDAO.getFlavors());
	}
	@GetMapping(value="/flavor/{id}")
	public ResponseEntity<Flavor> getFlavor(@PathVariable Integer id) {
		return ResponseEntity.ok(ingredientDAO.getFlavor(id));
	}
	@PostMapping(value="/flavor")
	public ResponseEntity<Flavor> addFlavor(@RequestBody Flavor flavor) {
		ingredientDAO.addFlavor(flavor);
		return ResponseEntity.status(201).body(flavor);
	}
	
	// ** Quality **
	@GetMapping(value="/quality")
	public ResponseEntity<Set<Quality>> getQualities() {
		return ResponseEntity.ok(ingredientDAO.getQualities());
	}
	@GetMapping(value="/quality/{id}")
	public ResponseEntity<Quality> getQuality(@PathVariable Integer id) {
		return ResponseEntity.ok(ingredientDAO.getQuality(id));
	}
	@PostMapping(value="/quality")
	public ResponseEntity<Quality> addQuality(@RequestBody Quality quality) {
		ingredientDAO.addQuality(quality);
		return ResponseEntity.status(201).body(quality);
	}
}