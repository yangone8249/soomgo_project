package com.myweb.www.controller;

import java.util.List;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myweb.www.domain.BoardVO;
import com.myweb.www.domain.UserVO;
import com.myweb.www.service.BoardService;
import com.myweb.www.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/user/*")
public class UserController {

	@Inject
	private UserService usv;
	
	@GetMapping("/login")
	public String login() {
	
		return "/user/login";
	}
	
	@GetMapping("/signup")
	public String signup() {
	
		return "/user/signup";
	}
	
	@PostMapping("/signup")
	public String signup(UserVO uvo , Model m) {
		log.info("uvo : "+uvo.toString());
		int isOk = usv.register(uvo);
		return "/user/login";
		
	}

	@GetMapping("/list")
	public String list(Model m) {
		List<UserVO> list = usv.getList();
		m.addAttribute("list" , list);
		log.info("list 성공");
		return "/user/list";
	}
	
	//아이디 중복체크
	@PostMapping("/emailCheck")
	@ResponseBody
	public int emailCheck(@RequestParam("email") String email) {
		int cnt = usv.emailCheck(email);
		log.info("cnt : "+cnt);
		log.info("email : "+email);
		return cnt;
		
	}
	
	@GetMapping("/login_auth")
	public String login_auth(@RequestParam("userEmail") String email, @RequestParam("userPw") String pw, HttpServletRequest request) {
	    UserVO uvo = new UserVO(email, pw);
	    log.info("email : " + email);
	    log.info("pw : " + pw);

	    UserVO loginUvo = usv.loginAuth(uvo);
	    if (loginUvo != null) {
	        HttpSession ses = request.getSession();
	        ses.setAttribute("ses", loginUvo);
	        ses.setMaxInactiveInterval(10 * 60);
	        request.setAttribute("msg_login", 1);
	    } else {
	        request.setAttribute("msg_login", 0);
	    }

	    return "home";
	}

	@GetMapping("/edit")
	public String edit () {
		return "/user/edit";
	}
	
	@PostMapping("/edit_auth")
	public String edit_auth(@ModelAttribute("uvo") UserVO uvo, Model m , HttpServletRequest request) {
	    log.info("uvo: " + uvo.toString());
	    int isOk = usv.edit(uvo);
	    if(isOk > 0) {
	    	HttpSession ses = request.getSession();
	    	ses.setAttribute("ses", uvo);
	    	ses.setAttribute("ses", uvo); //두번 선언해야 즉각 변경이되네요.
			log.info("-=-=> session 변경 완료");
		}
	    return "home";
	}
	
	@GetMapping("/logout")
	public String logout (HttpServletRequest request) {
		HttpSession ses = request.getSession();
		ses.invalidate();
		return "home";
	}
	
	@GetMapping("/delete")
	public String delete(HttpServletRequest request) {
	    HttpSession ses = request.getSession();
	    UserVO uvo = (UserVO) ses.getAttribute("ses"); // 세션에서 로그인된 사용자 정보 가져오기
	        int isOk = usv.delete(uvo);
	        if (isOk > 0) {
	            ses.invalidate(); // 세션 무효화
	        }
	    return "home";
	}






}
