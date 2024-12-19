
import { tasks, addTask, deleteTask, changeComplitedState  } from "./tasks.js";

const form = document.querySelector('form');
const ul = document.querySelector('ul');

export const renderTasks = () => {
    ul.innerHTML = '';

    tasks.forEach((curValue) => {
        const li = document.createElement('li');
        li.id = curValue.taskID;
        li.innerHTML = `
            ${curValue.text} / completed: ${curValue.completed === true ? "Yes" : "No"}
            <button class="del">Completed</button>
            <button class="change">Delete task</button>
        `
        
        const delBtn = li.querySelector('.del');
        delBtn.onclick = () => changeComplitedState(curValue.taskID);

        const changeBtn = li.querySelector('.change');
        changeBtn.onclick = () => deleteTask(curValue.taskID);

        ul.appendChild(li);
    });
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const taskText = form.task.value;

    addTask(taskText);

    renderTasks();
    console.log(tasks);
    form.reset();
})