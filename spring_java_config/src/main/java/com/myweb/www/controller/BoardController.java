package com.myweb.www.controller;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.myweb.www.domain.BoardVO;
import com.myweb.www.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/board/*")
public class BoardController {

	@Inject
	private BoardService bsv;
	
	@GetMapping("/registor")
	public String regisor() {
	
		return "/board/registor";
	}
	
	@PostMapping("/registor")
	public String registor(BoardVO bvo, Model m) {
		int isOk = bsv.registor(bvo);
		
		
		return "/";
	}
	
	@GetMapping
	public String list(Model m) {
		
		List<BoardVO> list = bsv.list();
		
		m.addAttribute(list);
		
		return "/board/list";
	}
	
	@GetMapping("/detail")
	public String detail(Model m, BoardVO bvo, HttpServletRequest request) {
		
		log.info("bno : "+bvo.getBno());
		m.addAttribute(bsv.select(bvo));
		
		return "/board/detail";
	}
}
