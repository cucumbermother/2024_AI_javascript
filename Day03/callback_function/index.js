// 함수 : 마술상자
// f(x) = x + 1;
// 마라,크림 -> 마라떡볶이/크림떡볶이

// f(g(x)) : 마술상자 안에 마술상자 넣음
// 요리법(마라탕) -> 음식

// callback : 함수안에 함수 넣기 


const cook = (x) => {
  console.log("요리 시작!");
  x();
  console.log("요리 끝!");
};

const maratang = () => {
  console.log("마라탕 재료준비");
  console.log("재료 삶기")
  console.log("준비해둔 육수에 넣기")
  console.log("플레이팅하기")
};

const taco = () => {
  console.log("재료준비");
  console.log("난에다가 속재료 넣기")
  console.log("감사기")
  console.log("플레이팅하기")
};

const kimbab = () => {
  console.log("재료준비");
  console.log("김에다가 밥과 재료들 넣기")
  console.log("말기")
  console.log("플레이팅하기")
};

cook(maratang);

cook(taco);

cook(kimbab);




