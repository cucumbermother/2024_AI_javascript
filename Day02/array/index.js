기본타입 : String, Number , Boolean , Null , Undefined
참조타입 : Array

// Array(배열) : []
// 시작은 0번째 부터

const paik = ["아메리카노", "라떼", "모카", "바닐라"];

console.log(paik);
console.log(paik[2]);

// 서브웨이
// 빵메뉴 고르기 [ 플렛 , 화이트 , 위트 ]
// 치즈메뉴 고르기 [ 슈레드 , 모짜렐라 , 아메리칸치즈 ]
// 소스메뉴 고르기 [ 머스타드 , 핫칠리 , 소금 , 후추 , 스언 , 홀레 ]
// 쿠키메뉴 고르기 [ 화이트 , 초콜릿 , 아몬드 ]
// 음료메뉴 고르기[ 콜라 , 제로콜라 , 스프라이트 , 커피 ]
// 최종메뉴는 플랫-모짜렐라-소금-아몬드쿠키-콜라

const bread1 = ["플렛", "화이트", "위트"];
const sorce2 = ["슈레드", "모짜렐라", "아메리칸치즈"];
const cheese3 = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cookie4 = ["화이트", "초콜릿", "아몬드 "];
const drink5 = ["콜라", "제로콜라", "스프라이트", "커피"];

const bread = Number(prompt("1.플렛 2.화이트 3.위트 "));
const sorce = Number(prompt("1. 슈레드 2. 모짜렐라 3.아메리칸치즈"));
const cheese = Number(
  prompt("1. 머스타드 2. 핫칠리 3.소금 4.후추 5.스언 6.홀레")
);
const cookie = Number(prompt("1.화이트 2.초콜릿 3.아몬드 "));
const drink = Number(prompt("1.콜라 2.제로콜라 3.스프라이트 4.커피"));

console.log(
  `최종메뉴는 ${bread1[bread - 1]} - ${sorce2[sorce - 1]} - ${
    cheese3[cheese - 1]
  } -
   ${cookie4[cookie - 1]} - ${drink5[drink - 1]} 입니다.`
);
