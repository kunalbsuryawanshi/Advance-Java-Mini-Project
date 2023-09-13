package org.program.service;

import java.util.List;

import org.program.entity.FacultyLogin;
import org.program.entity.Issue;
import org.program.entity.LeaveApplication;
import org.program.entity.StudentLogin;
import org.program.repository.FacultyLoginRepository;
import org.program.repository.IssueRepository;
import org.program.repository.LeaveApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FacultyLoginService {

	@Autowired
	private FacultyLoginRepository facultyRepo;
	
	@Autowired
	private LeaveApplicationRepository leaveRepo;
	
	@Autowired
	private IssueRepository issueRepo;
	
	public int varifyUser(FacultyLogin login) {
		FacultyLogin faculty = facultyRepo.findByUsernameAndPassword(login.getUsername(), login.getPassword());
		if(faculty == null) {
			return 500;
		}
		else
			return 200;
		
	}
	public List<LeaveApplication> getLeaveApplications(){
		return leaveRepo.findAll();
	}
	public List<Issue> getComplaints(){
		return issueRepo.findAll();
	}
	
	public int forgotPassword(FacultyLogin login) {
		FacultyLogin newFaculty = new FacultyLogin();
		newFaculty = facultyRepo.findByUsername(login.getUsername());
		if(newFaculty == null) {
			return 500;
		}else {
			facultyRepo.changePassword(login.getPassword(), login.getUsername());
			return 200;
		}
	}
}
