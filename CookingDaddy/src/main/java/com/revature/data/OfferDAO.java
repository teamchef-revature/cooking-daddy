package com.revature.data;

import java.util.Set;

import com.revature.beans.Offer;
import com.revature.beans.OfferIngredient;
import com.revature.beans.Status;

public interface OfferDAO {
	public Integer addOffer(Offer o);
	public Set<Offer> getOffers();
	public Offer getOffer(Integer oid);
	public Offer updateOffer(Offer o);
	public Set<Offer> getOffersByStatus(Status s);
	
	public Integer addOfferIngredient(OfferIngredient oi);
	public Set<OfferIngredient> getOfferIngredients();
	public OfferIngredient getOfferIngredient(Integer oiid);
	public OfferIngredient updateOfferIngredient(OfferIngredient oi);

}
