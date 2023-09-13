console.log(123)

const modal1 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#modal-btn1');
const closeBtn1 = document.querySelector('.close1');

// Events
modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick1);
// Open
function openModal1() {
  modal1.style.display = 'block';
}
// Close
function closeModal1() {
  modal1.style.display = 'none';
}
// Close If Outside Click
function outsideClick1(e) {
  if (e.target == modal) {
    modal1.style.display = 'none';
  }
}

