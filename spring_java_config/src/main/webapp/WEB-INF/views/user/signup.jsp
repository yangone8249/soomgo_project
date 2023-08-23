<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/signup.css"/>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

</head>
<body>
<jsp:include page="/resources/final_project/header.jsp"></jsp:include>
<div class="main_box">
<div id="signContent">

<h1>숨고에 오신 것을 환영합니다</h1>
<form action="signup" method="post">
	<div id=signBox>
		<div id="signData">
				
				<div id="nameName">이름　</div>
			<div id=name>
				<input type="text" id="username" name="userName" placeholder="이름(실명)을 입력해주세요"><br>
				<span class="error-message_name" id="name-error">이름를 입력해주세요.</span>
			</div>
			<br>
			
				<div id="emailName">이메일</div>
			<div id="email">
				<input type="email" id="useremail" name="userEmail" placeholder="example@soomgo.com" oninput = "checkEmail()">
				<span class="error-message" id="email-error">유효한 이메일 주소를 입력해주세요.</span>
				<!-- id ajax 중복체크 -->
				<span class="emailok">사용 가능한 이메일입니다.</span>
				<span class="emailalready">누군가 이 이메일을 사용하고 있어요.</span>
			</div>
			<br>
			
				<div id="pwName">비밀번호</div>
			<div id="pw">
				<input type="password" id="userpw" name="userPw" placeholder="영문 대소문자+숫자 조합 8자리 이상 입력해주세요">
				<div id="pwCheck">표시</div>
				<br>
				<span class="error-message_pw" id="pw-error">비밀번호는 8자이상 대문자,소문자,숫자 모두 포함되어야 합니다.</span>
			</div>
			<br>
			
				<div id="phoneName">전화번호</div>
			<div id="phone">
				<input type="text" id="userphone" name="userPhone" placeholder="010xxxxxxxx">
				<span class="error-message_phone" id="phone-error">전화번호를 입력해주세요. (숫자만)</span>
			</div>
			<br>
			
		</div>
		
		<div id="accept">
		<ul>
		<li><input type="checkbox" name="agree_all"><p>전체동의</p></li>
		<div class="jb-division-line"></div>
		<li><input type="checkbox" name="agree" value="Y"><p>(필수)이용약관 동의</p></li>
		<li><input type="checkbox" name="agree" value="Y"><p>(필수)개인정보 수집 및 이용 동의</p></li>
		<li><input type="checkbox" name="agree" value="Y"><p>(필수)14세 이상입니다</p></li>
		</ul>
		</div>
		
		<div id="submit">
		<button type="submit" id="signButton">회원가입</button>
		<br>
		<button type="button" id="fbButton"><img src="/resources/image/fb.png">Facebook으로 가입하기</button>
		</div>
</form>
		<div id="gosuSign">
		<a href="">고수로 가입하시나요?</a>
		</div>
	</div>
</div>
</div>
<jsp:include page="/resources/final_project/footer.jsp"></jsp:include>
	<script type="text/javascript" src="/resources/js/signup.js"></script>
</body>
</html>