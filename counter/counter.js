const title = document.querySelector("#title");
const decrement = document.querySelector("#dec");
const reset = document.querySelector("#res");
const increment = document.querySelector("#inc");
let curval=0;

// increment.addEventListener("click",()=>{
//  curval++;
//  title.textContent=curval;
// });

// reset.addEventListener("click",()=>{
//  curval=0;
//  title.textContent=curval;
// });

// decrement.addEventListener("click",()=>{
//  curval--;
//  title.textContent=curval;
// });

increment.addEventListener('click',increase);
function increase()
{ 
    curval++;
      title.textContent=curval; 
}



reset.addEventListener('click',zero);
function zero()
{ 
    curval=0;
     title.textContent=curval; 
}



decrement.addEventListener('click',reduce);
function reduce()
{ 
      curval--;
      title.textContent=curval; 
}


