// Get the sidebar, toggle button, and close button elements
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-btn");
const closeBtn = document.getElementById("close-btn");

// Add event listeners
toggleBtn.addEventListener("click", showSidebar);
closeBtn.addEventListener("click", hideSidebar);
document.addEventListener("click", hideSidebarOutside);

// Functions to show and hide the sidebar
function showSidebar() {
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  sidebar.style.display = 'none';
}

// // Hide the sidebar when clicking outside of it
// function hideSidebarOutside(event) {
//   if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
//     hideSidebar();
//   }
// }
