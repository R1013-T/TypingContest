console.log("view:result");

particlesJS("particles-js",{
	"particles":{
		"number":{
			"value":125,//この数値を変更すると紙吹雪の数が増減できる
			"density":{
				"enable":false,
				"value_area":400
			}
		},
		"color": {
        "value": ["#EA5532", "#F6AD3C", "#FFF33F", "#00A95F", "#00ADA9", "#00AFEC","#4D4398", "#E85298", "#fff", "#f00"]//紙吹雪の色の数を増やすことが出来る
		},
		"shape":{
			"type":"polygon",//形状はpolygonを指定
			"stroke":{
				"width":0,
			},
			"polygon":{
				"nb_sides":4//多角形の角の数
			}
			},
			"opacity":{
				"value":1,
				"random":false,
				"anim":{
					"enable":true,
					"speed":20,
					"opacity_min":0,
					"sync":false
				}
			},
			"size":{
				"value":5.305992965476349,
				"random":true,//サイズをランダムに
				"anim":{
					"enable":true,
					"speed":1.345709068776642,
					"size_min":1,
					"sync":false
				}
			},
			"line_linked":{
				"enable":false,
			},
			"move":{
				"enable":true,
			"speed":10,//この数値を小さくするとゆっくりな動きになる
			"direction":"bottom",//下に向かって落ちる
			"random":false,//動きはランダムにならないように
			"straight":false,//動きをとどめない
			"out_mode":"out",//画面の外に出るように描写
			"bounce":true,//跳ね返りなし
				"attract":{
					"enable":false,
					"rotateX":600,
					"rotateY":1200
				}
			}
		},
		"interactivity":{
			"detect_on":"canvas",
			"events":{
				"onhover":{
					"enable":false,
				},
				"onclick":{
					"enable":false,
				},
				"resize":true
			},
		},
		"retina_detect":true
	});

//box1の指定
$("#box1").on("inview", function (event, isInView) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $("#box1 .count-up").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            //0からカウントアップ
            Counter: $(this).text(),
          },
          {
            // スピードやアニメーションの設定
            duration: 2000, //数字が大きいほど変化のスピードが遅くなる。2000=2秒
            easing: "swing", //動きの種類。他にもlinearなど設定可能
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
});
//box2の指定
$("#box2").on("inview", function (event, isInView) {
  if (isInView) {
    //要素が見えたときに実行する処理
    $("#box2 .count-down").each(function () {
      $(this)
        .prop("Counter", 99)
        .animate(
          {
            //10からカウントダウン
            Counter: $(this).text(),
          },
          {
            // スピードやアニメーションの設定
            duration: 1200, //数字が大きいほど変化のスピードが遅くなる。1000=1秒
            easing: "swing", //動きの種類。他にもlinearなど設定可能
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  }
});

console.log("result");

let speed = window.sessionStorage.getItem(['speed']);
let rank = window.sessionStorage.getItem(['rank']);
console.log(speed);
console.log(rank);

let $speed = document.getElementById("js-speed");
let $rank = document.getElementById("js-rank");

$speed.textContent = speed;
$rank.textContent = rank;

$(function(){
  var score = speed;
  $.ajax({
    url: 'result',  
    type: 'POST',
    dataType: 'html',
    async: true,
    data: {
      score: score,
    },
  });
});