<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>내 정보수정</title>
</head>
<body>
	<div class="main_box">
	<h1>회원정보수정</h1><br>
		<form action="edit_auth" method="post">
		이메일<input type="text" name="useremail" value="${ses.useremail }" readonly="readonly"><br>
		비밀번호<input type="text" name ="userpw" value="${ses.userpw }"><br>
		이름<input type="text" name="username" value="${ses.username }"><br>
		전화번호<input type="text" name="userphone" value="${ses.userphone }"><br>
		<button type="submit">수정완료</button>
		</form>
	</div>
</body>
</html>