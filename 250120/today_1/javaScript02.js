let currentYear, birthYear, age;

currentYear = 2025;
birthYear = prompt("당신이 태어난 해는, 2000");
age = currentYear - birthYear + 1;
// - 연산자가 들어가서 숫자로 변환했지만, + 였다면 문자로 인식을 했을 것이다.
// 형을 변환하여 작업을 해 줬야 한다. : 그거에 대한 답은 gpt에 물어보자!!!!
console.log(typeof birthYear);
console.log(age);
