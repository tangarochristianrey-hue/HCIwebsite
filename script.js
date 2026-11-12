const menuBtn = document.getElementById("menuBtn"),
  navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
  menuBtn.textContent = open ? "✕" : "☰";
});
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.textContent = "☰";
  }),
);
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const subject = encodeURIComponent(
    "Finuity website inquiry from " + d.get("name"),
  );
  const body = encodeURIComponent(
    "Name: " +
      d.get("name") +
      "\nEmail: " +
      d.get("email") +
      "\n\n" +
      d.get("message"),
  );
  window.location.href =
    "mailto:finuity@example.com?subject=" + subject + "&body=" + body;
});
