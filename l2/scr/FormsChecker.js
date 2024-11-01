const form1 = document.getElementById('form1');
if (form1) {
    form1.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('phone-error').innerText = '';
    document.getElementById('name-error').innerText = '';
    document.getElementById('sex-error').innerText = '';
    document.getElementById('age-error').innerText = '';

    let err = false;
    let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let extraNums = ['+7', '+3'];
    const name = document.getElementById('name').value.trim();
    const sex = document.querySelector('input[name="sex"]:checked');
    const age = document.getElementById('age').value;
    const phone = document.getElementById('phone').value.trim();

    if (!name) {
        document.getElementById('name-error').innerText = 'Имя обязательно';
        err = true;
    }
    else {
        const parts = name.split(' ');
        if (parts.length !== 3 || parts.some(part => part.split('').some(char => nums.includes(char)))) {
            document.getElementById('name-error').innerText = 'Фио 3 слова с использованием только букв';
            err = true;
        }
    }
    if (!phone) {
        document.getElementById('phone-error').innerText = 'Телефон обязателен';
        err = true;
    }
    else {
        let goodStart = extraNums.some(num => phone.startsWith(num));
        let valid = phone.slice(2).split('').every(numm => nums.includes(numm));
        let length = phone.length >= 10 && phone.length <= 12;
        if (!goodStart || !valid || !length) {
            document.getElementById('phone-error').innerText = 'Телефон должен начинаться с "+3" или "+7" и содержать только цифры (всего 9-11 цифр)';
            err = true;
        }
    }
    if (!sex) {
        document.getElementById('sex-error').innerText = 'Пол обязателен';
        err = true;
    }

    if (!age) {
        document.getElementById('age-error').innerText = 'Возраст обязателен';
        err = true;
    }

    if (!err) {
        console.log('Форма отправлена');
    }
});
}
else {
        console.warn('form1 не найден');
    }
const form2 = document.getElementById('forms2');
    if (form2) {
    form2.addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('name-error').innerText = '';
    document.getElementById('group-error').innerText = '';
    document.getElementById('answer1-error').innerText = '';
    document.getElementById('answer2-error').innerText = '';
    document.getElementById('groups-error').innerText = '';

    let hasError = false;

    const name = document.getElementById('name').value;
    const group = document.getElementById('group').value;
    const answer1 = document.getElementById('answer1').value;
    const answer2Checked = document.querySelectorAll('input[name="answer2"]:checked').length;
    const groups = Array.from(document.getElementById('groups').selectedOptions);

    if (!name) {
        document.getElementById('name-error').innerText = 'Имя обязательно';
        hasError = true;
    }

    if (!group) {
        document.getElementById('group-error').innerText = 'Группа обязательна';
        hasError = true;
    }

    if (!answer1) {
        document.getElementById('answer1-error').innerText = 'Ответ на вопрос 1 обязателен';
        hasError = true;
    }

    if (answer2Checked === 0) {
        document.getElementById('answer2-error').innerText = 'Выберите хотя бы один вариант ответа для вопроса 2';
        hasError = true;
    }

    if (groups.length < 2) {
        document.getElementById('groups-error').innerText = 'Выберите 2 и более формулы для вопроса 3 (через ctrl)';
        hasError = true;
    }

    if (!hasError) {
        console.log('Форма отправлена');
    }
});
}
else {
        console.warn('forms2 не найден');
    }