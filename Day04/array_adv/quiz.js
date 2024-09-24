// //1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const a1 = arr1.filter((x) => {
//   return x % 3 == 0;
// });

// console.log(a1);
// //2. 4이상 8이하

// const a2 = arr1.filter((x) => {
//   return x >= 4 && x <= 8;
// });

// console.log(a2);

// const fruitarray = [
//   "watermelon",
//   "cherry",
//   "banana",
//   "avocado",
//   "apple",
//   "orange",
//   "pineapple",
//   "strawberry",
// ];

// //3. 알파벳 o

// const a3 = fruitarray.filter((x) => {
//   return x.includes("o");
// });

// console.log(a3);

// //4. 문자길이 6글자

// const a4 = fruitarray.filter((x) => {
//   return x.length >= 6;
// });
// console.log(a4);

// //5. 문자길이 짝수,대문자
// // 메소드 체이닝(method chaining)
// const a5 = fruitarray
//   .filter((x) => {
//     return x.length % 2 == 0;
//   })
//   .map((x) => {
//     return x.toUpperCase();
//   });
// console.log(a5);

// // 유저에게 정수 n(maximum),k(배수)를 입력 받으면
// // n = 10, k = 3 - > [3,6,9]
// // n = 15, k = 5 - > [5,10,15]
// // 를  도출하는 함수

// const test = (n, k) => {
//   return Array(n)
//     .fill(0)
//     .map((x, i) => {
//       return i + 1;
//     })
//     .filter((x) => {
//       return x % k == 0;
//     });
// };

// const t = Number(prompt("맥시멈 숫자 입력"));
// const t1 = Number(prompt("배수할 숫자 입력"));

// const t3 = test(t, t1);

// console.log(t3);

// //"oxooxoxxox" [1,2,1,0,1,0]

// const test2 = (word) => word.split("x").map((x) => x.length);

// const fruits = ["melon", "kiwi", "apple", "banana", "orange"];

// const vowels = ["a", "e", "i", "o", "u"];

// const a = fruits.map((x) => {
//   return x
//     .split("")
//     .map((x) => {
//       return x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
//         ? x.toUpperCase()
//         : x;
//     })
//     .join("");
// });
// console.log(a);

// const b = fruits.map((x) => {
//   x
//   .split("")
//   .map((y) => vowels.some((v) => v == y) ? y.toUpperCase() : y);
// });
// console.log(b);

// 1 ~100 까지 만들고, 369 만들기
// [1,2,"👏"]

// 알고있는 문제 풀때
// 해당 타입에 방법없으면 다른 타입으로 바꿈

const aaa = Array(101)
  .fill(0)
  .map((x, i) => String(i + 1))
  .map((x) =>
    x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
  );

console.log(aaa);
