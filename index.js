const sidebar = document.querySelector('.sidebar-container');
const sidebarLinks = document.querySelectorAll('.link');
const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.togler');
openBtn.addEventListener('click', () => sidebar.classList.add('show-sidebar'));
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
});
sidebarLinks.forEach((btn) => {
  btn.addEventListener('click', () => sidebar.classList.remove('show-sidebar'));
});
