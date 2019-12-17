package com.revature.beans;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
// import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Ingredient {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="ingredient")
	@SequenceGenerator(name="ingredient", sequenceName="ingredient_seq", allocationSize=1)
	private Integer id;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="category_id")
	private Category category;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="quality_id")
	private Quality quality;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="flavor_id")
	private Flavor flavor;
	private String name;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinTable(name="ingredient_season", 
		joinColumns=@JoinColumn(name="ingredient_id"),
		inverseJoinColumns=@JoinColumn(name="season_id"))
	private Set<Season> seasons;
	// commented this out because i'm not sure why it's here,
	// left it in case we do need it again. looks like it was probably
	// leftover from when we included inventory in the ingredient bean.
	// (before separating personingredient to its own bean)
	/*@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinTable(name="person_ingredient", 
		joinColumns=@JoinColumn(name="id"),
		inverseJoinColumns=@JoinColumn(name="ingredient_id"))
	*/
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
//	public Integer getInventory() {
//		return inventory;
//	}
//	public void setInventory(Integer inventory) {
//		this.inventory = inventory;
//	}
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Quality getQuality() {
		return quality;
	}
	public void setQuality(Quality quality) {
		this.quality = quality;
	}
	public Flavor getFlavor() {
		return flavor;
	}
	public void setFlavor(Flavor flavor) {
		this.flavor = flavor;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + ((category == null) ? 0 : category.hashCode());
	result = prime * result + ((flavor == null) ? 0 : flavor.hashCode());
	result = prime * result + ((id == null) ? 0 : id.hashCode());
//	result = prime * result + ((inventory == null) ? 0 : inventory.hashCode());
	result = prime * result + ((name == null) ? 0 : name.hashCode());
	result = prime * result + ((quality == null) ? 0 : quality.hashCode());
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
		Ingredient other = (Ingredient) obj;
		if (category == null) {
			if (other.category != null)
				return false;
		} else if (!category.equals(other.category))
			return false;
		if (flavor == null) {
			if (other.flavor != null)
				return false;
		} else if (!flavor.equals(other.flavor))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
//		if (inventory == null) {
//			if (other.inventory != null)
//				return false;
//		} else if (!inventory.equals(other.inventory))
//			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		if (quality == null) {
			if (other.quality != null)
				return false;
		} else if (!quality.equals(other.quality))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Ingredient [id=" + id + ", category=" + category + ", quality=" + quality + ", flavor=" + flavor
				+ ", name=" + name + "]";
	}
}
