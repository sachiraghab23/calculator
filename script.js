let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (let item of buttons) {
    item.addEventListener("click", (e) => {
        buttonText = e.target.innerText;
        screen.value = "";
        if (buttonText == "X") {
            buttonText = "*";
            screenValue += buttonText;
        }
        else if (buttonText == "C") {
            screenValue = "";
        }
        else if (buttonText == "=") {
            screenValue = eval(screenValue);
        }
        else if (buttonText == "%") {
            screenValue += "/100";
        }
        else {
            screenValue += buttonText;
        }
        screen.value = screenValue;
    });
}
