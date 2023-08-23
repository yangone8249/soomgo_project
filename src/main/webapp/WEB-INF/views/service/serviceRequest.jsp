<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
<link rel="stylesheet" href="/resources/css/service/serviceRequest.css">
<link rel="stylesheet" href="/resources/css/service/chat.css">
<link rel="stylesheet" href="/resources/css/service/emptyList.css">
<style type="text/css"> /*css 안먹어서 여기다해둠  */
   a:link { color: black; }
   a:visited { color: black; }
   a:hover { color: black; }
   a:active { color: black; }
</style>
</head>
<body>
 <jsp:include page="/resources/final_project/header.jsp"></jsp:include>
 <div class="main_box">
  <div class="serviceTitleBackground">
			<div class="serviceTitle">
				<div class="titleNameLeft">
				<h3>${cvo.categoryName }</h3><br> <!-- 카테고리명 수정됨 -->
				<span>요청일</span> <p>${now}</p> <!-- 현재날짜로 수정됨 -->
				</div>
				<div class="titleNameRight">
					<button>내 요청서</button>
					<button>요청 마감</button>
				</div>
			</div>
		</div>
  <div class="allchat-list">
        <div id="container">            
        </div>
            <div class="pagebody">
            <!-- 채팅방리스트 들어가자리 -->
            <c:if test="${listEmpty eq 1}">
	            <div class="ezengo_pay_page" id="ezengo_pay_page">
	       
	
	            <div class="paycontent">
	                <div class="imgbox">
	                    <img src="/resources/image/거래내역icon.png" alt="">
	                </div>
	                <div class="conbox">
	                    <p>거래 내역이 없습니다.</p>
	                    <span>숨고페이 거래 내역이 없습니다.</span>
	                    <span>서비스 이용 후 다시 확인해 주세요!</span>
	                </div>
	            </div>
	        	</div>
            </c:if>
          <c:forEach items="${list }" var="list">
             <div class="chat-list-room">
          <a href="/" style="text-decoration: none;" id="chattag">
            <ul id="chat">
                <li id="chat-list">
<!--                     <section class="profilecontatiner"> -->
                        <div class="profileimg" style="background-color: black  ;"> 
                        </div>
                        <div>
                            <div id="master-name"><h5>${list.masterName }</h5></div>
                            <div id="master-info">
                                상위카테고리 : ${list.upCategoryCode }
                                <span class="divider">|</span>
                                하위카테고리 : ${list.masterCategoryCode }
                            </div>
                        </div>
                    </section>
                    
                    <div id="last-msg">
                            <p>10회 고용됨</p><br>
                            <p>지역 : ${list.masterDesireregion }</p>
                    </div>
                    <div id="btnDiv">
                    <button type="button" id="serviceRead">견적서 보기</button>
                    <button type="button" id="doChat">채팅하기</button>
                    </div>
                </li>
            </ul>
        </a>
        </div>
          </c:forEach>
           </div>
           </div>

</div>
<script src="http://code.jquery.com/jquery-3.5.1.min.js"></script>  
 <jsp:include page="/resources/final_project/footer.jsp"></jsp:include>
</body>
</html>