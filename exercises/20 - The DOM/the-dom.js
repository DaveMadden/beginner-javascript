// const p = document.querySelectorAll('img')
// console.log(p)

const pic = document.querySelector('.nice');
// pic.classList.toggle('round');
console.log(pic.classList);



function toggleRound() {
    pic.classList.toggle('round');
  }
  
  pic.addEventListener('click', toggleRound);