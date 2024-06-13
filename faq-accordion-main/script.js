const accordian = document.querySelectorAll(".accordian").length;

for (let i = 0; i < accordian; i++) {
  const plusBtn = document.querySelectorAll(".plus-btn")[i];
  const minusBtn = document.querySelectorAll(".minus-btn")[i];

  const p = document.querySelectorAll("p")[i];

  function show() {
    plusBtn.style.display = "none";
    minusBtn.style.display = "block";
    p.style.display = "block";
  }

  function hide() {
    plusBtn.style.display = "block";
    minusBtn.style.display = "none";
    p.style.display = "none";
  }

  plusBtn.addEventListener("click", show);
  minusBtn.addEventListener("click", hide);
}
