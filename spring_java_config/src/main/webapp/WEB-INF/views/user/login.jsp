<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>
<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/resources/css/login.css"/>
<link rel="stylesheet" type="text/css" href="/resources/final_project/header.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>
<jsp:include page="/resources/final_project/header.jsp"></jsp:include>
<div class="main_box">
<div id="loginContent">

<h1>로그인</h1>

<div id=loginBox>
	<form action="login_auth">
	<div id=loginForm>
		
		<div id=email>
			<div id="emailName">
			이메일
			</div>
		<br>
		<input type="email" id="useremail" name="userEmail" placeholder="example@soomgo.com"><br>
			<span class="error-message" id="email-error">유효한 이메일 주소를 입력해주세요.</span>		</div>
		<div id=pw>
			<div id=pwName>
			비밀번호
			</div>
		<br>
		<input type="password" id="userpw" name="userPw" placeholder="비밀번호를 입력해주세요.">
		<div id="pwCheck">표시</div><br>
		</div>
		<button type="submit" id=loginButton>이메일 로그인</button>
	</form>
</div>
	<div id="sign">
		<a href="" id="pwFind">비밀번호 찾기</a>
		|
		<a href="signup" id="signUp">회원가입</a><br>
	</div>
	<div id="anotherLogin">
		<button id="kakao"><img src="/resources/image/kakao.png">카카오로 시작</button><br>
		<button id="naver"><img src="/resources/image/naver.png">네이버로 시작</button><br>
		<button id="fb"><img src="/resources/image/fb.png">페이스북으로 시작</button>
	</div>
</div>
</div>
	<jsp:include page="/resources/final_project/footer.jsp"></jsp:include>

<script type="text/javascript" src="/resources/js/login.js">
</script>
</body>
</html>