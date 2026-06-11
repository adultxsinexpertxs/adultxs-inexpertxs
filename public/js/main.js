const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
}

const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.getAttribute('href') === current) a.classList.add('active');
});

function generateMemberNumber(){
  return 'AI-' + Math.floor(100000 + Math.random()*900000);
}

const credForm = document.querySelector('#credencialForm');
if(credForm){
  const nameInput = document.querySelector('#nombre');
  const instaInput = document.querySelector('#instagram');
  const cardName = document.querySelector('#cardName');
  const cardInsta = document.querySelector('#cardInsta');
  const cardNum = document.querySelector('#cardNum');
  cardNum.textContent = generateMemberNumber();

  function updateCard(){
    cardName.textContent = nameInput.value || 'NOMBRE INEXPERTX';
    cardInsta.textContent = instaInput.value || '@instagram';
  }
  nameInput.addEventListener('input',updateCard);
  instaInput.addEventListener('input',updateCard);

  credForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    updateCard();
    alert('Tu credencial está lista. Para descargarla como imagen puedes usar html2canvas como en tu versión anterior.');
  });
}
