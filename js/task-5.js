const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  var hexcolor = getRandomHexColor();

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  document.body.style.backgroundColor = hexcolor;
  span.innerHTML = hexcolor;
});
