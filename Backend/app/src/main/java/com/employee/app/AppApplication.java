package com.employee.app;

import com.employee.app.entity.Employee;
import com.employee.app.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(AppApplication.class, args);
	}


	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
//		Employee empl = new Employee();
//		empl.setFirstName("Allen");
//		empl.setLastName("Varughese");
//		empl.setEmaiId("allenv2");
//		employeeRepository.save(empl);

	}
}
