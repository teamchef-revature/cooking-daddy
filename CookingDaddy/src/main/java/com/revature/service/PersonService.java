package com.revature.service;

import java.util.List;

import com.revature.beans.Person;
import com.revature.beans.Role;

public interface PersonService {
	public Integer addPerson(Person p);
	public Person getPersonById(Integer id);
	public Person getPersonByUserPass(String user, String pass);
	public List<Person> getLeaderboard();
	public void updatePerson(Person p);
	public void deletePerson(Person p);
	public Role getRoleById(Integer id);
}
