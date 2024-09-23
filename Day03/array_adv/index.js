const arr = ["Samsung","LG","Apple", "google"]

arr.push("Hyundai") // Hyundai 뒤에 추가 
arr.unshift("Hybe") // Hybe 앞에 추가
arr.pop(); // 맨 뒤에 요소 빼기
arr.shift() // 맨 앞에 요소 빼기
arr.reverse(); // 배열 꺼꾸로 ["google","Apple","LG","Samsung"]
arr.indexOf("LG") // 1
arr.indexOf("toyota") // -1
arr.includes("Google") // true


// Quiz 
// 유저에게 뉴스기사를 입력받고, 찾고싶은 단어를 입력 받은후
// 단어가 있으면 단어가 있습니다. 없으면 단어가 없습니다

const uzer_news = prompt("뉴스 기사를 입력해 주세요").split(" ")
const uzer_find = prompt("찾고싶은 단어를 입력해 주세요")

uzer_news.includes(uzer_find) ? alert("단어가 있습니다") : alert("단어가 없습니다")