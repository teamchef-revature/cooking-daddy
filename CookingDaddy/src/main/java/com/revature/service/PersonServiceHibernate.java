package com.revature.service;

import com.revature.beans.Person;
import com.revature.data.PersonDAO;
import com.revature.data.PersonHibernate;

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

}
