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
public class UserVO {

	public UserVO(String userEmail, String userPw) {
		this.userEmail  = userEmail;
		this.userPw = userPw;
	}
	private int userNum;
	private String userEmail;
	private String userPw;
	private String userName;
	private String userPhone;
	private String userRegdate;
	private int userAuth;
	
}
