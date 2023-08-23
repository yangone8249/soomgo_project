package com.myweb.www.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.myweb.www.domain.CategoryVO;
import com.myweb.www.domain.EstimateVO;
import com.myweb.www.repository.CategoryDAO;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class CategoryServiceImpl implements CategoryService {

	@Inject
	private CategoryDAO cdao;

	@Override
	public List<CategoryVO> selectList(CategoryVO str) {
		log.info("impl : "+str);
		return cdao.selectList(str);
	}

	@Override
	public String selectCategoryName(EstimateVO evo) {
		
		return cdao.selectCategoryName(evo);
	}

	
	
}
