package com.myweb.www.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@ToString
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class MasterVO {

	private int masterNum;
	private String masterEmail;
	private	String masterPw;
	private String masterName;
	private String masterPhone;
	private String masterRegDate;
	private int  masterAuth;
	private String upCategoryCode;
	private String masterCategoryCode;
	private String masterPurpose;
	private String masterProgress;
	private String masterAgegroup;
	private String masterGender;
	private String masterDay;
	private String masterTime;
	private String masterDesireregion;
	private String masterPrice;
	private String masterIntro;
	private String masterSize;
	public MasterVO(String category, String name, String gender, String email, String pw, String phone, String upCategory) {
		this.masterCategoryCode = category;
		this.masterName = name;
		this.masterGender = gender;
		this.masterEmail = email;
		this.masterPw = pw;
		this.masterPhone = phone;
		this.upCategoryCode = upCategory;		
	}
	
}
