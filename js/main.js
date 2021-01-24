// let textArea = document.querySelector('#in');

// textArea.addEventListener('click', function() {
//     let help = document.querySelector('#help');
    // help.innerHTML = 123456;
// });


// шифровка
document.querySelector('#encryption').oninput = function() {
    // смещение
    const offset = 3;
    // let help = document.querySelector('#help');

    // из кода в символ
    // help.innerHTML = String.fromCharCode(97);

    // получаем строку
    let str = this.value;

    // из символа в код
    console.log(str.charCodeAt(0));

    // выходная строка
    let out = '';

    // в цикле перебираем строку
    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code += offset;
        // преобразовываем в символы
        out += String.fromCharCode(code);
    }
    // выводим строку в новый элемент
    document.querySelector('#out').innerHTML = out;
}

// расшифровка
document.querySelector('#transcript').oninput = function() {
    const offset = 3;
    let str = this.value;
    let out = '';

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        code -= offset;
        out += String.fromCharCode(code);
    }
    document.querySelector('#out2').innerHTML = out;
}
