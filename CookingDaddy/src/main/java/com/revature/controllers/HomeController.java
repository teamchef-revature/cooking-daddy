package com.revature.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@CrossOrigin(origins="http://localhost:4200")
public class HomeController {
	@RequestMapping(value="/", method=RequestMethod.GET)
	public String getHomePage() {
		return "static/index.html";
	}
}
