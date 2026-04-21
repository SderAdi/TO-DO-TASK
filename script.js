// step - (1)  isme phle selecter create karenge
let taskInput = document.getElementById("taskinput");
let addBtn    = document.getElementById("addbtn");
let taskList    = document.getElementById("tasklist");

// step - (2) function banayenge kab kya karne pe kya hoga
addBtn.addEventListener("click", ()=> {
            let taskText = taskInput.value;  // yaha jo input mein type karenge wo taskText wale var mein store hoga
            if(taskText == ""){
                alert("Bsdk Pahale Task Entre Kar");
                return;
            }
            // yaha ek list create hoga jo li name ke variable mein store hoga
            let li = document.createElement("li"); 
            li.innerText = taskText;  //yaha kuch nhi list mein input list hoga jo ham input box mein likhenge 
            

            let delBtn = document.createElement("button");
            delBtn.innerText = "Delete";

            delBtn.addEventListener("click", ()=>{
                li.remove();
            });
            
            li.appendChild(delBtn);
            taskList.appendChild(li);
            taskInput.value ="";
            
});