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
<header>
<body>
    <jsp:include page="/resources/final_project/header.jsp"></jsp:include>

    <div id="mainContent">
        <!-- 검색창 부분 -->
        <div id="searchBox">
            <div id="blackBox"></div>
                <h2>원하는 서비스를 요청하고<br>견적을 받아보세요</h2>
                <input type="text" placeholder="어떤분야의 전문가를 찾으시나요?"><button type="submit" id="serviceBtn">
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
                <a href="/service/serviceSoftwareDevelop">
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/service_popular_585.jpg?webp=1" alt="">
                        <div class="img_boxText"><p>소프트웨어 개발</p></div>
                    </div>  
                    </a>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/5438a57d-9e09-4942-a518-52c9e60ad21a.jpg?webp=1" alt="">
                        <div class="img_boxText"><p>인쇄물 디자인</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/653ac2f4-c3c2-4e99-ab80-eba2a07bdc66.png?webp=1" alt="">
                        <div class="img_boxText"><p>앱 디자인</p></div>
                    </div>                    
                </div>
                <div class="img_line">
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/df6356b1-22f7-4adc-a9cb-57c01f3b4faa.png?webp=1" alt="">
                        <div class="img_boxText"><p>일러스트 디자인</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/f8e753d7-25cc-4464-b589-30ec4b821856.png?webp=1" alt="">
                        <div class="img_boxText"><p>제품 디자인</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/c2e5fb21-b4e1-47ec-82c7-4a310aa7d34a.png?webp=1" alt="">
                        <div class="img_boxText"><p>패키지 디자인</p></div>
                    </div>                    
                </div>
                <div class="img_line">
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/b64cb33a-9390-4720-bb1a-f9a3f74718a2.png?webp=1" alt="">
                        <div class="img_boxText"><p>라벨 디자인</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/75e80b8d-8e5c-4938-8400-2b6522eb76c6.png?webp=1" alt="">
                        <div class="img_boxText"><p>간판 디자인</p></div>
                    </div>
                    <div class="img_box">
                        <img style="width: 310px; height: 180px; border-radius: 15px 15px 0 0;" src="https://dmmj3ljielax6.cloudfront.net/upload/service/49362fe0-2ab5-426f-aee5-f1bd5323a1a0.jpg?webp=1" alt="">
                        <div class="img_boxText"><p>프레젠테이션 디자인</p></div>
                    </div>                  
                </div>
            </div>
            
        </div>
    
    </div>
    
    <jsp:include page="/resources/final_project/footer.jsp"></jsp:include>

</body>
</html>