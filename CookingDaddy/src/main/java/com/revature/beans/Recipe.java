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
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.JoinColumn;

@Entity
@Table
public class Recipe {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="spicyLiquid")
	@SequenceGenerator(name="spicyLiquid", sequenceName="recipe_seq", allocationSize=1)
	private Integer id;
	@OneToMany(fetch=FetchType.EAGER)
	@JoinColumn(name="recipe_id", insertable=false, updatable=false)
	private Set<RecipeComponent> components;
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name="flavor_id")
	private Flavor flavor;
	private String name;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Set<RecipeComponent> getComponents() {
		return components;
	}
	public void setComponents(Set<RecipeComponent> components) {
		this.components = components;
	}
	public Flavor getFlavor() {
		return flavor;
	}
	public void setFlavor(Flavor flavor) {
		this.flavor = flavor;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((components == null) ? 0 : components.hashCode());
		result = prime * result + ((flavor == null) ? 0 : flavor.hashCode());
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
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
		Recipe other = (Recipe) obj;
		if (components == null) {
			if (other.components != null)
				return false;
		} else if (!components.equals(other.components))
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
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Recipe [id=" + id + ", name=" + name + ", components=" + components + ", flavor=" + flavor + "]";
	}
}
