package com.revature.beans;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="offer_ingredient")
public class OfferIngredient {
	@EmbeddedId
	private OfferIngredientID id;
	@ManyToOne(fetch=FetchType.EAGER)
	@JoinColumn(name="person_ingredient_id", insertable=false, updatable=false)
	private PersonIngredient personIngredient;
	@JoinColumn(name="offer_id")
	private Integer Offerid;
	private Integer quantity;
	@Override
	public String toString() {
		return "OfferIngredient [id=" + id + ", personIngredient=" + personIngredient + ", Offerid=" + Offerid
				+ ", quantity=" + quantity + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((Offerid == null) ? 0 : Offerid.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((personIngredient == null) ? 0 : personIngredient.hashCode());
		result = prime * result + ((quantity == null) ? 0 : quantity.hashCode());
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
		OfferIngredient other = (OfferIngredient) obj;
		if (Offerid == null) {
			if (other.Offerid != null)
				return false;
		} else if (!Offerid.equals(other.Offerid))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (personIngredient == null) {
			if (other.personIngredient != null)
				return false;
		} else if (!personIngredient.equals(other.personIngredient))
			return false;
		if (quantity == null) {
			if (other.quantity != null)
				return false;
		} else if (!quantity.equals(other.quantity))
			return false;
		return true;
	}
	public OfferIngredient() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OfferIngredientID getId() {
		return id;
	}
	public void setId(OfferIngredientID id) {
		this.id = id;
	}
	public PersonIngredient getPersonIngredient() {
		return personIngredient;
	}
	public void setPersonIngredient(PersonIngredient personIngredient) {
		this.personIngredient = personIngredient;
	}
	public Integer getOfferid() {
		return Offerid;
	}
	public void setOfferid(Integer offerid) {
		Offerid = offerid;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
}
