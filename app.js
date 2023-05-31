const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const pw = document.getElementById("password");
const pwc = document.getElementById("passwordConfirmation");

let countriesRegex = {
  be: /^\d{4}$/,
  nl: /^\\d{4}\\s{0,1}[A-Za-z]{2}$/,
  de: /^\\d{2}$/,
  lx: /^\\d{4}$/,
};

function checkEmail(input) {
  if (input.checkValidity()) {
    return true;
  } else {
    return false;
  }
}

// Check ZIP acording to the country selected
function checkZip(input) {
  let countrySelected = document.getElementById("Country").value;
  if (countriesRegex[countrySelected].test(input.value)) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity("Invalid field.");
    input.reportValidity();
  }
}
