// prompt로 첫번째 숫자 입력
// prompt로 두번째 숫자 입력
// 콘솔로 두 수의 합은 ~~ 입니다

// const num1 = Number(prompt("첫번째 숫자 입력"));
// const num2 = Number(prompt("두번째 숫자 입력"));
// console.log(`두수의 합은 ${num1 + num2} 입니다.`);

// 1. 한 변의 길이를 물어보고, 정사각형의 넓이와 둘레 알려주기
// 2. 밑변과 높이를 물어보고, 정삼각형의 넓이 구하기
// 3. 반지름을 물어보고, 원의 넓이와 둘레 구하기
// 4. 출생년도를 물어보고 나이를 나타내기
// 5. 일본여행 갈거임 그래서 100만원 환전하면 현재 환율로 엔화 나타내기

//1
const length = Number(prompt("정사각형의 길이를 입력하세요"));
console.log(
  `정사각형의 넓이는 ${length * length}센치 제곱이고, 둘레는 ${
    length * 4
  }cm 입니다.`
);

//2
const under = Number(prompt("정삼각형의 밑변을 입력하세요."));
const height = Number(prompt("정삼각형의 높이을 입력하세요."));
console.log(`정삼각형의 넓이는 ${under * height * 0.5}센치제곱 입니다.`);

//3
const round = Number(prompt("원의 반지름을 입력해주세요."));
console.log(
  `원의 넓이는 ${round * round * 3.14}센치제곱이고 , 둘레는 ${
    2 * 3.14 * round
  }cm 입니다.`
);

//4
const year = Number(prompt("출생년도를 입력하세요"));
console.log(`당신의 나이는 ${2024 - (year - 1)}살 입니다.`);

//5
const enhwa = Number(prompt("한국돈을 입력하세요 환율계산 해드립니다"));
console.log(`${enhwa}원은 ${enhwa * 0.1075}엔 입니다`);
