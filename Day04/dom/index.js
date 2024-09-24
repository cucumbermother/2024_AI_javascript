// DOM(HTML&CSS)

// element type

// 버튼 태그 3개 만듦 [아메리카노] [에이드] [라떼]

[
  { name: "아메리카노", bg: "yellow", color: "black" },
  { name: "에이드", bg: "pink", color: "white" },
  { name: "라떼", bg: "skyblue", color: "orange" },
].forEach((x) => {
  const button = document.createElement("button");
  button.innerText = x.name;
  button.style.color = x.color;
  button.style.backgroundColor = x.bg;
  document.body.appendChild(button);
});

const container = document.createElement("div");

//className
//container.className = "container"

container.classList.add("container");

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "red";
container.appendChild(box);

const box2 = document.createElement("div");
box2.classList.add("box");
box2.style.backgroundColor = "yellow";
container.appendChild(box2);

document.body.appendChild(container);
