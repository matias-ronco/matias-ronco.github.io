
/*This is a grocery store shopping list tryout created as a homework free version for my programming academy */

const toDoItems = []; 
const autor = document.querySelector("#createdBy");
autor.innerHTML = "Because full fridges make happy chanchos with smiley chorizos!";

function ToDo (description) {
  this.description = description;  
  this.complete = false;
  }

ToDo.prototype.completeToDo = function() {
  this.complete = true;
}

function buildToDo(todo, index) {
  const toDoShell = document.createElement('div');
  toDoShell.className = 'toDoShell';
  const toDoText = document.createElement('span');
  toDoText.innerHTML = todo.description;
  toDoText.id = index;
  if (todo.complete) {
    toDoText.className = 'completeText';
  }
  toDoShell.appendChild(toDoText);
  toDoText.addEventListener('click', completeToDo);
  
  return toDoShell;
}

function buildToDos(toDos) {
  return toDos.map(buildToDo);
}

function displayToDos() {
  const toDoContainer = document.getElementById('toDoContainer');
  toDoContainer.innerHTML = '';
  const arrayToDos = buildToDos(toDoItems);
  for (var i = 0; i < arrayToDos.length; i++) {
  toDoContainer.appendChild(arrayToDos[i]);
  }
}

function addToDo() {
  const input = document.querySelector('#toDoInput');    
  const newToDo = new ToDo(input.value);
  toDoItems.push(newToDo);
  input.value = '';
  displayToDos();
}

const btn = document.getElementById('addButton');
btn.onclick = addToDo;

function completeToDo(event) {
  const index = event.target.id;
  toDoItems[index].completeToDo()
  displayToDos(); 
}

displayToDos();

