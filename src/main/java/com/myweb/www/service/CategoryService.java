package com.myweb.www.service;

import java.util.List;

import com.myweb.www.domain.CategoryVO;
import com.myweb.www.domain.EstimateVO;

public interface CategoryService {

	List<CategoryVO> selectList(CategoryVO str);

	String selectCategoryName(EstimateVO evo);

}
