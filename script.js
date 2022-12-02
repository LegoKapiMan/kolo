const btn = document.querySelector(".spin");
const wheel = document.querySelector(".box");
const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("div.span div");
const arrow = document.querySelector(".mainbox");

let panels = [
    "pink",
    "green",
    "blue",
    "pink",
    "yellow",
    "blue",
    "green"
];

let rotation = 0;
let lastRotation = 0;
let panel = 0;
let newPanel = null;

let fullRotations = 0;
let innerRotation = 45;

btn.addEventListener("click", () => {
    lastRotation = rotation;
    let deg = Math.floor(Math.random() * 1800);
    // let deg = 200;
    wheel.style.transform = `rotate(${deg}deg)`;
    rotation = deg;
    let difference = rotation - lastRotation;

    // console.log(lastRotation, rotation);
    // console.log(`roznica: ${difference}`);
    // console.log(`end: ${difference % 45}`);
    // console.log(`panels: ${Math.floor(difference / 45)}`);

    panel = panel + Math.floor(Math.abs(difference / 45));
    console.log("panel index: " + panel);
    if (panel > 8) { panel = panel % 8; }
    console.log("panel index sub: " + panel);

    console.log(panels[panel - 1]);

    // fullRotations = Math.floor(deg / 360);
    // innerRotation = rotation - ((rotation % 45) * fullRotations)
    // console.log(rotation, innerRotation, fullRotations)

    if (arrow.classList.contains("animate")) arrow.classList.remove("animate");
    setTimeout(() => {
        arrow.classList.add("animate");
    }, 5000)
});

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        spans[i].innerHTML = inputs[i].value;
        spans[i + 4].innerHTML = inputs[i].value;
    });
}