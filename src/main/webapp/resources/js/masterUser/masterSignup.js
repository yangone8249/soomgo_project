let arrayValue = new Array(7);
let inputValue = new Array(5);
var script = document.createElement('script');

	if(Number(document.getElementById('value').value)==0){
		document.getElementById('selectBarAni').animate([
                	{ width: "225px"} 
            		], {duration: 300,
                	fill: "forwards", easing: "ease-out"});
        document.getElementById('selectBarPercent').innerText = '50%';
	}
	
function nextPage(){

	let div = document.createElement('div');
	execute = false;
    for(let i=0; i<document.getElementsByClassName('selectLi').length; i++){
    console.log(`${i}번째 : `+document.getElementsByClassName('selectLi')[i].childNodes[0].childNodes[0].checked);
        if(document.getElementsByClassName('selectLi')[i].childNodes[0].childNodes[0].checked){
            execute = true;
	            arrayValue[document.getElementById('value').value] = document.getElementsByClassName('selectLi')[i].childNodes[0].childNodes[0].value;
    	        console.log("배열 : "+arrayValue[document.getElementById('value').value]);
            
        }
    }
    console.log(execute);
    if(execute){    
        if(!!document.getElementById('chooseOption')){
            document.getElementById('chooseOption').remove();
        }
    }else{
        if(!!document.getElementById('chooseOption')){
            document.getElementById('chooseOption').remove();
        }
        if(Number(document.getElementById('value').value)==2){
            console.log("execute if문 value = 2");  
        }else{
            let p = document.createElement('p');
            p.innerText = `옵션을 선택해주세요.`;
            p.setAttribute('id', 'chooseOption');
            document.getElementById('selectMainBox').appendChild(p);
            return;
        }
    }
    
    let label1 = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    let label4 = document.createElement('label');
    
	console.log("value : "+document.getElementById('value').value);
	switch(document.getElementById('value').value){
			case '0':
				switch(arrayValue[0]){
					case 'A':
						document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>방송댄스 레슨</p></div>';
						document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="2"><p>보컬 레슨</p></div>';
						document.getElementsByClassName('selectLi')[2].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="3"><p>골프 레슨</p></div>';
						document.getElementsByClassName('selectLi')[3].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="4"><p>기타 레슨</p></div>';
						document.getElementsByClassName('selectLi')[4].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="5"><p>중국어 과외</p></div>';
						label1.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>비즈니스 영어</p></div></li>`;
						document.getElementById('selectUl').appendChild(label1);
						label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>퍼스널트레이닝(PT)</p></div></li>`;
						document.getElementById('selectUl').appendChild(label2);
						label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>수학 과외</p></div></li>`;
						document.getElementById('selectUl').appendChild(label3);
						label4.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>영어 과외</p></div></li>`;
						document.getElementById('selectUl').appendChild(label4);
						break;
					case 'B':
						document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>집 인테리어</p></div>';
						document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="2"><p>상업공간 인테리어</p></div>';
						document.getElementsByClassName('selectLi')[2].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="3"><p>타일 시공</p></div>';
						document.getElementsByClassName('selectLi')[3].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="4"><p>욕실/화장실 리모델링</p></div>';
						document.getElementsByClassName('selectLi')[4].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="5"><p>페인트 시공</p></div>';
						label1.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>싱크대 교체</p></div></li>`;
						document.getElementById('selectUl').appendChild(label1);
						label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>도배장판 시공</p></div></li>`;
						document.getElementById('selectUl').appendChild(label2);
						label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>인테리어 필름 시공</p></div></li>`;
						document.getElementById('selectUl').appendChild(label3);
						label4.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>조명 인테리어</p></div></li>`;
						document.getElementById('selectUl').appendChild(label4);
						break;
					case 'C':
						document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>웨딩 사진 촬영(본식)</p></div>';
						document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="2"><p>결혼식 사회자</p></div>';
						document.getElementsByClassName('selectLi')[2].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="3"><p>개인용 영상 촬영</p></div>';
						document.getElementsByClassName('selectLi')[3].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="4"><p>영상 편집</p></div>';
						document.getElementsByClassName('selectLi')[4].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="5"><p>댄스 공연</p></div>';
						label1.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>클래식 공연</p></div></li>`;
						document.getElementById('selectUl').appendChild(label1);
						label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>행사 MC</p></div></li>`;
						document.getElementById('selectUl').appendChild(label2);
						label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>헤어/메이크업</p></div></li>`;
						document.getElementById('selectUl').appendChild(label3);
						label4.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>파티/행사 기획</p></div></li>`;
						document.getElementById('selectUl').appendChild(label4);
						break;
					case 'D':
						document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>회계/사무</p></div>';
						document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="2"><p>영상 광고</p></div>';
						document.getElementsByClassName('selectLi')[2].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="3"><p>블로그 마케팅</p></div>';
						document.getElementsByClassName('selectLi')[3].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="4"><p>일본어 통역</p></div>';
						document.getElementsByClassName('selectLi')[4].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="5"><p>중국어 통역</p></div>';
						label1.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>BGM/사운드 제작</p></div></li>`;
						document.getElementById('selectUl').appendChild(label1);
						label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>명함 인쇄</p></div></li>`;
						document.getElementById('selectUl').appendChild(label2);
						label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>출판</p></div></li>`;
						document.getElementById('selectUl').appendChild(label3);
						label4.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>출력/제본</p></div></li>`;
						document.getElementById('selectUl').appendChild(label4);
						break;
					case 'E':
						document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>소프트웨어 개발</p></div>';
						document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="2"><p>프레젠테이션 디자인</p></div>';
						document.getElementsByClassName('selectLi')[2].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="3"><p>인쇄물 디자인</p></div>';
						document.getElementsByClassName('selectLi')[3].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="4"><p>앱 디자인</p></div>';
						document.getElementsByClassName('selectLi')[4].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="5"><p>일러스트 디자인</p></div>';
						label1.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>제품 디자인</p></div></li>`;
						document.getElementById('selectUl').appendChild(label1);
						label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>패키지 디자인</p></div></li>`;
						document.getElementById('selectUl').appendChild(label2);
						label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>라벨 디자인</p></div></li>`;
						document.getElementById('selectUl').appendChild(label3);
						label4.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>간판 디자인</p></div></li>`;
						document.getElementById('selectUl').appendChild(label4);
						break;
				}
				document.getElementById('value').value = 1;
				break;
	        case '1': 
				document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `마지막으로 필수 정보를 입력해주세요.`;
				document.getElementById('selectMainBox').getElementsByTagName('h2')[0].style.marginLeft = "70px";
				document.getElementsByClassName('selectLi')[8].remove();
				document.getElementsByTagName('label')[8].remove();
				document.getElementsByClassName('selectLi')[7].remove();
				document.getElementsByTagName('label')[7].remove();
				document.getElementsByClassName('selectLi')[6].remove();
				document.getElementsByTagName('label')[6].remove();
				document.getElementsByClassName('selectLi')[5].remove();
				document.getElementsByTagName('label')[5].remove();
				document.getElementsByClassName('selectLi')[4].remove();
				document.getElementsByTagName('label')[4].remove();
				document.getElementsByClassName('selectLi')[3].remove();
				document.getElementsByTagName('label')[3].remove();
				document.getElementsByClassName('selectLi')[2].remove();
				document.getElementsByTagName('label')[2].remove();
				document.getElementsByClassName('selectLi')[1].remove();
				document.getElementsByTagName('label')[1].remove();
				document.getElementsByClassName('selectLi')[0].remove();
				document.getElementsByTagName('label')[0].remove();
				div.innerHTML = `
							
								<div id=signBox>
									<div id="signData">
									<div id="nameName">이름　</div>
									<div id=name>
										<input type="text" id="username" name="userName" placeholder="이름(실명)을 입력해주세요"><br>
										<span class="error-message_name" id="name-error">이름를 입력해주세요.</span>
									</div>
									<br>

									<div id="genderName">성별</div>
									<div id=gender>
										<div id="man" onclick="man()">남자</div>
										<div id="woman" onclick="woman()">여자</div>
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
								</div>`;	
				document.getElementById('append').appendChild(div);
				script.src = "/resources/js/masterUser/masterSignup2.js";
				document.body.append(script);
				document.getElementById('value').value = 2;
				document.getElementById('selectBarAni').animate([
                	{ width: "450px"} 
            		], {duration: 300,
                	fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '100%';
				
				break;
			}
	  		if(document.getElementById('value').value >=1){
		        document.getElementById('prevBtn').removeAttribute("hidden");
		    }else{
		        console.log("````````````````````````````");
		        document.getElementById('prevBtn').setAttribute('hidden', "hidden");
		    }
		    console.log("배열 : "+arrayValue);
	       window.scrollTo({top:0, left:0, behavior:'smooth'}); 
}

function prevPage(){
    let label1 = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    let label4 = document.createElement('label');
    let label5 = document.createElement('label');
    let label6 = document.createElement('label');
    let label7 = document.createElement('label');
    let label8 = document.createElement('label');
    let label9 = document.createElement('label');
    
	if(!!document.getElementById('chooseOption')){
        document.getElementById('chooseOption').remove();
    }
	console.log("value : "+document.getElementById('value').value);
	switch(document.getElementById('value').value){
			case '1':
				document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="A"><p>레슨</p></div>';
				document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="B"><p>홈/리빙</p></div>';
				document.getElementsByClassName('selectLi')[2].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="C"><p>이벤트</p></div>';
				document.getElementsByClassName('selectLi')[3].innerHTML = '<div><input type="radio" name="estimate_progress" class="radio" value="D"><p>비즈니스</p></div>';
				document.getElementsByClassName('selectLi')[4].innerHTML = '<div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="E"><p>디자인/개발</p></div>';
				document.getElementsByClassName('selectLi')[8].remove();
				document.getElementsByTagName('label')[8].remove();
				document.getElementsByClassName('selectLi')[7].remove();
				document.getElementsByTagName('label')[7].remove();
				document.getElementsByClassName('selectLi')[6].remove();
				document.getElementsByTagName('label')[6].remove();
				document.getElementsByClassName('selectLi')[5].remove();
				document.getElementsByTagName('label')[5].remove();
                document.getElementById('value').value = 0;
				break;
			case '2':
				document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `어떤 서비스를 제공할 수 있나요?`;
				console.log(document.body.getElementsByTagName('script')[2].src);
				document.body.getElementsByTagName('script')[2].remove();
				document.getElementById('append').getElementsByTagName('div')[0].remove();
				
				switch(arrayValue[0]){
					case 'A':
						label1.innerHTML = `<li class="selectLi"><div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>방송댄스 레슨</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label1);
			            label4.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="2"><p>보컬 레슨</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label2);
			            label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="3"><p>골프 레슨</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label3);
			            label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="4"><p>기타 레슨</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label4);
						label5.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="5"><p>중국어 과외</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label5);
			            label6.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>비즈니스 영어</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label6);
			            label7.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>퍼스널트레이닝(PT)</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label7);
			            label8.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>수학 과외</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label8);
			            label9.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>영어 과외</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label9);
						break;
					case 'B':
						label1.innerHTML = `<li class="selectLi"><div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>집 인테리어</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label1);
			            label4.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="2"><p>상업공간 인테리어</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label2);
			            label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="3"><p>타일 시공</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label3);
			            label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="4"><p>욕실/화장실 리모델링</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label4);
						label5.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="5"><p>페인트 시공</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label5);
			            label6.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>싱크대 교체</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label6);
			            label7.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>도배장판 시공</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label7);
			            label8.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>인테리어 필름 시공</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label8);
			            label9.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>조명 인테리어</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label9);
						break;
					case 'C':
						label1.innerHTML = `<li class="selectLi"><div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>웨딩 사진 촬영(본식)</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label1);
			            label4.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="2"><p>결혼식 사회자</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label2);
			            label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="3"><p>개인용 영상 촬영</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label3);
			            label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="4"><p>영상 편집</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label4);
						label5.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="5"><p>댄스 공연</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label5);
			            label6.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>클래식 공연</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label6);
			            label7.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>행사 MC</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label7);
			            label8.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>헤어/메이크업</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label8);
			            label9.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>파티/행사 기획</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label9);
						break;
					case 'D':
						label1.innerHTML = `<li class="selectLi"><div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>회계/사무</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label1);
			            label4.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="2"><p>영상 광고</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label2);
			            label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="3"><p>블로그 마케팅</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label3);
			            label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="4"><p>일본어 통역</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label4);
						label5.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="5"><p>중국어 통역</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label5);
			            label6.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>BGM/사운드 제작</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label6);
			            label7.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>명함 인쇄</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label7);
			            label8.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>출판</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label8);
			            label9.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>출력/제본</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label9);
						break;
					case 'E':
						label1.innerHTML = `<li class="selectLi"><div id="firstSelectLi"><input type="radio" name="estimate_progress" class="radio" value="1"><p>소프트웨어 개발</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label1);
			            label4.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="2"><p>프레젠테이션 디자인</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label2);
			            label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="3"><p>인쇄물 디자인</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label3);
			            label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="4"><p>앱 디자인</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label4);
						label5.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="5"><p>일러스트 디자인</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label5);
			            label6.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="6"><p>제품 디자인</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label6);
			            label7.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="7"><p>패키지 디자인</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label7);
			            label8.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_progress" class="radio" value="8"><p>라벨 디자인</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label8);
			            label9.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_progress" class="radio" value="9"><p>간판 디자인</p></div></li>`;
			            document.getElementById('selectUl').appendChild(label9);
						break;
				}
				
					
	        	document.getElementById('selectBarAni').animate([
                	{ width: "225px"} 
            		], {duration: 300,
                	fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '50%';
                document.getElementById('value').value = 1;
				break;

	  		}
	  		
	  	if(document.getElementById('value').value ==0){
		    console.log("````````````````````````````");
		    document.getElementById('prevBtn').setAttribute('hidden', "hidden");
		}
	    window.scrollTo({top:0, left:0, behavior:'smooth'}); 
}



