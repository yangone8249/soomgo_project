package com.myweb.www.service;

import java.util.ArrayList;
import java.util.List;

import com.myweb.www.domain.EstimateVO;
import com.myweb.www.domain.MasterVO;
import com.myweb.www.domain.UserVO;

public interface ServiceService {

	void insertEvo(EstimateVO evo);

	List<EstimateVO> selectList(String string);

	void deleteEvo(Object attribute);

	String selectCategoryName(EstimateVO evo);

}
