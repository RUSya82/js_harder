//в start попадает функция, в замыкании 77
let start = game();
//запускаем игру
start();

/**
 * Функция игры с замыканием
 * @param targetNumber
 * @returns {function}
 */
function game(targetNumber) {
    if (targetNumber < 0 || targetNumber > 100 || !targetNumber){
        targetNumber = getRandomInRange(0, 100);//если передали не правильное число, рандомим его
    }
    let gameCounter = 10;
    console.log(targetNumber);
    let message2 = ''; //дополнительное сообщение о величине числа(больше - меньше)
    const getNumber = function (message) {
        //если сообщение пользователю пустое, то ставим умолчание
        if(!message){
            message = 'Введите число от 0 до 100';
        }
        let userNumber = getNumberFromUser(message2 + `\n` + message);
        if(userNumber == null){         //если нажата Отмена
            alert("Пока, друг!");
            return 0;
        } else if(userNumber == targetNumber) {         //если число угадано
            if(confirm("Ты победил!!!!!!" + `\n` + "Хочешь сыграть ещё??")){
                gameCounter = 10;
                targetNumber = getRandomInRange(0, 100);
                game(targetNumber);
            }else{
                alert("Пока, друг!");
                return 0;
            }
        } else if (userNumber > targetNumber) {
            gameCounter--;
            if(gameCounter == 0){
                if(confirm("Попытки закончились!" + `\n` + "Хочешь сыграть ещё??")){
                    gameCounter = 10;
                    targetNumber = getRandomInRange(0, 100);
                    game(targetNumber);
                }else{
                    return 0;
                }

            }
            message2 = `Загаданное число меньше! \n Осталось попыток: ${gameCounter}`;
        } else if (userNumber < targetNumber) {
            gameCounter--;
            if(gameCounter == 0){
                if(confirm("Попытки закончились!" + `\n` + "Хочешь сыграть ещё??")){
                    gameCounter = 10;
                    game();
                }else{
                    return 0;
                }

            }
            message2 = `Загаданное число больше! \n Осталось попыток: ${gameCounter}`;
        }
        getNumber(message);
    }
    return getNumber;
}

/**
 * Функция получает от пользователя число, переделал на рекурсив
 * @param message 1
 * @param defaultValue
 * @returns {number}
 */
function getNumberFromUser(message, defaultValue){
    let moneyTemp = 0;
    let defaultValueTemp = isNumber(defaultValue) ? defaultValue : '';
    moneyTemp = prompt(message, defaultValueTemp);
    if (!isValidValue(moneyTemp)){
        alert(`Вводить можно только числа!!!\n` + message);//вывод доп сообщения для пользователя
        moneyTemp = getNumberFromUser(message, defaultValue); //рекурсивно вызываем себя
    }
    return moneyTemp;
}

/**
 * Проверяет можно ли преобразовать переменную в число
 * ВНИМАИЕ!!! Не меняет само число, а возвращает только bool
 * @param number
 * @returns {boolean|boolean}
 */
function isNumber(number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
}

/**
 * Функция проверки ввода
 * @param val - параметр - проверяемое число
 * @returns {boolean} - true- число подходит, иначе нет
 */
function isValidValue(val) {
    if(val === null){
        return true;
    }
    if(isNumber(val)){
        return true;
    }
    return  false;
}

/**
 * Генерация случайного числа в диапазоне
 * стырил (зато честно)))
 * @param min - минимальное число диапазона
 * @param max - максимальное число диапазона
 * @returns {*}
 */
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}