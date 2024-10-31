
// To Do List App

const btnsArray = document.getElementsByTagName('button');
const mainDiv = document.getElementById("tasks");
const form = document.getElementById('myForm');
const inputsArray = document.getElementsByTagName('input');

window.addEventListener('load', function() {
    mainDiv.innerHTML = localStorage.getItem('list') || '';
})

function changeLocalStorage() {
    localStorage.setItem('list', mainDiv.innerHTML);
}

mainDiv.addEventListener('change', function() {
    changeLocalStorage();
})

function compliteTask(checkbox) {
    const p = checkbox.nextElementSibling;
    if(checkbox.checked) {
        p.style.textDecoration = 'line-through';
        p.style.textDecorationColor = 'gray';
        p.style.color = 'gray';
        p.style.fontSize = "15px";
    } else {
        p.style.textDecoration = 'none';
        p.style.color = 'black';
        p.style.fontSize = "16px";
    }
    changeLocalStorage();
}

function deleteParent(icon) {
    const parentDiv = icon.parentElement.parentElement;
    parentDiv.remove();
    changeLocalStorage();
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const userTask = form.task.value;
    const task = document.createElement('div');

    task.innerHTML = `
    <div class="task-div">
        <div class="task-mark">
            <input type="checkbox" class="checkbox" onchange="compliteTask(this)" />
            <p>${userTask}</p>
        </div>
        <i class="fa-solid fa-xmark" onclick="deleteParent(this)"></i>
    </div>
    `
    mainDiv.appendChild(task);
    form.reset();
    changeLocalStorage();
})

btnsArray[1].addEventListener('click', function() {
    mainDiv.innerHTML = '';
    changeLocalStorage();
})