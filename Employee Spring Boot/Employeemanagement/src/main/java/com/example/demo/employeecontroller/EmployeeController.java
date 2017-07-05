package com.example.demo.employeecontroller;
import java.util.Optional;
import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.employeerecord.EmployeeRecord;
import com.example.demo.employeeservice.EmployeeService;



@RestController
public class EmployeeController {
	@Autowired  
    private EmployeeService empService;   
   @RequestMapping(method = RequestMethod.GET,value= "/name")  
    public List<EmployeeRecord> getAllUser(){  
        return empService.getAllUsers();  
    }     
    
    @RequestMapping(method = RequestMethod.GET,value= "/string_return")
    public String  string_return(){  
        return "hello babe";  
    } 
    
    @RequestMapping(value="/adduser", method=RequestMethod.POST)  
    public void addUser(@RequestBody EmployeeRecord id){  
        empService.addUser(id);  
    }  
    @RequestMapping(value="/user/{id}", method=RequestMethod.GET)  
    public List<EmployeeRecord> getUser(@PathVariable long id){  
        return empService.getUser(id);  
    } 
   
 }
  

