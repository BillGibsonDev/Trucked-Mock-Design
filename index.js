function toggleNav() {
  let x = document.getElementById("mobile-nav");
  if (x.style.width === "100%") {
    x.style.width = "0%";
  } else {
    x.style.width = "100%";
  }
}