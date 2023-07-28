
let btns = document.querySelectorAll("button");
let input = document.querySelector(".box");

for(let i=0; i<btns.length; i++){

    btns[i].addEventListener("click",()=>{
       
        if(btns[i].value === "=") {
            input.value = eval(input.value)
        } else if(btns[i].value === "c") {
            input.value = ""
        }
          else {

              input.value += btns[i].value
          }
        
        }

         
    )
    }

