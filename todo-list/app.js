

let items = []

//variables
var input = document.getElementById('input');
var btn = document.getElementById('btn');
var list = document.getElementById('list');
let id = 0;


//button event listener
btn.addEventListener("click",addTodoItem)

//when click on checkbox
list.addEventListener("click", boxChecked);

//when click on trash icon
list.addEventListener('click',deleteItem);

//when click on clear all button
clear.addEventListener('click',resetList);

//add todo item to the list
function addTodoItem(){

    if(input.value===""){
        alert("enter some text!")

    }
    else{
        var text = input.value;
        let removeItem = `<i class="far fa-trash-alt delete"></i>`;
        var item = `<li id="${id}">${text}${removeItem}     
        <input type="checkbox" id="box-${id}" class="checkboxes">
     
        </li>`
        const position = "beforeEnd";
         list.insertAdjacentHTML(position,item)
         id++;

    }
    
    input.value="";

    
}

function boxChecked(event) {

    const element = event.target;
    if(element.type === "checkbox") {

    element.parentNode.style.textDecoration = "line-through";
    
    }
   
}

//delete item 
function deleteItem(event){
const element = event.target;
 if(element.classList.contains('delete')){
    element.parentElement.remove();
 }
}

//reset list
function resetList(event){
 const element=event.target;
 if(element.id=="clear"){
    for(var i=0;i<id;i++){
     
    }
 }
}


