// Taking elements
const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const womanImg = document.getElementById("woman_img");
// Events
buttons.forEach((element) =>
  element.addEventListener("click", accordionCollapse)
);
// Functions
function accordionCollapse() {
  this.classList.toggle("is_collapsed");

  const content = this.nextElementSibling;

  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
