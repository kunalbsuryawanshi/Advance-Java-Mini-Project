package org.program.repository;

import org.program.entity.FacultyLogin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface FacultyLoginRepository extends JpaRepository<FacultyLogin, Integer>{
	
	public FacultyLogin findByUsernameAndPassword(String username, String password);
	
	public FacultyLogin findByUsername(String username);
	
	@Query("update FacultyLogin f set f.password=?1 where f.username=?2")
	@Modifying
	@Transactional
	public void changePassword(String password, String username);
}
