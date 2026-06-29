function toggleMenu() {
  const menu = document.getElementById("navLinks");
  menu.classList.toggle("active");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// fade-in observer
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {
  threshold: 0.1
});

elements.forEach(el => observer.observe(el));

// modal
function openModal(title, text) {
  document.getElementById("projectModal").style.display = "block";
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalText").innerText = text;
}

function closeModal() {
  document.getElementById("projectModal").style.display = "none";
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// scroll optimization
let ticking = false;

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

function handleScroll() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});