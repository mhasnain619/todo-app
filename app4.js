let userInput = document.getElementById('task-input')
let addBtn = document.getElementById('addbtn')
let tasks = document.getElementById('task-list')


addBtn.addEventListener('click', () => {
    let newTask = userInput.value.trim();
    if (newTask !== '') {
        let taskItem = document.createElement('li');
        taskItem.innerHTML = `<span class='task-name'>${newTask}</span> <button class='delete-task'>Delete</button> <button class='editBtn'>Edit</button>`;
        tasks.appendChild(taskItem);
        userInput.value = ''; // Reset input field after task is added

        // Add event listener for delete button
        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskItem.remove();
        });

        // edit
        taskItem.querySelector('.editBtn').addEventListener('click', () => {
            let editInput = document.createElement('input')
            editInput.value = taskItem.querySelector('.task-name').textContent
            editInput.setAttribute('class', 'task-name')
            taskItem.innerHTML = ''
            taskItem.appendChild(editInput)


            // Save Button
            let saveBtn = document.createElement('button')
            saveBtn.textContent = 'Save'
            taskItem.appendChild(saveBtn)
            saveBtn.addEventListener('click', () => {
                let updateTask = editInput.value.trim()
                if (updateTask !== '') {
                    taskItem.innerHTML = `<span class='task-name'>${updateTask}</span> <button class='delete-task'>delete</button><button ='edit-task'>Edit</button>`
                    taskItem.querySelector(".delete-task").addEventListener("click", () => {
                        taskItem.remove()
                    })
                }
            })
        })
    } else {
        alert('Please Enter Your Task')
    }
});
