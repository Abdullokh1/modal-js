let openBtn = document.getElementById('OpenBtn');
let cloesBtn = document.getElementById('CloesBtn');
let box = document.getElementById('modalBox');

openBtn.addEventListener('click', function(){
  box.classList.add('show');
})