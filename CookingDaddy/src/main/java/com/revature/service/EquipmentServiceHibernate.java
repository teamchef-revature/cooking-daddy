package com.revature.service;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Equipment;
import com.revature.beans.PersonEquipment;
import com.revature.data.EquipmentDAO;

@Service
public class EquipmentServiceHibernate implements EquipmentService {
	@Autowired
	EquipmentDAO eu;

	@Override
	public Integer addEquipment(Equipment e) {
		return eu.addEquipment(e);
	}

	@Override
	public Set<Equipment> getEquipments() {
		return eu.getEquipments();
	}

	@Override
	public Equipment getEquipment(Integer eid) {
		return eu.getEquipment(eid);
	}

	@Override
	public Equipment updateEquipment(Equipment e) {
		return eu.updateEquipment(e);
	}

	@Override
	public Integer addPersonEquipment(PersonEquipment pe) {
		return eu.addPersonEquipment(pe);
	}

	@Override
	public PersonEquipment updatePersonEquipment(PersonEquipment pe) {
		return eu.updatePersonEquipment(pe);
	}

	@Override
	public Set<PersonEquipment> getStarterEquipment(Integer personID) {
		Set<PersonEquipment> starts = new HashSet<PersonEquipment>();
		
		PersonEquipment oven = new PersonEquipment();
		oven.setEquipment(getEquipment(1));
		oven.setPersonId(personID);
		oven.setInventory(1);
		addPersonEquipment(oven);
		PersonEquipment stove = new PersonEquipment();
		stove.setEquipment(getEquipment(2));
		stove.setPersonId(personID);
		stove.setInventory(1);
		addPersonEquipment(stove);
		
		starts.add(oven);
		starts.add(stove);
		
		return starts;
	}

}
