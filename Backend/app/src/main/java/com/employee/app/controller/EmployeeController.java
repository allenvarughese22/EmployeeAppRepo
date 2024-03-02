package com.employee.app.controller;

import com.employee.app.entity.Employee;
import com.employee.app.exception.ResourceNotFoundException;
import com.employee.app.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployee()
    {
        return employeeRepository.findAll();
    }

    @PostMapping
    public Employee saveEmployee(@RequestBody  Employee employee)
    {
        return  employeeRepository.save(employee);
    }

    @GetMapping("{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id)
    {
        Employee  employee = employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Employee not exist with id: " + id));
        return ResponseEntity.ok(employee);

    }

    @PutMapping("{id}")
    public  ResponseEntity<Employee> updateEmployee(@PathVariable long id,
                                                    @RequestBody Employee employeeDetails)

    {
        Employee updateEmployee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException(("not foundd.....")));

        updateEmployee.setLastName(employeeDetails.getLastName());
        updateEmployee.setFirstName(employeeDetails.getFirstName());
        updateEmployee.setEmailId(employeeDetails.getEmailId());

        employeeRepository.save(updateEmployee);

        return  ResponseEntity.ok(updateEmployee);
    }

}
