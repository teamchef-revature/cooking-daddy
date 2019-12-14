package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Equipment;
import com.revature.beans.Ingredient;
import com.revature.beans.PersonEquipment;
import com.revature.utils.HibernateUtil;

@Component
public class EquipmentHibernate implements EquipmentDAO {

	@Autowired
	private HibernateUtil hu;
	
	@Override
	public Integer addEquipment(Equipment eq) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(eq);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return r;
	}

	@Override
	public Set<Equipment> getEquipments() {
		Session s = hu.getSession();
		String query = "from Equipment";
		Query<Equipment> q = s.createQuery(query, Equipment.class);
		List<Equipment> equipments = q.list();
		s.close();
		return new HashSet<Equipment>(equipments);
	}

	@Override
	public Equipment getEquipment(Integer eid) {
		Session s = hu.getSession();
		Equipment equ = s.get(Equipment.class, eid);
		s.close();
		return equ;
	}

	@Override
	public Equipment updateEquipment(Equipment eq) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(eq);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return eq;		
	}

	@Override
	public Integer addPersonEquipment(PersonEquipment pe) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(pe);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return r;
	}

	@Override
	public PersonEquipment updatePersonEquipment(PersonEquipment pe) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			s.update(pe);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return pe;		
	}

}
