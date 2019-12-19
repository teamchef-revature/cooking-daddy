package com.revature.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Season {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="hallogivingmasyears")
	@SequenceGenerator(name="hallogivingmasyears", sequenceName="season_seq", allocationSize=1)
	private Integer id;
	private String name;
	@Column( name = "start_time")
	private Long timeStart;
	@Column( name = "end_time" )
	private Long timeEnd;
	private Integer recurring;
	
	public Season() {
		super();
	}

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

	public Long getTimeStart() {
		return timeStart;
	}

	public void setTimeStart(Long timeStart) {
		this.timeStart = timeStart;
	}

	public Long getTimeEnd() {
		return timeEnd;
	}

	public void setTimeEnd(Long timeEnd) {
		this.timeEnd = timeEnd;
	}

	public Integer getRecurring() {
		return recurring;
	}

	public void setRecurring(Integer recurring) {
		this.recurring = recurring;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((recurring == null) ? 0 : recurring.hashCode());
		result = prime * result + ((timeEnd == null) ? 0 : timeEnd.hashCode());
		result = prime * result + ((timeStart == null) ? 0 : timeStart.hashCode());
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
		Season other = (Season) obj;
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
		if (recurring == null) {
			if (other.recurring != null)
				return false;
		} else if (!recurring.equals(other.recurring))
			return false;
		if (timeEnd == null) {
			if (other.timeEnd != null)
				return false;
		} else if (!timeEnd.equals(other.timeEnd))
			return false;
		if (timeStart == null) {
			if (other.timeStart != null)
				return false;
		} else if (!timeStart.equals(other.timeStart))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Season [id=" + id + ", name=" + name + ", timeStart=" + timeStart + ", timeEnd=" + timeEnd
				+ ", recurring=" + recurring + "]";
	}
	
}
