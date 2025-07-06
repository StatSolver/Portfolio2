document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("mode-toggle");
  const icon = toggle?.querySelector("i");
  const root = document.documentElement;
  const THEME_KEY = "theme";

  // Helper to update the icon
  const updateIcon = (theme) => {
    if (!icon) return;
    icon.classList.remove("fa-moon", "fa-sun");
    icon.classList.add(theme === "dark" ? "fa-moon" : "fa-sun");
  };

  // Apply saved theme on load
  const saved = localStorage.getItem(THEME_KEY);
  const initialTheme = saved || "light";
  root.setAttribute("data-mode", initialTheme);
  updateIcon(initialTheme);

  // Toggle theme on click
  toggle?.addEventListener("click", () => {
    const current = root.getAttribute("data-mode");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-mode", next);
    localStorage.setItem(THEME_KEY, next);
    updateIcon(next);
    // console.log("Switched to:", next);
  });
});
