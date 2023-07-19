<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>글등록 페이지</h1>
	
	<table>
		<tr>
			<th>순번</th>
			<th>제목</th>
			<th>작성자</th>
			<th>등록일</th>
		</tr>
		<c:forEach items="${list }">
			<tr>
				<td><a href="/board/detail?bno=#{list.bno}">${list.bno }</a></td>
				<td>${list.title }</td>
				<td>${list.writer }</td>
				<td>${list.content }</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>