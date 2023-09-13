package org.program.repository;

import org.program.entity.StudentLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface StudentLoginRepository extends JpaRepository<StudentLogin, Integer> {
	
	public StudentLogin findByEmailAndPassword(String email, String password);
	public StudentLogin findByEmail(String email);
	
	@Query("update StudentLogin s set s.password=?1 where s.email=?2")
	@Modifying
	@Transactional
	public void changePassword(String password, String email);
}
