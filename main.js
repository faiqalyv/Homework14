var dropTarget = document.querySelector(".drop-target");
var draggables = document.querySelectorAll(".drag-task");


draggables.forEach(item => {
  item.addEventListener("dragstart", function(ev) {
    ev.dataTransfer.setData("srcId", ev.target.id);
  });
})

dropTarget.addEventListener('dragover', function(ev) {
  ev.preventDefault();
});

dropTarget.addEventListener('drop', function(ev) {
  ev.preventDefault();
  let target = ev.target;
  let droppable = target.classList.contains('drag-box');
  let srcId = ev.dataTransfer.getData("srcId");

  if (droppable) {
    ev.target.appendChild(document.getElementById(srcId));
  }
});