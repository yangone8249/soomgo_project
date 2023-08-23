package com.myweb.www.controller;

import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myweb.www.domain.CategoryVO;
import com.myweb.www.service.CategoryService;
import com.myweb.www.service.ServiceService;
import com.myweb.www.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/category/*")
public class categoryController {

	@Inject
	private CategoryService csv;
	
	@GetMapping("/category")
	public String categoryHome(HttpServletRequest request) {
		log.info("카테고리 진입!");
		return "/category/category_home";
	}
	
	@GetMapping("/categoryLesson")
	public String categoryLesson(HttpServletRequest request) {
		return "/category/category_lesson";
	}
	
	@GetMapping("/categoryHouseLiving")
	public String categoryHouseLiving(HttpServletRequest request) {
		return "/category/category_houseLiving";
	}
	
	@GetMapping("/categoryEvent")
	public String categoryEvent(HttpServletRequest request) {
		return "/category/category_event";
	}
	
	@GetMapping("/categoryBusiness")
	public String categoryBusiness(HttpServletRequest request) {
		return "/category/category_business";
	}
	
	@GetMapping("/categoryDesignDevelop")
	public String categoryDesignDevelp(HttpServletRequest request) {
		return "/category/category_designDevelop";
	}

}
