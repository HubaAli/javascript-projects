// const btn= document.getElementById("add");
const inputBox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
 function addTask() {
    if(inputBox.value ===''){
        alert("you must write something");
    }else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}

function deleteTask(e){
    if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
    savedata();
}
listContainer.addEventListener("click",deleteTask, false)

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
listContainer.addEventListener("mouseover", savedata, false)
