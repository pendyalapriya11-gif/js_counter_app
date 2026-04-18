let count = localStorage.getItem("count");
if(count===null)count=0;
else count = Number(count);

    let counter = document.querySelector('.counter');
    let incbtn = document.getElementById('inc');
    let decbtn = document.getElementById('dec');
    let resetbtn = document.getElementById('reset');
    updateColor();
    incbtn.addEventListener('click', ()=> {
      count++;
      updateColor();
    });
    decbtn.addEventListener('click', ()=> {
      if(count>0) count--;
      updateColor();
    });
    resetbtn.addEventListener('click', ()=> {
      count = 0;
      updateColor();
    });

    function updateColor() {
      counter.innerText = count;

      localStorage.setItem("count", count);
      
      if(count>0) {
        counter.style.color = "green";
      }
      else{
        counter.style.color = "white";
      }
    }