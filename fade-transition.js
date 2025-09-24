document.addEventListener("DOMContentLoaded", function() {
  // Add fade-in effect on page load
  document.body.classList.add('fade-in');

  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href &&
      !href.startsWith('#') &&
      !href.startsWith('http') &&
      !link.hasAttribute('target')
    ) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.body.classList.remove('fade-in');
        document.body.classList.add('fade-out');
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      });
    }
  });

  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      document.body.classList.remove('fade-out');
      document.body.classList.add('fade-in');
    }
  });
});
;
