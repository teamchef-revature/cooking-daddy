package com.revature.service;

import org.springframework.stereotype.Service;

import com.revature.beans.Person;
import com.revature.beans.Role;
import com.revature.data.PersonDAO;
import com.revature.data.PersonHibernate;

@Service
public class PersonServiceHibernate implements PersonService {
	private PersonDAO pdao = new PersonHibernate();
	
	@Override
	public Integer addPerson(Person p) {
		return pdao.addPerson(p);
	}

	@Override
	public Person getPersonById(Integer id) {
		return pdao.getPersonById(id);
	}

	@Override
	public Person getPersonByUserPass(String user, String pass) {
		return pdao.getPersonByUserPass(user, pass);
	}

	@Override
	public void updatePerson(Person p) {
		pdao.updatePerson(p);
	}

	@Override
	public void deletePerson(Person p) {
		pdao.deletePerson(p);
	}

	@Override
	public Role getRoleById(Integer id) {
		return pdao.getRoleById(id);
	}

}
