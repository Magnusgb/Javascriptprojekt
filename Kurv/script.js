const modal = document.querySelector('#my-modal1');
const modalBtn = document.querySelector('#modal-btn1');
const closeBtn = document.querySelector('.close1');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
  // Fjern eventlisteneren for klik udenfor modalen, når modalen lukkes
  window.removeEventListener('click', outsideClick);
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
