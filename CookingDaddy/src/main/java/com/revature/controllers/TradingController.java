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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Ingredient;
import com.revature.beans.Offer;
import com.revature.beans.Post;
import com.revature.beans.Status;
import com.revature.service.OfferService;
import com.revature.service.PostService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TradingController {
	@Autowired
	private PostService ps;
	@Autowired
	private OfferService os;
	
	//Status
	@GetMapping(value = "/market/status")
	public ResponseEntity<Set<Status>> getStatuses() {
		return ResponseEntity.ok(ps.getStatuses());
	}
	@GetMapping(value = "/market/status/{id}")
	public ResponseEntity<Status> getStatus(@PathVariable("id") Integer id) {
		return ResponseEntity.ok(ps.getStatus(id));
	}
	@PostMapping(value="/market/status")
	public ResponseEntity<Status> addStatus(@RequestBody Status st) {
		ps.addStatus(st);
		return ResponseEntity.status(201).body(st);
	}
	@PutMapping(value="/market/status/{id}")
	public ResponseEntity<Status> updateStatus(@PathVariable Integer id, @RequestBody Status st) {
		if(ps.getStatus(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(ps.updateStatus(st));
	}
	//Post
	@GetMapping(value = "/market/showcase")
	public ResponseEntity<Set<Post>> getPosts() {
		return ResponseEntity.ok(ps.getPosts());
	}
	@GetMapping(value = "/market/showcase/{id}")
	public ResponseEntity<Post> getPost(@PathVariable("id") Integer id) {
		return ResponseEntity.ok(ps.getPost(id));
	}
	@PostMapping(value="/market/showcase")
	public ResponseEntity<Post> addPost(@RequestBody Post po) {
		ps.addPost(po);
		return ResponseEntity.status(201).body(po);
	}
	@PutMapping(value="/market/showcase/{id}")
	public ResponseEntity<Post> updatePost(@PathVariable Integer id, @RequestBody Post post) {
		if(ps.getPost(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(ps.updatePost(post));
	}
	
	@GetMapping(value = "/market/offer")
	public ResponseEntity<Set<Offer>> getOffers() {
		return ResponseEntity.ok(os.getOffers());
	}
	@GetMapping(value = "/market/offer/{id}")
	public ResponseEntity<Offer> getOffer(@PathVariable("id") Integer id) {
		return ResponseEntity.ok(os.getOffer(id));
	}
	@PostMapping(value="/market/offer")
	public ResponseEntity<Offer> addOffer(@RequestBody Offer fo) {
		os.addOffer(fo);
		return ResponseEntity.status(201).body(fo);
	}
	@PutMapping(value="/market/offer/{id}")
	public ResponseEntity<Offer> updateOffer(@PathVariable Integer id, @RequestBody Offer offer) {
		if(os.getOffer(id) == null)
			return ResponseEntity.status(405).body(null);
		return ResponseEntity.ok(os.updateOffer(offer));
	}

}
