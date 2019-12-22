package com.revature.beans;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table
public class Status {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="quo")
	@SequenceGenerator(name="quo", sequenceName="status_seq", allocationSize=1)
	private Integer id;
	private String name;
	@OneToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="next_status_id")
	private Status nextStatus;
	public Status() {
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
	public Status getNextStatus() {
		return nextStatus;
	}
	public void setNextStatus(Status nextStatus) {
		this.nextStatus = nextStatus;
	}
	@Override
	public String toString() {
		return "Status [id=" + id + ", name=" + name + ", nextStatus=" + nextStatus + "]";
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		result = prime * result + ((nextStatus == null) ? 0 : nextStatus.hashCode());
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
		Status other = (Status) obj;
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
		if (nextStatus == null) {
			if (other.nextStatus != null)
				return false;
		} else if (!nextStatus.equals(other.nextStatus))
			return false;
		return true;
	}

}
