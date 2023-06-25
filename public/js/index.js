const code = document.querySelector(".code");
const hiddenCode = document.querySelector(".hiddenCode");
const button = document.querySelector(".btn");
const modeBtn = document.querySelector(".mode-bin");
const backBtn = document.querySelector(".bac-btn");
const modeOne = document.querySelector(".mode-one");
const modeTwo = document.querySelector(".mode-two");
window.addEventListener("load", () => {
  code.innerHTML = hiddenCode.value.replaceAll(",", "");
  console.log(code.innerHTML);
  hljs.highlightAll();
  code.innerHTML = code.innerHTML;
});

function changeMode() {
  if (modeOne.style.left !== "4px") {
    modeBtn.style.backgroundColor = "transparent";
    modeBtn.style.borderColor = "hsla(0, 0%, 100%, 0.2)";
    modeOne.style.left = "4px";
  } else {
    modeBtn.style.backgroundColor = "#1565c0";
    modeBtn.style.borderColor = "rgb(202, 202, 202)";
    modeOne.style.left = "24px";
  }
}

function changeBackground() {
  if (modeTwo.style.left !== "4px") {
    backBtn.style.backgroundColor = "transparent";
    backBtn.style.borderColor = "hsla(0, 0%, 100%, 0.2)";
    modeTwo.style.left = "4px";
  } else {
    backBtn.style.backgroundColor = "#1565c0";
    backBtn.style.borderColor = "rgb(202, 202, 202)";
    modeTwo.style.left = "24px";
  }
}

modeBtn.addEventListener("click", changeMode);
backBtn.addEventListener("click", changeBackground);
