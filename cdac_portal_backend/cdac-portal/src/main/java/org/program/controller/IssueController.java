package org.program.controller;

import java.util.List;

import org.program.entity.Issue;
import org.program.entity.LeaveApplication;
import org.program.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class IssueController {

	@Autowired
	private IssueService issueService;
	
	@PostMapping("/complaint-registration")
	public void addComplaint(@RequestBody Issue issue) {
		issueService.saveComplaint(issue);
	}
	@GetMapping("/get-complaint-record")
	public List<Issue> getComplaint(@RequestParam String email) {
		return issueService.getComplaintRecords(email);
	}
	@GetMapping("/delete-complaint-record")
	public void deleteComplaint(@RequestParam String id) {
		issueService.deleteComplaintRecord(Integer.parseInt(id));
	}
	@GetMapping("/update-complaint")
	public void updateLeaveApplication(@RequestParam String describedComplaint, @RequestParam String id) {
		issueService.updateIssue(describedComplaint, Integer.parseInt(id));
	}
}
