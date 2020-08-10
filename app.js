//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //complete button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; //requires inner html to give icon
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //delete button
    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = '<i class="fas fa-trash"></i>'; //requires inner html to give icon
    deletedButton.classList.add('delete-btn');
    todoDiv.appendChild(deletedButton);
    //append to list
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        })
    }

    //complete buttin
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex';
            case 'completed':
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}