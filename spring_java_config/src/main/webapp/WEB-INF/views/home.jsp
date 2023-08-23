<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<html>
<head>
	<title>Home</title>

</head>
<body>
<h1>
	숨고 
</h1>
<c:if test="${ses.userEmail eq null }">
<a href="/user/login"><button type="button">로그인</button></a>
<a href="/user/signup"><button type="button">회원가입</button></a>
</c:if>
<c:if test="${ses.userEmail ne null }">
<a href="/user/list"><button type="button">리스트</button></a>
<a href="/user/logout"><button type="button">로그아웃</button></a>
<a href="/user/edit"><button type="button">내 정보수정</button></a>
<a href="/user/delete"><button type="button">회원탈퇴</button></a>

</c:if>
<script type="text/javascript">
const msg_login = `<c:out value="${msg_login}" />`;

console.log(msg_login);

if(msg_login === '0'){
	alert('이메일 및 비밀번호를 잘못 입력하셨습니다.');
}

</script>

</body>
</html>
