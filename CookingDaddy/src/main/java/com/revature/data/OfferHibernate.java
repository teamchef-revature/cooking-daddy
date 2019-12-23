package com.revature.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Offer;
import com.revature.beans.OfferIngredient;
import com.revature.beans.Status;
import com.revature.utils.HibernateUtil;
@Component
public class OfferHibernate implements OfferDAO{
	
	@Autowired
	private HibernateUtil hu;

	@Override
	public Integer addOffer(Offer o) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(o);
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
	public Set<Offer> getOffers() {
		Session s = hu.getSession();
		String query = "from Offer";
		Query<Offer> q = s.createQuery(query, Offer.class);
		List<Offer> offers = q.list();
		s.close();
		return new HashSet<Offer>(offers);
	}

	@Override
	public Offer getOffer(Integer oid) {
		Session s = hu.getSession();
		Offer o = s.get(Offer.class, oid);
		s.close();
		return o;
	}

	@Override
	public Offer updateOffer(Offer o) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			o= (Offer) s.merge(o);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return o;	
	}

	@Override
	public Set<Offer> getOffersByStatus(Status s) {
		Session se = hu.getSession();
		String query = "from Offer where status_id = :status";
		Query<Offer> q = se.createQuery(query, Offer.class);
		q.setParameter("status", s.getId());
		List<Offer> offers = q.list();
		se.close();
		return new HashSet<Offer>(offers);
	}

	@Override
	public Integer addOfferIngredient(OfferIngredient oi) {
		Integer r = null;
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			r = (Integer) s.save(oi);
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
	public Set<OfferIngredient> getOfferIngredients() {
		Session s = hu.getSession();
		String query = "from Offer_Ingredient";
		Query<OfferIngredient> q = s.createQuery(query, OfferIngredient.class);
		List<OfferIngredient> offerIngredients = q.list();
		s.close();
		return new HashSet<OfferIngredient>(offerIngredients);
	}

	@Override
	public OfferIngredient getOfferIngredient(Integer oiid) {
		Session s = hu.getSession();
		OfferIngredient oi = s.get(OfferIngredient.class, oiid);
		s.close();
		return oi;
	}

	@Override
	public OfferIngredient updateOfferIngredient(OfferIngredient oi) {
		Session s = hu.getSession();
		Transaction tx = null;
		try {
			tx = s.beginTransaction();
			oi= (OfferIngredient) s.merge(oi);
			tx.commit();
		} catch(Exception e) {
			if(tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			s.close();
		}
		return oi;
	}

	@Override
	public void deleteOfferIngredient(OfferIngredient oi) {
			Session s = hu.getSession();
			Transaction tx = null;
			try {
				tx = s.beginTransaction();
				s.delete(oi);
				tx.commit();
			} catch(Exception e) {
				if(tx != null)
					tx.rollback();
				e.printStackTrace();
			} finally {
				s.close();
	    }
	}

}
