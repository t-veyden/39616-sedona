//FOR EACH
// var link = document.querySelector(".btn--submit");
// var errorPopup = document.querySelector(".modal-content--error");
// var successPopup = document.querySelector(".modal-content--success");
// var close = document.querySelector(".btn--close");
//
// var popup = [errorPopup, successPopup];
//
// link.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.forEach(function(el) {
//     el.classList.add("modal-content--show")
//   })
// });
//
// close.addEventListener("click", function(event) {
//   event.preventDefault();
//   popup.forEach(function(el) {
//     el.classList.remove("modal-content--show")
//   })
// });
//
// window.addEventListener("keydown", function(event) {
//   if (event.keyCode === 27) {
//     popup.forEach(function(el) {
//       el.classList.remove("modal-content--show")
//     })
//   }
// });


//FOR ONE
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
