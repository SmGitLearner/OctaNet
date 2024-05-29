document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const newTask = input.value.trim();
        if (newTask !== '') {
            addTask(newTask);
            input.value = '';
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.textContent = task;

        const buttons = document.createElement('div');
        buttons.className = 'buttons';

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'done';
        doneButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => {
            const newTask = prompt('Edit your task:', li.firstChild.textContent);
            if (newTask !== null && newTask.trim() !== '') {
                li.firstChild.textContent = newTask.trim();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        buttons.appendChild(doneButton);
        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);
        li.appendChild(buttons);
        todoList.appendChild(li);
    }
});
