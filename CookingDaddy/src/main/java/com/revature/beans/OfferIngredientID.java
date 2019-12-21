package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Embeddable;
@Embeddable
public class OfferIngredientID {
	private static final long serialVersionUID = -7972597880685365227L;
	@Column(name="offer_id")
	private Integer offerId;
	@Column(name="person_ingredient_id")
	private Integer personIngredientId;
	@Override
	public String toString() {
		return "OfferIngredientID [offerId=" + offerId + ", personIngredientId=" + personIngredientId + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((offerId == null) ? 0 : offerId.hashCode());
		result = prime * result + ((personIngredientId == null) ? 0 : personIngredientId.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OfferIngredientID other = (OfferIngredientID) obj;
		if (offerId == null) {
			if (other.offerId != null)
				return false;
		} else if (!offerId.equals(other.offerId))
			return false;
		if (personIngredientId == null) {
			if (other.personIngredientId != null)
				return false;
		} else if (!personIngredientId.equals(other.personIngredientId))
			return false;
		return true;
	}
	public Integer getOfferId() {
		return offerId;
	}
	public void setOfferId(Integer offerId) {
		this.offerId = offerId;
	}
	public Integer getPersonIngredientId() {
		return personIngredientId;
	}
	public void setPersonIngredientId(Integer personIngredientId) {
		this.personIngredientId = personIngredientId;
	}
	public OfferIngredientID() {
		super();
	}

}
