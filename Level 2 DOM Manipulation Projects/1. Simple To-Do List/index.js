const createNewTask = document.getElementById("createNewTask");
// addiing event listner when + sign is clicked
createNewTask.addEventListener("click", () => {
    taskcreated();
});
const taskcreated = () => {
    const task = document.getElementById("taskvalue").value;
    let newdiv = document.createElement("div");
    newdiv.innerHTML = `<div class="tasks-list">

  <div class="first">
      ${task}
  </div>
  <div class="deleteButton"><i class="fa-solid fa-trash"></i></div>
</div>`;
    document.querySelector(".all").appendChild(newdiv);
    const deleteButton = newdiv.querySelector(".deleteButton");
    // removing tasks when delete butoton is created
    deleteButton.addEventListener("click", () => {

        newdiv.remove();
    });
    document.getElementById("taskvalue").value = "";
};