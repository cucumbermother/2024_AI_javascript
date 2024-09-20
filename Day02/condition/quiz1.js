// 버스 종류
// 마을버스, 시내버스 , 고속버스 , 심야버스
// 1500 , 2000 , 8000 ,10000
// 경기권, 충청권 , 강원권 , 제주권
// +2000 +3000 +3000 +10000

// 일반석, 프리미엄석 , 넷플석
// +1000 +3000 +4000

// 나이 13세 이하면 20% , 65세 이상 50 , 나머지 100

const bus = [
  { name: "마을버스", price: 1500 },
  { name: "시내버스", price: 2000 },
  { name: "고속버스", price: 8000 },
  { name: "심야버스", price: 10000 },
];

const plus_area = [
  { name: "경기권", price: 2000 },
  { name: "충청권", price: 3000 },
  { name: "강원권", price: 3000 },
  { name: "제주권", price: 10000 },
];

const plus_seat = [
  { name: "일반석", price: 1000 },
  { name: "프리미엄석", price: 3000 },
  { name: "넷플릭스", price: 4000 },
];

const busChoose = Number(
  prompt(
    `1 .${bus[0].name} 2. ${bus[1].name} 3. ${bus[2].name} 4. ${bus[3].name} 중 고르시오 1 ~ 4`
  )
);
const areaChoose = Number(
  prompt(
    `1. ${plus_area[0].name} 2. ${plus_area[1].name} 3. ${plus_area[2].name} 4. ${plus_area[3].name} 중 고르시오 1 ~ 4`
  )
);
const seatChoose = Number(
  prompt(
    ` 1. ${plus_seat[0].name} 2. ${plus_seat[1].name} 3. ${plus_seat[2].name} 중 고르시오 1 ~ 3`
  )
);

total =
  bus[busChoose - 1].price +
  plus_area[areaChoose - 1].price +
  plus_seat[seatChoose - 1].price;

const age = Number(prompt("나이 입력"));
if (age <= 13) {
  console.log(
    `${bus[busChoose - 1].name} 선택 , ${
      plus_area[areaChoose - 1].name
    } 요금 추가 , ${plus_seat[seatChoose - 1].name} 요금추가`
  );
  console.log(`금액 ${total}원 중 어린이 20% 할인 총 ${total * 0.8}원입니다`);
} else if (age >= 65) {
  console.log(
    `${bus[busChoose - 1].name} 선택 , ${
      plus_area[areaChoose - 1].name
    } 요금 추가 , ${plus_seat[seatChoose - 1].name} 요금추가`
  );
  console.log(`금액 ${total}원 중 경로자 50% 할인 총 ${total * 0.5}원입니다`);
} else {
  console.log(
    `${bus[busChoose - 1].name} 선택 , ${
      plus_area[areaChoose - 1].name
    } 요금 추가 , ${plus_seat[seatChoose - 1].name} 요금추가`
  );
  console.log(`총 ${total}원입니다`);
}
