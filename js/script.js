var showHideButton = document.querySelector(".picking__button-pop-up");
var popUp = document.querySelector(".pop-up");
showHideButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popUp.classList.toggle("show");
})