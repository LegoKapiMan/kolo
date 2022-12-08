const btn = document.querySelector(".spin");
const wheel = document.querySelector(".box");
const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("div.span div");
const result = document.querySelector("#result");
const arrow = document.querySelector(".mainbox");
let panelIndex = [0, 0];

let panels = [
    ["pink", 337.6, 22.5, 1],
    ["green", 22.6, 67.5, 2],
    ["blue", 67.6, 112.5, 3],
    ["pink", 112.6, 157.5, 1],
    ["yellow", 157.6, 202.5, 0],
    ["blue", 202.6, 247.5, 3],
    ["green", 247.6, 292.5, 2],
    ["yellow", 292.6, 337.5, 0]
];


btn.addEventListener("click", () => {
    result.innerHTML = "";

    // wheel rotation
    let deg = Math.floor(Math.random() * 3000);
    wheel.style.transform = `rotate(${deg}deg)`;

    // check spin result
    let rotation = deg % 360;
    for (let i = 0; i < panels.length; i++) {
        if (rotation >= panels[i][1] && rotation <= panels[i][2]) {
            panelIndex[0] = i;
            panelIndex[1] = panels[panelIndex[0]][3];
            break;
        }
    }

    // arrow animation and result display
    if (arrow.classList.contains("animate")) {
        arrow.classList.remove("animate");
    }
    setTimeout(() => {
        if (inputs[panelIndex[1]].value !== "") {
            result.innerHTML = `Spin result: <b>${inputs[panelIndex[1]].value}</b>`;
            result.style.setProperty("color", panels[panelIndex[0]][0]);
        } else {
            result.innerHTML = `Spin result: <b>${panels[panelIndex[0]][0]}</b>`;
            result.style.setProperty("color", panels[panelIndex[0]][0]);
        }
        arrow.classList.add("animate");
    }, 5000);
});

for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", () => {
        spans[i].innerHTML = inputs[i].value;
        spans[i + 4].innerHTML = inputs[i].value;
    });
}