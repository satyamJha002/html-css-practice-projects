document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const successState = document.getElementById("successful-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm()) {
      successState.classList.add("show");
      setTimeout(() => form.submit(), 2000);
      form.reset();
    }
  });

  function validateForm() {
    let valid = true;

    let message = "This field is required";
    let color = "red";

    /* check first name is valid or not */
    const fname = document.getElementById("fname");
    const fnameError = document.getElementById("fname-error");
    if (fname.value.trim() === "") {
      valid = false;
      fnameError.innerHTML = message;
      fname.style.borderColor = color;
    } else {
      fnameError.innerHTML = "";
      fname.style.borderColor = "";
    }

    /* check last name is valid or not  */
    const lname = document.getElementById("lname");
    const lnameError = document.getElementById("lname-error");

    if (lname.value.trim() === "") {
      valid = false;
      lnameError.innerHTML = message;
      lname.style.borderColor = color;
    } else {
      lnameError.innerHTML = "";
      lname.style.borderColor = "";
    }

    /* check email is valid or not */
    const email = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegExp.test(email.value)) {
      valid = false;
      emailError.innerHTML = "Please enter a valid email address.";
      email.style.borderColor = color;
    } else {
      emailError.innerHTML = "";
      email.style.borderColor = "";
    }

    /* check query type */
    const queryType = document.querySelector("input[name=radio-btn]:checked");
    const queryError = document.getElementById("query-type-error");

    if (!queryType) {
      valid = false;
      queryError.innerHTML = "Please select a query type.";
    } else {
      queryError.innerHTML = "";
    }

    /* check message */
    const messageArea = document.getElementById("message");
    const messageError = document.getElementById("message-error");

    if (messageArea.value === "") {
      valid = false;
      messageError.innerHTML = message;
      messageArea.style.borderColor = color;
    } else {
      messageError.innerHTML = "";
      messageArea.style.borderColor = "";
    }

    /* check consent is checked or not */
    const isConsentChecked = document.getElementById("consent");
    const consentError = document.getElementById("consent-error");
    if (!isConsentChecked.checked) {
      valid = false;
      consentError.innerHTML =
        "To submit this form, please consent to being contacted";
    } else {
      consentError.innerHTML = "";
    }

    return valid;
  }
});
