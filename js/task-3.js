const textInput = document.querySelector("input#name-input");
const textOutput = document.querySelector("span#name-output");

textInput.addEventListener("input", (event) => {
  const nameTrimmed = textInput.value.trim();
  textOutput.textContent = nameTrimmed || "Anonymous";
});
