package com.myweb.www.service;

import java.util.ArrayList;
import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.myweb.www.domain.EstimateVO;
import com.myweb.www.domain.MasterVO;
import com.myweb.www.domain.UserVO;
import com.myweb.www.repository.ServiceDAO;
import com.myweb.www.repository.UserDAO;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ServiceServiceImpl implements ServiceService {

	@Inject
	private UserDAO udao;

	@Inject
	private ServiceDAO sdao;
	
	@Override
	public void insertEvo(EstimateVO evo) {
		
		sdao.insertEvo(evo);
	}


	@Override
	public List<EstimateVO> selectList(String string) {
		
		return sdao.selectList(string);
	}


	@Override
	public void deleteEvo(Object attribute) {
		
		sdao.deleteEvo(attribute);
	}


	@Override
	public String selectCategoryName(EstimateVO evo) {

		return sdao.selectCategoryName(evo);
	}

}
