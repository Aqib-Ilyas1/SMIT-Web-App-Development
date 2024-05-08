const rangeInput = document.getElementById("input");
const sliderNumber = document.getElementById("range-text");
const generateField = document.getElementById("generate-field");
const generateButton = document.getElementById("generate-button");

var allChars =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNMOPQRSTUVWXYZ1234567890!@#$%^&*()_+;:<>?/";

// Generate Password function
const generatePass = () => {
  var newPassword = "";

  for (let i = 0; i < rangeInput.value; i++) {
    var randomNumbers = Math.floor(Math.random() * allChars.length);
    newPassword += allChars[randomNumbers];
  }
  generateField.value = newPassword;
};

rangeInput.addEventListener("input", () => {
  sliderNumber.innerText = rangeInput.value;
  generatePass();
});

//rangeInput = slider

//slider-Number = Text that will be changed after slider movement

generateButton.addEventListener("click", generatePass);
