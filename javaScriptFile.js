let count = 0;
    let counter = document.querySelector('.counter');
    let incbtn = document.getElementById('inc');
    let decbtn = document.getElementById('dec');
    let resetbtn = document.getElementById('reset');

    incbtn.addEventListener('click', ()=> {
      count++;
      counter.innerText = count;
    });
    decbtn.addEventListener('click', ()=> {
      count--;
      counter.innerText = count;
    });
    resetbtn.addEventListener('click', ()=> {
      count = 0;
      counter.innerText = count;
    });