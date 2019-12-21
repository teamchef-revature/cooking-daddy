package com.revature.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Status;
import com.revature.service.PostService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TradingController {
	@Autowired
	private PostService ps;
	
	public ResponseEntity<Set<Status>> getStatuses() {
		return ResponseEntity.ok(ps.getStatuses());
	}
}
