//헤더 스크롤 JS
window.addEventListener("scroll", handleScroll);

function handleScroll(event) {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 70) {
    var headerBoxElements = document.getElementsByClassName("header_box");
    for (var i = 0; i < headerBoxElements.length; i++) {
      headerBoxElements[i].style.borderBottom = "1px solid rgb(228, 228, 228)";
    }
  } else {
    var headerBoxElements = document.getElementsByClassName("header_box");
    for (var i = 0; i < headerBoxElements.length; i++) {
      headerBoxElements[i].style.borderBottom = "none";
    }
  }
}




