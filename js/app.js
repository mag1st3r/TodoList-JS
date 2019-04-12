function addEvent(itemList) {
	const checkbox = itemList.querySelector('.checkbox');
	const deleteButton = itemList.querySelector('.delete');
	const editButton = itemList.querySelector('.edit');

	checkbox.addEventListener('change', toggleItem);
	deleteButton.addEventListener('click', deleteItem);
	editButton.addEventListener('click', editItem);

}
function toggleItem() {
	const checkbox = this.parentNode;
	checkbox.classList.toggle('completed');
}
function deleteItem() {
	const deleteItem = this.parentNode;
	todoList.removeChild(deleteItem);

}

function editItem() {
	const listItem = this.parentNode;
	const title = listItem.querySelector('.title');
	const editInput = listItem.querySelector('.textfield');
	const isEditing = listItem.classList.contains('editing');
	const editButton = listItem.querySelector('.edit');

	if(!isEditing) {
		listItem.classList.add('editing');
		editInput.value = title.innerText;
		editButton.innerText = 'Сохранить';
	}else {
		const newText = editInput.value;
		title.innerText = newText;
		editButton.innerText = 'Изменить';
		listItem.classList.remove('editing');
	}
}


function createTodoItem(title) {
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';

	const label = document.createElement('label');
	label.innerText = title;
	label.className = 'title';

	const textfield = document.createElement('input');
	textfield.type = 'text';
	textfield.className = 'textfield';

	const li = document.createElement('li');
	li.className = 'todo-item';

	const editButton = document.createElement('button');
	editButton.className = 'edit';
	editButton.innerText = 'Изменить';

	const deleteButton = document.createElement('button');
	deleteButton.className = 'delete';
	deleteButton.innerText = 'Удалить';

	li.appendChild(checkbox);
	li.appendChild(label);
	li.appendChild(textfield);
	li.appendChild(editButton);
	li.appendChild(deleteButton);

	return li;
}

function addTodoItem(event) {
	event.preventDefault();

	if(addItem.value === '') alert('Введите задание которые хотите выполнить');
	else {
			const listItem = createTodoItem(addItem.value);
			todoList.appendChild(listItem);
			addItem.value = '';
			addEvent(listItem);
	}

}


const todoForm = document.getElementById('todo-form');
const addItem = document.getElementById('add-input');
const todoItems = document.querySelectorAll('.todo-item');
const todoList = document.getElementById('todo-list');

function main() {
	todoForm.addEventListener('submit', addTodoItem);
todoItems.forEach(item => addEvent(item) );
}
main();




