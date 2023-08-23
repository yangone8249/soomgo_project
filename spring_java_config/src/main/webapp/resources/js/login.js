var emailInput = document.getElementById("useremail");
var emailError = document.getElementById("email-error");

emailInput.addEventListener("input", function() {
  if (emailInput.validity.valid) {
    emailError.style.display = "none";
  }else {
    emailError.style.display = "block";
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