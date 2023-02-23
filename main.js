let scroll = document.querySelector(".scroll");

scroll.addEventListener("click", function setScrollTo() {
  window.scrollTo({
    top: 1350,
    left: 0,
    behavior: "smooth",
  });
});
