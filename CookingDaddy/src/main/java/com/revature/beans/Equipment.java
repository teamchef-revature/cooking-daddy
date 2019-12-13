package com.revature.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Equipment {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "implements of destruction")
	@SequenceGenerator(name = "implements of destruction", sequenceName = "equipment_seq", allocationSize = 1)
	private Integer id;
	private String name;
	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "quality_id")
	private Quality quality;
	@Column(name = "min_temp")
	private Integer minTemp;
	@Column(name = "max_temp")
	private Integer maxTemp;
	@Column(name = "min_time")
	private Integer minTime;
	@Column(name = "max_time")
	private Integer maxTime;
	
	public Equipment() {
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

	public Quality getQuality() {
		return quality;
	}

	public void setQuality(Quality quality) {
		this.quality = quality;
	}

	public Integer getMinTemp() {
		return minTemp;
	}

	public void setMinTemp(Integer minTemp) {
		this.minTemp = minTemp;
	}

	public Integer getMaxTemp() {
		return maxTemp;
	}

	public void setMaxTemp(Integer maxTemp) {
		this.maxTemp = maxTemp;
	}

	public Integer getMinTime() {
		return minTime;
	}

	public void setMinTime(Integer minTime) {
		this.minTime = minTime;
	}

	public Integer getMaxTime() {
		return maxTime;
	}

	public void setMaxTime(Integer maxTime) {
		this.maxTime = maxTime;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((maxTemp == null) ? 0 : maxTemp.hashCode());
		result = prime * result + ((maxTime == null) ? 0 : maxTime.hashCode());
		result = prime * result + ((minTemp == null) ? 0 : minTemp.hashCode());
		result = prime * result + ((minTime == null) ? 0 : minTime.hashCode());
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
		Equipment other = (Equipment) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (maxTemp == null) {
			if (other.maxTemp != null)
				return false;
		} else if (!maxTemp.equals(other.maxTemp))
			return false;
		if (maxTime == null) {
			if (other.maxTime != null)
				return false;
		} else if (!maxTime.equals(other.maxTime))
			return false;
		if (minTemp == null) {
			if (other.minTemp != null)
				return false;
		} else if (!minTemp.equals(other.minTemp))
			return false;
		if (minTime == null) {
			if (other.minTime != null)
				return false;
		} else if (!minTime.equals(other.minTime))
			return false;
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
		return "Equipment [id=" + id + ", name=" + name + ", quality=" + quality + ", minTemp=" + minTemp + ", maxTemp="
				+ maxTemp + ", minTime=" + minTime + ", maxTime=" + maxTime + "]";
	}
	
}
