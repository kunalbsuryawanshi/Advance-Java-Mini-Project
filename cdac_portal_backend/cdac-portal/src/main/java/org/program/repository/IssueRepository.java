package org.program.repository;

import java.util.List;

import org.program.entity.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface IssueRepository extends JpaRepository<Issue, Integer>{
	public List<Issue> findByStudentEmail(String studentEmail);
	public Issue findById(int id);
	
	@Query("update Issue l set l.describedComplaint=?1 where l.id=?2")
	@Modifying
	@Transactional
	public void updateIssue(String describedComplaint, int id);
}
