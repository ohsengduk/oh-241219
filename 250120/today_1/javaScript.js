/*
const x = 10;
const y = 4;
let result;
result = x / y;
// 몫(실수까지 나옮)
console.log(result);

result = x % y;
// 나머지(정수인 상태로 보여줌: 짝수 홀수 구할 때 유용)
console.log(result);


// 재 할당 할 경우 let사용

let a = 10;
console.log(a);

a = ++a;
a = --a;

console.log(a);

let x = 10;
let y = 4;
let result;

let x = 10,
  y = 4,
  result;

result = x + --y;
console.log(result);
console.log(y);


//가비지:쓰레기 + Collector:주어담음 => GC (가비지컬렉터) wy? 메모리 공간의 활용 때문에... 변수 생성양에 따라서 컴퓨터 원활한 구동을 위해서....

const actor = "현빈";
const movie = "하얼빈";

//const result = actor + "님은" + movie + "에 출연하였습니다.";
const result = `${actor}님은 ${movie}에 출연하였습니다.`;
//연결연산사 (template literal:템클릿리터럴)은 `${변수}` 변수아니면문자만 인식을 한다. 코드 줄의 간결화를 위해서 하는것이다.
console.log(result);


//---> 복합 대입 연산자
//변술을 축약해서 사용할 수있다.
let x = 3,
  y = 3;
// y를 재 설정함
//y = x + 3;
//더해서 재 할당 시킴 코드 줄을 더 줄일수 있음.
//y += x;
//y *= x;
y %= x; //몫은 1 나머지는 0 에 값이 출력이 된다.
console.log(y);
*/

let str = "<table border='1'>";
//기본 값에 추가로 하는것
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>"; //2개가 동존하는 상황임

document.write(str);
/*
//비교 연산자 == ===   !==  !====
console.log(3 == "3"); //타입은 비교하지 않고 값만 비교한다.
console.log(3 === "3"); //타입까지 비교한다. 대부분 정확한 값을 비교해야 할 경우
//자동형 api 통신할 경우 서버로 값을 받았다가 서버는 들어갔다 오면 자동으로 문자로 된다. 바뀐값에 대한  형 변환에 대한 수가 많은 경우 1회적일 경우 그래서 값만 비교해야 하는 경우가 있다.

console.log(3 != "3"); //부정 연산자 부정을 의미한다.
console.log(3 !== "3"); //타입까지 비교한다. 대부분 정확한 값을 비교해야 할 경우

//논리 연산자
let a = 10,
  b = 20;

//a > 10 || b > 20;

console.log(a > 10 || b > 20);
console.log(a <= 10 || b > 20); //  || or연산자 :  2중에 하나가 참이면 참으로 인식함
console.log(a <= 10 && b > 20); //  && 엔드연산자 : 2가지 모두가 참이여야지만 된다.
*/
//삼항조건연산자 3가지 항을 가지고 조건 값을 연산을 하겠다라는 의미를 갖는다. [1항:조건식   2창:참   3항:부정]-리액트에서 많이 쓰인다.  제어문(*반복문& 조건문)에 많이 쓰인다. why? 쓰나요? 리액트 jss 독자적이 문법이 쓰인다. 문으로 끝나는 문장들을 쓸수 없다. 연산자 식을 문과 식의 개념이 틀리다.  뒤에 가면 갈 수록 3항 조건 활용도가 높아 진다.  조건문은 점점 쓰임이 적어 진다.3항 조건 연사자 사용 빈도가 높아 진다. 하지만 둘다 사용할 줄 알아야 한다.

let a = 10,
  b = 3;
//  let result = a > b ? console.log("Javascipt") : console.log("Typescript");
// 긴 내용을 줄여서 쓸 수 있다.
let result = a < b ? "Javascipt" : "Typescript";
console.log(result);

// 적정체중인지를 할수 있다. 실습하기!!!!!
