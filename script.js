function showMessage() {
  alert("Welcome to Kemal's Developer Journey!");
}
function toggleMenu() {
  const menu = document.getElementById("navLinks");
  menu.classList.toggle("active");
}
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}