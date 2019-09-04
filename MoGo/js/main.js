const acc = document.querySelectorAll('.accordion');
const panels = document.querySelectorAll('.panel');
acc.forEach(item => item.addEventListener('click', toggleItem));
function toggleItem() {
  let panel = this.nextElementSibling;
  panels.forEach(item => item.classList.remove('open'));
  acc.forEach(item => item.classList.remove('active'));
  this.classList.add('active');
  panel.classList.add('open');
}
