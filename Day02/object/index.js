// array : [] object : {}

const coffee = {
  name: "아메리카노",
  price: 3000,
  kcal: 1,
  shop: "벤티",
  isIce: true,
  ingredients: ["커피콩", "물"],
};

console.log(coffee.shop); // dot 접근법
console.log(coffee["shop"]); // bracket 접근법
console.log(coffee.maker); // 없으면 undefined
console.log(coffee.ingredients[1]); // 물

coffee.amount = 255;

console.log(coffee.amount);
delete coffee.shop; //없어짐 
console.log(coffee.shop);
