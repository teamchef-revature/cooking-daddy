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
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Cookbook {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="cookbook")
	@SequenceGenerator(name="cookbook", sequenceName="cookbook_seq", allocationSize=1)
	private Integer id;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="person_id")
	private Person person;
	@ManyToMany(fetch=FetchType.EAGER)
	@JoinTable(name="cookbook_recipe",
			joinColumns=@JoinColumn(name="cookbook_id"),
			inverseJoinColumns=@JoinColumn(name="recipe_id"))
	private Set<Recipe> recipes;
	private Integer highscore;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Person getPerson() {
		return person;
	}
	public void setPerson(Person person) {
		this.person = person;
	}
	public Set<Recipe> getRecipes() {
		return recipes;
	}
	public void setRecipes(Set<Recipe> recipes) {
		this.recipes = recipes;
	}
	public Integer getHighscore() {
		return highscore;
	}
	public void setHighscore(Integer highscore) {
		this.highscore = highscore;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((highscore == null) ? 0 : highscore.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((person == null) ? 0 : person.hashCode());
		result = prime * result + ((recipes == null) ? 0 : recipes.hashCode());
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
		Cookbook other = (Cookbook) obj;
		if (highscore == null) {
			if (other.highscore != null)
				return false;
		} else if (!highscore.equals(other.highscore))
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (person == null) {
			if (other.person != null)
				return false;
		} else if (!person.equals(other.person))
			return false;
		if (recipes == null) {
			if (other.recipes != null)
				return false;
		} else if (!recipes.equals(other.recipes))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Cookbook [id=" + id + ", person=" + person + ", recipes=" + recipes + ", highscore=" + highscore + "]";
	}
	
	
}
