package com.revature.controllers;

import java.net.URI;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Ingredient;
import com.revature.beans.PersonIngredient;
import com.revature.data.IngredientDAO;


@RestController
@CrossOrigin(origins="http://localhost:4200")
public class IngredientController {
	
	@Autowired
	private IngredientDAO id;
	
	@RequestMapping(value = "/ingredient", method = RequestMethod.GET)
	@ResponseBody
	public Set<Ingredient> getAll(){
		return id.getIngredients();
	}
	
	@RequestMapping(value = "/ingredient/{steve}", method = RequestMethod.GET)
	@ResponseBody
	public Ingredient getIngredient(@PathVariable("steve") Integer bob) {
		return id.getIngredient(bob);
	}
	
	@RequestMapping(value = "/ingredient", method = RequestMethod.POST)
	public Ingredient addIngredient(@RequestBody Ingredient i) {
		id.addIngredient(i);
		return i;
	}
	
	@RequestMapping(value="/personIngredient", method = RequestMethod.POST)
	public ResponseEntity<Integer> addPersonIngredient(@RequestBody PersonIngredient pi) {
		Integer peid = id.addPersonIngredient(pi);
		if (peid == null) {
			return ResponseEntity.status(501).build();
		}
		return ResponseEntity.created(URI.create("/personIngredient/"+peid)).build();
	}
	
	@RequestMapping(value = "/personIngredient/{piid}", method = RequestMethod.PUT)
	public ResponseEntity<PersonIngredient> updatePersonIngredient(@PathVariable("piid") Integer pid, @RequestBody PersonIngredient pi) {
		System.out.println(pi);
		if (pi.getId().equals(pid)) {
			PersonIngredient update= id.updatePersonIngredient(pi);
			return ResponseEntity.ok(update);
		} else {
			return ResponseEntity.badRequest().build();
		}
	}

}
