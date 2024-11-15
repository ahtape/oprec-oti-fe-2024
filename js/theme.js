const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

themeSwitch.addEventListener("click", () => {
  // cahgne theme
  body.classList.toggle("lightmode");
  themeSwitch.classList.toggle("lightmode");
  // change icon
  if (themeSwitch.classList == "lightmode") {
    themeSwitch.innerHTML = "<i class='bi bi-moon-fill'></i>";
  } else {
    themeSwitch.innerHTML = "<i class='bi bi-brightness-high'>";
  }
});
