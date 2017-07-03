package com.employee.model;

public class employeee {

	long id;
	String name;
	String dept;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name=name;
	}
	
	public String getDept() {
		return dept;
	}
	public void setDept(String dept) {
		this.dept = dept;
	}
	@Override
	public String toString() {
		return " employeee  [id=" + id + ", name=" + name + ",  dept=" + dept + "]";
	}
	public  employeee(){}
	
}
