let userInput = document.getElementById('task-input');
let addBtn = document.getElementById('add-task-btn');
let taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    let task = userInput.value.trim();
    if (task !== '') {
        let taskItem = document.createElement('li');
        taskItem.innerHTML = `<span class='task-name'>${task}</span> <button class='delete-task'>Delete</button> <button class='edit-task'>Edit</button>`;
        taskList.appendChild(taskItem);
        userInput.value = '';

        // Delete task
        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskItem.remove();
        });

        // Edit task
        taskItem.querySelector('.edit-task').addEventListener('click', () => {
            let editInput = document.createElement('input');
            editInput.value = taskItem.querySelector('.task-name').textContent;
            taskItem.innerHTML = '';
            taskItem.appendChild(editInput);

            // Save the edited task
            let saveBtn = document.createElement('button');
            saveBtn.textContent = 'Save';
            taskItem.appendChild(saveBtn);

            saveBtn.addEventListener('click', () => {
                let updatedTask = editInput.value.trim();
                if (updatedTask !== '') {
                    taskItem.innerHTML = `<span class='task-name'>${updatedTask}</span> <button class='delete-task'>Delete</button> <button class='edit-task'>Edit</button>`;

                    // Re-attach delete and edit functionality after saving
                    taskItem.querySelector('.delete-task').addEventListener('click', () => {
                        taskItem.remove();
                    });
                }
            });
        });
    }
});
