const searchbox=document.getElementById("search-box");
const addbtn=document.getElementById("add-btn");
var taskbox=document.querySelector(".task-container");
addbtn.addEventListener("click",function(){
    if(searchbox.value===""){
        alert("You need to add task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML=searchbox.value;
        taskbox.appendChild(li);
        let img=document.createElement('img');
        img.setAttribute("src","cancel.png");
        li.appendChild(img);
        saveData();
    }
    searchbox.value="";
})
//deleting the tasks from list
taskbox.addEventListener('click', function (e) {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        saveData();
    }
});
function saveData(){
    localStorage.setItem("data",taskbox.innerHTML);
}
function showTask(){
    taskbox.innerHTML=localStorage.getItem("data");
}
showTask();