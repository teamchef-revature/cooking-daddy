package com.revature.data;

import java.util.Set;

import com.revature.beans.Equipment;
import com.revature.beans.PersonEquipment;

public interface EquipmentDAO {
	
	public Integer addEquipment(Equipment e);
	public Set<Equipment> getEquipments();
	public Equipment getEquipment(Integer eid);
	public Equipment updateEquipment(Equipment e);
	public Integer addPersonEquipment(PersonEquipment pe);
	public PersonEquipment updatePersonEquipment(PersonEquipment pe);

}
