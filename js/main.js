// ШИФРОВКА
let encryptionText = document.querySelector('#encryption');

encryptionText.addEventListener('input', function({ target }) {
    // смещение
    const offset = 3;

    // выходная строка
    let out = '';

    // в цикле перебираем строку
    for (let i = 0; i < target.value.length; i++) {
        let code = target.value.charCodeAt(i);
        code += offset;
        // преобразовываем в символы
        out += String.fromCharCode(code);
    }
    // выводим строку в новый элемент
    document.querySelector('#encryption-out').innerHTML = out;
});

// РАСШИФРОВКА
let transcriptText = document.querySelector('#transcript');

transcriptText.addEventListener('input', function({ target }) {
    const offset = 3;
    let out = '';

    for (let i = 0; i < target.value.length; i++) {
        let code = target.value.charCodeAt(i);
        code -= offset;
        out += String.fromCharCode(code);
    }
    document.querySelector('#transcript-out').innerHTML = out;
});
