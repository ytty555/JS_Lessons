/*let tasks = [
    'Выучить Javascript',
    'Вторая задача',
    'Третяя задача',
    'Четвертая задача'
];*/

let tasks = [
    {
        id: 'fk2gVwuW6IhDOUZ',
        text: 'One task'

    }
];

let ul = document.getElementById('TasksList');
let addTaskForm = document.forms["InputToDoTask"];
let inputTaskForm = addTaskForm.elements['todoText'];

let oldValueTaskForEdit = '';
let newValueTaskForEdit = '';

// Генерируем ID из 15 знаков
function generateId() {
    let id = '';
    let words = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

    for (let i = 0; i < 15; i++) {
        let position = Math.floor(Math.random() * words.length);
        id += words[position];
     }

     return id;
}

function generateList (tasks) {
    clearViewElemChild(ul);

    for (let i = 0; i < tasks.length; i++) {
        ul.appendChild(listTemplate(tasks[i]));
    }
}

// Создаем гипертекстовую строку по правилам Bootstrap 4
function listTemplate(task) {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex align-items-center';
    li.setAttribute('data-id', task.id);

    let span = document.createElement('span');
    span.textContent = task.text;
    li.appendChild(span);

    // Создаем таг i для пиктограммы мусорной корзины и редактирования
     let iTresh = document.createElement('i');
    let iEdit = document.createElement('i');
     iTresh.className = 'fas fa-trash-alt fa-fw deleteTaskIcon';
     iEdit.className = 'fas fa-edit  ml-auto  mr-2 editTaskIcon';

    li.appendChild(iEdit);
    li.appendChild(iTresh);


    return li;
}

// Добавление новой задачи
function  addTask(task) {
        if (task !== '') {
            tasks.unshift(task);
            generateList(tasks);
        }
}

// Очищает отображение
function clearViewElemChild(elem) {
    elem.innerHTML = '';
}

// Удаляет все элементы
function deleteAllElemChild() {
    if (confirm('Вы действительно хотите удалить все задачи?')) {
        tasks = [];
        clearViewElemChild(ul);
    }
}

// Удаляем выбранную Task
function deleteListItem(id) {
    for (let i = 0; i < tasks.length; i++) {
        if ( tasks[i].id === id ) {
            tasks.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Сохраняем в localStorage
}

// Слушаем события от детей-элементов ul
ul.addEventListener('click', function (e) {
    // если нажата иконка Удалить, то...
    if ( e.target.classList.contains('deleteTaskIcon') ) {
        let parent = e.target.closest('li');
        let id = parent.dataset.id;
        deleteListItem(id);
        parent.remove();
    }

    // если нажата иконта Редактировать, то...
    if ( e.target.classList.contains('editTaskIcon') ) {
        // Находим родителя нажатой иконки Edit
        let parent = e.target.closest('li');
        span = parent.querySelector('span');
        // делаем span редактируемым
        span.contentEditable = true;
        span.focus();
        // Получаем старое значение Task и записываем
        // его в глобальную переменную
        oldValueTaskForEdit = span.innerHTML;
     }
})

// Слушаем событие от кнопки с функцией submit
addTaskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let addTaskTxt = inputTaskForm.value;
    if ( !addTaskTxt ) {
        inputTaskForm.classList.add('is-invalid');
    } else {
        inputTaskForm.classList.remove('is-invalid');
        addTask(addTaskTxt);
        addTaskForm.reset();
    }

})

generateList(tasks);