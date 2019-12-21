package com.revature.controllers;

import java.util.HashSet;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Person;
import com.revature.beans.PersonEquipment;
import com.revature.beans.PersonIngredient;
import com.revature.service.EquipmentService;
import com.revature.service.IngredientService;
import com.revature.service.PersonService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LoginController {
	@Autowired
	private PersonService pserv;
	
	@Autowired
	private EquipmentService eserv;
	
	@Autowired
	private IngredientService iserv;
	
	@GetMapping(value="/login")
	public ResponseEntity<Person> goLogin(HttpSession session) {
		Person active = (Person) session.getAttribute("person");
		if(active == null) {
			return ResponseEntity.notFound().build();
		}
		else {
			Person pPrime = pserv.getPersonById(active.getId());
			session.setAttribute("person", pPrime);
			return ResponseEntity.ok(pPrime);
		}
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<Person> login(String user, String pass, HttpSession session) {
		Person p = pserv.getPersonByUserPass(user, pass);
		if(p == null) {
			return ResponseEntity.status(401).build();
			}
		session.setAttribute("person", p);
		return ResponseEntity.ok(p);
	}
	
	@PostMapping(value="/logout")
	public ResponseEntity<Person> logout(HttpSession session) {
		session.invalidate();
		return ResponseEntity.noContent().build();
	}
	
	@PutMapping(value="/person/{id}")
	public ResponseEntity<Person> updatePerson(@RequestBody Person person, @PathVariable("id") Integer id) {
		if (person.getId() != id) {
			return ResponseEntity.notFound().build();
		}
		System.out.println(person.toString());
		for (PersonIngredient pi: person.getIngredients()) {
			pi.setPerson_id(id);
		}
		for (PersonEquipment pe: person.getEquipments()) {
			pe.setPersonId(id);
		}
		System.out.println();
		pserv.updatePerson(person);
		return ResponseEntity.ok(pserv.getPersonById(id));
	}
	
	@PostMapping(value="/register")
	public ResponseEntity<Person> register(@RequestBody Person person) {
		System.out.println(person);
		person.setRole(pserv.getRoleById(1));
		person.setMealsServed(0);
		person.setChefRating(0);
		Integer id = pserv.addPerson(person);
		
		person.setEquipments(eserv.getStarterEquipment(id));
		
		person.setIngredients(iserv.getStarterIngredients(id));
		
		System.out.println(person);
		pserv.updatePerson(person);
		return ResponseEntity.ok(person);
	}
	
	@GetMapping(value="/person/{id}")
	public ResponseEntity<Person> getPersonById(@PathVariable("id") Integer id) {
		Person p = pserv.getPersonById(id);
		if (p==null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(p);
	}
}
