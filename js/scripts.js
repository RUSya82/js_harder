//Создать переменную num со значением 266219 (тип данных число)
let num = 266219;
let numToArray = numberToArray(num);
let sumOfDigits = summArrayItems(numToArray);

// Вывести в консоль произведение (умножение) цифр этого числа
console.log(sumOfDigits);

// Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
let secondNumber = sumOfDigits ** 3;
//Вывести на экран первые 2 цифры полученного числа
let secondArray = numberToArray(secondNumber);
alert(summArrayItems(secondArray, 0, 2));



/*------------- functions ---------------*/
/**
 * Функция создания массива из цифр переданного числа
 * @param number - число для создания массива
 * @returns Array() если аргумент число, иначе -1
 */
function numberToArray(number) {
    number = +number;
    if(number){
        let arr = [];
        while(number >= 1){
            arr.push(number%10);
            number = Math.floor(number/10);
        }
        //----разворачиваем
        return arr.reverse();
    }
    return -1;
}

/**
 * Функция суммирования числовых элементов массива от стартового индекса на
 * необходимое число элементов, имеет защиту от выхода за пределы, если параметры начала счёта и
 * числа элементов не заданы, считает весь массив
 * @param arr - исходный массив
 * @param start - начальный индекс
 * @param length - сколько членов массива суммировать от начального индекса
 * @returns {number} - сумма, если arr - массив, иначе -1
 */
function summArrayItems(arr, start = 0, length = arr.length) {
    if(Array.isArray(arr)){
        //-------- Защита от выхода за пределы --------------------
        //если start больше длины или отрицателен, то будем считать сначала
        start = (start < arr.length - 1) && (start > 0) ? start : 0;
        //если start-length больше длины массива, то length равно длина массива минус start
        length = ( (start + length)  < arr.length - 1) ? length : arr.length - start;

        //------- считаем
        let summ = 0;
        //----      i-счетчик шагов, j-счетчик по элементам массива
        for(let i = 0, j = start; i < length; i++, j++){
            summ += (+arr[j]) ? arr[j] : 0;
        }
        return summ;
    }
    return -1;
}

