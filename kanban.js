const tasks = document.querySelectorAll(".tasks");
const boards = document.querySelectorAll(".board");
const boardCounts = document.querySelectorAll(".board-count"); 

tasks.forEach((task) => attachDragListner(task));

boards.forEach((board) => {
  board.addEventListener("dragover", (e) => {
    const task = document.querySelector(".is-dragging");
    const node = board.childNodes[1];
    const classes = node.querySelectorAll('.tasks');
    updateCount(node, classes);
    if(node){
      const closestElement = getTheClosestElement(node, e.clientY);
  
      if (closestElement) {
        node.insertBefore(task, closestElement);
      } else {
        // Add at the end
        node.appendChild(task);
      }
    }

  });
});

const getTheClosestElement = (board, yAxis) => {
  const tasksInThisBoard = board.querySelectorAll(".tasks:not(.is-dragging)");

  let closestElement = null;
  let closestDistance = Number.NEGATIVE_INFINITY;

  tasksInThisBoard.forEach((task) => {
    const boundry = task.getBoundingClientRect();
    const top = boundry.top;

    const distance = yAxis - top;

    if (distance < 0 && distance > closestDistance) {
      closestDistance = distance;
      closestElement = task;
    }
  });

  return closestElement;
};


const updateCount = () => {
  boards.forEach((board, idx) => {
    const node = board.childNodes[1];
    const classes = node.querySelectorAll('.tasks');
    boardCounts[idx].innerText = classes.length;
  })
}

updateCount();