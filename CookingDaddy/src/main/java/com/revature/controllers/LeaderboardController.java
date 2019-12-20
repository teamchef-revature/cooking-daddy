package com.revature.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Person;
import com.revature.service.PersonService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class LeaderboardController {
	@Autowired
	private PersonService pserv;
	
	@GetMapping(value="/leaderboard")
	public ResponseEntity<Set<Person>> getLeaderboard() {
		Set<Person> leaderboard = new HashSet<Person>();
		
		
		
		return ResponseEntity.ok(leaderboard);
	}
}
