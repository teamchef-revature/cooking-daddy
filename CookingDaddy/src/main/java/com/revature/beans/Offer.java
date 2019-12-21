package com.revature.beans;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Offer {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="stuff")
	@SequenceGenerator(name="stuff", sequenceName="offer_seq", allocationSize=1)
	private Integer id;
	@ManyToOne(cascade = CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="status_id")
	private Status status;
	private String description;
	@Column(name="post_id")
	private Integer postId;
	@OneToMany(fetch = FetchType.EAGER, mappedBy = "offerid")
	private Set<OfferIngredient> ingredients;
	@Column(name="offer_maker")
	private Integer offerMakerId;
	public Integer getOfferMakerId() {
		return offerMakerId;
	}
	public void setOfferMakerId(Integer offerMakerId) {
		this.offerMakerId = offerMakerId;
	}
	@Override
	public String toString() {
		return "Offer [id=" + id + ", status=" + status + ", description=" + description + ", postId=" + postId
				+ ", ingredients=" + ingredients + ", offerMakerId=" + offerMakerId + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((description == null) ? 0 : description.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((ingredients == null) ? 0 : ingredients.hashCode());
		result = prime * result + ((offerMakerId == null) ? 0 : offerMakerId.hashCode());
		result = prime * result + ((postId == null) ? 0 : postId.hashCode());
		result = prime * result + ((status == null) ? 0 : status.hashCode());
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
		Offer other = (Offer) obj;
		if (description == null) {
			if (other.description != null)
				return false;
		} else if (!description.equals(other.description))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (ingredients == null) {
			if (other.ingredients != null)
				return false;
		} else if (!ingredients.equals(other.ingredients))
			return false;
		if (offerMakerId == null) {
			if (other.offerMakerId != null)
				return false;
		} else if (!offerMakerId.equals(other.offerMakerId))
			return false;
		if (postId == null) {
			if (other.postId != null)
				return false;
		} else if (!postId.equals(other.postId))
			return false;
		if (status == null) {
			if (other.status != null)
				return false;
		} else if (!status.equals(other.status))
			return false;
		return true;
	}
	public Offer() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Integer getPostId() {
		return postId;
	}
	public void setPostId(Integer postId) {
		this.postId = postId;
	}
	public Set<OfferIngredient> getIngredients() {
		return ingredients;
	}
	public void setIngredients(Set<OfferIngredient> ingredients) {
		this.ingredients = ingredients;
	}

}
