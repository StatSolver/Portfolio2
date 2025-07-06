document.addEventListener("DOMContentLoaded", function () {
  // Toggle back to top
  const backToTop = document.getElementById("back-to-top");
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Add more custom logic here as needed
});
