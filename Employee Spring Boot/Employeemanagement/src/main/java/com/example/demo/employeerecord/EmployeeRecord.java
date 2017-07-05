package com.example.demo.employeerecord;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;  

@Entity
@Table(name="emp")
public class EmployeeRecord {
	@Id
	  @GeneratedValue(strategy = GenerationType.AUTO)
	  private long id;
	  
	  @NotNull
	  private String name;
	  @NotNull
	  private String dept;
	  public EmployeeRecord() { }

	  public EmployeeRecord(long id) { 
	    this.id = id;
	  }
	  
	  public EmployeeRecord(String name, String dept) {
	    this.name = name;
	    this.dept = dept;
	  }


	  public long getId() {
	    return id;
	  }

	  public void setId(long value) {
	    this.id = value;
	  }

	  public String getName() {
	    return name;
	  }
	  
	  public void setName(String value) {
	    this.name = value;
	  }
	  
	  public String getDept() {
	    return dept;
	  }

	  public void setDept(String value) {
	    this.dept = value;
	  }
	  
	}


