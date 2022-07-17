console.log("view:result");

let speed = window.sessionStorage.getItem(["speed"]);
let rank = window.sessionStorage.getItem(["rank"]);

let $speed = document.getElementById("js-speed");
let $rank = document.getElementById("js-rank");
let $rankHidden = document.getElementById("rank");

$speed.textContent = speed;

new Vue({
  el: "#app",
  data: {
    number: 0,
    tweenedNumber: 99,

    roll_audio: new Audio("audios/roll.mp3"),
  },
  computed: {
    animatedNumber: function () {
      return this.tweenedNumber.toFixed(0);
    },
  },
  watch: {
    number: function (newValue) {
      this.roll_audio.currentTime = 0;
      this.roll_audio.play();
      setTimeout(() => {
        gsap.to(this.$data, { duration: 3.6, tweenedNumber: newValue });
      }, 0);
    },
  },
  mounted: function () {
    setTimeout(() => {
      this.number = rank;
    }, 0);
  },
});
