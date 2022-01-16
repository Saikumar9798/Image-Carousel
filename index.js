import { data } from "./data.js";

const carousel = document.querySelector(".carousel");
const ul = document.querySelector("[data-slides]");

function createCarousel(parentElement) {
  data.forEach((datum, i) => {
    const li = document.createElement("li");
    li.classList.add("slide");
    li.setAttribute("data-value", i + 1);
    if (!!!i) {
      li.setAttribute("data-active", "");
    }
    const img = document.createElement("img");
    img.src = datum;
    img.alt = `Dummy image - ${i}`;
    li.append(img);
    parentElement.append(li);
  });
}

createCarousel(ul);

const slides = document.querySelectorAll(".carousel ul li.slide");
let activeSlide = document.querySelector(".carousel ul li.slide[data-active]");
let newSlide = document.querySelector(`[data-value='1']`);

carousel.addEventListener("click", (e) => {
  e.preventDefault();
  let offset = 0;
  const target = e.target;
  if (target.tagName === "BUTTON") {
    if (target.dataset.carouselButton.includes("next")) {
      if (+activeSlide.dataset.value === slides.length) {
        offset = 1;
      } else {
        offset = +activeSlide.dataset.value + 1;
      }
    } else {
      if (+activeSlide.dataset.value === 1) {
        offset = slides.length;
      } else {
        offset = +activeSlide.dataset.value - 1;
      }
    }
    activeSlide.removeAttribute("data-active");
    newSlide = document.querySelector(`[data-value='${offset}']`);
    activeSlide = newSlide;
    newSlide.setAttribute("data-active", "");
  }
});
