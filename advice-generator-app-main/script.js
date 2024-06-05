const clickDice = document.querySelector(".dice-icon");
const showAdvice = document.querySelector(".advice-text");

clickDice.addEventListener("click", randomAdvice);

async function randomAdvice() {
  const adviceId = document.querySelector(".id");

  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  adviceId.innerHTML = `#${data.slip.id}`;
  showAdvice.innerHTML = `"${data.slip.advice}"`;
}
