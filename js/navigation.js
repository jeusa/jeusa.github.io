// Navigation active state management
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Remove active class from all nav links
      navLinks.forEach(l => l.classList.remove('active'));
      
      // Add active class to clicked link (except for "Jeúsa Hamer" home link)
      if (!this.href.endsWith('#')) {
        this.classList.add('active');
      }
    });
  });
});
