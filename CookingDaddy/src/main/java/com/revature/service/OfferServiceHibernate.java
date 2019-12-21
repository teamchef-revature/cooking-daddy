package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Offer;
import com.revature.beans.OfferIngredient;
import com.revature.beans.Status;
import com.revature.data.OfferDAO;
import com.revature.data.PostDAO;

@Service
public class OfferServiceHibernate implements OfferService {

	@Autowired
	OfferDAO od;
	@Override
	public Integer addOffer(Offer o) {
		return od.addOffer(o);
	}

	@Override
	public Set<Offer> getOffers() {
		return od.getOffers();
	}

	@Override
	public Offer getOffer(Integer oid) {
		return od.getOffer(oid);
	}

	@Override
	public Offer updateOffer(Offer o) {
		return od.updateOffer(o);
	}

	@Override
	public Set<Offer> getOffersByStatus(Status s) {
		return od.getOffersByStatus(s);
	}

	@Override
	public Integer addOfferIngredient(OfferIngredient oi) {
		return od.addOfferIngredient(oi);
	}

	@Override
	public Set<OfferIngredient> getOfferIngredients() {
		return od.getOfferIngredients();
	}

	@Override
	public OfferIngredient getOfferIngredient(Integer oiid) {
		return od.getOfferIngredient(oiid);
	}

	@Override
	public OfferIngredient updateOfferIngredient(OfferIngredient oi) {
		return od.updateOfferIngredient(oi);
	}

}
