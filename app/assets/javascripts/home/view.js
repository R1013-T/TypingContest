console.log("view:allview");

setTimeout(function () {
  location.reload();
}, 60000);

let $container = document.getElementById("js-container");
let $ranklabel = $container.children[0].children[0].children[2].children[0];
let userlength = $container.childElementCount;

let index = 0;

while (index < userlength) {
  let crtUser =
    $container.children[Number(index)].children[0].children[2].children[0];
  crtUser.textContent = index + 1;

  index++;
}
index = 0;

while (index < userlength) {
  let crtUser =
    $container.children[Number(index)].children[0].children[2].children[3];
  let gift;
  switch (index) {
    case 0:
      gift = "gift1";
      break;
    case 1:
      gift = "Amazonギフトカード 1,500円分";
      break;
    case 2:
      gift = "ELECOM ヘッドフォン";
      break;
    case 3:
      gift = "ELECOM USBメモリ 32GB";
      break;
    case 4:
      gift = "ELECOM USBメモリ 16GB";
      break;
    default:
      gift = "";
  }
  crtUser.textContent = gift;

  index++;
}

let rows = document.getElementsByClassName("text");
let rowLength = rows.length;
let tmp;

index = 0;

let width = window.innerWidth;
if (width <= 480) {
  rows[0].children[0].textContent = rows[0].children[0].textContent + "st";
  rows[1].children[0].textContent = rows[1].children[0].textContent + "nd";
  rows[2].children[0].textContent = rows[2].children[0].textContent + "rd";
  rows[3].children[0].textContent = rows[3].children[0].textContent + "th";
  rows[4].children[0].textContent = rows[4].children[0].textContent + "th";

  rows[0].children[0].style.color = "#e6b422";
  rows[1].children[0].style.color = "#c9caca";
  rows[2].children[0].style.color = "#815a2b";
  rows[3].children[0].style.color = "#488c8a";
  rows[4].children[0].style.color = "#488c8a";

  while (index < rowLength) {
    if (index < 5) {
      rows[index].style.padding = "5px 0 0 0";
      rows[index].style.margin = "0 0 20px 0";

      for (let i = 0; i <= 3; i++) {
        rows[index].children[i].style.width = "100vw";
        rows[index].children[i].style.padding = "1px 0";
      }

      rows[index].children[0].style.padding = "0";

      rows[index].children[0].style.fontSize = "40px";
      rows[index].children[1].style.fontSize = "50px";
      rows[index].children[2].style.fontSize = "20px";
      rows[index].children[3].style.fontSize = "30px";

      tmp = rows[index].children[2].textContent;
      rows[index].children[2].textContent = rows[index].children[3].textContent;
      rows[index].children[3].textContent = tmp;
    }

    index++;
  }

  for (index = 0; rowLength > index; index++) {
    if (index <= 4) {
      rows[index].children[3].classList.add("scoreAfter");
    } else {
      rows[index].children[2].classList.add("scoreAfter");
      rows[index].children[0].classList.add("rankAfter");
      
    }
  }
}

let $form = document.getElementById('form');

$form.addEventListener('click', function() {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSeNpS6vEN2YipWKC2ziN7giJVGI1MCFt1ryStH43Fot4HV1kg/viewform', '_blank');
})