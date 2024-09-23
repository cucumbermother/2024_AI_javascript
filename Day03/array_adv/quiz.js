//1. [1,2,3,4,5] -> 두배
//2. [1,2,3,4,5] -> 홀수면 두배 짝수면 세배
//3. [1,2,3,4,5] -> 3이하면 '🍒' 아니면'🍉'

const arr = [1, 2, 3, 4, 5];

const double = (x) => {
  return x * 2;
};

const double_or_trips = (x) => {
  return x % 2 === 0 ? x * 3 : x * 2;
};

const three = (x) => {
  return x <= 3 ? "🍒" : "🍉";
};

const a = arr.map(double);
const b = arr.map(double_or_trips);
const c = arr.map(three);

// console.log(a);
// console.log(b);
// console.log(c);

const fruitArray = [
  "warermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawnerry",
];

// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
const seven = (x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
};

const r1 = fruitArray.map(seven);

// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화

const aa = (x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
};

const r2 = fruitArray.map(aa);

// 3. 단어 안에 있는 알파벳 a를 '🍒' 로 바꾸기

const aa2 = (x) => {
  return x.includes("a") ? x.replaceAll("a", "🍒") : x;
};

const r3 = fruitArray.map(aa2);

// console.log(r1);
// console.log(r2);
// console.log(r3);

const starbucks = [
  { name: "americano", price: 4000, shot: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shot: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shot: 2,
    ingredients: ["water", "wheet", "bean"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shot: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

// 1. 가을시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿈
// 2. 두유시즌 이벤트 -> 성분에 두유 강제 추가
// 3. 스타벅스 아아기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고 샷하나더

//1
const event1 = (x) => {
  x.price = x.price * 0.9;
  return x;
};

//2

const event2 = (x) => {
x.ingredients.push("두유");
  return x;
};

//3

const event3 = (x) => {
  if ( x.name == "americano"){
    x.price = x.price - 2000 
  x.shot = x.shot + 1; 
  return x } else { return x}

  
};

//4

const event4 = (x) => {
  x.price = x.price  * 1.2;
  return x;
};

const i1 = starbucks.map(event1);
const i2 = starbucks.map(event2);
const i3 = starbucks.map(event3);
const i4 = starbucks.map(event4);

console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);
