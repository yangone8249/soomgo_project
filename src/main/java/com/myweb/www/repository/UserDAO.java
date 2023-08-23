package com.myweb.www.repository;

import java.util.List;

import com.myweb.www.domain.UserVO;

public interface UserDAO {


	int register(UserVO uvo);

	List<UserVO> getList();

	int emailCheck(String email);

	UserVO login(UserVO loginUvo);

	int edit(UserVO uvo);

	int delete(UserVO uvo);

	int findUserNum(String string);


}
