package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Person;
import com.revature.service.PersonService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LoginController {
	@Autowired
	private PersonService pserv;
	
	@GetMapping(value="/login")
	public String goLogin(HttpSession session) {
		if(session.getAttribute("user") == null)
			return "static/login.html";
		else
			return "static/home.html";
	}
	
	@PostMapping(value="/login")
	public ResponseEntity<Person> login(String user, String pass, HttpSession session) {
		Person p = pserv.getPersonByUserPass(user, pass);
		if(p == null)
			return ResponseEntity.notFound().build();
		session.setAttribute("user", p);
		return ResponseEntity.ok(p);
	}
	
	@PostMapping(value="/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect: login";
	}
	
	@PostMapping(value="/register")
	public ResponseEntity<Person> register(Person p, HttpSession session) {
		pserv.addPerson(p);
		return login(p.getUsername(), p.getPassword(), session);
	}
}
