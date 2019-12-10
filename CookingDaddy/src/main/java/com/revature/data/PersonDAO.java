package com.revature.data;

import com.revature.beans.Person;

public interface PersonDAO {
	public Integer addPerson(Person p);
	public Person getPersonById(Integer id);
	public Person getPersonByUserPass(String user, String pass);
	public void updatePerson(Person p);
	public void deletePerson(Person p);
}
