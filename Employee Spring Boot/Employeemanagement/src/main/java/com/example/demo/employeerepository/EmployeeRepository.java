package com.example.demo.employeerepository;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.example.demo.employeerecord.EmployeeRecord;


public interface EmployeeRepository extends CrudRepository<EmployeeRecord, Long> {
	
	void deleteById(long id);

	public  List<EmployeeRecord> findById(long id);
	
}
