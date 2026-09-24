(function () {
  var toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  var root = document.documentElement;

  function updateLabel() {
    var isDark = root.dataset.theme === 'dark';
    toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    toggle.setAttribute('aria-pressed', String(isDark));
  }

  updateLabel();

  toggle.addEventListener('click', function () {
    var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('sokret-theme', next);
    } catch (error) {
      // Theme still works for this session if storage is unavailable.
    }
    updateLabel();
  });
}());