let count = 0;
    let counter = document.querySelector('.counter');
    let incbtn = document.getElementById('inc');
    let decbtn = document.getElementById('dec');
    let resetbtn = document.getElementById('reset');

    incbtn.addEventListener('click', ()=> {
      count++;
      updateColor(count);
    });
    decbtn.addEventListener('click', ()=> {
      if(count>0) count--;
      updateColor(count);
    });
    resetbtn.addEventListener('click', ()=> {
      count = 0;
      updateColor(count);
    });

    function updateColor(count) {
      counter.innerText = count;
      if(count>0) {
        counter.style.color = "green";
      }
      else{
        counter.style.color = "white";
      }
    }