const taskInput = document.querySelector('.task');
const scheduleInput = document.querySelector('.schedule');
const taskBody = document.querySelector('#task-body');
const form = document.querySelector('form');
const deleteAllBtn = document.querySelector('.delete-all-btn');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const taskValue = taskInput.value.trim();
    const scheduleValue = scheduleInput.value.trim();
    const noTaskRow = taskBody.querySelector('td[colspan="3"]');

    if (taskValue === '' || scheduleValue === '') {
        alert('Please fill in all fields');
        return;
    }

    if (noTaskRow) {
        noTaskRow.parentElement.remove();
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${taskValue}</td>
        <td>${scheduleValue}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    taskBody.appendChild(newRow);

    taskInput.value = '';
    scheduleInput.value = '';

    newRow.querySelector('.delete-btn').addEventListener('click', function () {
        taskBody.removeChild(newRow);
        if (taskBody.children.length === 0) {
            const noTaskRow = document.createElement('tr');
            noTaskRow.innerHTML = '<td colspan="3" class="not">No tasks available.</td>';
            taskBody.appendChild(noTaskRow);
        }
    });
});

if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', function () {
        taskBody.innerHTML = '<tr><td colspan="3" class="not">No tasks available.</td></tr>';
    });
}