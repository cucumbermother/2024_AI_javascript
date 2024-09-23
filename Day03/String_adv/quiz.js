// 유저에게 비밀번호 설정을 물어보고,
// 비밀번호가 it,IT를 포함하면 비밀번호 설정완료, 아니면 비밀번호 설정오류

// const password = prompt("새로 바꾸실 비밀번호 입력").toUpperCase()

// password.includes("IT") ? console.log("비밀번호 설정완료") : console.log("비밀번호 설정오류")

// 1. 유저에게 좋아하는 음식을 입력받고 그 음식을 5번 출력하는 프로그램

// const food = prompt("좋아하는 음식을 적어주세요");
// alert(food.repeat(5));
// // 2. 유저에게 좋아하는 음식과 횟수를 입력 받고 그 음식을 횟수 번 만큼 출력하는 프로그램
// const food2 = prompt("좋아하는 음식과 횟수를 적어주세요");
// const split_word = food2.split(" ");
// alert(split_word[0].repeat(Number(split_word[1])));
// // 3. 유저에게 알파벳 단어를 입력받고, 6글자보다 작으면 소문자화 하고, 크면 대문자화 해서 출력
// const alp = prompt("알파벳으로 단어를 적어주세요");

// alp.length < 6 ? alert(alp.toLowerCase()) : alert(alp.toUpperCase());

// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.
// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

// alert(news.split(" "));


// 1. 유저에게 단어를 입력받고, 소문자이면 대문자로, 대문자이면 소문자로 

// 2. 유저에게 비밀번호 설정을 물어보고 
// - 1. 길이가 8 ~20가 아니면 비밀번호 길이 오류
// - 2. 시작이 it,IT로 시작안하면 비밀번호 시작은 it,IT로 시작해야함 
// - 3. 특수문자 &#@!중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
// 위에 조건이 모두 통과 되면 비밀번호 설정완료


// 1

const uzer_Word = prompt("단어를 입력해주세요")
const word1 = uzer_Word.toLowerCase()
const word2 = uzer_Word.toUpperCase()

if (uzer_Word === word1) {
    alert(word2)
}else if(uzer_Word === word2){
    alert(word1)
}


// 2 

const password = prompt("비밀번호를 설정해 주세요.").toLowerCase()

if (!password.length >= 8 && !password.length <= 20){
    alert("비밀번호 길이 오류")} else if (!password.includes("it")) {
    alert("시작은 it,IT로 시작해 주세요")
    } else if( !password.includes("&") && !password.includes("#") && !password.includes("@") && !password.includes("!") ){
        alert("반드시 특수문자를 넣어주세요")
    }else{
        alert("비밀번호 설정완료")
    }