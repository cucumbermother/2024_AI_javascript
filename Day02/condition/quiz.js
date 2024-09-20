// CGV 프로그램
// 1. 영화 고르기 - ["베테랑2","에일리언","사랑의하츄핑"]
// 2. 좌성 등급 고르기 - standard[10000] , couple[20000] , premium[15000] , economy[8000]
// 3. 팝콘 고르기 - 일반[6000] , 캬라멜[6500] , 치즈[6500] , 반반[7000]
// 4. 음료 고르기 - 탄산[2000] , 에이드[3000] , 커피 [3000]
// 5. 나이 입력 - 13세 이하면 30프로 할인, 60 이상 20프로 할인

// 콘솔  - 영화 좌소 팝콘 음료 총 금액 : ~~~입니다.

const movie = {
  name: ["베테랑2", "에일리언", "사랑의 하츄핑"],
  seat: [
    { name: "standard", price: 10000 },
    { name: "couple", price: 20000 },
    { name: "premium", price: 15000 },
    { name: "economy", price: 8000 },
  ],
};

const shop = {
  popcorn: [
    { name: "일반 팝콘", price: 6000 },
    { name: "캬라멜 팝콘", price: 6000 },
    { name: "치즈 팝콘", price: 6000 },
    { name: "반반 팝콘", price: 6000 },
  ],
  beveage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
};

const movieChoose = Number(prompt(`${movie.name} 중 영화를 고르시오 (0~2)`));
const seatChoose = Number(
  prompt(
    `${movie.seat[0].name} ${movie.seat[1].name}${movie.seat[2].name}${movie.seat[3].name} 중에 고르세요`
  )
);
const popcornChoose = Number(
  prompt(
    `${shop.popcorn[0].name} ${shop.popcorn[0].name}${shop.popcorn[0].name}${shop.popcorn[0].name} 중에 고르세요`
  )
);
const beverageChoose = Number(
  prompt(
    `${shop.beveage[0].name} ${shop.beveage[1].name}${shop.beveage[2].name} 중에 고르세요`
  )
);
const age = Number(prompt("몇살임?"));

const msg = `${movie.name[movieChoose]} , ${movie.seat[seatChoose].name} , ${shop.popcorn[popcornChoose].name},${shop.beveage[beverageChoose].name}`;

if (age <= 13) {
  const total =
    movie.seat[seatChoose].price * 0.7 +
    shop.popcorn[popcornChoose].price +
    shop.beveage[beverageChoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다`);
} else if (age >= 60) {
  const total =
    movie.seat[seatChoose].price * 0.8 +
    shop.popcorn[popcornChoose].price +
    shop.beveage[beverageChoose].price;
  console.log(`${msg} 총 금액: ${total} 입니다`);
} else {
  const total =
    movie.seat[seatChoose].price +
    shop.popcorn[popcornChoose].price +
    shop.beveage[beverageChoose].price; 
  console.log(`${msg} 총 금액: ${total} 입니다`);
}

const total =
  movie.seat[seatChoose].price +
  shop.popcorn[popcornChoose].price +
  shop.beveage[beverageChoose].price;
