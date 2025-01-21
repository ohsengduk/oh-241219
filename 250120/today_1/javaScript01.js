/*사용자에게 이름,키 몸무게

적정체중 = (본인키 - 100)* 0.9
+, - 1 5kg 적정체중 => 초과 || 미달
*/

const userName = window.prompt("😁 이름을 알려주세요 ");
const userHeight = window.prompt("🤞 키 알려주세요 ");
const userWeight = window.prompt("😊 몸무게 알려주세요 ");

// console.log(userName, userHeight, userWeight);

const normalwight = (userHeight - 100) * 0.9;
//console.log(normalwight);

let result = userWeight >= normalwight - 5 && userWeight <= normalwight + 5;
result = result ? `적정체중입니다!` : `적정체중이 아닙니다.`;

// console.log(`${userName}님`);
document.write(`${userName}님${result}`);
