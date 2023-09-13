package org.program.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class LeaveApplication {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String toEmail;
	private String studentEmail;
	private String describedIssue;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getToEmail() {
		return toEmail;
	}
	public void setToEmail(String toEmail) {
		this.toEmail = toEmail;
	}
	public String getStudentEmail() {
		return studentEmail;
	}
	public void setStudentEmail(String studentEmail) {
		this.studentEmail = studentEmail;
	}
	public String getDescribedIssue() {
		return describedIssue;
	}
	public void setDescribedIssue(String describedIssue) {
		this.describedIssue = describedIssue;
	}
	@Override
	public String toString() {
		return "LeaveApplication [id=" + id + ", toEmail=" + toEmail + ", studentEmail=" + studentEmail
				+ ", describedIssue=" + describedIssue + "]";
	}
}
