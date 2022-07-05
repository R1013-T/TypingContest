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
      gift = "gift2";
      break;
    case 2:
      gift = "gift3";
      break;
    case 3:
      gift = "gift4";
      break;
    case 4:
      gift = "gift5";
      break;
    default:
      gift = "";
  }
  crtUser.textContent = gift;

  index++;
}
