package com.myweb.www.service;

import java.util.List;

import com.myweb.www.domain.EstimateVO;
import com.myweb.www.domain.MasterVO;

public interface MasterUserService {

	int register(MasterVO mvo);

	int emailCheck(String email);

	List<MasterVO> selectList(EstimateVO evo);

	MasterVO selectOne(EstimateVO evo);

	String selectCategoryName(EstimateVO evo);

}

