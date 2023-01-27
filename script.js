const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  //   console.log("clickeeeee");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    // btn.textContent = "Close";
    btn.innerHTML = "Close";
  } else {
    form.classList.add("hidden");
    // btn.textContent = "Share a fact";
    btn.innerHTML = "Share a fact";
  }
});
