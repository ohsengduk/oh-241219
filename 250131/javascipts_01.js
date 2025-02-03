/* 
console.log(document.querySelector("h1").innerText);
console.log(document.querySelector("#desc").innerHTML);

console.log(document.querySelector("#profile"));
console.log(document.querySelector(".imgSrc")); //단일 클래스 사용
console.log(document.querySelectorAll(".user")); //복수의 클래스 All-유사배열의 형태로 값이 나온다.

console.log(document.getElementById("profile"));
console.log(document.getElementsByClassName("imgSrc"));
console.log(document.getElementsByTagName("h1"));

console.log(document.querySelector("#desc").innerHTML);
console.log(document.querySelector("#desc").innerText);
console.log(document.querySelector("#desc").textContent);

// title.addEventListener
title.onclick = () => {
  title.innerText = "나의 프로필";
  };
  
  // document.querySelector("h1").innerText;
  */

const title = document.querySelector("h1");
const userName = document.querySelectorAll("#desc > p")[0];
const pfimg = document.querySelector("#profile > img");

console.log(profile);

console.log(userName);

title.addEventListener("click", () => {
  title.innerText = "마이 프로필";
  title.style.background = "#000";
  title.style.color = "#fff";
});

userName.addEventListener("click", () => {
  userName.innerHTML = "이름 : <b>태연</b>";
  pfimg.src = "https://cdn.slist.kr/news/photo/202107/265403_441389_657.jpg";

  if (!userName.classList.contains("active")) {
    userName.classList.add("active");
  } else {
    userName.classList.remove("active");
  }

  // userName.classList.add("active");
});

// console.log(document.querySelectorAll("#desc p")[0].classList);

// console.log(userName.className.contains("active"));
