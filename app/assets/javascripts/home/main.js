console.log("view:main");

let $speed = document.getElementById("js-speed");
let $nextButton = document.getElementById("js-button");

let $speedsAryJson = document.getElementById("js_speeds_json").value;

let untilSpeeds = [];
let speed;
let rank;

// audiojs.events.ready(function() {
//   var as = audiojs.createAll();
// });

//? Railsから持ってきた文字列を配列に変換
//? return untilSpeeds
formatOfRailsAry($speedsAryJson);

// $nextButton.addEventListener("click", () => {
//   rank = 1;
//   speed = Number($speed.textContent);

//   //? 今回のスピードを比べて順位を出す
//   //? return rank
//   searchRank();

//   window.sessionStorage.setItem(["speed"], [speed]);
//   window.sessionStorage.setItem(["rank"], [rank]);

//   window.location.href = "result";
// });

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
    if (tmp == "[" || tmp == "]") {
      if (tmp == "]") {
        speedAry.push(Number(tmpBox));
      }
    } else if (tmp == ",") {
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
  let $time = document.getElementById('timer').textContent;
  let crtSpeed = Number($time);

  let length = untilSpeeds.length;
  var index = 0;

  while (index < length) {
    if (crtSpeed >= untilSpeeds[index]) {
      rank++;
    }
    index++;
  }


  window.sessionStorage.setItem(["speed"], [crtSpeed]);
  window.sessionStorage.setItem(["rank"], [rank]);
}

new Vue({
  el: "#app",
  data: {
    startFlg: "",
    countFlg: "",
    current_question: "",
    questions: [
      "join",
      "load",
      "host",
      "from",
      "fetch",
      "build",
      "export",
      "accept",
      "create",
      "remove",
      "dedupe",
      "connect",
      "register",
      "separate",
      "identifier",
    ],
    typeBox: "",
    current_question_counts: 0,
    question_counts: 0,

    current_type: "",
    current_index: 0,

    keyCode: null,

    active: false,
    start: 0, 
    timer: 0, 
    interval: 0, 
    accum: 0, 

    
    
    correct_audio: new Audio('audios/correct.mp3'),
    true_audio: new Audio('audios/true.mp3'),
    false_audio: new Audio('audios/false.mp3'),
  },
  computed: {
    styleObject: function () {
      width = (this.current_question_counts / this.question_counts) * 100 + "%";
      if (this.current_question_counts >= this.question_counts) {
        color = "#03a4f9";
      } else {
        color = "#cdeeff";
      }
      return {
        width: width,
        background: color,
      };
    },
  },
  methods: {
    gameStart: function () {
      if (!this.startFlg) {
        this.countFlg = true;
        this.startFlg = true;

        setTimeout(() => {
          this.countFlg = false;
          this.$nextTick(function () {
            document.getElementById("typeForm").focus();
          });

          console.log('start');
          this.startTimer();
        }, 4000);
      }
    },
    onKeyDown(event) {
      if (event.keyCode == 32) {
        this.gameStart();
      } else if (event.keyCode == 8) {
        event.preventDefault();

      }
    },
    startTimer() {
      this.active = true;
      this.start = Date.now();
      this.timer = setInterval(() => {
        this.interval = this.accum + (Date.now() - this.start) * 0.001;
      }, 10); // 10msごとに現在時刻とstartを押した時刻の差を足す
    },
    stopTimer() {
      this.active = false;
      this.accum = this.interval;
      clearInterval(this.timer);
    },
    resetTimer() {
      this.interval = 0;
      this.accum = 0;
      this.start = Date.now();
    },
  },
  mounted: function () {
    this.current_question = this.questions[0];
    this.question_counts = this.questions.length;

    document.addEventListener("keydown", this.onKeyDown);
  },
  beforeDestroy: function () {
    document.removeEventListener("keydown", this.onKeyDown);
  },
  watch: {
    typeBox: function (e) {
      if (this.current_question_counts >= this.question_counts) {
        console.log('finish');
        this.stopTimer();
        rank = 1;
        //? 今回のスピードを比べて順位を出す
        //? return rank
        searchRank();
      
      
        window.location.href = "result";
      }
      if (e == this.current_question) {
        setTimeout(() => {
          this.questions.splice(0, 1);
          this.current_question = this.questions[0];
          this.typeBox = "";
          this.current_question_counts = this.current_question_counts + 1;
          this.current_index = 0;
          // this.correct_audio.currentTime = 0;
          // this.correct_audio.play();
          console.log('next')
        }, 150);
      } else if (e == " " || e == "　") {
        this.typeBox = "";
      } else {
        this.current_type = e.slice(-1);

        if (this.current_type == this.current_question.substr(this.current_index,1)) {
          console.log('true');
          this.current_index ++;
          // this.true_audio.currentTime = 0;
          // this.true_audio.play();
        } else if (!this.typeBox == "") {
            console.log('false')
            this.typeBox = e.substr(0,this.current_index);
            // this.false_audio.currentTime = 0;
            // this.false_audio.play();
        }
      }
      
    },
  },
});

//!
