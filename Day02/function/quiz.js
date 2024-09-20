//1
function hello(x) {
  return `hello ${x}님!`;
}

console.log(hello("김유나"));
//2
function ping(x) {
  return `${x}핑`;
}

//3
function lucky(x) {
  return `${x}이라니 럭키비키잖아~`;
}

//4
function num(x, y) {
  return x ** y;
}

//5
function day(x, y, z) {
  return `오늘은 ${x}년도 ${y}월 ${z}일 입니다`;
}

//6

function mbti(a, b, c, d) {
  const mbtimap = {
    e: "외향적",
    i: "내향적",
    s: "감각적",
    n: "직관적",
    f: "감성적",
    t: "이성적",
    j: "계획적",
    p: "즉흥적",
  };
  return console.log(
    `${mbtimap[a]},${mbtimap[b]},${mbtimap[c]},${mbtimap[d]}이시군요!`
  );
}

mbti("i", "n", "f", "p");

function zodiac(year) {
  const tatget = year % 12;
  const animal = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랭이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return console.log(`${animal[tatget]}띠!`);
}

zodiac(1999)