package org.program.controller;

import java.util.List;

import org.program.entity.FacultyLogin;
import org.program.entity.Issue;
import org.program.entity.LeaveApplication;
import org.program.service.FacultyLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class FacultyLoginController {

	@Autowired
	private FacultyLoginService facultyService;
	
	@PostMapping("/faculty-login")
	public int facultyLogin(@RequestBody FacultyLogin login) {
		return facultyService.varifyUser(login);
	}
	
	@GetMapping("/get-all-leave-applications")
	public List<LeaveApplication> getLeaveApplications(){
		return facultyService.getLeaveApplications();
	}
	@GetMapping("/get-all-complaints")
	public List<Issue> getComplaints(){
		return facultyService.getComplaints();
	}
	@PostMapping("/faculty-forgot-password")
	public int forgotPassword(@RequestBody FacultyLogin login) {
		return facultyService.forgotPassword(login);
	}
	
}
