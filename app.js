document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Function to add new task
    function addTask() {
        const taskValue = taskInput.value.trim();
        if (taskValue !== '') {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="task-name">${taskValue}</span>
                            <button class="delete-task">Delete</button>`;
            taskList.appendChild(listItem);
            taskInput.value = '';

            // Delete task functionality
            listItem.querySelector('.delete-task').addEventListener('click', () => {
                listItem.remove();
            });
        }
    }

    // Event listener for adding tasks
    addTaskBtn.addEventListener('click', addTask);

    // Add task with Enter key
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
