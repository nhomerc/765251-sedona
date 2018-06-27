var showHideButton = document.querySelector(".picking__button-pop-up");
var popUp = document.querySelector(".pop-up");
popUp.classList.toggle("show");
showHideButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    popUp.classList.remove("error");
    popUp.classList.toggle("show");
})

var inputAdults = document.querySelector(".adults input");
var buttonAdultsPlus = document.querySelector(".adults .button__plus");
var buttonAdultsMinus = document.querySelector(".adults .button__minus");
buttonAdultsPlus.addEventListener("click", function (evt) {
    evt.preventDefault();
    inputAdults.value = parseInt(document.getElementById("quantity-adults").value) + 1;
})
buttonAdultsMinus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (parseInt(document.getElementById("quantity-adults").value) > 1) {
        inputAdults.value = parseInt(document.getElementById("quantity-adults").value) - 1;
    } else {inputAdults.value = parseInt(document.getElementById("quantity-adults").value)};
})

var inputKids = document.querySelector(".kids input");
var buttonKidsPlus = document.querySelector(".kids .button__plus");
var buttonKidsMinus = document.querySelector(".kids .button__minus");
buttonKidsPlus.addEventListener("click", function (evt) {
    evt.preventDefault();
    inputKids.value = parseInt(document.getElementById("quantity-kids").value) + 1;
})
buttonKidsMinus.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (parseInt(document.getElementById("quantity-kids").value) > 0) {
        inputKids.value = parseInt(document.getElementById("quantity-kids").value) - 1;
    } else {inputKids.value = parseInt(document.getElementById("quantity-kids").value)};
})

var inputArrivalDate = document.getElementById("arrival-date");
popUp.addEventListener("submit", function(evt) {
    if (!inputArrivalDate.value || !inputAdults.value) {
        evt.preventDefault();
        popUp.classList.remove("error");
        popUp.offsetWidth = popUp.offsetWidth;
        popUp.classList.add("error");
    }
})
