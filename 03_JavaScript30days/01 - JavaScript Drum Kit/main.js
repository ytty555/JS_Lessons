'use strict';

let ArrOfDivDataKey=ArrOfDivDataKeyCode();

window.addEventListener('keydown', function (e) {
    if (targetKey(e.keyCode)) {
        SetPlayingClass(e.keyCode);        
    }
});

// Проверяем нажата ли целевая клавиша
function targetKey (keyCode) {
    if (ArrOfDivDataKey.indexOf(keyCode + '') != -1) {
        return true;
    } else {
        return false;
    }
}

// Устанавливаем класс, стиль которого подсветит "клавишу" на экране
function SetPlayingClass (key) {
    let div = document.querySelector(`div[data-key="${key}"]`);
    div.classList.toggle('playing');
    
    setTimeout(DelClass, 100);

    function DelClass () {
        div.classList.toggle('playing');
    }

}

// Собираем в массив все div с атрибутом data-key
function ArrOfDivDataKeyCode () {
    let resArr = [];
    let allDataKey = document.querySelectorAll('.key');
    
    for (let i = 0; i < allDataKey.length; i++) {
        resArr.push(allDataKey[i].dataset.key);
    }

    return resArr;
}