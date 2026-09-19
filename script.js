/* ==========================================================
   Portfolio interactivity
   - Contact modal open/close
   - Dropdown menus (About / Projects)
   ========================================================== */

// ---------- Contact Modal ----------
function openContact() {
  document.getElementById('contactModal').classList.add('active');
  document.getElementById('nav-toggle').checked = false;
}

function closeContact() {
  document.getElementById('contactModal').classList.remove('active');
}

function handleSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const mailBody = `${message}\n\nFrom: ${email}`;

  window.location.href =
    `mailto:angelliejerusalem.08@gmail.com?subject=Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(mailBody)}`;

  document.querySelector('.contact-form').reset();
  closeContact();
}

document.getElementById('contactModal').addEventListener('click', function (e) {
  if (e.target === this) {
    closeContact();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeContact();
    closeAllDropdowns();
    document.getElementById('nav-toggle').checked = false;
  }
});

// ---------- Dropdown Menus ----------
const dropdownMenus = document.querySelectorAll('.dropdown-menu');
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

function closeAllDropdowns(exceptMenu = null) {
  for (const menu of dropdownMenus) {
    if (menu !== exceptMenu) menu.classList.remove('active');
  }
  for (const toggle of dropdownToggles) {
    if (!exceptMenu || toggle !== exceptMenu.querySelector('.dropdown-toggle')) {
      toggle.setAttribute('aria-expanded', 'false');
    }
  }
}

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();
    const menu = this.parentElement;
    const wasActive = menu.classList.contains('active');

    closeAllDropdowns(menu);

    // Toggle the active class on the current menu
    if (!wasActive) {
      menu.classList.add('active');
      this.setAttribute('aria-expanded', 'true');
    } else {
      this.setAttribute('aria-expanded', 'false');
    }
  });
});

document.addEventListener('click', function (e) {
  if (!e.target.closest('.dropdown-menu')) {
    closeAllDropdowns();
  }
});

document.querySelectorAll('.dropdown-content label').forEach((item) => {
  item.addEventListener('click', function () {
    closeAllDropdowns();
    document.getElementById('nav-toggle').checked = false;
  });
});

document.querySelectorAll('.links > label').forEach((item) => {
  item.addEventListener('click', function () {
    document.getElementById('nav-toggle').checked = false;
  });
});