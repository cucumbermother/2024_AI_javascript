// function[함수] : 마술 상자
// 초등 : 100 -> 200 , 200 -> 300 , 300 -> 400
// 중등 : f(x) = x + 1
//       1 -> 2 , 2 -> 3

function test(x) {
  return x + 1;
}

function ten(x) {
  return x + 10;
}

function coffee() {
  return "아메리카노";
}

const a = test(1); // 2
const b = test(10); // 11
const c = coffee(); // 아메리카노

// 매개변수[파라메터] 함수

function add(x, y) {
  return x + y;
}

function ping() {
  console.log("하츄핑");
  console.log("샌드핑");
  console.log("야마핑");
}

ping();

//기본 마술 상자들

Number();
Boolean();
String();
alert();
prompt();

// 문자열의 마술상자
const a1 = "ice".toUpperCase(); // 대문자 화

// 배열의 마술상자
const b1 = ["하츄핑", "샌드핑"].push("몰라핑"); // ["하츄핑" , "샌드핑", "몰라핑"]
