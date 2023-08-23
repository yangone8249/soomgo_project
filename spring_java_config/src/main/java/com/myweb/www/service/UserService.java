package com.myweb.www.service;

import java.util.List;

import com.myweb.www.domain.UserVO;

public interface UserService {

	int register(UserVO uvo);

	List<UserVO> getList();

	int emailCheck(String email);

	UserVO loginAuth(UserVO loginUvo);

	int edit(UserVO uvo);

	int delete(UserVO uvo);



}
