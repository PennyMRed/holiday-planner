let vacationTodosArr = [
    "Find Suitcase",
    "Book Fights",
    "Find Passport"
]

const vacationTodosUl = document.getElementById("vacationTodosUl")
const todoInput = document.getElementById("todoInput")
document.getElementById('form').addEventListener('submit', addTodo)

function addTodo(e) {
    e.preventDefault();
    vacationTodosArr.push(todoInput.value);
    createTodo(todoInput.value)
}

function createTodo(todo) {
    const todoLabel = todo.split(" ").join("")
    const li =  document.createElement("li")
    li.innerHTML = `
                <input type="checkbox" id="${todoLabel}" name="${todoLabel}">
                <label for"${todoLabel}">${todo}</label>
                ` 
    vacationtodosUl.appendChild(li)
    todoInput.value = '';
}

for (let i=0; i < vacationTodosArr.length; i++ ) {
     const todo = vacationTodosArr[i]
     createTodo(todo)
}