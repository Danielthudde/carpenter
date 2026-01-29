const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const loginModal = document.getElementById("loginModal");
const loginBtns = [
  document.getElementById("loginBtn"),
  document.getElementById("loginBtnMobile"),
  document.getElementById("ctaLogin"),
  document.getElementById("ctaLogin2"),
].filter(Boolean);

function openModal() {
  loginModal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  loginModal.setAttribute("aria-hidden", "true");
}

loginBtns.forEach((btn) => btn.addEventListener("click", openModal));

loginModal.addEventListener("click", (e) => {
  const close = e.target?.dataset?.close === "true";
  if (close) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Mobilmeny
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileNav.hidden;
  mobileNav.hidden = isOpen;
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
});

// Krymp headern vid scroll
const header = document.querySelector(".header");
const toggleCompactHeader = () => {
  if (!header) return;
  header.classList.toggle("header--compact", window.scrollY > 40);
};

toggleCompactHeader();
window.addEventListener("scroll", toggleCompactHeader, { passive: true });
