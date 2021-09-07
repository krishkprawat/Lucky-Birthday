const dateofBirth = document.querySelector("#dateofbirth");
const luckyNumber = document.querySelector("#luckynumber");
const checkNumber = document.querySelector("#checkNumber");
const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your Birthday is lucky! 😇";
  } else {
    outputBox.innerText = "oops! your birthday is not lucky😒 ";
  }
}

function checkBirthday() {
  const dob = dateofBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob) compareValues(sum, luckyNumber.value);
  else outputBox.innerText = "enter both fields ";
}

//to calculate sum>>>

function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumber.addEventListener("click", checkBirthday);
