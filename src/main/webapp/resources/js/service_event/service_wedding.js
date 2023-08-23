let value = new Array(7);
let inputValue = new Array(5);
let region = new Array(3);
let day;
let count = 0;
const category = ["C", "1"];

function nextPage(){
	console.log("ses확인 : "+login_auth);
	console.log("ses확인 : "+user);
    console.log("nextBtn 함수 시작````````````````````````````");
    console.log("hidden value 값 : "+Number(document.getElementById('value').value));
    console.log("hidden value 값 : "+typeof Number(document.getElementById('value').value));
    console.log("ul태그 자식 개수 : "+document.getElementById('selectUl').childElementCount);
    console.log("selectLi의 크기 : "+document.getElementsByClassName('selectLi').length);
    let execute = false;
    
    for(let i=0; i<document.getElementsByClassName('selectLi').length; i++){
        if(Number(document.getElementById('value').value)==7){
           console.log('value = 7');
            break; 
        }
        console.log(`${i}번째 : `+document.getElementsByClassName('selectLi')[i].childNodes[0].childNodes[0].checked);
        if(document.getElementsByClassName('selectLi')[i].childNodes[0].childNodes[0].checked){
            execute = true;
            value[Number(document.getElementById('value').value)] = i; 
            if(document.getElementById('value').value == 0 && value[Number(document.getElementById('value').value)] == 4){
                    console.log('진입성공');
                    inputValue[Number(document.getElementById('value').value)] = document.getElementById('inputEtc').value; 
                    break;   
            }else{
                if(document.getElementById('value').value == 5){
                    console.log("요일 체크 : "+$('input:checkbox[name=estimate_day]:checked').length);
                    day = new Array($('input:checkbox[name=estimate_day]:checked').length);
                    console.log("day size : "+day.length);
                    $("input[name=estimate_day]:checked").each(function(i){   
                        console.log("return");
                        console.log("day size : "+day.length);
                        day[i] = $(this).val(); 
                    });
                    console.log("day size : "+day.length);
                    console.log('day Array : '+day);
                }else{
                    if(document.getElementById('value').value == 6){
                        inputValue[5] = document.getElementsByClassName('selectLi')[i].childNodes[0].childNodes[0].value
                    }else{
                        inputValue[Number(document.getElementById('value').value)] = document.getElementsByClassName('selectLi')[i].childNodes[0].childNodes[0].value
                        console.log("---value 값 확인 : "+value[Number(document.getElementById('value').value)]);
                        console.log("---inputValue 값 확인 : "+inputValue);
                        console.log("inputValue 길이 : "+inputValue.length);
                        break;
                    }
                }
            }
        }
        
    }
    
    if(execute){    
        if(!!document.getElementById('chooseOption')){
            document.getElementById('chooseOption').remove();
        }
    }else{
        if(!!document.getElementById('chooseOption')){
            document.getElementById('chooseOption').remove();
        }
        if(Number(document.getElementById('value').value)==7){
            console.log("execute if문 value = 7");  
        }else{
            let p = document.createElement('p');
            p.innerText = `옵션을 선택해주세요.`;
            p.setAttribute('id', 'chooseOption');
            document.getElementById('selectMainBox').appendChild(p);
            return;
        }
    }
    if(document.getElementById('value').value == 0 && value[0] == document.getElementsByClassName('selectLi').length-1){
        if(document.getElementById('inputEtc').value.trim().length > 0 ){
            console.log("if문 진입");
        }else{
            let inputEtcPtag = document.createElement('p');
            inputEtcPtag.innerText = `옵션을 선택해주세요.`;
            inputEtcPtag.setAttribute('id', 'inputEtcPtag');
            document.getElementById('lastSelectLi').appendChild(inputEtcPtag);
            document.getElementsByClassName("selectLi")[4].childNodes[0].style.height = "140px";
            return;
        }
    }
    if(Number(document.getElementById('value').value)==7){
        console.log('셀렉트 박스 버튼 진입');
        console.log("1번 : "+document.getElementsByClassName('selectOption')[0].value);
        console.log("2번 : "+document.getElementsByClassName('selectOption')[1].value);
        console.log("3번 : "+document.getElementsByClassName('selectOption')[2].value);
        if(document.getElementsByClassName('selectOption')[0].value == "시/도"){
            console.log("if문 1번째 진입!");
            if(!!document.getElementById('chooseOption')){
                document.getElementById('chooseOption').remove();
            }
            let p = document.createElement('p');
            p.innerText = `옵션을 선택해주세요.`;
            p.setAttribute('id', 'chooseOption');
            document.getElementById('selectMainBox').appendChild(p);
            return;
        }
        if(document.getElementsByClassName('selectOption')[1].value == "시/군/구"){
            console.log("if문 2번째 진입!");
            if(!!document.getElementById('chooseOption')){
                document.getElementById('chooseOption').remove();
            }
            let p = document.createElement('p');
            p.innerText = `옵션을 선택해주세요.`;
            p.setAttribute('id', 'chooseOption');
            document.getElementById('selectMainBox').appendChild(p);
            return;
        }
        if(document.getElementsByClassName('selectOption')[2].value == "읍/면/동"){
            console.log("if문 3번째 진입!");
            if(!!document.getElementById('chooseOption')){
                document.getElementById('chooseOption').remove();
            }
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


    switch(document.getElementById('value').value){
        case '1':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `제작 옵션을 선택해주세요.`;
            document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_agegroup" class="radio" value="원본"><p>원본</p></div>';
            document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_agegroup" class="radio" value="보정본"><p>보정본</p></div>';
            document.getElementsByClassName('selectLi')[2].innerHTML = '<div><input type="radio" name="estimate_agegroup" class="radio" value="앨범제작"><p>앨범제작</p></div>';
            document.getElementsByClassName('selectLi')[3].innerHTML = '<div><input type="radio" name="estimate_agegroup" class="radio" value="액자제작"><p>액자제작</p></div>';
            document.getElementsByClassName('selectLi')[4].innerHTML = '<div><input type="radio" name="estimate_agegroup" class="radio" value="원본+보정본"><p>원본+보정본</p></div>';
            label1.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_agegroup" class="radio" value="모두 다"><p>모두 다</p></div></li>`;
            document.getElementById('selectUl').appendChild(label1);
            document.getElementById('value').value = 2;
            count = 1;
            document.getElementById('selectBarAni').animate([    
                { width: "75px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
            document.getElementById('selectBarPercent').innerText = '17%';
            break;
        case '2':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `어떤 촬영을 원하시나요?`;
            document.getElementsByClassName('selectLi')[0].innerHTML = `<div id="firstSelectLi"><input type="radio" name="estimate_ugender" class="radio" value="본식스냅"><p>본식스냅</p></div>`;
            document.getElementsByClassName('selectLi')[1].innerHTML = `<div id="lastSelectLi"><input type="radio" name="estimate_ugender" class="radio" value="서브스냅"><p>서브스냅</p></div>`;
            document.getElementsByClassName('selectLi')[5].remove();
            document.getElementsByTagName('label')[5].remove();
            document.getElementsByClassName('selectLi')[4].remove();
            document.getElementsByTagName('label')[4].remove();
            document.getElementsByClassName('selectLi')[3].remove();
            document.getElementsByTagName('label')[3].remove();
            document.getElementsByClassName('selectLi')[2].remove();
            document.getElementsByTagName('label')[2].remove();
            document.getElementById('value').value = 3;
            count = 2;
            document.getElementById('selectBarAni').animate([    
                { width: "150px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
            document.getElementById('selectBarPercent').innerText = '34%';
            break;
        case '3':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `2인 촬영을 원하시나요?`;
            document.getElementsByClassName('selectLi')[0].innerHTML = `<div id="firstSelectLi"><input type="radio" name="estimate_mgender" class="radio" value="무관"><p>무관</p></div>`;
            document.getElementsByClassName('selectLi')[1].innerHTML = `<div><input type="radio" name="estimate_mgender" class="radio" value="네"><p>네</p></div>`;
            label1.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_mgender" class="radio" value="아니요"><p>아니요</p></div></li>`;
            document.getElementById('selectUl').appendChild(label1);
            document.getElementById('value').value = 4;
            count = 3;
            document.getElementById('selectBarAni').animate([    
                { width: "225px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '51%';
            break;
        case '4':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `평일에 하나요 주말에 하나요?`;
            document.getElementsByClassName('selectLi')[0].innerHTML = `<div id="firstSelectLi"><input type="checkbox" name="estimate_day" class="radio" value="1"><p>월요일</p></div>`;
            document.getElementsByClassName('selectLi')[1].innerHTML = `<div><input type="checkbox" name="estimate_day" class="radio" value="2"><p>화요일</p></div>`;
            document.getElementsByClassName('selectLi')[2].innerHTML = `<div><input type="checkbox" name="estimate_day" class="radio" value="3"><p>수요일</p></div>`;
            label1.innerHTML = `<li class="selectLi"><div><input type="checkbox" name="estimate_day" class="radio" value="4"><p>목요일</p></div></li>`;
            document.getElementById('selectUl').appendChild(label1);
            label2.innerHTML = `<li class="selectLi"><div><input type="checkbox" name="estimate_day" class="radio" value="5"><p>금요일</p></div></li>`;
            document.getElementById('selectUl').appendChild(label2);
            label3.innerHTML = `<li class="selectLi"><div><input type="checkbox" name="estimate_day" class="radio" value="6"><p>토요일</p></div></li>`;
            document.getElementById('selectUl').appendChild(label3);
            label4.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="checkbox" name="estimate_day" class="radio" value="0"><p>일요일</p></div></li>`;
            document.getElementById('selectUl').appendChild(label4);
            document.getElementById('value').value = 5;
            count = 4;
            document.getElementById('selectBarAni').animate([    
                { width: "300px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '68%';
            break;
        case '5':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `결혼식 시간대는 언제인가요?`;
			document.getElementsByClassName('selectLi')[0].innerHTML = `<div id="firstSelectLi"><input type="radio" name="estimate_time" class="radio" value="ABC"><p>오전 (9~12시)</p></div>`;
			document.getElementsByClassName('selectLi')[1].innerHTML = `<div><input type="radio" name="estimate_time" class="radio" value="DEF"><p>오후 (12~3시)</p></div>`;
			document.getElementsByClassName('selectLi')[2].innerHTML = `<div><input type="radio" name="estimate_time" class="radio" value="HIJ"><p>늦은 오후 (3~6시)</p></div>`;
			document.getElementsByClassName('selectLi')[3].innerHTML = `<div><input type="radio" name="estimate_time" class="radio" value="KLM"><p>저녁 (6~9시)</p></div>`;
			document.getElementsByClassName('selectLi')[4].innerHTML = `<div id="lastSelectLi"><input type="radio" name="estimate_time" class="radio" value="NOP"><p>늦은 저녁 (9시 이후)</p></div>`;
			document.getElementsByClassName('selectLi')[6].remove();
			document.getElementsByTagName('label')[6].remove();
			document.getElementsByClassName('selectLi')[5].remove();
			document.getElementsByTagName('label')[5].remove();
            document.getElementById('value').value = 6;
            count = 5;
            document.getElementById('selectBarAni').animate([    
                { width: "375px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '85%';
            break;
        case '6':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `희망 지역을 선택해주세요.`;
            document.getElementById('selectUl').style.display = 'none';
            let div = document.createElement('div');
            div.setAttribute('id','selectOptionBox');   
                div.innerHTML += `
                <select name="si" class="selectOption" onchange="selectFunction()">
                <option disabled selected>시/도</option>
                <option value="서울">서울</option>
                <option value="인천">인천</option>
                <option value="경기">경기</option>
                </select>
                `;
                div.innerHTML += `
                <select name="gu" class="selectOption" disabled onchange="secondSelectFunction()">
                <option disabled selected>시/군/구</option>
                <option value="과천시">과천시</option>
                <option value="군포시">군포시</option>
                <option value="부천시">부천시</option>
                <option value="화성시">화성시</option>
                </select>
                `;
                div.innerHTML += `
                <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
                <option disabled selected>읍/면/동</option>
                <option value="개포동">개포동</option>
                <option value="논현동">논현동</option>
                <option value="대치동">대치동</option>
                <option value="청담동">청담동</option>
                </select>
                `;


            document.getElementById('selectUl').before(div);
            
            document.getElementById('value').value = 7;
            count = 6;
            document.getElementById('selectBarAni').animate([    
                { width: "450px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '99%';
            break;
        case '7':
            console.log("case 7 진입 성공");
            console.log(inputValue);
            console.log(inputValue.length);
            console.log(category);
            console.log(user);
            const userEmail = [user];
            if(user == null || user == ""){
            	alert("세션이 끊겼습니다. 다시 로그인해주세요.");
                location.href="/";
            }
            try{
                const url = '/service/serviceRequest';
                const config = {
                    method: "post",
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        category : category,
                        Array : inputValue,
                        day : day,
                        region : region,
                        userEmail : userEmail
                    })
                }
                fetch(url, config).then(result=>{
                    console.log("fetch 진입성공!");  
                    location.href="/service/serviceRequest";
                    return;
                })
            }catch(err){
                console.log(err);
            }
            break;
        }
    if(document.getElementById('value').value >=1){
        document.getElementById('prevBtn').removeAttribute("hidden");
    }else{
        console.log("````````````````````````````");
        document.getElementById('prevBtn').setAttribute('hidden', "hidden");
    }
    console.log(`${Number(document.getElementById('value').value)}번째 배열의 위치 : `+value[Number(document.getElementById('value').value)-1]);
    console.log(`${Number(document.getElementById('value').value)}번째 배열의 값 : `+inputValue[Number(document.getElementById('value').value)-1]);
    console.log('배열의 모든 값 : '+value);
    console.log("nextBtn 함수 끝````````````````````````````");
    window.scrollTo({top:220, left:0, behavior:'smooth'});
}
function prevPage(){
    console.log("prevBtn 함수 시작````````````````````````````");
    console.log("hidden value 값 : "+Number(document.getElementById('value').value));
    console.log("hidden value 값 : "+typeof Number(document.getElementById('value').value));
    console.log("ul태그 자식 개수 : "+document.getElementById('selectUl').childElementCount);
    console.log("selectLi의 크기 : "+document.getElementsByClassName('selectLi').length);
    for(let i=0; i<document.getElementsByClassName('selectLi').length; i++){
        console.log(`${i}번째 : `+document.getElementsByClassName('selectLi')[i].childNodes[0].childNodes[0].checked);
        
    }
    if(!!document.getElementById('chooseOption')){
        document.getElementById('chooseOption').remove();
    }
    let label1 = document.createElement('label');
    let label2 = document.createElement('label');
    let label3 = document.createElement('label');
    let label4 = document.createElement('label');

    switch(document.getElementById('value').value){
        case '2': 
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `어떤 결혼식장인가요?`;
            document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_purpose" class="radio" value="웨딩홀" onclick="etcRedo()"><p>웨딩홀</p></div>';
            document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_purpose" class="radio" value="호텔/컨벤션" onclick="etcRedo()"><p>호텔/컨벤션</p></div>';
            document.getElementsByClassName('selectLi')[2].innerHTML = '<div><input type="radio" name="estimate_purpose" class="radio" value="하우스 웨딩" onclick="etcRedo()"><p>하우스 웨딩</p></div>';
            document.getElementsByClassName('selectLi')[3].innerHTML = '<div><input type="radio" name="estimate_purpose" class="radio" value="교회/성당" onclick="etcRedo()"><p>교회/성당</p></div>';
            document.getElementsByClassName('selectLi')[4].innerHTML = `<div id="lastSelectLi"><input type="radio" name="estimate_purpose" class="radio" value="" onclick="etcEvent()" id="etc"><p>기타</p></div>`;
            document.getElementsByClassName('selectLi')[5].remove();
            document.getElementsByTagName('label')[5].remove();
            document.getElementById('value').value = 1;
            count = 1;
            document.getElementById('selectBarAni').animate([    
                { width: "0px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '0%';
            break;
        case '3':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `제작 옵션을 선택해주세요.`;
            document.getElementsByClassName('selectLi')[0].innerHTML = '<div id="firstSelectLi"><input type="radio" name="estimate_agegroup" class="radio" value="원본"><p>원본</p></div>';
            document.getElementsByClassName('selectLi')[1].innerHTML = '<div><input type="radio" name="estimate_agegroup" class="radio" value="보정본"><p>보정본</p></div>';
            label1.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_agegroup" class="radio" value="앨범제작"><p>앨범제작</p></div></li>`;
            document.getElementById('selectUl').appendChild(label1);
            label2.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_agegroup" class="radio" value="액자제작"><p>액자제작</p></div></li>`;
            document.getElementById('selectUl').appendChild(label2);
            label3.innerHTML = `<li class="selectLi"><div><input type="radio" name="estimate_agegroup" class="radio" value="원본+보정본"><p>원본+보정본</p></div></li>`;
            document.getElementById('selectUl').appendChild(label3);
            label4.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="radio" name="estimate_agegroup" class="radio" value="모두 다"><p>모두 다</p></div></li>`;
            document.getElementById('selectUl').appendChild(label4);
            document.getElementById('value').value = 2;
            count = 2;
            document.getElementById('selectBarAni').animate([    
                { width: "75px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '17%';
            break;
        case '4':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `어떤 촬영을 원하시나요?`;
            document.getElementsByClassName('selectLi')[0].innerHTML = `<div id="firstSelectLi"><input type="radio" name="estimate_ugender" class="radio" value="본식스냅"><p>본식스냅</p></div>`;
            document.getElementsByClassName('selectLi')[1].innerHTML = `<div id="lastSelectLi"><input type="radio" name="estimate_ugender" class="radio" value="서브스냅"><p>서브스냅</p></div>`;
            document.getElementsByClassName('selectLi')[2].remove();
            document.getElementsByTagName('label')[2].remove();
            document.getElementById('value').value = 3;
            count = 3;
            document.getElementById('selectBarAni').animate([    
                { width: "150px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '34%';
            break;
        case '5':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `2인 촬영을 원하시나요?`;
            document.getElementsByClassName('selectLi')[0].innerHTML = `<div id="firstSelectLi"><input type="radio" name="estimate_mgender" class="radio" value="무관"><p>무관</p></div>`;
            document.getElementsByClassName('selectLi')[1].innerHTML = `<div><input type="radio" name="estimate_mgender" class="radio" value="네"><p>네</p></div>`;
            document.getElementsByClassName('selectLi')[2].innerHTML = `<div id="lastSelectLi"><input type="radio" name="estimate_mgender" class="radio" value="아니요"><p>아니요</p></div>`;
            document.getElementsByClassName('selectLi')[6].remove();
            document.getElementsByTagName('label')[6].remove();
            document.getElementsByClassName('selectLi')[5].remove();
            document.getElementsByTagName('label')[5].remove();
            document.getElementsByClassName('selectLi')[4].remove();
            document.getElementsByTagName('label')[4].remove();
            document.getElementsByClassName('selectLi')[3].remove();
            document.getElementsByTagName('label')[3].remove();
            document.getElementById('value').value = 4;
            count = 4;
            document.getElementById('selectBarAni').animate([    
                { width: "255px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '51%';
            break;
        case '6':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `평일에 하나요 주말에 하나요?`;
			document.getElementsByClassName('selectLi')[0].innerHTML = `<div id="firstSelectLi"><input type="checkbox" name="estimate_day" class="radio" value="1"><p>월요일</p></div>`;
			document.getElementsByClassName('selectLi')[1].innerHTML = `<div><input type="checkbox" name="estimate_day" class="radio" value="2"><p>화요일</p></div>`;
			document.getElementsByClassName('selectLi')[2].innerHTML = `<div><input type="checkbox" name="estimate_day" class="radio" value="3"><p>수요일</p></div>`;
			document.getElementsByClassName('selectLi')[3].innerHTML = `<div><input type="checkbox" name="estimate_day" class="radio" value="4"><p>목요일</p></div>`;
			document.getElementsByClassName('selectLi')[4].innerHTML = `<div><input type="checkbox" name="estimate_day" class="radio" value="5"><p>금요일</p></div>`;
			label1.innerHTML = `<li class="selectLi"><div><input type="checkbox" name="estimate_day" class="radio" value="6"><p>토요일</p></div></li>`;
			document.getElementById('selectUl').appendChild(label1);
			label2.innerHTML = `<li class="selectLi"><div id="lastSelectLi"><input type="checkbox" name="estimate_day" class="radio" value="0"><p>일요일</p></div></li>`;
			document.getElementById('selectUl').appendChild(label2);
            document.getElementById('value').value = 5;
            count = 5;
            document.getElementById('selectBarAni').animate([    
                { width: "300px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '68%';
            break;
        case '7':
            document.getElementById('selectMainBox').getElementsByTagName('h2')[0].innerText = `결혼식 시간대는 언제인가요?`;
            document.getElementById('selectUl').removeAttribute('style');
            document.getElementById('selectOptionBox').remove();
            document.getElementById('value').value = 6;
            count = 6;
            document.getElementById('selectBarAni').animate([    
                { width: "375px"} 
            ], {duration: 300,
                fill: "forwards", easing: "ease-out"});
                document.getElementById('selectBarPercent').innerText = '85%';
            break;
    }
    if(document.getElementById('value').value ==0){
        console.log("````````````````````````````");
        document.getElementById('prevBtn').setAttribute('hidden', "hidden");
    }
    console.log(`${Number(document.getElementById('value').value)}번째 배열 : `+value[Number(document.getElementById('value').value)-1]);
    console.log('배열의 모든 값 : '+value);
    if(document.getElementById('value').value == 5){
        console.log("day : "+day);
        for(let i=0; i<day.length; i++){
            console.log(day[i]-1);
            document.getElementsByClassName('radio')[day[i]-1].setAttribute('checked', 'checked');
        }
    }else{
        document.getElementsByClassName('radio')[value[Number(count)]].setAttribute('checked', 'checked');
    }
    if(value[Number(document.getElementById('value').value)] == document.getElementsByClassName('selectLi').length-1){
        console.log(document.getElementById('lastSelectLi').childNodes[0]);
        document.getElementById('lastSelectLi').childNodes[0].click();
    }
    console.log("prevBtn 함수 끝````````````````````````````");
    window.scrollTo({top:220, left:0, behavior:'smooth'});
}
function etcRedo(){
    document.getElementsByClassName('selectLi')[4].innerHTML = `<div id="lastSelectLi"><input type="radio" name="radio" class="radio" id="etc" onclick="etcEvent()"><p>기타</p></div>`;
}

function etcEvent(){
        console.log(document.getElementsByClassName("selectLi")[4].childNodes[0].childNodes[0]);
        document.getElementsByClassName('selectLi')[4].innerHTML = `<div id="lastSelectLi"><input type="radio" name="estimate_purpose" class="radio" onclick="etcEvent()" checked><p>기타</p>
        <input type="text" placeholder="직접 입력" id="inputEtc" onfocus="inputEtcEvent()" value=""/></div>`;
        document.getElementsByClassName("selectLi")[4].childNodes[0].style.height = "120px";
}
function inputEtcEvent(){
    console.log('focus 진입');
    document.getElementById('inputEtc').onkeydown = ()=>{
        console.log('키입력 성공');
        console.log('document.querySelector :'+document.querySelector('.radio'));
        if(!!document.getElementById('inputEtcPtag')){
            document.getElementById('inputEtcPtag').remove();
        }
    } 
}
document.getElementById('selectUl').onclick = ()=>{
    if(!!document.getElementById('chooseOption')){
        document.getElementById('chooseOption').remove();
    }
}
document.getElementsByClassName('selectOption').onchange = ()=>{
    if(!!document.getElementById('chooseOption')){
        document.getElementById('chooseOption').remove();
    }
}
function selectFunction(){
    document.getElementsByClassName('selectOption')[0].style.color = "black";
    if(!!document.getElementById('chooseOption')){
        document.getElementById('chooseOption').remove();
    }
    console.log("선택한 시/도 : "+document.getElementsByClassName('selectOption')[0].value);
                switch(document.getElementsByClassName('selectOption')[0].value){
                    case '서울':
                        document.getElementsByClassName('selectOption')[1].innerHTML = `
                        <select name="gu" class="selectOption" disabled onchange="secondSelectFunction()">
                        <option disabled selected>시/군/구</option>
                        <option value="강남구">강남구</option>
                        <option value="관악구">관악구</option>
                        <option value="동작구">동작구</option>
                        <option value="영등포구">영등포구</option>
                        </select>
                        `;
                        
                        break;
                    case '인천':
                        document.getElementsByClassName('selectOption')[1].innerHTML = `
                        <select name="gu" class="selectOption" disabled onchange="secondSelectFunction()">
                        <option disabled selected>시/군/구</option>
                        <option value="미추홀구">미추홀구</option>
                        <option value="연수구">연수구</option>
                        <option value="남동구">남동구</option>
                        <option value="부평구">부평구</option>
                        </select>
                        `;
                        
                        break;
                    case '경기':
                        document.getElementsByClassName('selectOption')[1].innerHTML = `
                        <select name="gu" class="selectOption" disabled onchange="secondSelectFunction()">
                        <option disabled selected>시/군/구</option>
                        <option value="과천시">과천시</option>
                        <option value="군포시">군포시</option>
                        <option value="부천시">부천시</option>
                        <option value="화성시">화성시</option>
                        </select>
                        `;
                        
                        break;
                }
                
    document.getElementsByClassName('selectOption')[1].disabled = false;
    document.getElementsByClassName('selectOption')[1].selected = "시/군/구";    
    document.getElementsByClassName('selectOption')[1].style.color = "#b5b5b5"; 
    document.getElementsByClassName('selectOption')[2].options[0].selected = "읍/동/면";
    document.getElementsByClassName('selectOption')[2].disabled = true;   
    document.getElementsByClassName('selectOption')[2].style.color = "#b5b5b5";
    region[0] = document.getElementsByClassName('selectOption')[0].value;
}
function secondSelectFunction(){
    document.getElementsByClassName('selectOption')[1].style.color = "black";
    if(!!document.getElementById('chooseOption')){
        document.getElementById('chooseOption').remove();
    }
    console.log("선택한 시/군/구 : "+document.getElementsByClassName('selectOption')[1].value);
    switch(document.getElementsByClassName('selectOption')[1].value){
        case '강남구':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="개포동">개포동</option>
            <option value="논현동">논현동</option>
            <option value="대치동">대치동</option>
            <option value="청담동">청담동</option>
            </select>
            `;
            break;
        case '관악구':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="봉천동">봉천동</option>
            <option value="신림동">신림동</option>
            </select>
            `;
            break;
        case '동작구':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="노량진동">노량진동</option>
            <option value="대방동">대방동</option>
            <option value="사당동">사당동</option>
            <option value="상도동">상도동</option>
            </select>
            `;
            break;
        case '영등포구':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="당산동">당산동</option>
            <option value="대림동">대림동</option>
            <option value="신길동">신길동</option>
            <option value="여의도동">여의도동</option>
            </select>
            `;
            break;
    }
    switch(document.getElementsByClassName('selectOption')[1].value){
        case '과천시':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="갈현동">갈현동</option>
            <option value="문원동">문원동</option>
            <option value="부림동">부림동</option>
            <option value="중앙동">중앙동</option>
            </select>
            `;
            break;
        case '군포시':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="송부동">송부동</option>
            <option value="대야동">대야동</option>
            <option value="수리동">수리동</option>
            <option value="오금동">오금동</option>
            </select>
            `;
            break;
        case '부천시':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="심곡본동">심곡본동</option>
            <option value="중동">중동</option>
            <option value="상동">상동</option>
            <option value="소사본동">소사본동</option>
            </select>
            `;
            break;
        case '화성시':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="기배동">기배동</option>
            <option value="반월동">반월동</option>
            <option value="새솔동">새솔동</option>
            <option value="진안동">진안동</option>
            </select>
            `;
            break;
    }
    switch(document.getElementsByClassName('selectOption')[1].value){
        case '미추홀구':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="숭의동">숭의동</option>
            <option value="도화동">도화동</option>
            <option value="주안동">주안동</option>
            <option value="학익동">학익동</option>
            </select>
            `;
            break;
        case '연수구':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="동춘동">동춘동</option>
            <option value="선학동">선학동</option>
            <option value="송도동">송도동</option>
            <option value="청학동">청학동</option>
            </select>
            `;
            break;
        case '남동구':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="구월동">구월동</option>
            <option value="간석동">간석동</option>
            <option value="만수동">만수동</option>
            <option value="남촌동">남촌동</option>
            </select>
            `;
            break;
        case '부평구':
            document.getElementsByClassName('selectOption')[2].innerHTML = `
            <select name="dong" class="selectOption" disabled onchange="thirdSelectFunction()">
            <option disabled selected>읍/면/동</option>
            <option value="갈산동">갈산동</option>
            <option value="삼산동">삼산동</option>
            <option value="부평동">부평동</option>
            <option value="부개동">부개동</option>
            </select>
            `;
            break;
        }
        document.getElementsByClassName('selectOption')[2].disabled = false;
    document.getElementsByClassName('selectOption')[2].style.selected = "읍/면/동";
    document.getElementsByClassName('selectOption')[2].style.color = "#b5b5b5";
    region[1] = document.getElementsByClassName('selectOption')[1].value;
}

function thirdSelectFunction(){
    console.log("선택한 읍/면/동 : "+document.getElementsByClassName('selectOption')[2].value);
    document.getElementsByClassName('selectOption')[2].style.color = "black";
    region[2] = document.getElementsByClassName('selectOption')[2].value;
    if(!!document.getElementById('chooseOption')){
        document.getElementById('chooseOption').remove();
    }
}