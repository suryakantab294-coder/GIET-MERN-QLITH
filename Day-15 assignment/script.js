// 1️ Click Counter
let count = 0;
const counterBtn = document.getElementById("counterBtn");
const counterSpan = document.getElementById("counter");

counterBtn.addEventListener("click", () => {
  count++;
  counterSpan.textContent = count;
});

// 2️ Disable Button After 5 Clicks
let limitCount = 0;
const limitBtn = document.getElementById("limitBtn");

limitBtn.addEventListener("click", () => {
  limitCount++;
  limitBtn.textContent = `Click (${limitCount})`;

  if (limitCount === 5) {
    limitBtn.disabled = true;
    limitBtn.textContent = "Limit Reached";
  }
});

// 3️ Input Live Length Counter
const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const maxLength = 20;

textInput.addEventListener("input", () => {
  const length = textInput.value.length;
  charCount.textContent = `${length} / ${maxLength}`;

  if (length === maxLength) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black";
  }
});

// 4️ Change Background on Hover
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseenter", () => {
  hoverBox.style.backgroundColor = "skyblue";
});

hoverBox.addEventListener("mouseleave", () => {
  hoverBox.style.backgroundColor = "lightgray";
});

// 5️ Form Validation on Submit
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formError = document.getElementById("formError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    formError.textContent = "All fields are required!";
  } else {
    formError.textContent = "";
    alert("Form submitted successfully!");
  }
});
