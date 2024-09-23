// makeCoffee 함수 만들기 [ 커피준비 - 커피완료 ]
// americano,lattem,vanilla 함수 만들어서
// makeCoffee(americano) //[커피준비 - 아메리카노 - 커피완료]]

const makeCoffee = (x) => {
  console.log("커피준비");
  x();
  console.log("커피완료");
};

const americano = () => {
  console.log("원두갈기");
  console.log("샷 내리기");
  console.log("얼음컵에 샷과 물넣기");
  console.log("빨대 넣고 후루룩");
};

const latte = () => {
  console.log("원두갈기");
  console.log("샷내리기");
  console.log("우유 스팀하기");
  console.log("얼음컵에 쏟아넣기");
  console.log("빨대 넣고 후루룩");
};

const vanilla = () => {
  console.log("원두갈기");
  console.log("샷내리기");
  console.log("바닐라 엑스트라 넣기");
  console.log("얼음컵에 쏟아넣기");
  console.log("빨대 넣고 후루룩");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);
makeCoffee( () => {
    console.log("원두갈기");
    console.log("샷내리기");
    console.log("바닐라 엑스트라 넣기");
    console.log("얼음컵에 쏟아넣기");
    console.log("망고추가")
    console.log("빨대 넣고 후루룩");
})