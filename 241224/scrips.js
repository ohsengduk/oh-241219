const slides = document.querySelector(".slides");
const slide = slides.querySelectorAll("li");
// console.log(slide);

const slideCount = slide.length;

// console.log(slide);

for (let i = 0; i < slideCount; i++) {
  const cloneSlide = slide[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  slides.append(cloneSlide);
}

/*앞쪽에 만들기*/
for (let i = slideCount - 1; i >= 0; i--) {
  const cloneSlide = slide[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  slides.prepend(cloneSlide);
} /*4부터 출발을 해서 0과 동일하게 감소 연산자*/
