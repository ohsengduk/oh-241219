//자바스크립트에 호이스팅 원칙

function a() {
  console.log(b);

  let b;
  b = function b() {};

  console.log(b);
  b = "bbb";

  console.log(b);
  console.log(b);
}
a();
//스코프 찾아보기
//파이어 폭스 배포/ 랫닛파일 배포
