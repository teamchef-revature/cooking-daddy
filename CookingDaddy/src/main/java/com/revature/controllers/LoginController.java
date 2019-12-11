package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.revature.beans.Person;
import com.revature.service.PersonService;

@Controller
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
	public String login(String user, String pass, HttpSession session) {
		Person p = pserv.getPersonByUserPass(user, pass);
		if(p == null)
			return "redirect: login";
		session.setAttribute("user", p);
		return "redirect: home";
	}
	
	@PostMapping(value="/logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect: login";
	}
	
	@PostMapping(value="/register")
	public String register(Person p, HttpSession session) {
		pserv.addPerson(p);
		return login(p.getUsername(), p.getPassword(), session);
	}
}
