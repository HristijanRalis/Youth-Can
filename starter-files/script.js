const form = document.getElementById("form");
const username = document.getElementById("name");
const userEmail = document.getElementById("email");
const userTextarea = document.getElementById("text");


// FUNCTION who made  this all code be active
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

// FUNCTION for invalid inputs
const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

// FUNCTION for valid inputs
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// FUNCTION for valid email
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

// Function who check valid inputs
const validateInputs = () => {
  const usernameValue = username.value.trim();
  const userEmailValue = email.value.trim();
  const userTextareaValue = userTextarea.value.trim();

  // NAME
  if (usernameValue === "") {
    setError(username, "Name is required");
  } else {
    setSuccess(username);
  }

  // EMAIL
  if (userEmailValue === "") {
    setError(userEmail, "Email is required");
  } else if (!isValidEmail(userEmailValue)) {
    setError(userEmail, "Provide a valid email address");
  } else {
    setSuccess(userEmail);
  }

  // TEXTAREA
  if (userTextareaValue === "") {
    setError(userTextarea, "Message is required. ");
  } else if (userTextareaValue.length < 10) {
    setError(userTextarea, "Message must be contain 10 characters. ");
  } else {
    setSuccess(userTextarea);
  }
};
