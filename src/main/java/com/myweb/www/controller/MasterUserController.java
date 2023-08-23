package com.myweb.www.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myweb.www.domain.MasterVO;
import com.myweb.www.domain.UserVO;
import com.myweb.www.service.MasterUserService;
import com.myweb.www.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/masterUser/*")
public class MasterUserController {

	@Inject
	private MasterUserService msv;
	
	@GetMapping("/masterSignup")
	public String login() {
	
		return "/masterUser/masterSignup";
	}
	
	@PostMapping("/emailCheck")
	@ResponseBody
	public int emailCheck(@RequestParam("email") String email) {
		int cnt = msv.emailCheck(email);
		log.info("cnt : "+cnt);
		log.info("email : "+email);
		return cnt;
		
	}
	
	// masterSignup 메서드 한번에 복붙하시면 됩니다.
	@PostMapping(value = "/masterSignup", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.TEXT_PLAIN_VALUE)
	public ResponseEntity<String> masterSignup(@RequestBody HashMap<String, ArrayList> map, MasterVO mvo) {
		log.info("map : "+map.toString());
		String upCategory = (String) map.get("array").get(0);
		String category = (String) map.get("array").get(1);
		String name = (String) map.get("array").get(2);
		String gender = (String) map.get("array").get(3);
		String email = (String) map.get("array").get(4);
		String pw = (String) map.get("array").get(5);
		String phone = (String) map.get("array").get(6);
		log.info(category);
		log.info(name);
		log.info(gender);
		log.info(email);
		log.info(pw);
		log.info(phone);
		log.info(upCategory);
		mvo = new MasterVO(category, name, gender, email, pw, phone, upCategory);
		log.info("mvo : "+mvo.toString());
		msv.register(mvo);

		return new ResponseEntity<String>("1", HttpStatus.OK);
	}

	
}
