const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
// .fill() : (45) [undifined, undifined, undifined, ..., undifined]
// .fill("a") : (45) ["a", "a", "a", ..., "a"]
// map은 일대일 함수 : map( (v,i) => i) v는 매개변수, i는 자리수

const shuffle = [];
while (candidate.length > 0) {
  const randomIndex = Math.floor(Math.random() * candidate.length); // 0~44
  const spliceArray = candidate.splice(randomIndex, 1); // randomIndex 자리부터 1개 뽑아서 길이가 1인 Array로 반환
  const value = spliceArray[0];
  shuffle.push(value);
} // Random 하게 섞기
const winBalls = shuffle.slice(0, 6).sort((p, c) => {
  return p - c; // 오름차순 ( c-p : 내림차순 )
}); // 1~6번 공
const bonusBall = shuffle[6]; // 7번 공

const colorize = (number, tag) => {
  number <= 10
    ? (tag.style.backgroundColor = "red")
    : number <= 20
    ? (tag.style.backgroundColor = "orange")
    : number <= 30
    ? (tag.style.backgroundColor = "purple")
    : number <= 40
    ? (tag.style.backgroundColor = "green")
    : (tag.style.backgroundColor = "blue");
  tag.style.color = "white";
}; // 함수를 통한 중복 제거

const makeBall = (number, tag) => {
  const ball = document.createElement("div");
  ball.className = "ball";
  ball.innerText = number;
  tag.appendChild(ball);
  colorize(number, ball);
};

const resultTag = document.querySelector("#result");
// for (let i = 0; i < 6; i++) {
//   setTimeout(() => {
//     makeBall(winBalls[i], resultTag);
//   }, 1000 * (i + 1));
// }
winBalls.forEach((number, index) => {
  setTimeout(() => {
    makeBall(number, resultTag);
  }, 1000 * (index + 1));
});

const bonusTag = document.querySelector("#bonus");
setTimeout(() => {
  makeBall(bonusBall, bonusTag);
}, 7000);
