const pMesage = document.querySelector("#pMessage");
const btnChangeColor = document.querySelector("#btnChangeColor");

btnChangeColor.addEventListener("click", fnChangeColor);
function fnChangeColor () {
  let random = Math.floor(Math.random() * 1000);
  console.log(random);
  pMesage.setAttribute("style", "color: #" + String(random))

}
