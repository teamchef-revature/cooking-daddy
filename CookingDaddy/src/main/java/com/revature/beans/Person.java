package com.revature.beans;

import java.util.Set;

import javax.persistence.CascadeType;
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
public class Person {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="person")
	@SequenceGenerator(name="person", sequenceName="person_seq", allocationSize=1)
	private Integer id;
	private String username;
	private String password;
	private String first;
	private String last;
	@ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="role_id")
	private Role role;
	@OneToMany(fetch=FetchType.EAGER)
	@JoinColumn(name="person_id", insertable = false, updatable = false)
	private Set<PersonIngredient> ingredients;
	@OneToMany(fetch=FetchType.EAGER)
	@JoinColumn(name="person_id", insertable = false, updatable = false)
	private Set<PersonEquipment> equipments;
	@OneToMany(fetch=FetchType.EAGER)
	@JoinColumn(name="person_id")
	private Set<Meal> meals;
	
	public Integer getId() {
		return id;
	}
	public Set<Meal> getMeals() {
		return meals;
	}
	public void setMeals(Set<Meal> meals) {
		this.meals = meals;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirst() {
		return first;
	}
	public void setFirst(String first) {
		this.first = first;
	}
	public String getLast() {
		return last;
	}
	public void setLast(String last) {
		this.last = last;
	}
	public Role getRole() {
		return role;
	}
	public void setRole(Role role) {
		this.role = role;
	}
	public Set<PersonIngredient> getIngredients() {
		return ingredients;
	}
	public void setIngredients(Set<PersonIngredient> ingredients) {
		this.ingredients = ingredients;
	}
	public Set<PersonEquipment> getEquipments() {
		return equipments;
	}
	public void setEquipments(Set<PersonEquipment> equipments) {
		this.equipments = equipments;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((equipments == null) ? 0 : equipments.hashCode());
		result = prime * result + ((first == null) ? 0 : first.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((ingredients == null) ? 0 : ingredients.hashCode());
		result = prime * result + ((last == null) ? 0 : last.hashCode());
		result = prime * result + ((meals == null) ? 0 : meals.hashCode());
		result = prime * result + ((password == null) ? 0 : password.hashCode());
		result = prime * result + ((role == null) ? 0 : role.hashCode());
		result = prime * result + ((username == null) ? 0 : username.hashCode());
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
		Person other = (Person) obj;
		if (equipments == null) {
			if (other.equipments != null)
				return false;
		} else if (!equipments.equals(other.equipments))
			return false;
		if (first == null) {
			if (other.first != null)
				return false;
		} else if (!first.equals(other.first))
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
		if (last == null) {
			if (other.last != null)
				return false;
		} else if (!last.equals(other.last))
			return false;
		if (meals == null) {
			if (other.meals != null)
				return false;
		} else if (!meals.equals(other.meals))
			return false;
		if (password == null) {
			if (other.password != null)
				return false;
		} else if (!password.equals(other.password))
			return false;
		if (role == null) {
			if (other.role != null)
				return false;
		} else if (!role.equals(other.role))
			return false;
		if (username == null) {
			if (other.username != null)
				return false;
		} else if (!username.equals(other.username))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Person [id=" + id + ", username=" + username + ", password=" + password + ", first=" + first + ", last="
				+ last + ", role=" + role + ", ingredients=" + ingredients + ", equipments=" + equipments + ", meals="
				+ meals + "]";
	}
	
}
