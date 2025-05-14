// Smooth scroll to anchor on nav link click
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update active links
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
  
  // Function to open links in a new tab
  function openLink(url) {
    window.open(url, '_blank', 'noopener');
  }
  
  // Keyboard accessibility for project cards
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

   // Alert sambutan
   window.addEventListener("load", function() {
    alert("Selamat datang di portfolio Refva Lena!");
  });
  