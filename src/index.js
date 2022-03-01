const modal = document.getElementById('modal');
const modalMain = document.getElementById('modalMain');
const form = document.getElementById('form');
const addLinkBtn = document.getElementById('addLinkBtn');
const closeBtn = document.getElementById('closeBtn');

const showModal = () => {
  modal.classList.remove('hidden');
};

const hideModal = () => {
  modal.classList.add('hidden');
};

addLinkBtn.addEventListener('click', () => {
  showModal();
});

modalMain.addEventListener('click', (e) => {
  e.stopPropagation();
});

modal.addEventListener('click', () => {
  hideModal();
});

closeBtn.addEventListener('click', () => {
  hideModal();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  hideModal();
});
