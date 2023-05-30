const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const pw = document.getElementById("password");
const pwc = document.getElementById("password-confirmation");

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkEmail(input) {
  if (input.value.match(emailRegex)) {
    console.log("valid");
    input.classList.add(":valid");
  } else {
    console.log("not valid");
  }
}
