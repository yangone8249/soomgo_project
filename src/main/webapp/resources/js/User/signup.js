// 동의 모두선택 / 해제
let genderValue = "";
const agreeChkAll = document.querySelector('input[name=agree_all]');
agreeChkAll.addEventListener('change', (e) => {
  let agreeChk = document.querySelectorAll('input[name=agree]');
  for (let i = 0; i < agreeChk.length; i++) {
    agreeChk[i].checked = e.target.checked;
  }
});

$("#pwCheck").on("click", function () {
  if ($("#userpw").attr("type") == "password") {
    $("#userpw").attr("type", "text");
    $($(this)).text("숨김");
  } else {
    $("#userpw").attr("type", "password");
    $($(this)).text("표시");
  }
});

var nameInput = document.getElementById("username");
var nameError = document.getElementById("name-error");
let reg_name = /^[가-힣]{2,6}$/;
nameInput.addEventListener("input", function () {
  if (
    nameInput.value === null ||
    nameInput.value === "" ||
    !reg_name.test(nameInput.value)
  ) {
    nameError.style.display = "block";
    nameInput.style.outline = "2px solid rgba(255, 0, 0, 0.55)";
    return false;
  } else {
    nameError.style.display = "none";
    nameInput.style.outline = "2px solid rgba(127, 255, 212, 0.750)";
    return true;
  }
});

var emailInput = document.getElementById("useremail");
var emailError = document.getElementById("email-error");

emailInput.addEventListener("input", function () {
  if (emailInput.validity.valid) {
    emailError.style.display = "none";
    emailInput.style.outline = "2px solid rgba(127, 255, 212, 0.750)";
    return true;
  } else if (emailInput.value === null || emailInput.value === "") {
    emailError.style.display = "block";
    emailInput.style.outline = "2px solid rgba(255, 0, 0, 0.55)";
    return false;
  } else {
    emailError.style.display = "block";
    emailInput.style.outline = "2px solid rgba(255, 0, 0, 0.55)";
    return false;
  }
});


function checkEmail() {
  var email = $('#useremail').val();
  console.log("checkEmail 진입");
  $.ajax({
    url: './emailCheck',
    type: 'post',
    data: { email: email },
    dataType: 'json', // JSON 응답을 요청
    success: function (cnt) {
      if (cnt == 0 ) {
        console.log("cnt0입니다.");
        if(email.includes("@") && email.includes(".com")){
          $('.emailok').css("display", "block");
          $('.emailalready').css("display", "none");
        }
      } else {
        console.log("cnt1입니다.");
        $('.emailalready').css("display", "block");
        $('.emailok').css("display", "none");
        alert("중복된 아이디 입니다. 아이디를 다시 입력해주세요");
        $('#useremail').val('');
      }
    },
    error: function () {
      console.log("----------------");
    }
  });
}

var pwInput = document.getElementById("userpw");
var pwError = document.getElementById("pw-error");
let reg_pw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

pwInput.addEventListener("input", function () {
  if (pwInput.value.length < 8 || !reg_pw.test(pwInput.value)) {
    pwError.style.display = "block";
    pwInput.style.outline = "2px solid rgba(255, 0, 0, 0.55)";
    return false;
  } else {
    pwError.style.display = "none";
    pwInput.style.outline = "2px solid rgba(127, 255, 212, 0.750)";
    return true;
  }
});

var phoneInput = document.getElementById("userphone");
var phoneError = document.getElementById("phone-error");
let reg_phone = /^(?=.*?[0-9]).{11,}$/;

phoneInput.addEventListener("input", function () {
  if (
    phoneInput.value === null ||
    phoneInput.value === "" ||
    !reg_phone.test(phoneInput.value)
  ) {
    phoneError.style.display = "block";
    phoneInput.style.outline = "2px solid rgba(255, 0, 0, 0.55)";
    return false;
  } else {
    phoneError.style.display = "none";
    phoneInput.style.outline = "2px solid rgba(127, 255, 212, 0.750)";
    return true;
  }
});

var signButton = document.getElementById("signButton");
var inputs = document.querySelectorAll("#signBox input");

function checkInputs() {
  var isValid = true;

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      isValid = false;
      break;
    }
  }

  if (nameError.style.display === "block") {
    isValid = false;
  }

  if (pwError.style.display === "block") {
    isValid = false;
  }

  if (phoneError.style.display === "block") {
    isValid = false;
  }
  console.log("isValid : " + isValid);
  console.log("isValid : " + !isValid);
  signButton.disabled = !isValid;

  if (signButton.disabled) {
    signButton.style.backgroundColor = "gray";
    signButton.style.cursor = "default";
  } else {
    signButton.style.backgroundColor = "";
    signButton.style.cursor = "pointer";
  }
}

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", checkInputs);
}

checkInputs();

function validation() {
  var checkbox = $(":checkbox[value='Y']");

  for (var i = 0; i < checkbox.length; i++) {
    var $this = $(checkbox[i]);

    if (!$this.is(":checked")) {
      $this.focus();
      return false;
    }
  }

  return true;
}

signButton.addEventListener("click", function (event) {
  if (!validation()) {
    event.preventDefault();
    alert('약관에 동의해야 회원가입을 진행할 수 있습니다.');
  } else {
    console.log("회원가입 처리");
    // 필요한 작업 수행
  }
});
