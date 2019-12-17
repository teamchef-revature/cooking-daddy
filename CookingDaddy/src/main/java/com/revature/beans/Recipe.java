package com.revature.beans;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Recipe {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="spicyLiquid")
	@SequenceGenerator(name="spicyLiquid", sequenceName="recipe_seq", allocationSize=1)
	private Integer id;
	
	private Set<Component> components;
	private Flavor flavor;
}
