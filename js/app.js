const show = document.getElementById("show");
const hide = document.querySelectorAll(".hide");

show.addEventListener("click", () => {
  // toggle show and hide
  hide.forEach((el) => {
    el.classList.toggle("hidden");
  });
  // change text
  if (show.innerHTML === "+3 More") {
    show.innerHTML = "Show less";
  } else {
    show.innerHTML = "+3 More";
  }
});

const collapseButton = document.getElementById("collapse-button");
const collapse = document.querySelectorAll(".collapse");

collapseButton.addEventListener("click", () => {
  // toggle show and hide
  collapse.forEach((el) => {
    el.classList.toggle("collapsed");
  });
  collapseButton.classList.toggle("active");
  // change text
  if (collapseButton.classList == "active") {
    collapseButton.innerHTML = "<i class='bi bi-chevron-up'></i> Collapse";
  } else {
    collapseButton.innerHTML = "<i class='bi bi-chevron-down'></i> More";
  }
});
