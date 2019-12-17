package com.revature.controllers;

import java.net.URI;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Equipment;
import com.revature.beans.PersonEquipment;
import com.revature.service.EquipmentService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EquipmentController {
	@Autowired
	EquipmentService es;
	
	@RequestMapping(value="/equipment", method = RequestMethod.GET)
	public Set<Equipment> getAll(){
		return es.getEquipments();
	}
	
	@RequestMapping(value="/equipment/{Sandshrew}", method = RequestMethod.GET)
	public ResponseEntity<Equipment> getEquipment(@PathVariable("Sandshrew") Integer diglett) {
		Equipment eq = es.getEquipment(diglett);
		if (eq==null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(eq);
	}
	
	@RequestMapping(value="/equipment", method = RequestMethod.POST)
	public ResponseEntity<Integer> addEquipment(@RequestBody Equipment e) {
		Integer eid = es.addEquipment(e);
		if (eid == null) {
			return ResponseEntity.status(501).build();
		}
		return ResponseEntity.created(URI.create("/equipment/"+eid)).build();
	}
	
	@RequestMapping(value="/personEquipment", method = RequestMethod.POST)
	public ResponseEntity<Integer> addPersonEquipment(@RequestBody PersonEquipment pe) {
		Integer peid = es.addPersonEquipment(pe);
		if (peid == null) {
			return ResponseEntity.status(501).build();
		}
		return ResponseEntity.created(URI.create("/personEquipment/"+peid)).build();
	}
	
	@RequestMapping(value = "/personEquipment/{id}", method = RequestMethod.PUT)
	public ResponseEntity<PersonEquipment> updatePersonEquipment(@PathVariable("id") Integer peid, @RequestBody PersonEquipment pe) {
		if (pe.getId().equals(peid)) {
			PersonEquipment update= es.updatePersonEquipment(pe);
			return ResponseEntity.ok(update);
		} else {
			return ResponseEntity.badRequest().build();
		}
	}
}
