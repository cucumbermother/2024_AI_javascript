// 1. 출생년도를 물어보고 2005년도 이하이면
// 성인입니다 , 아니면 미성년자 입니다.
const year = Number(prompt("출생년도를 적어주세요."));
year <= 2005 ? alert("성인입니다") : alert("미성년자입니다.");


// 2. 놀이기구를 탈려고 키를 물었음
// 150cm 이하면 탈수 없습니다. 아니면 탈수 있습니다.
const height = Number(prompt("키를 적어주세요"));
height <= 150 ? alert("탈수없습니다") : alert("탈수 있습니다.");


// 3. 양의 정수를 입력받고, 분초를 바꾸는 프로그램
const time = Number(prompt("양의 정수를 입력해주세요"));
time >= 60
  ? alert(`${(time - (time % 60))/  60}분 ${time % 60}초`)
  : alert(`${time}초`);
