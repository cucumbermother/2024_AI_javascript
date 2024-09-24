// arr 함수들
// map : 바꿔줘
// filter : 걸러줘, 어떠한 조건에 부합하는 요소만 남겨줘

const arr1 = [10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
});

const arr2 = [10, 20, 30, 40, 50].filter((x) => {
  return x === 20 || x === 40;
});

// every : 어떠한 조건에 모든 요소가 부합함? (return Boolean)

const a = [10, 20, 30, 40, 50].every((x) => {
  return x > 10;
}); //false

// every : 어떠한 조건에 하나 요소가 부합함? (return Boolean)

const a1 = [10, 20, 30, 40, 50].some((x) => {
  return x > 10;
}); // true

// 배열 만들기

const a3 = Array(10)
  .fill(1)
  .map((x) => {
    return x + 1;
  });

console.log(a3);

const a4 = Array(100)
  .fill(0)
  .map((x, i) => {
    return i + 1;
  });

console.log(a4);
