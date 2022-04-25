const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function trybeLink(event) {
    event.preventDefault(HREF_LINK);
}
document.addEventListener("click", trybeLink)

function checkbox(event) {
    event.preventDefault(INPUT_CHECKBOX);
}
document.addEventListener("click", checkbox)

function typeOnlyA(event) {
    var typedLetter = event.key;
    if (typedLetter === "a") {

    } else {
        event.preventDefault(INPUT_TEXT);
    }
}
document.addEventListener("keypress", typeOnlyA)