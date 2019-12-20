package com.revature.service;

import java.util.Set;

import com.revature.beans.Person;
import com.revature.beans.Role;

public interface PersonService {
	public Integer addPerson(Person p);
	public Person getPersonById(Integer id);
	public Person getPersonByUserPass(String user, String pass);
	public Set<Person> getLeaderboard();
	public void updatePerson(Person p);
	public void deletePerson(Person p);
	public Role getRoleById(Integer id);
}
