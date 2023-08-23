package com.myweb.www.repository;


import java.util.List;

import com.myweb.www.domain.BoardVO;


public interface BoardDAO {

	int registor(BoardVO bvo);

	BoardVO select(BoardVO bvo);

	List<BoardVO> list();

}
