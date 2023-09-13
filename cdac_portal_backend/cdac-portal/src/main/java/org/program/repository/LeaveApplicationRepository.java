package org.program.repository;

import java.util.List;

import org.program.entity.LeaveApplication;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface LeaveApplicationRepository extends JpaRepository<LeaveApplication, Integer> {
	public List<LeaveApplication> findByStudentEmail(String studentEmail);
	public LeaveApplication findById(int id);
	
	@Query("update LeaveApplication l set l.describedIssue=?1 where l.id=?2")
	@Modifying
	@Transactional
	public void updateLeaveApplication(String describedIssue, int id);
}
