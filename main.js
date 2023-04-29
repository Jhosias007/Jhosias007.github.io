const pMesage = document.querySelector("#pMessage");
const btnChangeColor = document.querySelector("#btnChangeColor");

btnChangeColor.addEventListener("click", fnChangeColor);
function fnChangeColor () {
  pMesage.classList.toggle("red");
  pMesage.classList.toggle("blue");

}
