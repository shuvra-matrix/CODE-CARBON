const code = document.querySelector(".code");
const hiddenCode = document.querySelector(".hiddenCode");
const button = document.querySelector(".btn");
window.addEventListener("load", () => {
  code.innerHTML = hiddenCode.value.replaceAll(",", "");
  console.log(code.innerHTML);
  hljs.highlightAll();
  code.innerHTML = code.innerHTML;
});
