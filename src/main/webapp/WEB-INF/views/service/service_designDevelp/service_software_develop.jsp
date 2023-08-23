<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>category</title>
    <link rel="stylesheet" href="/resources/css/service/service.css">
</head>
<body>
    <jsp:include page="/resources/final_project/header.jsp"></jsp:include>
  <div class="main_img_box">
        <img src="https://dmmj3ljielax6.cloudfront.net/upload/service-bg/service_33a80d6b-1013-40d8-a944-fe9c713770f8.jpg?webp=1" alt="">
        <div id="blackBox"></div>
      </div>
  <div class="main_box">
      
        
        <div id="informationBox">
            <h2>소프트웨어 개발</h2>
            <div id="grade">
                <ul>
                    <li><img src="https://assets.cdn.soomgo.com/icons/icon-common-review-star-small-full.svg" alt=""></li>
                    <li><img src="https://assets.cdn.soomgo.com/icons/icon-common-review-star-small-full.svg" alt=""></li>
                    <li><img src="https://assets.cdn.soomgo.com/icons/icon-common-review-star-small-full.svg" alt=""></li>
                    <li><img src="https://assets.cdn.soomgo.com/icons/icon-common-review-star-small-full.svg" alt=""></li>
                    <li><img src="https://assets.cdn.soomgo.com/icons/icon-common-review-star-small-full.svg" alt=""></li>
                </ul>
                <h4>5</h4>
            </div>
            <div id="infoBox">
                <div class="detailInfoBox">
                    <h4>16,988</h4>
                    <p>활동 고수</p>
                </div>
                <div class="detailInfoBox">
                    <h4>172,093</h4>
                    <p>누적 요청서</p>
                </div>
            </div>
            
            
            <div id="selectMainBox">
                <span style="color: gray; font-size: 13px;">완료 시 평균 개 견적 도착</span>
                <div id="selectBar"></div><div id="selectBarAni"></div>
                <span id="selectBarPercent">0%</span>
                <h2>어떤 플랫폼을 원하시나요?</h2>
                <ul id="selectUl">
                    <label><li class="selectLi"><div id="firstSelectLi"><input type="radio" name="estimate_purpose" class="radio" onclick="etcRedo()" value="Windows"><p>Windows</p></div></li></label>
                    <label><li class="selectLi"><div><input type="radio" name="estimate_purpose" class="radio" onclick="etcRedo()" value="Mac"><p>Mac</p></div></li></label>
                    <label><li class="selectLi"><div><input type="radio" name="estimate_purpose" class="radio" onclick="etcRedo()" value="Linux"><p>Linux</p></div></li></label>
                    <label><li class="selectLi"><div><input type="radio" name="estimate_purpose" class="radio" onclick="etcRedo()" value="iOS"><p>iOS</p></div></li></label>
                    <label><li class="selectLi"><div><input type="radio" name="estimate_purpose" class="radio" onclick="etcRedo()" value="Android"><p>Android</p></div></li></label>
                    <label><li class="selectLi"><div><input type="radio" name="estimate_purpose" class="radio" onclick="etcRedo()" value="고수와 상담 후 결정할게요."><p>고수와 상담 후 결정할게요.</p></div></li></label>
                    <label><li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_purpose" class="radio" id="etc" onclick="etcEvent()"><p>기타</p></div></li></label>
                </ul>
                <input type="number" hidden="hidden" value="0" id="value">
                <button type="button" hidden="hidden" id="prevBtn" onclick="prevPage()">이전</button>
                <button type="submit" id="nextBtn" onclick="nextPage()">다음</button>
            </div>
            <div id="whatIsSoomgoBox">
                <div class="ExplainBox">
                    <h4>숨고는 어떤 곳인가요?</h4>
                    <p>서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고 빠<br>
                        르게 연결해드리는 전문가 매칭 서비스입니다.<br>
                        1분 내외의 요청서를 작성하면, 여러 고수님들이 맞춤형 견적을<br>
                        보내드려요.<br>
                        맘에 쏙 드는 고수의 맞춤형 서비스를 받아보세요.</p>
                </div>
                <div class="ExplainBox">
                    <h4>소프트웨어 개발 고수만을 모았다!</h4>
                    <p>소프트웨어 개발 외주 업체를 찾고 계시나요?<br>
                        숨고에는 다양한 경력의 소프트웨어 개발 전문가가 활동하고 있어<br>
                        요.<br>
                        지금 바로 요청서를 작성하시고, 소프트웨어 개발 고수님과 상담<br>
                        해보세요!</p>
                </div>
            </div>
        </div>
</div>
<script type="text/javascript">
	const login_auth = `<c:out value="${msg_login}" />`;
	const user = `<c:out value="${ses.userEmail}"/>`;
	console.log(login_auth);
	console.log(user);	
	if(user == null){
		alert('로그인된 회원만 견적 요청이 가능합니다.');
		history.back();   
	}
	
</script>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="/resources/js/service_designDevelop/service_software_develop.js"></script>  
 <jsp:include page="/resources/final_project/footer.jsp"></jsp:include>
</body>
</html>