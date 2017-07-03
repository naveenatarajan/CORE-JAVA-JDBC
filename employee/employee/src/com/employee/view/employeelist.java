package com.employee.view;
import com.employee.model.employeee;
import com.employee.service.employeedetails;

import java.util.ArrayList;

import java.util.List;
import java.util.Scanner;
import java.util.Collections;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager;

public class employeelist {
	public static void main(String[] args) throws SQLException {
		Scanner sc = new Scanner(System.in);
		int choice;
		List<employeee> EmployeeList = new ArrayList<employeee>();
		employeee Emp =new employeee();
		employeedetails ed=new employeedetails();
		do
		 {
		System.out.println("Employee Management");
		System.out.println("Select a Employee:");	  
		System.out.println("1. Insert");	    
		System.out.println("2. Display");   	  
		System.out.println("3. Update");
		System.out.println("4. Delete");
		System.out.println("5. Exit");
		choice=sc.nextInt();
		
		switch(choice)
		{		
		case 1:
		{
			ed.InsertMethod();
			break;
		}		 
		case 2:	
		{
			ed.Displaymethod();
			break;
		}
		case 3:
		{
			ed.UpdateMethod();
			break;
			
		}
		case 4:
		{
		    ed.DeleteMethod();
		    break;
		    
		}
		case 5:
        {
            System.exit(0);
        }
			 
		 }
		 }while(choice!=5);
	}
	
	}



