let button = document.getElementById("submit");
let input = document.getElementById("userInput");
let list = document.getElementById("itemList");


function makeList(){
    if(input.value.length>0){
        list.innerHTML+=`<div class="item">
                        <span class="itemName">${input.value}</span>
                        <button class="delete" type="button">X</button>
                     </div>`;
        

        //DELETE BUTTON
        let currentTask=document.querySelectorAll(".delete");
        for(let i=0;i<currentTask.length;i++){
            currentTask[i].onclick= function(){
                this.parentNode.remove();
            }
        }
        

        //CHANGE COLOR
        let items=document.querySelectorAll(".item");
        for(let i=0;i<items.length;i++){
            items[i].onclick= function(){
                items[i].classList.toggle("change");
            }
        }
        


    }
    else{
        //FOR EMPTY INPUT FIELD
        alert("Please Enter a Task");
    }
}

button.addEventListener("click",makeList);