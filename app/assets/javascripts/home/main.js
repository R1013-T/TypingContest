console.log("view:main");

let $speed = document.getElementById("js-speed");
let $nextButton = document.getElementById("js-button");

let $speedsAryJson = document.getElementById("js_speeds_json").value;

let untilSpeeds = [];
let speed;
let rank;

//? Railsから持ってきた文字列を配列に変換
//? return untilSpeeds
formatOfRailsAry($speedsAryJson);

$nextButton.addEventListener("click", () => {
  rank = 1;
  speed = $speed.value;

  //? 今回のスピードを比べて順位を出す
  //? return rank
  searchRank();

  window.sessionStorage.setItem(["speed"], [speed]);
  window.sessionStorage.setItem(["rank"], [rank]);

  console.log(speed);
  console.log(rank);

  window.location.href = "result";
});


function formatOfRailsAry(ary) {
  var index = 0;
  let length = ary.length;
  var tmp;
  var tmpBox;
  var speedAry = [];

  while (index <= length) {
    tmp = ary[index];
    // console.log("tmp : " + tmp);
    //todo switch文でやりたい
    if ( tmp == "[" || tmp == "]" ) {
      if (tmp == "]") {
        speedAry.push(Number(tmpBox));
      }
    } else if ( tmp == "," ){
      speedAry.push(Number(tmpBox));
      tmpBox = "";
    } else {
      if (tmpBox == undefined) {
        tmpBox = tmp;
      } else {
        tmpBox += tmp;
      }
    }
    index++;
  }
  untilSpeeds = speedAry;
}

function searchRank() {
  let length = untilSpeeds.length;
  let crtSpeed = $speed.value;
  var index = 0;

  while (index < length) {
    if ( crtSpeed >= untilSpeeds[index] ){
      rank ++;
    }
    index++;
  }
}