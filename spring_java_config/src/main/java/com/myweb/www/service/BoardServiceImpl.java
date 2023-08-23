package com.myweb.www.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.myweb.www.domain.BoardVO;
import com.myweb.www.repository.BoardDAO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BoardServiceImpl implements BoardService {

	@Inject
	private BoardDAO bdao;
	
	@Override
	public int registor(BoardVO bvo) {
		
		return bdao.registor(bvo);
	}

	@Override
	public BoardVO select(BoardVO bvo) {
		
		return bdao.select(bvo);
	}

	@Override
	public List<BoardVO> list() {
		
		return bdao.list();
	}

	
	
}
