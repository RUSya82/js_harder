/*
    Переменная lang может принимать 2 значения: 'ru' 'en'.
    Написать условия при котором в зависимости от значения lang
    будут выводится дни недели на русском или английском языке. Решите задачу
*/

let lang = 'ru';
let daysRU = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//через if
if(lang === 'ru'){
    console.log(daysRU);
} else if (lang === 'en'){
    console.log(daysEn);
} else {
    console.log('Неправильно выбран язык');
}

//через switch-case
switch (lang) {
    case "en":
        console.log(daysEn);
        break;
    case "ru":
        console.log(daysRU);
        break;
    default:
        console.log('Неправильно выбран язык');
        break;
}

//через многомерный массив без ифов и switch.
let days = [daysRU, daysEn];
console.log((lang === 'ru') ? (days[0]) : (lang === 'en') ? (days[1]) : "Неправильно выбран язык");

/*
У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”,
 если значение “Максим” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
 */

let namePerson = "Максим";
console.log((namePerson === "Артем") ? ('Директор') : ((namePerson === 'Максим') ? ('Преподаватель') : ('Студент')));