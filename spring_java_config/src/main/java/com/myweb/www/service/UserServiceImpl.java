package com.myweb.www.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.myweb.www.domain.UserVO;
import com.myweb.www.repository.UserDAO;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class UserServiceImpl implements UserService {

	@Inject
	private UserDAO udao;

	@Override
	public int register(UserVO uvo) {
		// 서비스 레지스터 진입
		return udao.register(uvo);
	}

	@Override
	public List<UserVO> getList() {
		// 서비스 리스트 진입
		return udao.getList();
	}

	@Override
	public int emailCheck(String email) {
		// TODO Auto-generated method stub
		return udao.emailCheck(email);
	}

	@Override
	public UserVO loginAuth(UserVO loginUvo) {
		// TODO Auto-generated method stub
		return udao.login(loginUvo);
	}

	@Override
	public int edit(UserVO uvo) {
		// TODO Auto-generated method stub
		return udao.edit(uvo);
	}

	@Override
	public int delete(UserVO uvo) {
		// TODO Auto-generated method stub
		return udao.delete(uvo);
	}





	
	
}

