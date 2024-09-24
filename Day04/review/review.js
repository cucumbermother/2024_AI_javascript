//1. [ 10, 20 , 30 , 40 , 50 ]을 30 이하면 100 더하기 아니면 200더하기
//2. ["americano", "latte", "vanilla", "mocha","mint","tea"]
//  -1. 5글자 이하이면 대문자화, 아니면 ☕
//

const num_array = [10, 20, 30, 40, 50].map((x) => {
  return x <= 30 ? x + 100 : x + 200;
});

console.log(num_array);

const menu = ["americano", "latte", "vanilla", "mocha", "mint", "tea"].map(
  (x) => {
    return x.length <= 5 ? x.toUpperCase() : x = "☕";
  }
);

console.log(menu);


const add = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
