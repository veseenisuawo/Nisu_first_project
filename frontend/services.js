document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".logo-slider");
    const sliderClone = slider.cloneNode(true);
    slider.parentElement.appendChild(sliderClone);
});