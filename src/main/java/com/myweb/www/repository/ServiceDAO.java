package com.myweb.www.repository;

import java.util.ArrayList;
import java.util.List;

import com.myweb.www.domain.EstimateVO;
import com.myweb.www.domain.MasterVO;
import com.myweb.www.domain.UserVO;

public interface ServiceDAO {

	void insertEvo(EstimateVO evo);

	List<EstimateVO> selectList(String string);

	void deleteEvo(Object attribute);

	String selectCategoryName(EstimateVO evo);

}
