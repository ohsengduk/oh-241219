// 목표 : 사용자가 스크롤을 내렸을 때, header 배경컬러 // banner height를 변경 => 가상클래스 적용

// 1.사용자가 지금 스크롤을 내렸어!!
// > 스크롤은 브라우저가 가지고 있는 요소!!
// > 브라우저야!!! 지금 스크롤이 내려갔니?

// 2.header는 html안에서 header라는 태그를 사용하고 있는 요소야!

// 3.사용자가 스크롤을 내렸으니까 빨리 active 클래스를 header에게 적용시켜

// 브라우저가 가지고 있는 내장객체

// document.querySelector("#circle");
// 문서 => 개발자가 직접 작성한 html 문서

/* scroll event */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
    document.querySelector(".gototop").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
    document.querySelector(".gototop").classList.remove("active");
  }
});

// 슬릭 슬라이더
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    Infinity: false,
    dots: true,
    speed: 300,

    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slideToScroll: 2,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slideToScroll: 1,
          speed: 300,
          dots: true,
          infinite: false,
        },
      },
    ],
  });
});

/*
항상 말로 표현해 보기 : 자바 스크립트에게 이벤트 대상이 누구인지 알려주기

이벤트 대상이 되어지는 요소 (*html에서 찾아온 태그 혹은 클래스 혹은 아이디 선택자에게 어떤 이벤트를 부여할 것인가 결정)

이벤트를 첫번째 적용할때, 두번째 적용할때 상이하게 작동하도록 제어

홀수 : x
짝수 : 3선
모양으로 변경 되어야 한다.

변수 작은 방을 만들어서 애가 애야 를 알려줬야 한다.

*/

// trigger 이벤트
const trigger = document.querySelector(".trigger");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  document.querySelector(".gnb").classList.toggle("active");
});

// 메뉴이벤트

/*무엇을 뭔가 할 것인가? 
우선 찾아오기
*/
const menus = document.querySelectorAll(".gnb a, .gototop");
// console.log(menus);

menus.forEach((menu) => {
  menu.addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("나는 앵가");
    const targetId = this.getAttribute("href");
    // console.log(targetId);

    // const targetElemet = document.querySelector(targetId); 밑에 선언 한것에 대한 재 선언 재 사용성이 var 만 되는것이다 let 도 안됨!!!!
    // console.log(targetElemet);
    //

    const targetElemet = document.querySelector(targetId);
    const targetPosition = targetElemet.offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });
});
