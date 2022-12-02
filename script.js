const btn = document.querySelector(".spin");
const wheel = document.querySelector(".box");
const span1 = document.querySelector(".span1 b");
const span2 = document.querySelector(".span2 b");
const span3 = document.querySelector(".span3 b");
const span4 = document.querySelector(".span4 b");
const span5 = document.querySelector(".span5 b");
const span6 = document.querySelector(".span6 b");
const span7 = document.querySelector(".span7 b");
const span8 = document.querySelector(".span8 b");
const inpA = document.querySelector("#a");
const inpB = document.querySelector("#b");
const inpC = document.querySelector("#c");
const inpD = document.querySelector("#d");

btn.addEventListener("click", () => {
    var x = 5000;
    var y = 9999;
    var deg = Math.floor(Math.random() * 10000);
    wheel.style.transform = `rotate(${deg}deg)`;
});

inpA.addEventListener("input", () => {
    span1.innerHTML = inpA.value;
    span5.innerHTML = inpA.value;
});

inpB.addEventListener("input", () => {
    span2.innerHTML = inpB.value;
    span6.innerHTML = inpB.value;
});

inpC.addEventListener("input", () => {
    span3.innerHTML = inpC.value;
    span7.innerHTML = inpC.value;
});

inpD.addEventListener("input", () => {
    span4.innerHTML = inpD.value;
    span8.innerHTML = inpD.value;
});