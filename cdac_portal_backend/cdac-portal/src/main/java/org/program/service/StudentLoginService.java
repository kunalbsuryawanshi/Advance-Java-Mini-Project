package org.program.service;

import org.program.entity.StudentLogin;
import org.program.repository.StudentLoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentLoginService {
	@Autowired
	private StudentLoginRepository loginRepo;
	
	public int varifyUser(StudentLogin login) {
		StudentLogin student = loginRepo.findByEmailAndPassword(login.getEmail(), login.getPassword());
		if(student == null) {
			return 500;
		}
		else
			return 200;
		
	}
	
	public int forgotPassword(StudentLogin student) {
		StudentLogin newStudent = new StudentLogin();
		newStudent = loginRepo.findByEmail(student.getEmail());
		if(newStudent == null) {
			return 500;
		}else {
			loginRepo.changePassword(student.getPassword(), student.getEmail());
			return 200;
		}
	}
	
}
