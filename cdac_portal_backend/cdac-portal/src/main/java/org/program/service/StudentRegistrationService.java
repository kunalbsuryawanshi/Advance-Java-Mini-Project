package org.program.service;

import org.program.entity.StudentLogin;
import org.program.entity.StudentRegistration;
import org.program.repository.StudentLoginRepository;
import org.program.repository.StudentRegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentRegistrationService {
	@Autowired
	private StudentRegistrationRepository registrationRepo;
	
	@Autowired
	private StudentLoginRepository loginRepo;
	
	public void saveStudentInfo(StudentRegistration studentRegistration) {
		StudentLogin login = new StudentLogin();
		login.setEmail(studentRegistration.getEmail());
		login.setPassword(studentRegistration.getPassword());
		registrationRepo.save(studentRegistration);
		loginRepo.save(login);
	}
}
