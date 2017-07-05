package com.example.demo.employeeservice;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.demo.employeerecord.EmployeeRecord;
import com.example.demo.employeerepository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class EmployeeService {
@Autowired
private EmployeeRepository employeeRepository;
public List<EmployeeRecord> getAllUsers(){  
    List<EmployeeRecord>empRecords = new ArrayList<>();  
    employeeRepository.findAll().forEach(empRecords::add);  
    return empRecords;  
} 
public List<EmployeeRecord> getUser(long id){  
    return employeeRepository.findById(id); 
}  
public void addUser(EmployeeRecord userRecord){  
	employeeRepository.save(userRecord);  
}  
public void delete(long id){  
	employeeRepository.deleteById(id); 
	}

}  

