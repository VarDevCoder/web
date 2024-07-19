// Cambio de tema
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  
  if (currentMode === 'dark') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

