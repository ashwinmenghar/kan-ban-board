

const btn = document.getElementById("todo-button");
const inputField = document.getElementById("todo-input");
// const taskBlock = document.getElementsByClassName("task-block");
// const addBtn = document.getElementsByClassName("add-button");

const buttons = document.querySelectorAll('.add-button');


buttons.forEach(button => {
  button.addEventListener('click', event => {

    const clickedButton = event.target;
    const parentElement = document.getElementById(clickedButton.parentElement.parentElement.id);
    const value = clickedButton.parentElement.children[0];

    if(parentElement.children[0]){
      const p = document.createElement("p");
      p.setAttribute("draggable", "true");
      p.classList.add("tasks");
      p.innerText = value.value;
  
      attachDragListner(p);
      parentElement.children[0].appendChild(p);
    }


    value.value = "";
  });
});

// addBtn.addEventListener("click", (e) => {
//   console.log(e);
//   const value = inputField.value;

//   if (value.trim()) {
//     const p = document.createElement("p");
//     p.setAttribute("draggable", "true");
//     p.classList.add("tasks");
//     p.innerText = value;

//     attachDragListner(p);
//     taskBlock[0].appendChild(p);
//   }

//   inputField.value = "";
// });
