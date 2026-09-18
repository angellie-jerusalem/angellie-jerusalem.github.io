// Contact Modal
    function openContact(){
      document.getElementById('contactModal').classList.add('active');
      document.getElementById('nav-toggle').checked = false;
    }

    function closeContact(){
      document.getElementById('contactModal').classList.remove('active');
    }

    function handleSubmit(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      window.location.href = `mailto:angelliejerusalem.08@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;

      document.querySelector('.contact-form').reset();
      closeContact();
    }

    // Close modal when clicking outside
    document.getElementById('contactModal').addEventListener('click', function(e){
      if(e.target === this){
        closeContact();
      }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape'){
        closeContact();
        document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('active'));
        document.getElementById('nav-toggle').checked = false;
      }
    });

    // Dropdown toggle
    document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', function(e){
        e.preventDefault();
        const menu = this.parentElement;
        const wasActive = menu.classList.contains('active');

        // close every other dropdown first
        document.querySelectorAll('.dropdown-menu').forEach(m => {
          if(m !== menu) m.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-toggle').forEach(t => {
          if(t !== this) t.setAttribute('aria-expanded', 'false');
        });

        // toggle this dropdown using classList.toggle()
        menu.classList.toggle('active');
        this.setAttribute('aria-expanded', wasActive ? 'false' : 'true');
      });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e){
      if(!e.target.closest('.dropdown-menu')){
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));
      }
    });

    // Close dropdown + mobile menu once a link is chosen
    document.querySelectorAll('.dropdown-content label').forEach(item => {
      item.addEventListener('click', function(){
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('active');
        });
        document.getElementById('nav-toggle').checked = false;
      });
    });

    // Close mobile menu once a top-level link is chosen
    document.querySelectorAll('.links > label').forEach(item => {
      item.addEventListener('click', function(){
        document.getElementById('nav-toggle').checked = false;
      });
    });