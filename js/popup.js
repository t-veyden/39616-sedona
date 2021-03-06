var btn = document.querySelector(".btn--submit");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".btn--close");

btn.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content--show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content--show")) {
      popup.classList.remove("modal-content--show");
    }
  }
});
