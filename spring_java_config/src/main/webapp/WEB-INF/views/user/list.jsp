<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>List</title>
</head>
<body>
<div class="main_box">
<h1>계정목록</h1><br>
		<table border="1">
			<tr>
				<th>user_num</th>
				<th>user_email</th>
				<th>user_pw</th>
				<th>user_name</th>
				<th>user_phone</th>
				<th>user_reg_date</th>
				<th>user_auth</th>
			</tr>
			<c:forEach items="${list}" var="user">
			<tr>
				<td>${user.usernum}</td>
				<td>${user.useremail}</td>
				<td>${user.userpw}</td>
				<td>${user.username}</td>
				<td>${user.userphone}</td>
				<td>${user.userregdate}</td>
				<td>${user.userauth}</td>
			</tr>
			</c:forEach>
		</table>
	</div>
</body>
</html>
