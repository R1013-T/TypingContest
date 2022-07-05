console.log("view:allview");

let $container = document.getElementById("js-container");
let $ranklabel = $container.children[0].children[0].children[2].children[0];
let userlength = $container.childElementCount;

let index = 0;

console.log($ranklabel.textContent);

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
  console.log(crtUser.textContent);
  switch (index) {
    case 0:
      gift = "gift1";
      break;
    case 1:
      gift = "Amazonギフト券";
      break;
    case 2:
      gift = "Logicool マウス";
      break;
    case 3:
      gift = "USBメモリ";
      break;
    case 4:
      gift = "USBメモリ";
      break;
    default:
      gift = "";
  }
  crtUser.textContent = gift;

  index++;
}
