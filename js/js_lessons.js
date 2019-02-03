/*let tasks = [
    'Выучить Javascript',
    'Вторая задача',
    'Третяя задача',
    'Четвертая задача'
];*/

let tasks = JSON.parse( localStorage.getItem('tasks') );

let ul = document.getElementById('TasksList');
let addTaskForm = document.forms["InputToDoTask"];
let inputTaskForm = addTaskForm.elements['todoText'];
let notificationAlertBlock = document.querySelector('.notification-alert');

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

// Отображаем актуальный список задач
function generateList (tasks) {
    clearViewElemChild(ul);

    for (let i = 0; i < tasks.length; i++) {
        ul.appendChild(listTemplate(tasks[i]));
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
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
            tasks.unshift( {
                id: generateId(),
                text: task
            });
            generateList(tasks);

            message( {
                text: 'Task added success',
                cssClass: 'alert-success',
                timeout: 4000
            })
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

    message( {
        text: 'Task deleted',
        cssClass: 'alert-warning',
        timeout: 4000
    })
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
        // Меняем иконку на "Сохранить"
        e.target.classList.toggle('fa-save');
        // Находим родителя нажатой иконки Edit
        let parent = e.target.closest('li');
        let id = parent.dataset.id;
        span = parent.querySelector('span');

        // Если значек нажата иконка Редактирование, то
        // делаем span редактируемым и передаем ему фокус
        if (e.target.classList.contains('fa-save')) {
            span.contentEditable = true;
            span.focus();
        } else {
            span.contentEditable = false;
            span.blur();
            editListItem(id, span.textContent);
        }

     }
})

// Редактируем текст задачи Task для заданного объекта с переданным id
function editListItem(id, newValue) {
    for (let i = 0; i < tasks.length; i++) {
        if ( tasks[i].id === id ) {
            tasks[i].text = newValue;
            break;
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));

    message( {
        text: 'Text update success',
        cssClass: 'alert-success',
        timeout: 4000
    })
}

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

function message(settings) {
    notificationAlertBlock.classList.add(settings.cssClass);
    notificationAlertBlock.textContent = settings.text;
    notificationAlertBlock.classList.add('show');

    setTimeout( function () {
        notificationAlertBlock.classList.remove('show');
    }, settings.timeout );
}

generateList(tasks);