document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector("#create-task-form");
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let individualTask = e.target.querySelector("#new-task-description").value;
    taskList(individualTask);
    form.reset();
  });

  const taskList = (todo) => {
    let li = document.createElement('li');
    let listParent = document.querySelector('#tasks')
    let btn = document.createElement('button');
    btn.textContent = ' X ';
    li.textContent = todo;
    li.appendChild(btn);
    listParent.appendChild(li)
    btn.addEventListener('click', () => {
      btn.parentNode.remove();
    })
  };
});
