package com.revature.controllers;

import java.net.URI;
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
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Equipment;
import com.revature.beans.PersonEquipment;
import com.revature.service.EquipmentService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EquipmentController {
	@Autowired
	EquipmentService es;
	
	@GetMapping
	@RequestMapping(value="/equipment")
	public Set<Equipment> getAll(){
		return es.getEquipments();
	}
	
	@GetMapping("{Sandshrew}")
	@RequestMapping(value="/equipment")
	public ResponseEntity<Equipment> getEquipment(@PathVariable("Sandshrew") Integer diglett) {
		Equipment eq = es.getEquipment(diglett);
		if (eq==null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(eq);
	}
	
	@PostMapping
	@RequestMapping(value="/equipment")
	public ResponseEntity<Integer> addEquipment(@RequestBody Equipment e) {
		Integer eid = es.addEquipment(e);
		if (eid == null) {
			return ResponseEntity.status(501).build();
		}
		return ResponseEntity.created(URI.create("/equipment/"+eid)).build();
	}
	
	@PostMapping
	@RequestMapping(value="/personEquipment")
	public ResponseEntity<Integer> addPersonEquipment(@RequestBody PersonEquipment pe) {
		Integer peid = es.addPersonEquipment(pe);
		if (peid == null) {
			return ResponseEntity.status(501).build();
		}
		return ResponseEntity.created(URI.create("/personEquipment/"+peid)).build();
	}
	
	@PutMapping("{Hilda the Blender}")
	@RequestMapping(value = "/personEquipment")
	public ResponseEntity<PersonEquipment> updatePersonEquipment(@RequestBody PersonEquipment pe) {
		PersonEquipment update= es.updatePersonEquipment(pe);
		return ResponseEntity.ok(update);
	}

}
