// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

function saveTask(task) {
    let tasks;

    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

function addTask(e) {
    if (taskInput.value === '') {
        alert('Please input a new task first.');
        return;
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    
    taskList.appendChild(li);
    saveTask(taskInput.value);
    taskInput.value = '';
    e.preventDefault();
};

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure you want to delete this task?')) {
            e.target.parentElement.parentElement.remove();

            let tasks = JSON.parse(localStorage.getItem('tasks'));
            let taskToRemove = e.target.parentElement.parentElement.textContent;

            tasks.forEach(function(task, index) {
                if (task === taskToRemove) {
                    tasks.splice(index, 1);
                }
            });

            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
};

function clearTasks() {
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    localStorage.clear();
};

function filterTasks(e) {
    const filterText = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.collection-item');

    listItems.forEach(function(item) {
        if (item) {
            const task = item.firstChild.textContent;

            if (task.toLowerCase().indexOf(filterText) !== -1) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        }
    });
};

function getTasks() {
    const tasks = localStorage.getItem('tasks');
    
    if (tasks) {
        let jsonTasks = JSON.parse(tasks);

        jsonTasks.forEach(function(task) {
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(task));

            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class="fa fa-remove"></i>';
            li.appendChild(link);
            
            taskList.appendChild(li);
        });
    }
};

// Load all event listeners
function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);

    document.addEventListener('DOMContentLoaded', getTasks);
};

loadEventListeners();