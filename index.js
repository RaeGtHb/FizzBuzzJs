// DOM manipulation
const body = document.querySelector("body");

const div = document.createElement("div");
div.style.border = "1px solid red";
div.style.padding = "10px";

body.append(div);

const label = document.createElement("label");
label.for = "num";
label.innerText = "Input any number"

div.append(label);

const input = document.createElement("input");
input.id = "num";
input.type = "number";

div.append(input);

const button = document.createElement("button");
button.onclick = submit;
button.innerText = "Submit";

div.append(button);

// Logic
function submit() {
    fizzBuzz(input.value);
}

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        let text = null;

        if (i % 10 === 0) {
            text = document.createElement("h4");
            text.textContent = "fizzbuzz";
        } else if (i % 5 === 0) {
            text = document.createElement("h4");
            text.textContent = "buzz";
        } else if (i % 3 === 0) {
            text = document.createElement("h4");
            text.textContent = "fizz";
        } else {
            text = document.createElement("h4");
            text.textContent = i;
        }

        body.append(text);
    }
}

