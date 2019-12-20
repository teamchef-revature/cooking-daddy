package com.revature.data;

import java.util.Set;

import com.revature.beans.Person;
import com.revature.beans.Role;

public interface PersonDAO {
	public Integer addPerson(Person p);
	public Person getPersonById(Integer id);
	public Person getPersonByUserPass(String user, String pass);
	public Set<Person> getPeople();
	public void updatePerson(Person p);
	public void deletePerson(Person p);
	public Role getRoleById(Integer id);
}
