/*
자바스크립트 코드를 작성 혹은 생성 -> 컴퓨터 메모리공간=> 객체 생성 => 실행 컨텍스트 => execution context: 개발자 현제 작성 혹은 생성 변수(식별자)가 어떤 것이 있는지, 실행시켜야 하는데 함수는 무엇인지 등등의 장보를 저장해 놓고 있음!! 

 execution context => 어떤 코드를 먼저 실행해야하는가에 대한 우선순위를 결정하기 위한 목적

컴퓨터 > 자바스크립트 어떤 곳에서 어떤 방시으로 실행되는지 이해!!

 컴퓨터 공간> stack =>쌓다 //Queue=> 랜더링 되기까지 기다리고 Q 대기열
 설겆이 구고 가장 나중에 들어 온 아이를  
 엘리베이터 => 스텍구조
 10층 먼저기다리고 있던 사람이 먼저 엘리베이터
엘리베이터 뒤쪽 > 가장 나중에 엘리베이터 탑승


call Stack : 자바스크립튼 명령문 처리하는 공간
Variable Envirommet : 환경변수 // 현재 실행, 컨텍스트 내 변수명, 함수 정보, 
실행컨택스트 내 특정함수가 호출 혹은 실행되는 순간 해당 함수를 스냅샷의 형태의 저장!!


Snapshot: 일시정지 사진
Lexical : 사전적인 = "사전" 답사


전처리 환경
LesicalEnvironment: 초기에는 variableEnviromment와 동일한 값으로 시작하지만, 특정 함수를 호출하면 호출

인바리럴먼트레코드와/ 아웃터인바리럴먼트레퍼런스

인바리럴먼트레코드-> 현재실행중이 정보값을 알고 있다.
아웃터->현재실행코드들의외부에 영향을 받고있는지... 누구의 영향을 받고 있는지... 

ThisBinding: 현재변수 || 식별자가 가리켜야 하는 대상 객체가 누구인지에 대해 정보값을 가지고 있음



//전역변수
let a = 1;

function outer() {
  function inner() {
    console.log(a);
    a = 3; //재할당
  }
  inner();
  console.log(a);
}



outer();
console.log(a);
// 콜스텍에 쌓인 순서대로 출력이 된다.

*/

//호이스팅=우물 = 무언가를 끌어 온리다!. 식별자만 끌어 온다 식별자의 값은 가져오지 않는다.
functiona a(){
  let x = 1;
  console.log(x);
  x;
  console.log(x);
  x = 2;
  console.log(x);  
}
a();

//실행 컨텐스티가 적용이 되어서....
functiona a(){
  let x; 
  x;

  x= 1;
  console.log(x);
  console.log(x);
  
  x = 2;
  console.log(x);  
}

a();