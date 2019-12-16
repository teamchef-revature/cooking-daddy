package com.revature.service;

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

}
