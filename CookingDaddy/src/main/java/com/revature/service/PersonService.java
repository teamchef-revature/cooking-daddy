package com.revature.service;

import com.revature.beans.Person;

public interface PersonService {
	public Integer addPerson(Person p);
	public Person getPersonById(Integer id);
	public Person getPersonByUserPass(String user, String pass);
	public void updatePerson(Person p);
	public void deletePerson(Person p);
}
