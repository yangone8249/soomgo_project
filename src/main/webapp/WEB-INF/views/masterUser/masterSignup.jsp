kdy<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
    <link rel="stylesheet" href="/resources/css/user/masterSignup.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<jsp:include page="/resources/final_project/header.jsp"></jsp:include>

  <div class="main_box">

            <div id="selectMainBox">
                <span style="color: gray; font-size: 13px;">완료 시 평균 4개 견적 도착</span>
                <div id="selectBar"></div><div id="selectBarAni"></div>
                <span id="selectBarPercent">0%</span>
                <h2>어떤 서비스를 제공할 수 있나요?</h2>
                <div id="append"></div>
                <ul id="selectUl"><!-- li 태그들 상위카테고리명으로 수정됨 
                					masterSignup.jsp 페이지랑 연결된 JavaScript는 전체적으로 다 수정했습니다.
                -->
                    <label><li class="selectLi"><div id="firstSelectLi"><input type="radio" name="estimate_purpose" class="radio"  value="A"><p>레슨</p></div></li></label>
                    <label><li class="selectLi"><div><input type="radio" name="estimate_purpose" class="radio"  value="B"><p>홈/리빙</p></div></li></label>
                    <label><li class="selectLi"><div><input type="radio" name="estimate_purpose" class="radio"  value="C"><p>이벤트</p></div></li></label>
                    <label><li class="selectLi"><div><input type="radio" name="estimate_purpose" class="radio"  value="D"><p>비즈니스</p></div></li></label>
                    <label><li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_purpose" class="radio" value="E"><p>디자인/개발</p></div></li></label>
                </ul>
                <input type="number" hidden="hidden" value="0" id="value">
                <div id="btnDiv">
                <button type="button" hidden="hidden" id="prevBtn" onclick="prevPage()">이전</button>
                <button type="submit" id="nextBtn" onclick="nextPage()">다음</button>
            	</div>
            </div>
            
</div>
<jsp:include page="/resources/final_project/footer.jsp"></jsp:include>
	<script type="text/javascript" src="/resources/js/masterUser/masterSignup.js"></script>
</body>
</html>