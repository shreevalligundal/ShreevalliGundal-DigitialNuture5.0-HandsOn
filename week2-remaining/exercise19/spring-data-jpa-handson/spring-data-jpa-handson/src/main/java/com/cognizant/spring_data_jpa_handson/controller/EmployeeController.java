package com.cognizant.spring_data_jpa_handson.controller;

import com.cognizant.spring_data_jpa_handson.entity.Employee;
import com.cognizant.spring_data_jpa_handson.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @PostMapping("/add")
    public Employee addEmployee(@RequestBody Employee employee) {
        return repository.save(employee);
    }

    @GetMapping("/{id}")
    public Employee getEmployee(@PathVariable int id) {
        return repository.findById(id).orElse(null);
    }
}