<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>category</title>
    <link rel="stylesheet" href="/resources/css/service/category_home.css">
</head>
<body>
    <jsp:include page="/resources/final_project/header.jsp"></jsp:include>

       <div id="mainContent">
        <!-- 검색창 부분 -->
        <div id="searchBox">
            <div id="blackBox"></div>
                <h2>원하는 서비스를 요청하고<br>견적을 받아보세요</h2>
                <input type="text" maxlength="25" placeholder="어떤분야의 전문가를 찾으시나요?" id="searchInput"><button type="submit" id="serviceBtn">
                    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0Q4RDhEOCIgZmlsbC1vcGFjaXR5PSIwIiBkPSJNMCAwaDE4djE4SDB6Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE0Ljk0NCAxMy44ODdsNC44MzcgNC44MzhhLjc0Ny43NDcgMCAxIDEtMS4wNTYgMS4wNTZsLTQuODM4LTQuODM3YTguNDU4IDguNDU4IDAgMSAxIDEuMDU3LTEuMDU3em0tMS41MDUtLjU2M2E2Ljk2NCA2Ljk2NCAwIDEgMC0uMTE0LjExNC43NTUuNzU1IDAgMCAxIC4xMTQtLjExNHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==" alt="">
                    &nbsp;<p>서비스 검색</p></button>
                <img src="https://assets.cdn.soomgo.com/images/services/img-service-home.png?webp=1" alt="">
        </div>
        <!-- category부분 -->
        <div id="categoryListBox">
            <ul>
                <li><a href="/category/categoryLesson"><img src="https://assets.cdn.soomgo.com/icons/category1/lesson.svg" alt=""><span id="category1">레슨</span></a></li>
                <li><a href="/category/categoryHouseLiving"><img src="https://assets.cdn.soomgo.com/icons/category1/home-living.svg" alt=""><span id="category2">홈/리빙</span></a></li>
                <li><a href="/category/categoryEvent"><img src="https://assets.cdn.soomgo.com/icons/category1/event.svg" alt=""><span id="category3">이벤트</span></a></li>
                <li><a href="/category/categoryBusiness"><img src="https://assets.cdn.soomgo.com/icons/category1/business.svg" alt=""><span id="category4">비즈니스</span></a></li>
                <li><a href="/category/categoryDesignDevelop"><img src="https://assets.cdn.soomgo.com/icons/category1/design-development.svg" alt=""><span id="category5">디자인/개발</span></a></li>
            </ul>
        </div>

        <div id="popularServiceBox">
            <h2>인기 서비스</h2>
            <div class="service_box">
                <div class="img_line">
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/718adb73-9adf-4a47-a9f2-7b1f3186026e.png?webp=1" alt="">
                        <div class="img_boxText"><p>에어컨 설치 및 수리</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/71c1ef33-506c-44de-9663-04cbf241fddd.png?webp=1" alt="">
                        <div class="img_boxText"><p>이사/입주 청소 업체</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/80f1a805-f1e7-4acc-ab23-394b35300cbd.png?webp=1" alt="">
                        <div class="img_boxText"><p>도배 시공</p></div>
                    </div>                    
                </div>
                <div class="img_line">
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/71cbc82e-3a12-4330-871d-39cc0279b1c0.png?webp=1" alt="">
                        <div class="img_boxText"><p>영어 과외</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/4674a0d5-c719-400d-a742-b4da5e8a200a.png?webp=1" alt="">
                        <div class="img_boxText"><p>용달/화물 운송</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/featured_service_a7eeece9-5c9d-4ec4-9452-0d41223fe577.jpg?webp=1" alt="">
                        <div class="img_boxText"><p>자동차 외부수리</p></div>
                    </div>                    
                </div>
                <div class="img_line">
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/6a497fde-2ba4-4a59-977c-41ce3be83e08.png?webp=1" alt="">
                        <div class="img_boxText"><p>퍼스널트레이닝(PT)</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/edfc1261-a293-4875-8024-99032b98daa5.png?webp=1" alt="">
                        <div class="img_boxText"><p>골프 레슨</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://static.cdn.soomgo.com/upload/service/166147a5-0cfa-4888-95d4-63a57982307e.png?webp=1" alt="">
                        <div class="img_boxText"><p>헤어/메이크업</p></div>
                    </div>                    
                </div>
            </div>
            
        </div>
    
    </div>
   
    <jsp:include page="/resources/final_project/footer.jsp"></jsp:include>
	<script type="text/javascript" src="/resources/js/category/category.js"></script>
</body>
</html>