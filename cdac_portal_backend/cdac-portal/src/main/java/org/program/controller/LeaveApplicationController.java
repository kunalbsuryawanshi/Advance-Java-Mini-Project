package org.program.controller;

import java.util.List;

import org.program.entity.LeaveApplication;
import org.program.service.LeaveApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class LeaveApplicationController {
	@Autowired
	private LeaveApplicationService leaveService;
	
	@PostMapping("/leave-application")
	public void addLeaveApplication(@RequestBody LeaveApplication application) {
		leaveService.saveLeaveApplication(application);
	}
	@GetMapping("/get-leave-application-record")
	public List<LeaveApplication> getLeaveApplication(@RequestParam String email) {
		return leaveService.getApplicationRecords(email);
	}
	@GetMapping("/delete-Leave-record")
	public void deleteComplaint(@RequestParam String id) {
		leaveService.deleteComplaintRecord(Integer.parseInt(id));
	}
	@GetMapping("/update-leave-application")
	public void updateLeaveApplication(@RequestParam String describedIssue, @RequestParam String id) {
		leaveService.updateLeaveApplication(describedIssue, Integer.parseInt(id));
	}
}
