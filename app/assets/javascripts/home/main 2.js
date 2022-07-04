console.log("main");

let $speed = document.getElementById("js-speed");
let $nextButton = document.getElementById("js-button");

let $speedsAryJson = document.getElementById("js_speeds_json").value;

let rank = 0;

console.log($speedsAryJson);
console.log($speedsAryJson.length);

formatOfRailsAry("abcdef");



// console.log(speedsAry[0]);
// console.log(speedsAry[1]);
// console.log(speedsAry[2]);
// console.log(speedsAry[3]);
// console.log(speedsAry[4]);
// console.log(speedsAry[5]);
// console.log(speedsAry[6]);

$nextButton.addEventListener("click", () => {



  window.sessionStorage.setItem(["speed"], [$speed.value]);
  window.location.href = "result";
});

function formatOfRailsAry(ary) {
  let index = 0;
  let length = ary.length;
  let tmp;
  let speedAry = [];

  // 文字数分繰り返し

  // 数字をtmpに切り出す

  // speedAryに追加していく

  console.log(index + " " + ary + " " + length);
}