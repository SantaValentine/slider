const rangeControl = document.getElementById("rangeControl");
const currentValue = document.getElementById("currentValue");

rangeControl.addEventListener("input", () => {
    currentValue.textContent = rangeControl.value;
});
