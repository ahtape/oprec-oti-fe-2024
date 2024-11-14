const show = document.getElementById("show");
const hide = document.querySelectorAll(".hide");

show.addEventListener("click", () => {
  // toggle show and hide
  hide.forEach((el) => {
    el.classList.toggle("hidden");
  });
  // change tetz
  if (show.innerHTML === "+3 More") {
    show.innerHTML = "Show less";
  } else {
    show.innerHTML = "+3 More";
  }
});
