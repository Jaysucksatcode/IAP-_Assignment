document.addEventListener('DOMContentLoaded', () => {

  const submitOption = document.getElementById('submit');
  const taskTextBox = document.getElementById('task');
  const listOfTasks = document.getElementById('tasks');

  submitOption.disabled = true;

  taskTextBox.addEventListener('input',  () => {
    submitOption.disabled = !taskTextBox.value.trim();
  });

  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    const task = taskTextBox.value.trim();

    const listItem = document.createElement('li');
    listItem.textContent = task;

    listOfTasks.appendChild(listItem);

    taskTextBox.value = '';

    submitOption.disabled = true;

    return false;
  });
});