package com.myweb.www.controller;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.request;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myweb.www.domain.CategoryVO;
import com.myweb.www.domain.EstimateVO;
import com.myweb.www.domain.MasterVO;
import com.myweb.www.domain.UserVO;
import com.myweb.www.service.CategoryService;
import com.myweb.www.service.MasterUserService;
import com.myweb.www.service.ServiceService;
import com.myweb.www.service.UserService;

import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/service/*")
public class ServiceController {
	@Inject
	private UserService usv;
	@Inject
	private ServiceService ssv;
	@Inject
	private MasterUserService musv;
	@Inject
	private CategoryService csv;
	
	@GetMapping("/serviceLessonDance")
	public String serviceLessonDance(HttpServletRequest request, HttpSession session) {
		log.info("getSes : "+session.getAttribute("msg_login"));
		log.info("getSes : "+session.getAttribute("ses"));
		if(session.getAttribute("msg_login") != null) {
			log.info("세션 값 존재함");
			request.setAttribute("msg_login", 1);
			request.setAttribute("ses", session.getAttribute("ses"));
		}else {
			log.info("세션 값 없음");
			request.setAttribute("msg_login", 0);
		}

		return "/service/service_lesson/service_dance";
	}
	
	@GetMapping("/serviceHouseLivingHouseInterior")
	public String serviceHouseLivingHouseInterior(HttpServletRequest request, HttpSession session) {
		log.info("getSes : "+session.getAttribute("msg_login"));
		log.info("getSes : "+session.getAttribute("ses"));
		if(session.getAttribute("msg_login") != null) {
			log.info("세션 값 존재함");
			request.setAttribute("msg_login", 1);
			request.setAttribute("ses", session.getAttribute("ses"));
		}else {
			log.info("세션 값 없음");
			request.setAttribute("msg_login", 0);
		}

		return "/service/service_houseLiving/service_houseInterior";
	}
	
	@GetMapping("/serviceWedding")
	public String serviceWedding(HttpServletRequest request, HttpSession session) {
		log.info("getSes : "+session.getAttribute("msg_login"));
		log.info("getSes : "+session.getAttribute("ses"));
		if(session.getAttribute("msg_login") != null) {
			log.info("세션 값 존재함");
			request.setAttribute("msg_login", 1);
			request.setAttribute("ses", session.getAttribute("ses"));
		}else {
			log.info("세션 값 없음");
			request.setAttribute("msg_login", 0);
		}

		return "/service/service_event/service_wedding";
	}

	@GetMapping("/serviceAccounting")
	public String serviceAccounting(HttpServletRequest request, HttpSession session) {
		log.info("getSes : "+session.getAttribute("msg_login"));
		log.info("getSes : "+session.getAttribute("ses"));
		if(session.getAttribute("msg_login") != null) {
			log.info("세션 값 존재함");
			request.setAttribute("msg_login", 1);
			request.setAttribute("ses", session.getAttribute("ses"));
		}else {
			log.info("세션 값 없음");
			request.setAttribute("msg_login", 0);
		}

		return "/service/service_business/service_accounting";
	}

	@GetMapping("/serviceSoftwareDevelop")
	public String serviceSoftwareDevelop(HttpServletRequest request, HttpSession session) {
		log.info("getSes : "+session.getAttribute("msg_login"));
		log.info("getSes : "+session.getAttribute("ses"));
		if(session.getAttribute("msg_login") != null) {
			log.info("세션 값 존재함");
			request.setAttribute("msg_login", 1);
			request.setAttribute("ses", session.getAttribute("ses"));
		}else {
			log.info("세션 값 없음");
			request.setAttribute("msg_login", 0);
		}

		return "/service/service_designDevelp/service_software_develop";
	}
	
    @ResponseBody
    @RequestMapping(value = "/serviceRequest", method = RequestMethod.POST)
    public List<MasterVO> serviceRequest(@RequestBody HashMap<String, ArrayList> map, HttpServletRequest request, HttpSession session) {
    	
    	EstimateVO evo = new EstimateVO();
		log.info("Spring 진입 fetch 성공");
		log.info("map : "+map);
		log.info("map Size : "+ map.keySet().size());
		log.info("map.get.size : "+map.get("Array").size());
		
		for(int i=0; i<map.get("Array").size(); i++) {
			log.info(i+"번 진입");
			if(map.get("Array").get(i) == null) {
				log.info("null if문 진입");
				map.get("Array").remove(i);
				map.get("Array").add(i, "");
			}
		}
		for(String key : map.keySet()) {
			log.info("key : "+key);
			
			switch(key) {
			case "userEmail":
				log.info((String)map.get(key).get(0));
				evo.setEstimateUserNum((usv.findUserNum((String)map.get(key).get(0)))); 
				break;
			case "Array":
				log.info("value : "+map.get(key).toString());
				log.info("value.size() : "+map.get(key).size());
				for(int i=0; i<map.get(key).size(); i++) {
					log.info("value : "+map.get(key).get(i));
					switch (i) {
					case 0:
						evo.setEstimatePurpose((String)map.get(key).get(i).toString().replace(" ", ""));						
						break;
					case 1:
						evo.setEstimateProgress((String)map.get(key).get(i).toString().replace(" ", ""));		
						break;
					case 2:
						evo.setEstimateAgegroup((String)map.get(key).get(i).toString().replace(" ", ""));						
						break;
					case 3:
						evo.setEstimateUgender((String)map.get(key).get(i).toString().replace(" ", ""));						
						break;
					case 4:
						evo.setEstimateMgender((String)map.get(key).get(i).toString().replace(" ", ""));						
						break;
					case 5:
						evo.setEstimateTime((String)map.get(key).get(i).toString().replace(" ", ""));					
						break;
					}
				}
				break;
			case "category":
				log.info("value : "+map.get(key).toString());
				log.info("value.size() : "+map.get(key).size());
				for(int i=0; i<map.get(key).size(); i++) {
					log.info("value : "+map.get(key).get(i));	
					switch (i) {
					case 0:
						evo.setEstimateUpCategoryCode((String)map.get(key).get(i));						
						break;
					case 1:
						evo.setEstimateCategoryCode((String)map.get(key).get(i));
						break;
					}
				}
				break;
			case "region":
				log.info("value : "+map.get(key).toString());
				log.info("value.size() : "+map.get(key).size());
				String si = null;
				String gu = null;
				String dong = null;
				for(int i=0; i<map.get(key).size(); i++) {
					log.info("value : "+map.get(key).get(i));
					switch (i) {
					case 0:
						si = (String)map.get(key).get(i);		
						break;
					case 1:
						gu = (String)map.get(key).get(i);
						break;
					case 2:
						dong = (String)map.get(key).get(i);
						break;
					}
				}
				String region = si+" "+gu+" "+dong;
				log.info("region : "+ region);
				evo.setEstimateDesireregion(region);
				
				break;
			case "day":
				log.info("value : "+map.get(key).toString());
				log.info("value.size() : "+map.get(key).size());
				String mon = "";
				String tue = "";
				String wed = "";
				String thu = "";
				String fri = "";
				String sat = "";
				String sun = "";
				for(int i=0; i<map.get(key).size(); i++) {
					log.info("value : "+map.get(key).get(i));	
					switch (i) {
					case 0:
						mon = (String)map.get(key).get(i);
						break;
					case 1:
						tue = (String)map.get(key).get(i);
						break;
					case 2:
						wed = (String)map.get(key).get(i);
						break;
					case 3:
						thu = (String)map.get(key).get(i);
						break;
					case 4:
						fri = (String)map.get(key).get(i);
						break;
					case 5:
						sat = (String)map.get(key).get(i);
						break;
					case 6:
						sun = (String)map.get(key).get(i);
						break;
					}
				}
				String day = mon+tue+wed+thu+fri+sat+sun;
				log.info("day : "+day);
				evo.setEstimateDay(day);
				break;
			}
		}
		
		log.info("evo : "+ evo.toString());
		ssv.insertEvo(evo);		
		
		List<MasterVO> list = musv.selectList(evo);
		
		log.info("list : "+list);
		session.setAttribute("list", list);
		session.setAttribute("evo", evo);
		return list;
	}
    
    

	@GetMapping("/serviceRequest")// serviceRequest 메서드는 통째로 복붙하시면됩니다. 
	public String serviceRequest(HttpServletRequest request, HttpSession session, CategoryVO cvo) {//새로 추가함
		log.info("getMapping Service 진입");
		List<MasterVO> list = (List<MasterVO>)session.getAttribute("list");
		int listEmpty = 0;
		log.info("evo : "+session.getAttribute("evo"));
		log.info("list : "+session.getAttribute("list"));
		log.info("list : "+list);
		
		if(list == null || list.isEmpty()) {
			log.info("null or isEmpty() 진입");
			listEmpty = 1;
			request.setAttribute("listEmpty", listEmpty);
		}
		LocalDate now = LocalDate.now();//새로 추가함
		
		// ↓ 여기 밑에있는 selectCategoryName()와 연결된 service,dao,mapper도 새로 만들어놨습니다.
		cvo.setCategoryName(ssv.selectCategoryName((EstimateVO)session.getAttribute("evo")));//새로 추가함
		request.setAttribute("list", session.getAttribute("list"));
		request.setAttribute("now", now); //새로 추가함
		request.setAttribute("cvo", cvo);//새로 추가함
		ssv.deleteEvo(session.getAttribute("evo")); 
		return "/service/serviceRequest";
	}

	
}
