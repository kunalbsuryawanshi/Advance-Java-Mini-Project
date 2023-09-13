package org.program.service;

import java.util.List;

import org.program.entity.LeaveApplication;
import org.program.repository.LeaveApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LeaveApplicationService {
	@Autowired
	private LeaveApplicationRepository leaveRepo;
	
	public void saveLeaveApplication(LeaveApplication leaveApplication) {
		leaveRepo.save(leaveApplication);
	}

	public List<LeaveApplication> getApplicationRecords(String email) {
		List<LeaveApplication> list = leaveRepo.findByStudentEmail(email);
		if(list == null) {
			return null;
		}
		return list;
	}

	public void deleteComplaintRecord(int id) {
		LeaveApplication leaveApp = new LeaveApplication();
		leaveApp = leaveRepo.findById(id);
		leaveRepo.delete(leaveApp);
	}
	public void updateLeaveApplication(String describedIssue, int id) {
		leaveRepo.updateLeaveApplication(describedIssue, id);
	}
}
