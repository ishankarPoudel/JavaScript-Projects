const createdTasks = [];

//listening events when create task button  is clicked
let createtaskoptions = document.querySelector(".createtaskoptions");
let main = document.querySelector(".main");
let headingName = document.querySelector("#headingname");
let dueDate = document.querySelector("#duedate");
let heroDiv = document.querySelector(".hero");
let error = document.querySelector(".error");
let newDiv;

const createBtn = document.querySelector(".createtask");
createBtn.addEventListener("click", () => {
    showMore();
});
const showMore = () => {
    createtaskoptions.classList.remove("active");
    main.style.backgroundColor = "#7F7F7F79";
};
//getting done and cancel button
const doBtn = document.querySelector("#done");
const cancelBtn = document.querySelector("#cancel");
cancelBtn.addEventListener("click", () => {
    error.innerText = "";
    dueDate.value = "";
});

//listening event for  do and cancel buttons are clickeds
doBtn.addEventListener("click", () => {
    generateTasks();
    main.style.backgroundColor = "";
});
//listening event for cancel buttons
cancelBtn.addEventListener("click", () => {
    createtaskoptions.classList.add("active");
    main.style.backgroundColor = "";
});
//getting all the references of the todo list item eg taskname deadline etc

let taskName = document.querySelector(".taskname");
let status = document.querySelector("#status");
let date = document.querySelector("#date");
let edit = document.querySelector("#edit");

//this function is  invoked when the done button is clicked!!!!
const generateTasks = () => {
    if (headingName.value.trim() === "" || dueDate.value.trim() === "") {
        error.innerText = "Enter the task name & due date";

        return;
    }

    //getting all the references from the createTask button
    newDiv = document.createElement("div");
    newDiv.className = "taskslist";
    newDiv.insertAdjacentHTML(
        "afterbegin",
        `
            <div class="taskname">${headingName.value}</div>
            <div class="taskname" id="status">Mark as completed <input type="checkbox" id="completedstatus" name="Completed" required value=""></div>
            <div class="taskname" id="date" required>${dueDate.value}</div>
            <div class="taskname edit">Edit <i class="fa-solid fa-pen-to-square"></i></div>
            <div class="taskname delete" >Delete <i class="fa-regular fa-trash-can"></i></div>
            
         `
    );
    createdTasks.push(newDiv);
    heroDiv.appendChild(newDiv);
    headingName.value = "";
    dueDate.value = "";
    createtaskoptions.classList.add("active");
    error.innerText = "";




    //deleting  tasks
    heroDiv.addEventListener("click", (event) => {
        if (event.target && event.target.nodeName == "I") {
            let taskElement = event.target.parentNode.parentNode;
            taskElement.remove();
        }
    });

};