package org.program.service;

import java.util.List;

import org.program.entity.Issue;
import org.program.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IssueService {
	@Autowired
	private IssueRepository issueRepo;
	
	public void saveComplaint(Issue issue) {
		issueRepo.save(issue);
	}
	public List<Issue> getComplaintRecords(String email) {
		List<Issue> list = issueRepo.findByStudentEmail(email);
		if(list == null) {
			return null;
		}
		return list;
	}
	public void deleteComplaintRecord(int id) {
		Issue issue = new Issue();
		issue = issueRepo.findById(id);
		issueRepo.delete(issue);
	}
	public void updateIssue(String describedComplaint, int id) {
		issueRepo.updateIssue(describedComplaint, id);
	}
}
