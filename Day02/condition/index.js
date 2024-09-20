// 조건문 ( 조건에 맞으면 코드 실행 )
// if - else 문
// const num = Number(prompt("숫자 입력"));

// if (num > 0) {
//   console.log("입력한 값은 양수임");
// } else if (num < 0) {
//   console.log("음수임");
// } else if (num == 0) {
//   console.log("0임");
// } else {
//   console.log("숫자가 아님");
// }

// console.log("프로그램 끝");

// 수학 시험 점수 프로그램

// const math = Number(prompt("수학 점수 입력"));

// 90점 이상 a 80점 이상 b 70점 이상 c 60점 이상 d 그 외는 수강철회

// if (math >= 90) {
//   console.log("A 입니다");
// } else if (math >= 80) {
//   console.log("B 입니다");
// } else if (math >= 70) {
//   console.log("C 입니다");
// } else if (math >= 60) {
//   console.log("D 입니다");
// } else {
//   console.log("수강철회");

// 숫자를 입력해서, 양의 홀수 , 양의 짝수 , 0 , 음의 홀수 , 음의 짝수 알려주기
// ex) -3 -> 음의 홀수 , -4 -> 음의 짝수

const num = Number(prompt("숫자를 입력하세요"));

if (num > 0 && num % 2 === 0) {
  console.log("양의 짝수 입니다");
} else if (num > 0 && num % 2 === 1) {
  console.log("양의 홀수 입니다");
} else if (num < 0 && num % 2 === -1) {
  console.log("음의 홀수 입니다");
} else if (num < 0 && num % 2 === 0) {
  console.log("음의 짝수 입니다");
} else if (num == 0) {
  console.log("0 입니다");
} else {
  console.log("숫자가 아니네요");
}