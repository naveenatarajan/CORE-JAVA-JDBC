package com.employee.service;
import com.employee.model.employeee;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.ListIterator;
import java.util.List;
import java.util.Scanner;

import database.empdb;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import com.employee.view.employeelist;
import com.employee.view.employeelist;
public class employeedetails {

	int id;
	String name;
	String dept;

	Scanner sc = new Scanner(System.in);
	int choice;
	ArrayList<employeee> employeeList = new ArrayList<employeee>();
	

	public void InsertMethod()throws SQLException {
		try{
			
      Connection con=empdb.createConnection();
      String sql = "INSERT INTO empp (id, name, dept) VALUES (?, ?, ?)";
      PreparedStatement ps = con.prepareStatement(sql);
      
		employeee Emp = new employeee();
		System.out.println("Enter Employee id");
		id = sc.nextInt();
		Emp.setId(id);
		ps.setInt(1, (int) Emp.getId());
		
		System.out.println("Enter Employee name: ");
		name = sc.next();
		Emp.setName(name);
		ps.setString(2,Emp.getName());

		System.out.println("Enter Employee department");
		dept = sc.next();
		Emp.setDept(dept);
		 ps.setString(3,Emp.getDept());
		
        employeeList.add(Emp);
		int i=ps.executeUpdate();	    
		con.close();   
		
	}catch (Exception e){
			e.printStackTrace();
		}
	}

	public void UpdateMethod()throws SQLException{
		try{
		Connection con=empdb.createConnection();
		String sql = "UPDATE empp SET id = ?, dept = ? WHERE name= ?";
		PreparedStatement ps = con.prepareStatement(sql);
		
		System.out.println("Enter the  name:");
		name = sc.next();
		
		String Eid="" + id;
		ListIterator ti = employeeList.listIterator();

		System.out.println("Enter the new id:");
		 int newid = sc.nextInt();
		 
		System.out.println("Enter the new dept:");
		String newDept = sc.next();
		for(int i=0;i<employeeList.size();i++)
		{
		
		employeee ee=(employeee) ti.next();
		if(ee.getName().equals(name))
		{
				ee.setId(newid);
				 ps.setInt(1, (int) ee.getId());
				ee.setDept(newDept);
				ps.setString(2,ee.getDept());
				 ee.setName(name);
				 ps.setString(3,ee.getName());
		}
				ti.remove();
			   ti.add(ee);
		}
		 int i=ps.executeUpdate();  
				
		}catch (Exception e){
			e.printStackTrace();
		} 	
					
}
		
	public void DeleteMethod()throws SQLException {
		try{
		 Connection con=empdb.createConnection();
		 String sql = "DELETE FROM empp where name= ?";
		 PreparedStatement ps = con.prepareStatement(sql);
		 
		employeee Emp = new employeee();
		System.out.println("Enter employee name whose record want to Delete: ");
		name = sc.next();
		Iterator<employeee> iter = employeeList.iterator();
		while (iter.hasNext()) {
			if (iter.next().getName().equals(name)) {
				iter.remove();
				 ps.setString(1,Emp.getName());
				System.out.println("The student " + name + " details is deleted");
			}
		}
		 int i=ps.executeUpdate();
      }catch (Exception e){
			e.printStackTrace();
		}
	}

	public void Displaymethod()throws SQLException {
		try{
			 Connection con=empdb.createConnection();
			 String sql = "SELECT * FROM empp";
			 PreparedStatement ps = con.prepareStatement(sql);
			 
		for (employeee Emp : employeeList)
			System.out.println(Emp);
	}catch (Exception e){
		e.printStackTrace();
		}
	}
}
