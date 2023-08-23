package com.myweb.www.repository;

import java.util.List;

import com.myweb.www.domain.CategoryVO;
import com.myweb.www.domain.EstimateVO;

public interface CategoryDAO {

	List<CategoryVO> selectList(CategoryVO str);

	String selectCategoryName(EstimateVO evo);

}
