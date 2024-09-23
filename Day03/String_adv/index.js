//string_adv
const pizza = "cheese pizza";

// 포함하니?
const hasCheese = pizza.includes("cheese"); // true
const haspine = pizza.includes("pineapple"); // false
const hasC = pizza.includes("c"); // true
const hasEE = pizza.includes("ee"); // true

// 몇번째임

const indexH = pizza.indexOf("h"); // 1
const indexB = pizza.indexOf("b"); // -1

// 바꾸기

pizza.replace("z", "k"); // cheese pikza
pizza.replaceAll("z", "k"); // cheese pikka

// 시작하는지

pizza.startsWith("pizza"); // false
pizza.endsWith("pizza"); // true

// 나누기

pizza.split("i"); // ["cheese p" , "zza"]
pizza.split(" "); // ["cheese" , "pizza"]

// 반복하기

pizza.repeat(3); // cheese pizza cheese pizza cheese pizza


// 문자의 길이

pizza.length 