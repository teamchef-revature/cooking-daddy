package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Person;
import com.revature.service.PersonService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LoginController {
	@Autowired
	private PersonService pserv;
	
	@GetMapping(value="/login")
	public ResponseEntity<Person> goLogin(HttpSession session) {
		Person active = (Person) session.getAttribute("person");
		if(active == null)
			return ResponseEntity.notFound().build();
		else {
			Person pPrime = pserv.getPersonById(active.getId());
			session.setAttribute("person", pPrime);
			return ResponseEntity.ok(pPrime);
		}
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<Person> login(String user, String pass, HttpSession session) {
		Person p = pserv.getPersonByUserPass(user, pass);
		if(p == null)
			return ResponseEntity.status(401).build();
		session.setAttribute("person", p);
		return ResponseEntity.ok(p);
	}
	
	@PostMapping(value="/logout")
	public ResponseEntity<Person> logout(HttpSession session) {
		session.invalidate();
		return ResponseEntity.noContent().build();
	}
	
	@PostMapping(value="/register")
	public ResponseEntity<Person> register(@RequestBody Person person) {
		System.out.println(person);
		person.setRole(pserv.getRoleById(1));
		System.out.println(person);
		pserv.addPerson(person);
		return ResponseEntity.ok(person);
	}
}
