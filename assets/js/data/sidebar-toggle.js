document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("sidebar-trigger");
  const sidebar = document.getElementById("sidebar");
  const mask = document.getElementById("mask");

  const openSidebar = () => {
    sidebar.classList.add("open");
    mask.classList.remove("d-none");
  };

  const closeSidebar = () => {
    sidebar.classList.remove("open");
    mask.classList.add("d-none");
  };

  btn?.addEventListener("click", openSidebar);
  mask?.addEventListener("click", closeSidebar);
});

const openSidebar = () => {
  sidebar.classList.add("open");
  mask.classList.remove("d-none");
  document.body.style.overflow = "hidden";
};

const closeSidebar = () => {
  sidebar.classList.remove("open");
  mask.classList.add("d-none");
  document.body.style.overflow = "";
};
