const code = document.querySelector(".code");
const hiddenCode = document.querySelector(".hiddenCode");
const button = document.querySelector(".btn");
const modeBtn = document.querySelector(".mode-bin");
const backBtn = document.querySelector(".bac-btn");
const modeOne = document.querySelector(".mode-one");
const modeTwo = document.querySelector(".mode-two");
const themeBtn = document.querySelector(".theme-btn");
const themeSection = document.querySelector(".theme-section");

function set_cookie(name, value) {
  document.cookie = name + "=" + value + "; Path=/;";
}
function delete_cookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

window.addEventListener("load", () => {
  code.innerHTML = hiddenCode.value.replaceAll(",", "");
  console.log(code.innerHTML);
  hljs.highlightAll();
  code.innerHTML = code.innerHTML;

  if (document.cookie.includes("lightmode")) {
    modeBtn.style.backgroundColor = "transparent";
    modeBtn.style.borderColor = "hsla(0, 0%, 100%, 0.2)";
    modeOne.style.left = "4px";
  }
});

function changeMode() {
  if (modeOne.style.left !== "4px") {
    modeBtn.style.backgroundColor = "transparent";
    modeBtn.style.borderColor = "hsla(0, 0%, 100%, 0.2)";
    modeOne.style.left = "4px";
    set_cookie("lightmode", "on");
  } else {
    modeBtn.style.backgroundColor = "#1565c0";
    modeBtn.style.borderColor = "rgb(202, 202, 202)";
    modeOne.style.left = "24px";
    delete_cookie("lightmode");
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

const inputSectionUp = () => {
  if (themeSection.style.display === "inline") {
    themeSection.style.display = "none";
  } else {
    themeSection.style.display = "inline";
  }
};

themeBtn.addEventListener("click", inputSectionUp);
