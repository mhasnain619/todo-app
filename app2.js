// const taskInput = document.getElementById('task-input');
// const addTaskBtn = document.getElementById('add-task-btn');
// const taskList = document.getElementById('task-list');


// addTaskBtn.addEventListener('click', () => {
//     const taskVal = taskInput.value
//     if (taskVal.trim() !== '') {
//         alert('Plewse Enter a TAsk')
//     } else {
//         const listItem = document.createElement('li')
//         listItem.innerHTML = `<span class='task-name'>${taskVal}</span><button class='delete-task'>Delete</button>`
//         taskList.appendChild(listItem)
//         taskList = ''
//         taskInput.value = taskVal


//         listItem.querySelector('.delete-task').addEventListener('click', () => {
//             listItem.remove()
//         })
//     }


// })


const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', () => {
    const taskVal = taskInput.value;

    if (taskVal.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class='task-name'>${taskVal}</span><button class='delete-task'>Delete</button>`;
        taskList.appendChild(listItem);

        // Clear the input after adding the task
        taskInput.value = '';

        // Add the event listener for the delete button
        listItem.querySelector('.delete-task').addEventListener('click', () => {
            listItem.remove();
        });
    }
});
