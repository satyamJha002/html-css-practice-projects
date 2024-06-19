document.addEventListener("DOMContentLoaded", () => {
  const homeContainer = document.querySelector(".signup-container");
  const backToHome = document.querySelector(".dismiss-btn");
  const thankyouContainer = document.querySelector(
    ".thankyou-message-container"
  );
  const submitBtn = document.querySelector(".subscribe-btn");

  function validEmail() {
    const emailIsValid = document.querySelector(".email-valid");

    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegExp.test(emailIsValid.value)) {
      showError();
    } else {
      showThankYouPage();
    }
  }

  function showError() {
    const errorText = document.querySelector(".valid-email");
    const emailIsValid = document.querySelector(".email-valid");
    errorText.classList.remove("hidden");
    emailIsValid.classList.add("email-error");
    setTimeout(() => {
      emailIsValid.classList.remove("email-error");
      errorText.classList.add("hidden");
    }, 3000);
  }

  function showThankYouPage() {
    const emailId = document.querySelector(".email-id");
    const emailIsValid = document.querySelector(".email-valid");
    homeContainer.classList.add("hidden");
    thankyouContainer.classList.remove("hidden");
    emailId.innerText = emailIsValid.value;
  }

  function showHomeContainer() {
    const emailIsValid = document.querySelector(".email-valid");
    homeContainer.classList.remove("hidden");
    thankyouContainer.classList.add("hidden");
    emailIsValid.value = "";
  }

  submitBtn.addEventListener("click", () => {
    validEmail();
  });

  backToHome.addEventListener("click", () => {
    showHomeContainer();
  });
});
