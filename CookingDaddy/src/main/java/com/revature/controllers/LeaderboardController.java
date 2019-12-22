package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

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
	public ResponseEntity<List<Person>> getLeaderboard() {
		List<Person> leaderboard = new ArrayList<Person>();
		
		leaderboard = pserv.getLeaderboard();
		
		return ResponseEntity.ok(leaderboard);
	}
}
