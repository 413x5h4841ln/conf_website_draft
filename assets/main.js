// Add 'external' rel attributes and open Google Drive links in new tab
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[target="_blank"]').forEach(a => {
    a.rel = 'noopener';
  });
});
