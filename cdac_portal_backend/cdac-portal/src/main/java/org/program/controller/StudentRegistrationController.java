package org.program.controller;

import org.program.entity.StudentRegistration;
import org.program.service.StudentRegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class StudentRegistrationController {
	@Autowired
	private StudentRegistrationService registrationService;
	
	@PostMapping("/add-student-registration-info")
	public void addStudentRegistrationInfo(@RequestBody StudentRegistration str) {
		registrationService.saveStudentInfo(str);
	}
	
}
