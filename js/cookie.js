const container = document.querySelector(".warning");
if (document.cookie.indexOf("warning") != -1) {
  container.classList.remove("warning--active");
}

if (document.querySelector(".warning")) {
  const apply = container.querySelector(".warning__apply");
  apply.addEventListener("click", () => {
    container.classList.remove("warning--active");
  });
}
