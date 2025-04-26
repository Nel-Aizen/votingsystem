const tabs = document.querySelectorAll('.tab-link');
  const sections = document.querySelectorAll('.tab-section');

  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Hide all sections
      sections.forEach(section => section.style.display = 'none');

      // Show clicked section
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.style.display = 'block';
      }
    });
  });

  // Show the first section by default
  document.getElementById('election').style.display = 'none';