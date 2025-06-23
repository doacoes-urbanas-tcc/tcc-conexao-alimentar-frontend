document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const darkIcon = document.getElementById('theme-toggle-dark-icon');
  const lightIcon = document.getElementById('theme-toggle-light-icon');

  if (!themeToggleBtn || !darkIcon || !lightIcon) return;

  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!localStorage.getItem('color-theme') &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    darkIcon.classList.remove('hidden');
  } else {
    lightIcon.classList.remove('hidden');
  }

  themeToggleBtn.addEventListener('click', function () {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
  });
});
