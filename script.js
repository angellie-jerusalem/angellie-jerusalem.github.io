// ============ ELEMENT REFERENCES ============
const navToggle = document.getElementById('nav-toggle');
const contactModal = document.getElementById('contactModal');

// ============ HELPERS ============
function closeDropdowns(){
  document.querySelectorAll('.dropdown-menu').forEach(menu => menu.classList.remove('active'));
  document.querySelectorAll('.dropdown-toggle').forEach(t => t.setAttribute('aria-expanded', 'false'));
}

function closeMobileMenu(){
  navToggle.checked = false;
}

// ============ CONTACT MODAL ============
function openContact(){
  contactModal.classList.add('active');
  closeDropdowns();
  closeMobileMenu();
}

function closeContact(){
  contactModal.classList.remove('active');
}

function handleSubmit(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const subject = encodeURIComponent('Message from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + email);
  window.location.href = `mailto:angelliejerusalem.08@gmail.com?subject=${subject}&body=${body}`;

  document.querySelector('.contact-form').reset();
  closeContact();
}

// Close modal when clicking outside
contactModal.addEventListener('click', function(e){
  if(e.target === this){
    closeContact();
  }
});

// Close modal / dropdowns / mobile menu with Escape key
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    closeContact();
    closeDropdowns();
    closeMobileMenu();
  }
});

// ============ DROPDOWNS ============
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

    // toggle this dropdown
    menu.classList.toggle('active');
    this.setAttribute('aria-expanded', wasActive ? 'false' : 'true');
  });
});

// Close dropdown when clicking outside of it
document.addEventListener('click', function(e){
  if(!e.target.closest('.dropdown-menu')){
    closeDropdowns();
  }
});

// Close dropdown + mobile menu once a dropdown link is chosen
document.querySelectorAll('.dropdown-content label').forEach(item => {
  item.addEventListener('click', function(){
    closeDropdowns();
    closeMobileMenu();
  });
});

// Close mobile menu once a top-level link is chosen
document.querySelectorAll('.links > label').forEach(item => {
  item.addEventListener('click', closeMobileMenu);
});

// ============ MOBILE MENU ============
// Tap anywhere outside the navbar to close the mobile menu.
// (#nav-toggle sits outside .navbar, and tapping the hamburger label fires a
// second click on the checkbox itself, so ignore that one or the menu would
// close right after opening.)
document.addEventListener('click', function(e){
  if(e.target === navToggle || e.target.closest('.navbar')) return;
  closeMobileMenu();
});

// Reset the menu when the screen grows to desktop width (e.g. rotating a tablet)
const desktopQuery = window.matchMedia('(min-width: 901px)');
function handleDesktopChange(e){
  if(e.matches){
    closeMobileMenu();
    closeDropdowns();
  }
}
if(desktopQuery.addEventListener){
  desktopQuery.addEventListener('change', handleDesktopChange);
} else if(desktopQuery.addListener){
  desktopQuery.addListener(handleDesktopChange); // older Safari
}

// ============ PAGE SWITCHING ============
// Start each page at the top after choosing it from the menu
document.querySelectorAll('.page-radio').forEach(radio => {
  radio.addEventListener('change', function(){
    window.scrollTo(0, 0);
  });
});
