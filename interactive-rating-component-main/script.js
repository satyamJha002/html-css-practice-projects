const ratingNumberBtn = document.querySelectorAll(".btn");
const rating = document.querySelector("#rating");
const thankUContainer = document.querySelector(".thankyou-container");
const submitBtn = document.getElementById("submit-btn");
const ratingContainer = document.querySelector(".rating-card");

submitBtn.addEventListener("click", () => {
  thankUContainer.classList.remove("hidden");
  ratingContainer.style.display = "none";
});

ratingNumberBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    rating.innerText = btn.innerText;
  });
});
