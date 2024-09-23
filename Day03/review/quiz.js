// 1. 어떤 숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
function num(x) {
  return x % 2 === 0 ? "짝수" : "홀수";
}
// 2. 어떤 숫자를 넣으면 5배수이면 5의배수 아니면 5의배수가 아님으로 뜨게
function num_Five(x) {
  return x % 5 === 0 ? "5의배수" : "5의 배수가 아님";
}
// 3. 어떤 숫자를 넣음면 1 - 일반팝콘 , 2 - 카라멜 팝콘 , 3 - 치즈 팝콘 , 그외 그런거 없음을 돌려주는 함수
function popcorn(x) {
  if (x === 1) {
    return "일반팝콘";
  } else if (x === 2) {
    return "카라멜 팝콘";
  } else if (x === 3) {
    return "치즈팝콘";
  } else {
    return " 그런 팝콘 없음";
  }
}

function popcorn3(x) {
  const menu = {
    1: "일반 팝콘",
    2: "키라멜 팝콘",
    3: "치즈 팝콘",
  };
  return menu[x] || "그런것 없음";
}

function popcorn2(x) {
  return `${x} 팝콘`;
}

const mypopcorn = popcorn(2);
console.log(mypopcorn);

// 4. 어떠한 문자열을 3개 넣으면 배열로 돌려주는 함수

function word(x, y, z) {
  words = [];
  const x = prompt("문자입력");
  const y = prompt("문자입력");
  const z = prompt("문자입력");
  words[0] = x;
  words[1] = y;
  words[2] = z;

  return words;
}

// 5.

function fruits(x) {
  return `${x}맛 아이스크림`;
}
const a = fruits("민트");
console.log(a);

function fruitsArray(a, b, c) {
  return [a, b, c];
}
