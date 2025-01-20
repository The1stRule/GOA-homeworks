
import { renderTasks } from "./app.js";

let tasks = [];

class Task {
    static tasksID = 0;
    constructor(text, completed) {
        this.text = text;
        this.completed = false;
        this.taskID = Task.tasksID;
        Task.taskIDGenerator();
    }

    static taskIDGenerator() {
        Task.tasksID += 1
    }
}

const addTask = (taskText) => {
    tasks.push(new Task(taskText));
}

const deleteTask = (taskID) => {
    tasks = tasks.filter((curValue) => curValue.taskID !== taskID);
    renderTasks();
}

const changeComplitedState = (taskID) => {
    tasks.forEach((curValue) => {
        if(curValue.taskID === taskID) {
            curValue.completed = !curValue.completed;
        }
    });
    renderTasks();
}

export { tasks, addTask, deleteTask, changeComplitedState };