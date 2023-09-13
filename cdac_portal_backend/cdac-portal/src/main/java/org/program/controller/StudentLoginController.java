package org.program.controller;

import org.program.entity.StudentLogin;
import org.program.repository.StudentLoginRepository;
import org.program.service.StudentLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class StudentLoginController {
	@Autowired
	private StudentLoginService loginService;
	
	@PostMapping("/student-login")
	public int studentLogin(@RequestBody StudentLogin login) {
		return loginService.varifyUser(login);
	}
	@PostMapping("/student-forgot-password")
	public int forgotPassword(@RequestBody StudentLogin student) {
		return loginService.forgotPassword(student);
	}
}
