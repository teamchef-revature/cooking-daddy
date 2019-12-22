package com.revature.service;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.beans.Offer;
import com.revature.beans.OfferIngredient;
import com.revature.beans.Status;
import com.revature.data.OfferDAO;

@Service
public class OfferServiceHibernate implements OfferService {

	@Autowired
	OfferDAO od;
	@Override
	public Integer addOffer(Offer o) {
		Integer oid = od.addOffer(o);
		for(OfferIngredient oi: o.getIngredients()) {
			oi.setOfferId(oid);
			od.addOfferIngredient(oi);
		}
		return oid;
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
		Offer ori = od.getOffer(o.getId());
		Set<OfferIngredient> dels= ori.getIngredients();
		Set<OfferIngredient> adds= o.getIngredients();
		dels.removeAll(adds);
		adds.removeAll(ori.getIngredients());
		for(OfferIngredient oi: dels) {
			od.deleteOfferIngredient(oi);
		}
		for(OfferIngredient oi: adds) {
			oi.setOfferId(o.getId());
			od.addOfferIngredient(oi);
		}
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

	@Override
	public void deleteOfferIngredient(OfferIngredient oi) {
		od.deleteOfferIngredient(oi);
		
	}

}
