const navbar = document.getElementById('navbar');
  
  // Change styles when scrolled
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#222';
      navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
    } else {
      navbar.style.backgroundColor = '#333';
      navbar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    }
  });

  // Change styles on hover
  const navLinks = document.querySelectorAll('#navbar a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
      link.style.backgroundColor = '#555';
      link.style.color = '#ffd700'; // Change this to the desired hover font color
    });

    link.addEventListener('mouseleave', function () {
      link.style.backgroundColor = '';
      link.style.color = '#fff'; // Change this to the default font color
    });
  });