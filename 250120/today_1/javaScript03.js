/*let userB = window.prompt("교통비를 입력해주세요");
const userD = window.prompt("식비도 입력해주세요");
const userFood = window.prompt("음료수도 입력해주세요");

let su = userB + userD + userFood;

//형변환
Number = console.log(su);
*/

let car, food, cafe;
//형을 문자로 변환하고....
car = parseInt(prompt("교통비를 입력해주세요"));
food = parseInt(prompt("식비도 입력해주세요"));
cafe = parseInt(prompt("음료수도 입력해주세요"));

let total = car + food + cafe;
// console.log(typeof no);
let result = total < 1000;

const plus = total - 1000;
const minus = 1000 - total;

result = result ? `${minus}남았습니다. 굿굿` : `${plus}베드베드 지지`;

console.log(result);
