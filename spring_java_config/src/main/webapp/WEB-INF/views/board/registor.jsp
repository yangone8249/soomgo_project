<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>글등록 페이지</h1>
	<form action="/board/registor" method="post">
		title : <input type="text" name="title" /><br>
		writer : <input type="text" name="writer" /><br>
		content : <input type="text" name="content" /><br>
		
		<button type="submit">전송!</button>
	</form>
	
</body>
</html>