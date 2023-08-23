package com.myweb.www.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.myweb.www.domain.EstimateVO;
import com.myweb.www.domain.MasterVO;
import com.myweb.www.repository.MasterUserDAO;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class MasterUserServiceImpl implements MasterUserService {

	@Inject
	private MasterUserDAO mdao;

	@Override
	public int register(MasterVO mvo) {
		
		return mdao.register(mvo);
	}

	@Override
	public int emailCheck(String email) {
		
		return mdao.emailCheck(email);
	}
	
	@Override
	public List<MasterVO> selectList(EstimateVO evo) {
		log.info("@@@ : " + mdao.selectList(evo));
		return mdao.selectList(evo);
	}

	@Override
	public MasterVO selectOne(EstimateVO evo) {

		return mdao.selectOne(evo);
	}

	@Override
	public String selectCategoryName(EstimateVO evo) {
		
		return mdao.selectCategoryName(evo);
	}


}
